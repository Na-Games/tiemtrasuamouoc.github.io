/** Hình vẽ cho quầy bán hàng: sprite đã tách riêng từng hình + ly trà sữa vẽ bằng SVG. */
import { ingredientArt } from './ingredient-art.js';
const DIR = 'assets/sell/sprites/';
const img = (name, cls = '') => `<img class="sale-art ${cls}" src="${DIR}${name}.png" alt="" draggable="false" decoding="async">`;

// Chân dung khách theo thứ tự từ trái sang phải trên sprite sheet.
const customerCells = {
  sinhVien: 1, vanPhong: 2, genZ: 0, bac: 4,
  vip: 8, macCa: 9, reviewer: 2, be: 6,
  idol: 3, gamer: 5, congNhan: 7, shipper: 1, giaoVien: 8,
};
const TEAS = ['traSua', 'matcha', 'hongTra', 'lucTra', 'olong', 'traThai'];
// Món chưa có hình riêng dùng hình gần giống (tên và luật tiêu hao vẫn theo dữ liệu game).
const TOPS = ['tcDen', 'tcTrang', 'tcVang', 'tcSoi', 'tcNo', 'cuNang', 'thachTc', 'suongSao', 'thachCf', 'fCheese', 'fMatcha', 'fMuoi', 'fUbe', 'pmVien', 'thachPm'];
const TOP_ALIAS = { pmTuoi: 'pmVien' };

export function customerArt(key) {
  if (!Object.prototype.hasOwnProperty.call(customerCells, key)) return '';
  return img(`customer-${customerCells[key]}`, 'customer-sprite');
}
export function teaArt(id) { return img(`tea-${TEAS.includes(id) ? id : 'traSua'}`); }
export function toppingArt(id) {
  const custom = ingredientArt(id);
  if (custom) return custom;
  const k = TOP_ALIAS[id] || id;
  return img(`top-${TOPS.includes(k) ? k : 'tcDen'}`);
}
/** Chồng ly giấy một cột (vẽ SVG: sạch nét, đúng tỉ lệ M nhỏ / L lớn). */
export function stackArt(size) {
  const L = size === 'L';
  const rims = L ? [46, 52, 58, 64, 70, 76, 82] : [48, 54, 60, 66, 72, 78];
  const wl = (y) => 6.5 + 6.5 * (y - 34) / 60;
  const lines = rims.map((y) => `<path d="M${wl(y).toFixed(1)} ${y} Q30 ${y + 3.4} ${(60 - wl(y)).toFixed(1)} ${y}" fill="none" stroke="rgba(122,90,62,.5)" stroke-width="1.1"/>`).join('');
  const id = `stk${cupUid++}`;
  return `<svg class="sale-art stack-svg" viewBox="0 26 60 78" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
    <defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#e6cfa8"/><stop offset=".35" stop-color="#fbf0dc"/><stop offset=".7" stop-color="#f1dfc0"/><stop offset="1" stop-color="#d9bf94"/></linearGradient></defs>
    <ellipse cx="30" cy="99" rx="21" ry="3.6" fill="rgba(60,35,10,.2)"/>
    <path d="M6.5 34 L13 93 Q30 98.5 47 93 L53.5 34 Z" fill="url(#${id})" stroke="#7a5a3e" stroke-width="1.8" stroke-linejoin="round"/>
    ${lines}
    <path d="M6.5 34 Q30 26 53.5 34" fill="none" stroke="#7a5a3e" stroke-width="1.8"/>
    <ellipse cx="30" cy="34" rx="23.5" ry="6.4" fill="#fffaf0" stroke="#7a5a3e" stroke-width="1.8"/>
    <ellipse cx="30" cy="35.2" rx="19.5" ry="4.2" fill="#e4cda6"/>
    <path d="M12 44 L16.5 86" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".55"/>
  </svg>`;
}
export function sealerArt() { return img('sealer'); }
const POUR = { traSua: 'brown', matcha: 'green', hongTra: 'orange', lucTra: 'green', olong: 'yellow', traThai: 'orange' };
export function pourArt(tea) { return img(`pour-${POUR[tea] || 'brown'}`, 'pour-sprite'); }
export function splashArt(tea) { return img(`splash-${TEAS.includes(tea) ? tea : 'traSua'}`, 'tea-splash-sprite'); }

/* ===== Ly trà sữa SVG: nước, topping nằm gọn trong lòng ly; nắp và ống hút khớp miệng ly ===== */
let cupUid = 0;
// Lòng ly (hệ toạ độ 78 x 104): miệng y=12 rộng 6..72, đáy y=96 rộng 16..62.
const BODY_IN = 'M7.6 13 L17.4 95.5 Q39 101 60.6 95.5 L70.4 13 Z';
const Y_TOP = 14, Y_BOT = 97;
const wallL = (y) => 6 + 10 * (y - 12) / 84;
const wallR = (y) => 72 - 10 * (y - 12) / 84;
const surfaceOf = (fill) => Y_BOT - (Y_BOT - Y_TOP) * Math.min(1, Math.max(0, fill) * 0.86);
const teaTone = (hex, amount) => /^#[0-9a-f]{6}$/i.test(hex || '')
  ? '#' + [1, 3, 5].map((p) => Math.round(Math.max(0, Math.min(255, parseInt(hex.slice(p, p + 2), 16) + amount))).toString(16).padStart(2, '0')).join('')
  : hex || '#fff';

/** Cập nhật mực nước khi đang rót (không vẽ lại cả ly). */
export function setCupFill(cupEl, fill) {
  const liq = cupEl && cupEl.querySelector('.c-liq');
  if (!liq) return;
  const y = surfaceOf(fill);
  liq.setAttribute('y', y.toFixed(1)); liq.setAttribute('height', (110 - y).toFixed(1));
  const top = cupEl.querySelector('.c-liq-top');
  if (top) top.setAttribute('y', y.toFixed(1));
  const surf = cupEl.querySelector('.c-surf');
  if (surf) { surf.setAttribute('cy', y.toFixed(1)); surf.style.opacity = fill > 0.02 ? 1 : 0; }
  const bubbles = cupEl.querySelector('.c-pour-bubbles');
  if (bubbles) bubbles.setAttribute('transform', `translate(0 ${y.toFixed(1)})`);
  const ice = cupEl.querySelector('.c-ice');
  if (ice) ice.setAttribute('transform', `translate(0 ${Math.min(78, y + 6).toFixed(1)})`);
}

/** opts: { fill, tea (màu), flavor (màu), tops: [màu...], lid: '' | 'drop' | 'on', straw: bool } */
export function cupSvg(opts) {
  const { fill = 0, tea = null, flavor = null, tops = [], shown = [], lid = '', straw = false, ice = false, sugar = false } = opts;
  const id = `cup${cupUid++}`;
  const y = surfaceOf(tea ? fill : 0);
  // topping xếp từ đáy lên, mỗi hàng 5 viên so le
  const balls = [];
  let n = 0;
  for (let ti = 0; ti < tops.length; ti++) {
    const c = tops[ti], cnt = shown[ti] ?? 3;
    for (let k = 0; k < cnt; k++, n++) {
      const row = Math.floor(n / 5), col = n % 5;
      const yy = 91 - row * 6.6;
      const xx = Math.max(wallL(yy) + 4.2, Math.min(wallR(yy) - 4.2, 39 + (col - 2) * 8.2 + (row % 2 ? 4.1 : 0)));
      balls.push(`<circle cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="3.7" fill="${c}"/><circle cx="${(xx - 1.2).toFixed(1)}" cy="${(yy - 1.3).toFixed(1)}" r="1.1" fill="#fff" opacity=".55"/>`);
    }
  }
  const liquid = tea ? `<rect class="c-liq" x="0" y="${y.toFixed(1)}" width="78" height="${(110 - y).toFixed(1)}" fill="url(#${id}tea)"/>
      <rect class="c-liq-top" x="0" y="${y.toFixed(1)}" width="78" height="14" fill="url(#${id}g)"/>
      ${flavor ? `<rect class="c-flav" x="0" y="64" width="78" height="40" fill="${flavor}" opacity=".5"/>` : ''}
      <ellipse class="c-surf" cx="39" cy="${y.toFixed(1)}" rx="31.5" ry="3.1" fill="#fff" fill-opacity=".38" style="opacity:${fill > 0.02 ? 1 : 0}"/>
      <g class="c-pour-bubbles" transform="translate(0 ${y.toFixed(1)})"><circle class="tea-bubble" cx="33" cy="5" r="1.8"/><circle class="tea-bubble" cx="45" cy="9" r="1.2"/><circle class="tea-bubble" cx="39" cy="15" r="1.5"/></g>` : '';
  const lidSvg = lid ? `<g class="c-lidg ${lid === 'drop' ? 'drop' : ''}">
      <path d="M7.5 9.8 Q39 -8.5 70.5 9.8 Z" fill="rgba(255,255,255,.72)" stroke="#cdbda7" stroke-width="1.1"/>
      <path d="M16 8 Q26 0 36 -0.5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".85"/>
      <path d="M3.4 10 Q3.4 7.6 6 7.6 H72 Q74.6 7.6 74.6 10 L72.7 17.4 Q72.5 18.5 71.4 18.5 H6.6 Q5.5 18.5 5.3 17.4 Z" fill="#fffdf8" stroke="#cdbda7" stroke-width="1.2"/>
      <path d="M6.2 12.4 H71.8" stroke="#e3d6c1" stroke-width="1"/>
    </g>` : '';
  const strawSvg = straw ? '<g class="c-strawg"><line x1="41" y1="92" x2="54" y2="-22" stroke="#ff7fa0" stroke-width="5" stroke-linecap="round"/><line x1="41" y1="92" x2="54" y2="-22" stroke="#fff" stroke-width="5" stroke-dasharray="4 5" opacity=".9"/></g>' : '';
  return `<svg class="cup-svg" viewBox="0 0 78 104" width="100%" height="100%" overflow="visible" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
    <defs><clipPath id="${id}c"><path d="${BODY_IN}"/></clipPath>
      <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".32"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <linearGradient id="${id}tea" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${teaTone(tea, 15)}"/><stop offset=".35" stop-color="${tea || '#fff'}"/><stop offset="1" stop-color="${teaTone(tea, -28)}"/></linearGradient></defs>
    <ellipse cx="39" cy="100" rx="25" ry="3.2" fill="rgba(60,35,10,.16)"/>
    <g clip-path="url(#${id}c)">${liquid}${sugar ? '<g class="c-sugar" fill="none" stroke="#cd8b25" stroke-width="2" opacity=".32"><path d="M33 31 Q52 47 29 64 Q24 76 46 91"/><path d="M43 34 Q26 49 48 67 Q53 80 34 94"/></g>' : ''}${balls.join('')}
      ${ice ? `<g class="c-ice" transform="translate(0 ${Math.min(78, y + 6).toFixed(1)})">${[23, 36, 48].map((x, i) => `<g transform="translate(${x} ${i % 2 * 6})"><path d="M0 3 L6 0 L12 3 L6 6 Z" fill="#e6faff" stroke="#8bc6e7" stroke-width=".7"/><path d="M0 3 L6 6 L6 14 L0 11 Z" fill="#bce4f7" stroke="#8bc6e7" stroke-width=".7"/><path d="M6 6 L12 3 L12 11 L6 14 Z" fill="#8dcce9" stroke="#75b9db" stroke-width=".7"/><path d="M2 4 L5 5" stroke="#fff" stroke-width="1.2"/></g>`).join('')}</g>` : ''}
    </g>
    ${strawSvg}
    <path d="M6 12 L16 96 Q39 103 62 96 L72 12" fill="rgba(235,245,252,.2)" stroke="rgba(121,88,64,.9)" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12.5 20 L19 82" stroke="#fff" stroke-width="3.2" stroke-linecap="round" opacity=".55"/>
    <path d="M66 24 L61 62" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".4"/>
    <ellipse cx="39" cy="12" rx="33" ry="4.6" fill="rgba(255,255,255,.28)" stroke="rgba(121,88,64,.9)" stroke-width="1.6"/>
    ${lidSvg}
  </svg>`;
}
export function staffArt(id) { const cells = {thuViec:2,phaChe:1,online:5,quanLy:4,genZ:3,diCho:6,svDem:9,meKetTinh:8,chuBa:7}; return img(`customer-${cells[id] || 0}`, "staff-sprite"); }
