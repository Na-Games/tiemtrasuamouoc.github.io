setTimeout(() => {
  try {
    const check = (v, message) => { if (!v) throw Error(message); };
    const D = debugGame, money = D.S.money, plays = D.S.pearl.playsDay;
    document.querySelector('[data-act="guide"]').click();
    const guide = document.querySelector('.guide.rich');
    check(guide && guide.querySelectorAll('[data-guide-section]').length === 8, 'All guide sections rendered');
    const rows = [...guide.querySelectorAll('[data-guide-target]')];
    check(rows.length > 35, 'Full guide has mapped rows');
    rows.forEach((row) => document.querySelector(row.dataset.guideTarget));
    check(guide.textContent.includes('Topping không bắt buộc'), 'Opening requirements');
    check(guide.textContent.includes('dưới khu PHA LY'), 'Flavor location');
    check(guide.textContent.includes('chạm ly'), 'Manual serve instruction');
    check(guide.textContent.includes('chạm máy để ép nắp'), 'Sealing instruction');
    check(guide.textContent.includes('3 lượt/ngày'), 'Pearl game rules');
    check(guide.textContent.includes('chưa đồng bộ tài khoản trực tuyến'), 'Friends accurately described');
    check(guide.querySelectorAll('.g-art .sale-art').length >= 6 && guide.querySelectorAll('.g-art .ic').length >= 4, 'Actual artwork and button SVGs used');
    check(D.S.money === money && D.S.pearl.playsDay === plays, 'Reading guide has no transactions');
    document.querySelector('#modal [data-act="x"]').click();
    check(!document.querySelector('.guide.rich'), 'Guide closes');
    document.body.dataset.guidePassed = '11';
  } catch (e) { document.body.dataset.guideError = e.message; console.error(e); }
}, 500);
