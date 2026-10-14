/**
 * Menu Home (1/3): Kho · Giá bán · Nâng cấp.
 */
import {
  ITEMS, TEAS, FLAVORS, TOPS, SUPPLIES, TOP_GROUPS, FLAVOR_BOTTLE, CATEGORIES, catCost, EQUIP, PET_DECOR, APPS, APP_FEE, ONLINE_GATE, SIZE_L_CAP,
} from './config.js';
import { S, markDirty, esc, fmtK, sum, sfx } from './core.js';
import * as E from './econ.js';
import { toast, fxSpark } from './ui.js';

const subtab = (k, d) => S.subtab[k] || d;
const tabs = (key, list, def) => `<div class="tabs scroll">${list.map(([id, label]) => `<button class="tab ${subtab(key, def) === id ? 'on' : ''}" data-act="sub" data-k="${key}" data-v="${id}">${label}</button>`).join('')}</div>`;
const setSub = (t) => { S.subtab[t.dataset.k] = t.dataset.v; markDirty('panel'); };

/* ===== KHO ===== */
const KHO_TABS = () => [['tra', '🫖 Trà'], ['top', '🧋 Topping'], ['dc', '🥤 Dụng cụ'], ...(FLAVORS.some((f) => S.unlocked[f]) ? [['huong', '🍓 Hương']] : [])];
function khoRow(id) {
  const it = ITEMS[id];
  const qty = E.stockQty(id), plan = S.plan[id] || 0;
  const unit = E.unitSize(id);
  const exp = E.expiringToday(id);
  const life = E.lifeDays(id);
  const remaining = E.nearestExpiry(id), stock = E.stockBreakdown(id);
  const expiryText = remaining === null ? (life ? `Lô mới: ${life} ngày` : '') : remaining <= 0 ? 'Quá hạn' : remaining === 1 ? 'Hết hạn hôm nay' : `Còn ${remaining} ngày`;
  const profit = it.price ? E.priceOf(id) - E.costOf(id) : 0;
  const pctMargin = it.price ? Math.round((profit / E.priceOf(id)) * 100) : 0;
  const step = 1;
  return `<div class="krow">
    <span class="k-ico" style="background:${it.color}33">${it.icon}</span>
    <div class="k-main"><div class="k-t"><b>${it.name}</b>${expiryText ? `<span class="life">⏳ ${expiryText}</span>` : ''}</div>
      ${it.price && it.kind !== 'supply' ? `<span class="sale">💵 Bán ${pctMargin}% (+${fmtK(profit)})</span>` : ''}
      <small>📦 Tồn ${qty}${it.kind === 'flavor' ? ' ly' : ''} · ${fmtK(E.costOf(id) * (it.kind === 'flavor' ? FLAVOR_BOTTLE : 1))}${it.kind === 'flavor' ? '/chai' : '/ly'}${exp ? ` · <em class="warn">⚠️ ${exp} hết hạn hôm nay</em>` : ''}</small>
      <small>Từ hôm trước: ${stock.old} · Nhập hôm nay còn: ${stock.fresh}${stock.unknown ? ` · Lô cũ chưa rõ ngày nhập: ${stock.unknown}` : ''}</small>
      ${(S.previousUsed?.[id] || S.lastUsed[id]) ? `<small>🏭 Hôm qua dùng: ${S.previousUsed?.[id] || 0} · Hôm nay dùng: ${S.lastUsed[id] || 0}</small>` : ''}
      ${stock.lots.length ? `<details class="stock-lots"><summary>Hạn dùng từng lô</summary>${stock.lots.map(l => `<small>${l.q} phần · ${l.days === null ? 'Không hết hạn' : l.days <= 0 ? 'Quá hạn' : l.days === 1 ? 'Hết hạn hôm nay' : `Còn ${l.days} ngày (tính cả hôm nay)`}</small>`).join('')}</details>` : ''}
      ${id === 'da' || id === 'duong' ? `<small class="supply-help">${id === 'da' ? '🧊 Làm lạnh ly' : '🍯 Tạo độ ngọt'}: 1 phần/ly. Thêm ở PHA LY; khi đóng nắp sẽ tự thêm phần còn thiếu.</small>` : ''}
      <small class="plan">${plan ? `+${plan * unit}${it.kind === 'flavor' ? ` ly (${plan} chai)` : ''} · ${fmtK(E.unitCost(id) * plan)}` : '&nbsp;'}</small></div>
    <div class="stepper"><button data-act="k-" data-id="${id}" data-step="${step}" aria-label="Giảm">−</button><input class="num" type="number" inputmode="numeric" min="0" max="999" value="${plan}" data-plan="${id}" aria-label="Số lượng ${it.name}"><button data-act="k+" data-id="${id}" data-step="${step}" aria-label="Tăng">+</button></div>
  </div>`;
}
const kho = {
  html() {
    const t = subtab('kho', 'tra');
    let list = [];
    let head = '';
    if (t === 'tra') list = TEAS.filter((i) => S.unlocked[i]);
    else if (t === 'dc') list = SUPPLIES;
    else if (t === 'huong') { list = FLAVORS.filter((i) => S.unlocked[i]); head = `<p class="note">🍓 1 chai = ${FLAVOR_BOTTLE} ly. Hạn lô mới tăng theo tủ lạnh; hạn còn lại của từng lô hiển thị bên dưới. Hết chai thì cần mua thêm.</p>`; }
    else {
      return `${tabs('kho', KHO_TABS(), 'tra')}${TOP_GROUPS.map((g) => { const items = TOPS.filter((i) => ITEMS[i].group === g && S.unlocked[i]); return items.length ? `<h5 class="grp">${g}</h5>${items.map(khoRow).join('')}` : ''; }).join('')}${khoLegend()}`;
    }
    return `${tabs('kho', KHO_TABS(), 'tra')}${head}${list.map(khoRow).join('')}${khoLegend()}`;
  },
  acts: {
    sub: setSub,
    'k+': (t) => { const id = t.dataset.id; E.setPlan(id, (S.plan[id] || 0) + +t.dataset.step); },
    'k-': (t) => { const id = t.dataset.id; E.setPlan(id, (S.plan[id] || 0) - +t.dataset.step); },
  },
  bind(root) {
    for (const inp of root.querySelectorAll('[data-plan]')) {
      inp.addEventListener('change', () => E.setPlan(inp.dataset.plan, Math.round(+inp.value || 0)));
    }
  },
};
const khoLegend = () => '<div class="legend">📦 Tồn từ hôm trước là phần còn lại chưa dùng · ưu tiên dùng lô sắp hết hạn · hàng hết hạn hôm nay được bỏ cuối ca.</div>';

/* ===== GIÁ BÁN ===== */
const GIA_TABS = () => [['tra', '🫖 Trà'], ['huong', '🍓 Hương'], ['top', '🧋 Topping'], ['size', '⬆️ Size']];
const giaRow = (id) => {
  const it = ITEMS[id];
  const cost = E.costOf(id);
  const p = E.priceOf(id);
  return `<div class="grow-row"><span class="k-ico" style="background:${it.color}33">${it.icon}</span>
    <div class="k-main"><b>${it.name}</b><small>💡 ${fmtK(p)} · Vốn ${fmtK(cost)} · Lãi ${fmtK(p - cost)}</small></div>
    <div class="pinput"><input type="number" inputmode="decimal" min="0" step="0.5" value="${p / 1000}" data-price="${id}" aria-label="Giá ${it.name}"><span>k</span></div></div>`;
};
const giaban = {
  html() {
    const t = subtab('gia', 'tra');
    let body = '';
    if (t === 'tra') body = TEAS.filter((i) => S.unlocked[i]).map(giaRow).join('');
    else if (t === 'huong') { const l = FLAVORS.filter((i) => S.unlocked[i]); body = l.length ? l.map(giaRow).join('') : '<div class="lockbox">🔒🛠️<br/>Mở khóa Hương trong Nâng cấp › Hương</div>'; }
    else if (t === 'top') { const l = TOPS.filter((i) => S.unlocked[i]); body = TOP_GROUPS.map((g) => { const x = l.filter((i) => ITEMS[i].group === g); return x.length ? `<h5 class="grp">${g}</h5>${x.map(giaRow).join('')}` : ''; }).join(''); }
    else body = `<div class="grow-row"><span class="k-ico">⬆️</span><div class="k-main"><b>Size L</b><small>💡 ${fmtK(E.priceOf('sizeL'))} · phụ thu so với size M</small></div><div class="pinput"><input type="number" inputmode="decimal" min="0" max="${SIZE_L_CAP / 1000}" step="0.5" value="${E.priceOf('sizeL') / 1000}" data-price="sizeL" aria-label="Giá size L"><span>k</span></div></div>`;
    return `<details class="warnbox"><summary>⚠️ Quy tắc giá bán <small>${E.safePrice() ? '· đã có Quản Gia' : '· chưa có Quản Gia'}</small></summary>
      <p>• Món nào (trà, hương, topping) trên <b>50k</b>: Khách chê mắc, quán vắng <b>80% khách</b>.</p>
      <p>• Một ly trên <b>120k</b>: <b>60% khách bỏ đi</b> và đánh giá 1★-2★.</p>
      <p>• Size L trên <b>20k</b> là đắt (90% khách né), size L tối đa <b>50k</b> (để đúng mức này không ai chọn và quán vắng 80%).</p>
      <p>• Hương & Topping trên <b>20k</b>: 80% khách không gọi; trên <b>30k</b>: không ai gọi.</p>
      <p class="tip">💡 Chỉ được tăng giá an toàn không bị phạt khi sở hữu <b>Quản Gia</b> (mục Nhân sự › Quản lý tập sự)!</p></details>
      ${tabs('gia', GIA_TABS(), 'tra')}${body}`;
  },
  acts: {
    sub: setSub,
  },
  bind(root) {
    root.querySelectorAll('[data-price]').forEach((inp) => inp.addEventListener('change', () => {
      E.setPrice(inp.dataset.price, Math.round(parseFloat(inp.value || '0') * 1000));
      markDirty('panel', 'board');
    }));
  },
};

/* ===== NÂNG CẤP ===== */
const NC_TABS = [['tra', '🍵 Trà'], ['huong', '🍓 Hương'], ['top', '🧋 Topping'], ['trangbi', '🛠️ Trang bị'], ['decor', '🐾 Decor Thú Cưng'], ['nv', '🏆 Nhân viên'], ['online', '📲 Online']];
function catCard(key) {
  const c = CATEGORIES[key], lvl = S.cat[key] || 0;
  return `<div class="catcard"><div><b>⭐ NÂNG CẤP CẤP ĐỘ (LEVEL)</b><h4>Hạng mục: ${c.name} (Cấp ${lvl})</h4><p>${c.desc}</p><p class="eff">Hiệu quả hiện tại: <b>+${(lvl * c.per * 100).toFixed(1)}%</b></p></div>
    <button class="btn pri sm" data-act="cat" data-k="${key}">Nâng lên Cấp ${lvl + 1}<br/>${fmtK(catCost(lvl))}</button></div>`;
}
function itemBuyRow(id, extra = '') {
  const it = ITEMS[id];
  if (S.unlocked[id]) {
    const on = S.onMenu[id];
    return `<div class="nrow"><span class="k-ico" style="background:${it.color}33">${it.icon}</span><div class="k-main"><b>${it.name}</b>${extra}</div><button class="btn sm ${on ? 'ghost' : 'pri'}" data-act="menu" data-id="${id}">${on ? '✓ Bỏ khỏi menu' : 'Thêm vào menu'}</button></div>`;
  }
  return `<div class="nrow"><span class="k-ico" style="background:${it.color}33">${it.icon}</span><div class="k-main"><b>${it.name}</b>${extra || (it.kind === 'flavor' ? '<small class="red">Hết hàng, chưa có trong menu</small>' : '')}</div><button class="btn sm gold" data-act="unlock" data-id="${id}">${fmtK(it.unlock)}<br/>Mua</button></div>`;
}
const nangcap = {
  html() {
    const t = subtab('nc', 'tra');
    let body = '';
    if (t === 'tra') body = catCard('tra') + TEAS.map((i) => itemBuyRow(i)).join('');
    else if (t === 'huong') body = catCard('huong') + `<p class="note">1 chai = ${FLAVOR_BOTTLE} ly, dùng được 7 ngày tính cả ngày mua. Mua 2 chai được ${FLAVOR_BOTTLE * 2} ly. Hết chai thì phải mua chai mới mới dùng được, chưa hết hạn bị đổ bỏ.</p>` + FLAVORS.map((i) => itemBuyRow(i, S.unlocked[i] ? `<small>Còn ${E.stockQty(i)} ly</small>` : '')).join('');
    else if (t === 'top') body = catCard('top') + TOP_GROUPS.map((g) => `<h5 class="grp">${g}</h5>` + TOPS.filter((i) => ITEMS[i].group === g).map((i) => itemBuyRow(i)).join('')).join('');
    else if (t === 'trangbi') body = EQUIP.map(equipRow).join('');
    else if (t === 'decor') body = `<h4 class="subh">🏡 Trang Trí & Nâng Cấp Nhà Thú Cưng (Pet House Decor)</h4>${S.pet ? '' : '<p class="note">Cần nhận nuôi thú cưng ở menu Thú cưng trước khi mua.</p>'}` + PET_DECOR.map((d) => `<div class="nrow"><span class="k-ico">${d.icon}</span><div class="k-main"><b>${d.name}</b><small>${d.desc}</small><small class="eff">✨ ${d.fx}</small></div><button class="btn sm ${S.petDecor[d.id] ? 'ghost' : 'gold'}" data-act="decor" data-id="${d.id}" ${S.petDecor[d.id] ? 'disabled' : ''}>${S.petDecor[d.id] ? '✓ Đã có' : fmtK(d.cost) + '<br/>Mua'}</button></div>`).join('');
    else if (t === 'nv') body = catCard('nv') + `<div class="note">Thuê & quản lý nhân viên ở menu <b>Quản lý nhân sự</b>. Mỗi cấp tăng tốc độ làm việc của toàn bộ nhân viên.</div><button class="btn pri block" data-act="goto" data-to="nhansu">🏆 Đi tới Quản lý nhân sự</button>`;
    else body = onlineHTML();
    return `<div class="tabs scroll">${NC_TABS.map(([id, l]) => `<button class="tab ${t === id ? 'on' : ''}" data-act="sub" data-k="nc" data-v="${id}">${l}</button>`).join('')}</div>${body}`;
  },
  acts: {
    sub: setSub,
    cat: (t) => { const e = E.buyCategory(t.dataset.k); if (e) { toast(e, 'err'); sfx('error'); } else { sfx('success'); fxSpark(t, 6); toast('Nâng cấp thành công!', 'ok'); } },
    menu: (t) => { const e = E.toggleMenu(t.dataset.id); if (e) toast(e, 'err'); },
    unlock: (t) => { const e = E.unlockItem(t.dataset.id); if (e) { toast(e, 'err'); sfx('error'); } else { sfx('unlock'); fxSpark(t, 8); toast(`Đã mở khóa ${ITEMS[t.dataset.id].name}!`, 'ok'); } },
    equip: (t) => { const e = E.buyEquip(t.dataset.id); if (e) { toast(e, 'err'); sfx('error'); } else { sfx('unlock'); fxSpark(t, 8); toast('Đã nâng cấp trang bị!', 'ok'); } },
    decor: (t) => { const e = E.buyDecor(t.dataset.id); if (e) { toast(e, 'err'); sfx('error'); } else { sfx('unlock'); toast('Đã mua!', 'ok'); } },
    app: (t) => { const e = E.toggleApp(t.dataset.id); if (e) { toast(e, 'err'); sfx('error'); } else toast('Đã cập nhật ứng dụng', 'ok'); },
  },
};
function equipRow(eq) {
  const lv = E.equipLevel(eq.id), next = E.equipNext(eq.id);
  const cur = lv > 0 ? eq.tiers[lv - 1] : null;
  return `<div class="erow"><span class="k-ico big">${eq.icon}</span><div class="k-main"><div class="k-t"><b>${eq.name}</b><span class="tier">${lv ? `C${lv}` : 'Chưa mua'}</span></div>
    <small>${cur ? `${cur.n}: ${cur.d}` : 'Chưa sở hữu'}</small>
    <div class="pips">${eq.tiers.map((_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</div>
    ${next ? `<button class="btn sm gold full" data-act="equip" data-id="${eq.id}">Lên C${lv + 1} · ${next.n} · ${fmtK(next.c)}</button>` : '<button class="btn sm ghost full" disabled>Đã đạt cấp tối đa</button>'}</div></div>`;
}
function onlineHTML() {
  const pr = E.onlineProgress();
  const bar = (l, v, t, f) => `<div class="gate"><span>${l}</span><div class="bar"><i style="width:${Math.min(100, v / t * 100)}%"></i></div><b>${f(v)}/${f(t)}</b></div>`;
  const ok = pr.profit >= ONLINE_GATE.profit && pr.orders >= ONLINE_GATE.orders && pr.rating >= ONLINE_GATE.rating;
  return `${catCard('online')}
    <div class="catcard col"><h4>📲 Mở bán Online (${APPS.map((a) => a.name).join(', ')})</h4>
      ${bar('💰 lợi nhuận', pr.profit, ONLINE_GATE.profit, (x) => fmtK(Math.max(0, x)))}${bar('🧋 đơn', pr.orders, ONLINE_GATE.orders, (x) => x)}${bar('⭐ đánh giá', pr.rating, ONLINE_GATE.rating, (x) => x.toFixed(1))}
      <p class="note">Khi đủ điều kiện, cả ${APPS.length} app được kích hoạt! Mỗi tablet chạy 1 app. Cần duy trì đánh giá từ 4,0★ trở lên. Phí app −${APP_FEE * 100}%. Tablet đang có: <b>${E.tabletsOwned()}/4</b>.</p></div>
    ${APPS.map((a) => `<div class="nrow"><span class="app-dot" style="background:${a.color}">${a.name[0]}</span><div class="k-main"><b>${a.name}</b><small>Mở cùng ${a.name} · cần ⭐ ${ONLINE_GATE.rating.toFixed(1)} trở lên · mỗi tablet chạy 1 app</small></div>
      <button class="btn sm ${S.apps[a.id] ? 'ghost' : ok ? 'pri' : 'ghost'}" data-act="app" data-id="${a.id}">${S.apps[a.id] ? '✓ Đang bật' : ok ? 'Bật app' : 'Chưa đủ điều kiện'}</button></div>`).join('')}`;
}

export const PANELS1 = { kho, giaban, nangcap };
void sum;
