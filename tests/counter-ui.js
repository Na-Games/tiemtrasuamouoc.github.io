setTimeout(() => {
  try {
    const assert = (v, message) => { if (!v) throw Error(message); };
    const D = debugGame;
    document.querySelector('[data-act="play"]').click();
    D.S.settings.tut = { home: true, sell: false };
    D.fillStock(50);
    assert(!D.G.startShift(), 'Shift opens');
    D.S.settings.tut.sell = true;
    D.flush();
    document.querySelector('.app').style.width = '320px';
    const bubble = document.querySelector('#cbub');
    const reject = bubble.querySelector('.rej');
    const heading = bubble.querySelector('.order-head');
    assert(reject.parentElement === heading, 'Reject has its own heading row');
    assert(getComputedStyle(reject).position === 'static', 'Reject cannot overlay order');
    assert(parseFloat(getComputedStyle(bubble).borderRadius) >= 17, 'Compact rounded order card');
    const r = reject.getBoundingClientRect(), t = bubble.querySelector('.btxt').getBoundingClientRect();
    assert(r.bottom <= t.top + 1, 'Reject does not cover order text');
    assert(!D.G.pickCup('M') && !D.G.startPour('traSua'), 'Pour starts');
    D.SH.board.fill = .65;
    D.counterFrame();
    document.querySelector('#cupslot')._pour.t0 -= 1000;
    D.counterFrame();
    const stream = document.querySelector('#stream');
    assert(stream.style.display === 'block', 'Jet shown');
    assert(getComputedStyle(stream).clipPath === 'none' && stream.querySelector('.st-jet'), 'Splash separate from clipped jet');
    assert(document.querySelector('#cupslot .c-pour-bubbles'), 'Surface bubbles exist');
    const cup = document.querySelector('#cupslot .cup').getBoundingClientRect();
    const nozzle = document.querySelector('.disp[data-tea="traSua"] .tap').getBoundingClientRect();
    // Allow the CSS cup slide to finish in the preview; the stream follows each frame.
    assert(cup.width > 0 && nozzle.width > 0, 'Cup and nozzle geometry available');
    D.G.stopPour(); D.counterFrame();
    assert(stream.style.display === 'none' && !document.querySelector('#cupslot').classList.contains('pouring-art'), 'Pour effects stop together');
    document.body.dataset.counterPassed = '11';
  } catch (e) { document.body.dataset.counterError = e.message; console.error(e); }
}, 500);
