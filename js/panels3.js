/**
 * Menu Home (3/3): Vườn cây · Thú cưng · Khởi nghiệp · Sảnh Trà · Đánh giá · Tổng kết · Bạn bè · Sưu tầm.
 */
import {
  ITEMS, SEEDS, PLOTS, PLOTS_START, plotCost, PETS, PET_CARE, PET_DECOR, LOCATIONS, LOCATION_COST, SEASONS, DAY_EVENTS, GACHA, SECRET_RECIPES, GIFT_COST, NPC_FRIENDS, WEATHERS, SHARE_URL,
} from './config.js';
import {
  S, markDirty, requestSave, esc, fmt, fmtK, sum, sfx, clamp, rand, randInt, pick, chance, wpick, emit, $,
} from './core.js';
import * as E from './econ.js';
import { copyText } from './platform.js';
import { toast, fxSpark, fxText, openModal, alertBox, bindActions, plHTML, aggregate, confirmBox } from './ui.js';

/* ===== VƯỜN CÂY ===== */
const seedDef = (id) => SEEDS.find((s) => s.id === id);
function plotHTML(i) {
  const g = S.garden;
  if (i >= g.unlocked) return `<button class="plot locked" data-act="punlock" aria-label="Mở khóa ô đất"><span>🔒</span><small>${fmtK(plotCost(i + 1))}</small></button>`;
  const p = g.plots[i];
  if (!p.seed) return `<button class="plot empty" data-act="plant" data-i="${i}" aria-label="Ô đất trống"><span>🟫</span><small>Trống</small></button>`;
  const sd = seedDef(p.seed);
  const left = sd.days - p.grown;
  if (left <= 0) return `<button class="plot ready" data-act="harv1" data-i="${i}" aria-label="Thu hoạch"><span>${sd.icon}</span><small>Chín rồi!</small></button>`;
  return `<button class="plot grow" data-act="plant" data-i="${i}" aria-label="Đang lớn"><span>${p.grown ? '🌿' : '🌱'}</span><small>${left} ngày</small></button>`;
}
function harvest(i) {
  const p = S.garden.plots[i], sd = p?.seed && seedDef(p.seed);
  if (!sd || p.grown < sd.days) return 0;
  const q = randInt(sd.yield[0], sd.yield[1]);
  const id = sd.gives;
  if (!S.unlocked[id]) { S.unlocked[id] = true; S.onMenu[id] = true; }
  E.addStock(id, q);
  p.seed = null; p.grown = 0;
  return q;
}
const vuon = {
  html() {
    const g = S.garden;
    const growing = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown < seedDef(p.seed).days).length;
    const ready = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown >= seedDef(p.seed).days).length;
    const empty = g.plots.slice(0, g.unlocked).filter((p) => !p.seed).length;
    const sel = S.subtab.seed || SEEDS[0].id;
    return `<div class="farm-h"><h4>🪴 NÔNG TRẠI ORGANIC (${PLOTS} MẢNH ĐẤT)</h4><p>Mảnh đất nông trại xanh mướt với ${PLOTS} luống đất màu mỡ. Nhấn vào từng mảnh đất để gieo hạt, tưới nước và thu hoạch nông sản sạch miễn phí vào kho tiệm trà!</p></div>
      <div class="plots">${Array.from({ length: PLOTS }, (_, i) => plotHTML(i)).join('')}</div>
      <div class="farm-btns"><button class="btn blue" data-act="water"><b>Tưới Nước</b><small>${growing} ô cây${g.watered ? ' · đã tưới' : ''}</small></button><button class="btn orange" data-act="harvest"><b>Thu Hoạch</b><small>${ready ? ready + ' ô chín' : 'Chờ quả chín'}</small></button>
        <button class="btn green" data-act="replant"><b>Trồng Lại</b><small>${empty} ô trống</small></button><button class="btn purple" data-act="shop"><b>Cửa Hàng</b><small>Hạt giống</small></button></div>
      <div class="seedbox"><b>🎒 Kho túi hạt giống của bạn:</b> <small>Đã mở: ${g.unlocked}/${PLOTS} mảnh</small>
        <div class="seeds">${SEEDS.map((s) => `<button class="seed ${sel === s.id ? 'on' : ''}" data-act="selseed" data-id="${s.id}"><span>${s.icon}</span><b>${s.name}</b><em>${g.seeds[s.id] || 0}</em></button>`).join('')}</div>
        <small class="muted">Chạm một ô đất trống để gieo hạt đang chọn. Cây lớn thêm mỗi ngày nếu bạn đã tưới nước.</small></div>`;
  },
  acts: {
    selseed: (t) => { S.subtab.seed = t.dataset.id; markDirty('panel'); },
    plant: (t) => {
      const i = +t.dataset.i, p = S.garden.plots[i];
      if (p.seed) return toast('Cây đang lớn, hãy kiên nhẫn 🌱', '');
      const id = S.subtab.seed || SEEDS[0].id;
      if (!(S.garden.seeds[id] > 0)) return toast('Hết hạt giống này, vào Cửa Hàng mua thêm!', 'err');
      S.garden.seeds[id]--; p.seed = id; p.grown = 0; sfx('pop'); markDirty('panel'); requestSave();
    },
    harv1: (t) => { const q = harvest(+t.dataset.i); if (q) { sfx('success'); fxSpark(t, 8); toast(`Thu hoạch +${q} phần nguyên liệu!`, 'ok'); markDirty('panel'); requestSave(); } },
    harvest: () => {
      let n = 0, items = {};
      S.garden.plots.forEach((p, i) => { const s = p.seed && seedDef(p.seed); if (s && p.grown >= s.days) { const k = s.gives; const q = harvest(i); n++; items[k] = (items[k] || 0) + q; } });
      if (!n) return toast('Chưa có ô nào chín', 'err');
      sfx('success'); toast('Thu hoạch: ' + Object.entries(items).map(([k, q]) => `${ITEMS[k].name} +${q}`).join(' · '), 'ok'); markDirty('panel'); requestSave();
    },
    water: () => {
      const g = S.garden;
      if (!g.plots.some((p) => p.seed)) return toast('Chưa có cây nào để tưới', 'err');
      g.watered = true; sfx('pour'); toast('💧 Đã tưới nước! Cây sẽ lớn thêm khi sang ngày mới.', 'ok'); markDirty('panel'); requestSave();
    },
    replant: () => {
      const id = S.subtab.seed || SEEDS[0].id;
      let n = 0;
      for (let i = 0; i < S.garden.unlocked; i++) { const p = S.garden.plots[i]; if (!p.seed && S.garden.seeds[id] > 0) { p.seed = id; p.grown = 0; S.garden.seeds[id]--; n++; } }
      if (!n) return toast('Không có ô trống hoặc đã hết hạt giống', 'err');
      sfx('pop'); toast(`Đã trồng ${n} ô`, 'ok'); markDirty('panel'); requestSave();
    },
    punlock: () => {
      const g = S.garden, cost = plotCost(g.unlocked + 1);
      confirmBox('Mở thêm mảnh đất?', `Mở ô số ${g.unlocked + 1} với giá ${fmtK(cost)}.`, () => { const error = E.unlockPlot(); if (error) return toast(error, 'err'); sfx('unlock'); }, 'Mở khóa');
    },
    shop: () => {
      const m = openModal({ id: 'seedshop', cls: 'small', html: `<h3 class="m-title">🛒 Cửa hàng hạt giống</h3>${SEEDS.map((s) => `<div class="nrow"><span class="k-ico">${s.icon}</span><div class="k-main"><b>${s.name}</b><small>Lớn trong ${s.days} ngày · thu ${s.yield[0]}-${s.yield[1]} phần ${ITEMS[s.gives].name}</small></div><button class="btn gold sm" data-act="buy" data-id="${s.id}">${fmtK(s.price)}</button></div>`).join('')}<button class="btn ghost block" data-act="x">Đóng</button>` });
      bindActions(m.body, { buy: (t) => { const s = seedDef(t.dataset.id); if (S.money < s.price) return toast('Không đủ tiền', 'err'); S.money -= s.price; S.garden.seeds[s.id] = (S.garden.seeds[s.id] || 0) + 1; sfx('coin'); markDirty('hud', 'panel'); toast(`+1 ${s.name}`, 'ok'); requestSave(); }, x: () => m.close() });
    },
  },
};

/* ===== THÚ CƯNG ===== */
const bar = (v) => `<div class="bar ${v < 30 ? 'danger' : v < 60 ? 'warn' : ''}"><i style="width:${Math.round(v)}%"></i></div>`;
function petCard(k) {
  const p = PETS[k];
  const can = k === 'capybara' ? E.secretCount() >= p.secret : true;
  const sel = (S.subtab.pet || S.pet?.kind || 'shiba') === k;
  return `<button class="petchip ${sel ? 'on' : ''}" data-act="petsel" data-k="${k}">${p.icon} ${p.name.split(' ').slice(0, 2).join(' ')} ${can ? '' : '<em>(Chưa mở)</em>'}</button>`;
}
const thucung = {
  html() {
    const selected = S.subtab.pet || S.pet?.kind || 'shiba';
    const nav = `<div class="petrow pet-tabs">${['shiba', 'meo', 'capybara'].map(petCard).join('')}</div>`;
    if (S.pet && (selected === S.pet.kind || (selected === 'capybara' && S.pet2))) {
      const p = selected === S.pet.kind ? S.pet : S.pet2, info = PETS[p.kind];
      const act = E.petActive(p);
      return `${nav}<div class="petcard owned"><div class="pet-big">${info.icon}</div><h4>${info.name}</h4><p class="muted">${act ? '✅ Buff đang kích hoạt (trung bình các chỉ số ≥ 60)' : '⚠️ Cần chăm sóc để kích hoạt buff (trung bình ≥ 60)'}</p>
        <div class="pstats">${[['hunger', '🍖 No'], ['joy', '💗 Vui vẻ'], ['clean', '🛁 Sạch sẽ'], ['energy', '😴 Khỏe']].map(([k, l]) => `<div class="ps"><span>${l}</span>${bar(p[k] ?? 80)}<b>${Math.round(p[k] ?? 80)}</b></div>`).join('')}</div>
        <div class="pcare">${PET_CARE.map((c) => `<button class="btn soft" data-act="care" data-id="${c.id}" data-kind="${p.kind}">${c.icon}<br/>${c.name}${c.cost ? `<small>${fmtK(c.cost)}</small>` : ''}</button>`).join('')}</div>
        <div class="buffs">${info.buffs.map((b) => `<p>${b}</p>`).join('')}</div>
        <p class="muted">Decor đã mua: ${Object.keys(S.petDecor).length}/${PET_DECOR.length} · mua thêm ở Nâng cấp › Decor Thú Cưng.</p><div class="petrow">${['shiba', 'meo'].filter(k => k !== p.kind).map(k => `<button class="btn soft" data-act="adopt" data-k="${k}">Đổi sang ${PETS[k].icon} ${PETS[k].name} · ${fmtK(PETS[k].adopt)}</button>`).join('')}</div></div>
        ${S.pet2 && p !== S.pet2 ? `<div class="petcard owned"><div class="pet-big">${PETS.capybara.icon}</div><h4>${PETS.capybara.name} <span class="chip green">Nuôi chung</span></h4>${PETS.capybara.buffs.map((b) => `<p>${b}</p>`).join('')}</div>` : ''}
        ${!S.pet2 && E.secretCount() >= 7 ? '<button class="btn pri block" data-act="capy">🦫 Nhận nuôi Cáp Bi (miễn phí)</button>' : ''}`;
    }
    const k = selected;
    const p = PETS[k];
    const sc = E.secretCount();
    const body = k === 'capybara' ? `<div class="petcard cap"><div class="pet-big">${PETS.capybara.icon}</div><h4>🦫 CÁP BI ĐIỀM ĐẠM (CAPYBARA)</h4><p>Thú cưng độc bản quý hiếm dành riêng cho Nhà Sáng Tạo Tiệm Trà Sữa Tinh Hoa! <b>Kết hợp trọn vẹn cả sức mạnh của Chó và Mèo</b>, đặc biệt có thể nuôi chung song song cùng 1 Chó hoặc 1 Mèo!</p>
        <div class="buffs"><b>4 ĐẶC QUYỀN TỐI THƯỢNG CỦA CÁP BI:</b>${p.buffs.map((b) => `<p>${b}</p>`).join('')}</div>
        <div class="cond"><b>⭐ Điều kiện mở khóa: ${p.secret} Công thức độc bản</b><div class="bar"><i style="width:${sc / p.secret * 100}%"></i></div><small>Bạn đã sáng tạo ${sc}/${p.secret} công thức độc bản trong Sổ Tay Sưu Tầm. Cần thêm ${Math.max(0, p.secret - sc)} công thức nữa để mở khóa Cáp Bi!</small></div>
        <button class="btn ${sc >= p.secret ? 'pri' : 'soft'} block" data-act="${sc >= p.secret ? 'capy' : 'goto'}" data-to="suutam">${sc >= p.secret ? '🦫 Nhận nuôi Cáp Bi' : '📖 Đến Mục Sưu Tầm Sáng Tạo Công Thức (' + sc + '/' + p.secret + ')'}</button></div>`
      : `<div class="petcard"><div class="pet-big">${p.icon}</div><h4>🏡 CĂN PHÒNG THÚ CƯNG MƠ ƯỚC</h4><p>Bạn được chọn <b>1 trong 2 bé cưng</b> để đồng hành cùng tiệm của mình. Hãy chọn người bạn phù hợp nhất với chiến lược kinh doanh của bạn! <small>Sau khi chọn, bạn có thể đổi lại bé kia và các chỉ số chăm sóc trở về 80!</small></p>
        <div class="buffs"><h5>${p.icon} ${p.name}</h5>${p.buffs.map((b) => `<p>${b}</p>`).join('')}</div>
        <div class="adopt"><b>Phí nhận nuôi ${p.icon} ${p.name}:</b> <span class="money">${fmt(p.adopt)}</span><p>Tiền két quán hiện có: ${fmtK(S.money)} ${S.money >= p.adopt ? '✅' : `❌ (Cần thêm ${fmtK(p.adopt - S.money)})`}</p></div>
        <button class="btn ${S.money >= p.adopt ? 'pri' : 'ghost'} block" data-act="adopt" data-k="${k}">🐾 Nhận Nuôi ${p.name} (${fmtK(p.adopt)})</button></div>`;
    return `${nav}${body}`;
  },
  acts: {
    petsel: (t) => { S.subtab.pet = t.dataset.k; markDirty('panel'); },
    goto: (t) => emit('goto', t.dataset.to),
    adopt: (t) => {
      const k = t.dataset.k, p = PETS[k];
      if (S.money < p.adopt) return toast('Không đủ tiền nhận nuôi', 'err');
      confirmBox('Nhận nuôi ' + p.name + '?', `Phí ${fmtK(p.adopt)}. Chỉ số chăm sóc bé chính trở về 80; Cáp Bi nuôi chung được giữ lại.`, () => { const error = E.adoptPet(k); if (error) return toast(error, 'err'); S.subtab.pet = k; sfx('level'); toast('🐾 Chào mừng thành viên mới!', 'gold'); }, 'Nhận nuôi');
    },
    capy: () => { const error = E.adoptPet('capybara'); if (error) return toast(error, 'err'); sfx('level'); toast('🦫 Cáp Bi đã về quán!', 'gold'); },
    care: (t) => {
      const c = PET_CARE.find((x) => x.id === t.dataset.id);
      const error = E.carePet(t.dataset.id, t.dataset.kind); if (error) return toast(error, 'err');
      sfx('pop'); fxText('+' + c.name, t, 'g');
    },
  },
};

/* ===== KHỞI NGHIỆP ===== */
function locCard(id) {
  const l = LOCATIONS[id];
  const here = S.location === id;
  return `<div class="loccard ${here ? 'here' : ''}" id="loc-${id}"><div class="loc-img ${id}">${sceneHTML(id)}<span class="loc-tag">${l.icon} ${esc(l.tag)}</span><h4>${l.icon} ${esc(l.name)}</h4></div>
    <div class="loc-body"><i class="slogan">"${esc(l.slogan)}"</i>
    <details class="fold"><summary>Xem mô tả, lợi thế & thử thách</summary><p>${esc(l.desc)}</p>
    <div class="pro"><b>🟢 Lợi Thế Kinh Doanh (Ưu Điểm):</b>${l.pro.map((x) => `<p>• ${esc(x)}</p>`).join('')}</div>
    ${l.con.length ? `<div class="con"><b>🔴 Thử Thách Vận Hành (Khó Khăn):</b>${l.con.map((x) => `<p>• ${esc(x)}</p>`).join('')}</div>` : ''}</details>
    <button class="btn ${here ? 'ghost' : 'pri'} block" data-act="startup" data-id="${id}" ${here ? 'disabled' : ''}>${here ? '✅ Đang Đặt Quán Tại Đây' : `🚀 Khởi Nghiệp Tại ${l.name} · ${fmtK(LOCATION_COST)}`}</button></div></div>`;
}
const SCENES = {
  goc: [['🏡', 46, 64, 8], ['🌳', 16, 44, 8], ['🪴', 80, 34, 8], ['🧋', 30, 30, 6]],
  hanoi: [['🏯', 60, 60, 10], ['🌸', 14, 36, 10], ['🛕', 82, 44, 10], ['🏮', 38, 26, 60], ['🪷', 46, 28, 4]],
  hcm: [['🏙️', 58, 74, 8], ['🌇', 16, 50, 12], ['🛵', 36, 30, 4], ['🌆', 84, 46, 8]],
  hue: [['🏯', 54, 70, 8], ['🌸', 18, 36, 8], ['🛶', 82, 30, 4], ['🏮', 36, 26, 56]],
  danang: [['🌉', 54, 72, 6], ['🏖️', 16, 44, 6], ['⛱️', 84, 32, 6], ['🌊', 36, 30, 2]],
  sapa: [['🏔️', 48, 80, 4], ['🌾', 16, 40, 6], ['☁️', 80, 30, 54], ['🌲', 86, 38, 6], ['🍵', 30, 28, 4]],
  halong: [['⛵', 46, 50, 14], ['🏝️', 18, 52, 6], ['🪨', 76, 42, 6], ['🌊', 50, 30, 2]],
  bmt: [['☕', 22, 42, 8], ['🌳', 56, 58, 8], ['🐘', 82, 44, 6], ['🌿', 38, 30, 4]],
  canTho: [['🛶', 40, 46, 6], ['🍍', 16, 36, 8], ['🥥', 80, 36, 8], ['🌴', 60, 58, 8]],
  caMau: [['🦀', 22, 38, 6], ['🌳', 54, 54, 8], ['🦐', 80, 30, 6], ['🌊', 38, 28, 2]],
  hoangSa: [['🏝️', 46, 66, 6], ['🌴', 22, 46, 8], ['⚓', 82, 34, 6], ['🚢', 66, 36, 34]],
};
const sceneHTML = (id) => `<div class="loc-scene" aria-hidden="true">${(SCENES[id] || []).map(([e, x, sz, b]) => `<span style="left:${x}%;font-size:${sz}px;bottom:${b}px">${e}</span>`).join('')}</div>`;
/* ===== Bản đồ Việt Nam: dựng từ toạ độ kinh/vĩ độ, chiếu tuyến tính x=(lon-102)*8, y=(24-lat)*8 → viewBox 100x136 ===== */
const VM_H = 136;
const vmXY = ([lo, la]) => [(lo - 102) * 8, (24 - la) * 8];
const vmF = (n) => +n.toFixed(1);
const vmPt = (p) => { const [x, y] = vmXY(p); return vmF(x) + ' ' + vmF(y); };
function vmCurve(pts, tn = 1) { // Catmull-Rom -> Bezier (không gồm điểm đầu)
  const q = pts.map(vmXY); let d = '';
  for (let i = 0; i < q.length - 1; i++) {
    const a = q[i - 1] || q[i], b = q[i], c = q[i + 1], e = q[i + 2] || c, k = tn / 6;
    d += `C${vmF(b[0] + (c[0] - a[0]) * k)} ${vmF(b[1] + (c[1] - a[1]) * k)} ${vmF(c[0] - (e[0] - b[0]) * k)} ${vmF(c[1] - (e[1] - b[1]) * k)} ${vmF(c[0])} ${vmF(c[1])}`;
  }
  return d;
}
const vmLine = (pts, tn) => `M${vmPt(pts[0])}${vmCurve(pts, tn)}`;
const vmLoop = (pts, tn) => `${vmLine([...pts, pts[0]], tn)}Z`;
const VM_N = [[102.15, 22.40], [102.45, 22.75], [102.9, 22.5], [103.3, 22.75], [103.6, 22.6], [103.95, 22.5], [104.3, 22.82], [104.7, 23.0], [105.0, 23.25], [105.32, 23.37], [105.6, 23.1], [105.95, 23.0], [106.4, 22.9], [106.7, 22.85], [106.6, 22.45], [106.75, 22.0], [107.15, 21.95], [107.45, 21.65], [107.95, 21.55], [108.05, 21.5]];
const VM_C = [[108.05, 21.5], [107.75, 21.3], [107.5, 21.1], [107.3, 21.0], [107.0, 20.85], [106.8, 20.75], [106.6, 20.55], [106.5, 20.3], [106.2, 20.1], [105.95, 19.9], [105.85, 19.6], [105.8, 19.25], [105.8, 18.7], [106.1, 18.35], [106.4, 18.0], [106.65, 17.55], [107.1, 17.0], [107.5, 16.6], [107.9, 16.35], [108.2, 16.12], [108.35, 15.9], [108.65, 15.55], [108.9, 15.15], [109.05, 14.6], [109.2, 14.0], [109.3, 13.5], [109.4, 13.0], [109.3, 12.5], [109.2, 12.0], [109.1, 11.6], [108.9, 11.3], [108.5, 11.0], [108.1, 10.9], [107.6, 10.55], [107.1, 10.35], [106.85, 10.4], [106.75, 10.3], [106.6, 9.95], [106.4, 9.55], [106.0, 9.3], [105.7, 9.0], [105.35, 8.75], [104.85, 8.6], [104.8, 8.8], [104.95, 9.3], [105.05, 9.8], [105.05, 10.0], [104.8, 10.2], [104.5, 10.42]];
const VM_W = [[104.5, 10.42], [104.85, 10.9], [105.35, 10.85], [105.8, 11.05], [106.1, 11.35], [106.4, 11.7], [106.9, 11.95], [107.3, 12.15], [107.5, 12.4], [107.4, 13.0], [107.5, 13.5], [107.4, 14.1], [107.55, 14.6], [107.4, 15.15], [107.55, 15.6], [107.2, 15.9], [107.1, 16.2], [106.7, 16.55], [106.55, 17.0], [106.4, 17.0], [105.95, 17.4], [105.6, 17.75], [105.15, 18.3], [104.7, 18.75], [104.0, 19.2], [104.0, 19.7], [104.6, 20.4], [104.1, 20.85], [103.7, 20.65], [103.35, 20.95], [103.0, 21.5], [102.7, 21.7], [102.2, 22.05], [102.15, 22.40]];
const VM_GULF = [[104.5, 10.42], [104.2, 10.55], [103.6, 10.6], [103.2, 11.0], [102.9, 11.6], [102.5, 12.1], [102.0, 12.4]];
const VM_CHINA = [[114.5, 22.6], [113.6, 22.1], [112.3, 21.7], [111.0, 21.5], [110.5, 21.1], [110.4, 20.4], [110.2, 20.25], [109.95, 20.9], [109.7, 21.45], [109.1, 21.5], [108.05, 21.5]];
const VM_HAINAN = [[108.65, 19.35], [108.8, 19.8], [109.3, 20.05], [110.1, 20.1], [110.6, 19.9], [111.0, 19.6], [110.8, 19.0], [110.4, 18.7], [109.7, 18.3], [109.1, 18.25], [108.65, 18.5], [108.6, 19.0]];
const VM_PQ = [[103.98, 10.45], [104.05, 10.3], [104.0, 10.1], [103.92, 9.95], [103.85, 10.1], [103.88, 10.3]];
const VM_CD = [[106.55, 8.78], [106.65, 8.72], [106.7, 8.65], [106.6, 8.62], [106.52, 8.7]];
const VM_LAND = `M${vmPt(VM_N[0])}${vmCurve(VM_N)}${vmCurve(VM_C)}${vmCurve(VM_W)}Z`;
const VM_SEA = `${vmLine(VM_C)}${vmCurve(VM_GULF)}L${vmPt([102, 7])}L${vmPt([114.5, 7])}L${vmPt(VM_CHINA[0])}${vmCurve(VM_CHINA)}Z`;
const VM_RIVERS = [
  [[103.97, 22.5], [104.5, 22.0], [104.95, 21.65], [105.4, 21.3], [105.85, 21.03], [106.2, 20.65], [106.55, 20.25]], // sông Hồng
  [[104.9, 11.6], [105.1, 11.15], [105.25, 10.8], [105.8, 10.35], [106.3, 10.1], [106.75, 9.95]], // Mê Kông - sông Tiền
  [[105.3, 10.75], [105.6, 10.2], [105.9, 9.8], [106.2, 9.45]], // sông Hậu
  [[104.2, 14.2], [104.9, 12.8], [104.9, 11.6]], // Mê Kông thượng
];
const VM_MTS = [[103.8, 22.25], [104.25, 22.05], [104.6, 21.6], [103.3, 21.5], [105.6, 18.4], [106.2, 17.6], [106.8, 16.8], [107.1, 15.9], [107.25, 15.2], [108.3, 13.9], [108.4, 13.0], [108.5, 12.0], [105.0, 22.0]];
const VM_ISL = [[111.2, 16.45], [111.6, 16.55], [111.75, 16.2], [112.3, 16.05], [111.5, 16.85]];
const VM_TS = [[114.0, 10.3], [113.4, 9.0], [112.9, 9.8], [112.3, 8.9], [111.9, 9.9], [113.9, 9.2], [112.6, 10.0]];
const vmTxt = (lo, la, t, cls, rot) => { const [x, y] = vmXY([lo, la]); return `<text x="${vmF(x)}" y="${vmF(y)}" class="vt ${cls}"${rot ? ` transform="rotate(${rot} ${vmF(x)} ${vmF(y)})"` : ''}>${t}</text>`; };
const vmMt = (p) => { const [x, y] = vmXY(p); return `M${vmF(x - 1.3)} ${vmF(y + 0.9)}L${vmF(x - 0.2)} ${vmF(y - 1)}L${vmF(x + 0.5)} ${vmF(y + 0.1)}L${vmF(x + 0.9)} ${vmF(y - 0.5)}L${vmF(x + 1.5)} ${vmF(y + 0.9)}Z`; };
const vmDot = (p, r) => { const [x, y] = vmXY(p); return `<circle cx="${vmF(x)}" cy="${vmF(y)}" r="${r}"/>`; };
const VM_PIN_LBL = { goc: ['Tiệm gốc', 'r'], hanoi: ['Hà Nội', 'l'], sapa: ['Sa Pa', 'r'], halong: ['Hạ Long', 'r'], hue: ['Huế', 'l'], danang: ['Đà Nẵng', 'r'], bmt: ['Buôn Ma Thuột', 'r'], hcm: ['TP.HCM', 'r'], canTho: ['Cần Thơ', 'l'], caMau: ['Cà Mau', 'r'], hoangSa: ['Hoàng Sa', 'r'] };
const vmStar = (R) => Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? R * 0.382 : R; return vmF(Math.cos(a) * r) + ',' + vmF(Math.sin(a) * r); }).join(' ');
const vmFlag = (lo, la) => { const [x, y] = vmXY([lo, la]); return `<g class="vflag" transform="translate(${vmF(x)} ${vmF(y)})"><path d="M0 0V-4.2" class="pole"/><g><rect x="0" y="-4.2" width="3.4" height="2.3"/><polygon points="${vmStar(0.7).replace(/(-?[d.]+),(-?[d.]+)/g, (m, a, b) => vmF(+a + 1.7) + ',' + vmF(+b - 3.05))}"/></g></g>`; };
const vmapSvg = () => `<svg viewBox="0 0 100 ${VM_H}" role="img" aria-label="Bản đồ Việt Nam">
  <defs>
    <linearGradient id="vfl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ee3a2f"/><stop offset="1" stop-color="#b3150f"/></linearGradient>
    <linearGradient id="vsg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f8fb8"/><stop offset=".5" stop-color="#1b6a9c"/><stop offset="1" stop-color="#0d3a6b"/></linearGradient>
    <clipPath id="vclip"><path d="${VM_SEA}"/></clipPath>
    <pattern id="vwave" width="7" height="5" patternUnits="userSpaceOnUse"><path d="M0 1.6Q1.75 0 3.5 1.6T7 1.6M-3.5 4.1Q-1.75 2.5 0 4.1T3.5 4.1T7 4.1" class="vwv"/></pattern></defs>
  <rect width="100" height="${VM_H}" class="vnb"/>
  ${vmTxt(103.6, 23.3, 'TRUNG QUỐC', 'nb')}${vmTxt(105.3, 17.6, 'LÀO', 'nb', -62)}${vmTxt(102.95, 15.2, 'THÁI LAN', 'nb', -90)}${vmTxt(105.0, 12.2, 'CAMPUCHIA', 'nb')}
  <path d="${VM_SEA}" class="vsea"/><g clip-path="url(#vclip)"><rect class="vwvm" x="-7" width="114" height="${VM_H}" fill="url(#vwave)"/></g>
  <g class="vcloud c1"><ellipse cx="0" cy="0" rx="6" ry="1.8"/><ellipse cx="3" cy="-1.2" rx="3.6" ry="1.8"/><ellipse cx="-3" cy="-.8" rx="3" ry="1.4"/></g>
  <g class="vcloud c2"><ellipse cx="0" cy="0" rx="5" ry="1.5"/><ellipse cx="2.4" cy="-1" rx="3" ry="1.5"/></g>
  <path d="${vmLoop(VM_HAINAN)}" class="vnb2"/>${vmTxt(109.7, 19.1, 'Hải Nam', 'nb s')}
  ${vmTxt(112.3, 13.6, 'BIỂN ĐÔNG', 'sea')}${vmTxt(107.35, 18.9, 'Vịnh Bắc Bộ', 'sea s')}${vmTxt(103.2, 9.2, 'Vịnh Thái Lan', 'sea s')}
  <path d="${VM_LAND}" class="vglow"/>
  <path d="${VM_LAND}" class="land"/>
  <g class="vstar" transform="translate(${vmF(vmXY([104.65, 19.4])[0])} ${vmF(vmXY([104.65, 19.4])[1])})"><polygon points="${vmStar(4.6)}"/></g>
  <path d="${vmLoop(VM_PQ)}" class="land isl-l"/><path d="${vmLoop(VM_CD)}" class="land isl-l"/>
  ${VM_RIVERS.map((r, i) => `<path d="${vmLine(r)}" class="river${i === 3 ? ' dim' : ''}"/>`).join('')}
  <path d="${VM_MTS.map(vmMt).join('')}" class="mts"/>
  <g class="isl">${VM_ISL.map((p) => vmDot(p, 0.55)).join('')}</g><g class="isl">${VM_TS.map((p) => vmDot(p, 0.55)).join('')}</g>
  ${vmFlag(111.6, 16.3)}${vmFlag(113.2, 9.6)}
  <g class="vboat b1" transform="translate(${vmPt([111.0, 12.2])})"><g><path d="M-2.2 0.4H2.2L1.4 1.6H-1.4Z" class="hull"/><path d="M0 -3.4V.2M0.3 -3.2L2 0H0.3Z" class="sail"/></g></g>
  <g class="vboat b2" transform="translate(${vmPt([103.0, 9.7])})"><g><path d="M-2.2 0.4H2.2L1.4 1.6H-1.4Z" class="hull"/><path d="M0 -3.4V.2M0.3 -3.2L2 0H0.3Z" class="sail"/></g></g>
  <g class="vbird"><path d="M0 0Q1 -1.2 2 0Q3 -1.2 4 0"/><path d="M5 2Q5.8 1 6.6 2Q7.4 1 8.2 2"/></g>
  ${vmTxt(111.5, 15.3, 'Q.đ Hoàng Sa', 'sea s')}${vmTxt(112.7, 8.55, 'Q.đ Trường Sa', 'sea s')}
  ${vmTxt(103.3, 21.55, 'Hoàng Liên Sơn', 'mt s', 0)}${vmTxt(107.2, 14.35, 'Trường Sơn', 'mt s', -72)}${vmTxt(106.1, 21.7, 'S. Hồng', 'rv s', -38)}${vmTxt(104.75, 11.15, 'S. Mê Kông', 'rv s', 0)}${vmTxt(103.6, 10.85, 'Phú Quốc', 'nb s')}
  <g class="cmp" transform="translate(89 13)"><circle r="6.2" class="cmp-r"/><g class="cmp-spin"><path d="M0 -6L1.5 0L0 6L-1.5 0Z" class="cmp-n"/><path d="M-6 0L0 -1.5L6 0L0 1.5Z" class="cmp-e"/></g><text y="-8" class="vt cmp-t">B</text></g>
  <g class="scl" transform="translate(36 131)"><path d="M0 0H14.4M0 -1V1M7.2 -.7V.7M14.4 -1V1"/><text x="7.2" y="-2" class="vt s">200 km</text></g>
</svg>`;
const VM_LEGEND = '<div class="vm-legend"><span><i class="lg-dot"></i>Quán trà</span><span><i class="lg-isl"></i>Đảo</span><span><i class="lg-rv"></i>Sông</span><span><i class="lg-mt"></i>Núi</span></div>';

const khoinghiep = {
  html() {
    const pins = Object.entries(LOCATIONS).map(([id, l]) => { const [lb, sd] = VM_PIN_LBL[id] || [l.short || l.name, 'r']; return `<button class="pin pin-${sd} ${S.location === id ? 'on' : ''}" style="left:${l.map[0]}%;top:${l.map[1]}%" data-act="pin" data-id="${id}" aria-label="${esc(l.name)}"><span>${l.icon}</span><small>${esc(lb)}</small></button>`; }).join('');
    const cur = LOCATIONS[S.location];
    return `<div class="cur-loc"><span class="chip y">🏠 TIỆM TRÀ GỐC (BAN ĐẦU)</span><span class="chip green">⭐ ĐANG KINH DOANH</span><h4>${cur.icon} ${esc(cur.name)}</h4><i>"${esc(cur.slogan)}"</i><p>${esc(cur.desc)}</p></div>
      <h4 class="subh">Bản Đồ Khởi Nghiệp Xuyên Việt</h4><p class="muted">Chạm vào các biểu tượng ghim trên bản đồ hoặc danh sách bên dưới để chọn địa điểm mở quán. Mỗi tỉnh thành mang lại lợi thế doanh thu và thử thách vận hành độc bản!</p>
      <div class="vmap">${vmapSvg()}${pins}${VM_LEGEND}</div>
      <h4 class="subh">Danh Sách Địa Điểm Kinh Doanh</h4>${Object.keys(LOCATIONS).map(locCard).join('')}`;
  },
  acts: {
    pin: (t) => {
      const el = document.getElementById('loc-' + t.dataset.id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.classList.add('flash'); setTimeout(() => el?.classList.remove('flash'), 1400);
    },
    startup: (t) => {
      const l = LOCATIONS[t.dataset.id];
      if (S.money < LOCATION_COST) return toast('Không đủ tiền khởi nghiệp', 'err');
      confirmBox(`Khởi nghiệp tại ${l.name}?`, `Chi phí ${fmtK(LOCATION_COST)}. Quán chuyển sang vùng mới: đổi thời tiết, lợi thế và thử thách vận hành.`, () => {
        const error = E.moveShop(t.dataset.id); if (error) return toast(error, 'err'); sfx('level'); toast(`🚀 Đã khởi nghiệp tại ${l.name}!`, 'gold');
      }, 'Khởi nghiệp');
    },
  },
};

/* ===== SẢNH TRÀ (xem trước ở Home) ===== */
const sanh = {
  html() {
    const b = E.bonus();
    return `<div class="lobby-top"><div class="lobby-stat"><span>👥 Chờ: <b>0</b> khách</span><span>🪑 Bàn: <b>0/${b.tables}</b> bàn</span><span>💰 <b>${fmtK(S.money)}</b></span></div></div>
      <div class="lcard"><div class="lc-h"><h4>🧋 Quầy Pha Chế & Hàng Chờ</h4><span class="pill">Tối đa ${b.queue} khách</span></div><p class="muted">Khách tự động đến xếp hàng (tối đa ${b.queue} khách chờ). Mở rộng quầy ở Nâng cấp › Trang bị để chờ được nhiều hơn.</p><div class="lobby-q"><span class="lq">🙂</span><span class="lq">😀</span><span class="lq">🧑</span><span class="lq dim">＋</span></div></div>
      <div class="lcard"><div class="lc-h"><h4>🪑 Khu Bàn Ghế Khách Ngồi</h4><span class="pill y">🪑 +10% ngồi tại quán</span></div><p class="muted">Khách chỉ vào ngồi khi bàn được dọn sạch ✨ — trong ca bán bấm <b>Ra sảnh →</b> để dọn bàn dơ nhận tiền boa!</p>
        <div class="tables">${Array.from({ length: b.tables }, (_, i) => `<div class="tbl free"><span class="t-ico">✨</span><small>Bàn ${i + 1}</small></div>`).join('')}</div>
        <button class="btn gold block" data-act="goto" data-to="nangcap">🛠️ Nâng cấp bàn ghế</button></div>`;
  },
  acts: { goto: (t) => { S.subtab.nc = 'trangbi'; emit('goto', t.dataset.to); } },
};

/* ===== ĐÁNH GIÁ ===== */
const danhgia = {
  html() {
    const rv = S.reviews;
    const dist = [5, 4, 3, 2, 1].map((s) => [s, rv.filter((r) => r.stars === s).length]);
    const mx = Math.max(1, ...dist.map((d) => d[1]));
    return `<div class="rvhead"><div class="big-r">${S.rating.toFixed(1).replace('.', ',')}<small>/5</small></div><div><span class="stars lg">${Array.from({ length: 5 }, (_, i) => `<i class="${i < Math.round(S.rating) ? 'on' : ''}">★</i>`).join('')}</span><small>${S.ratingCount} lượt đánh giá · ${rv.length} gần nhất</small></div></div>
      <div class="dist">${dist.map(([s, n]) => `<div class="dr"><span>${s}★</span><div class="bar"><i style="width:${n / mx * 100}%"></i></div><b>${n}</b></div>`).join('')}</div>
      ${rv.length ? rv.slice(0, 30).map((r) => `<div class="review"><span class="r-av">${r.av}</span><div class="grow"><div class="r-h"><b>${esc(r.name)}</b><span class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span></div><p>${esc(r.text)}</p>${r.reply ? `<p class="muted">Tiệm trả lời: ${esc(r.reply)}</p>` : ''}<small>Ngày ${r.day}</small></div></div>`).join('') : '<div class="emptybox">⭐<b>Chưa có đánh giá</b><p>Mở cửa và phục vụ khách để nhận đánh giá đầu tiên!</p></div>'}`;
  },
  acts: {},
};

/* ===== TỔNG KẾT ===== */
function periodEntries(mode, idx) {
  const hs = S.history;
  const len = mode === 'day' ? 1 : mode === 'week' ? 7 : 30;
  const end = hs.length - idx * len;
  const start = Math.max(0, end - len);
  return { list: hs.slice(start, end), label: mode === 'day' ? (hs[end - 1] ? `Ngày ${hs[end - 1].day}` : '—') : mode === 'week' ? `Tuần ${Math.ceil(Math.max(1, hs.length - idx * 7) / 7)}` : `Tháng ${Math.ceil(Math.max(1, hs.length - idx * 30) / 30)}`, can: { prev: start > 0, next: idx > 0 } };
}
const tongket = {
  html() {
    const mode = S.subtab.tk || 'day';
    const idx = S.subtab.tkIdx || 0;
    const per = periodEntries(mode, idx);
    const a = aggregate(per.list);
    const ev = mode === 'day' && per.list[0] ? DAY_EVENTS.find((e) => e.id === (per.list[0].event || 'normal')) : null;
    return `<div class="tabs">${[['day', 'Theo ngày'], ['week', 'Theo tuần'], ['month', 'Theo tháng']].map(([id, l]) => `<button class="tab ${mode === id ? 'on' : ''}" data-act="tkmode" data-v="${id}">${l}</button>`).join('')}</div>
      <div class="navr"><button class="rb" data-act="tkprev" ${per.can.prev ? '' : 'disabled'}>‹</button><b>${esc(per.label)}</b><button class="rb" data-act="tknext" ${per.can.next ? '' : 'disabled'}>›</button></div>
      ${ev ? `<div class="evline">${ev.icon} Sự kiện: <b>${esc(ev.name)}</b></div>` : ''}
      ${per.list.length ? `<div class="day-stats"><div><b>${a.cups}</b><span>ly bán</span></div><div><b>${a.left}</b><span>khách bỏ về</span></div><div><b>${a.avgStars ? a.avgStars.toFixed(1) : '–'}★</b><span>đánh giá</span></div></div>${plHTML(a, per.label)}` : '<div class="emptybox">📊<b>Chưa có dữ liệu</b><p>Hoàn thành ít nhất một ngày bán hàng để xem báo cáo.</p></div>'}`;
  },
  acts: {
    tkmode: (t) => { S.subtab.tk = t.dataset.v; S.subtab.tkIdx = 0; markDirty('panel'); },
    tkprev: () => { S.subtab.tkIdx = (S.subtab.tkIdx || 0) + 1; markDirty('panel'); },
    tknext: () => { S.subtab.tkIdx = Math.max(0, (S.subtab.tkIdx || 0) - 1); markDirty('panel'); },
  },
};

/* ===== BẠN BÈ ===== */
const banbe = {
  html() {
    const f = S.friends;
    const list = [...NPC_FRIENDS.map((x) => ({ ...x })), ...f.list];
    const board = [{ id: 'me', name: S.shopName + ' (Bạn)', av: '⭐', rich: S.money, rating: S.rating }, ...list].sort((a, b) => b.rich - a.rich);
    return `<div class="codecard"><small>Mã mời của bạn</small><b>${f.code}</b><button class="btn soft sm" data-act="copycode">📋 Sao chép</button></div>
      <div class="addf"><input id="friendCode" placeholder="Nhập mã bạn bè (TTN-XXXXX)" aria-label="Mã bạn bè"><button class="btn pri sm" data-act="addf">Thêm bạn</button></div>
      <h5 class="grp">👥 Danh sách bạn bè (${list.length})</h5>
      ${list.map((x) => `<div class="frow"><span class="r-av">${x.av}</span><div class="grow"><b>${esc(x.name)}</b><small>⭐ ${x.rating.toFixed(1)} · 💰 ${fmtK(x.rich)}</small></div><button class="btn ${f.gifted[x.id] === S.day ? 'ghost' : 'gold'} sm" data-act="visit" data-id="${x.id}" ${f.gifted[x.id] === S.day ? 'disabled' : ''}>${f.gifted[x.id] === S.day ? 'Đã thăm' : '🎁 Thăm quán'}</button></div>`).join('')}
      <h5 class="grp">🏆 Bảng xếp hạng tài sản</h5>${board.map((x, i) => `<div class="dl ${x.id === 'me' ? 'me' : ''}"><span>${i + 1}. ${x.av} ${esc(x.name)}</span><b>${fmtK(x.rich)}</b></div>`).join('')}`;
  },
  acts: {
    copycode: async () => { if (await copyText(S.friends.code)) toast('Đã sao chép mã mời!', 'ok'); else alertBox('Mã mời của bạn', `<input class="field" readonly value="${esc(S.friends.code)}" aria-label="Mã mời">Nhấn giữ mã để sao chép.`); },
    addf: () => {
      const v = ($('#friendCode')?.value || '').trim().toUpperCase();
      if (!/^TTN-[A-Z0-9]{3,8}$/.test(v)) return toast('Mã bạn bè không hợp lệ (dạng TTN-XXXXX)', 'err');
      if (v === S.friends.code) return toast('Đó là mã của bạn!', 'err');
      if (S.friends.list.some((x) => x.id === v)) return toast('Đã là bạn rồi', 'err');
      S.friends.list.push({ id: v, name: 'Bạn ' + v, av: pick(['🐻', '🦊', '🐰', '🐼']), rating: +rand(3.8, 4.9).toFixed(1), rich: Math.round(rand(2e5, 4e6)) });
      toast('Đã kết bạn!', 'ok'); sfx('success'); markDirty('panel'); requestSave();
    },
    visit: (t) => {
      const gift = E.visitFriend(t.dataset.id); if (typeof gift === 'string') return toast(gift, 'err');
      toast(`🎁 Bạn tặng quà! +${fmtK(gift)}`, 'gold'); sfx('coin'); markDirty('hud', 'panel'); requestSave();
    },
  },
};

/* ===== SƯU TẦM ===== */
function openPack() {
  const c = S.collection;
  if (c.packs <= 0) return null;
  c.packs--;
  const out = [];
  for (let i = 0; i < 3; i++) {
    const r = wpick(GACHA.weights);
    const idxs = GACHA.rarities.map((x, k) => (x === r ? k : -1)).filter((k) => k >= 0);
    const k = pick(idxs);
    const dup = !!c.owned[k];
    c.owned[k] = (c.owned[k] || 0) + 1;
    if (dup) E.addStock('tcDen', 3);
    out.push({ k, r, dup });
  }
  const sec = SECRET_RECIPES.filter((s) => !c.secrets[s.id]);
  let secret = null;
  if (sec.length && chance(0.12)) { secret = pick(sec); c.secrets[secret.id] = true; }
  markDirty('panel', 'hud');
  requestSave();
  return { out, secret };
}
export const openCardPack = openPack;
const suutam = {
  html() {
    const c = S.collection;
    const owned = Object.keys(c.owned).length;
    return `<div class="colhead"><h4>🎴 SỔ TAY SƯU TẦM & GACHA NGUYÊN LIỆU</h4><p>Đã có <b>${owned}/${GACHA.names.length}</b> thẻ · Công thức độc bản <b>${E.secretCount()}/${SECRET_RECIPES.length}</b> · Thưởng: +${Math.min(20, owned * 0.3).toFixed(1)}% doanh thu</p>
      <div class="row2"><button class="btn gold" data-act="pack" ${c.packs > 0 ? '' : 'disabled'}>🎁 Mở túi quà (${c.packs})</button><button class="btn soft" data-act="buypack">🛒 Mua túi (${fmtK(GIFT_COST)})</button></div></div>
      <h5 class="grp">📖 Công thức độc bản</h5><div class="secrets">${SECRET_RECIPES.map((s) => `<div class="secret ${c.secrets[s.id] ? 'got' : ''}"><span>${c.secrets[s.id] ? s.icon : '🔒'}</span><b>${c.secrets[s.id] ? esc(s.name) : '???'}</b><small>${c.secrets[s.id] ? esc(s.desc) : 'Chưa khám phá'}</small></div>`).join('')}</div>
      <h5 class="grp">🧺 Thẻ nguyên liệu</h5><div class="cards">${GACHA.names.map((n, k) => `<div class="gcard r${GACHA.rarities[k]} ${c.owned[k] ? '' : 'unk'}"><span>${c.owned[k] ? GACHA.icons[k] : '❔'}</span><b>${c.owned[k] ? n : '???'}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${c.owned[k] > 1 ? ' ×' + c.owned[k] : ''}</small></div>`).join('')}</div>`;
  },
  acts: {
    pack: () => {
      const r = openPack();
      if (!r) return;
      sfx('unlock');
      const m = openModal({ cls: 'small', html: `<h3 class="m-title">✨ Phát hiện mới!</h3><div class="cards">${r.out.map(({ k, dup }) => `<div class="gcard r${GACHA.rarities[k]} flip"><span>${GACHA.icons[k]}</span><b>${GACHA.names[k]}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${dup ? ' · trùng (+3 TC đen)' : ' · MỚI!'}</small></div>`).join('')}</div>${r.secret ? `<div class="secret got big"><span>${r.secret.icon}</span><b>Công thức độc bản: ${esc(r.secret.name)}</b><small>${esc(r.secret.desc)}</small></div>` : ''}<button class="btn pri block" data-act="x">Tuyệt! ✨</button>` });
      bindActions(m.body, { x: () => m.close() });
      fxSpark($('.gcard', m.body), 10);
    },
    buypack: () => { if (S.money < GIFT_COST) return toast('Không đủ tiền', 'err'); S.money -= GIFT_COST; S.collection.packs++; sfx('coin'); markDirty('hud', 'panel'); requestSave(); },
  },
};

export const PANELS3 = { vuon, thucung, khoinghiep, sanh, danhgia, tongket, banbe, suutam };
void PLOTS_START; void SEASONS; void WEATHERS; void sum; void alertBox; void $;
