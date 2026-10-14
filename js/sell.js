/**
 * Engine ca bán hàng: khách, order, pha ly (lấy ly → rót → hương → topping → đóng nắp → phục vụ),
 * nhân viên tự động, đơn online, sảnh bàn ghế, kết ca & sang ngày.
 */
import {
  ITEMS, TEAS, FLAVORS, TOPS, ARCHETYPES, STAFF, APPS, APP_FEE, BRANCHES, FRANCHISE, BANK, PETS, PET_DECOR, SEEDS,
  SHIFT_START_H, SHIFT_END_H, LOCATIONS, DAY_EVENTS, ADS, FEED_POSTS, FEED_AUTHORS, SECRET_RECIPES,
} from './config.js';
import { S, emit, on, markDirty, requestSave, saveGame, saveBackup, registerSaveHook, registerRestoreHook, freshToday, clamp, rand, randInt, pick, chance, wpick, sum } from './core.js';
import * as E from './econ.js';
import * as EV from './events.js';

export const SH = { on: false };
on('fire', id => { if (SH.jobs) SH.jobs = SH.jobs.filter(job => job.by !== id); if (SH.board && SH.board.auto && SH.board.auto.st.id === id) { SH.board.pouring = false; SH.board.auto = null; SH.board.autoDone = true; } });
registerSaveHook(() => {
  S.shiftRuntime = S.phase === 'sell' && SH.on ? JSON.parse(JSON.stringify(SH)) : null;
});
export function restoreShiftRuntime() {
  const saved = S.shiftRuntime;
  SH.on = false; SH.fin = false;
  if (S.phase !== 'sell') return false;
  if (!saved || !saved.on || !Number.isFinite(saved.total) || saved.total <= 0 ||
      !Number.isFinite(saved.t) || !Array.isArray(saved.queue) || !Array.isArray(saved.plan) ||
      !Array.isArray(saved.jobs) || !Array.isArray(saved.tables) || !Array.isArray(saved.onlineQ)) {
    S.phase = 'home'; S.shiftRuntime = null; return false;
  }
  Object.assign(SH, saved);
  if (SH.board) SH.board.pouring = false;
  EV.onRestore();
  cid = Math.max(cid, ...SH.queue.map((c) => c.id + 1), ...SH.onlineQ.map((c) => (c.id || 0) + 1));
  return true;
}
registerRestoreHook(restoreShiftRuntime);

/* ===== Sinh khách ===== */
function spawnPlan(n, total) {
  // Giờ cao điểm 11–13h và 17–19h đông hơn, nhưng khách đến ĐỀU (chia theo phân vị + nhiễu nhỏ), không dồn cục.
  const seg = [[10, 11, 1], [11, 13, 1.7], [13, 17, 1], [17, 19, 1.7], [19, 22, 1.1]];
  const tot = sum(seg, (s) => (s[1] - s[0]) * s[2]);
  const hourAt = (q) => {
    let r = q * tot;
    for (const [a, b, w] of seg) { const m = (b - a) * w; if (r <= m) return a + r / w; r -= m; }
    return 22;
  };
  const times = [];
  const minGap = Math.max(3, total / Math.max(n, 1) * 0.3);
  for (let i = 0; i < n; i++) {
    const q = clamp((i + 0.5 + rand(-0.28, 0.28)) / n, 0, 0.999);
    let t = ((hourAt(q) - 10) / 12) * total * 0.94 + 1.5;
    if (times.length && t - times[times.length - 1] < minGap) t = times[times.length - 1] + minGap;
    times.push(t);
  }
  return times;
}

export function makeOrder() {
  const b = E.bonus();
  const w = E.weatherOf();
  const ev = E.eventOf();
  const tw = {};
  for (const t of TEAS) {
    if (!S.onMenu[t] || !S.unlocked[t]) continue;
    let x = E.priceWeight(t) * (E.stockQty(t) > 0 ? 1 : 0.2);
    const tp = ITEMS[t].temp;
    if ((w.coldBias || ev.coldBias) && tp === 'cold') x *= 1.5;
    if (w.warmBias && tp === 'warm') x *= 1.8;
    if (ev.hotItem === t) x *= 2;
    tw[t] = x;
  }
  const tea = wpick(tw) || TEAS.find((t) => S.onMenu[t]) || 'traSua';
  const size = chance(0.3 * E.sizeLWeight() * ((w.coldBias || ev.coldBias) ? 1.5 : 1)) ? 'L' : 'M';
  let flavor = null;
  const fw = {};
  for (const f of FLAVORS) if (S.onMenu[f] && S.unlocked[f]) fw[f] = E.priceWeight(f) * (E.stockQty(f) > 0 ? 1 : 0.15);
  if (Object.keys(fw).length && chance(0.45)) flavor = wpick(fw) || null;
  const tw2 = {};
  for (const t of TOPS) if (S.onMenu[t] && S.unlocked[t]) tw2[t] = E.priceWeight(t) * (E.stockQty(t) > 0 ? 1 : 0.15);
  const nT = Math.min(Object.keys(tw2).length, +wpick({ 0: 20, 1: 45, 2: 25, 3: 8, 4: 2 }));
  const tops = [];
  const pool = { ...tw2 };
  for (let i = 0; i < nT; i++) { const t = wpick(pool); if (!t) break; tops.push(t); delete pool[t]; }
  return { tea, size, flavor, tops };
}
function orderText(arch, o) {
  const drink = ITEMS[o.tea].name.toLowerCase() + (o.flavor ? ` vị ${ITEMS[o.flavor].name.toLowerCase()}` : '');
  const tops = o.tops.length ? ' với ' + o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(' và ') : '';
  return pick(arch.lines).replace('{drink}', drink).replace('{size}', 'size ' + o.size).replace('{tops}', tops);
}
export function orderPrice(o) {
  return E.priceOf(o.tea) + (o.flavor ? E.priceOf(o.flavor) : 0) + sum(o.tops, (t) => E.priceOf(t)) + (o.size === 'L' ? E.priceOf('sizeL') : 0);
}

let cid = 1;
function newCustomer(opts = {}) {
  const b = E.bonus();
  const keys = {};
  for (const [k, a] of Object.entries(ARCHETYPES)) {
    if (k === 'reviewer' && !opts.reviewer) continue;
    keys[k] = a.w * (E.eventOf().student && (k === 'sinhVien' || k === 'be') ? 2 : 1);
  }
  const key = opts.reviewer ? 'reviewer' : wpick(keys);
  const a = ARCHETYPES[key];
  const order = makeOrder();
  const maxP = (62 * a.patience * (1 + b.patience)) * (opts.online ? 1.2 : 1);
  return {
    id: cid++, key, tag: a.tag, avatar: pick(a.avatars), order, text: orderText(a, order),
    p: maxP, maxP, online: !!opts.online, app: opts.app || null, hard: clamp(a.hard + b.hardCust - b.badRev + (S.location === 'hcm' && SH.hour >= 20 ? 0.1 : 0), 0, 1), born: SH.t,
  };
}

/* ===== Vòng đời ca ===== */
export function startShift() {
  if (SH.on) return 'Đang trong ca';
  const chk = E.openMissing();
  if (!chk.canOpen) return 'Chưa đủ nguyên liệu để mở cửa';
  const total = S.settings.shiftMin * 60;
  const n = E.expectedCustomers();
  Object.assign(SH, {
    on: true, total, t: 0, hour: SHIFT_START_H, queue: [], sel: null, plan: spawnPlan(n, total), pi: 0, expected: n,
    served: 0, left: 0, rev: 0, tip: 0, board: null, onlineQ: [], onlineNext: rand(12, 25), tables: [], view: 'counter',
    staffT: {}, jobs: [], over: 0, fb: [], buyT: 0, fin: false, critic: E.eventOf().critic ? { at: total * rand(0.35, 0.6), done: false } : null,
    sat: 0, cupsDone: 0,
  });
  // Lần đầu: có sẵn 1 khách để hướng dẫn minh họa ngay (đơn giản, không topping).
  if (S.settings.tut && S.settings.tut.sell === false) {
    const c = newCustomer(); c.order.tops = []; c.order.flavor = null; c.text = orderText(ARCHETYPES[c.key], c.order);
    SH.queue.push(c); SH.pi = Math.min(SH.pi + 1, SH.plan.length);
  }
  const nt = E.bonus().tables;
  for (let i = 0; i < nt; i++) SH.tables.push({ s: 'free', t: 0 });
  EV.onShiftStart();
  S.phase = 'sell';
  S.started = true;
  markDirty('view', 'hud');
  emit('shift:start');
  return null;
}
export const frontCustomer = () => SH.queue.find((c) => c.id === SH.sel) || SH.queue[0] || null;
export function selectCustomer(id) {
  if (!SH.queue.some((c) => c.id === id)) return;
  SH.sel = id;
  emit('sel');
}
function removeCust(c) {
  SH.queue = SH.queue.filter((x) => x !== c);
  if (SH.sel === c.id) SH.sel = null;
  SH.jobs = SH.jobs.filter((j) => j.cid !== c.id);
  emit('queue');
}
/** Người chơi chủ động từ chối đơn của khách đang đứng đầu hàng. */
export function rejectCustomer() {
  const c = frontCustomer();
  if (!c) return 'Chưa có khách để từ chối';
  removeCust(c);
  SH.left++; S.today.left++;
  if (chance(0.3)) pushReview(c, 3, 'Quán từ chối đơn của mình, hơi tiếc.');
  emit('rejected', c);
  markDirty('hud');
  return null;
}
/** Ly khác order (sai trà/size/hương/topping)? */
export function isWrongOrder(board, c) {
  const o = c.order;
  return board.tea !== o.tea || board.size !== o.size || (board.flavor || null) !== (o.flavor || null) ||
    o.tops.some((t) => !board.tops.includes(t)) || board.tops.some((t) => !o.tops.includes(t));
}
function customerLeaves(c, why) {
  removeCust(c);
  SH.left++; S.today.left++;
  if (why === 'patience') {
    const stars = chance(0.5) ? 1 : 2;
    pushReview(c, stars, 'Chờ lâu quá nên mình đành bỏ về...');
    emit('left', c);
  }
}
const REV_TEXT = {
  5: ['Ly trà chuẩn vị luôn, nhân viên dễ thương, sẽ quay lại nhé!', 'Pha nhanh, đúng order từng chút một. 10 điểm!', 'Quán xinh, trà ngon, topping tươi. Chấm 5 sao!'],
  4: ['Trà ngon, chờ hơi lâu một chút nhưng xứng đáng.', 'Ổn áp, lần sau mình sẽ ghé tiếp.', 'Ly đẹp, vị ổn, giá hợp lý.'],
  3: ['Tạm được, mong lần sau chuẩn vị hơn.', 'Hơi nhạt so với mong đợi, ly cũng chưa đầy.', 'Bình thường, không có gì đặc biệt.'],
  2: ['Ly bị sai so với order của mình rồi 😕', 'Chờ khá lâu mà ly lại sai topping.', 'Hơi thất vọng, quán cần cẩn thận hơn.'],
  1: ['Sai hẳn món mình gọi, buồn ghê.', 'Chờ mãi không tới lượt, mình về đây.', 'Trải nghiệm tệ, mong quán rút kinh nghiệm.'],
};
export function pushReview(c, stars, text) {
  const reply = S.staff.meKetTinh ? 'Cảm ơn bạn đã ghé quán! Tiệm đã ghi nhận góp ý và mong được phục vụ bạn tốt hơn.' : null;
  if (reply) stars = Math.min(5, stars + 1);
  const weight = c.key === 'reviewer' ? 3 : 1;
  for (let i = 0; i < weight; i++) {
    S.reviews.unshift({ stars, name: c.tag, av: c.avatar, text: text || pick(REV_TEXT[stars]), reply, day: S.day });
  }
  if (S.reviews.length > 200) S.reviews.length = 200;
  S.ratingCount += 1;
  S.rating = clamp((40 + sum(S.reviews, (r) => r.stars)) / (10 + S.reviews.length), 1, 5);
  S.today.stars.push(stars);
  markDirty('hud');
}

/* ===== Hành động pha chế của người chơi ===== */
export function pickCup(size) {
  if (!SH.on) return 'Chưa mở cửa';
  if (SH.board) return 'Đang có ly trên thớt';
  const customer = frontCustomer();
  if (customer && SH.jobs.some(job => job.cid === customer.id)) return 'Nhân viên đang làm đơn này. Chọn khách khác để pha song song.';
  const blk = EV.blocked('cup'); if (blk) return blk;
  const cupId = size === 'L' ? 'lyL' : 'lyM';
  if (E.stockQty(cupId) < 1) return `Hết ly size ${size === 'L' ? 'L' : 'M'} rồi!`;
  E.take(cupId, 1);
  SH.board = { size, cid: customer?.id, tea: null, fill: 0, flavor: null, tops: [], phase: 'cup', sealT: 0, pouring: false, spill: 0, auto: null };
  const st = counterAssistant();
  if (st) {
    const c = frontCustomer();
    if (c) SH.board.auto = { cid: c.id, t: 1.1, topsLeft: st.kind === 'manager' ? [...c.order.tops] : [], st };
  }
  emit('cup:pick', size);
  return null;
}
export function startPour(tea) {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Hãy lấy ly trước';
  if (b.tea && b.tea !== tea) return 'Ly đã rót loại trà khác';
  if (b.fill >= 1.25) return 'Ly đầy rồi';
  const blk = EV.blocked('pump'); if (blk) return blk;
  if (!b.tea) {
    if (E.stockQty(tea) < 1) return `Hết ${ITEMS[tea].name}!`;
    E.take(tea, 1);
    b.tea = tea;
  }
  b.pouring = true;
  emit('pour:start', tea);
  return null;
}
export function stopPour() {
  const b = SH.board;
  if (!b || !b.pouring) return;
  b.pouring = false;
  emit('pour:stop');
}
export function addFlavor(id) {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Hãy lấy ly trước';
  if (b.flavor) return 'Ly đã có hương';
  if (E.stockQty(id) < 1) return `Hết ${ITEMS[id].name}!`;
  E.take(id, 1);
  b.flavor = id;
  emit('flavor', id);
  return null;
}
export function addTop(id) {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Hãy lấy ly trước';
  if (b.tops.includes(id)) return 'Ly đã có topping này';
  if (b.tops.length >= 4) return 'Tối đa 4 topping';
  if (E.stockQty(id) < 1) return `Hết ${ITEMS[id].name}!`;
  E.take(id, 1);
  b.tops.push(id);
  emit('top', id);
  return null;
}
export function sealCup() {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Chưa có ly để đóng nắp';
  if (!b.tea || b.fill < 0.2) return 'Ly chưa có trà';
  const blk = EV.blocked('seal'); if (blk) return blk;
  if (b.auto) return 'Nhân viên đang pha, hãy đợi hoàn tất';
  for (const [id, flag] of [['da', 'iceAdded'], ['duong', 'sugarAdded']]) {
    if (!b[flag] && E.stockQty(id) < 1) return `Hết ${ITEMS[id].name}, cần nhập thêm trước khi đóng nắp`;
  }
  if (b.pouring) stopPour();
  if (!b.iceAdded) addSupply('da');
  if (!b.sugarAdded) addSupply('duong');
  b.phase = 'sealing';
  b.sealT = 1.2 * (1 - E.bonus().seal);
  b.sealMax = b.sealT;
  emit('seal:start');
  return null;
}
/** Một phần đá và một phần đường cho mỗi ly, không trừ lại khi đóng nắp. */
export function addSupply(id) {
  const flag = id === 'da' ? 'iceAdded' : id === 'duong' ? 'sugarAdded' : null;
  if (!flag) return 'Nguyên liệu không hợp lệ';
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Hãy lấy ly trước';
  if (b[flag]) return `Ly đã thêm ${ITEMS[id].name}`;
  if (!E.take(id, 1)) return `Hết ${ITEMS[id].name}!`;
  b[flag] = true;
  emit('staff:ingredient', id);
  return null;
}
export function trashCup() {
  if (!SH.board) return;
  SH.board = null;
  S.today.waste += 3000;
  emit('trash');
}
/** Chấm điểm ly so với order của khách. */
export function evaluate(board, c) {
  const o = c.order;
  const issues = [];
  let stars = 5;
  if (board.tea !== o.tea) { stars -= 3; issues.push('sai loại trà'); }
  if (board.size !== o.size) { stars -= 2; issues.push('sai size'); }
  if ((board.flavor || null) !== (o.flavor || null)) { stars -= 1; issues.push(board.flavor ? 'thừa/sai hương' : 'thiếu hương'); }
  const miss = o.tops.filter((t) => !board.tops.includes(t)).length;
  const extra = board.tops.filter((t) => !o.tops.includes(t)).length;
  if (miss + extra) { stars -= Math.min(2, miss + extra); issues.push('sai topping'); }
  if (board.fill < 0.75) { stars -= 1; issues.push('ly lưng'); }
  if (board.spill > 0) { stars -= 1; issues.push('rót tràn'); }
  if (c.p / c.maxP < 0.2) { stars -= 1; issues.push('chờ lâu'); }
  if (stars >= 4 && chance(clamp(c.hard * 0.5, 0, 0.5))) { stars -= 1; issues.push('khách khó tính'); }
  return { stars: clamp(stars, 1, 5), issues };
}
const PAY = { 1: 0.3, 2: 0.55, 3: 0.8, 4: 1, 5: 1 };
export function serve(forced) {
  const b = SH.board;
  const c = forced?.c || frontCustomer();
  if (!c) return 'Chưa có khách';
  const board = forced?.board || b;
  if (!board || (board.phase !== 'ready' && !forced)) return 'Ly chưa đóng nắp xong';
  if (!forced) { const blk = EV.blocked('serve'); if (blk) return blk; }
  const ev = evaluate(board, c);
  const wrong = !forced && isWrongOrder(board, c);
  if (wrong) {
    // ly sai order: khách có thể từ chối nhận hoặc chỉ mua với giá rẻ hơn (khó tính / nhiều sao bị trừ thì dễ từ chối hơn)
    const refuseP = clamp(0.3 + c.hard * 0.6 + (ev.stars <= 2 ? 0.2 : 0), 0.25, 0.85);
    if (chance(refuseP)) {
      SH.board = null;
      pushReview(c, 1, 'Sai order rồi, mình không nhận ly này!');
      removeCust(c);
      SH.left++; S.today.left++; S.today.waste += 3000;
      const out = { stars: 1, pay: 0, tip: 0, issues: ev.issues, luck: false, seat: null, cust: c, byStaff: false, refused: true };
      emit('served', out);
      markDirty('hud');
      requestSave();
      return out;
    }
  }
  const res = settle(c, board, ev.stars, ev.issues, !!forced, wrong);
  if (!forced) SH.board = null;
  return res;
}
/** Tính tiền, review, tip, ngồi sảnh. */
function settle(c, board, stars, issues, byStaff, discount = false) {
  const bn = E.bonus();
  const unit = E.priceOf(board.tea) + (board.flavor ? E.priceOf(board.flavor) : 0) + sum(board.tops, (t) => E.priceOf(t)) + (board.size === 'L' ? E.priceOf('sizeL') : 0);
  const arch = ARCHETYPES[c.key];
  const localBill = bn.billTeas[board.tea] || (S.location === 'bmt' && board.tops.some(id => id === 'fCheese' || id === 'tcDen') ? 0.2 : 0);
  let bill = unit * PAY[stars] * arch.bill * (1 + bn.bill + localBill);
  if (SH.hour >= 20) bill *= 1 + bn.lateBill;
  if (c.online) bill *= 1.15;
  if (discount) bill *= 0.7; // bán rẻ vì ly sai order
  let luck = false;
  if (chance(0.015 + bn.lucky * 0.1)) { bill *= 2; luck = true; }
  let tip = 0;
  if (stars >= 4) {
    const coldPen = ITEMS[board.tea].temp === 'cold' ? bn.coldTip : 0;
    tip = bill * 0.12 * arch.tip * (stars === 5 ? 1.5 : 1) * Math.max(0, 1 + bn.tip + coldPen);
    if (byStaff && board.by === 'phaChe') tip = 0; // This employee keeps the tip, as stated on the hiring card.
  }
  let pay = Math.round(bill);
  tip = Math.round(tip);
  if (c.online) {
    const fee = Math.round(pay * APP_FEE);
    pay -= fee;
    S.today.online += pay + tip;
  }
  S.money += pay + tip;
  S.today.rev += pay;
  S.today.tips += tip;
  S.today.cups += 1;
  SH.rev += pay + tip; SH.tip += tip; SH.served++; SH.cupsDone++;
  pushReview(c, stars, null);
  S.followers += Math.round((stars >= 4 ? 3 : 0) + (E.equipLevel('qcMxh') * 2));
  removeCust(c);
  // Ngồi sảnh
  let seat = null;
  if (!c.online && !byStaff && chance(0.4 + Math.max(0, E.equipLevel('banGhe') - 1) * 0.1)) {
    const free = SH.tables.findIndex((t) => t.s === 'free');
    if (free >= 0) { SH.tables[free] = { s: 'busy', t: rand(16, 28), av: c.avatar }; seat = free; const extra = Math.round(bill * 0.1); S.money += extra; S.today.rev += extra; SH.rev += extra; }
  }
  const out = { stars, pay, tip, issues, luck, seat, cust: c, byStaff, discount };
  emit('served', out);
  markDirty('hud');
  requestSave();
  return out;
}
export function cleanTable(i) {
  const t = SH.tables[i];
  if (!t || t.s !== 'dirty') return false;
  SH.tables[i] = { s: 'free', t: 0 };
  const tip = randInt(1, 3) * 1000;
  S.money += tip; S.today.tips += tip; SH.tip += tip; SH.rev += tip;
  emit('table:clean', { i, tip });
  markDirty('hud');
  return true;
}

/* ===== Online ===== */
function spawnOnline() {
  const open = APPS.filter((a) => S.apps[a.id]);
  if (!open.length) return;
  SH.onlineQ.push({ id: cid++, app: pick(open), exp: 22, o: makeOrder() });
  emit('online:new');
}
export function acceptOnline(id) {
  const q = SH.onlineQ.find((x) => x.id === id);
  if (!q) return 'Đơn đã hết hạn';
  if (SH.queue.length >= E.bonus().queue + 2) return 'Hàng chờ đã đầy';
  SH.onlineQ = SH.onlineQ.filter((x) => x !== q);
  const c = newCustomer({ online: true, app: q.app });
  c.order = q.o; c.avatar = '📱'; c.tag = `📱 ${q.app.name}`; c.text = `Đơn ${q.app.name}: ${ITEMS[q.o.tea].name} size ${q.o.size}${q.o.flavor ? ' vị ' + ITEMS[q.o.flavor].name.toLowerCase() : ''}${q.o.tops.length ? ' + ' + q.o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(', ') : ''}. Giao nhanh giúp nhé!`;
  SH.queue.push(c);
  emit('queue');
  return null;
}

/* ===== Nhân viên tự động ===== */
function staffStep(dt) {
  const b = E.bonus();
  const speedMul = 1 / (1 + b.speedStaff) * (S.staff.meKetTinh ? 0.8 : 1);
  for (const st of STAFF) {
    if (!S.staff[st.id]) continue;
    if (st.kind === 'marketing') {
      if (!E.taxActive() && S.money > 0) E.payTax();
      SH.staffT[st.id] = (SH.staffT[st.id] || 0) - dt;
      if (SH.staffT[st.id] <= 0) {
        SH.staffT[st.id] = 20;
        if (!E.recordVideo()) { S.followers += randInt(1500, 6000); S.social.posts.unshift(genPost()); S.social.posts = S.social.posts.slice(0, 10); markDirty('panel', 'hud'); requestSave(); }
      }
    } else if (st.kind === 'auto' || st.kind === 'online' || st.kind === 'night') {
      const key = st.id;
      if (EV.blocked('pump') || EV.blocked('seal')) continue;
      if (st.kind === 'online' && E.onlineEnabled() && SH.onlineQ.length) acceptOnline(SH.onlineQ[0].id);
      const runtime = SH.staffT[key] || (SH.staffT[key] = {done: 0, sulk: 0});
      if (runtime.sulk > 0) { runtime.sulk -= dt; if (runtime.sulk <= 0) { E.fire(key); emit('staff:quit', st); } continue; }
      if (st.kind === 'night' && !(SH.hour >= 22 || SH.hour < 6)) continue;
      const busy = SH.jobs.find((j) => j.by === key);
      if (busy) {
        busy.t -= dt;
        if (busy.t <= 0) { finishJob(busy, st, b); SH.jobs = SH.jobs.filter((j) => j !== busy); }
        continue;
      }
      const free = SH.queue.filter((c) => !SH.jobs.some((j) => j.cid === c.id));
      const front = frontCustomer();
      let cand = null;
      if (st.kind === 'online') cand = free.find((c) => c.online);
      else if (SH.queue.length >= (st.minQueue || 1)) cand = free.filter((c) => !c.online && !(SH.board && c.id === (SH.board.cid ?? SH.board.auto?.cid ?? front?.id))).sort((x, y) => x.p - y.p)[0];
      if (cand) {
        const need = needs(cand.order);
        if (!canTake(need)) continue;
        const steps = key === 'genZ' ? ['cup', 'pour', ...(cand.order.flavor ? ['flavor'] : []), 'sugar', 'ice', ...cand.order.tops.map(id => 'top:' + id), 'seal', 'serve'] : null;
        const total = st.sec * speedMul / (1 + Math.min(0.1, (S.staff[key].shifts || 0) * 0.005)) * (steps?.length || 1);
        SH.jobs.push({ by: key, cid: cand.id, t: total, total, steps });
        if (key === 'genZ') emit('staff:job', { cid: cand.id, by: key });
        for (const [id, n] of need) E.take(id, n);
      }
    } else if (st.kind === 'buyer') {
      SH.buyT += dt;
      if (SH.buyT >= 4) {
        SH.buyT = 0;
        const want = [...TEAS.filter((t) => S.onMenu[t]), ...FLAVORS.filter((t) => S.onMenu[t] && S.unlocked[t]), ...TOPS.filter((t) => S.onMenu[t]), 'lyM', 'lyL', 'da', 'duong'];
        for (const id of want) {
          if (E.stockQty(id) === 0) {
            const q = 8, cost = Math.round(E.unitCost(id) * q * 1.1);
            if (S.money >= cost) { S.money -= cost; S.today.purchase += cost; E.addStock(id, q); emit('buyer', id); markDirty('hud'); break; }
          }
        }
      }
    }
  }
}
const needs = (o) => [[o.size === 'L' ? 'lyL' : 'lyM', 1], [o.tea, 1], ...(o.flavor ? [[o.flavor, 1]] : []), ...o.tops.map((t) => [t, 1]), ['da', 1], ['duong', 1]];
const canTake = (list) => list.every(([id, n]) => E.stockQty(id) >= n);
/** Each automatic order has its own cup; inspecting it never uses the player's board. */
export function staffJobPreview(job, customer) {
  if (!job || !customer) return null;
  const o = customer.order;
  const steps = job.steps || ['cup', 'pour', ...(o.flavor ? ['flavor'] : []), 'sugar', 'ice', ...o.tops.map(id => 'top:' + id), 'seal', 'serve'];
  const total = Math.max(.001, job.total || STAFF.find(st => st.id === job.by)?.sec || 1);
  const progress = clamp(1 - job.t / total, 0, 1);
  const index = Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const step = steps[index], local = progress * steps.length - index;
  const done = steps.slice(0, index);
  const labels = { cup: 'Lấy cốc ' + o.size, pour: 'Rót ' + ITEMS[o.tea].name, flavor: o.flavor ? 'Thêm hương ' + ITEMS[o.flavor].name : 'Thêm hương', sugar: 'Thêm đường', ice: 'Thêm đá', seal: 'Đóng nắp', serve: 'Giao ly cho khách' };
  const tops = done.filter(s => s.startsWith('top:')).map(s => s.slice(4));
  if (step.startsWith('top:') && local >= .5) tops.push(step.slice(4));
  const cup = { size: o.size, tea: index > 0 ? o.tea : null, fill: step === 'pour' ? local * .95 : index > 1 ? .95 : 0, flavor: done.includes('flavor') || step === 'flavor' && local >= .5 ? o.flavor : null, tops, iceAdded: done.includes('ice') || step === 'ice' && local >= .5, sugarAdded: done.includes('sugar') || step === 'sugar' && local >= .5, phase: step === 'seal' ? 'sealing' : step === 'serve' ? 'ready' : 'cup', sealMax: total / steps.length };
  return { cup, step, index, count: steps.length, progress, label: labels[step] || 'Thêm ' + ITEMS[step.slice(4)].name };
}
function finishJob(job, st, b) {
  const c = SH.queue.find((x) => x.id === job.cid);
  if (!c) return;
  const err = clamp(st.err * (1 - b.errReduce), 0, 1);
  const board = { tea: c.order.tea, size: c.order.size, flavor: c.order.flavor, tops: [...c.order.tops], fill: 1, spill: 0, phase: 'ready' };
  let forceStars = null;
  if (st.kind === 'online' && chance(err)) {
    // Ingredients were consumed when the job started. Retry only after a new set is available.
    emit('staff:retry', st); return;
  }
  if (st.kind !== 'online' && chance(err)) { board.size = board.size === 'M' ? 'L' : 'M'; forceStars = 3; }
  const result = serveStaff(c, board, forceStars, st);
  const runtime = SH.staffT[st.id];
  if (runtime && typeof runtime === 'object') { runtime.done++; if (st.id === 'genZ' && runtime.done % 100 === 0) runtime.sulk = 10; }
  if (st.id === 'genZ' && !S.staff.chuBa && runtime && !runtime.billTaken) {
    runtime.billTaken = true; runtime.hiddenBill = result.pay;
    S.money -= result.pay; S.today.rev -= result.pay; SH.rev -= result.pay;
    emit('staff:bill', st); markDirty('hud'); requestSave();
  }
}
function serveStaff(c, board, forceStars, st) {
  board.by = st.id;
  const ev = evaluate(board, c);
  return settle(c, board, forceStars ? Math.min(forceStars, ev.stars) : Math.min(ev.stars, 5), ev.issues, true);
}

// Prefer the manager for legacy saves containing both mutually exclusive helpers.
const counterAssistant = () => STAFF.find(s => S.staff[s.id] && s.kind === 'manager')
  || STAFF.find(s => S.staff[s.id] && s.kind === 'pour');
// The counter assistant works on this cup's customer, never the next selected order.
function advanceCounterStaff(bd, dt, bonus) {
  if (bd.phase !== 'cup') { bd.auto = null; return; }
  if (!bd.auto && !bd.autoDone) {
    const st = counterAssistant();
    const c = SH.queue.find(c => c.id === bd.cid) || frontCustomer();
    if (st && c) bd.auto = { cid: c.id, t: 0.6, st, topsLeft: st.kind === 'manager' ? [...c.order.tops] : [] };
  }
  const a = bd.auto;
  if (!a) return;
  const c = SH.queue.find(c => c.id === a.cid);
  const st = STAFF.find(s => s.id === a.st?.id);
  if (!c || !st || !S.staff[st.id] || !['pour', 'manager'].includes(st.kind)) { if (bd.pouring) stopPour(); bd.auto = null; bd.autoDone = true; return; }
  a.st = st; // Never trust role/permissions saved inside an unfinished cup.
  if (st.kind !== 'manager') a.topsLeft = [];
  a.stage = a.stage || 'tea';
  if (a.stage === 'tea' && EV.blocked('pump')) { bd.pouring = false; return; }
  a.t -= dt;
  if (a.stage === 'pour') {
    if (EV.blocked('pump')) { bd.pouring = false; return; }
    if (bd.fill < a.target) { bd.pouring = true; return; }
    stopPour(); a.stage = 'flavor'; a.t = 0.45;
  }
  if (a.t > 0) return;
  const takeOnce = (id, flag) => {
    if (bd[flag]) return true;
    if (E.stockQty(id) < 1) { a.waiting = ITEMS[id].name; return false; }
    const err = addSupply(id);
    if (err) { a.waiting = err; return false; }
    a.waiting = null; return true;
  };
  if (a.stage === 'tea') {
    if (!bd.tea) { const err = startPour(c.order.tea); if (err) { a.waiting = err; return; } }
    a.target = chance(a.st.err * (1 - bonus.errReduce)) ? 0.6 : 0.95;
    a.stage = 'pour'; bd.pouring = true; a.waiting = null;
  } else if (a.stage === 'flavor') {
    if (c.order.flavor && !bd.flavor) { const err = addFlavor(c.order.flavor); if (err) { a.waiting = err; return; } emit('staff:flavor', c.order.flavor); }
    a.stage = 'sugar'; a.t = 0.45;
  } else if (a.stage === 'sugar') {
    if (!takeOnce('duong', 'sugarAdded')) return;
    a.stage = 'ice'; a.t = 0.45;
  } else if (a.stage === 'ice') {
    if (!takeOnce('da', 'iceAdded')) return;
    a.stage = 'topping'; a.t = 0.45;
  } else if (a.stage === 'topping') {
    const id = st.kind === 'manager' ? a.topsLeft?.[0] : null;
    if (id) {
      if (!bd.tops.includes(id)) { const err = addTop(id); if (err) { a.waiting = err; return; } emit('staff:top', { id, staff: st.id }); }
      a.topsLeft.shift(); a.t = 0.45;
    } else { bd.auto = null; bd.autoDone = true; emit('auto:pour'); }
  }
}
export function comfortStaff(id) {
  const runtime = SH.staffT[id];
  if (!runtime || typeof runtime !== 'object' || (!(runtime.sulk > 0) && !(runtime.hiddenBill > 0))) return false;
  if (runtime.hiddenBill > 0) { S.money += runtime.hiddenBill; S.today.rev += runtime.hiddenBill; SH.rev += runtime.hiddenBill; runtime.hiddenBill = 0; markDirty('hud'); requestSave(); }
  runtime.sulk = 0; emit('staff:comfort', id); return true;
}

/* ===== Cập nhật mỗi frame ===== */
export function updateShift(dt) {
  if (!SH.on || S.phase !== 'sell') return;
  SH.t += dt;
  SH.hour = SH.t <= SH.total ? SHIFT_START_H + SH.t / SH.total * (SHIFT_END_H - SHIFT_START_H) : (22 + Math.min(8, (SH.t - SH.total) / 22 * 8)) % 24;
  EV.update(dt);
  const b = E.bonus();
  const maxQ = b.queue;
  // sinh khách theo lịch
  while (SH.pi < SH.plan.length && SH.t >= SH.plan[SH.pi] && SH.t < SH.total) {
    SH.pi++;
    if (SH.queue.length >= maxQ) { SH.left++; S.today.left++; emit('balk'); continue; }
    SH.queue.push(newCustomer());
    emit('queue'); emit('ding');
  }
  if (SH.critic && !SH.critic.done && SH.t >= SH.critic.at && SH.queue.length < maxQ) {
    SH.critic.done = true;
    SH.queue.push(newCustomer({ reviewer: true }));
    emit('queue');
  }
  // online
  if (S.settings && E.onlineEnabled() && SH.t < SH.total * 0.95) {
    SH.onlineNext -= dt;
    if (SH.onlineNext <= 0) { SH.onlineNext = rand(16, 34) / Math.max(0.3, 1 + b.online); spawnOnline(); }
  }
  for (const q of SH.onlineQ) q.exp -= dt;
  const before = SH.onlineQ.length;
  SH.onlineQ = SH.onlineQ.filter((q) => q.exp > 0);
  if (before !== SH.onlineQ.length) emit('online:new');
  // kiên nhẫn
  for (const c of [...SH.queue]) {
    if (SH.jobs.some((j) => j.cid === c.id)) { c.p -= dt * 0.4; } else c.p -= dt;
    if (c.p <= 0) customerLeaves(c, 'patience');
  }
  // thớt
  const bd = SH.board;
  if (bd) {
    if (bd.pouring && !EV.blocked('pump')) {
      const rate = 0.55 * (1 + b.pour + b.speedStaff);
      bd.fill += rate * dt;
      if (bd.fill > 1.0) { bd.spill += (bd.fill - 1.0) * 0.5 * (E.equipLevel('binhRot') >= 3 ? 0.5 : 1); }
      if (bd.fill >= 1.25) { bd.fill = 1.25; bd.pouring = false; emit('pour:stop'); }
    }
    if (bd.phase === 'sealing' && !EV.blocked('seal')) {
      bd.sealT -= dt;
      if (bd.sealT <= 0) { bd.phase = 'ready'; emit('seal:done'); }
    }
    advanceCounterStaff(bd, dt, b);
  }
  // bàn
  for (let i = 0; i < SH.tables.length; i++) {
    const t = SH.tables[i];
    if (t.s === 'busy') { t.t -= dt; if (t.t <= 0) { SH.tables[i] = { s: 'dirty', t: 0 }; emit('tables'); } }
  }
  if (!EV.halted()) staffStep(dt);
  // kết ca
  if (SH.t >= SH.total) {
    SH.over += dt;
    if (SH.queue.length === 0 || SH.over > 22) finishShift(false);
  }
}
export function closeNow() {
  if (!SH.on) return;
  SH.queue.forEach((c) => { SH.left++; S.today.left++; });
  SH.queue = [];
  finishShift(true);
}

/* ===== Kết ca & kế toán ===== */
function branchDaily() {
  const bn = E.bonus();
  let net = 0, rev = 0;
  for (const [id, br] of Object.entries(S.branches)) {
    const def = BRANCHES.find((x) => x.id === id);
    if (!def) continue;
    const adB = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id).branch : 0;
    const r = rand(def.rev[0], def.rev[1]) * (0.8 + S.rating * 0.05) * (1 + bn.branch + adB) * (1 + 0.1 * (br.staff || 0));
    const ing = r * rand(def.ing[0], def.ing[1]);
    const wage = (br.staff || 0) * 150000;
    const p = r - ing - wage - def.rent;
    br.profit = p; br.rev = (br.rev || 0) + r; br.days = (br.days || 0) + 1; br.last = { r, ing, wage, rent: def.rent, p };
    net += p; rev += r;
  }
  return { net, rev };
}
function franchiseDaily() {
  const n = S.franchise.count;
  if (!n) return 0;
  const bn = E.bonus();
  const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find(a => a.id === S.social.ad.id) : null;
  return Math.round(sum(Array.from({ length: n }), () => rand(FRANCHISE.revRange[0], FRANCHISE.revRange[1]) * FRANCHISE.royalty * (1 + bn.branch + (ad ? ad.branch : 0))));
}
function finishShift(early) {
  if (SH.fin) return;
  SH.fin = true;
  SH.on = false;
  const T = S.today;
  const ex = E.expireStock();
  T.rent = E.rentToday();
  T.util = E.utilityToday();
  const nightWorked = SH.staffT.svDem && SH.staffT.svDem.done > 0;
  T.wage = E.staffWagePerDay() - (S.staff.svDem && !nightWorked ? STAFF.find(s => s.id === 'svDem').wage : 0) + (S.staff.chuBa ? Math.round(T.rev * 0.01) : 0) + (S.staff.phaChe ? Math.round(Math.min(8, SH.over / 22 * 8) * 40000) : 0);
  S.kpi.payable = (S.kpi.payable || 0) + T.wage;
  const br = branchDaily();
  T.branch = Math.round(br.net);
  T.fran = franchiseDaily();
  let interest = 0;
  if (S.bank.balance > 0) { const rate = BANK.interest * (1 + (S.rating >= 4.5 ? BANK.starBonus : 0) + (S.bank.balance > 1e9 ? BANK.bigBonus : 0)); interest = Math.min(BANK.max - S.bank.balance, Math.round(S.bank.balance * rate)); S.bank.balance += interest; S.bank.shifts++; }
  T.interest = interest;
  T.payrollCash = S.kpi.shifts + 1 >= 7 ? Math.min(Math.max(0, S.money + T.branch + T.fran - T.rent - T.util), S.kpi.payable) : 0;
  S.kpi.payable -= T.payrollCash;
  S.money = Math.max(0, S.money - T.rent - T.util - T.payrollCash + T.branch + T.fran);
  T.profit = T.rev + T.tips - T.cogs - T.rent - T.util - T.wage - T.tax - (T.fine || 0) + T.branch + T.fran + T.interest;
  T.avgStars = T.stars.length ? sum(T.stars) / T.stars.length : 0;
  T.expired = ex.list; T.expiredCost = Math.round(ex.waste);
  T.cash = S.money;
  T.event = S.eventId; T.weather = S.weather;
  S.history.push({ day: S.day, rev: T.rev + T.tips, cogs: T.cogs, rent: T.rent, util: T.util, wage: T.wage, payrollCash: T.payrollCash, fine: T.fine || 0, tax: T.tax, branch: T.branch, fran: T.fran, interest, profit: T.profit, cups: T.cups, left: T.left, stars: T.avgStars, online: T.online, event: S.eventId });
  if (S.history.length > 400) S.history.shift();
  S.kpi.shifts++;
  for (const k of Object.keys(S.staff)) S.staff[k].shifts = (S.staff[k].shifts || 0) + 1;
  S.phase = 'end';
  S.last = { early };
  saveBackup();
  saveGame();
  markDirty('view', 'hud');
  emit('shift:end', T);
}

/** Sang ngày mới. */
export function nextDay() {
  S.previousUsed = { ...S.lastUsed };
  for (const lots of Object.values(S.stock)) for (const lot of lots) {
    if (!Number.isFinite(lot.receivedDay)) lot.receivedDay = S.day;
  }
  S.day++;
  E.ensureForecast();
  S.eventId = E.pickEvent();
  S.today = freshToday();
  S.lastUsed = {};
  S.social.videosToday = 0;
  S.social.videoBuff = 0; S.social.videoDay = S.day;
  const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find(a => a.id === S.social.ad.id) : null;
  if (ad) { for (let i = 0; i < ad.posts; i++) S.social.posts.unshift(genPost()); S.social.posts = S.social.posts.slice(0, 10); }
  S.pearl.playsDay = 0;
  S.crush.playedToday = false;
  // vườn
  const g = S.garden;
  for (const p of g.plots) if (p.seed) { if (g.watered) p.grown++; }
  g.watered = false;
  // thú cưng
  for (const pet of [S.pet, S.pet2].filter(Boolean)) {
    const decay = (k, v) => Math.max(0, (pet[k] ?? 80) - v);
    const d = (id, f) => (S.petDecor[id] ? f : 1);
    pet.hunger = decay('hunger', 25 * d('bat', 0.8));
    pet.joy = decay('joy', 15 * d('xit', 0.75));
    pet.clean = decay('clean', 12 * d('say', 0.75));
    pet.energy = decay('energy', 20 * d('sofa', 0.75));
  }
  // KPI chu kỳ 7 ca
  if (S.kpi.shifts >= 7) { S.kpi.shifts = 0; emit('kpi:cycle'); }
  S.phase = 'home';
  S.plan = {};
  Object.assign(SH, { on: false, fin: false });
  markDirty('view', 'hud', 'panel', 'cta');
  emit('day:next');
  saveGame();
}
export function resetShiftRuntime() { Object.assign(SH, { on: false, fin: false }); restoreShiftRuntime(); }

/** Sinh bài đăng MXH hằng ngày (gọi khi sang ngày mở app MXH). */
export function genPost() {
  const t = pick(FEED_POSTS), a = pick(FEED_AUTHORS);
  return { ...t, author: a, day: S.day, views: randInt(20, 180) + 'K', likes: randInt(2, 20) + 'K' };
}
void LOCATIONS; void DAY_EVENTS; void PETS; void PET_DECOR; void SEEDS; void SECRET_RECIPES; void on; void saveGame;
