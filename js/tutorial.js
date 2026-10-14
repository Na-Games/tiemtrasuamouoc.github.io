/**
 * Hướng dẫn lần đầu dạng "coach mark": làm sáng một vùng giao diện + bong bóng giải thích từng bước.
 * Luôn có nút "Bỏ qua hướng dẫn". Hai chặng: 'home' (chuẩn bị) và 'sell' (ca bán hàng đầu tiên).
 */
import { S, $, h, esc, setPaused, requestSave, sfx, flushRender } from './core.js';
import * as E from './econ.js';

/** pre: thao tác tự chạy trước khi hiện bước (vd. chuyển sang đúng nhóm/tab để vùng sáng tồn tại). */
const goNav = (g) => () => { document.querySelector(`.nav-i[data-group="${g}"]`)?.click(); flushRender(); };
const goKho = (tab) => () => { goNav('kho')(); document.querySelector(`.tab[data-v="${tab}"]`)?.click(); flushRender(); };
const goGames = () => { goNav('them')(); document.querySelector('.tile[data-tab="crush"]')?.click(); flushRender(); };
const openingDescription = () => E.planTotal() > 0
  ? 'Bạn đang có kế hoạch nhập hàng. Nút hiện tại là <b>Nấu & nhập</b>: xác nhận để trả tiền và đưa hàng vào kho. Sau đó kiểm tra nguyên liệu trước khi mở cửa.'
  : E.openMissing().canOpen
    ? 'Kho đã đủ điều kiện mở cửa. Chạm <b>Mở cửa ngày…</b> để bắt đầu ca bán hàng. Topping không bắt buộc, nhưng cần nhập nếu muốn bán món có topping.'
    : 'Nút đang báo thiếu nguyên liệu và dẫn về Kho, chưa bắt đầu bán hàng. Cần có <b>trà đang bật trong menu, ít nhất một cỡ ly, đá và đường</b>. Nhập hàng xong, nút mới đổi thành <b>Mở cửa ngày…</b>.';
const STEPS = {
  home: [
    { sel: '.shopcard', ico: '🪧', t: 'Tiệm của bạn', d: 'Đây là <b>biển hiệu</b>. Chạm logo hoặc tên để đổi; hai nhãn nhỏ dẫn tới <b>Khởi nghiệp</b> và <b>Sảnh Trà</b>.' },
    { sel: '#board', ico: '🥤', t: 'Menu hôm nay', d: 'Bảng phấn liệt kê món đang bán và giá. Size L được cộng thêm tiền. Món nào không có nguyên liệu sẽ không bán được.' },
    { sel: '#nav', ico: '🧭', t: 'Thanh nhóm dưới cùng', d: '5 nhóm: <b>🏪 Tiệm · 📦 Kho · 📈 Phát triển · 👥 Xã hội · 🎀 Thêm</b>. Chọn nhóm rồi chạm ô chức năng ngay bên trên.' },
    { sel: '.nav-i[data-group="tiem"]', pre: goNav('tiem'), ico: '💵', t: 'Nhóm Tiệm · Giá bán', d: 'Vào <b>Giá bán</b> chỉnh giá Trà, Hương, Topping, Size. Giá quá cao khiến khách bỏ đi. Cùng nhóm có Sảnh, Tổng kết, Đánh giá.' },
    { sel: '.nav-i[data-group="pt"]', pre: goNav('pt'), ico: '🛠️', t: 'Nhóm Phát triển · Nâng cấp', d: 'Ô <b>Nâng cấp</b> mở khóa trà, topping và tiện ích. Có thể làm sau khi có tiền; cùng nhóm có Nhân sự, Chi nhánh, Khởi nghiệp.' },
    { sel: '.nav-i[data-group="kho"]', pre: goNav('kho'), ico: '📦', t: 'Vào Kho', d: 'Mở nhóm <b>Kho</b> để chọn nguyên liệu cho hôm nay. Mỗi ngày bạn nhập hàng ở đây trước khi mở cửa.' },
    { sel: '.tab[data-v="tra"]', pre: goKho('tra'), ico: '🫖', t: 'Tab Trà', d: 'Chọn loại <b>Trà</b> sẽ bán. Mỗi dòng cho biết tồn kho, vốn và hạn dùng ⏳.' },
    { sel: '.tab[data-v="top"]', pre: goKho('top'), ico: '🧋', t: 'Tab Topping', d: 'Chọn <b>Topping</b> khách hay gọi: trân châu, thạch, kem... Không cần nhập hết, chỉ nhập món bạn muốn bán.' },
    { sel: '.tab[data-v="dc"]', pre: goKho('dc'), ico: '🥤', t: 'Tab Dụng cụ', d: '<b>Ly M, ly L, đá, đường</b> dùng để pha chế. Có ít nhất một cỡ ly để mở cửa; nhập cả hai nếu muốn phục vụ đủ hai size.' },
    { sel: '.krow .stepper', pre: goKho('dc'), ico: '🔢', t: 'Lập số lượng cần nhập', d: 'Ô giữa là <b>số lượng dự định mua thêm</b>, không phải tồn kho. Gõ số 0–999 hoặc bấm <b>− / +</b> để giảm/tăng 1. Số 0 bỏ món khỏi kế hoạch. Hàng chỉ vào kho và tiền chỉ bị trừ khi xác nhận <b>Nấu & nhập</b>.' },
    { sel: '#cta .cta-btn', ico: '🛒', t: 'Xác nhận nhập hàng', d: () => E.planTotal() > 0 ? 'Nút <b>Nấu & nhập</b> xác nhận toàn bộ số lượng đã chọn và trừ tổng chi phí. Không đủ tiền thì giao dịch không thực hiện. Bấm Tiếp chỉ xem hướng dẫn, không mua hàng.' : 'Chưa có số lượng cần mua. Tăng số lượng trong Kho để hiện nút <b>Nấu & nhập</b>. Nút đỏ hiện tại dẫn tới nguyên liệu còn thiếu; nếu kho đủ hàng, nút sẽ là Mở cửa.' },
    { sel: '#cta .cta-btn', ico: '🏮', t: 'Điều kiện mở cửa', d: openingDescription },
    { sel: '.tile[data-tab="crush"]', pre: goNav('them'), ico: '🎮', t: 'Thêm · Trò chơi', d: 'Trong nhóm <b>Thêm</b>, chọn ô <b>Milk Tea Crush</b> để xem hai trò chơi phụ, tiến độ và phần thưởng. Trò chơi giúp bổ sung tiền, nguyên liệu hoặc thưởng doanh thu cho quán.' },
    { sel: '.panel-in [data-act="crush"]', pre: goGames, ico: '🍬', t: 'Milk Tea Crush', d: 'Đổi chỗ các ô kề nhau để ghép ít nhất <b>3 icon giống nhau</b>. Hoàn thành mục tiêu trong số lượt của màn. Ghép đặc biệt tạo hiệu ứng hàng/cột, bom hoặc cầu vồng. Mỗi màn vượt qua cộng <b>1% doanh thu vĩnh viễn</b>, tối đa 50%.' },
    { sel: '.panel-in [data-act="pearl"]', pre: goGames, ico: '🧋', t: 'Trân Châu Nổ', d: 'Chạm nhóm <b>ít nhất 2 viên cùng màu kề nhau</b>. Mục tiêu 120 điểm trong 30 giây; nổ liên tiếp trong 1,2 giây tăng combo. Cuối ván nhận tiền và trân châu theo kết quả. Tối đa <b>3 lượt mỗi ngày</b>; lượt chỉ bị tính khi bấm Bắt đầu.' },
  ],
  sell: [
    { sel: '#qrow', ico: '👥', t: 'Hàng đợi khách', d: 'Khách xếp hàng ở đây. Chạm avatar để phục vụ người khác trước, ưu tiên ai sắp hết <b>kiên nhẫn</b>.' },
    { sel: '.cust-zone', ico: '👤', t: 'Bong bóng order', d: 'Bong bóng ghi <b>size, loại trà, hương, topping</b>. Vòng quanh avatar là kiên nhẫn; cạn là khách bỏ đi.' },
    { sel: '.stacks', ico: '🥤', t: 'Lấy ly', d: 'Chạm đúng chồng ly <b>M</b> hoặc <b>L</b> khách gọi. Mỗi size có số lượng riêng, hết ly phải nhập thêm.' },
    { sel: '#disps', ico: '🫖', t: 'Rót trà', d: 'Chạm <b>bình trà</b> đúng loại để bắt đầu rót, chạm lại để dừng khi thanh chạy tới <b>vùng vàng</b>.' },
    { sel: '#trays', ico: '🧋', t: 'Topping & hương', d: 'Chạm các <b>khay topping</b> khách muốn; nếu có hương, chạm nút ở hàng <b>HƯƠNG</b> dưới khu PHA LY, phía trên khay topping. Đừng thêm thừa.' },
    { sel: '#sealer', ico: '🔒', t: 'Đóng nắp', d: 'Khi ly đã có trà, chạm <b>máy đóng nắp</b> để bắt đầu ép nắp. Chờ quá trình hoàn tất, rồi chạm <b>ly đã có nắp</b> để giao khách.' },
    { sel: '#wboard', ico: '🤝', t: 'Giao khách', d: 'Ly đã có nắp nằm trên thớt <b>PHA LY</b>: chạm để giao cho khách. Đúng đơn và nhanh thì 5 sao, có thể được boa.' },
    { sel: '.trash', ico: '🗑️', t: 'Thùng rác', d: 'Pha nhầm thì chạm <b>thùng rác</b> để đổ ly rồi làm lại.' },
    { sel: '.phone', ico: '📱', t: 'Đơn online', d: 'Số đỏ trên <b>điện thoại</b> là số đơn online đang chờ. Chạm để xem và nhận đơn.' },
    { sel: '#lobbyGo', ico: '🪑', t: 'Ra sảnh', d: 'Sảnh có bàn ghế: dọn bàn bẩn để khách ngồi tại quán và boa thêm.' },
    { sel: '#hud .hbtn.pause', ico: '⏸️', t: 'Tạm dừng & cài đặt', d: 'Nút <b>⏸</b> tạm dừng ca; bánh răng bên phải mở Cài đặt (màu, rung, nhạc). Chúc bạn bán đắt hàng! 🎉' },
  ],
};

let cur = null;

function ensureUi() {
  let el = $('#coach');
  if (el) return el;
  el = h('<div id="coach" class="coach" hidden><div class="coach-ring"></div><div class="coach-card"></div></div>');
  document.body.appendChild(el);
  return el;
}
function targetOf(step) {
  return step.sel.split(',').map((q) => document.querySelector(q.trim())).find((n) => n && n.offsetParent !== null) || null;
}
function place() {
  if (!cur) return;
  const el = $('#coach'), ring = el.querySelector('.coach-ring'), card = el.querySelector('.coach-card');
  // có hộp thoại đang mở: tạm ẩn hướng dẫn để không chồng lên giao diện
  el.style.visibility = document.querySelector('#modal .modal-back') ? 'hidden' : 'visible';
  const st = STEPS[cur.phase][cur.i];
  const t = targetOf(st);
  const vp = window.visualViewport;
  const topEdge = (vp?.offsetTop || 0) + 8;
  const bottomEdge = (vp?.offsetTop || 0) + (vp?.height || innerHeight) - 8;
  const app = document.querySelector('.app')?.getBoundingClientRect();
  card.style.left = `${app ? app.left + app.width / 2 : innerWidth / 2}px`;
  card.style.width = `${Math.min(440, (app?.width || innerWidth) - 20)}px`;
  card.style.maxHeight = `${bottomEdge - topEdge}px`;
  if (t) {
    // Move scrollable targets above the footer and reserve room for the explanation.
    const view = document.querySelector('#view');
    if (view?.contains(t) && cur.positioned !== cur.i) {
      const vr = view.getBoundingClientRect(), tr = t.getBoundingClientRect();
      const desired = vr.top + Math.min(24, Math.max(8, (vr.height - tr.height) / 2));
      view.scrollTop += tr.top - desired;
      cur.positioned = cur.i;
    }
    const r = t.getBoundingClientRect();
    ring.style.cssText = `display:block;left:${r.left - 5}px;top:${r.top - 5}px;width:${r.width + 10}px;height:${r.height + 10}px`;
    const above = Math.max(0, r.top - 12 - topEdge);
    const below = Math.max(0, bottomEdge - r.bottom - 12);
    const ch = card.offsetHeight || 160;
    const useBelow = below >= ch || below >= above;
    card.style.maxHeight = `${Math.max(1, useBelow ? below : above)}px`;
    card.style.top = `${useBelow ? r.bottom + 12 : Math.max(topEdge, r.top - 12 - card.offsetHeight)}px`;
  } else {
    ring.style.display = 'none';
    card.style.top = `${topEdge + Math.max(0, (bottomEdge - topEdge - card.offsetHeight) / 2)}px`;
  }
  cur.raf = requestAnimationFrame(place);
}
function show() {
  const el = ensureUi(), card = el.querySelector('.coach-card');
  const steps = STEPS[cur.phase], st = steps[cur.i], last = cur.i === steps.length - 1;
  el.hidden = false;
  if (st.pre && cur.pre !== cur.i) { cur.pre = cur.i; try { st.pre(); } catch (e) { /* bỏ qua */ } }
  card.innerHTML = `<div class="coach-h"><span class="coach-ico">${st.ico}</span><div><small>Bước ${cur.i + 1}/${steps.length}</small><b>${esc(st.t)}</b></div></div>
    <p>${typeof st.d === 'function' ? st.d() : st.d}</p>
    <div class="coach-dots">${steps.map((_, k) => `<i class="${k === cur.i ? 'on' : k < cur.i ? 'done' : ''}"></i>`).join('')}</div>
    <div class="coach-btns"><button class="btn ghost sm" data-c="skip">Bỏ qua hướng dẫn</button><button class="btn pri sm" data-c="next">${last ? 'Xong ✓' : 'Tiếp →'}</button></div>`;
  card.querySelector('[data-c="skip"]').onclick = () => { sfx('click'); end(true); };
  card.querySelector('[data-c="next"]').onclick = () => { sfx('click'); if (last) end(false); else { cur.i++; show(); } };
  cancelAnimationFrame(cur.raf);
  place();
}
function end(skipped) {
  if (!cur) return;
  cancelAnimationFrame(cur.raf);
  const phase = cur.phase;
  if (phase === 'sell') setPaused(false);
  cur = null;
  const el = $('#coach'); if (el) el.hidden = true;
  S.settings.tut = S.settings.tut || {};
  S.settings.tut[phase] = true;
  if (skipped) { S.settings.tut.home = true; S.settings.tut.sell = true; }
  requestSave();
}
export function startTutorial(phase) {
  if (cur) end(false);
  document.querySelectorAll('#modal [data-modal-x]').forEach((b) => b.click()); // đóng Cài đặt / Hướng dẫn... trước khi chạy
  cur = { phase, i: 0, raf: 0 };
  if (phase === 'sell') setPaused(true);
  show();
}
/** Gọi khi vừa tạo game mới: bật cờ hướng dẫn. */
export function armTutorial() { S.settings.tut = { home: false, sell: false }; requestSave(); }
export function replayTutorial() { S.settings.tut = { home: false, sell: false }; requestSave(); startTutorial(S.phase === 'sell' ? 'sell' : 'home'); }
export function maybeTutorial(phase) {
  const t = S.settings.tut;
  if (!t || t[phase] || cur) return;
  startTutorial(phase);
}
export const tutorialActive = () => !!cur;
