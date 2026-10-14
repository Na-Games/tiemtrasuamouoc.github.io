/**
 * Màn Home (chuẩn bị): biển hiệu, bảng menu, lưới 15 chức năng, banner sự kiện, khung nội dung, nút hành động dưới đáy.
 */
import { ITEMS, TEAS, TOPS, LOCATIONS } from './config.js';
import { S, markDirty, requestSave, emit, $, $$, h, esc, fmtK, sfx, wait } from './core.js';
import * as E from './econ.js';
import * as G from './sell.js';
import { toast, bindActions, openModal, logoHTML, closeAllModals } from './ui.js';
import { PANELS1 } from './panels1.js';
import { PANELS2 } from './panels2.js';
import { PANELS3 } from './panels3.js';
import { crush } from './minigames.js';
import { openLogoModal } from './avatar.js';
import { icon } from './icons.js';

export const PANELS = { ...PANELS1, ...PANELS2, ...PANELS3, crush };
export const TILES = [
  ['kho', 'Kho', '📦'], ['vuon', 'Vườn cây', '🪴'], ['thucung', 'Thú cưng', '🐕'], ['khoinghiep', 'Khởi nghiệp', '🗺️'], ['sanh', 'Sảnh Trà', '🏮'], ['chinhanh', 'Chi Nhánh', '🏢'],
  ['mxh', 'Mạng Xã Hội', '📱'], ['nhansu', 'Quản lý nhân sự', '🏆'], ['thue', 'Thuế & Bank', '📜'], ['nangcap', 'Nâng cấp', '🛠️'], ['giaban', 'Giá bán', '💵'], ['danhgia', 'Đánh giá', '⭐'],
  ['tongket', 'Tổng kết', '📊'], ['banbe', 'Bạn bè', '👥'], ['crush', 'Milk Tea Crush', '🍬'], ['suutam', 'Sưu tầm', '🎴'],
];
/** 16 chức năng gom thành 5 nhóm trên thanh điều hướng đáy. */
export const GROUPS = [
  { id: 'tiem', label: 'Tiệm', icon: '🏪', tabs: ['giaban', 'sanh', 'tongket', 'danhgia'] },
  { id: 'kho', label: 'Kho', icon: '📦', tabs: ['kho', 'vuon', 'thucung'] },
  { id: 'pt', label: 'Phát triển', icon: '📈', tabs: ['nangcap', 'nhansu', 'chinhanh', 'khoinghiep'] },
  { id: 'xh', label: 'Xã hội', icon: '👥', tabs: ['mxh', 'banbe'] },
  { id: 'them', label: 'Thêm', icon: '🎀', tabs: ['crush', 'thue', 'suutam'] },
];
const groupOf = (tab) => GROUPS.find((g) => g.tabs.includes(tab)) || GROUPS[1];
const TILE_BY_ID = Object.fromEntries(TILES.map((t) => [t[0], t]));
const ALL_TABS = TILES.map((t) => t[0]);

export function renderHome() {
  const view = $('#view');
  if (S.phase === 'sell') return;
  const loc = LOCATIONS[S.location];
  view.innerHTML = `<div class="home" id="home">
    <div class="home-awning" aria-hidden="true"></div>
    <div class="shopcard"><button class="sign-logo" data-act="logo" aria-label="Đổi logo quán">${logoHTML(52)}</button>
      <div class="sc-main"><button class="sign-name" data-act="rename" aria-label="Sửa tên tiệm"><span>${esc(S.shopName)}</span> <i>✎</i></button>
        <div class="loc-chips"><button class="chip y" data-act="goto" data-to="khoinghiep">${loc.icon} ${esc(loc.name)}</button><button class="chip green" data-act="goto" data-to="sanh">🏮 Sảnh Trà</button></div></div></div>
    <div class="chalk" id="board"></div>
    <div class="tiles" id="tiles"></div>
    <div class="evb" id="evb"></div>
    <div class="expect" id="exp"></div>
    <div class="panel" id="panel"></div>
  </div>`;
  renderBoard(); renderTiles(); renderEvent(); renderPanel();
  bindActions($('#home'), {
    logo: () => openLogoModal(),
    rename: () => openRename(),
    goto: (t) => goTab(t.dataset.to),
    tile: (t) => goTab(t.dataset.tab, false),
  });
  bindNav();
  const panelActs = new Proxy({}, { get: (_, k) => (t, e) => { const fn = PANELS[S.tab]?.acts?.[k]; if (fn) fn(t, e); else if (k === 'goto') goTab(t.dataset.to); } });
  bindActions($('#panel'), panelActs);
}
export function goTab(tab, scroll = true) {
  if (!ALL_TABS.includes(tab)) return;
  if (S.phase !== 'home' && S.phase !== 'end') return;
  S.tab = tab;
  markDirty('panel', 'tiles');
  if (scroll) setTimeout(() => $('#panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
}
export function renderTiles() {
  const g = groupOf(S.tab);
  const el = $('#tiles');
  if (el) el.innerHTML = g.tabs.map((id) => TILE_BY_ID[id]).map(([id, label, emo]) => `<button class="tile ${S.tab === id ? 'on' : ''}" data-act="tile" data-tab="${id}"><span class="t-i">${emo}</span>${label}${id === 'thucung' && !S.pet ? '<em>🔒</em>' : ''}</button>`).join('');
  renderNav();
}
/** Thanh điều hướng đáy (chỉ hiện ở màn chuẩn bị). */
export function renderNav() {
  const el = $('#nav');
  if (!el) return;
  const show = S.phase === 'home' || S.phase === 'end';
  el.hidden = !show;
  if (!show) { el.innerHTML = ''; return; }
  const cur = groupOf(S.tab).id;
  el.innerHTML = GROUPS.map((g) => `<button class="nav-i ${cur === g.id ? 'on' : ''}" data-act="nav" data-group="${g.id}" aria-label="${g.label}"><i class="nav-e">${g.icon}</i><span>${g.label}</span></button>`).join('');
}
let navBound = false;
function bindNav() {
  if (navBound) return;
  navBound = true;
  bindActions($('#nav'), {
    nav: (t) => {
      const g = GROUPS.find((x) => x.id === t.dataset.group);
      if (groupOf(S.tab).id === g.id) { $('#view')?.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      goTab(g.tabs[0], false);
      $('#view')?.scrollTo({ top: 0 });
    },
  });
}
export function renderEvent() {
  const ev = E.eventOf();
  const el = $('#evb');
  if (!el) return;
  el.innerHTML = `<span class="ev-i">${ev.icon}</span><div><b>Hôm nay: ${esc(ev.name)}</b><p>${esc(ev.desc)}</p></div>`;
  $('#exp').innerHTML = `👥 <b>~${E.expectedCustomers()}</b> <small>khách dự kiến</small> · ${E.weatherOf().icon} ${E.weatherOf().name}`;
}
export function renderBoard() {
  const el = $('#board');
  if (!el) return;
  const teas = TEAS.filter((t) => S.onMenu[t] && S.unlocked[t]);
  const tops = TOPS.filter((t) => S.onMenu[t] && S.unlocked[t]);
  const row = (n, p) => `<div class="cr"><span>${esc(n)}</span><b>${p}</b></div>`;
  el.innerHTML = `<h3>🥤 Menu hôm nay</h3>
    <div class="cols">${teas.map((t) => row(ITEMS[t].name, fmtK(E.priceOf(t)))).join('') || '<em>Chưa có món</em>'}</div>
    ${tops.length ? `<h5>Topping</h5><div class="cols">${tops.map((t) => row(ITEMS[t].name, '+' + fmtK(E.priceOf(t)))).join('')}</div>` : ''}
    <div class="sz">Size L +${fmtK(E.priceOf('sizeL'))}</div>`;
}
const tabScroll = {};
export function renderPanel() {
  const el = $('#panel');
  if (!el) return;
  const P = PANELS[S.tab] || PANELS.kho;
  el.innerHTML = `<div class="panel-in" data-tab="${S.tab}">${P.html()}</div>`;
  P.bind?.(el);
  // giữ tab đang chọn trong tầm nhìn khi hàng tab cuộn ngang (không bị kéo về đầu)
  const row = el.querySelector('.tabs.scroll');
  if (row) {
    const on = row.querySelector('.tab.on');
    if (on) row.scrollLeft = Math.max(0, on.offsetLeft - (row.clientWidth - on.offsetWidth) / 2);
    row.addEventListener('scroll', () => { tabScroll[S.tab] = row.scrollLeft; }, { passive: true });
  }
  renderEvent();
}
export function renderCta() {
  const el = $('#cta');
  if (!el) return;
  if (S.phase !== 'home') { el.innerHTML = ''; el.className = 'cta'; return; }
  const total = E.planTotal();
  const chk = E.openMissing();
  if (total > 0) {
    el.className = 'cta';
    el.innerHTML = `<button class="cta-btn" data-act="plan">Nấu & nhập · ${fmtK(total)}</button>`;
  } else if (!chk.canOpen) {
    el.className = 'cta bad';
    el.innerHTML = `<button class="cta-btn cta-red" data-act="tokho">⚠️ Chưa nấu ${chk.miss.map((m) => (m === 'Trà' ? '🫖 Trà' : m === 'Topping' ? '🧋 Topping' : '🥤 Dụng cụ')).join(' · ')}</button>`;
  } else {
    el.className = 'cta';
    el.innerHTML = `${chk.miss.length ? `<div class="cta-warn">⚠️ Chưa có ${chk.miss.join(', ')} — vẫn có thể mở cửa</div>` : ''}<button class="cta-btn" data-act="open">Mở cửa ngày ${S.day}</button>`;
  }
}
let ctaBound = false;
export function bindCta() {
  if (ctaBound) return;
  ctaBound = true;
  bindActions($('#cta'), {
    plan: () => { const e = E.commitPlan(); if (e) { toast(e, 'err'); sfx('error'); } else { sfx('coin'); toast('Đã nấu & nhập nguyên liệu!', 'ok'); } },
    tokho: () => { const missing = E.openMissing().miss; S.subtab.kho = missing.includes('Trà') ? 'tra' : missing.includes('Dụng cụ') ? 'dc' : 'top'; goTab('kho'); toast('Vào Kho chọn Trà, Topping, Dụng cụ rồi bấm Nấu & nhập', ''); },
    open: () => {
      S.settings.shiftMin = S.settings.shiftMinNext;
      const e = G.startShift();
      if (e) { toast(e, 'err'); sfx('error'); return; }
      sfx('bell'); markDirty('view', 'hud', 'cta');
    },
  });
}
function openRename() {
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">✏️ Tên tiệm của bạn</h3><input class="field" maxlength="24" value="${esc(S.shopName)}" data-name aria-label="Tên tiệm"><button class="btn pri block" data-act="ok">Lưu tên</button><button class="btn ghost block" data-act="x">Hủy</button>` });
  const inp = $('[data-name]', m.body);
  setTimeout(() => inp.focus(), 50);
  bindActions(m.body, {
    ok: () => { const v = inp.value.trim(); if (v) { S.shopName = v; markDirty('view', 'hud'); requestSave(); sfx('success'); toast('Biển hiệu mới! 🪧', 'ok'); } m.close(); },
    x: () => m.close(),
  });
}
/** Mở một menu trong modal (dùng khi đang bán hàng: Chi nhánh / Sưu tầm). */
export function openPanelModal(tab) {
  const P = PANELS[tab];
  const m = openModal({ id: 'pm-' + tab, cls: 'tall', html: `<div class="panel-in">${P.html()}</div>` });
  const redraw = () => { m.body.innerHTML = `<div class="panel-in">${P.html()}</div>`; P.bind?.(m.body); };
  bindActions(m.body, new Proxy({}, { get: (_, k) => (t, e) => { const fn = P.acts?.[k]; if (fn) { fn(t, e); setTimeout(redraw, 20); } } }));
  P.bind?.(m.body);
  return m;
}
void h; void $$; void emit; void wait; void closeAllModals; void G;
