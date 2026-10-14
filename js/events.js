/**
 * Sự kiện đột xuất khi mở cửa: mất điện, kiểm tra giấy phép kinh doanh, kiểm tra vệ sinh ATTP.
 * Trạng thái chạy nằm trong SH.ev (được lưu cùng snapshot ca); sự kiện đang chạy khi thoát app sẽ bị hủy an toàn.
 */
import { ITEMS, IDS } from './config.js';
import { S, on, markDirty, requestSave, sfx, buzz, rand, randInt, chance, clamp, sum, wpick, setPaused, isPaused, $, h, esc, fmtK } from './core.js';
import * as E from './econ.js';
import { SH, pushReview, stopPour } from './sell.js';
import { openModal, isModalOpen, bindActions } from './ui.js';

const INSPECTOR = { key: 'inspector', tag: '🕵️ Đoàn kiểm tra', avatar: '🕵️' };
const ROUND_K = (v) => Math.round(v / 1000) * 1000;

function blankEv() { return { bo: [], boI: 0, off: 0, flick: 0, halt: 0, mode: '', ins: [], pending: null }; }
function ensureEv() { if (!SH.ev) SH.ev = blankEv(); return SH.ev; }

/* ===== Lên lịch đầu ca / khôi phục ===== */
export function onShiftStart() {
  const ev = SH.ev = blankEv();
  clearUi();
  if (S.day < 2) return; // ngày đầu: không có sự kiện đột xuất
  const total = SH.total;
  const span = total - 60 - 25; // không trong 30s đầu/cuối, chừa chỗ cho thời gian mất điện
  const lastHad = (S.ev.blk || 0) > 0;
  let n = +wpick(lastHad ? { 0: 65, 1: 30, 2: 5 } : { 0: 42, 1: 41, 2: 17 });
  if (span < 120) n = Math.min(n, 1);
  for (let i = 0; i < n; i++) ev.bo.push(Math.round(30 + span * (i + rand(0.1, 0.9)) / n));
  S.ev.blk = n;
  const sinceLic = S.day - (S.ev.lic || 0), sinceFood = S.day - (S.ev.food || 0);
  const wantLic = S.day >= 3 && sinceLic >= 2 && chance(clamp(0.22 + 0.08 * (sinceLic - 2), 0.22, 0.7));
  const wantFood = S.day >= 4 && sinceFood >= 2 && chance(clamp(0.2 + 0.08 * (sinceFood - 2), 0.2, 0.65));
  const used = [...ev.bo];
  const place = (lo, hi) => {
    let t = total * rand(lo, hi);
    for (let k = 0; k < 8 && used.some((u) => Math.abs(u - t) < 45); k++) t = total * rand(lo, hi);
    used.push(t);
    return Math.round(t);
  };
  if (wantLic) { ev.ins.push({ k: 'lic', at: place(0.25, 0.7), done: false }); S.ev.lic = S.day; }
  if (wantFood) { ev.ins.push({ k: 'food', at: place(0.3, 0.75), done: false }); S.ev.food = S.day; }
}
/** Khôi phục ca từ snapshot: hủy mọi sự kiện đang chạy dở. */
export function onRestore() {
  const ev = ensureEv();
  Object.assign(ev, { off: 0, flick: 0, halt: 0, mode: '', pending: null, generatorPending: false });
  ev.bo = Array.isArray(ev.bo) ? ev.bo : []; ev.ins = Array.isArray(ev.ins) ? ev.ins : [];
  clearUi();
}

/* ===== Truy vấn dùng ở sell.js ===== */
/** Trả thông báo lỗi nếu thao tác bị chặn (mất điện / bị đình chỉ), ngược lại null. kind: 'pump' | 'seal' | khác. */
export function blocked(kind) {
  const ev = SH.ev;
  if (!ev || !SH.on) return null;
  if (ev.halt > 0) return 'Quán đang bị đình chỉ!';
  if (ev.off > 0) {
    if (kind === 'pump' && ev.mode !== 'gen2') return 'Đang mất điện!';
    if (kind === 'seal' && ev.mode === 'full') return 'Đang mất điện!';
  }
  return null;
}
export const halted = () => !!(SH.ev && SH.ev.halt > 0);

/* ===== Vòng cập nhật (gọi từ updateShift) ===== */
export function update(dt) {
  const ev = SH.ev;
  if (!ev) return;
  if (ev.flick > 0) ev.flick = Math.max(0, ev.flick - dt);
  if (ev.halt > 0) { ev.halt = Math.max(0, ev.halt - dt); if (!ev.halt) note('✅ Quán được mở cửa trở lại', 'ok'); }
  if (ev.off > 0) { ev.off -= dt; if (ev.off <= 0) endBlackout(); }
  else if (ev.boI < ev.bo.length && SH.t >= ev.bo[ev.boI] && SH.t < SH.total - 25) { ev.boI++; startBlackout(); }
  if (!ev.pending) {
    const due = ev.ins.find((x) => !x.done && SH.t >= x.at && SH.t < SH.total - 8);
    if (due) { due.done = true; ev.pending = due.k; }
  }
  if (ev.generatorPending && ev.off > 0 && !isModalOpen()) offerGenerator();
  if (ev.pending && ev.off <= 0 && !ev.halt && !isModalOpen()) openInspection(ev.pending);
  sync();
}

/* ===== Mất điện ===== */
function startBlackout(sec) {
  const ev = ensureEv();
  const gen = E.equipLevel('mayPhat');
  buzz([60, 40, 60, 40, 120]);
  sfx('alarm');
  if (ev.off > 0) return;
  ev.off = sec || rand(15, 25);
  ev.mode = 'full'; ev.flick = 1.2;
  if (SH.board?.pouring) stopPour();
  ev.generatorPending = gen > 0;
  note('⚡ Mất điện! Bình trà và máy đóng nắp tạm ngừng', 'err');
  if (ev.generatorPending && !isModalOpen()) offerGenerator();
  sync();
}
export function requestGenerator() {
  const ev = ensureEv();
  if (!SH.on || ev.off <= 0) return 'Điện lưới đang hoạt động, chưa cần máy phát';
  if (!E.equipLevel('mayPhat')) return 'Chưa mua máy phát điện';
  if (ev.mode !== 'full') return 'Máy phát đang chạy';
  ev.generatorPending = true;
  if (!isModalOpen()) offerGenerator();
  return null;
}
function offerGenerator() {
  const ev = ensureEv(), gen = E.equipLevel('mayPhat');
  ev.generatorPending = false;
  if (!gen || ev.off <= 0) return;
  const wasPaused = isPaused();
  setPaused(true);
  const m = openModal({ id: 'generator', cls: 'small ev-modal', closable: false, title: 'Dùng máy phát điện',
    onClose: () => { setPaused(wasPaused); requestSave(); },
    html: `<div class="ev-ico">🔌</div><h3 class="m-title">Mất điện — bật máy phát?</h3><p class="m-text">${gen >= 2 ? 'Máy công suất lớn cấp điện cho bình trà, máy đóng nắp và đèn. Bạn tiếp tục pha và bán hàng.' : 'Máy mini cấp điện cho máy đóng nắp và đèn. Bình trà chờ điện lưới; nâng C2 để chạy toàn bộ quầy.'}</p><div class="m-row"><button class="btn ghost" data-act="no">Chờ điện lưới</button><button class="btn pri" data-act="yes">🔌 Đồng ý sử dụng</button></div>` });
  let decided = false;
  bindActions(m.body, {
    yes: () => { if (decided) return; decided = true; if (ev.off > 0) { ev.mode = gen >= 2 ? 'gen2' : 'gen1'; ev.flick = gen >= 2 ? rand(1, 2) : 0; } sync(); m.close(); note('🔌 Máy phát điện đang chạy', 'ok'); },
    no: () => { if (decided) return; decided = true; m.close(); },
  });
}
function endBlackout() {
  const ev = ensureEv();
  ev.off = 0; ev.mode = ''; ev.generatorPending = false;
  note('💡 Đã có điện trở lại', 'ok');
  sfx('success');
  sync();
}

/* ===== Lớp giao diện (overlay nằm dưới modal, không chặn nút) ===== */
let uiKey = '';
function layer() {
  let el = $('#evlayer');
  if (!el) {
    el = h('<div id="evlayer" class="ev-layer" aria-hidden="true"><div class="ev-dark"></div><div class="ev-badge"></div></div>');
    $('#app').appendChild(el);
  }
  return el;
}
function sync() {
  const ev = SH.ev, app = $('#app');
  if (!ev || !app) return;
  const off = ev.off > 0, halt = ev.halt > 0, flick = ev.flick > 0;
  const key = `${off ? ev.mode : ''}|${flick ? 1 : 0}|${halt ? 1 : 0}|${Math.ceil(ev.off)}|${Math.ceil(ev.halt)}`;
  if (key === uiKey) return;
  uiKey = key;
  app.classList.toggle('ev-off', off && ev.mode === 'full');
  app.classList.toggle('ev-gen1', off && ev.mode === 'gen1');
  app.classList.toggle('ev-flick', flick);
  app.classList.toggle('ev-halt', halt);
  if (!off && !halt && !flick) { $('#evlayer')?.remove(); return; }
  const badge = $('.ev-badge', layer());
  if (off) badge.textContent = ev.mode === 'gen2' ? `🔌 Máy phát đang chạy · ${Math.ceil(ev.off)}s` : ev.mode === 'gen1' ? `🔌 Máy phát mini · bình trà chờ điện · ${Math.ceil(ev.off)}s` : `⚡ MẤT ĐIỆN · ${Math.ceil(ev.off)}s`;
  else if (halt) badge.textContent = `🚫 Quán bị đình chỉ · ${Math.ceil(ev.halt)}s`;
  else badge.textContent = '';
  badge.style.display = badge.textContent ? '' : 'none';
}
function clearUi() {
  uiKey = '';
  $('#evlayer')?.remove();
  $('#app')?.classList.remove('ev-off', 'ev-gen1', 'ev-flick', 'ev-halt');
}
/** Toast riêng (hiện cả khi đang bán), chỉ một toast cho mỗi nội dung. */
function note(msg, type = '') {
  const root = $('#toasts');
  if (!root || [...root.children].some((x) => x.dataset.msg === msg || x.textContent === msg)) return;
  const t = h(`<div class="toast ${type}">${esc(msg)}</div>`);
  t.dataset.msg = msg;
  root.appendChild(t);
  while (root.children.length > 3) root.firstElementChild.remove();
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 260); }, 2800);
}
on('shift:end', clearUi);
on('reset', clearUi);

/* ===== Kiểm tra đột xuất ===== */
function money(delta) { S.money = Math.max(0, S.money + delta); markDirty('hud'); }
function fine(amount) {
  const pay = Math.min(amount, S.money);
  S.money -= pay;
  S.today.fine = (S.today.fine || 0) + pay;
  markDirty('hud');
  return pay;
}
function reward(amount) {
  money(amount);
  S.today.tips += amount; SH.tip += amount; SH.rev += amount;
  return amount;
}
const row = (cls, ico, title, detail) => `<div class="ev-row ${cls}"><i>${ico}</i><div><b>${title}</b><small>${detail}</small></div></div>`;
const verdict = (cls, text) => `<div class="ev-verdict ${cls}">${text}</div>`;

function licenseResult() {
  const has = E.equipLevel('giayPhep') > 0;
  if (has) {
    const r = reward(clamp(ROUND_K(SH.rev * 0.05), 30000, 150000));
    pushReview(INSPECTOR, 5, 'Quán có giấy phép kinh doanh đầy đủ, làm ăn đàng hoàng, uy tín!');
    S.followers += 30;
    return { rows: row('ok', '✅', 'Giấy phép kinh doanh', 'Hợp lệ, còn hiệu lực'), v: verdict('ok', `ĐẠT · thưởng +${fmtK(r)} · +1 đánh giá 5★ · +30 người theo dõi`) };
  }
  const f = fine(clamp(ROUND_K(SH.rev * 0.25 + 80000), 120000, 800000));
  const halt = Math.round(rand(30, 45));
  SH.ev.halt = halt;
  pushReview(INSPECTOR, 2, 'Nghe nói quán bị đình chỉ vì chưa có giấy phép kinh doanh...');
  return { rows: row('bad', '❌', 'Giấy phép kinh doanh', 'Không xuất trình được giấy phép'), v: verdict('bad', `BỊ PHẠT −${fmtK(f)} · đình chỉ ${halt} giây (khách vẫn phải chờ)`) + '<p class="ev-tip">💡 Mua “Giấy phép kinh doanh” ở Nâng cấp › Trang bị.</p>' };
}
function foodResult() {
  const cert = E.equipLevel('attp') > 0;
  const dirty = SH.tables.filter((t) => t.s === 'dirty').length;
  let overdue = 0, today = 0;
  const bad = [];
  for (const id of IDS) {
    for (const l of S.stock[id] || []) {
      if (l.exp === -1 || l.q <= 0) continue;
      if (l.exp < S.day) { overdue += l.q; bad.push(ITEMS[id].name); } else if (l.exp === S.day) today += l.q;
    }
  }
  const crit = [];
  if (!dirty) crit.push([0, '✅', 'Vệ sinh sảnh', 'Tất cả bàn đều sạch sẽ']);
  else if (dirty === 1) crit.push([1, '⚠️', 'Vệ sinh sảnh', '1 bàn chưa được dọn']);
  else crit.push([2, '❌', 'Vệ sinh sảnh', `${dirty} bàn bẩn chưa dọn`]);
  if (overdue) crit.push([2, '❌', 'Hạn sử dụng nguyên liệu', `${overdue} phần quá hạn còn trong kho (${[...new Set(bad)].slice(0, 3).join(', ')})`]);
  else if (today) crit.push([1, '⚠️', 'Hạn sử dụng nguyên liệu', `${today} phần hết hạn trong hôm nay, cần dùng/bỏ sớm`]);
  else crit.push([0, '✅', 'Hạn sử dụng nguyên liệu', 'Không có hàng quá hạn hay sắp hết hạn']);
  crit.push(cert ? [0, '✅', 'Chứng nhận ATTP', 'Có chứng nhận an toàn thực phẩm'] : [1, '⚠️', 'Chứng nhận ATTP', 'Chưa có chứng nhận ATTP']);
  const score = sum(crit, (c) => c[0]);
  const rows = crit.map(([lv, ico, t, d]) => row(lv === 0 ? 'ok' : lv === 1 ? 'warn' : 'bad', ico, t, d)).join('');
  if (score <= 1) {
    const r = reward(clamp(ROUND_K(SH.rev * 0.06 * (cert ? 1.5 : 1)), 40000, 180000));
    pushReview(INSPECTOR, cert ? 5 : 4, 'Quán sạch sẽ, nguyên liệu tươi, đạt chuẩn vệ sinh an toàn thực phẩm!');
    return { rows, v: verdict('ok', `ĐẠT · thưởng +${fmtK(r)} · +1 đánh giá ${cert ? 5 : 4}★`) };
  }
  if (score <= 3) {
    pushReview(INSPECTOR, 3, 'Đoàn kiểm tra nhắc nhở quán cần chú ý vệ sinh hơn.');
    return { rows, v: verdict('warn', 'CẢNH CÁO · không bị phạt tiền · −1 đánh giá 3★') + '<p class="ev-tip">💡 Dọn bàn kịp thời, dùng topping cũ trước và mua chứng nhận ATTP để tránh bị phạt.</p>' };
  }
  const f = fine(Math.round(clamp(ROUND_K(SH.rev * 0.15 + 60000), 100000, 500000) * (cert ? 0.5 : 1) / 1000) * 1000);
  pushReview(INSPECTOR, 1, 'Quán bị xử phạt vì mất vệ sinh an toàn thực phẩm, thất vọng!');
  return { rows, v: verdict('bad', `BỊ PHẠT −${fmtK(f)} · −1 đánh giá 1★`) + '<p class="ev-tip">💡 Dọn bàn bẩn, bỏ nguyên liệu quá hạn và mua chứng nhận ATTP (giảm 50% tiền phạt).</p>' };
}

function openInspection(kind) {
  const ev = ensureEv();
  ev.pending = null;
  setPaused(true);
  sfx('alarm'); buzz([40, 30, 40]);
  const lic = kind === 'lic';
  const title = lic ? 'Kiểm tra giấy phép kinh doanh' : 'Kiểm tra vệ sinh ATTP';
  const hasLicense = E.equipLevel('giayPhep') > 0;
  let checked = false;
  const m = openModal({
    id: 'inspect', cls: 'small ev-modal', closable: false, title,
    onClose: () => { if (!isModalOpen('pause')) setPaused(false); markDirty('hud'); requestSave(); },
    html: `<div class="ev-ico">🕵️</div><h3 class="m-title">Đoàn kiểm tra đang tới!</h3>
      <p class="m-text center">${lic ? 'Đoàn thanh tra yêu cầu xuất trình giấy phép kinh doanh của quán.' : 'Đoàn kiểm tra vệ sinh an toàn thực phẩm đang xem xét quầy, sảnh và kho nguyên liệu.'}</p>
      ${lic ? `<p class="m-text center">${hasLicense ? '📜 Giấy phép đã mua đang có tại quán.' : '⚠️ Quán chưa có giấy phép kinh doanh.'}</p>` : ''}
      <button class="btn pri block" data-act="go">${lic ? hasLicense ? '📜 Xuất trình giấy phép' : 'Xác nhận chưa có giấy phép' : '🧪 Xác nhận kiểm tra vệ sinh'}</button>`,
  });
  bindActions(m.body, {
    go: () => {
      if (checked) return;
      checked = true;
      const r = lic ? licenseResult() : foodResult();
      m.body.innerHTML = `<div class="ev-ico">${lic ? '📜' : '🧪'}</div><h3 class="m-title">${title}</h3>
        <div class="ev-list">${r.rows}</div>${r.v}<button class="btn pri block" data-act="ok">Đã hiểu</button>`;
      sfx('bell');
    },
    ok: () => m.close(),
  });
}

/* ===== Hook thử nghiệm: debugGame.events.* ===== */
const inShift = () => (SH.on && S.phase === 'sell' ? true : (console.warn('[events] cần đang trong ca bán hàng'), false));
export const debugEvents = {
  blackout: (sec) => { if (inShift()) startBlackout(sec); },
  licenseCheck: () => { if (inShift()) ensureEv().pending = 'lic'; },
  foodCheck: () => { if (inShift()) ensureEv().pending = 'food'; },
};
