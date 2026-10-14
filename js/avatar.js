/**
 * Đổi avatar / nhận diện thương hiệu: logo quán, thiết kế tem ly (khung, kiểu chữ, màu nền, khẩu hiệu, hình logo).
 */
import { LOGO_ICONS, STAMP_COLORS, SLOGANS } from './config.js';
import { S, markDirty, requestSave, esc, $, $$, sfx, clamp } from './core.js';
import { openModal, toast, bindActions, logoHTML } from './ui.js';

let sid = 0;
/** SVG tem thương hiệu (kích thước tuỳ ý). */
export function stampSVG(st, size = 150, name = S.shopName) {
  const id = 'sp' + sid++;
  const icon = st.img ? `<image href="${st.img}" x="30" y="26" width="40" height="40" clip-path="circle(20px at 20px 20px)" preserveAspectRatio="xMidYMid slice"/>` : `<text x="50" y="${st.textStyle === 'curveBottom' ? 56 : 58}" text-anchor="middle" font-size="30">${st.icon}</text>`;
  const frame = st.frame === 'round' ? `<circle cx="50" cy="50" r="47" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/>`
    : st.frame === 'rounded' ? `<rect x="4" y="4" width="92" height="92" rx="22" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/>`
      : `<circle cx="50" cy="46" r="42" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/><path d="M8 72 L50 84 L92 72 L92 90 L50 98 L8 90 Z" fill="#f06f8f"/>`;
  const dark = ['#8b5a3c', '#2f2a3a'].includes(st.bg);
  const fg = dark ? '#fff' : '#7a3b4d';
  const nm = esc(name).slice(0, 22);
  const fs = clamp(150 / Math.max(10, nm.length * 1.6), 6, 10);
  let text = '';
  if (st.textStyle === 'curveTop') text = `<path id="${id}" d="M16,50 A34,34 0 0 1 84,50" fill="none"/><text font-size="${fs}" font-weight="800" fill="${fg}" letter-spacing="1"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${nm}</textPath></text>`;
  else if (st.textStyle === 'curveBottom') text = `<path id="${id}" d="M14,56 A36,36 0 0 0 86,56" fill="none"/><text font-size="${fs}" font-weight="800" fill="${fg}" letter-spacing="1"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${nm}</textPath></text>`;
  else text = `<text x="50" y="${st.frame === 'ribbon' ? 88 : 78}" text-anchor="middle" font-size="${fs}" font-weight="800" fill="${st.frame === 'ribbon' ? '#fff' : fg}">${nm}</text>`;
  const slogan = st.slogan && st.slogan !== 'Bỏ trống' && st.textStyle !== 'curveBottom' && st.frame !== 'ribbon' ? `<text x="50" y="88" text-anchor="middle" font-size="5" fill="${fg}" opacity=".8">${esc(st.slogan)}</text>` : '';
  const iconEl = icon;
  return `<svg class="stamp-svg" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-label="Tem thương hiệu">${frame}${iconEl}${text}${slogan}</svg>`;
}

function drawSquare(img, size) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const w = img.naturalWidth || img.width, hh = img.naturalHeight || img.height;
  const s = Math.min(w, hh);
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size);
  ctx.drawImage(img, (w - s) / 2, (hh - s) / 2, s, s, 0, 0, size, size);
  return cv.toDataURL('image/jpeg', 0.82);
}
function loadImage(src) {
  return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => reject(new Error('decode')); img.src = src; });
}
/** Đọc file ảnh, cắt vuông về `size`px. Thử objectURL trước, lỗi thì dùng FileReader (một số WebView không hỗ trợ blob:). */
async function fileToDataURL(file, size = 160) {
  try {
    const url = URL.createObjectURL(file);
    try { return drawSquare(await loadImage(url), size); } finally { URL.revokeObjectURL(url); }
  } catch (e) {
    const data = await new Promise((resolve, reject) => { const fr = new FileReader(); fr.onload = () => resolve(fr.result); fr.onerror = () => reject(new Error('read')); fr.readAsDataURL(file); });
    return drawSquare(await loadImage(data), size);
  }
}
/** Nút chọn ảnh: <input type=file> trong suốt phủ lên nút nên một lần chạm mở thẳng thư viện ảnh (ổn định hơn input.click() trong WebView). */
const fileBtn = (label, key, cls) => `<label class="btn ${cls} file-btn">${label}<input type="file" accept="image/*" data-pick="${key}" aria-label="${label}"></label>`;
function bindFiles(root, onPick) {
  root.querySelectorAll('input[data-pick]').forEach((inp) => {
    inp.addEventListener('change', async () => {
      const f = inp.files && inp.files[0];
      inp.value = '';
      if (!f) return;
      try { onPick(inp.dataset.pick, await fileToDataURL(f)); } catch (e) { toast('Không đọc được ảnh, hãy thử ảnh khác (JPG/PNG)', 'err'); }
    });
  });
}

/** Modal "Logo Quán & Nhận Diện Thương Hiệu". */
export function openLogoModal() {
  const m = openModal({ id: 'logo', cls: 'small', html: logoBody() });
  const refresh = () => { m.body.innerHTML = logoBody(); bindFiles(m.body, onPick); };
  const onPick = (key, url) => { S.logo.img = url; S.stamp.img = url; markDirty('view', 'hud'); requestSave(); refresh(); toast('Đã đổi logo quán!', 'ok'); sfx('success'); };
  bindFiles(m.body, onPick);
  bindActions(m.body, {
    design: () => { m.close(); openStampDesigner(); },
    reset: () => { S.logo.img = null; S.stamp.img = null; markDirty('view'); requestSave(); refresh(); },
    x: () => m.close(),
  });
}
const logoBody = () => `<h3 class="m-title">🎨 Logo Quán & Nhận Diện Thương Hiệu</h3><p class="m-text center">Logo này hiển thị trước tên tiệm, trên trang Mạng Xã Hội và in trên tem ly trà của bạn!</p>
  <div class="logo-prev">${logoHTML(70)}<div><b>${esc(S.shopName)}</b><small>Biển hiệu · Mạng Xã Hội · Tem in ly</small></div></div>
  ${fileBtn('📷 Tải ảnh từ thư viện làm Logo', 'logo', 'pri block')}
  <button class="btn soft block" data-act="design">🎨 Thiết kế tem & Chọn mẫu logo ly</button>
  ${S.logo.img ? '<button class="btn ghost block" data-act="reset">↩️ Dùng lại biểu tượng mặc định</button>' : ''}
  <button class="btn ghost block" data-act="x">Đóng</button>`;

/** Modal "Thiết kế tem thương hiệu". */
export function openStampDesigner() {
  const d = { ...S.stamp };
  const body = () => `<h3 class="m-title">🎨 Thiết kế tem thương hiệu</h3><p class="m-text center">Tem sẽ in lên mọi ly bạn pha. Tên quán tự lấy theo tên đã đặt.</p>
    <div class="stamp-prev">${stampSVG(d, 150)}</div>
    <h5 class="grp c">Kiểu khung</h5><div class="chips">${[['round', 'Tròn'], ['rounded', 'Bo góc'], ['ribbon', 'Ruy băng']].map(([k, l]) => `<button class="chip-s ${d.frame === k ? 'on' : ''}" data-act="frame" data-v="${k}">${l}</button>`).join('')}</div>
    <h5 class="grp c">Kiểu chữ tên quán</h5><div class="chips">${[['straight', 'Thẳng hàng'], ['curveTop', 'Cong phía trên'], ['curveBottom', 'Cong phía dưới']].map(([k, l]) => `<button class="chip-s ${d.textStyle === k ? 'on' : ''}" data-act="ts" data-v="${k}">${l}</button>`).join('')}</div>
    <h5 class="grp c">Màu nền tem</h5><div class="chips colors">${STAMP_COLORS.map((c) => `<button class="swatch ${d.bg === c ? 'on' : ''}" style="background:${c}" data-act="bg" data-v="${c}" aria-label="Màu ${c}"></button>`).join('')}</div>
    <h5 class="grp c">Khẩu hiệu (tuỳ chọn)</h5><input class="field" maxlength="26" value="${esc(d.slogan || '')}" data-slogan placeholder="vd: Trà sữa mỗi ngày" aria-label="Khẩu hiệu">
    <div class="chips">${SLOGANS.map((s) => `<button class="chip-s sm" data-act="slg" data-v="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    <div class="row-between"><h5 class="grp">Hình logo</h5>${fileBtn('📷 Tải ảnh từ thư viện', 'stamp', 'soft sm')}</div>
    <div class="icons">${LOGO_ICONS.map((ic) => `<button class="ico-s ${!d.img && d.icon === ic ? 'on' : ''}" data-act="ic" data-v="${ic}">${ic}</button>`).join('')}</div>
    <button class="btn pri block" data-act="save">Lưu tem</button><button class="btn ghost block" data-act="x">Đóng</button>`;
  const m = openModal({ id: 'stamp', cls: 'small tall', html: body() });
  const redraw = () => { const sc = m.body.scrollTop; m.body.innerHTML = body(); m.body.scrollTop = sc; bindInput(); bindFiles(m.body, onPick); };
  const onPick = (key, url) => { d.img = url; redraw(); };
  const bindInput = () => $('[data-slogan]', m.body)?.addEventListener('input', (e) => { d.slogan = e.target.value; $('.stamp-prev', m.body).innerHTML = stampSVG(d, 150); });
  bindInput();
  bindFiles(m.body, onPick);
  bindActions(m.body, {
    frame: (t) => { d.frame = t.dataset.v; redraw(); }, ts: (t) => { d.textStyle = t.dataset.v; redraw(); }, bg: (t) => { d.bg = t.dataset.v; redraw(); },
    slg: (t) => { d.slogan = t.dataset.v === 'Bỏ trống' ? '' : t.dataset.v; redraw(); },
    ic: (t) => { d.icon = t.dataset.v; d.img = null; redraw(); },
    save: () => {
      S.stamp = { ...d };
      if (d.img) S.logo.img = d.img; else { S.logo.emoji = d.icon; S.logo.img = null; }
      markDirty('view', 'hud'); requestSave(); sfx('success'); toast('Đã lưu tem thương hiệu! 🎉', 'ok'); m.close();
    },
    x: () => m.close(),
  });
}
void $$;
