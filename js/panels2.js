import { staffArt } from './sell-art.js';
/**
 * Menu Home (2/3): Quản lý nhân sự · Thuế & Bank · Chi nhánh · Mạng xã hội.
 */
import { STAFF, BRANCHES, FRANCHISE, ADS, TAX, BANK, ITEMS } from './config.js';
import { S, markDirty, requestSave, esc, fmt, fmtK, sum, sfx, clamp, rand, randInt, pick, chance, emit, h } from './core.js';
import * as E from './econ.js';
import { toast, fxSpark, logoHTML, openModal, alertBox, bindActions, confirmBox } from './ui.js';
import { genPost } from './sell.js';

/* ===== QUẢN LÝ NHÂN SỰ ===== */
function staffCard(st) {
  const hired = !!S.staff[st.id];
  const why = E.hireBlock(st.id);
  const wageTxt = `${fmtK(st.wage)}/ngày${st.revPct ? ` + ${st.revPct * 100}% doanh thu` : ''}`;
  return `<div class="staffcard ${hired ? 'hired' : ''}"><div class="sc-top"><span class="sc-av">${staffArt(st.id)}</span><div class="grow"><b>${esc(st.name)}</b><small>(${esc(st.role)})</small>
      <div class="sc-st">${hired ? '🟢 Đang làm' : '⚪ Chưa tuyển'}</div><div class="sc-w">💵 Lương ${wageTxt}</div></div>
      ${hired ? `<button class="btn ghost sm" data-act="fire" data-id="${st.id}">Cho nghỉ</button>` : why ? `<span class="why">${esc(why)}</span>` : `<button class="btn pri sm" data-act="hire" data-id="${st.id}">${fmtK(st.hire)}<br/>Thuê</button>`}</div>
    <details class="fold"><summary>Xem chi tiết</summary><p class="sc-d">${esc(st.desc)}</p></details></div>`;
}
const nhansu = {
  html() {
    const n = S.kpi.shifts;
    const callPct = Math.min(8, E.staffCount());
    const hiredList = STAFF.filter((s) => S.staff[s.id]);
    const avail = STAFF.filter((s) => !S.staff[s.id]);
    return `<div class="kpi"><div class="kpi-h"><b>📊 Chu kỳ xét KPI & Trả lương 7 ca bán nước</b><span class="chip">Ca ${n}/7</span></div>
      <div class="bar"><i style="width:${(n / 7 * 100).toFixed(0)}%"></i></div>
      <p>Đã tích luỹ ${n}/7 ca bán. Còn ${7 - n} ca bán nữa sẽ đến đợt xét KPI & thanh toán dồn tiền lương, cho toàn bộ nhân viên. Lương chờ thanh toán: ${fmtK(S.kpi.payable || 0)}.</p>
      <span class="chip green">📣 Gọi thêm khách: +${callPct}%</span>
      <button class="btn soft block" data-act="kpi">🔍 Xem chi tiết KPI & Phong độ nhân viên</button></div>
      ${hiredList.length ? `<h5 class="grp">Đội ngũ quán (${hiredList.length})</h5>${hiredList.map(staffCard).join('')}` : `<div class="emptybox">👨‍🍳<b>Chưa có nhân viên nào trong đội ngũ quán</b><p>Bạn có thể bấm <b>Thuê</b> ngay ứng viên bên dưới để bắt đầu chấm công & xét KPI.</p></div>`}
      <h5 class="grp">➕ TUYỂN THÊM NHÂN VIÊN MỚI (${avail.length}):</h5>${avail.map(staffCard).join('')}`;
  },
  acts: {
    hire: (t) => { const e = E.hire(t.dataset.id); if (e) { toast(e, 'err'); sfx('error'); } else { sfx('success'); toast('Đã thuê nhân viên mới! 👏', 'ok'); } },
    fire: (t) => confirmBox('Cho nghỉ việc?', 'Nhân viên sẽ rời quán và bạn không được hoàn phí tuyển dụng.', () => { E.fire(t.dataset.id); toast('Đã cho nghỉ việc', ''); }, 'Cho nghỉ', true),
    kpi: () => {
      const rows = STAFF.filter((s) => S.staff[s.id]);
      alertBox('📋 KPI & phong độ nhân viên', rows.length ? rows.map((s) => `<div class="dl"><span>${s.icon} ${esc(s.name)}</span><b>${S.staff[s.id].shifts || 0} ca · ${fmtK(s.wage)}/ngày</b></div>`).join('') + `<p class="muted">Tổng lương: ${fmtK(E.staffWagePerDay())}/ngày. Nhân viên làm càng lâu tốc độ càng ổn định.</p>` : '<p>Chưa có nhân viên để chấm KPI.</p>');
    },
  },
};

/* ===== THUẾ & BANK ===== */
const fmtCountdown = (ms) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};
export function tickCountdown() {
  const el = document.querySelector('[data-cd="tax"]');
  if (el) el.textContent = fmtCountdown(S.tax.until - Date.now());
}
function taxReceipt(amount) {
  const until = new Date(S.tax.until);
  const m = openModal({ cls: 'small', html: `<div class="receipt"><div class="r-ico">🏛️📜</div><h3>BIÊN LAI ĐÓNG THUẾ TRỰC TUYẾN 72H</h3>
    <div class="r-box"><p>✅ <b>Trạng thái:</b> ĐÃ NỘP THUẾ THÀNH CÔNG</p><p>💰 <b>Số tiền nộp:</b> ${fmtK(amount)} (${Math.round(S.tax.rate * 100)}% két)</p><p>⏱️ <b>Thời hạn bảo hộ:</b> 72 Giờ Thực Tế (3 ngày) (đến ${until.toLocaleString('vi-VN')})</p>
    <p>✨ <b>Hiệu ứng kích hoạt:</b></p><p>• Tăng +15% khách hàng ghé quán.</p><p>• Tăng +15% tốc độ làm việc của toàn bộ nhân viên.</p><p>• Giảm 15% nguy cơ trộm cắp, tiền giả và bùng tiền!</p><p>• Tăng +15% tỉ lệ may mắn x2 tiền bill mỗi ly nước!</p></div></div>
    <button class="btn pri block" data-act="ok">Đã hiểu & Xác nhận</button>` });
  bindActions(m.body, { ok: () => m.close() });
}
const thue = {
  html() {
    const active = E.taxActive();
    const rate = S.tax.rate;
    const amt = Math.round(S.money * rate);
    const b = S.bank;
    const principal = b.principal || 0;
    return `<div class="taxcard"><h4>🏛️ ĐÓNG THUẾ TRỰC TUYẾN 72H (3 NGÀY THỰC)</h4><p>Đóng thuế mỗi 3 ngày thực tế (72 giờ) để Buff toàn diện & phòng ngừa trộm cắp.</p>
      ${active ? `<div class="ok-box">🟡 <b>BUFF THUẾ ĐANG CÓ HIỆU LỰC</b><div>⏳ Hạn chót: <b data-cd="tax">${fmtCountdown(S.tax.until - Date.now())}</b></div><small>Đã nộp thuế; không cần đóng lại trước khi hết thời hạn.</small></div>` : `<div class="warn-box">⏰ Chưa có buff thuế. Nộp thuế để nhận hiệu ứng trong 72 giờ thực.</div>`}
      <div class="tax-sel"><b>💰 Chọn mức đóng thuế theo số tiền két hiện có</b><p class="muted">Két hiện có: <b>${fmtK(S.money)}</b> · Mức thuế quy định từ ${TAX.minRate * 100}% đến ${TAX.maxRate * 100}%.</p>
        <div class="rate-row"><span>Tỉ lệ đóng thuế:</span><b>${Math.round(rate * 100)}%</b></div>
        <input type="range" min="5" max="15" step="1" value="${Math.round(rate * 100)}" data-rate aria-label="Tỉ lệ thuế">
        <div class="rate-btns">${[5, 8, 10, 12, 15].map((r) => `<button class="rb2 ${Math.round(rate * 100) === r ? 'on' : ''}" data-act="rate" data-r="${r}">${r}%${r === 5 ? '<small>(Tối thiểu)</small>' : r === 15 ? '<small>(Tối đa)</small>' : ''}</button>`).join('')}</div>
        <div class="tax-amt">Số tiền thuế cần nộp: <b>${fmtK(amt)}</b> · Quyền lợi nhận được: <b>Buff +15% / 72h</b></div>
        <button class="btn pri block" data-act="pay" ${active ? 'disabled' : ''}>🏛️ ${active ? 'Đã nộp thuế (đang có buff)' : `Nộp thuế ngay (${fmtK(amt)} · Buff +15%)`}</button></div>
      <div class="bank"><div class="bank-h"><small>BẢO HỘ TÀI CHÍNH AN TOÀN 100%</small><h4>🏦 NGÂN HÀNG TÀ TƯA BANK</h4><span class="chip y">LÃI KÉP ${BANK.interest * 100}%/NGÀY</span></div>
        <div class="bank-st"><div><small>💰 Tiền gửi hiện tại:</small><b>${fmtK(b.balance)}</b><em>(Gốc: ${fmtK(principal)})</em></div><div><small>📈 Hạn mức gửi tối đa:</small><b>${fmtK(BANK.max)}</b><em>(+${BANK.starBonus * 100}% khi đạt 4,5★; khi quá 1 tỷ tăng +${BANK.bigBonus * 100}%, tối đa 99 Tỷ)</em></div></div>
        <div class="bank-lock">🔒 Kỳ hạn cam kết: <b>${BANK.lockShifts} ngày bán nước</b> · Tiến độ: <b>${Math.min(b.shifts, BANK.lockShifts)}/${BANK.lockShifts}</b> ngày. Rút trước hạn sẽ mất toàn bộ tiền lãi.</div>
        <p class="bank-note">🔐 <b>Đặc quyền:</b> Tiền gửi tuyệt đối không bị trộm cắp, bùng tiền hay lừa đảo.</p>
        <div class="dep-btns"><button class="btn gold sm" data-act="dep" data-p="0.1">Gửi 10% két</button><button class="btn gold sm" data-act="dep" data-p="0.5">Gửi 50%</button><button class="btn gold sm" data-act="dep" data-p="1">Gửi tất cả</button></div>
        <button class="btn soft block" data-act="wd" ${b.balance > 0 ? '' : 'disabled'}>💸 Rút tiền</button></div>
      <details class="policy fold"><summary>📜 Chính sách thuế & Thống kê tiệm</summary><p>• Chu kỳ 72 giờ (3 ngày) thực tế. Hết 72h cần đóng chu kỳ mới, không cộng dồn.</p><p>• Nộp từ 5% đến 15% két để nhận buff cố định +15% trong 72 giờ; chọn mức cao hơn không cộng dồn buff.</p><p>• Nhân viên Me kết tinh: Khi đã thuê, quán không bị phạt chậm thuế; chuyển thành thời gian ân hạn duy trì buff.</p><p>• Tổng thuế đã nộp: <b>${fmtK(S.tax.paid)}</b></p></details>`;
  },
  acts: {
    rate: (t) => { S.tax.rate = +t.dataset.r / 100; markDirty('panel'); },
    pay: () => {
      const result = E.payTax();
      if (typeof result === 'string') return toast(result, 'err');
      sfx('success'); taxReceipt(result);
    },
    dep: (t) => {
      const result = E.depositBank(+t.dataset.p);
      if (typeof result === 'string') return toast(result, 'err');
      sfx('coin'); toast(`Đã gửi ${fmtK(result)}`, 'ok');
    },
    wd: () => {
      const b = S.bank;
      const early = b.shifts < BANK.lockShifts;
      confirmBox('Rút tiền tiết kiệm?', early ? `Chưa đủ ${BANK.lockShifts} ngày cam kết: chỉ nhận lại tiền gốc ${fmtK(b.principal || 0)}, mất lãi ${fmtK(b.balance - (b.principal || 0))}.` : `Bạn sẽ nhận ${fmtK(b.balance)} gồm cả lãi.`, () => {
        const result = E.withdrawBank();
        if (typeof result === 'string') return toast(result, 'err');
        sfx('coin');
      }, 'Rút tiền');
    },
  },
  bind(root) { root.querySelector('[data-rate]')?.addEventListener('input', (e) => { S.tax.rate = +e.target.value / 100; markDirty('panel'); }); },
};

/* ===== CHI NHÁNH ===== */
function branchHTML() {
  return `<div class="brh"><h4>🏢 HỆ THỐNG CHI NHÁNH TRỰC THUỘC</h4><p>Mở rộng chuỗi cửa hàng trà sữa để thu hút thêm khách và tạo dòng tiền thụ động mỗi ngày.</p></div>` +
    BRANCHES.map((b) => {
      const o = S.branches[b.id];
      const cost = b.cost;
      const lastTxt = o?.last ? `<small>Hôm qua: doanh thu ${fmtK(o.last.r)} · lãi ròng <b class="${o.last.p >= 0 ? 'pos' : 'neg'}">${fmtK(o.last.p)}</b></small>` : '';
      return `<div class="brcard ${o ? 'open' : ''}"><div class="br-top"><span class="br-ic">${b.icon}</span><div class="grow"><b>${b.name}</b><small>${esc(b.desc)}</small></div><span class="chip ${o ? 'green' : ''}">${o ? 'Đang hoạt động' : 'Chưa mở'}</span></div>
        <div class="br-st"><div>💵 Tiền thuê mặt bằng: <b class="neg">−${fmtK(b.rent)}/ngày</b></div><div>👥 Phát lương (${o?.staff || 0} NV): <b class="neg">−${fmtK((o?.staff || 0) * 150000)}/ngày</b></div>
          <div>📦 Nhập liệu nguyên liệu: <b class="neg">−${fmtK(b.rev[0] * b.ing[0])} ~ ${fmtK(b.rev[1] * b.ing[1])}/ngày</b></div><div>📈 Doanh thu tự động: <b class="pos">+${fmtK(b.rev[0])} ~ ${fmtK(b.rev[1])}/ngày</b></div>
          <div>⭐ Đánh giá bình quân: <b>${o ? S.rating.toFixed(1) : '(Chưa mở)'}</b></div>${lastTxt}</div>
        ${o ? `<div class="row2"><span>👥 Nhân viên chi nhánh:</span><div class="stepper"><button data-act="bstaff-" data-id="${b.id}">−</button><input class="num" type="number" inputmode="numeric" min="0" max="3" value="${o.staff || 0}" data-bstaff="${b.id}" aria-label="Nhân viên chi nhánh"><button data-act="bstaff+" data-id="${b.id}">+</button></div></div>` : `<button class="btn pri block" data-act="bopen" data-id="${b.id}">${fmtK(cost)}<br/>Thuê & Mở chi nhánh</button>`}</div>`;
    }).join('');
}
function franchiseHTML() {
  const okR = S.rating >= FRANCHISE.needRating, okF = S.followers >= FRANCHISE.needFollowers;
  const can = okR && okF && S.franchise.count < FRANCHISE.max;
  return `<div class="frcard"><h4>🤝 MÔ HÌNH BÁN NHƯỢNG QUYỀN (FRANCHISING)</h4><p>Mở bán bản quyền thương hiệu cho các đối tác. Thu phí gia nhập ${fmt(FRANCHISE.fee)} + Phí bản quyền (Royalty Fee) ${FRANCHISE.royalty * 100}% doanh thu mỗi ngày!</p>
      <p class="muted">Đã nhượng quyền: <b>${S.franchise.count}/${FRANCHISE.max}</b> điểm bán.</p>
      <button class="btn ${can ? 'pri' : 'ghost'} block" data-act="fopen" ${can ? '' : 'disabled'}>${can ? `🤝 Bán nhượng quyền (+${fmtK(FRANCHISE.fee)})` : '🔒 CHƯA ĐẠT ĐIỀU KIỆN'}</button>
      <div class="frreq"><div class="frbox"><small>⭐ Điểm Uy Tín Quán:</small><b>${S.rating.toFixed(1)} / ${FRANCHISE.needRating}★ ${okR ? '✅' : '❌'}</b><div class="bar"><i style="width:${Math.min(100, S.rating / FRANCHISE.needRating * 100)}%"></i></div></div>
        <div class="frbox"><small>📱 Người Theo Dõi MXH:</small><b>${S.followers.toLocaleString('vi-VN')}đ / ${FRANCHISE.needFollowers.toLocaleString('vi-VN')} ${okF ? '✅' : '❌'}</b><div class="bar"><i style="width:${Math.min(100, S.followers / FRANCHISE.needFollowers * 100)}%"></i></div></div></div></div>
    <details class="tipbox fold"><summary>💡 Mẹo để mở bán nhượng quyền</summary><p>• Hãy phục vụ khách thật nhanh và dán nắp chuẩn xác để nhận nhiều đánh giá <b>5 sao</b> nâng điểm Uy Tín lên ≥ 4.5★.</p><p>• Vào mục <b>Mạng Xã Hội</b> để chạy các chiến dịch Quảng cáo TikTok / Facebook / Thuê KOL để tích lũy đủ 50.000 Người theo dõi!</p></details>`;
}
function statsHTML() {
  const last = S.history[S.history.length - 1];
  const main = last ? last.profit - last.branch - last.fran - last.interest : 0;
  const brN = Object.keys(S.branches).length;
  const brP = last?.branch || 0, frP = last?.fran || 0;
  const total = main + brP + frP;
  const tot = Math.max(1, Math.abs(main) + Math.abs(brP) + Math.abs(frP));
  const bar = (l, v) => `<div class="sbar"><span>${l}</span><div class="bar"><i style="width:${Math.abs(v) / tot * 100}%"></i></div><b>${fmtK(v)}</b></div>`;
  return `<div class="stcard"><small>BÁO CÁO TÀI CHÍNH TOÀN HỆ THỐNG</small><h4>Lợi Nhuận Ròng: <span class="${total >= 0 ? 'pos' : 'neg'}">${fmtK(total)}</span></h4><p class="muted">Tổng hợp lợi nhuận từ Quán chính, ${brN} Chi nhánh trực thuộc & ${S.franchise.count} Chi nhánh nhượng quyền (ngày gần nhất).</p></div>
    <div class="dl"><span>🏪 Quán Chính (Flagship)</span><b class="${main >= 0 ? 'pos' : 'neg'}">${fmtK(main)}</b></div>
    <div class="dl"><span>🏢 ${brN} Chi Nhánh Trực Thuộc</span><b class="${brP >= 0 ? 'pos' : 'neg'}">${fmtK(brP)}</b></div>
    <div class="dl"><span>🤝 ${S.franchise.count} Chi Nhánh Nhượng Quyền</span><b class="pos">${fmtK(frP)}</b></div>
    <div class="dl big"><span>💰 Tổng Lợi Nhuận Chuỗi</span><b class="${total >= 0 ? 'pos' : 'neg'}">${fmtK(total)}</b></div>
    <div class="stcard"><b>📊 Biểu Đồ Phân Bổ Lợi Nhuận:</b>${bar('Quán chính', main)}${bar('Chi nhánh', brP)}${bar('Nhượng quyền', frP)}</div>`;
}
const chinhanh = {
  html() {
    const t = S.subtab.cn || 'tt';
    const tb = [['tt', '🏢 Trực thuộc'], ['nq', '🤝 Nhượng quyền'], ['tk', '📊 Thống kê']];
    return `<div class="tabs scroll">${tb.map(([id, l]) => `<button class="tab ${t === id ? 'on' : ''}" data-act="sub" data-v="${id}">${l}</button>`).join('')}</div>${t === 'tt' ? branchHTML() : t === 'nq' ? franchiseHTML() : statsHTML()}`;
  },
  bind(root) {
    for (const inp of root.querySelectorAll('[data-bstaff]')) {
      inp.addEventListener('focus', () => inp.select());
      inp.addEventListener('change', () => { const error = E.setBranchStaff(inp.dataset.bstaff, +inp.value); if (error) toast(error, 'err'); });
    }
  },
  acts: {
    sub: (t) => { S.subtab.cn = t.dataset.v; markDirty('panel'); },
    bopen: (t) => { const b = BRANCHES.find(x => x.id === t.dataset.id); if (!b) return; confirmBox('Thuê & mở chi nhánh?', `Chi phí mở: ${fmtK(b.cost)}. Chi nhánh tự kinh doanh và gửi lãi ròng về mỗi cuối ngày.`, () => { const error = E.openBranch(b.id); if (error) return toast(error, 'err'); sfx('unlock'); toast('🏢 Khai trương chi nhánh mới!', 'ok'); }, 'Mở chi nhánh'); },
    'bstaff+': (t) => { const o = S.branches[t.dataset.id]; if (o) E.setBranchStaff(t.dataset.id, (o.staff || 0) + 1); },
    'bstaff-': (t) => { const o = S.branches[t.dataset.id]; if (o) E.setBranchStaff(t.dataset.id, (o.staff || 0) - 1); },
    fopen: () => { const error = E.sellFranchise(); if (error) return toast(error, 'err'); sfx('level'); toast(`🤝 Đã bán nhượng quyền! +${fmtK(FRANCHISE.fee)}`, 'ok'); },
  },
};

/* ===== MẠNG XÃ HỘI ===== */
function postHTML(p) {
  return `<div class="post"><div class="p-h"><span class="p-av">${p.author.av}</span><div class="grow"><b>${esc(p.author.name)}</b><small>${esc(p.author.badge)} · Hôm nay · 👁 ${p.views} lượt xem</small></div><span class="p-tag">${p.author.tag}</span></div>
    <div class="p-pov"><span class="pov">🎬 POV</span> ${esc(p.pov)}</div>
    <div class="p-d"><span class="who u">${esc(p.author.name.split(' ')[0])}:</span> "${esc(p.user)}"</div>
    <div class="p-d"><span class="who o">Chủ quán:</span> "${esc(p.owner)}"</div>
    <div class="p-d"><span class="who u">${esc(p.author.name.split(' ')[0])}:</span> "${esc(p.reply)}"</div>
    <div class="p-snd">💿 ${esc(p.sound)}</div><div class="p-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    <div class="p-f">🤍 ${p.likes} Thích · 💬 Phản hồi (1)</div><div class="p-own"><b>${esc(S.shopName)}:</b> Cảm ơn bạn đã ghé phá đảo menu quán nhé! Lần sau có thử thách mới quán lại tiếp chiêu! 👋</div></div>`;
}
const mxh = {
  html() {
    const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id) : null;
    const verified = S.followers >= 50000 && S.rating >= 4.5;
    const quota = ad ? ad.videos : 1;
    const used = S.social.videosToday;
    const traffic = (ad ? Math.round(ad.traffic * 100) : 0) + (S.social.videoDay === S.day ? Math.round((S.social.videoBuff || 0) * 100) : 0);
    return `<div class="profile"><div class="pf-h">${logoHTML(60)}<div><h4>${esc(S.shopName)} ${verified ? '✔️' : ''}</h4><small class="${verified ? 'green' : 'grayish'}">${verified ? '🌱 Đã tích xanh' : '🌱 Đang xây thương hiệu'}</small><p class="muted">${verified ? 'Kênh ẩm thực chính thức' : 'Cần 50K followers & 4.5★ để tích xanh'}</p></div></div>
      <div class="pf-s"><div><b>${S.followers.toLocaleString('vi-VN')}</b><small>Người theo dõi</small></div><div><b>${S.rating.toFixed(1)} ★</b><small>${S.ratingCount} đánh giá</small></div><div><b>+${traffic}%</b><small>Buff Ads / video</small></div></div></div>
      <div class="adbox"><h4>📣 Quảng cáo tăng khách</h4><p class="sub">Đang chạy ${ad ? 1 : 0}/1 chiến dịch${ad ? ` · còn ${S.social.ad.endsDay - S.day + 1} ngày` : ''}</p>
      ${ADS.map((a) => `<div class="adcard ${ad?.id === a.id ? 'run' : ''}" data-act="adinfo" data-id="${a.id}"><span class="ad-ic">${a.icon}</span><div class="ad-m"><b>${a.name}</b><small>+${Math.round(a.traffic * 100)}% khách · ${a.days} ngày · ⓘ</small></div><button class="btn pri sm ad-btn" data-act="ad" data-id="${a.id}" ${ad ? 'disabled' : ''}>${ad?.id === a.id ? 'Đang chạy' : `<b>${fmtK(a.cost)}</b><small>Kích hoạt</small>`}</button></div>`).join('')}</div>
      <div class="vidbox"><h4>🎬 Đăng video quảng bá</h4><p>Tỉ lệ Viral: <b>25%</b> · Mỗi lần quay nhận ngẫu nhiên % buff khách. Số lượt quay hôm nay dựa vào chiến dịch ads (${used}/${quota} lượt/ngày).</p>
      <button class="btn ${used < quota ? 'pri' : 'ghost'} block" data-act="video" ${used < quota ? '' : 'disabled'}>${used < quota ? '🎥 Quay & đăng video' : '🔒 Cần chạy chiến dịch Ads để quay video'}</button></div>
      <h4 class="feedh">📱 Bảng tin</h4>
      ${S.social.posts.length ? S.social.posts.map(postHTML).join('') : '<div class="emptybox">📱<b>Chưa có bài đăng nào</b><p>Chạy quảng cáo hoặc quay video để các reviewer đăng bài về quán bạn.</p></div>'}`;
  },
  acts: {
    adinfo: (t) => {
      const a = ADS.find((x) => x.id === t.dataset.id);
      const m = openModal({ cls: 'small', html: `<h3 class="m-title">${a.icon} ${esc(a.name)}</h3><p class="m-text">${a.desc}</p><p class="m-text center"><b>${fmtK(a.cost)}</b> · ${a.days} ngày</p><button class="btn pri block" data-act="x">Đóng</button>` });
      bindActions(m.body, { x: () => m.close() });
    },
    ad: (t) => {
      const a = ADS.find((x) => x.id === t.dataset.id);
      if (S.money < a.cost) { toast('Không đủ tiền chạy quảng cáo', 'err'); sfx('error'); return; }
      confirmBox(a.name, `Chi ${fmtK(a.cost)} chạy trong ${a.days} ngày: +${Math.round(a.traffic * 100)}% khách quán chính, +${a.followers.toLocaleString('vi-VN')} followers.`, () => {
        const error = E.startAd(a.id); if (error) return toast(error, 'err');
        for (let i = 0; i < a.posts; i++) S.social.posts.unshift(genPost());
        S.social.posts = S.social.posts.slice(0, 10);
        markDirty('hud', 'panel'); requestSave(); sfx('success'); toast('📣 Chiến dịch đã bắt đầu!', 'ok');
      }, 'Kích hoạt');
    },
    video: () => {
      const error = E.recordVideo(); if (error) return toast(error, 'err');
      const viral = chance(0.25);
      const gain = viral ? randInt(1500, 6000) : randInt(100, 600);
      S.followers += gain;
      if (viral) S.social.posts.unshift(genPost());
      markDirty('panel'); requestSave();
      toast(viral ? `🔥 Video lên xu hướng! +${gain.toLocaleString('vi-VN')} followers` : `Video đạt ${gain} followers mới`, viral ? 'gold' : 'ok');
      sfx(viral ? 'level' : 'success');
    },
  },
};

export const PANELS2 = { nhansu, thue, chinhanh, mxh };
void ITEMS; void fmt; void sum; void clamp; void rand; void pick; void emit; void h; void fxSpark; void E;
