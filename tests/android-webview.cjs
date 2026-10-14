/* Run with Node 22+: node tests/android-webview.cjs [path-to-chrome].
   Uses a disposable Chrome profile; never touches the user's browser/save. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { spawn } = require('node:child_process');
const vm = require('node:vm');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  // Verify fallbacks independently without borrowing APIs from modern Chrome.
  const context = vm.createContext({ setTimeout, clearTimeout });
  vm.runInContext(`Object.fromEntries = undefined; function Element() {};
    var window = { innerHeight: 640, addEventListener: function() {} };
    var document = { documentElement: { style: { setProperty: function(k,v) { window.height = v; } } } };`, context);
  vm.runInContext(fs.readFileSync('js/compat.js', 'utf8'), context);
  assert.equal(vm.runInContext('Object.fromEntries([["x", 3]]).x', context), 3);
  assert.equal(vm.runInContext('window.height', context), '640px');
  vm.runInContext('var completed = false; new Element().animate([], {duration: 1}).onfinish = function() { completed = true; };', context);
  await delay(20);
  assert.equal(vm.runInContext('completed', context), true);

  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'tiemtra-webview-test-'));
  const chrome = spawn(process.argv[2] || 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'
  ], { windowsHide: true, stdio: 'ignore' });
  let socket;
  const errors = [];
  try {
    const portFile = path.join(profile, 'DevToolsActivePort');
    for (let i = 0; !fs.existsSync(portFile) && i < 100; i++) await delay(100);
    assert.ok(fs.existsSync(portFile), 'Chrome debugging endpoint started');
    const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
    const pages = await (await fetch('http://127.0.0.1:' + port + '/json')).json();
    socket = new WebSocket(pages.find(p => p.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
    let id = 0;
    const pending = new Map();
    socket.onmessage = event => {
      const msg = JSON.parse(event.data);
      if (msg.id) { const p = pending.get(msg.id); pending.delete(msg.id); if (msg.error) p.reject(msg.error); else p.resolve(msg.result); }
      if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails.text + ' ' + (msg.params.exceptionDetails.exception?.description || ''));
      if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') errors.push(msg.params.args.map(a => a.value || a.description).join(' '));
    };
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const requestId = ++id; pending.set(requestId, { resolve, reject });
      socket.send(JSON.stringify({ id: requestId, method, params }));
    });
    const evaluate = async expression => {
      const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
      return result.result.value;
    };
    await send('Runtime.enable'); await send('Page.enable');
    await send('Network.enable'); await send('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 });
    await send('Emulation.setDeviceMetricsOverride', { width: 360, height: 640, deviceScaleFactor: 1, mobile: true });
    await send('Page.addScriptToEvaluateOnNewDocument', { source: 'window.PointerEvent = undefined; Object.fromEntries = undefined;' + (process.env.TIEMTRA_NATIVE_ANIMATIONS ? '' : 'Element.prototype.animate = undefined;') });
    await send('Page.navigate', { url: pathToFileURL(path.resolve('index.html')).href });
    for (let i = 0; i < 100 && !await evaluate('!!window.debugGame'); i++) await delay(100);
    assert.equal(await evaluate('!!window.debugGame'), true, 'offline file:// game boots');
    assert.ok(await evaluate('document.querySelector("#intro [data-act=play]") !== null'));
    assert.equal(await evaluate('Math.round(document.querySelector("#app").getBoundingClientRect().height)'), 640);
    await evaluate(`debugGame.S.firstRun = false; debugGame.S.settings.hints = false;
      document.querySelector('#intro [data-act=play]').click(); debugGame.fillStock(100);
      document.querySelector('#hud [data-act=settings]').click();`);
    for (const [index, season, label] of [[2,'spring','Mùa Xuân'],[3,'summer','Mùa Hạ'],[4,'autumn','Mùa Thu'],[5,'winter','Mùa Đông']]) {
      await evaluate(`document.querySelector('[data-act=style]').click(); document.querySelector('.choice[data-i="${index}"]').click();`);
      assert.equal(await evaluate('debugGame.S.settings.style'), season, 'season music selection');
      assert.ok(await evaluate(`document.querySelector('[data-act=style]').textContent.includes('${label}')`), 'selected season label');
    }
    await evaluate(`document.querySelector('[data-modal-x]').click(); debugGame.G.startShift();`);
    await delay(150);
    assert.equal(await evaluate('!!document.querySelector("#sell")'), true);
    assert.equal(await evaluate('document.querySelectorAll(".image-jar .sale-art").length'), 6, 'all tea dispensers use supplied artwork');
    assert.equal(await evaluate('document.querySelectorAll(".image-tray .sale-art").length'), 16, 'all topping trays use supplied artwork');
    assert.equal(await evaluate('document.querySelectorAll(".qav .customer-sprite").length > 0'), true, 'customer portraits use supplied artwork');
    assert.equal(await evaluate(`Promise.all(['kawaii-sheet.png'].map(name => new Promise((resolve,reject) => {
      var image = new Image(); image.onload = () => resolve(true); image.onerror = () => reject(Error(name)); image.src = 'assets/sell/' + name;
    }))).then(images => images.length)`), 1, 'new cartoon sheet loads offline');
    if (process.env.TIEMTRA_SCREENSHOT) {
      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(process.env.TIEMTRA_SCREENSHOT, Buffer.from(screenshot.data, 'base64'));
    }
    await evaluate(`document.querySelector('[data-act=cup][data-size=M]').click();`);
    assert.equal(await evaluate('debugGame.SH.board.size'), 'M');
    // Seal while the cup is returning from a dispenser; then interrupt with UI.
    await evaluate(`debugGame.speed(0); debugGame.G.startPour('traSua'); debugGame.G.updateShift(1);`);
    await delay(80);
    assert.ok(await evaluate('!!document.querySelector("#cupslot.pouring-art .pour-sprite")'), 'pouring uses sprite artwork');
    if (process.env.TIEMTRA_SCREENSHOT) {
      await delay(400);
      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(process.env.TIEMTRA_SCREENSHOT.replace('.png', '-pouring.png'), Buffer.from(screenshot.data, 'base64'));
    }
    await evaluate(`document.querySelector('[data-act=top][data-t=tcDen]').click();
      document.querySelector('[data-act=seal]').click();`);
    assert.equal(await evaluate('!!document.querySelector("#cupslot .cup > .cup-attached-lid")'), true, 'lid is attached to the moving cup');
    assert.ok(await evaluate('document.querySelectorAll("#brewfx .fx-ball").length > 0'), 'pearls are moving before opening UI');
    assert.equal(await evaluate(`Number(getComputedStyle(document.querySelector('#brewfx')).zIndex) < Number(getComputedStyle(document.querySelector('#modal')).zIndex)`), true, 'effects sit below dialogs');
    await evaluate(`document.querySelector('#hud [data-act=pause]').click()`);
    for (const key of ['music', 'sfx']) {
      await evaluate(`document.querySelector('[data-act=mute][data-k=${key}]').click()`);
      assert.equal(await evaluate(`document.querySelector('[data-act=mute][data-k=${key}]').textContent`), '🔇', 'mute updates icon immediately');
      await evaluate(`document.querySelector('[data-act=mute][data-k=${key}]').click()`);
      assert.equal(await evaluate(`document.querySelector('[data-act=mute][data-k=${key}]').textContent`), '🔊', 'unmute updates icon immediately');
      await evaluate(`for(var count=0;count<7;count++) document.querySelector('[data-act="vol-"][data-k=${key}]').click()`);
      assert.equal(await evaluate(`debugGame.S.settings.${key}`), 0, 'decreasing volume reaches exact zero');
      assert.equal(await evaluate(`document.querySelector('[data-act=mute][data-k=${key}]').textContent`), '🔇');
      await evaluate(`var slider=document.querySelector('[data-slider=${key}]'); slider.value=30; slider.dispatchEvent(new Event('input'));`);
      assert.equal(await evaluate(`document.querySelector('[data-act=mute][data-k=${key}]').textContent`), '🔊', 'slider updates mute icon');
    }
    assert.equal(await evaluate('document.querySelectorAll("#brewfx > *, .fx-lid").length'), 0, 'opening UI clears pearls and lid');
    await delay(150);
    assert.equal(await evaluate('document.querySelectorAll("#brewfx > *, .fx-lid").length'), 0, 'pending frames cannot recreate effects');
    await evaluate(`document.querySelector('[data-act=resume]').click(); debugGame.G.updateShift(2);
      debugGame.G.trashCup(); document.querySelector('[data-act=cup][data-size=M]').click();`);
    await evaluate(`debugGame.speed(0);
      for (var step = 0; step < 240 && !debugGame.SH.queue.length; step++) debugGame.G.updateShift(1);
      var customer = debugGame.SH.queue[0];
      Object.assign(debugGame.SH.board, {size:customer.order.size, tea:customer.order.tea,
        flavor:customer.order.flavor, tops:customer.order.tops.slice(), fill:1, phase:'ready'});`);
    await delay(100);
    await evaluate(`document.querySelector('[data-act=boardTap]').click()`);
    assert.equal(await evaluate('debugGame.S.today.cups'), 1, 'serving works without native animations');
    await evaluate(`document.querySelector('[data-act=cup][data-size=M]').click()`);
    const snapshot = await evaluate(`debugGame.speed(0); debugGame.G.updateShift(15); debugGame.save();
      ({t:debugGame.SH.t, money:debugGame.S.money, queue:debugGame.SH.queue.length, cups:debugGame.E.stockQty('lyM')})`);
    await evaluate('window.__testReloadOld = true');
    await send('Page.reload');
    for (let i = 0; i < 100; i++) {
      try { if (await evaluate('!window.__testReloadOld && !!window.debugGame')) break; } catch (e) { /* navigation changes execution context */ }
      await delay(100);
    }
    assert.equal(await evaluate('debugGame.S.phase'), 'sell');
    assert.equal(await evaluate('debugGame.S.settings.style'), 'winter', 'season music survives reload');
    assert.equal(await evaluate('debugGame.SH.board.size'), 'M');
    assert.equal(await evaluate('debugGame.SH.t'), snapshot.t, 'intro does not advance restored shift');
    assert.equal(await evaluate('debugGame.S.money'), snapshot.money);
    assert.equal(await evaluate('debugGame.E.stockQty("lyM")'), snapshot.cups);
    assert.equal(await evaluate('debugGame.SH.queue.length'), snapshot.queue);
    await evaluate(`document.querySelector('#intro [data-act=play]').click()`);
    assert.ok(await evaluate('!!document.querySelector("[data-act=resume]")'), 'restored shift opens pause');
    await evaluate(`debugGame.crush().open()`);
    assert.ok(await evaluate('!!document.querySelector("#crushBoard")'));
    await evaluate(`var cell = document.querySelector('#crushBoard .mt');
      var start = new Event('touchstart', {bubbles:true, cancelable:true});
      Object.defineProperty(start, 'touches', {value:[{clientX:20, clientY:20}]}); cell.dispatchEvent(start);
      var end = new Event('touchend', {bubbles:true, cancelable:true});
      Object.defineProperty(end, 'changedTouches', {value:[{clientX:20, clientY:20}]}); cell.dispatchEvent(end);`);
    assert.ok(await evaluate('!!debugGame.crush().Q.sel'), 'Touch fallback selects mini-game tile');
    await evaluate(`debugGame.pearl().open(); document.querySelector('#pBody [data-act=start]').click();`);
    assert.equal(await evaluate('document.querySelectorAll("#pBoard .pearl-icon").length'), 36, 'new pearl icons');
    if (process.env.TIEMTRA_PEARL_SCREENSHOT) {
      await delay(350);
      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(process.env.TIEMTRA_PEARL_SCREENSHOT, Buffer.from(screenshot.data, 'base64'));
    }
    const setPearlPair = `var game=debugGame.pearl().state;
      game.b=Array.from({length:6},(_,r)=>Array.from({length:6},(_,c)=>(r+c)%5));
      game.b[0][1]=0; debugGame.pearl().render();`;
    await evaluate(setPearlPair);
    await evaluate(`document.querySelector('#pBoard [data-r="0"][data-c="0"]').click()`);
    assert.equal(await evaluate('debugGame.pearl().state.score'), 4, 'two pearls score 2 squared');
    assert.ok(await evaluate('document.querySelectorAll("#pFx > *").length > 0'), 'explosion and score-flight effects');
    await evaluate(`document.querySelector('#pBoard [data-r="0"][data-c="0"]').click()`);
    assert.equal(await evaluate('debugGame.pearl().state.score'), 4, 'rapid taps cannot count one explosion twice');
    await delay(500);
    await evaluate(setPearlPair);
    await evaluate(`document.querySelector('#pBoard [data-r="0"][data-c="0"]').click()`);
    assert.equal(await evaluate('debugGame.pearl().state.score'), 12, 'second explosion earns combo x2');
    assert.equal(await evaluate('document.querySelector("#pLastGain").textContent'), '+8');
    assert.equal(await evaluate('document.querySelector("#pPopped").textContent'), '4');
    if (process.env.TIEMTRA_PEARL_SCREENSHOT) {
      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(process.env.TIEMTRA_PEARL_SCREENSHOT.replace('.png', '-combo.png'), Buffer.from(screenshot.data, 'base64'));
    }
    const cashBeforePearl = await evaluate('debugGame.S.money');
    await evaluate('debugGame.pearl().end(); debugGame.pearl().end();');
    assert.equal(await evaluate('debugGame.S.money'), cashBeforePearl + 720, 'reward is paid once');
    assert.equal(await evaluate('document.querySelectorAll(".pearl-fx > *").length'), 0, 'results clear transient effects');
    await evaluate(`document.querySelector('#pBody [data-act=x]').click(); debugGame.pearl().open(); document.querySelector('#pBody [data-act=start]').click();`);
    await evaluate(setPearlPair);
    await evaluate(`document.querySelector('#pBoard [data-r="0"][data-c="0"]').click(); document.querySelector('#pBody').closest('.modal').querySelector('[data-modal-x]').click();`);
    await delay(700);
    assert.equal(await evaluate('debugGame.pearl().state'), null, 'closing stops the pearl game');
    assert.equal(await evaluate('document.querySelectorAll(".pfx-ring,.pfx-dot,.pearl-gain").length'), 0, 'no particle leaks into other UI');
    assert.equal(await evaluate(`var originalSet = Storage.prototype.setItem;
      Storage.prototype.setItem = function() { throw Error('storage disabled'); };
      var saved = debugGame.save(); Storage.prototype.setItem = originalSet; saved;`), false);
    assert.ok(await evaluate(`document.querySelector('#toasts').textContent.includes('Không lưu được tiến trình')`), 'storage failure is visible');
    assert.deepEqual(errors, [], 'no runtime or game-loop errors');
    console.log('PASS: offline mobile boot, artwork, cup input/serving, moving-cup lid, UI effect cleanup, saved shift restoration, Touch mini-game and storage warning.');
  } finally {
    if (socket) socket.close();
    chrome.kill();
    // Keep the disposable profile in the OS temp directory for failure diagnosis.
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
