/* Offline, real-browser checks for the five requests in the second Word file. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {spawn} = require('node:child_process');
const delay = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'tiemtra-counter-fit-'));
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',
    ['--headless=new', '--disable-gpu', '--no-first-run', '--no-sandbox', '--allow-file-access-from-files', '--remote-debugging-port=0', '--user-data-dir='+profile, 'about:blank'],
    {windowsHide: true, stdio: 'ignore'});
  let socket, checks = 0;
  const errors = [];
  try {
    const portFile = path.join(profile, 'DevToolsActivePort');
    let port;
    for (let i=0; !port && i<100; i++) { try { port=fs.readFileSync(portFile,'utf8').split('\n')[0].trim(); } catch {} if(!port) await delay(100); }
    const pages = await (await fetch('http://127.0.0.1:'+port+'/json')).json();
    socket = new WebSocket(pages.find(p=>p.type==='page').webSocketDebuggerUrl);
    await new Promise((r,j)=>{socket.onopen=r;socket.onerror=j;});
    let id=0; const pending=new Map();
    socket.onmessage = e => {
      const m=JSON.parse(e.data);
      if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}
      if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    };
    const send=(method,params={})=>new Promise((resolve,reject)=>{const requestId=++id;pending.set(requestId,{resolve,reject});socket.send(JSON.stringify({id:requestId,method,params}));});
    const run=async expression=>{let r;try{r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});}catch(e){throw Error(JSON.stringify(e)+' at '+expression);}if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description);return r.result.value;};
    const check=(v,msg)=>{assert.ok(v,msg);checks++;};
    await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable');
    await send('Network.emulateNetworkConditions',{offline:true,latency:0,downloadThroughput:0,uploadThroughput:0});
    await send('Emulation.setDeviceMetricsOverride',{width:360,height:640,deviceScaleFactor:1,mobile:true});
    await send('Page.navigate',{url:pathToFileURL(path.resolve('index.html')).href});
    for(let i=0;i<100 && !await run('!!window.debugGame');i++)await delay(100);
    await run(`var D=debugGame;D.S.settings.tutorialDone=true;D.S.settings.hints=false;D.S.settings.tut={home:true,sell:false};
      document.querySelector('[data-act=play]').click();D.S.settings.tutorialDone=true;D.S.settings.hints=false;D.S.settings.tut={home:true,sell:false};D.unlockAll();D.fillStock(100);D.G.startShift();
      D.S.settings.tut.sell=true;D.flush();D.speed(0);D.SH.ev.bo=[];D.SH.ev.ins=[];`);
    // All flavors and topping columns are present: test the largest counter content.
    for(const [width,height] of [[320,568],[360,640],[393,740],[412,844],[520,900],[640,360]]){
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:true});
      await delay(150); await run('D.counterFrame()');
      const r=await run(`(()=>{const v=document.querySelector('#view'),s=document.querySelector('#sell'),f=document.querySelector('#lobbyGo');const vr=v.getBoundingClientRect(),fr=f.getBoundingClientRect();return {overflow:v.scrollHeight-v.clientHeight,rootOverflow:s.scrollHeight-s.clientHeight,foot:fr.bottom<=vr.bottom+1,controls:[...s.querySelectorAll('.supply-row,.equip-strip,#flavs,#trays,.shelf')].every(x=>x.getBoundingClientRect().bottom<=vr.bottom+1),height:s.clientHeight,available:v.clientHeight};})()`);
      check(r.overflow<=1 && r.rootOverflow<=1, `No vertical overflow ${width}x${height}: ${JSON.stringify(r)}`);
      check(r.foot && r.controls && r.height===r.available, `Whole counter visible ${width}x${height}`);
      check(await run(`document.querySelector('#cbub .btxt').clientHeight>=12`), `Order text remains readable ${width}x${height}`);
    }
    await send('Emulation.setDeviceMetricsOverride',{width:360,height:640,deviceScaleFactor:1,mobile:true});
    await delay(150); await run('D.counterFrame()');
    await run(`document.documentElement.style.setProperty('--safe-b','24px');D.counterFrame()`);
    check(await run(`(()=>{const v=document.querySelector('#view'),f=document.querySelector('#lobbyGo');return f.getBoundingClientRect().bottom<=v.getBoundingClientRect().bottom-24 && v.scrollHeight<=v.clientHeight+1;})()`), 'Footer respects Android bottom safe area');
    await run(`document.documentElement.style.removeProperty('--safe-b');D.counterFrame()`);
    check(await run(`(()=>{const m=document.querySelector('.image-stack.m').getBoundingClientRect(),l=document.querySelector('.image-stack.l').getBoundingClientRect(),j=document.querySelector('.image-jar').getBoundingClientRect();return m.height<l.height && l.height<j.height;})()`), 'M < L < tea dispenser');
    check(await run(`(()=>{const c=getComputedStyle(document.querySelector('#cbub'));return c.backgroundColor.includes('0.34') && parseFloat(c.borderRadius)>=17;})()`), 'Compact translucent rounded order');
    check(await run(`document.querySelectorAll('.supply-row button').length===3 && !document.querySelector('.equip-strip') && document.querySelector('.upgrade-shortcut').textContent.trim()==='🛠️'`), 'Three controls share one compact row');
    check(await run(`(()=>{return [...document.querySelectorAll('.stack')].every(s=>{const b=s.querySelector('.cnt').getBoundingClientRect(),c=s.querySelector('.cupstack').getBoundingClientRect();return c.top-b.bottom<=5 && b.bottom-c.top<=15;});})()`), 'Stock badges are close to cup stacks');
    check(await run(`[...document.querySelectorAll('.fbtn')].every(b=>b.querySelector('small')?.textContent.trim())`), 'Each flavor has a visible name');
    await run(`document.querySelector('.upgrade-shortcut').click()`);
    check(await run(`document.querySelectorAll('.upgrade-item').length>5 && document.querySelector('.upgrade-list').textContent.includes('Tiếp theo')`), 'Equipment list includes effects and next tiers');
    await run(`document.querySelector('.upgrade-item[data-id="giayPhep"]').click()`);
    check(await run(`document.querySelectorAll('.modal-back').length===2`), 'Unpurchased equipment opens without crashing');
    await run(`document.querySelector('#modal .modal-back:last-child [data-modal-x]').click();document.querySelector('#modal .modal-back:last-child [data-modal-x]').click();`);
    // Two customers: the manager uses the player's cup while Gen Z reserves a separate order.
    await run(`var originalQueue=D.SH.queue; var base=originalQueue[0];
      var flavor=document.querySelector('.fbtn').dataset.f, fixtureTop=document.querySelector('.tray').dataset.t;
      D.SH.queue=[{...base,id:9001,p:1000,maxP:1000,order:{...base.order,size:'M',tea:'traSua',flavor,tops:[fixtureTop]}},{...base,id:9002,p:999,maxP:1000,order:{...base.order,size:'L',tea:'matcha',flavor,tops:[fixtureTop]}}];
      D.SH.sel=9001;D.S.staff={quanLy:{shifts:0},genZ:{shifts:0}};D.G.pickCup('M');var playerCup=D.SH.board;D.G.updateShift(.01);D.counterFrame();`);
    check(await run(`D.SH.jobs.length===1 && D.SH.jobs[0].cid===9002 && !!document.querySelector('.qav[data-cid="9002"] .genz-job')`), 'Gen Z marks a separate reserved customer: '+JSON.stringify(await run('({jobs:D.SH.jobs.map(j=>({cid:j.cid,by:j.by})),board:!!D.SH.board,queue:D.SH.queue.map(c=>({id:c.id,online:c.online})),flavor,fixtureTop,stocks:[D.E.stockQty(flavor),D.E.stockQty(fixtureTop)]})')));
    await run(`document.querySelector('.qav[data-cid="9002"]').click()`);
    check(await run(`!!document.querySelector('.staff-job-inspector') && D.SH.sel===9001 && D.SH.board===playerCup`), 'Inspection preserves the player cup and selection');
    const stages=await run(`(()=>{var job=D.SH.jobs[0];return job.steps;})()`);
    for(let i=0;i<stages.length;i++){
      await run(`D.SH.jobs[0].t=D.SH.jobs[0].total*(1-(${i}+.6)/${stages.length});D.counterFrame()`);
      check(await run(`document.querySelector('.staff-order-cup').dataset.step===${JSON.stringify(stages[i])} && document.querySelector('[data-job-status]').textContent.includes('${i+1}/${stages.length}')`), 'Gen Z preview renders '+stages[i]);
      if(stages[i]==='pour' && process.env.TIEMTRA_STAFF_SCREENSHOT){const r=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.TIEMTRA_STAFF_SCREENSHOT,Buffer.from(r.data,'base64'));}
    }
    await run(`document.querySelector('#modal [data-modal-x]').click();D.SH.jobs[0].t=100;`);
    const effects=await run(`(()=>{let flavorFx=false,topFx=false;for(let i=0;i<150&&!D.SH.board.autoDone;i++){const prevFlavor=D.SH.board.flavor,prevTops=D.SH.board.tops.length;D.G.updateShift(.1);D.counterFrame();if(!prevFlavor&&D.SH.board.flavor)flavorFx=!!document.querySelector('#brewfx .fx-ball');if(D.SH.board.tops.length>prevTops)topFx=!!document.querySelector('#brewfx .fx-ball');}return {flavorFx,topFx,tops:D.SH.board.tops.length,flavor:D.SH.board.flavor,job:D.SH.jobs[0]?.cid};})()`);
    check(effects.flavorFx && effects.topFx && effects.tops===1 && effects.flavor && effects.job===9002,'Manager performs flavor/topping with effects alongside Gen Z: '+JSON.stringify(effects));
    await run(`document.querySelector('.qav[data-cid="9002"]').click();D.SH.jobs[0].t=.001;D.G.updateShift(.01);D.counterFrame();`);
    check(await run(`document.querySelector('.staff-job-inspector').dataset.finished==='1' && document.querySelector('[data-job-status]').textContent.includes('Đã giao ly') && !D.SH.queue.some(c=>c.id===9002) && D.SH.board===playerCup`), 'Gen Z finishes its own order without clearing player cup');
    await run(`document.querySelector('#modal [data-modal-x]').click();D.G.trashCup();D.S.staff={};D.SH.jobs=[];D.SH.queue=originalQueue;D.SH.sel=originalQueue[0].id;D.counterFrame();`);
    await run(`D.G.pickCup('L');D.G.startPour('traSua');D.SH.board.fill=.65;D.G.stopPour();D.counterFrame();var ice=D.E.stockQty('da');D.G.addSupply('da');`);
    check(await run(`document.querySelectorAll('#brewfx .fx-ice').length===5 && !document.querySelector('#brewfx .fx-ball')`), 'Ice flies as five cubes, not pearls');
    check(await run(`!!document.querySelector('#cupslot .c-ice') && D.E.stockQty('da')===ice-1`), 'Ice remains in cup and consumes one portion');
    await run(`var sugar=D.E.stockQty('duong');D.G.addSupply('duong');`);
    check(await run(`!!document.querySelector('#brewfx .fx-sugar-stream .syrup-body') && !document.querySelector('#brewfx .fx-ball')`), 'Sugar flows as syrup ribbon');
    check(await run(`!!document.querySelector('#cupslot .c-sugar') && D.E.stockQty('duong')===sugar-1`), 'Sugar mixes and consumes one portion');
    await delay(250);
    if(process.env.TIEMTRA_SCREENSHOT){const r=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.TIEMTRA_SCREENSHOT,Buffer.from(r.data,'base64'));}
    await run(`document.querySelector('#hud [data-act=pause]').click()`);
    check(await run(`document.querySelectorAll('#brewfx > *').length===0`), 'Opening modal clears both ingredient effects');
    await delay(1100);
    check(await run(`document.querySelectorAll('#brewfx > *').length===0`), 'Cancelled frames do not restore effects');
    await run(`document.querySelector('[data-act=resume]').click();D.G.sealCup();`);
    check(await run(`D.E.stockQty('da')===ice-1 && D.E.stockQty('duong')===sugar-1`), 'Sealing does not deduct ingredients twice');
    await run(`document.querySelector('[data-act=lobby]').click();D.flush();`);
    check(await run(`!document.querySelector('#view').classList.contains('counter-view') && getComputedStyle(document.querySelector('#view')).overflowY==='auto'`), 'Lobby retains its own scrolling');
    await run(`var pearlTest=D.pearl();pearlTest.open();document.querySelector('#pBody [data-act=start]').click();var pearlState=pearlTest.state;pearlState.b=Array.from({length:6},(_,r)=>Array.from({length:6},(_,c)=>(r+c)%5));for(let c=0;c<5;c++)pearlState.b[0][c]=0;pearlTest.render();document.querySelector('#pBoard [data-r="0"][data-c="0"]').click();`);
    check(await run(`!!document.querySelector('.pfx-mega') && document.querySelectorAll('.pfx-dot').length>=50 && pearlState.score>=25`), 'Pearl burst creates shockwaves, flying particles and score');
    await delay(220);
    check(await run(`document.querySelector('#pBoard').getAnimations({subtree:true}).length>0`), 'Pearl refill animates falling and bouncing');
    await run(`pearlState.busy=false;pearlState.b=Array.from({length:6},(_,r)=>Array.from({length:6},(_,c)=>(r+c)%5));for(let c=0;c<5;c++)pearlState.b[0][c]=0;pearlTest.render();document.querySelector('#pBoard [data-r="0"][data-c="0"]').click();`);
    check(await run(`pearlState.combo===2 && document.querySelector('#pComboCount').textContent.includes('2') && document.querySelector('#pCombo').getAnimations().length>0`), 'Repeated pearl bursts increase combo and show feedback');
    await run(`document.querySelector('#modal .modal-back:last-child [data-modal-x]').click();var crushTest=D.crush();crushTest.open();var q=crushTest.Q;for(let r=0;r<crushTest.N;r++)for(let c=0;c<crushTest.N;c++){q.g[r][c].t=(r+c)%q.types;q.g[r][c].sp=null;}q.g[0][0].sp='fish';var swapDone=crushTest.swap(q,{r:0,c:0},{r:0,c:1});void 0;`);
    await delay(230);
    check(await run(`!!document.querySelector('#crushBoard .mfish') && !!document.querySelector('#crushBoard .mfx-halo') && document.querySelectorAll('#crushBoard .mfx').length>=14`), 'Crush special launches fish, fragments and large blast halo');
    await run(`swapDone`);
    check(await run(`q.score>0 && !q.busy && document.querySelectorAll('#crushBoard .mt').length===crushTest.N**2`), 'Crush refills a complete playable grid after animation');
    await run(`document.querySelector('#modal .modal-back:last-child [data-modal-x]').click()`);
    check(errors.length===0, 'No browser exceptions: '+errors.join('\n'));
    console.log(`Counter fit/effects: ${checks}/${checks} passed (6 viewports, offline)`);
  } finally {
    socket?.close();chrome.kill();await delay(300);
    const absolute=path.resolve(profile),temp=path.resolve(os.tmpdir());
    assert.ok(absolute.startsWith(temp+path.sep) && path.basename(absolute).startsWith('tiemtra-counter-fit-'));
    fs.rmSync(absolute,{recursive:true,force:true,maxRetries:5,retryDelay:300});
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
