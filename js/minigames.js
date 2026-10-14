/**
 * Mini game: Milk Tea Crush (ghép ≥3 biểu tượng, thẻ đặc biệt, mục tiêu theo màn) và Trân Châu Nổ (chạm nhóm trân châu).
 */
import { ITEMS } from './config.js';
import { S, markDirty, requestSave, esc, fmt, fmtK, sfx, rand, randInt, pick, chance, clamp, wait, $, $$, h, sum } from './core.js';
import * as E from './econ.js';
import { openModal, toast, bindActions, fxText, fxSpark } from './ui.js';
import { pearlIcon } from './pearl-art.js';

/* ======================= MILK TEA CRUSH ======================= */
const N = 7;
const ICONS = ['🧋', '🍓', '🥭', '🍵', '🍇'];
const SPECIAL = { stripeH: '⚡', stripeV: '⚡', bomb: '🍦', fish: '🐟', rainbow: '🌈' };
const SP_NAME = { stripeH: 'Ly Sọc ngang', stripeV: 'Ly Sọc dọc', bomb: 'Kem Cheese', fish: 'Cá Bay', rainbow: 'Cầu Vồng' };
let uid = 1;
let Q = null;

const levelCfg = (L) => ({ types: L < 3 ? 4 : 5, moves: Math.max(16, 25 - Math.floor(L / 4)), collect: 10 + 2 * L, score: 1000 + 200 * L });
const rt = (q) => Math.floor(Math.random() * q.types);
const mk = (q, t = rt(q)) => ({ id: uid++, t, sp: null });

function newGrid(q) {
  const g = Array.from({ length: N }, () => Array(N).fill(null));
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      let t, tries = 0;
      do { t = rt(q); tries++; } while (tries < 20 && ((c >= 2 && g[r][c - 1]?.t === t && g[r][c - 2]?.t === t) || (r >= 2 && g[r - 1][c]?.t === t && g[r - 2][c]?.t === t)));
      g[r][c] = mk(q, t);
    }
  }
  return g;
}
/** Tìm các cụm match: trả về {cells:Set, specials:[{r,c,sp,t}]} */
function findMatches(g, swapCells = []) {
  const mark = new Set();
  const runs = [];
  const key = (r, c) => r * N + c;
  for (let r = 0; r < N; r++) {
    let c = 0;
    while (c < N) {
      const t = g[r][c]?.t;
      let e = c + 1;
      while (t !== undefined && e < N && g[r][e]?.t === t) e++;
      if (t !== undefined && e - c >= 3) { runs.push({ dir: 'h', r, c, len: e - c, t }); for (let k = c; k < e; k++) mark.add(key(r, k)); }
      c = e;
    }
  }
  for (let c = 0; c < N; c++) {
    let r = 0;
    while (r < N) {
      const t = g[r][c]?.t;
      let e = r + 1;
      while (t !== undefined && e < N && g[e][c]?.t === t) e++;
      if (t !== undefined && e - r >= 3) { runs.push({ dir: 'v', r, c, len: e - r, t }); for (let k = r; k < e; k++) mark.add(key(k, c)); }
      r = e;
    }
  }
  const specials = [];
  // 5 thẳng → cầu vồng; 4 thẳng → ly sọc; L/T (giao 2 run) → kem cheese
  const hr = runs.filter((x) => x.dir === 'h'), vr = runs.filter((x) => x.dir === 'v');
  const used = new Set();
  for (const a of hr) for (const b of vr) {
    if (a.t !== b.t) continue;
    if (b.c >= a.c && b.c < a.c + a.len && a.r >= b.r && a.r < b.r + b.len) { specials.push({ r: a.r, c: b.c, sp: 'bomb', t: a.t }); used.add(a); used.add(b); }
  }
  for (const x of runs) {
    if (used.has(x)) continue;
    const anchor = swapCells.find((s) => (x.dir === 'h' ? s.r === x.r && s.c >= x.c && s.c < x.c + x.len : s.c === x.c && s.r >= x.r && s.r < x.r + x.len));
    const pr = anchor || (x.dir === 'h' ? { r: x.r, c: x.c + Math.floor(x.len / 2) } : { r: x.r + Math.floor(x.len / 2), c: x.c });
    if (x.len >= 5) specials.push({ r: pr.r, c: pr.c, sp: 'rainbow', t: x.t });
    else if (x.len === 4) specials.push({ r: pr.r, c: pr.c, sp: x.dir === 'h' ? 'stripeV' : 'stripeH', t: x.t });
  }
  // 2x2 (chỉ khi dính ô vừa hoán đổi) → cá bay
  for (const s of swapCells) {
    for (const [dr, dc] of [[0, 0], [0, -1], [-1, 0], [-1, -1]]) {
      const r0 = s.r + dr, c0 = s.c + dc;
      if (r0 < 0 || c0 < 0 || r0 + 1 >= N || c0 + 1 >= N) continue;
      const t = g[r0][c0]?.t;
      if (t !== undefined && g[r0][c0 + 1]?.t === t && g[r0 + 1][c0]?.t === t && g[r0 + 1][c0 + 1]?.t === t && !specials.some((p) => p.sp === 'fish')) {
        [[r0, c0], [r0, c0 + 1], [r0 + 1, c0], [r0 + 1, c0 + 1]].forEach(([r, c]) => mark.add(key(r, c)));
        specials.push({ r: s.r, c: s.c, sp: 'fish', t });
      }
    }
  }
  return { mark, specials };
}
/** Kích hoạt các thẻ đặc biệt nằm trong tập ô sẽ nổ (lan truyền). */
function expand(g, mark, q, hintType) {
  const key = (r, c) => r * N + c;
  const queue = [...mark];
  const seen = new Set(queue);
  const add = (r, c) => { if (r < 0 || c < 0 || r >= N || c >= N) return; const k = key(r, c); if (!seen.has(k)) { seen.add(k); mark.add(k); queue.push(k); } };
  while (queue.length) {
    const k = queue.shift(); const r = Math.floor(k / N), c = k % N, tile = g[r][c];
    if (!tile?.sp) continue;
    q.used[tile.sp] = (q.used[tile.sp] || 0) + 1;
    if (tile.sp === 'stripeH') for (let i = 0; i < N; i++) add(r, i);
    else if (tile.sp === 'stripeV') for (let i = 0; i < N; i++) add(i, c);
    else if (tile.sp === 'bomb') for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) add(r + dr, c + dc);
    else if (tile.sp === 'fish') { add(r, c); for (let i = 0; i < 3; i++) add(randInt(0, N - 1), randInt(0, N - 1)); }
    else if (tile.sp === 'rainbow') { const t = hintType ?? g[randInt(0, N - 1)][randInt(0, N - 1)]?.t; for (let rr = 0; rr < N; rr++) for (let cc = 0; cc < N; cc++) if (g[rr][cc]?.t === t) add(rr, cc); }
  }
}
function gravity(g, q) {
  for (let c = 0; c < N; c++) {
    let w = N - 1;
    for (let r = N - 1; r >= 0; r--) if (g[r][c]) { g[w][c] = g[r][c]; if (w !== r) g[r][c] = null; w--; }
    for (let r = w; r >= 0; r--) g[r][c] = mk(q);
  }
}
function hasMove(g) {
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
    for (const [dr, dc] of [[0, 1], [1, 0]]) {
      const r2 = r + dr, c2 = c + dc;
      if (r2 >= N || c2 >= N) continue;
      if (g[r][c].sp || g[r2][c2].sp) return true;
      [g[r][c], g[r2][c2]] = [g[r2][c2], g[r][c]];
      const ok = findMatches(g).mark.size > 0;
      [g[r][c], g[r2][c2]] = [g[r2][c2], g[r][c]];
      if (ok) return true;
    }
  }
  return false;
}
function tileHTML(t, r, c) {
  return `<div class="mt ${t.sp ? 'sp ' + t.sp : ''}" data-id="${t.id}" data-r="${r}" data-c="${c}" style="left:${c * 100 / N}%;top:${r * 100 / N}%"><span>${ICONS[t.t]}</span>${t.sp ? `<i>${SPECIAL[t.sp]}</i>` : ''}</div>`;
}
function paint(q, fresh = false) {
  const board = $('#crushBoard');
  if (!board) return;
  const present = new Map($$('.mt', board).map((e) => [e.dataset.id, e]));
  const keep = new Set();
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
    const t = q.g[r][c];
    if (!t) continue;
    keep.add(String(t.id));
    let el = present.get(String(t.id));
    if (!el) {
      el = h(tileHTML(t, fresh ? r : -2, c));
      board.appendChild(el);
      void el.offsetWidth;
    }
    el.dataset.r = r; el.dataset.c = c;
    el.style.left = `${c * 100 / N}%`; el.style.top = `${r * 100 / N}%`;
    el.className = `mt ${t.sp ? 'sp ' + t.sp : ''} ${q.sel && q.sel.r === r && q.sel.c === c ? 'sel' : ''}`;
    el.firstElementChild.textContent = ICONS[t.t];
    const badge = el.querySelector('i');
    if (t.sp && !badge) el.insertAdjacentHTML('beforeend', `<i>${SPECIAL[t.sp]}</i>`);
  }
  for (const [id, el] of present) if (!keep.has(id) && !el.classList.contains('pop')) el.remove();
}
/* ===== Hiệu ứng ===== */
const tileCenter = (r, c) => ({ x: (c + 0.5) * 100 / N, y: (r + 0.5) * 100 / N });
/** Nổ tung: các mảnh nhỏ + emoji bay tỏa ra từ ô. */
function burst(board, r, c, icon, big = false) {
  if (!board || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const { x, y } = tileCenter(r, c);
  const n = big ? 14 : 7;
  const w = board.clientWidth || 300;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rand(-0.3, 0.3), d = rand(0.45, big ? 1.5 : 1.0) * w / N * 1.5;
    const el = h(`<span class="mfx" style="left:${x}%;top:${y}%;font-size:${rand(big ? 14 : 11, big ? 22 : 17)}px">${i % 3 === 0 ? '✨' : i % 3 === 1 ? icon : '💥'}</span>`);
    board.appendChild(el);
    el.animate([
      { transform: 'translate(-50%,-50%) scale(.4) rotate(0)', opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) scale(1.2) rotate(${rand(-200, 200)}deg)`, opacity: 1, offset: 0.55 },
      { transform: `translate(calc(-50% + ${Math.cos(a) * d * 1.2}px), calc(-50% + ${Math.sin(a) * d * 1.2 + 14}px)) scale(.2) rotate(${rand(-320, 320)}deg)`, opacity: 0 },
    ], { duration: rand(380, 560), easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => el.remove();
  }
  const ring = h(`<span class="mfx-ring" style="left:${x}%;top:${y}%"></span>`);
  board.appendChild(ring); setTimeout(() => ring.remove(), 420);
  if (big) {
    const halo = h(`<span class="mfx-ring mfx-halo" style="left:${x}%;top:${y}%"></span>`);
    board.appendChild(halo); setTimeout(() => halo.remove(), 620);
  }
}
/** Hiệu ứng riêng cho thẻ đặc biệt khi kích hoạt. */
function specialFx(board, sp, r, c) {
  if (!board) return;
  const { x, y } = tileCenter(r, c);
  if (sp === 'stripeH' || sp === 'stripeV') {
    const beam = h(`<span class="mbeam ${sp === 'stripeH' ? 'hz' : 'vt'}" style="${sp === 'stripeH' ? `top:${y}%` : `left:${x}%`}"></span>`);
    board.appendChild(beam); setTimeout(() => beam.remove(), 520);
  } else if (sp === 'bomb') {
    const w = h(`<span class="mshock" style="left:${x}%;top:${y}%"></span>`);
    board.appendChild(w); setTimeout(() => w.remove(), 560);
  } else if (sp === 'fish') {
    const f = h(`<span class="mfish" style="left:${x}%;top:${y}%">🐟</span>`);
    board.appendChild(f);
    const tx = rand(-0.4, 0.4) * board.clientWidth, ty = rand(-0.4, 0.4) * board.clientWidth;
    f.animate([{ transform: 'translate(-50%,-50%) scale(1)' }, { transform: `translate(calc(-50% + ${tx / 2}px), calc(-50% + ${ty / 2 - 40}px)) scale(1.5) rotate(180deg)` }, { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1) rotate(360deg)` }], { duration: 560, easing: 'ease-in-out' }).onfinish = () => f.remove();
  } else if (sp === 'rainbow') {
    const f = h('<span class="mflash"></span>');
    board.appendChild(f); setTimeout(() => f.remove(), 600);
  }
}
function comboBanner(board, n) {
  const words = ['', '', 'COMBO x2!', 'NGON QUÁ! x3', 'SIÊU CẤP! x4', 'HOÀN HẢO! x5'];
  const t = h(`<div class="mcombo c${Math.min(n, 5)}">${words[Math.min(n, 5)] || 'HUYỀN THOẠI! x' + n}</div>`);
  board.appendChild(t); setTimeout(() => t.remove(), 900);
  if (n >= 3) { board.classList.remove('shake'); void board.offsetWidth; board.classList.add('shake'); }
}
function updateHud(q) {
  if (!$('#cMoves')) return;
  $('#cMoves').textContent = q.moves;
  $('#cScore').textContent = q.score;
  $('#cCollect').textContent = `${Math.min(q.got, q.cfg.collect)}/${q.cfg.collect}`;
  $('#cScoreGoal').textContent = `${Math.min(q.score, q.cfg.score)}/${q.cfg.score}`;
  const stars = q.score >= q.cfg.score * 1.5 ? 3 : q.score >= q.cfg.score * 1.2 ? 2 : q.score >= q.cfg.score ? 1 : 0;
  $$('#cStars i').forEach((s, i) => s.classList.toggle('on', i < stars));
  $('#cBar').style.width = `${clamp(q.score / q.cfg.score * 100, 0, 100)}%`;
}
async function resolve(q, swapCells) {
  let cascade = 0, first = true;
  while (true) {
    const { mark, specials } = findMatches(q.g, first ? swapCells : []);
    if (!mark.size && !q.forceMark?.size) break;
    if (q.forceMark) { q.forceMark.forEach((k) => mark.add(k)); q.forceMark = null; }
    cascade++;
    // giữ lại ô để tạo thẻ đặc biệt (không phá)
    const spKeys = new Set(specials.map((s) => s.r * N + s.c));
    expand(q.g, mark, q, q.hintRainbow);
    q.hintRainbow = undefined;
    const cleared = [...mark].filter((k) => !spKeys.has(k) || q.g[Math.floor(k / N)][k % N].sp);
    const pts = cleared.length * 20 * cascade;
    q.score += pts;
    for (const k of cleared) { const r = Math.floor(k / N), c = k % N, t = q.g[r][c]; if (t) { if (t.t === 0) q.got++; } }
    // hiệu ứng
    const board = $('#crushBoard');
    for (const k of cleared) {
      const r = Math.floor(k / N), c = k % N, t = q.g[r][c];
      const el = $(`.mt[data-id="${t.id}"]`);
      if (el) { el.classList.add('pop'); setTimeout(() => el.remove(), 260); }
      if (t.sp) specialFx(board, t.sp, r, c);
      burst(board, r, c, ICONS[t.t], !!t.sp || cleared.length >= 6);
      q.g[r][c] = null;
    }
    if (cleared.length >= 5 && cascade === 1) fxSpark(board, 6);
    for (const s of specials) {
      if (!q.g[s.r][s.c]) q.g[s.r][s.c] = { id: uid++, t: s.t, sp: s.sp };
      else { q.g[s.r][s.c].sp = s.sp; q.g[s.r][s.c].t = s.t; }
      q.made[s.sp] = (q.made[s.sp] || 0) + 1;
    }
    if (cascade > 1) comboBanner(board, cascade);
    if (pts >= 60) fxText(`+${pts}`, board, cascade > 1 ? 'g' : '');
    sfx(cascade > 1 ? 'boom' : 'match');
    updateHud(q);
    await wait(300);
    if (Q !== q) return;
    gravity(q.g, q);
    paint(q);
    await wait(260);
    if (Q !== q) return;
    first = false;
  }
  if (!hasMove(q.g)) { q.g = newGrid(q.cfg); paint(q, true); toast('Xáo bàn mới 🔄', ''); await wait(200); }
}
async function swap(q, a, b) {
  if (q.busy || q.over) return;
  q.busy = true;
  const A = q.g[a.r][a.c], B = q.g[b.r][b.c];
  q.g[a.r][a.c] = B; q.g[b.r][b.c] = A;
  paint(q);
  await wait(200);
  const m = findMatches(q.g, [a, b]);
  const spActive = A.sp || B.sp;
  if (!m.mark.size && !spActive) { q.g[a.r][a.c] = A; q.g[b.r][b.c] = B; paint(q); sfx('error'); await wait(200); q.busy = false; return; }
  q.moves--;
  if (spActive) {
    q.forceMark = new Set();
    const ak = [a, b].map((p) => p.r * N + p.c);
    ak.forEach((k) => q.forceMark.add(k));
    // cầu vồng hoán đổi với ô thường → nổ màu của ô đó
    if (A.sp === 'rainbow' && !B.sp) q.hintRainbow = B.t; else if (B.sp === 'rainbow' && !A.sp) q.hintRainbow = A.t;
  }
  await resolve(q, [a, b]);
  if (Q !== q) return;
  q.sel = null;
  updateHud(q);
  q.busy = false;
  await checkEnd(q);
}
async function checkEnd(q) {
  const win = q.got >= q.cfg.collect && q.score >= q.cfg.score;
  if (win) return finish(q, true);
  if (q.moves <= 0) return finish(q, false);
}
function finish(q, win) {
  q.over = true;
  if (Q !== q) return;
  const L = S.crush.level;
  let reward = '';
  if (win) {
    S.crush.level = L + 1;
    S.crush.best = Math.max(S.crush.best || 0, L);
    S.crush.perm = Math.min(0.5, S.crush.perm + 0.01);
    const money = 8000 + L * 2000;
    S.money += money;
    reward = `+1% doanh thu vĩnh viễn · +${fmtK(money)}`;
    if (L % 5 === 0) {
      S.collection.packs++;
      const ids = ['tcDen', 'traSua', 'lyM'];
      for (const id of ids) E.addStock(id, 3);
      reward += ' · 🎁 +1 túi quà & 3 nguyên liệu';
    }
    sfx('level');
  } else sfx('sad');
  markDirty('hud', 'panel');
  requestSave();
  const ov = $('#crushOver');
  ov.hidden = false;
  ov.innerHTML = `<div class="ov-card"><div class="ov-ico">${win ? '🏆' : '😿'}</div><h3>${win ? 'Thắng màn ' + L + '!' : 'Hết lượt rồi!'}</h3><p>${win ? esc(reward) : 'Thử lại nhé, bạn sẽ làm được thôi!'}</p><button class="btn pri block" data-act="${win ? 'next' : 'retry'}">${win ? 'Màn tiếp theo ➜' : 'Chơi lại'}</button><button class="btn ghost block" data-act="x">Đóng</button></div>`;
}
function crushHTML() {
  const q = Q;
  return `<div class="crush"><div class="c-head"><div><h3>🍬 MILK TEA CRUSH</h3><small>Màn ${S.crush.level} · ${S.crush.level < 3 ? 'Nhập Môn Trà Sữa' : 'Thử Thách Trà Sữa'}</small></div><button class="btn soft sm" data-act="retry">🔄 Chơi lại</button></div>
    <div class="c-stats"><div><small>ĐIỂM SỐ</small><b id="cScore">0</b></div><div class="c-moves"><b id="cMoves">${q.moves}</b><small>LƯỢT</small></div><div><small>MỤC TIÊU: ${q.cfg.score}</small><span class="stars" id="cStars"><i>★</i><i>★</i><i>★</i></span></div></div>
    <div class="c-goals"><span>🎯 MỤC TIÊU:</span><span class="g">${ICONS[0]} <b id="cCollect">0/${q.cfg.collect}</b></span><span class="g">⭐ <b id="cScoreGoal">0/${q.cfg.score}</b></span></div>
    <div class="bar"><i id="cBar" style="width:0%"></i></div>
    <p class="c-tip">Làm quen xếp kẹo: thu thập ${q.cfg.collect} ${ICONS[0]} Trân Châu!</p>
    <div class="crush-board" id="crushBoard"></div><div class="crush-over" id="crushOver" hidden></div>
    <p class="c-tip">💡 Ghép 4: ⚡ Ly Sọc quét hàng/cột · Ghép 2x2: 🐟 Cá Bay · Ghép L/T: 🍦 Kem Cheese nổ 3x3 · Ghép 5: 🌈 Cầu Vồng xóa 1 loại. Hoàn thành đủ Mục tiêu trước khi hết lượt!</p></div>`;
}
export function openCrush() {
  const cfg = levelCfg(S.crush.level);
  Q = { cfg, g: null, moves: cfg.moves, score: 0, got: 0, busy: false, over: false, sel: null, types: cfg.types, used: {}, made: {} };
  Q.g = newGrid(cfg);
  const m = openModal({ id: 'crush', cls: 'crush-m', html: crushHTML(), onClose: () => { Q = null; } });
  paint(Q, true);
  updateHud(Q);
  const restart = () => { m.close(); openCrush(); };
  bindActions(m.body, { retry: restart, next: restart, x: () => m.close() });
  const board = $('#crushBoard', m.body);
  let down = null;
  const pointerDown = (e) => {
    const el = e.target.closest('.mt');
    if (!el || !Q || Q.busy || Q.over) return;
    down = { r: +el.dataset.r, c: +el.dataset.c, x: e.clientX, y: e.clientY };
  };
  const pointerUp = (e) => {
    if (!down || !Q) return;
    const d = down; down = null;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 18) {
      const b = Math.abs(dx) > Math.abs(dy) ? { r: d.r, c: d.c + Math.sign(dx) } : { r: d.r + Math.sign(dy), c: d.c };
      if (b.r >= 0 && b.c >= 0 && b.r < N && b.c < N) swap(Q, { r: d.r, c: d.c }, b);
      return;
    }
    const cur = { r: d.r, c: d.c };
    if (Q.sel && Math.abs(Q.sel.r - cur.r) + Math.abs(Q.sel.c - cur.c) === 1) { const a = Q.sel; Q.sel = null; swap(Q, a, cur); }
    else { Q.sel = cur; sfx('click'); paint(Q); }
  };
  board.style.touchAction = 'none';
  if (window.PointerEvent) {
    board.addEventListener('pointerdown', (e) => { pointerDown(e); if (down) board.setPointerCapture?.(e.pointerId); });
    board.addEventListener('pointerup', pointerUp);
    board.addEventListener('pointercancel', () => { down = null; });
  } else {
    board.addEventListener('touchstart', (e) => { if (e.touches.length !== 1) { down = null; return; } e.preventDefault(); pointerDown({ target: e.target, clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }); }, { passive: false });
    board.addEventListener('touchend', (e) => { e.preventDefault(); const t = e.changedTouches[0]; if (t) pointerUp({ clientX: t.clientX, clientY: t.clientY }); }, { passive: false });
    board.addEventListener('touchcancel', () => { down = null; });
    board.addEventListener('mousedown', pointerDown);
    board.addEventListener('mouseup', pointerUp);
  }
}
/** API kiểm thử/debug: hoán đổi hai ô liền kề trên bàn hiện tại. */
export function crushDebug() {
  return { get Q() { return Q; }, swap, N, open: openCrush };
}

/* ======================= TRÂN CHÂU NỔ ======================= */
const PN = 6, PDUR = 30, PGOAL = 120, PCOMBO_MS = 1200;
// Các loại viên lấy màu từ ITEMS trong khay bán hàng (trân châu đen, hoàng kim, nổ hồng, thạch củ năng, foam ube)
const PIDS = ['tcDen', 'tcVang', 'tcNo', 'cuNang', 'fUbe'];
const PCOL = PIDS.length;
let P = null;
/** Nổ tung: vòng sóng + hạt trân châu cùng màu bay ra từ ô. */
function pearlBurst(el, color, big) {
  const layer = $('#pFx'), stage = $('#pStage');
  if (!layer || !stage) return;
  const origin = stage.getBoundingClientRect();
  const r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  const ring = h(`<span class="pfx-ring" style="left:${x - origin.left}px;top:${y - origin.top}px;border-color:${color}"></span>`);
  layer.appendChild(ring);
  ring.animate([{ transform: 'translate(-50%,-50%) scale(.3)', opacity: .9 }, { transform: 'translate(-50%,-50%) scale(1.9)', opacity: 0 }], { duration: 420, easing: 'ease-out' }).onfinish = () => ring.remove();
  if (big) {
    const halo = h(`<span class="pfx-ring pfx-mega" style="left:${x - origin.left}px;top:${y - origin.top}px;border-color:${color}"></span>`);
    layer.appendChild(halo);
    halo.animate([{ transform: 'translate(-50%,-50%) scale(.15)', opacity: .95 }, { transform: 'translate(-50%,-50%) scale(2.8)', opacity: 0 }], { duration: 680, easing: 'cubic-bezier(.16,.72,.32,1)' }).onfinish = () => halo.remove();
  }
  const n = big ? 10 : 6;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rand(-0.3, 0.3), d = rand(24, big ? 62 : 48), s = rand(5, 9);
    const f = h(`<span class="pfx-dot" style="left:${x - origin.left}px;top:${y - origin.top}px;width:${s}px;height:${s}px;background:${color}">${i % 3 === 0 ? '✦' : ''}</span>`);
    layer.appendChild(f);
    f.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d + 14}px)) scale(.3)`, opacity: 0 }], { duration: rand(380, 560), easing: 'cubic-bezier(.2,.7,.4,1)' }).onfinish = () => f.remove();
  }
}
const pRand = () => randInt(0, PCOL - 1);
function pNew() { return Array.from({ length: PN }, () => Array.from({ length: PN }, pRand)); }
function pGroup(b, r, c) {
  const col = b[r][c];
  if (col < 0) return [];
  const seen = new Set(), st = [[r, c]], out = [];
  while (st.length) {
    const [y, x] = st.pop(), k = y * PN + x;
    if (seen.has(k) || y < 0 || x < 0 || y >= PN || x >= PN || b[y][x] !== col) continue;
    seen.add(k); out.push([y, x]); st.push([y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]);
  }
  return out;
}
/** Dồn viên xuống, sinh viên mới ở trên; trả ma trận khoảng rơi (số ô) để làm animation. */
function pCollapse(b) {
  const fall = Array.from({ length: PN }, () => Array(PN).fill(0));
  for (let c = 0; c < PN; c++) {
    const col = [];
    for (let r = PN - 1; r >= 0; r--) if (b[r][c] >= 0) col.push({ v: b[r][c], r });
    const nNew = PN - col.length;
    for (let r = PN - 1; r >= 0; r--) {
      const i = PN - 1 - r;
      if (i < col.length) { b[r][c] = col[i].v; fall[r][c] = r - col[i].r; }
      else { b[r][c] = pRand(); fall[r][c] = r + (nNew - (i - col.length)); }
    }
  }
  return fall;
}
const pHas = (b) => b.some((row, r) => row.some((_, c) => pGroup(b, r, c).length >= 2));
/** Vẽ lưới; `fall` (nếu có) làm viên rơi mượt vào chỗ trống, không có thì viên nảy hiện ra. */
function pRender(fall) {
  const el = $('#pBoard');
  if (!el || !P) return;
  el.innerHTML = P.b.map((row, r) => row.map((v, c) => `<button class="pc pearl-cell p${v}" data-act="pop" data-r="${r}" data-c="${c}" aria-label="${esc(ITEMS[PIDS[v]].name)}"><span class="pb pearl-character" style="--pc:${ITEMS[PIDS[v]].color};--float-delay:${(r + c) * .13}s">${pearlIcon(v)}</span></button>`).join('')).join('');
  const balls = $$('#pBoard .pb');
  const step = el.firstElementChild ? el.firstElementChild.offsetHeight + 5 : 50;
  let maxFall = 0;
  balls.forEach((b, i) => {
    const d = fall ? fall[Math.floor(i / PN)][i % PN] : 0;
    if (fall && d > 0) {
      maxFall = Math.max(maxFall, d);
      b.animate([{ transform: `translateY(${-d * step}px)` }, { transform: 'translateY(0)' }], { duration: 170 + d * 60, easing: 'cubic-bezier(.35,.9,.45,1.25)' });
    } else if (!fall) {
      b.animate([{ transform: 'scale(0)' }, { transform: 'scale(1.12)' }, { transform: 'scale(1)' }], { duration: 300, delay: i * 6, easing: 'ease-out', fill: 'backwards' });
    }
  });
  const game = P;
  if (maxFall) { sfx('swoosh'); setTimeout(() => P === game && !game.over && sfx('bounce'), 170 + maxFall * 60); }
  pStats();
}
function pStats() {
  if (!P || !$('#pScore')) return;
  $('#pScore').textContent = P.score;
  $('#pTime').textContent = Math.ceil(P.t) + 's';
  $('#pBar').style.width = `${P.t / PDUR * 100}%`;
  $('#pGoalFill').style.width = `${Math.min(100, P.score / PGOAL * 100)}%`;
  $('#pGoalText').textContent = `${P.score}/${PGOAL}`;
  $('#pBest').textContent = Math.max(S.pearl.best, P.score);
  $('#pComboCount').textContent = `×${Math.max(1, Math.min(P.combo, 6))}`;
  $('#pLastGain').textContent = P.lastGain ? `+${P.lastGain}` : '—';
  $('#pEquation').textContent = P.lastGroup ? `${P.lastGroup}² × ${P.lastMul} = +${P.lastGain}` : 'Điểm = số viên² × combo';
  $('#pPopped').textContent = sum(P.cnt);
  $('#pComboFill').style.width = `${P.combo ? Math.max(0, 1 - (performance.now() - P.lastPop) / PCOMBO_MS) * 100 : 0}%`;
  $('.pg')?.classList.toggle('time-warning', P.t <= 8);
}
function pScoreFx(cell, gain, group, mul) {
  const stage = $('#pStage'), layer = $('#pFx'); if (!stage || !layer) return;
  const origin = stage.getBoundingClientRect(), r = cell.getBoundingClientRect();
  const x = r.left + r.width / 2 - origin.left, y = r.top + r.height / 2 - origin.top;
  const label = h(`<span class="pearl-gain" style="left:${x}px;top:${y}px">+${gain}<small>${group} viên · ×${mul}</small></span>`);
  layer.appendChild(label);
  label.animate([{transform:'translate(-50%,-30%) scale(.5)',opacity:0},{transform:'translate(-50%,-75%) scale(1.15)',opacity:1,offset:.25},{transform:'translate(-50%,-140%) scale(1)',opacity:0}], {duration:850,easing:'ease-out'}).onfinish = () => label.remove();
  const target = $('#pScore').getBoundingClientRect();
  const spark = h(`<span class="pearl-score-flight" style="left:${x}px;top:${y}px">✦</span>`); layer.appendChild(spark);
  spark.animate([{transform:'translate(-50%,-50%) scale(1)',opacity:1},{transform:`translate(${target.left - origin.left - x}px,${target.top - origin.top - y}px) scale(.4)`,opacity:0}],{duration:650,easing:'ease-in'}).onfinish = () => spark.remove();
  $('#pScore').animate([{transform:'scale(1)'},{transform:'scale(1.2)'},{transform:'scale(1)'}],{duration:320});
}
/** Chữ COMBO phóng to + rung nhẹ. */
function pComboFx(mul) {
  const e = $('#pCombo');
  if (!e) return;
  e.textContent = mul > 1 ? `COMBO x${mul}` : '';
  if (mul < 2) return;
  const s = 1.3 + Math.min(mul, 6) * 0.1;
  e.animate([{ transform: `scale(${s + 0.5}) rotate(-6deg)` }, { transform: `scale(${s}) rotate(5deg)` }, { transform: 'scale(1) rotate(-3deg)' }, { transform: 'scale(1) rotate(0)' }], { duration: 380, easing: 'ease-out' });
  const b = $('#pBoard');
  if (mul >= 3 && b) b.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-3px)' }, { transform: 'translateX(3px)' }, { transform: 'translateX(-2px)' }, { transform: 'translateX(0)' }], { duration: 220 });
}
function pEnd() {
  if (!P || P.over) return;
  P.over = true; clearInterval(P.timer);
  const win = P.score >= PGOAL;
  const money = P.score * 60;
  // trân châu thưởng theo số viên mỗi loại đã nổ (tối thiểu theo điểm để ván điểm cao luôn có thưởng)
  const rewards = [];
  PIDS.forEach((id, i) => { const q = Math.floor(P.cnt[i] / 4); if (q > 0) rewards.push([id, q]); });
  if (!rewards.length && P.score >= 40) rewards.push(['tcDen', Math.floor(P.score / 40)]);
  S.money += money;
  for (const [id, q] of rewards) E.addStock(id, q);
  S.pearl.best = Math.max(S.pearl.best, P.score);
  let extra = '';
  if (win && chance(0.3)) { S.collection.packs++; extra = '<p>🎁 +1 túi quà sưu tầm!</p>'; }
  markDirty('hud', 'panel'); requestSave();
  sfx(win ? 'win' : 'lose');
  const rw = rewards.length ? rewards.map(([id, q]) => `<span class="prw">${pearlIcon(PIDS.indexOf(id), 'reward-pearl')}+${q} ${esc(ITEMS[id].name)}</span>`).join('') : '<span class="muted">Chưa đủ viên để nhận trân châu</span>';
  $('#pBody').innerHTML = `<div class="ov-card inline"><div class="ov-ico">${win ? '🏆' : '🙂'}</div><h3>${win ? 'THÀNH CÔNG!' : 'Cố lên lần sau!'}</h3><p>Điểm: <b>${P.score}</b> · Combo cao nhất: <b>x${P.maxMul}</b> (kỷ lục ${S.pearl.best})</p><p>Tiền thưởng: <b class="money">+${fmtK(money)}</b></p><div class="prws">${rw}</div>${extra}<button class="btn pri block" data-act="x">Nhận thưởng 🎁</button></div>`;
}
export function openPearl() {
  if (S.pearl.playsDay >= 3) return toast('Hôm nay bạn đã chơi đủ 3 lượt Trân Châu Nổ', 'err');
  const m = openModal({ id: 'pearl', cls: 'pearl-modal', onClose: () => { if (P?.timer) clearInterval(P.timer); P = null; }, html: `<div id="pBody"><h3 class="m-title">✨ Trân Châu Nổ</h3><div class="pearl-preview">${PIDS.map((_, i) => pearlIcon(i)).join('')}</div><p class="m-text center">Chạm nhóm ≥ 2 trân châu cùng màu kề nhau để làm nổ. Nhóm càng lớn điểm càng cao, nổ liên tiếp trong ${PCOMBO_MS / 1000}s = nhân combo! Mục tiêu <b>${PGOAL}</b> điểm trong ${PDUR} giây. Cuối ván nhận thêm trân châu nguyên liệu cho kho.</p><p class="m-text center muted">Lượt hôm nay: ${S.pearl.playsDay}/3 · Kỷ lục: ${S.pearl.best}</p><button class="btn pri block" data-act="start">▶ Bắt đầu</button></div>` });
  bindActions(m.body, {
    x: () => m.close(),
    start: () => {
      if (P && !P.over) return;
      S.pearl.playsDay++;
      requestSave();
      P = { b: pNew(), score: 0, combo: 0, maxMul: 1, lastPop: 0, lastGain:0, lastGroup:0, lastMul:1, busy:false, cnt: Array(PCOL).fill(0), t: PDUR, over: false, timer: null };
      if (!pHas(P.b)) P.b = pNew();
      $('#pBody').innerHTML = `<div class="pg"><div class="pearl-heading"><b>✨ TRÂN CHÂU NỔ</b><span>⏱ <b id="pTime">30s</b></span></div><div class="pearl-scoreboard"><div><small>ĐIỂM TÍCH LŨY</small><b id="pScore">0</b></div><div><small>KỶ LỤC</small><b id="pBest">${S.pearl.best}</b></div><div><small>COMBO</small><b id="pComboCount">×1</b></div><div><small>VỪA NHẬN</small><b id="pLastGain">—</b></div></div><div class="pearl-progress"><span>Mục tiêu <b id="pGoalText">0/${PGOAL}</b></span><div class="bar goal-bar"><i id="pGoalFill"></i></div><div class="bar time-bar"><i id="pBar"></i></div></div><div class="pearl-combo-row"><span id="pCombo" class="pcombo">Sẵn sàng!</span><div class="bar combo-bar"><i id="pComboFill"></i></div></div><div class="pearl-stage" id="pStage"><div class="pboard" id="pBoard"></div><div class="pearl-fx" id="pFx" aria-hidden="true"></div></div><div class="pearl-calculation"><b id="pEquation">Điểm = số viên² × combo</b><span>Đã nổ <b id="pPopped">0</b> viên</span></div></div>`;
      pRender();
      sfx('fly');
      let last = performance.now();
      P.timer = setInterval(() => {
        const now = performance.now(); P.t -= (now - last) / 1000; last = now;
        if (P.t <= 0) { P.t = 0; pEnd(); return; }
        if (P.combo && now - P.lastPop > PCOMBO_MS) { P.combo = 0; const e = $('#pCombo'); if (e) e.textContent = 'Nổ liên tiếp để combo!'; }
        pStats();
      }, 120);
    },
    pop: (t) => {
      if (!P || P.over || P.busy) return;
      const r = +t.dataset.r, c = +t.dataset.c, g = pGroup(P.b, r, c);
      if (g.length < 2) { P.combo = 0; pComboFx(0); sfx('pop'); t.animate([{ transform: 'translateX(-3px)' }, { transform: 'translateX(3px)' }, { transform: 'translateX(0)' }], { duration: 160 }); return; }
      const now = performance.now();
      P.combo = now - P.lastPop <= PCOMBO_MS && P.combo ? P.combo + 1 : 1;
      P.lastPop = now;
      const mul = Math.min(P.combo, 6);
      P.maxMul = Math.max(P.maxMul, mul);
      const gain = g.length * g.length * mul, col = P.b[r][c], color = ITEMS[PIDS[col]].color, big = g.length >= 5;
      P.score += gain; P.cnt[col] += g.length;
      P.lastGain = gain; P.lastGroup = g.length; P.lastMul = mul; P.busy = true;
      const game = P;
      for (const [y, x] of g) { const cell = $(`.pc[data-r="${y}"][data-c="${x}"]`); if (cell) { pearlBurst(cell, color, big); cell.classList.add('pearl-popping'); } P.b[y][x] = -1; }
      pScoreFx(t, gain, g.length, mul); pStats();
      sfx(g.length >= 6 ? 'pearlBoom' : g.length >= 4 ? 'pearlPop2' : 'pearlPop');
      if (mul >= 2) setTimeout(() => { if (P === game && !game.over) sfx('combo' + mul); }, 90);
      pComboFx(mul);
      setTimeout(() => {
        if (P !== game || game.over) return;
        const fall = pCollapse(game.b);
        if (!pHas(game.b)) { game.b = pNew(); pRender(); } else pRender(fall);
        const settle = 170 + Math.max(...fall.flat()) * 60;
        setTimeout(() => { if (P === game && !game.over) game.busy = false; }, settle);
      }, 160);
    },
  });
}
export function pearlDebug() { return { get state() { return P; }, open: openPearl, group: pGroup, render: pRender, end: pEnd }; }

/* ======================= PANEL "Milk Tea Crush" ======================= */
export const crush = {
  html() {
    const L = S.crush.level;
    return `<div class="mgcard crushc"><h4>🍬 MILK TEA CRUSH</h4><p>Ghép 3 icon giống nhau sẽ nổ! Mỗi màn vượt qua tăng <b>+1% doanh thu vĩnh viễn</b> cho quán (không bị reset khi thua hay qua ngày mới).</p>
      <div class="mg-info"><div><small>MÀN HIỆN TẠI</small><b>Màn ${L}</b></div><div><small>THƯỞNG KHI THẮNG</small><b>+1% DT vĩnh viễn ⚡</b><small>(Cứ 5 màn: +1 Túi Quà 🎁)</small></div></div>
      <div class="mg-info"><div><small>Buff hiện có</small><b>+${(S.crush.perm * 100).toFixed(0)}% doanh thu</b></div><div><small>Màn cao nhất</small><b>${S.crush.best || 0}</b></div></div>
      <div class="rules"><b>📖 Luật chơi & Thử thách tăng dần:</b><p>• Màn càng cao độ khó càng tăng: mục tiêu điểm cao hơn, lượt đi ít hơn, nhiều loại topping trà sữa và thời gian đếm ngược suy nghĩ mỗi lượt nhanh dần.</p><p>• <b>Combo kẹo đặc biệt:</b></p><p>- Ghép 4: ⚡ Ly Sọc quét sạch 1 hàng/cột.</p><p>- Ghép 2x2: 🐟 Con Cá Bay tự bơi đến nổ ô ngẫu nhiên.</p><p>- Ghép L / T: 🍦 Kem Cheese nổ lan 3x3.</p><p>- Ghép 5: 🌈 Cầu Vồng quét sạch toàn bộ 1 loại kẹo.</p></div>
      <button class="btn grad block" data-act="crush">🎮 VÀO CHƠI MILK TEA CRUSH NGAY</button></div>
      <div class="mgcard"><h4>⚫ TRÂN CHÂU NỔ</h4><p>Chạm nhóm trân châu cùng màu kề nhau để làm nổ trong 30 giây. Nhận tiền & nhiều loại trân châu nguyên liệu. Hôm nay còn <b>${3 - S.pearl.playsDay}</b> lượt.</p><button class="btn pri block" data-act="pearl">▶ Chơi Trân Châu Nổ</button></div>`;
  },
  acts: { crush: () => openCrush(), pearl: () => openPearl() },
};
void ITEMS; void rand; void pick; void fxSpark; void fmt;
