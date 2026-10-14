setTimeout(() => {
  document.querySelector('[data-act="play"]').click();
  debugGame.flush();
  document.querySelector('.app').style.width = '320px';
  setTimeout(() => {
    try {
      const assert = (v, message) => { if (!v) throw Error(message); };
      const next = () => document.querySelector('[data-c="next"]').click();
      const money = debugGame.S.money;
      const card = document.querySelector('.coach-card');
      assert(card, 'Tutorial started');
      for (let i = 0; i < 9; i++) next();
      const target = document.querySelector('.krow .stepper');
      const a = target.getBoundingClientRect(), b = card.getBoundingClientRect();
      const view = document.querySelector('#view').getBoundingClientRect();
      assert(a.top >= view.top && a.bottom <= view.bottom, 'Step 10 target visible');
      assert(b.bottom <= a.top || b.top >= a.bottom, 'Step 10 card does not overlap target');
      assert(b.top >= 0 && b.bottom <= innerHeight, 'Card within viewport');
      assert(card.textContent.includes('không phải tồn kho'), 'Quantity description');
      next(); next();
      assert(card.textContent.includes('ít nhất một cỡ ly'), 'Step 12 missing stock description');
      next();
      assert(document.querySelector('.tile[data-tab="crush"]'), 'More games tile');
      next();
      assert(document.querySelector('.panel-in [data-act="crush"]'), 'Crush panel loaded');
      next();
      assert(document.querySelector('.panel-in [data-act="pearl"]'), 'Pearl panel loaded');
      assert(card.textContent.includes('3 lượt mỗi ngày'), 'Pearl rules');
      assert(debugGame.S.money === money && debugGame.S.pearl.playsDay === 0, 'Walkthrough does not spend or play');
      next();
      assert(document.querySelector('#coach').hidden, 'Tutorial finished');
      document.body.dataset.tutorialPassed = '10';
    } catch (e) { document.body.dataset.tutorialError = e.message; console.error(e); }
  }, 900);
}, 300);
