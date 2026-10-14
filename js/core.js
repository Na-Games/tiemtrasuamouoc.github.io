/**
 * Hạ tầng: event bus, tiện ích, GameState, lưu/khôi phục, game loop, âm thanh tổng hợp.
 */
import { SAVE_KEY, SAVE_VERSION, IDS, ITEMS, START_MONEY, PLOTS, PLOTS_START, SHIFT_START_H } from './config.js';

/* ===== Event bus ===== */
const listeners = new Map();
export function on(ev, cb) {
  if (!listeners.has(ev)) listeners.set(ev, new Set());
  listeners.get(ev).add(cb);
  return () => listeners.get(ev)?.delete(cb);
}
export function emit(ev, data) {
  for (const cb of [...(listeners.get(ev) || [])]) {
    try { cb(data); } catch (e) { console.error(`[bus] ${ev}`, e); }
  }
}

/* ===== Tiện ích ===== */
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const rand = (a, b) => Math.random() * (b - a) + a;
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const chance = (p) => Math.random() < p;
export const sum = (arr, f = (x) => x) => arr.reduce((s, x) => s + f(x), 0);
export function wpick(weights) {
  const es = Object.entries(weights).filter(([, w]) => w > 0);
  let r = Math.random() * es.reduce((s, [, w]) => s + w, 0);
  for (const [k, w] of es) { r -= w; if (r <= 0) return k; }
  return es.length ? es[es.length - 1][0] : undefined;
}
const trimNum = (n, d) => String(Number(n.toFixed(d))).replace('.', ',');
/** Định dạng tiền ngắn: 4,5k · 1,5tr · 2,3 tỷ. */
export function fmtK(n) {
  const v = Number(n) || 0, a = Math.abs(v);
  if (a >= 1e9) return trimNum(v / 1e9, 2) + ' tỷ';
  if (a >= 1e6) return trimNum(v / 1e6, 2) + 'tr';
  if (a >= 1e3) return trimNum(v / 1e3, 1) + 'k';
  return Math.round(v) + 'đ';
}
export const fmt = (n) => {
  const v = Math.round(Number(n) || 0);
  return (v < 0 ? '-' : '') + Math.abs(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
};
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
export const wait = (ms) => new Promise((r) => setTimeout(r, ms));
export const pad2 = (n) => String(n).padStart(2, '0');
export const fmtClock = (hh) => `${pad2(Math.floor(hh))}:${pad2(Math.floor((hh % 1) * 60 / 10) * 10)}`;

/* ===== GameState ===== */
export function newState() {
  const stock = {}, unlocked = {}, onMenu = {}, prices = {};
  for (const id of IDS) {
    stock[id] = [];
    unlocked[id] = ITEMS[id].unlock === 0;
    onMenu[id] = ITEMS[id].unlock === 0 && ITEMS[id].kind !== 'supply';
    if (ITEMS[id].price) prices[id] = ITEMS[id].price;
  }
  prices.sizeL = 7000;
  const plots = [];
  for (let i = 0; i < PLOTS; i++) plots.push({ seed: null, water: 0, grown: 0 });
  return {
    v: SAVE_VERSION,
    shopName: 'Tiệm Trà Mơ Ước',
    logo: { emoji: '🧋', img: null },
    stamp: { frame: 'round', textStyle: 'straight', bg: '#ffffff', slogan: 'Trà sữa mỗi ngày', icon: '🧋', img: null },
    day: 1, money: START_MONEY, phase: 'home', tab: 'kho', subtab: {},
    location: 'goc', season: 'spring', weather: 'sunny', temp: 25, eventId: 'trend', forecast: [],
    rating: 4.0, reviews: [], ratingCount: 0, followers: 144,
    stock, unlocked, onMenu, prices, plan: {}, lastUsed: {}, previousUsed: {},
    cat: { tra: 0, huong: 0, top: 0, nv: 0, online: 0 }, equip: {}, apps: {},
    staff: {}, kpi: { shifts: 0 }, ev: { lic: 0, food: 0, blk: 0 },
    pet: null, petDecor: {},
    garden: { plots, unlocked: PLOTS_START, seeds: {}, watered: false },
    branches: {}, franchise: { count: 0 },
    social: { ad: null, videosToday: 0, posts: [], viral: 0 },
    tax: { until: 0, last: 0, paid: 0, rate: 0.1 },
    bank: { balance: 0, principal: 0, since: 0, shifts: 0 },
    today: freshToday(),
    history: [],
    collection: { owned: {}, secrets: {}, packs: 1 },
    friends: { code: 'TTN-' + Math.random().toString(36).slice(2, 7).toUpperCase(), list: [], gifted: {} },
    crush: { level: 1, best: 0, perm: 0, gifts: 0 },
    pearl: { best: 0, playsDay: 0 },
    settings: { music: 0.7, sfx: 0.8, style: 'lofi', haptic: 2, hints: true, shiftMin: 4, shiftMinNext: 4, theme: 'cream', tutorialDone: false },
    firstRun: true, started: false,
    savedAt: Date.now(),
  };
}
export function freshToday() {
  return { rev: 0, tips: 0, online: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, purchase: 0, cups: 0, left: 0, stars: [], waste: 0, branch: 0, fran: 0, interest: 0 };
}
export const S = newState();
let restoreHook = null;
export const registerRestoreHook = (fn) => { restoreHook = fn; };
export function replaceState(next) {
  for (const k of Object.keys(S)) delete S[k];
  Object.assign(S, next);
  if (restoreHook) restoreHook();
}

/* ===== Dirty flags ===== */
const dirty = new Set();
export const markDirty = (...k) => k.forEach((x) => dirty.add(x));
export const consumeDirty = () => { const o = [...dirty]; dirty.clear(); return o; };

/* ===== Save / Load ===== */
let saveHook = null;
export const registerSaveHook = (fn) => { saveHook = fn; };
let storageWarned = false;
function store() {
  try { const s = window.localStorage; s.getItem(SAVE_KEY); return s; } catch (e) { return null; }
}
function saveFailed() {
  if (!storageWarned) { storageWarned = true; emit('save:error'); }
  return false;
}
const BK = SAVE_KEY + '_bk';
export function saveGame() {
  if (saveHook) saveHook();
  const st = store();
  if (!st) return saveFailed();
  const previous = S.savedAt;
  S.savedAt = Date.now();
  try { st.setItem(SAVE_KEY, JSON.stringify({ v: SAVE_VERSION, t: Date.now(), s: S })); storageWarned = false; return true; }
  catch (e) { S.savedAt = previous; return saveFailed(); }
}
let pend = null;
export function requestSave() {
  if (pend) return;
  pend = setTimeout(() => { pend = null; saveGame(); }, 700);
}
/** Lưu bản tự lưu cuối ngày (giữ 3 bản gần nhất). */
export function saveBackup() {
  if (saveHook) saveHook();
  const st = store();
  if (!st) return;
  try {
    const list = JSON.parse(st.getItem(BK) || '[]');
    list.unshift({ t: Date.now(), day: S.day, money: S.money, s: JSON.stringify(S) });
    st.setItem(BK, JSON.stringify(list.slice(0, 3)));
  } catch (e) { /* bỏ qua */ }
}
export function listBackups() {
  try { return JSON.parse(store()?.getItem(BK) || '[]').map((b, i) => ({ i, t: b.t, day: b.day, money: b.money })); } catch (e) { return []; }
}
function normalize(raw) {
  const d = newState();
  const s = { ...d, ...raw };
  for (const k of ['logo', 'stamp', 'cat', 'garden', 'social', 'tax', 'bank', 'collection', 'friends', 'crush', 'pearl', 'settings', 'kpi', 'forecast', 'ev']) {
    if (d[k] && typeof d[k] === 'object' && !Array.isArray(d[k])) s[k] = { ...d[k], ...(raw[k] || {}) };
  }
  for (const k of ['stock', 'unlocked', 'onMenu', 'prices']) s[k] = { ...d[k], ...(raw[k] || {}) };
  // bản cũ dùng chung một kho "ly": chia đôi cho size M và L
  if (raw.stock && Array.isArray(raw.stock.ly) && !raw.stock.lyM && !raw.stock.lyL) {
    const lots = raw.stock.ly.filter((l) => l && l.q > 0);
    s.stock.lyM = lots.map((l) => ({ ...l, q: Math.ceil(l.q / 2) }));
    s.stock.lyL = lots.map((l) => ({ ...l, q: Math.floor(l.q / 2) })).filter((l) => l.q > 0);
  }
  for (const id of IDS) if (!Array.isArray(s.stock[id])) s.stock[id] = [];
  s.stock = Object.fromEntries(IDS.map((id) => [id, s.stock[id].filter((l) => l && l.q > 0)]));
  if (!Array.isArray(s.garden.plots) || s.garden.plots.length < PLOTS) s.garden.plots = d.garden.plots;
  s.money = Math.max(0, Number(s.money) || 0);
  s.rating = clamp(Number(s.rating) || 4, 1, 5);
  if (s.phase === 'sell' && !s.shiftRuntime) s.phase = 'home';
  s.today = { ...freshToday(), ...(raw.today || {}) };
  return s;
}
export function loadGame() {
  const st = store();
  if (!st) return false;
  try {
    const raw = st.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    replaceState(normalize(data.s));
    return true;
  } catch (e) { console.warn('[save] hỏng', e); return false; }
}
export function restoreBackup(i) {
  try {
    const b = JSON.parse(store().getItem(BK) || '[]')[i];
    if (!b) return false;
    replaceState(normalize(JSON.parse(b.s)));
    saveGame();
    return true;
  } catch (e) { return false; }
}
export function exportCode() {
  if (saveHook) saveHook();
  const json = JSON.stringify({ v: SAVE_VERSION, s: S });
  return 'TTM3.' + btoa(unescape(encodeURIComponent(json)));
}
export function importCode(code) {
  try {
    const c = String(code).trim();
    if (!c.startsWith('TTM3.')) return false;
    const data = JSON.parse(decodeURIComponent(escape(atob(c.slice(5)))));
    replaceState(normalize(data.s));
    saveGame();
    return true;
  } catch (e) { return false; }
}
export function wipeSave() {
  try { store()?.removeItem(SAVE_KEY); store()?.removeItem(BK); } catch (e) { /* bỏ qua */ }
  replaceState(newState());
}

/* ===== Game loop ===== */
const updaters = [], renderers = new Map(), frames = [];
let last = 0, running = false, paused = false, speed = 1;
export const registerUpdate = (f) => updaters.push(f);
export const registerRenderer = (k, f) => renderers.set(k, f);
export const registerFrame = (f) => frames.push(f);
function loop(ts) {
  if (!running) return;
  const dt = Math.min((ts - last) / 1000, 0.25);
  last = ts;
  if (!paused) for (const f of updaters) { try { f(dt * speed); } catch (e) { console.error('[loop] update', e); } }
  for (const k of consumeDirty()) { try { renderers.get(k)?.(); } catch (e) { console.error('[loop] render ' + k, e); } }
  for (const f of frames) { try { f(dt); } catch (e) { console.error('[loop] frame', e); } }
  requestAnimationFrame(loop);
}
export function startLoop() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(loop); }
export const setPaused = (v) => { paused = !!v; };
export const isPaused = () => paused;
export const setSpeed = (v) => { speed = v; };
export function flushRender() { for (const k of consumeDirty()) { try { renderers.get(k)?.(); } catch (e) { console.error(e); } } }

/* ===== Âm thanh (Web Audio, không cần file) ===== */
let actx = null, master = null, mgain = null, musicTimer = null, mstep = 0, unlocked = false;
let sfxBus = null, pendingClick = null, sfxActiveUntil = 0, sfxPriority = -1;
const sfxLastPlayed = Object.create(null);
function ctx() {
  if (actx) return actx;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    actx = new AC();
    master = actx.createGain(); master.connect(actx.destination);
    mgain = actx.createGain(); mgain.connect(actx.destination);
    applyVolumes();
  } catch (e) { actx = null; }
  return actx;
}
export function applyVolumes() {
  if (!master) return;
  master.gain.value = 0.45 * S.settings.sfx;
  mgain.gain.value = 0.16 * S.settings.music;
}
function tone(f, d, type = 'sine', vol = 1, when = 0, dest = null) {
  if (!actx) return;
  try {
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + when;
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(dest || sfxBus || master);
    o.start(t); o.stop(t + d + 0.05);
  } catch (e) { /* bỏ qua */ }
}
function glide(f0, f1, d, type = 'sine', vol = 0.2, when = 0) {
  if (!actx) return;
  try {
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + when;
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(25, f1), t + d);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(sfxBus || master); o.start(t); o.stop(t + d + 0.04);
  } catch (e) { /* bỏ qua */ }
}
const SFX = {
  click: () => { tone(520, 0.035, 'sine', 0.16); tone(780, 0.045, 'sine', 0.07, 0.015); },
  pop: () => glide(520, 300, 0.075, 'triangle', 0.2),
  cup: () => { tone(390, 0.07, 'sine', 0.24); tone(520, 0.08, 'triangle', 0.12, 0.055); },
  pour: () => { glide(720, 520, 0.14, 'sine', 0.07); tone(340, 0.12, 'sine', 0.035); },
  drop: () => { glide(760, 420, 0.085, 'sine', 0.2); tone(620, 0.08, 'triangle', 0.12, 0.035); },
  seal: () => { glide(220, 110, 0.16, 'triangle', 0.24); tone(620, 0.08, 'sine', 0.08, 0.17); },
  ding: () => { tone(1318, 0.2, 'sine', 0.2); tone(1760, 0.26, 'sine', 0.12, 0.045); },
  coin: () => { tone(880, 0.065, 'sine', 0.14); tone(1175, 0.09, 'sine', 0.12, 0.06); },
  reward: () => { tone(659, 0.13, 'sine', 0.16); tone(784, 0.16, 'sine', 0.16, 0.09); tone(988, 0.22, 'sine', 0.12, 0.19); tone(1318, 0.27, 'sine', 0.08, 0.29); },
  success: () => { tone(523, 0.12, 'triangle', 0.22); tone(659, 0.14, 'triangle', 0.19, 0.1); tone(784, 0.2, 'sine', 0.17, 0.2); },
  error: () => { glide(330, 240, 0.11, 'triangle', 0.19); tone(196, 0.14, 'sine', 0.13, 0.1); },
  sad: () => { tone(392, 0.16, 'sine', 0.15); glide(330, 262, 0.22, 'sine', 0.14, 0.13); },
  sparkle: () => [1318, 1568, 1976].forEach((f, i) => tone(f, 0.08, 'sine', 0.12, i * 0.055)),
  unlock: () => { tone(587, 0.11, 'sine', 0.16); tone(784, 0.13, 'sine', 0.15, 0.1); tone(988, 0.2, 'sine', 0.13, 0.2); },
  level: () => [523, 659, 784, 988, 1175].forEach((f, i) => tone(f, 0.14, 'triangle', 0.15, i * 0.09)),
  bell: () => { tone(1568, 0.24, 'sine', 0.18); tone(1976, 0.3, 'sine', 0.12, 0.035); },
  match: () => { tone(660 + Math.random() * 220, 0.085, 'triangle', 0.17); },
  boom: () => { glide(150, 58, 0.24, 'sine', 0.22); tone(392, 0.12, 'triangle', 0.1, 0.08); },
  /* --- Trân Châu Nổ --- */
  // nổ lách tách nhỏ (nhóm 2-3 viên), tông ngẫu nhiên nhẹ
  pearlPop: () => { const f = 650 + Math.random() * 180; glide(f, f * 0.72, 0.055, 'sine', 0.16); tone(f * 1.5, 0.06, 'triangle', 0.11, 0.025); },
  // nổ vừa (4-5 viên): tông cao hơn, 4 nốt tách liên tiếp
  pearlPop2: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f * (1 + Math.random() * 0.02), 0.06, 'sine', 0.13, i * 0.04)),
  // nổ lớn (≥6 viên)
  pearlBoom: () => { glide(130, 55, 0.2, 'sine', 0.22); [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.11, 'triangle', 0.14, 0.06 + i * 0.05)); },
  fly: () => { [440, 587, 740].forEach((f, i) => tone(f, 0.06, 'sine', 0.09, i * 0.04)); },
  swoosh: () => glide(760, 300, 0.18, 'sine', 0.08),
  bounce: () => { glide(280, 190, 0.07, 'sine', 0.15); tone(440, 0.05, 'triangle', 0.07, 0.045); },
  // arpeggio combo tăng dần theo cấp: gọi sfx('combo2') ... sfx('combo6')
  combo: () => [659, 784, 988].forEach((f, i) => tone(f, 0.1, 'triangle', 0.16, i * 0.065)),
  ...Object.fromEntries([2, 3, 4, 5, 6].map((l) => ['combo' + l, () => { const b = 523 * Math.pow(1.122, l * 2); [1, 1.25, 1.5, 2, 2.5].slice(0, l + 1).forEach((m, i) => tone(b * m, 0.12, 'triangle', 0.42, i * 0.055)); }])),
  collect: () => { tone(1200, 0.06, 'sine', 0.3); tone(1600, 0.1, 'sine', 0.3, 0.06); },
  win: () => { [523, 659, 784, 1046, 784, 1046, 1318].forEach((f, i) => tone(f, 0.18, 'triangle', 0.55, i * 0.09)); tone(1568, 0.5, 'sine', 0.3, 0.65); },
  lose: () => { [440, 392, 330, 262].forEach((f, i) => tone(f, 0.2, 'sine', 0.5, i * 0.13)); },
  alarm: () => { [880, 620, 880, 620].forEach((f, i) => tone(f, 0.16, 'square', 0.12, i * 0.18)); glide(180, 70, 0.5, 'sawtooth', 0.12, 0.05); },
};
const SFX_RULES = {
  click: [65, 0, 90, 0.48], pop: [90, 1, 140, 0.62], cup: [130, 2, 170, 0.62], pour: [650, 0, 180, 0.42],
  drop: [110, 2, 150, 0.62], seal: [180, 3, 320, 0.75], ding: [180, 4, 330, 0.72], coin: [130, 2, 190, 0.55],
  reward: [250, 4, 620, 0.76], success: [220, 4, 430, 0.72], error: [180, 3, 300, 0.62], sad: [250, 2, 430, 0.55],
  sparkle: [150, 2, 230, 0.52], unlock: [300, 4, 470, 0.72], level: [350, 4, 610, 0.68], bell: [250, 3, 430, 0.68],
  match: [70, 1, 130, 0.58], boom: [260, 3, 430, 0.7], pearlPop: [70, 1, 170, 0.5], pearlPop2: [100, 2, 260, 0.58],
  pearlBoom: [280, 4, 440, 0.72], fly: [100, 1, 200, 0.48], swoosh: [130, 1, 230, 0.45], bounce: [100, 1, 160, 0.5],
  alarm: [600, 4, 900, 0.7], combo: [180, 3, 360, 0.62], collect: [150, 2, 260, 0.6], win: [600, 5, 1450, 0.74], lose: [400, 3, 700, 0.62],
};
/* ===== Rung (haptics): mức 0 tắt · 1 nhẹ · 2 vừa · 3 mạnh ===== */
const HAPTIC_MUL = [0, 0.6, 1, 1.7];
const HAPTIC = {
  click: 8, pop: 10, cup: 14, drop: 10, seal: [20, 30, 40], ding: 22, coin: 12, success: [15, 40, 25], error: [40, 30, 40], sad: 30,
  sparkle: 8, unlock: [20, 30, 20], level: [15, 30, 15, 30, 30], bell: 16, match: 12, boom: [40, 20, 60],
  pour: 0, alarm: [50, 40, 50, 40, 90], combo: [14, 24, 20], bounce: 8, fly: 6, swoosh: 8, collect: [10, 20, 10],
};
// Động cơ rung cần tối thiểu ~15-30ms mới cảm nhận được, nên mỗi mức có ngưỡng sàn riêng.
const HAPTIC_MIN = [0, 14, 22, 36];
const BRIDGE_OBJECTS = ['Android', 'AndroidBridge', 'AndroidInterface', 'NativeBridge', 'JSInterface', 'AppBridge', 'Native', 'app'];
const BRIDGE_METHODS = ['vibrate', 'haptic', 'hapticFeedback', 'vibrateMs'];
/** Tìm cầu nối rung của ứng dụng bọc APK (nếu có) khi WebView không có navigator.vibrate. */
function nativeVibrate(ms) {
  try {
    const cap = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics;
    if (cap && cap.vibrate) { cap.vibrate({ duration: ms }); return true; }
    if (navigator.notification && navigator.notification.vibrate) { navigator.notification.vibrate(ms); return true; }
    for (const o of BRIDGE_OBJECTS) {
      const obj = window[o];
      if (!obj) continue;
      for (const m of BRIDGE_METHODS) if (typeof obj[m] === 'function') { obj[m](ms); return true; }
    }
  } catch (e) { /* cầu nối lỗi: bỏ qua */ }
  return false;
}
/** 'web' | 'native' | 'none' — cách rung khả dụng trên thiết bị / ứng dụng hiện tại. */
export function hapticSupport() {
  if (typeof navigator.vibrate === 'function') return 'web';
  const probe = nativeProbe();
  return probe ? 'native' : 'none';
}
function nativeProbe() {
  const cap = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics;
  if (cap && cap.vibrate) return true;
  if (navigator.notification && navigator.notification.vibrate) return true;
  return BRIDGE_OBJECTS.some((o) => window[o] && BRIDGE_METHODS.some((m) => typeof window[o][m] === 'function'));
}
/** Rung theo mức đã chọn. `pattern` là số ms hoặc mảng [rung, nghỉ, rung...]. Trả về true nếu đã gửi lệnh rung. */
export function buzz(pattern = 10) {
  const level = S.settings.haptic ?? 2;
  const m = HAPTIC_MUL[level] || 0;
  if (pattern === 0 || !m) return false;
  const arr = (Array.isArray(pattern) ? pattern : [pattern]).map((v, i) => (i % 2 === 0 ? Math.max(HAPTIC_MIN[level], Math.round(v * m)) : v));
  try {
    if (typeof navigator.vibrate === 'function') {
      const ok = navigator.vibrate(arr);
      if (ok !== false) return true;
    }
  } catch (e) { /* thử cầu nối */ }
  // WebView của ứng dụng bọc APK thường không cấp quyền rung cho web: thử cầu nối native, mỗi nhịp một lệnh
  let t = 0, sent = false;
  arr.forEach((v, i) => {
    if (i % 2 === 0) { sent = true; setTimeout(() => nativeVibrate(v), t); }
    t += v;
  });
  return sent && nativeProbe();
}
function playSfx(n) {
  const sound = SFX[n];
  if (!sound || !unlocked || S.settings.sfx <= 0) return;
  const [cooldown, priority, duration, volume] = SFX_RULES[n] || (n.startsWith('combo') ? [180, 3, 420, 0.62] : [100, 1, 220, 0.55]);
  const now = performance.now();
  if (now - (sfxLastPlayed[n] ?? -Infinity) < cooldown) return;
  // Don't let tiny interface taps or ambient pour ticks interrupt an important cue.
  if (now < sfxActiveUntil && priority < sfxPriority) return;
  const c = ctx();
  if (!c || !master) return;
  if (sfxBus) {
    sfxBus.gain.cancelScheduledValues(c.currentTime);
    sfxBus.gain.setTargetAtTime(0.0001, c.currentTime, 0.018);
  }
  const bus = c.createGain();
  bus.gain.setValueAtTime(volume, c.currentTime);
  bus.connect(master);
  sfxBus = bus; sfxActiveUntil = now + duration; sfxPriority = priority;
  sfxLastPlayed[n] = now;
  sound();
  setTimeout(() => {
    if (sfxBus === bus) {
      bus.gain.setTargetAtTime(0.0001, c.currentTime, 0.035);
      sfxBus = null; sfxPriority = -1; sfxActiveUntil = 0;
    }
    setTimeout(() => { try { bus.disconnect(); } catch (e) { /* đã ngắt */ } }, 120);
  }, duration);
}
export const sfx = (n) => {
  buzz(HAPTIC[n] ?? 8);
  if (!unlocked || S.settings.sfx <= 0) return;
  // Generic click feedback waits briefly so a semantic action sound can replace it.
  if (n === 'click') {
    if (pendingClick) return;
    pendingClick = setTimeout(() => { pendingClick = null; playSfx('click'); }, 38);
    return;
  }
  if (pendingClick) { clearTimeout(pendingClick); pendingClick = null; }
  playSfx(n);
};
const STYLES = {
  lofi: { ms: 420, mel: [523, 0, 659, 0, 587, 0, 523, 0, 440, 0, 523, 659, 587, 0, 0, 0], bass: [131, 0, 0, 0, 175, 0, 0, 0, 147, 0, 0, 0, 196, 0, 0, 0], type: 'sine' },
  vui: { ms: 260, mel: [659, 784, 880, 784, 659, 523, 587, 659, 698, 880, 784, 698, 659, 587, 523, 0], bass: [262, 0, 262, 0, 349, 0, 349, 0, 294, 0, 294, 0, 392, 0, 392, 0], type: 'triangle' },
  spring: { ms: 330, type: 'triangle',
    mel: [523, 659, 784, 0, 880, 784, 659, 0, 587, 659, 698, 784, 659, 587, 523, 0, 659, 784, 1047, 0, 988, 880, 784, 659, 698, 784, 880, 698, 659, 587, 523, 0],
    bass: [131, 0, 196, 0, 131, 0, 196, 0, 175, 0, 220, 0, 196, 0, 147, 0, 165, 0, 247, 0, 165, 0, 220, 0, 175, 0, 220, 0, 196, 0, 131, 0] },
  summer: { ms: 245, type: 'triangle',
    mel: [784, 0, 880, 988, 1175, 988, 880, 0, 784, 880, 988, 0, 880, 784, 659, 0, 659, 784, 880, 0, 988, 880, 784, 659, 740, 880, 988, 880, 784, 0, 784, 0],
    bass: [196, 0, 294, 0, 196, 0, 294, 0, 165, 0, 247, 0, 165, 0, 247, 0, 131, 0, 196, 0, 131, 0, 196, 0, 147, 0, 220, 0, 196, 0, 294, 0] },
  autumn: { ms: 470, type: 'sine',
    mel: [440, 0, 523, 587, 659, 0, 587, 523, 392, 0, 440, 523, 494, 0, 440, 0, 349, 0, 440, 523, 587, 0, 523, 440, 330, 392, 494, 0, 440, 0, 0, 0],
    bass: [110, 0, 0, 165, 110, 0, 0, 0, 131, 0, 0, 196, 131, 0, 0, 0, 87, 0, 0, 131, 87, 0, 0, 0, 82, 0, 0, 123, 110, 0, 0, 0] },
  winter: { ms: 560, type: 'sine',
    mel: [659, 0, 0, 784, 740, 0, 659, 0, 587, 0, 659, 0, 494, 0, 0, 0, 523, 0, 659, 0, 784, 0, 740, 659, 587, 0, 494, 0, 659, 0, 0, 0],
    bass: [82, 0, 0, 0, 123, 0, 0, 0, 98, 0, 0, 0, 147, 0, 0, 0, 131, 0, 0, 0, 196, 0, 0, 0, 123, 0, 0, 0, 82, 0, 0, 0] },
};
export function restartMusic() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
  mstep = 0;
  const st = STYLES[S.settings.style];
  if (!unlocked || !actx || !st || S.settings.music <= 0) return;
  musicTimer = setInterval(() => {
    const i = mstep++ % st.mel.length;
    if (st.mel[i]) tone(st.mel[i], st.ms / 1000 * 0.9, st.type, 0.5, 0, mgain);
    if (st.bass[i]) tone(st.bass[i], st.ms / 1000 * 1.8, 'sine', 0.4, 0, mgain);
  }, st.ms);
}
export function initAudio() {
  const once = () => {
    unlocked = true;
    const c = ctx();
    if (c?.state === 'suspended') c.resume().catch(() => {});
    if (c && !musicTimer) restartMusic();
  };
  window.addEventListener('pointerdown', once);
  window.addEventListener('touchend', once, { passive: true });
  window.addEventListener('click', once);
  window.addEventListener('keydown', once);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (musicTimer) clearInterval(musicTimer);
      musicTimer = null;
      if (actx && actx.state === 'running') actx.suspend().catch(() => {});
    } else if (unlocked) once();
  });
}
export const gameHour = (t, total, startH = SHIFT_START_H, endH = 22) => startH + (t / total) * (endH - startH);
