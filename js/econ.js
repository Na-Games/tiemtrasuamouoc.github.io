/**
 * Kinh tế: kho theo lô + hạn dùng, giá & luật giá, tổng hợp bonus, mở khóa, nâng cấp, nhân sự.
 */
import {
  ITEMS, IDS, TEAS, FLAVORS, TOPS, SUPPLIES, FLAVOR_BOTTLE, LOCATIONS, SEASONS, SEASON_ORDER, DAYS_PER_SEASON, WEATHERS, DAY_EVENTS,
  EQUIP, CATEGORIES, ONLINE_GATE, catCost, STAFF, APPS, PETS, PET_CARE, PET_DECOR, ADS, SIZE_L_CAP, QUEUE_BASE, BASE_RENT, BASE_UTILITY, TAX, BANK, BRANCHES, FRANCHISE, LOCATION_COST, PLOTS, plotCost, NPC_FRIENDS, SECRET_RECIPES,
} from './config.js';
import { S, emit, markDirty, requestSave, clamp, rand, randInt, pick, wpick, sum } from './core.js';

/* ===== Mùa / thời tiết / sự kiện ===== */
export const seasonOf = (day) => SEASON_ORDER[Math.floor((day - 1) / DAYS_PER_SEASON) % 4];
export function rollWeatherFor(day) {
  const se = SEASONS[seasonOf(day)];
  const loc = LOCATIONS[S.location];
  const pool = loc?.pool || se.pool;
  const id = wpick(pool) || 'sunny';
  const [lo, hi] = se.temp;
  let t = randInt(lo, hi);
  if (id === 'hot') t = hi + randInt(0, 3);
  if (id === 'cold') t = lo - randInt(0, 3);
  if (id === 'rain') t -= 2;
  return { day, weather: id, temp: t };
}
export function ensureForecast() {
  S.forecast = (S.forecast || []).filter((f) => f.day >= S.day);
  for (let d = S.day; d <= S.day + 3; d++) if (!S.forecast.some((f) => f.day === d)) S.forecast.push(rollWeatherFor(d));
  S.forecast.sort((a, b) => a.day - b.day);
  S.weather = S.forecast[0].weather;
  S.temp = S.forecast[0].temp;
  S.season = seasonOf(S.day);
}
export function pickEvent() {
  const pool = DAY_EVENTS.map((e) => ({ e, w: e.id === 'normal' ? 3 : 1 }));
  let r = Math.random() * sum(pool, (p) => p.w);
  for (const p of pool) { r -= p.w; if (r <= 0) return p.e.id; }
  return 'normal';
}
export const eventOf = () => DAY_EVENTS.find((e) => e.id === S.eventId) || DAY_EVENTS[DAY_EVENTS.length - 1];
export const weatherOf = () => WEATHERS[S.weather] || WEATHERS.sunny;

/* ===== Trang bị & nhân sự: truy vấn ===== */
export function equipLevel(id) {
  const eq = EQUIP.find((e) => e.id === id);
  const v = S.equip[id];
  if (v === undefined) return eq && eq.tiers[0].c === 0 ? 1 : 0;
  return v;
}
export const hasStaff = (id) => !!S.staff[id];
export const staffCount = () => Object.keys(S.staff).length;
export const safePrice = () => hasStaff('quanLy');
export const taxActive = () => Date.now() < S.tax.until;
export const tabletsOwned = () => equipLevel('tablet');
export const appsOpen = () => Object.values(S.apps).filter(Boolean).length;
export const onlineEnabled = () => appsOpen() > 0 && S.rating >= ONLINE_GATE.rating && LOCATIONS[S.location].fx.online !== -1;
export const secretCount = () => Object.keys(S.collection.secrets).length;

export function petActive(p = S.pet) {
  if (!p) return false;
  return ['hunger','joy','clean','energy'].reduce((sum,k) => sum + (p[k] ?? 80), 0) / 4 >= 60;
}

/** Gộp toàn bộ hiệu ứng (cộng dồn) từ vùng, sự kiện, thời tiết, trang bị, nhân sự, pet, quảng cáo… */
export function bonus() {
  const b = {
    traffic: 0, tip: 0, patience: 0, bill: 0, online: 0, rent: 0, utility: 0, ingCost: 0, priceSens: 0, hardCust: 0,
    branch: 0, lateBill: 0, rainTraffic: 0, rainOnline: 0, coldTip: 0, billTeas: {}, errReduce: 0,
    queue: QUEUE_BASE, tables: 4, extraCust: 0, pour: 0, seal: 0, life: 0, topSave: 0, speedStaff: 0, theft: 0, lucky: 0,
    comboX2: 0, badRev: 0,
  };
  const add = (fx) => {
    if (!fx) return;
    for (const [k, v] of Object.entries(fx)) {
      if (k === 'billTeas') { for (const [t, x] of Object.entries(v)) b.billTeas[t] = (b.billTeas[t] || 0) + x; } else if (k in b && typeof v === 'number') b[k] += v;
    }
  };
  add(LOCATIONS[S.location]?.fx);
  const ev = eventOf();
  add({ traffic: ev.traffic || 0, tip: ev.tip || 0, patience: ev.patience || 0, bill: ev.bill || 0 });
  const w = weatherOf();
  b.traffic += w.traffic || 0;
  b.online += w.online || 0;
  if (S.weather === 'rain') { b.traffic += b.rainTraffic; b.online += b.rainOnline; }
  b.traffic += S.cat.tra * CATEGORIES.tra.per;
  b.patience += S.cat.huong * CATEGORIES.huong.per;
  b.badRev += S.cat.top * CATEGORIES.top.per;
  b.speedStaff += (S.cat.nv || 0) * CATEGORIES.nv.per;
  b.online += (S.cat.online || 0) * CATEGORIES.online.per;
  for (const eq of EQUIP) {
    const lv = equipLevel(eq.id);
    if (lv <= 0) continue;
    const v = eq.vals[Math.min(lv, eq.vals.length) - 1];
    if (eq.key === 'brand') { b.tip += v; b.traffic += lv >= 2 ? (lv === 2 ? 0.03 : 0.06) : 0; }
    else if (eq.key === 'queue') b.queue += v;
    else if (eq.key === 'tables') b.tables = 4 + v;
    else if (eq.key === 'extraCust') b.extraCust += v;
    else if (eq.key === 'tablets') { /* đếm riêng */ }
    else if (eq.key in b) b[eq.key] += v;
    if (eq.util) b.utility += eq.util[Math.min(lv, eq.util.length) - 1];
  }
  for (const st of STAFF) {
    if (!S.staff[st.id]) continue;
    if (st.kind === 'marketing') b.traffic += st.fxTraffic;
    if (st.kind === 'guard') { b.errReduce += st.fxErr; b.theft = 1; }
  }
  if (taxActive()) { b.traffic += TAX.traffic; b.speedStaff += TAX.speed; b.theft += TAX.theft; b.lucky += TAX.lucky; }
  if (S.social.ad && S.day <= S.social.ad.endsDay) b.traffic += ADS.find((a) => a.id === S.social.ad.id)?.traffic || 0;
  if (S.social.videoDay === S.day) b.traffic += S.social.videoBuff || 0;
  if (petActive()) {
    const fx = PETS[S.pet.kind]?.fx || {};
    b.bill += fx.bill || 0; b.tip += fx.tip || 0; b.patience += fx.patience || 0; b.branch += fx.branch || 0;
    if (S.petDecor.bien) b.tip += 0.1;
    if (S.petDecor.khan) { b.bill += 0.08; b.branch += 0.08; }
  }
  b.bill += S.crush.perm;
  b.bill += Math.min(0.2, Object.keys(S.collection.owned).length * 0.003);
  if (S.pet2 && petActive(S.pet2) && S.pet?.kind !== 'capybara') add(PETS.capybara.fx);
  if (S.branches.truong) b.traffic += 0.15;
  if (S.branches.cnc) b.online += 0.1;
  const active = staffCount();
  b.traffic += Math.min(0.08, active * 0.01);
  return b;
}

/* ===== Giá ===== */
export function priceOf(id) { return S.prices[id] ?? ITEMS[id]?.price ?? 0; }
export function setPrice(id, v) {
  if ((id !== 'sizeL' && !ITEMS[id]) || !Number.isFinite(v)) return 'Giá không hợp lệ';
  v = Math.round(v);
  if (id === 'sizeL') v = clamp(v, 0, SIZE_L_CAP);
  else v = clamp(v, 0, 200000);
  S.prices[id] = v;
  requestSave();
}
export function priceLimit(id) {
  const k = id === 'sizeL' ? 'size' : ITEMS[id].kind;
  const m = safePrice() ? 1.5 : 1;
  if (k === 'tea') return { warn: 50000 * m, hard: 120000 };
  if (k === 'size') return { warn: 20000 * m, hard: SIZE_L_CAP };
  return { warn: 20000 * m, hard: 30000 * m };
}
/** Hệ số khách vì giá bán (luật giá: trên ngưỡng → vắng khách). */
export function priceFactor() {
  if (safePrice()) return 1;
  let f = 1;
  if (priceOf('sizeL') >= SIZE_L_CAP || [...TEAS, ...FLAVORS, ...TOPS].some(id => S.onMenu[id] && priceOf(id) > 50000)) f = 0.2;
  const teas = TEAS.filter((t) => S.onMenu[t]);
  for (const t of teas) if (priceOf(t) > priceLimit(t).warn) f = Math.min(f, 0.2);
  const m = safePrice() ? 1.5 : 1;
  const maxTea = teas.length ? Math.max(...teas.map(priceOf)) : 0;
  if (maxTea > 120000 * m) f = Math.min(f, 0.4);
  const sens = bonus().priceSens;
  if (sens > 0) {
    const over = teas.length ? sum(teas, (t) => Math.max(0, priceOf(t) / ITEMS[t].price - 1)) / teas.length : 0;
    f *= 1 - clamp(over * sens * 4, 0, sens * 3);
  }
  return f;
}
/** Trọng số chọn món theo giá (hương/topping đắt thì ít ai gọi). */
export function priceWeight(id) {
  if (safePrice()) return 1;
  const k = ITEMS[id].kind;
  if (k === 'tea') return priceOf(id) > priceLimit(id).warn ? 0.2 : 1;
  const lim = priceLimit(id);
  const p = priceOf(id);
  if (p > lim.hard) return 0;
  if (p > lim.warn) return 0.2;
  return 1;
}
export function sizeLWeight() {
  const p = priceOf('sizeL');
  const lim = priceLimit('sizeL');
  if (p >= lim.hard) return 0;
  if (safePrice()) return 1;
  return p > lim.warn ? 0.1 : 1;
}

/* ===== Kho ===== */
export const lifeBonus = () => bonus().life;
export const stockQty = (id) => sum(S.stock[id] || [], (l) => l.q);
export function costOf(id) {
  const b = bonus();
  const it = ITEMS[id];
  let c = it.cost * (1 + b.ingCost);
  if (it.kind === 'top') c *= 1 - b.topSave;
  return c;
}
/** Thêm hàng vào kho (tạo lô có hạn dùng). */
export function addStock(id, q) {
  const it = ITEMS[id];
  if (!it || q <= 0) return;
  const exp = it.life ? S.day + it.life - 1 + lifeBonus() : -1;
  let lot = S.stock[id].find((l) => l.exp === exp && l.receivedDay === S.day);
  if (lot) lot.q += q;
  else S.stock[id].push({ q, exp, receivedDay: S.day });
  S.stock[id].sort((a, b) => (a.exp === -1 ? 1e9 : a.exp) - (b.exp === -1 ? 1e9 : b.exp));
}
/** Lấy hàng (lô sắp hết hạn trước). */
export function take(id, n = 1) {
  if (stockQty(id) < n) return false;
  let left = n;
  for (const l of S.stock[id]) {
    const t = Math.min(l.q, left);
    l.q -= t; left -= t;
    if (left <= 0) break;
  }
  S.stock[id] = S.stock[id].filter((l) => l.q > 0);
  S.today.cogs += costOf(id) * n;
  S.lastUsed[id] = (S.lastUsed[id] || 0) + n;
  return true;
}
/** Xóa hàng hết hạn cuối ngày; trả về tổng giá trị đổ bỏ. */
export function expireStock() {
  let waste = 0; const list = [];
  for (const id of IDS) {
    const bad = S.stock[id].filter((l) => l.exp !== -1 && l.exp <= S.day);
    const q = sum(bad, (l) => l.q);
    if (q > 0) { waste += q * costOf(id); list.push({ id, q }); }
    S.stock[id] = S.stock[id].filter((l) => !(l.exp !== -1 && l.exp <= S.day));
  }
  S.today.waste += waste;
  S.today.cogs += waste;
  return { waste, list };
}
/** Số lượng sắp hết hạn trong hôm nay. */
export function expiringToday(id) {
  return sum((S.stock[id] || []).filter((l) => l.exp !== -1 && l.exp <= S.day), (l) => l.q);
}
export function nearestExpiry(id) {
  const lots = (S.stock[id] || []).filter((l) => l.exp !== -1);
  if (!lots.length) return null;
  return Math.min(...lots.map((l) => l.exp)) - S.day + 1;
}
export const lifeDays = (id) => (ITEMS[id].life ? ITEMS[id].life + lifeBonus() : 0);
/** Existing saves keep their real expiry; missing receipt dates are shown as unknown. */
export function stockBreakdown(id) {
  const lots = (S.stock[id] || []).filter(l => l.q > 0);
  return {
    old: sum(lots.filter(l => Number.isFinite(l.receivedDay) && l.receivedDay < S.day), l => l.q),
    fresh: sum(lots.filter(l => l.receivedDay === S.day), l => l.q),
    unknown: sum(lots.filter(l => !Number.isFinite(l.receivedDay)), l => l.q),
    lots: lots.map(l => ({ q: l.q, days: l.exp === -1 ? null : l.exp - S.day + 1 })),
  };
}

/* ===== Mở khóa & nhập hàng ===== */
export function unlockItem(id) {
  const it = ITEMS[id];
  if (!it || S.unlocked[id]) return 'Đã mở khóa';
  if (S.money < it.unlock) return 'Không đủ tiền';
  S.money -= it.unlock;
  S.unlocked[id] = true;
  S.onMenu[id] = true;
  if (it.kind === 'flavor') { addStock(id, FLAVOR_BOTTLE); S.today.purchase += it.unlock; }
  markDirty('hud', 'panel', 'board');
  emit('unlock', id);
  requestSave();
  return null;
}
export function toggleMenu(id) {
  if (!S.unlocked[id]) return 'Chưa mở khóa';
  S.onMenu[id] = !S.onMenu[id];
  markDirty('panel', 'board');
  requestSave();
  return null;
}
/** Số "đơn vị mua" theo loại: flavor mua theo chai (45 ly). */
export const unitSize = (id) => (ITEMS[id].kind === 'flavor' ? FLAVOR_BOTTLE : 1);
export const unitCost = (id) => costOf(id) * unitSize(id);
export function planTotal() {
  return Math.round(sum(Object.entries(S.plan), ([id, n]) => unitCost(id) * n));
}
export function setPlan(id, n) {
  if (!ITEMS[id] || !S.unlocked[id] || !Number.isFinite(n)) return 'Nguyên liệu hoặc số lượng không hợp lệ';
  n = clamp(Math.round(n), 0, 999);
  if (n <= 0) delete S.plan[id]; else S.plan[id] = n;
  markDirty('panel', 'cta');
}
/** Nấu & nhập: chi tiền, thêm lô hàng. */
export function commitPlan() {
  if (Object.entries(S.plan).some(([id, n]) => !ITEMS[id] || !S.unlocked[id] || !Number.isInteger(n) || n < 0 || n > 999)) return 'Kế hoạch nhập hàng không hợp lệ';
  const total = planTotal();
  if (total <= 0) return 'Chưa chọn gì để nhập';
  if (S.money < total) return 'Không đủ tiền nhập hàng';
  S.money -= total;
  S.today.purchase += total;
  for (const [id, n] of Object.entries(S.plan)) addStock(id, n * unitSize(id));
  S.plan = {};
  markDirty('hud', 'panel', 'cta');
  emit('purchase', total);
  requestSave();
  return null;
}
/** Kiểm tra điều kiện mở cửa; trả về danh sách thiếu. */
export function openMissing() {
  const miss = [];
  const teaOk = TEAS.some((t) => S.onMenu[t] && stockQty(t) > 0);
  const topOk = TOPS.some((t) => S.onMenu[t] && stockQty(t) > 0);
  const supOk = (stockQty('lyM') > 0 || stockQty('lyL') > 0) && stockQty('da') > 0 && stockQty('duong') > 0;
  if (!teaOk) miss.push('Trà');
  if (!topOk) miss.push('Topping');
  if (!supOk) miss.push('Dụng cụ');
  return { miss, canOpen: teaOk && supOk };
}

/* ===== Nâng cấp ===== */
export function buyCategory(key) {
  if (!CATEGORIES[key]) return 'Hạng mục không hợp lệ';
  const lvl = S.cat[key];
  const cost = catCost(lvl);
  if (!Number.isFinite(cost)) return 'Đã đạt giới hạn cấp độ';
  if (S.money < cost) return 'Không đủ tiền';
  S.money -= cost;
  S.cat[key]++;
  markDirty('hud', 'panel');
  requestSave();
  return null;
}
export function equipNext(id) {
  const eq = EQUIP.find((e) => e.id === id);
  if (!eq) return null;
  const lv = equipLevel(id);
  if (lv >= eq.tiers.length) return null;
  return eq.tiers[lv];
}
export function buyEquip(id) {
  const eq = EQUIP.find((e) => e.id === id);
  const next = equipNext(id);
  if (!next) return 'Đã tối đa';
  if (S.money < next.c) return 'Không đủ tiền';
  S.money -= next.c;
  S.equip[id] = equipLevel(id) + 1;
  markDirty('hud', 'panel');
  emit('equip', eq);
  requestSave();
  return null;
}
export function buyDecor(id) {
  const d = PET_DECOR.find((x) => x.id === id);
  if (!d || S.petDecor[id]) return 'Đã sở hữu';
  if (!S.pet) return 'Cần nhận nuôi thú cưng trước';
  if (S.money < d.cost) return 'Không đủ tiền';
  S.money -= d.cost;
  S.petDecor[id] = 1;
  markDirty('hud', 'panel');
  requestSave();
  return null;
}
export function toggleApp(id) {
  const app = APPS.find((a) => a.id === id);
  if (!app) return 'Không có app';
  if (S.apps[id]) { S.apps[id] = false; markDirty('panel'); requestSave(); return null; }
  const pr = onlineProgress();
  if (pr.profit < ONLINE_GATE.profit || pr.orders < ONLINE_GATE.orders) return 'Chưa đạt điều kiện mở bán online (lợi nhuận & số đơn)';
  if (S.rating < 4.0) return 'Cần đánh giá từ 4,0★ trở lên';
  if (appsOpen() >= tabletsOwned()) return 'Cần mua thêm tablet (mỗi tablet chạy 1 app)';
  S.apps[id] = true;
  markDirty('panel');
  requestSave();
  return null;
}

/* ===== Nhân sự ===== */
export function hireBlock(id) {
  const st = STAFF.find((s) => s.id === id);
  if (!st) return 'Nhân viên không hợp lệ';
  if (S.staff[id]) return 'Đã thuê';
  for (const ex of st.excl || []) if (S.staff[ex]) return `Không thể thuê cùng ${STAFF.find((s) => s.id === ex).role}`;
  for (const o of STAFF) if ((o.excl || []).includes(id) && S.staff[o.id]) return `Không thể thuê cùng ${o.role}`;
  const n = st.need;
  if (n?.day && S.day < n.day) return `Mở ở ngày ${n.day}`;
  if (n?.online && !onlineEnabled()) return 'Cần mở đơn online';
  if (n?.full && Object.keys(S.staff).length < 2) return 'Cần có ≥ 2 nhân viên';
  if (n?.secret && secretCount() < n.secret) return `Cần mở khoá ${n.secret} công thức độc bản ở mục sưu tầm`;
  return null;
}
export function hire(id) {
  const st = STAFF.find((s) => s.id === id);
  const why = hireBlock(id);
  if (why) return why;
  if (S.money < st.hire) return 'Không đủ tiền';
  S.money -= st.hire;
  S.staff[id] = { since: S.day, shifts: 0 };
  markDirty('hud', 'panel');
  emit('hire', st);
  requestSave();
  return null;
}
export function fire(id) {
  delete S.staff[id];
  emit('fire', id);
  markDirty('panel');
  requestSave();
}
export const staffWagePerDay = () => sum(STAFF.filter((s) => S.staff[s.id]), (s) => s.wage);

/* ===== Chi phí cố định ===== */
export function rentToday() { return Math.round(BASE_RENT * (1 + bonus().rent)); }
export function utilityToday() { return Math.round(BASE_UTILITY * (1 + bonus().utility)); }

/* ===== Khách dự kiến ===== */
export function expectedCustomers() {
  const b = bonus();
  const rating = 0.8 + clamp(S.rating, 1, 5) * 0.05;
  // Khởi đầu ít khách; tăng dần theo ngày, tiền tích lũy và số nhân viên thuê.
  const base = 14 + 0.8 * Math.min(S.day, 60);
  const wealth = 1 + clamp(Math.log10(Math.max(S.money, 1000) / 1000) * 0.12, 0, 0.6);
  const staffBoost = 1 + Math.min(0.9, staffCount() * 0.15);
  return Math.max(4, Math.round(base * (1 + b.traffic) * priceFactor() * rating * wealth * staffBoost) + b.extraCust);
}

/** Tiến độ mở khóa bán online: lợi nhuận tích lũy, tổng đơn, đánh giá. */
export function onlineProgress() {
  const recorded = S.history.some(x => x.day === S.day);
  return { profit: sum(S.history, (x) => x.profit) + (recorded ? 0 : S.today.profit || 0), orders: sum(S.history, (x) => x.cups) + (recorded ? 0 : S.today.cups), rating: S.rating };
}
export const MAX_SECRET = SECRET_RECIPES.length;

// Transactions validate current state at execution, including confirmation callbacks.
function commitMenuChange() { markDirty('hud', 'panel', 'board', 'cta', 'tiles'); requestSave(); }
export function openBranch(id) {
  const b = BRANCHES.find(x => x.id === id);
  if (!b) return 'Chi nhánh không hợp lệ';
  if (S.branches[id]) return 'Chi nhánh đã mở';
  if (S.money < b.cost) return 'Không đủ tiền';
  S.money -= b.cost; S.branches[id] = {staff: 0, rev: 0, days: 0}; commitMenuChange(); return null;
}
export function setBranchStaff(id, n) {
  if (!S.branches[id] || !Number.isFinite(n)) return 'Chi nhánh hoặc số lượng không hợp lệ';
  S.branches[id].staff = clamp(Math.round(n), 0, 3); commitMenuChange(); return null;
}
export function sellFranchise() {
  if (S.franchise.count >= FRANCHISE.max) return 'Đã đạt số điểm nhượng quyền tối đa';
  if (S.rating < FRANCHISE.needRating || S.followers < FRANCHISE.needFollowers) return 'Chưa đủ uy tín hoặc người theo dõi';
  S.money += FRANCHISE.fee; S.franchise.count++; commitMenuChange(); return null;
}
export function moveShop(id) {
  if (!LOCATIONS[id]) return 'Địa điểm không hợp lệ';
  if (S.phase === 'sell') return 'Hãy kết thúc ca trước khi chuyển quán';
  if (S.location === id) return 'Quán đang ở địa điểm này';
  if (S.money < LOCATION_COST) return 'Không đủ tiền khởi nghiệp';
  S.money -= LOCATION_COST; S.location = id; S.forecast = []; ensureForecast();
  commitMenuChange(); markDirty('view'); return null;
}
export function startAd(id) {
  const ad = ADS.find(x => x.id === id);
  if (!ad) return 'Chiến dịch không hợp lệ';
  if (S.social.ad && S.day <= S.social.ad.endsDay) return 'Đang có một chiến dịch hoạt động';
  if (S.money < ad.cost) return 'Không đủ tiền chạy quảng cáo';
  S.money -= ad.cost; S.social.ad = {id, endsDay: S.day + ad.days - 1}; S.followers += ad.followers;
  commitMenuChange(); return null;
}
export function recordVideo() {
  const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find(x => x.id === S.social.ad.id) : null;
  if (S.social.videosToday >= (ad ? ad.videos : 1)) return 'Đã hết lượt quay video hôm nay';
  S.social.videosToday++; S.social.videoDay = S.day;
  S.social.videoBuff = Math.max(S.social.videoBuff || 0, rand(0.02, 0.15)); commitMenuChange(); return null;
}
export function visitFriend(id) {
  if (![...NPC_FRIENDS, ...S.friends.list].some(x => x.id === id)) return 'Bạn bè không hợp lệ';
  if (S.friends.gifted[id] === S.day) return 'Đã thăm bạn này hôm nay';
  const gift = randInt(5, 20) * 1000;
  S.friends.gifted[id] = S.day; S.money += gift; S.followers += randInt(10, 80); commitMenuChange(); return gift;
}
export function unlockPlot() {
  const g = S.garden;
  if (g.unlocked >= PLOTS) return 'Đã mở toàn bộ mảnh đất';
  const cost = plotCost(g.unlocked + 1);
  if (S.money < cost) return 'Không đủ tiền';
  S.money -= cost; g.unlocked++; commitMenuChange(); return null;
}
export function adoptPet(kind) {
  const p = PETS[kind];
  if (!p) return 'Thú cưng không hợp lệ';
  if (kind === 'capybara' && secretCount() < p.secret) return 'Chưa đủ công thức độc bản';
  if ((kind === 'capybara' && (S.pet2 || (S.pet && S.pet.kind === kind))) || (S.pet && S.pet.kind === kind)) return 'Đã nhận nuôi bé này';
  if (S.money < p.adopt) return 'Không đủ tiền nhận nuôi';
  S.money -= p.adopt;
  if (kind === 'capybara' && S.pet) S.pet2 = {kind, hunger: 80, joy: 80, clean: 80, energy: 80};
  else { if (S.pet && S.pet.kind === 'capybara') S.pet2 = S.pet; S.pet = {kind, hunger: 80, joy: 80, clean: 80, energy: 80}; }
  commitMenuChange(); return null;
}
export function carePet(id, kind = S.pet?.kind) {
  const c = PET_CARE.find(x => x.id === id), p = [S.pet,S.pet2].find(p => p?.kind === kind);
  if (!p || !c) return 'Chưa có thú cưng hoặc thao tác không hợp lệ';
  if (S.money < c.cost) return 'Không đủ tiền';
  for (const key of ['hunger','joy','clean','energy']) p[key] = p[key] ?? 80;
  S.money -= c.cost; p[c.stat] = clamp(p[c.stat] + c.gain * (S.petDecor.app ? 1.3 : 1), 0, 100);
  if (id === 'feed' && S.petDecor.bat) { p.hunger = clamp(p.hunger + 20, 0, 100); p.joy = clamp(p.joy + 10, 0, 100); }
  if (id === 'bath' && S.petDecor.voi) { p.clean = clamp(p.clean + 30, 0, 100); p.joy = clamp(p.joy + 10, 0, 100); }
  if (id === 'play' && S.petDecor.kim) p.exp = (p.exp || 0) + 10;
  commitMenuChange(); return null;
}
export function payTax() {
  if (taxActive()) return 'Thuế vẫn còn hiệu lực';
  S.tax.rate = clamp(Number(S.tax.rate) || TAX.minRate, TAX.minRate, TAX.maxRate);
  const amount = Math.round(S.money * S.tax.rate);
  if (amount <= 0) return 'Két trống, chưa có gì để nộp thuế';
  S.money -= amount; S.tax.paid += amount; S.today.tax += amount;
  S.tax.last = Date.now(); S.tax.until = S.tax.last + TAX.hours * 3600000;
  commitMenuChange(); return amount;
}
export function depositBank(fraction) {
  if (![0.1, 0.5, 1].includes(fraction)) return 'Mức gửi không hợp lệ';
  const amount = Math.min(Math.floor(S.money * fraction), Math.max(0, BANK.max - S.bank.balance));
  if (amount <= 0) return 'Không còn hạn mức hoặc tiền để gửi';
  S.money -= amount; S.bank.balance += amount; S.bank.principal = (S.bank.principal || 0) + amount;
  // New money cannot inherit the maturity of a previous deposit.
  S.bank.shifts = 0; commitMenuChange(); return amount;
}
export function withdrawBank() {
  const b = S.bank;
  if (b.balance <= 0) return 'Không có tiền gửi';
  const amount = b.shifts < BANK.lockShifts ? b.principal || 0 : b.balance;
  S.money += amount; b.balance = 0; b.principal = 0; b.shifts = 0; commitMenuChange(); return amount;
}
