/**
 * Vỏ giao diện: header, modal, toast, hiệu ứng bay, cài đặt, tạm dừng, intro, tổng quan cuối ngày.
 */
import { ITEMS, LOCATIONS, SEASONS, WEATHERS, THEMES, SHIFT_MINUTES, CHANGELOG, VERSION, SHIFT_START_H } from './config.js';
import {
  S, on, emit, markDirty, requestSave, buzz, saveGame, setPaused, isPaused, applyVolumes, restartMusic, listBackups, restoreBackup, exportCode, importCode,
  wipeSave, $, $$, h, esc, fmt, fmtK, fmtClock, rand, sum, wait, sfx, replaceState, newState, clamp,
} from './core.js';
import * as E from './econ.js';
import { SH, closeNow, nextDay } from './sell.js';
import { icon } from './icons.js';
import { copyText } from './platform.js';
import { guideHTML } from './guide-content.js';

/* ===== Delegation ===== */
export function bindActions(root, map) {
  root.addEventListener('click', (e) => {
    const t = e.target.closest('[data-act]');
    if (!t || !root.contains(t) || t.disabled) return;
    const fn = map[t.dataset.act];
    if (fn) { sfx('click'); fn(t, e); }
  });
}

/* ===== Toast ===== */
export function toast(msg, type = '', dur = 2300) {
  // Routine sale notifications must not cover the counter while playing.
  if (S.phase === 'sell' && !isModalOpen() && type !== 'err') return;
  const root = $('#toasts');
  if (!root) return;
  // cùng một nội dung đang hiện thì chỉ gia hạn, không chồng thêm dòng (bấm liên tục chỉ ra một thông báo)
  for (const el of root.children) {
    if (el.dataset.msg === msg && !el.classList.contains('out')) {
      clearTimeout(el._tm);
      el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
      el._tm = setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 260); }, dur);
      return;
    }
  }
  const t = h(`<div class="toast ${type}">${esc(msg)}</div>`);
  t.dataset.msg = msg;
  root.appendChild(t);
  while (root.children.length > 3) root.firstElementChild.remove();
  t._tm = setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 260); }, dur);
}

/* ===== FX ===== */
const centerOf = (t) => {
  if (!t) return { x: innerWidth / 2, y: innerHeight / 2 };
  if (typeof t.x === 'number') return t;
  const r = t.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};
export function fxText(text, target, cls = '') {
  if (S.phase === 'sell') return;
  const { x, y } = centerOf(target);
  const f = h(`<div class="fx-float ${cls}" style="left:${x}px;top:${y}px">${esc(text)}</div>`);
  $('#fx').appendChild(f);
  setTimeout(() => f.remove(), 1000);
}
export function fxCoins(target, n = 5) {
  if (S.phase === 'sell') return;
  const from = centerOf(target);
  const to = centerOf($('[data-money]'));
  for (let i = 0; i < n; i++) {
    const sx = from.x + rand(-18, 18), sy = from.y + rand(-8, 8);
    const c = h(`<div class="fx-coin" style="left:${sx}px;top:${sy}px;--dx:${to.x - sx}px;--dy:${to.y - sy}px;animation-delay:${i * 45}ms">🪙</div>`);
    $('#fx').appendChild(c);
    setTimeout(() => c.remove(), 950 + i * 45);
  }
}
export function fxSpark(target, n = 8) {
  if (S.phase === 'sell' && isModalOpen()) return;
  const { x, y } = centerOf(target);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, d = rand(24, 56);
    const s = h(`<div class="fx-spark" style="left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px">✨</div>`);
    $('#fx').appendChild(s);
    setTimeout(() => s.remove(), 760);
  }
}

/* ===== Modal (stack) ===== */
const stack = [];
export function openModal({ html: body, cls = '', title = '', onClose = null, closable = true, id = '' }) {
  if (id) { const ex = stack.find((m) => m.id === id); if (ex) { ex.body.innerHTML = body; return ex; } }
  emit('modal:open');
  const back = h(`<div class="modal-back"><div class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    ${closable ? '<button class="modal-x" data-modal-x aria-label="Đóng">✕</button>' : ''}<div class="modal-body"></div></div></div>`);
  const bodyEl = $('.modal-body', back);
  bodyEl.innerHTML = body;
  $('#modal').appendChild(back);
  const m = { id, el: back, body: bodyEl, close };
  function close() {
    const i = stack.indexOf(m);
    if (i < 0) return;
    stack.splice(i, 1);
    back.remove();
    if (!stack.length) { $('#modal').classList.remove('on'); $('#app').classList.remove('modal-open'); }
    onClose?.();
  }
  // Vuốt xuống ở phần đầu bảng để đóng (bottom sheet)
  const sheet = $('.modal', back);
  let dragY = null;
  sheet.addEventListener('touchstart', (e) => { const r = sheet.getBoundingClientRect(); dragY = e.touches[0].clientY - r.top < 34 ? e.touches[0].clientY : null; }, { passive: true });
  sheet.addEventListener('touchmove', (e) => { if (dragY == null) return; const dy = Math.max(0, e.touches[0].clientY - dragY); sheet.style.transform = `translateY(${dy}px)`; }, { passive: true });
  sheet.addEventListener('touchend', (e) => { if (dragY == null) return; const dy = e.changedTouches[0].clientY - dragY; dragY = null; if (dy > 90 && closable) close(); else sheet.style.transform = ''; });
  $('[data-modal-x]', back)?.addEventListener('click', () => { sfx('click'); close(); });
  back.addEventListener('click', (e) => { if (e.target === back && closable) close(); });
  stack.push(m);
  $('#modal').classList.add('on');
  $('#app').classList.add('modal-open');
  return m;
}
export const closeTopModal = () => stack[stack.length - 1]?.close();
export const closeAllModals = () => { while (stack.length) stack[stack.length - 1].close(); };
export const isModalOpen = (id) => (id ? stack.some((m) => m.id === id) : stack.length > 0);
export function confirmBox(title, msg, onYes, yes = 'Đồng ý', danger = false) {
  const m = openModal({ html: `<h3 class="m-title">${esc(title)}</h3><p class="m-text">${msg}</p>
    <div class="m-row"><button class="btn ghost" data-act="no">Hủy</button><button class="btn ${danger ? 'danger' : 'pri'}" data-act="yes">${esc(yes)}</button></div>`, cls: 'small' });
  bindActions(m.body, { no: () => m.close(), yes: () => { m.close(); onYes(); } });
  return m;
}
export function alertBox(title, body, btn = 'Đã hiểu') {
  const m = openModal({ html: `<h3 class="m-title">${title}</h3><div class="m-text">${body}</div><button class="btn pri block" data-act="ok">${esc(btn)}</button>`, cls: 'small' });
  bindActions(m.body, { ok: () => m.close() });
  return m;
}

/* ===== Logo ===== */
export function logoHTML(size = 56, cls = '') {
  const l = S.logo;
  const inner = l.img ? `<img src="${l.img}" alt="Logo quán" />` : `<span>${l.emoji}</span>`;
  return `<span class="logo-c ${cls}" style="--sz:${size}px">${inner}</span>`;
}
const HAPTIC_NAMES = ['Tắt', 'Nhẹ', 'Vừa', 'Mạnh'];
const THEME_DARK = { '--text': '#f1ebff', '--muted': '#b8aedc', '--brown': '#e8dfff', '--brown2': '#b8aedc', '--card2': '#453d66', '--line': 'rgba(255,255,255,.14)' };
export function applyTheme() {
  const k = THEMES[S.settings.theme] ? S.settings.theme : 'cream';
  const t = THEMES[k], st = document.documentElement.style;
  document.documentElement.dataset.theme = k;
  document.documentElement.dataset.season = S.season || 'spring';
  st.setProperty('--bg', t.bg); st.setProperty('--paper', t.bg); st.setProperty('--card', t.card);
  st.setProperty('--pink', t.accent); st.setProperty('--pink2', t.accent2); st.setProperty('--pink-soft', t.soft);
  for (const [n, v] of Object.entries(THEME_DARK)) { if (t.dark) st.setProperty(n, v); else st.removeProperty(n); }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t.bg);
}
/** Popup chọn một trong nhiều lựa chọn (thay cho việc bấm xoay vòng từng giá trị). */
function openChoice(title, opts, cur, onPick) {
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">${title}</h3><div class="choice-list">${opts.map(([v, label], i) => `<button class="choice ${v === cur ? 'on' : ''}" data-act="pick" data-i="${i}"><span>${label}</span><i>${v === cur ? '✓' : ''}</i></button>`).join('')}</div><button class="btn block" data-act="x">Đóng</button>` });
  bindActions(m.body, { pick: (t) => { onPick(opts[+t.dataset.i][0]); m.close(); }, x: () => m.close() });
}
function openThemePicker(onDone) {
  const sw = (id, t) => `<button class="thm-it ${S.settings.theme === id ? 'on' : ''}" data-act="pick" data-k="${id}"><i style="background:linear-gradient(135deg, ${t.bg} 50%, ${t.accent} 50%)"></i><b>${t.name}</b></button>`;
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">Màu giao diện</h3><p class="m-text center">Chọn màu bạn thích, đổi lúc nào cũng được.</p>
    <div class="thm-grid">${Object.entries(THEMES).map(([id, t]) => sw(id, t)).join('')}</div><button class="btn pri block" data-act="done">Xong</button>` });
  bindActions(m.body, {
    pick: (t) => { S.settings.theme = t.dataset.k; applyTheme(); requestSave(); for (const el of $$('.thm-it', m.body)) el.classList.toggle('on', el === t); },
    done: () => { m.close(); onDone?.(); },
  });
}

/* ===== Header ===== */
export function renderHud() {
  const el = $('#hud');
  if (!el) return;
  const w = E.weatherOf();
  const se = SEASONS[S.season];
  const sell = S.phase === 'sell';
  const sub = sell ? '⏰ <span id="clock">' + fmtClock(SH.hour) + '</span>' : S.phase === 'end' ? 'Hết ngày' : 'Chuẩn bị';
  const full = S.rating;
  const stars = Array.from({ length: 5 }, (_, i) => `<i class="${i + 1 <= Math.round(full) ? 'on' : ''}">★</i>`).join('');
  el.innerHTML = `
    <div class="hud-l">
      <button class="hbtn ${sell ? 'pause' : ''}" data-act="${sell ? 'pause' : 'settings'}" aria-label="${sell ? 'Tạm dừng' : 'Cài đặt'}">${icon(sell ? 'pause' : 'menu', 18)}</button>
    </div>
    <div class="hud-day"><b>Ngày ${S.day}</b><span class="hud-sub">${sub}</span>
      <button class="wx" data-act="forecast" aria-label="Dự báo thời tiết">${w.icon} ${se.name} · ${S.temp}°C</button></div>
    <div class="hud-r">
      <div class="hud-money"><small>${esc(S.shopName)}</small><b data-money>${fmtK(S.money)}</b></div>
      <div class="hud-r-btns"><button class="hbtn sm" data-act="${sell ? 'settings' : 'guide'}" aria-label="${sell ? 'Cài đặt' : 'Hướng dẫn'}">${icon(sell ? 'settings' : 'book', 16)}</button><button class="hbtn sm" data-act="branchTop" aria-label="Chi nhánh">${icon('branch', 16)}</button><button class="hbtn sm" data-act="collectTop" aria-label="Sưu tầm">${icon('collect', 16)}</button></div>
      <div class="hud-rate"><span class="stars">${stars}</span><small>${S.rating.toFixed(1).replace('.', ',')} · ${S.ratingCount} ĐG</small></div>
    </div>`;
}
export function updateClock() {
  const c = $('#clock');
  if (c && SH.on) c.textContent = fmtClock(SH.hour);
}
let hudActs = {};
export function setHudActions(a) { hudActs = a; }
export function initHud() {
  bindActions($('#hud'), new Proxy({}, { get: (_, k) => hudActs[k] }));
}

/* ===== Báo cáo P&L ===== */
export function aggregate(entries) {
  const a = { rev: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, fine: 0, branch: 0, fran: 0, interest: 0, profit: 0, cups: 0, left: 0, online: 0, stars: [], days: entries.length };
  for (const e of entries) {
    for (const k of ['rev', 'cogs', 'rent', 'util', 'wage', 'tax', 'fine', 'branch', 'fran', 'interest', 'profit', 'cups', 'left', 'online']) a[k] += e[k] || 0;
    if (e.stars) a.stars.push(e.stars);
  }
  a.avgStars = a.stars.length ? sum(a.stars) / a.stars.length : 0;
  return a;
}
const pct = (x, t) => (t > 0 ? (x / t * 100) : 0);
export function plHTML(a, label) {
  const loss = a.profit < 0;
  const cost = a.cogs + a.rent + a.util + a.wage + a.tax + (a.fine || 0);
  const base = Math.max(a.rev, cost, 1);
  const cg = pct(a.cogs, base), pe = pct(a.wage, base), ma = pct(a.rent + a.util, base);
  const lossPct = loss ? Math.max(0, 100 - cg - pe - ma) : 0;
  const cogsPct = pct(a.cogs, a.rev), wagePct = pct(a.wage, a.rev);
  const unit = a.cups > 0 ? (a.rev - a.cogs) / a.cups : 0;
  const fixed = (a.rent + a.util + a.wage) / Math.max(1, a.days);
  const be = unit > 0 ? Math.ceil(fixed / unit) : 0;
  const soldPerDay = a.cups / Math.max(1, a.days);
  const cogsCls = a.rev > 0 && cogsPct >= 28 && cogsPct <= 32 ? 'good' : 'warn';
  const wageCls = a.rev > 0 && wagePct >= 15 && wagePct <= 20 ? 'good' : a.wage === 0 ? 'neutral' : 'warn';
  const row = (c, n, v, p) => `<div class="pl2-r"><i style="background:${c}"></i><span>${n}</span><em>${p}</em><b>${v}</b></div>`;
  const gap = Math.max(0, be - Math.round(soldPerDay));
  return `<section class="pl2">
    <div class="pl2-hero ${loss ? 'neg' : 'pos'}"><small>${esc(label)} · ${loss ? 'Lỗ' : 'Lãi'}</small><b>${loss ? '−' : '+'}${fmtK(Math.abs(a.profit))}</b><span>Doanh thu ${fmtK(a.rev)} · Chi phí ${fmtK(cost)}</span></div>
    <div class="pl-bar"><i style="width:${cg}%;background:#ff8a3d"></i><i style="width:${pe}%;background:#3d9bff"></i><i style="width:${ma}%;background:#8b5cf6"></i><i style="width:${lossPct}%;background:#ef4444"></i></div>
    <div class="pl2-list">
      ${row('#ff8a3d', 'Nguyên liệu', fmtK(a.cogs), cogsPct.toFixed(0) + '%')}
      ${row('#3d9bff', 'Nhân sự', fmtK(a.wage), wagePct.toFixed(0) + '%')}
      ${row('#8b5cf6', 'Mặt bằng & điện nước', fmtK(a.rent + a.util), pct(a.rent + a.util, a.rev).toFixed(0) + '%')}
      ${row('#d97706', 'Thuế & tiền phạt', fmtK(a.tax + (a.fine || 0)), pct(a.tax + (a.fine || 0), a.rev).toFixed(0) + '%')}
      ${row('#2d8a63', 'Chi nhánh / nhượng quyền / lãi gửi', fmtK(a.branch + a.fran + a.interest), '')}
    </div>
    <details class="pl2-more"><summary>Phân tích F&B chi tiết</summary>
      <div class="pl-cards">
        <div class="pl-card ${cogsCls}"><small>Nguyên liệu</small><em>Chuẩn 28–32%</em><b>${cogsPct.toFixed(1)}%</b><p>${cogsCls === 'good' ? '🟢 Đạt chuẩn' : '🟠 Lệch chuẩn'}</p></div>
        <div class="pl-card ${wageCls}"><small>Nhân sự</small><em>Chuẩn 15–20%</em><b>${wagePct.toFixed(1)}%</b><p>${a.wage === 0 ? '⚪ Chưa có' : wageCls === 'good' ? '🟢 Đạt chuẩn' : '🟠 Lệch chuẩn'}</p></div>
        <div class="pl-card ${soldPerDay >= be ? 'good' : 'bad'}"><small>Hòa vốn</small><em>${be} ly/ngày</em><b>${Math.round(soldPerDay)} ly</b><p>${soldPerDay >= be ? '🟢 Đã vượt' : `🔴 Thiếu ${gap} ly`}</p></div>
      </div>
      <p class="pl2-diag">${loss ? `Chi phí (${fmtK(cost)}) vượt doanh thu (${fmtK(a.rev)}). Cần bán thêm ${gap} ly để hòa vốn.` : `Quán đang có lãi ${fmtK(a.profit)}. Giữ nguyên liệu 28–32% và rating cao để tăng khách.`}</p>
    </details>
  </section>`;
}
export function dayLines(T) {
  const rows = [
    ['💵 Doanh thu quán chính', '+' + fmtK(T.rev + T.tips), 'pos'],
    ['🧾 Chi phí quán chính', '−' + fmtK(T.cogs + T.rent + T.util + T.wage + (T.tax || 0)), 'neg'],
    ['📦 Tiền nhập nguyên liệu', '−' + fmtK(T.purchase), 'sub'],
    ['🏠 Mặt bằng', '−' + fmtK(T.rent), 'sub'],
    ['⚡ Điện nước', '−' + fmtK(T.util), 'sub'],
  ];
  if (T.wage) rows.push(['👥 Lương nhân viên', '−' + fmtK(T.wage), 'sub']);
  if (T.branch) rows.push(['🏪 Chi nhánh (ròng)', (T.branch >= 0 ? '+' : '−') + fmtK(Math.abs(T.branch)), T.branch >= 0 ? 'pos' : 'neg']);
  if (T.fran) rows.push(['🤝 Nhượng quyền (royalty)', '+' + fmtK(T.fran), 'pos']);
  if (T.interest) rows.push(['🏦 Lãi ngân hàng', '+' + fmtK(T.interest), 'pos']);
  rows.push(['📈 Lãi', (T.profit >= 0 ? '+' : '−') + fmtK(Math.abs(T.profit)), T.profit >= 0 ? 'pos big' : 'neg big']);
  rows.push(['🗄️ Két', fmtK(S.money), 'big']);
  return rows.map(([l, v, c]) => `<div class="dl ${c}"><span>${l}</span><b>${v}</b></div>`).join('');
}

/* ===== Tổng quan cuối ngày ===== */
export function openDaySummary() {
  const T = S.today;
  const tomorrow = S.forecast.find((f) => f.day === S.day + 1) || E.rollWeatherFor(S.day + 1);
  const tw = WEATHERS[tomorrow.weather];
  const agg = aggregate([{ ...T, stars: T.avgStars }]);
  agg.profit = T.profit; agg.rev = T.rev + T.tips;
  const m = openModal({
    cls: 'day', closable: false, id: 'day', html: `
    <div class="day-moon">🌙<small>⭐</small></div>
    <h2 class="day-title">Hết ngày ${S.day}</h2>
    <div class="day-stats"><div><b>${T.cups}</b><span>ly bán</span></div><div><b>${T.left}</b><span>khách bỏ về</span></div><div><b>${T.avgStars ? T.avgStars.toFixed(1) + '★' : '–'}</b><span>đánh giá</span></div></div>
    ${plHTML(agg, 'Ngày ' + S.day)}
    ${T.expired && T.expired.length ? `<div class="exp-note">⚠️ ${sum(T.expired, (x) => x.q)} ${T.expired.every((x) => ITEMS[x.id].kind === 'top') ? 'topping' : 'phần nguyên liệu/topping'} đã hỏng, bị bỏ đi: −${fmtK(T.expiredCost || 0)}<small>${T.expired.map((x) => `${ITEMS[x.id].icon} ${esc(ITEMS[x.id].name)} ×${x.q}`).join(' · ')}</small></div>` : ''}
    ${T.fine ? `<div class="exp-note">📋 Tiền phạt kiểm tra đột xuất: −${fmtK(T.fine)}</div>` : ''}
    <div class="day-cash"><span>🗄️ Số dư két</span><b>${fmtK(S.money)}</b></div>
    <div class="tomorrow">📅 <b>Ngày mai:</b> ${esc(tw.tip)}</div>
    <button class="btn ghost block" data-act="sum">📊 Tổng kết</button>
    <button class="btn pri block" data-act="next">Ngày ${S.day + 1} ➜</button>`,
  });
  bindActions(m.body, {
    sum: () => { m.close(); nextDay(); S.tab = 'tongket'; markDirty('view', 'panel'); sfx('success'); emit('goto', 'tongket'); },
    next: () => { m.close(); nextDay(); sfx('success'); },
  });
}

/* ===== Tạm dừng ===== */
function sliderRow(label, key, icon) {
  const v = Math.round(S.settings[key] * 100);
  return `<div class="vol"><div class="vol-h"><b>${icon} ${label}</b><span class="pct" data-pct="${key}">${v}%</span></div>
    <div class="vol-r"><button class="rb" data-act="vol-" data-k="${key}">−</button><input type="range" min="0" max="100" value="${v}" data-slider="${key}" aria-label="${label}"><button class="rb" data-act="vol+" data-k="${key}">＋</button><button class="rb" data-act="mute" data-k="${key}" aria-label="${v ? 'Tắt' : 'Bật'} ${label}" aria-pressed="${!v}">${v ? '🔊' : '🔇'}</button></div></div>`;
}
function bindSliders(m) {
  const set = (k, v) => {
    S.settings[k] = Math.round(clamp(v, 0, 1) * 100) / 100;
    const sl = $(`[data-slider="${k}"]`, m.body); if (sl) sl.value = Math.round(S.settings[k] * 100);
    const p = $(`[data-pct="${k}"]`, m.body); if (p) p.textContent = Math.round(S.settings[k] * 100) + '%';
    const button = $(`[data-act="mute"][data-k="${k}"]`, m.body);
    if (button) {
      const muted = S.settings[k] === 0;
      button.textContent = muted ? '🔇' : '🔊';
      button.setAttribute('aria-pressed', String(muted));
      button.setAttribute('aria-label', `${muted ? 'Bật' : 'Tắt'} ${sl?.getAttribute('aria-label') || 'âm thanh'}`);
    }
    applyVolumes(); if (k === 'music') restartMusic(); requestSave();
  };
  $$('[data-slider]', m.body).forEach((s) => s.addEventListener('input', () => set(s.dataset.slider, s.value / 100)));
  return { 'vol-': (t) => set(t.dataset.k, S.settings[t.dataset.k] - 0.1), 'vol+': (t) => set(t.dataset.k, S.settings[t.dataset.k] + 0.1), mute: (t) => set(t.dataset.k, S.settings[t.dataset.k] > 0 ? 0 : 0.7) };
}
export function openPause() {
  if (isModalOpen('pause')) return;
  setPaused(true);
  const left = Math.max(0, Math.round(SH.total - SH.t));
  const m = openModal({
    id: 'pause', cls: 'pause', closable: false, onClose: () => setPaused(false), html: `
    <div class="pause-ico">⏸</div><h2 class="day-title">Tạm dừng ca bán</h2>
    <p class="m-text center">Còn ${left}s · ${SH.queue.length} khách đang chờ</p>
    <div class="box">${sliderRow('Nhạc nền quán', 'music', '🎵')}${sliderRow('Âm thanh pha chế & SFX', 'sfx', '🧋')}</div>
    <button class="btn pri block" data-act="resume">▶ Chơi tiếp</button>
    <button class="btn pri block" data-act="close">Đóng cửa hôm nay</button>` });
  const acts = bindSliders(m);
  bindActions(m.body, {
    ...acts, resume: () => m.close(),
    close: () => confirmBox('Đóng cửa hôm nay?', 'Khách đang chờ sẽ ra về và ca bán kết thúc ngay.', () => { m.close(); closeNow(); }, 'Đóng cửa', true),
  });
}

/* ===== Cài đặt ===== */
const MUSIC_OPTIONS = [
  ['lofi', '🎧 Lofi Chill Quán Cafe'], ['vui', '🎉 Vui nhộn'],
  ['spring', '🌸 Mùa Xuân'], ['summer', '☀️ Mùa Hạ'],
  ['autumn', '🍂 Mùa Thu'], ['winter', '❄️ Mùa Đông'], ['off', 'Tắt nhạc'],
];
const musicStyleName = () => MUSIC_OPTIONS.find(([id]) => id === S.settings.style)?.[1] || 'Tắt nhạc';
export function openSettings() {
  const sell = S.phase === 'sell';
  if (sell) setPaused(true);
  const row = (act, icon, label, value = '') => `<button class="set-row" data-act="${act}"><span class="si">${icon}</span><b>${label}</b><em>${value}</em></button>`;
  const m = openModal({
    id: 'settings', cls: 'settings', onClose: () => { if (sell && !isModalOpen('pause')) setPaused(false); }, html: `
    <h2 class="set-title">⚙️ Cài đặt</h2>
    ${row('guide', '📖', 'Hướng dẫn')}
    ${row('news', '🎁', 'Có gì mới', 'v' + VERSION)}
    ${row('update', '🔄', 'Cập nhật bản mới', 'Tải lại web & xoá bộ nhớ đệm')}
    ${row('hints', '🧭', 'Chỉ dẫn từng bước', S.settings.hints ? 'Tự động' : 'Tắt')}
    ${row('shiftMin', '⏱️', 'Thời gian bán mỗi ngày', `${S.settings.shiftMinNext} phút · áp dụng từ ngày sau`)}
    ${row('theme', '🎨', 'Màu giao diện', THEMES[S.settings.theme].name)}
    ${row('haptic', '📳', 'Rung', HAPTIC_NAMES[S.settings.haptic ?? 2])}
    <div class="box">${sliderRow('Nhạc nền quán', 'music', '🎵')}${sliderRow('Âm thanh pha chế & SFX', 'sfx', '🧋')}</div>
    ${row('style', '🎼', 'Nhạc nền & Mùa', musicStyleName())}
    ${row('export', '📦', 'Sao lưu tiến trình', S.savedAt ? 'Đã lưu' : 'Chưa sao lưu')}
    ${row('backups', '🗂️', 'Khôi phục bản tự lưu', `Game tự lưu ${listBackups().length} cuối ngày gần nhất`)}
    ${row('import', '🔑', 'Khôi phục từ mã')}
    ${row('reset', '↩️', 'Chơi lại từ đầu')}
    <button class="btn pri block" data-act="close">Đóng</button>` });
  const sliders = bindSliders(m);
  const setVal = (act, text) => { const e = $(`[data-act="${act}"] em`, m.body); if (e) e.textContent = text; };
  bindActions(m.body, {
    ...sliders, close: () => m.close(), guide: () => openGuide(), news: () => alertBox('🎁 Có gì mới', CHANGELOG.map((c) => `<p>• ${esc(c)}</p>`).join('')),
    update: () => confirmBox('Cập nhật bản mới', 'Lưu game và tải lại trang để lấy bản mới nhất?', () => { saveGame(); location.reload(); }),
    hints: () => openChoice('🧭 Chỉ dẫn từng bước', [[true, 'Tự động'], [false, 'Tắt']], S.settings.hints, (v) => { S.settings.hints = v; requestSave(); setVal('hints', v ? 'Tự động' : 'Tắt'); }),
    shiftMin: () => openChoice('⏱️ Thời gian bán mỗi ngày', SHIFT_MINUTES.map((n) => [n, `${n} phút`]), S.settings.shiftMinNext, (v) => { S.settings.shiftMinNext = v; requestSave(); setVal('shiftMin', `${v} phút · áp dụng từ ngày sau`); }),
    haptic: () => openChoice('📳 Rung khi thao tác & chơi game', HAPTIC_NAMES.map((n, i) => [i, n]), S.settings.haptic ?? 2, (v) => { S.settings.haptic = v; requestSave(); setVal('haptic', HAPTIC_NAMES[v]); if (v > 0 && !buzz([40, 60, 40])) toast('Thiết bị hoặc ứng dụng này chưa cho web rung. Với APK: bật quyền VIBRATE trong công cụ tạo APK.', 'err', 3200); }),
    theme: () => openThemePicker(() => setVal('theme', THEMES[S.settings.theme].name)),
    style: () => openChoice('🎼 Nhạc nền & Mùa', MUSIC_OPTIONS, S.settings.style, (v) => { S.settings.style = v; restartMusic(); requestSave(); setVal('style', musicStyleName()); }),
    export: () => openExport(), import: () => openImport(), backups: () => openBackups(),
    reset: () => confirmBox('Chơi lại từ đầu?', 'Toàn bộ tiến trình sẽ bị xoá vĩnh viễn. Bạn chắc chắn chứ?', () => { closeAllModals(); wipeSave(); applyTheme(); emit('reset'); }, 'Xoá & chơi lại', true),
  });
}
function openExport() {
  const code = exportCode();
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">📦 Mã sao lưu</h3><p class="m-text">Sao chép mã bên dưới và cất ở nơi an toàn. Dán vào "Khôi phục từ mã" để chơi tiếp trên máy khác.</p>
    <textarea class="code" readonly data-code>${code}</textarea><button class="btn pri block" data-act="copy">📋 Sao chép</button><button class="btn ghost block" data-act="x">Đóng</button>` });
  bindActions(m.body, {
    copy: async () => { if (await copyText(code)) toast('Đã sao chép mã!', 'ok'); else { const input = $('[data-code]', m.body); input.focus(); input.select(); input.setSelectionRange(0, code.length); toast('Hãy nhấn giữ mã đã chọn để sao chép', ''); } },
    x: () => m.close(),
  });
}
function openImport() {
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">🔑 Khôi phục từ mã</h3><textarea class="code" data-code placeholder="Dán mã TTM3.… vào đây"></textarea>
    <button class="btn pri block" data-act="go">Khôi phục</button><button class="btn ghost block" data-act="x">Hủy</button>` });
  bindActions(m.body, {
    go: () => { if (importCode($('[data-code]', m.body).value)) { closeAllModals(); applyTheme(); emit('reset'); toast('Khôi phục thành công!', 'ok'); } else toast('Mã không hợp lệ', 'err'); },
    x: () => m.close(),
  });
}
function openBackups() {
  const list = listBackups();
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">🗂️ Bản tự lưu</h3>${list.length ? list.map((b) => `<button class="set-row" data-act="rb" data-i="${b.i}"><span class="si">💾</span><b>Ngày ${b.day} · ${fmtK(b.money)}</b><em>${new Date(b.t).toLocaleString('vi-VN')}</em></button>`).join('') : '<p class="m-text center">Chưa có bản tự lưu nào. Game tự lưu vào cuối mỗi ngày.</p>'}
    <button class="btn ghost block" data-act="x">Đóng</button>` });
  bindActions(m.body, {
    rb: (t) => confirmBox('Khôi phục bản này?', 'Tiến trình hiện tại sẽ bị thay thế.', () => { if (restoreBackup(+t.dataset.i)) { closeAllModals(); applyTheme(); emit('reset'); toast('Đã khôi phục!', 'ok'); } }),
    x: () => m.close(),
  });
}

/* ===== Hướng dẫn ===== */
export function openGuide() {
  const m = openModal({ id: 'guide', cls: 'settings', html: `<h2 class="set-title">${icon('book', 24)} Hướng dẫn chơi</h2>
    <div class="guide rich">${guideHTML()}</div>
    <button class="btn pri block" data-act="x" style="margin-top:6px">Đã hiểu</button>` });
  bindActions(m.body, { x: () => m.close() });
}
/* ===== Dự báo thời tiết ===== */
export function openForecast() {
  const ev = E.eventOf();
  const loc = LOCATIONS[S.location];
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">🌦️ Thời tiết & Mùa</h3>
    <p class="m-text center">${loc.icon} ${esc(loc.name)} · ${SEASONS[S.season].icon} Mùa ${SEASONS[S.season].name}</p>
    ${S.forecast.slice(0, 4).map((f, i) => { const w = WEATHERS[f.weather]; return `<div class="wx-row"><span class="wi">${w.icon}</span><div><b>${i === 0 ? 'Hôm nay' : 'Ngày ' + f.day} · ${f.temp}°C — ${w.name}</b><small>${esc(w.tip)}</small></div></div>`; }).join('')}
    <div class="wx-row ev"><span class="wi">${ev.icon}</span><div><b>Sự kiện hôm nay: ${esc(ev.name)}</b><small>${esc(ev.desc)}</small></div></div>
    <button class="btn pri block" data-act="x">Đóng</button>` });
  bindActions(m.body, { x: () => m.close() });
}

/* ===== Toàn màn hình (ẩn thanh địa chỉ trình duyệt) ===== */
let fsPending = false;
function lockPortrait() {
  try { const result = screen.orientation?.lock?.('portrait'); result?.catch?.(() => {}); } catch (e) { /* Device controls orientation. */ }
}
/** Đang chạy trong ứng dụng bọc APK (WebView) hoặc app cài đặt: ứng dụng tự lo chế độ toàn màn hình, web không xin nữa. */
const isEmbedded = () => /; wv\)/.test(navigator.userAgent) || !!(window.matchMedia && (window.matchMedia('(display-mode: fullscreen)').matches || window.matchMedia('(display-mode: standalone)').matches));
export function goFullscreen() {
  if (isEmbedded()) return;
  try {
    const d = document.documentElement;
    if (document.fullscreenElement || document.webkitFullscreenElement) { lockPortrait(); return; }
    if (fsPending) return;
    const f = d.requestFullscreen || d.webkitRequestFullscreen || d.msRequestFullscreen;
    if (f) {
      fsPending = true;
      const r = f.call(d, { navigationUI: 'hide' });
      if (r && r.then) r.then(() => { fsPending = false; lockPortrait(); }, () => { fsPending = false; });
      else fsPending = false;
    }
  } catch (e) { fsPending = false; /* Retry on the first user gesture. */ }
}
/** Thử vào toàn màn hình ở các lần chạm đầu; đã vào được một lần thì thôi, không làm phiền (và không bật lại thông báo của Chrome). */
let fsDone = false;
const fullscreenChanged = () => { if (document.fullscreenElement || document.webkitFullscreenElement) { fsDone = true; lockPortrait(); } };
document.addEventListener('fullscreenchange', fullscreenChanged);
document.addEventListener('webkitfullscreenchange', fullscreenChanged);
// chỉ xin toàn màn hình khi bấm nút chơi (không xin ở mọi lần chạm, tránh màn hình giật khi chạm linh tinh)

/* ===== Intro ===== */
export function showIntro(onPlay) {
  const el = $('#intro');
  el.hidden = false;
  const hasSave = S.started;
  el.innerHTML = `
    <div class="intro-sky"><span class="star">⭐</span><span class="cloud c1">☁️</span><span class="cloud c2">☁️</span><span class="cloud c3">☁️</span><span class="bubble-tea">🧋</span><span class="spark" style="left:12%;top:36%">✦</span><span class="spark" style="right:10%;top:44%;animation-delay:-1s">✦</span><span class="spark" style="left:46%;top:30%;animation-delay:-1.8s">✦</span></div>
    <div class="in-rays" aria-hidden="true"></div>
    <div class="in-fx" aria-hidden="true"><i class="bub" style="left:6%;--s:14px;--d:0.0s;--t:9.0s"></i><i class="bub" style="left:14%;--s:9px;--d:2.5s;--t:7.5s"></i><i class="bub" style="left:23%;--s:18px;--d:5.0s;--t:11.0s"></i><i class="bub" style="left:33%;--s:10px;--d:1.2s;--t:8.0s"></i><i class="bub" style="left:44%;--s:15px;--d:6.5s;--t:10.0s"></i><i class="bub" style="left:55%;--s:9px;--d:3.2s;--t:7.0s"></i><i class="bub" style="left:63%;--s:17px;--d:0.8s;--t:12.0s"></i><i class="bub" style="left:72%;--s:11px;--d:4.4s;--t:8.5s"></i><i class="bub" style="left:81%;--s:15px;--d:7.5s;--t:10.5s"></i><i class="bub" style="left:90%;--s:10px;--d:2.0s;--t:7.8s"></i><i class="bub" style="left:96%;--s:13px;--d:5.6s;--t:9.4s"></i> <i class="pet" style="left:8%;--d:0.0s;--t:11.0s;--x:40px">🌸</i><i class="pet" style="left:24%;--d:3.5s;--t:13.0s;--x:-30px">🌸</i><i class="pet" style="left:42%;--d:6.0s;--t:12.0s;--x:50px">🌸</i><i class="pet" style="left:61%;--d:1.5s;--t:14.0s;--x:-40px">🌸</i><i class="pet" style="left:78%;--d:8.0s;--t:11.5s;--x:30px">🌸</i><i class="pet" style="left:92%;--d:4.5s;--t:12.5s;--x:-35px">🌸</i></div>
    <div class="in-aw" aria-hidden="true"></div>
    <div class="in-lights" aria-hidden="true"><i style="--c:#ff7aa2;--d:0.0s"></i><i style="--c:#ffd45e;--d:0.2s"></i><i style="--c:#7fd6ff;--d:0.5s"></i><i style="--c:#9fe39a;--d:0.7s"></i><i style="--c:#ffa86b;--d:0.9s"></i><i style="--c:#c9a0ff;--d:1.2s"></i><i style="--c:#ff7aa2;--d:1.4s"></i><i style="--c:#ffd45e;--d:1.6s"></i><i style="--c:#7fd6ff;--d:1.8s"></i><i style="--c:#9fe39a;--d:2.1s"></i><i style="--c:#ffa86b;--d:2.3s"></i><i style="--c:#c9a0ff;--d:2.5s"></i><i style="--c:#ff7aa2;--d:2.8s"></i><i style="--c:#ffd45e;--d:3.0s"></i><i style="--c:#7fd6ff;--d:3.2s"></i><i style="--c:#9fe39a;--d:3.5s"></i><i style="--c:#ffa86b;--d:3.7s"></i><i style="--c:#c9a0ff;--d:3.9s"></i></div>
    <div class="in-birds" aria-hidden="true"><span class="b1">🕊️</span><span class="b2">🐦</span></div>
    <div class="in-lan" aria-hidden="true"><span>🏮</span><span>🎐</span><span>🏮</span></div>
    <div class="in-sign" aria-hidden="true">MỞ CỬA</div>
    <h1 class="intro-title"><span class="tt-spk a">✨</span><span class="tt-spk b">✦</span><span class="tt-spk c">✨</span>Tiệm Trà Mơ Ước</h1>
    <p class="intro-tag">Pha trà, đón khách, mở tiệm nhỏ của riêng bạn</p>
    <div class="intro-info">${esc(S.shopName)} · Ngày ${S.day} · ${fmtK(S.money)}</div>
    <div class="in-hero" aria-hidden="true"><span class="hero-glow"></span><span class="hero-cup">🧋</span><span class="hero-steam s1">✨</span><span class="hero-steam s2">✨</span><span class="hero-steam s3">💗</span></div>
    <button class="btn pri big" data-act="play">${hasSave ? 'Chơi tiếp' : 'Chơi mới'}</button>
    <button class="link" data-act="guide">Hướng dẫn</button>
    <div class="in-queue" aria-hidden="true"><span class="q1">🧑‍🎓<b>🧋</b></span><span class="q2">👩‍💼<b>🍵</b></span><span class="q3">👵<b>🧋</b></span><span class="q4">👦<b>🥤</b></span></div>
    <div class="in-counter" aria-hidden="true"><span class="in-plant">🌵</span><div class="in-cups"><span>🧋</span><span>🥤</span><span>🧃</span><span>🍵</span></div><div class="in-cat">🐱<small>z z</small></div><span class="in-plant">🪴</span></div>
    <div class="in-front" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="in-walk" aria-hidden="true"><span class="w1"><em class="stp">🚶‍♀️</em><i>🧋</i></span><span class="w2"><em class="rid">🛵</em></span><span class="w3"><em class="trt">🐕</em></span></div>
    <span class="in-corner l">🍓</span><span class="in-corner r">🍃</span>
    <small class="ver">${VERSION}</small>`;
  bindActions(el, { play: () => { goFullscreen(); el.hidden = true; onPlay(); }, guide: () => openGuide() });
}
void ITEMS; void SHIFT_START_H; void wait; void replaceState; void newState; void fmt; void on; void E;
