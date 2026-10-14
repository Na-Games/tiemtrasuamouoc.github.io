/**
 * Dữ liệu cấu hình & cân bằng toàn game (viết mới, đối chiếu với KICH-BAN.md).
 */
import { ingredientArt } from './ingredient-art.js';
import { petArt } from './pet-art.js';
export const DEBUG = true;
export const VERSION = '1.0.0';
export const SAVE_KEY = 'tiemTraMoUoc3';
export const SAVE_VERSION = 1;

export const SHIFT_START_H = 10;
export const SHIFT_END_H = 22;
export const QUEUE_BASE = 5;
export const START_MONEY = 400000;
export const BASE_RENT = 40000;
export const BASE_UTILITY = 28000;
export const DAYS_PER_SEASON = 7;

/* ========== Hàng hóa ========== */
// kind: tea | flavor | top | supply
export const ITEMS = {
  traSua: { name: 'Trà sữa', kind: 'tea', icon: '🧋', color: '#c9a06f', cost: 4500, life: 3, price: 25000, unlock: 0, temp: 'cold', short: 'TRÀ SỮA' },
  matcha: { name: 'Matcha', kind: 'tea', icon: '🍵', color: '#8fbf6a', cost: 6000, life: 3, price: 30000, unlock: 0, temp: 'cold', short: 'MATCHA' },
  hongTra: { name: 'Hồng trà', kind: 'tea', icon: '🫖', color: '#b5563c', cost: 1500, life: 3, price: 22000, unlock: 150000, temp: 'warm', short: 'HỒNG TRÀ' },
  lucTra: { name: 'Lục trà', kind: 'tea', icon: '🍃', color: '#b9c46a', cost: 1500, life: 3, price: 22000, unlock: 150000, temp: 'cold', short: 'LỤC TRÀ' },
  olong: { name: 'Trà ô long', kind: 'tea', icon: '🏵️', color: '#a9744a', cost: 2500, life: 3, price: 28000, unlock: 250000, temp: 'warm', short: 'Ô LONG' },
  traThai: { name: 'Trà sữa Thái', kind: 'tea', icon: '🧡', color: '#e8894a', cost: 5000, life: 3, price: 30000, unlock: 300000, temp: 'cold', short: 'TRÀ THÁI' },

  vai: { name: 'Vải', kind: 'flavor', icon: '🌸', color: '#f3d7cf', cost: 4400, life: 7, price: 8000, unlock: 200000 },
  dao: { name: 'Đào', kind: 'flavor', icon: '🍑', color: '#f5b66b', cost: 4400, life: 7, price: 8000, unlock: 200000 },
  dau: { name: 'Dâu', kind: 'flavor', icon: '🍓', color: '#f07c95', cost: 4400, life: 7, price: 8000, unlock: 200000 },
  nho: { name: 'Nho', kind: 'flavor', icon: '🍇', color: '#8e5aa8', cost: 4400, life: 7, price: 9000, unlock: 200000 },
  oi: { name: 'Ổi', kind: 'flavor', icon: '🍈', color: '#f4a3a0', cost: 4400, life: 7, price: 8000, unlock: 200000 },
  xoai: { name: 'Xoài', kind: 'flavor', icon: '🥭', color: '#f2c14e', cost: 4400, life: 7, price: 9000, unlock: 200000 },
  mangCau: { name: 'Mãng cầu', kind: 'flavor', icon: '🍏', color: '#cfe3b0', cost: 4400, life: 7, price: 10000, unlock: 200000 },
  tao: { name: 'Táo', kind: 'flavor', icon: '🍎', color: '#d8e36b', cost: 4400, life: 7, price: 8000, unlock: 200000 },
  chanh: { name: 'Chanh', kind: 'flavor', icon: '🍋', color: '#e6e27a', cost: 4400, life: 7, price: 5000, unlock: 200000 },
  me: { name: 'Me', kind: 'flavor', icon: '🟤', color: '#9c6b3c', cost: 4400, life: 7, price: 7000, unlock: 200000 },
  duaGang: { name: 'Dưa gang', kind: 'flavor', icon: '🍈', color: '#f6c79a', cost: 4400, life: 7, price: 10000, unlock: 200000 },
  choco: { name: 'Chocolate', kind: 'flavor', icon: '🍫', color: '#5b3a29', cost: 4400, life: 7, price: 10000, unlock: 200000 },
  bacHa: { name: 'Bạc hà', kind: 'flavor', icon: '🌿', color: '#9fe0c0', cost: 4400, life: 7, price: 8000, unlock: 250000 },

  tcDen: { name: 'Trân châu đen', kind: 'top', group: 'Trân châu', icon: '⚫', color: '#2b1d14', cost: 2000, life: 2, price: 6000, unlock: 0 },
  tcTrang: { name: 'Trân châu trắng', kind: 'top', group: 'Trân châu', icon: '⚪', color: '#f4efe4', cost: 1500, life: 4, price: 5000, unlock: 0 },
  tcVang: { name: 'Trân châu hoàng kim', kind: 'top', group: 'Trân châu', icon: '🟡', color: '#e0a526', cost: 2500, life: 2, price: 8000, unlock: 200000 },
  tcSoi: { name: 'Trân châu sợi', kind: 'top', group: 'Trân châu', icon: '🟠', color: '#a8744e', cost: 2500, life: 2, price: 8000, unlock: 250000 },
  tcNo: { name: 'Trân châu nổ', kind: 'top', group: 'Trân châu', icon: '🔴', color: '#f28fb0', cost: 3500, life: 3, price: 9000, unlock: 300000 },
  cuNang: { name: 'Thạch củ năng', kind: 'top', group: 'Thạch', icon: '🟢', color: '#9fd49a', cost: 2000, life: 3, price: 7000, unlock: 200000 },
  thachTc: { name: 'Thạch trái cây', kind: 'top', group: 'Thạch', icon: '🟧', color: '#f5a0b8', cost: 2000, life: 3, price: 6000, unlock: 200000 },
  suongSao: { name: 'Sương sáo', kind: 'top', group: 'Thạch', icon: '⬛', color: '#1f2a24', cost: 1500, life: 3, price: 6000, unlock: 150000 },
  thachCf: { name: 'Thạch cà phê', kind: 'top', group: 'Thạch', icon: '🟫', color: '#5a3a26', cost: 2000, life: 3, price: 7000, unlock: 200000 },
  fCheese: { name: 'Foam cheese', kind: 'top', group: 'Foam', icon: '🧀', color: '#f7d35c', cost: 3500, life: 2, price: 10000, unlock: 300000 },
  fMatcha: { name: 'Foam matcha', kind: 'top', group: 'Foam', icon: '🍈', color: '#b6d48f', cost: 4000, life: 2, price: 10000, unlock: 350000 },
  fMuoi: { name: 'Foam muối', kind: 'top', group: 'Foam', icon: '🤍', color: '#f4efe4', cost: 3000, life: 2, price: 9000, unlock: 300000 },
  fUbe: { name: 'Foam ube', kind: 'top', group: 'Foam', icon: '💜', color: '#b894d8', cost: 4500, life: 2, price: 12000, unlock: 400000 },
  pmVien: { name: 'Phô mai viên', kind: 'top', group: 'Phô mai', icon: '🟨', color: '#f7d56b', cost: 4000, life: 3, price: 10000, unlock: 350000 },
  pmTuoi: { name: 'Phô mai tươi', kind: 'top', group: 'Phô mai', icon: '⬜', color: '#fff1c2', cost: 5000, life: 3, price: 12000, unlock: 400000 },
  thachPm: { name: 'Thạch phô mai', kind: 'top', group: 'Phô mai', icon: '🔶', color: '#f5e3a0', cost: 3000, life: 3, price: 9000, unlock: 300000 },

  lyM: { name: 'Ly size M + ống hút', kind: 'supply', icon: '🥤', color: '#dcd5c8', cost: 1500, life: 0, unlock: 0 },
  lyL: { name: 'Ly size L + ống hút', kind: 'supply', icon: '🥤', color: '#dcd5c8', cost: 1500, life: 0, unlock: 0 },
  da: { name: 'Đá viên', kind: 'supply', icon: '🧊', color: '#cfe8f5', cost: 1000, life: 2, unlock: 0 },
  duong: { name: 'Nước đường', kind: 'supply', icon: '🍯', color: '#e8c25a', cost: 500, life: 7, unlock: 0 },
};
for (const id of Object.keys(ITEMS)) ITEMS[id].icon = ingredientArt(id) || ITEMS[id].icon;
export const IDS = Object.keys(ITEMS);
export const byKind = (k) => IDS.filter((i) => ITEMS[i].kind === k);
export const TEAS = byKind('tea');
export const FLAVORS = byKind('flavor');
export const TOPS = byKind('top');
export const SUPPLIES = byKind('supply');
export const TOP_GROUPS = ['Trân châu', 'Thạch', 'Foam', 'Phô mai'];
export const FLAVOR_BOTTLE = 45; // ly mỗi chai
export const SIZE_L_PRICE = 7000;
export const SIZE_L_CAP = 50000;

/* ========== Khu vực khởi nghiệp ========== */
export const LOCATIONS = {
  goc: { name: 'Tiệm Trà Ban Đầu', short: 'Tiệm gốc', icon: '🏡', tag: 'Tiệm Trà Cũ', slogan: 'Không gian ấm cúng, kinh doanh bình yên', desc: 'Căn tiệm trà mộc mạc quen thuộc thuở mới mở quán. Không bị áp lực thử thách vùng miền, buôn bán thư thái theo nhịp độ nguyên bản.',
    pro: ['Không gian nguyên bản thân quen: quầy pha chế gỗ kinh điển', 'Không áp dụng bất kỳ chi phí vận hành hay bất lợi vùng miền nào'], con: ['Không hưởng các điểm thưởng đặc thù doanh thu của các tỉnh thành'], fx: {}, pool: null, map: [53.6, 57.1] },
  hanoi: { name: 'Hà Nội', icon: '🏛️', tag: 'Thủ Đô', slogan: 'Ngàn năm văn hiến & trà sen hồ Tây', desc: 'Thủ đô sôi động với nét văn hóa thưởng trà tinh tế. Khách hàng sẵn sàng chi mạnh tay cho đồ uống chuẩn vị.',
    pro: ['Lượng khách ghé quán +15%', 'Tiền boa nhận được +15%'], con: ['Khách khó tính +5%', 'Cốc cháy/hỏng −1★'], fx: { traffic: 0.15, tip: 0.15, hardCust: 0.05 }, pool: { sunny: 25, cloudy: 40, rain: 20, cold: 15 }, map: [30.8, 17.5] },
  hcm: { name: 'TP. Hồ Chí Minh', icon: '🏙️', tag: 'Đông Nam Bộ', slogan: 'Hòn ngọc Viễn Đông không bao giờ ngủ', desc: 'Đại đô thị sôi động và sầm uất bậc nhất cả nước. Khách hàng trẻ trung, thích order online và trà sữa đêm.',
    pro: ['Sau 20h: +25% giá trị đơn', 'Đơn trực tuyến (Online) +20%'], con: ['Sau 20h khách khó tính +10%', 'Điện nước +20%'], fx: { lateBill: 0.25, online: 0.2, utility: 0.2 }, pool: { sunny: 40, hot: 30, rain: 25, cloudy: 5 }, map: [37.6, 77.8] },
  hue: { name: 'Cố đô Huế', icon: '🏯', tag: 'Cố Đô Miền Trung', slogan: 'Cố đô trầm mặc & trà cung đình thanh tao', desc: 'Vùng đất kinh kỳ thơ mộng với truyền thống trà cung đình, nhịp sống từ tốn, tao nhã.',
    pro: ['Khách kiên nhẫn +25%', 'Trà đặc sản (Olong) +20% giá trị đơn'], con: ['Trời mưa −20% lượng khách', 'Trời mưa −20% đơn trực tuyến (Online)'], fx: { patience: 0.25, billTeas: { olong: 0.2 }, rainTraffic: -0.2, rainOnline: -0.2 }, pool: { cloudy: 35, rain: 40, sunny: 20, cold: 5 }, map: [44.7, 44.4] },
  danang: { name: 'Đà Nẵng', icon: '🌉', tag: 'Duyên Hải Nam Trung Bộ', slogan: 'Thành phố đáng sống & cầu Rồng phồn hoa', desc: 'Đô thị du lịch trẻ trung, văn minh và mến khách bên bờ sông Hàn thơ mộng.',
    pro: ['0% tiền giả', 'x2 điểm combo nhanh'], con: ['Khách nhạy giá: tăng giá → −10% khả năng mua', 'Không có thưởng doanh thu trực tiếp'], fx: { priceSens: 0.1, comboX2: 1 }, pool: { sunny: 45, cloudy: 25, rain: 15, hot: 15 }, map: [49.6, 46.8] },
  sapa: { name: 'Sa Pa', icon: '🏔️', tag: 'Tây Bắc', slogan: 'Xứ sở sương mù & đồi chè Tây Bắc', desc: 'Thị trấn trong sương với khí hậu se lạnh quanh năm. Khách du lịch yêu thích những ly trà nóng hổi, trà thảo mộc ấm bụng.',
    pro: ['Trà nóng (Hồng/Lục trà/Nóng) +20% giá trị đơn', 'Khách ngắm cảnh +20% kiên nhẫn'], con: ['Chi phí nguyên liệu vận chuyển +15%', 'Đồ uống lạnh −15% tiền boa'], fx: { billTeas: { hongTra: 0.2, lucTra: 0.2, olong: 0.2 }, patience: 0.2, ingCost: 0.15, coldTip: -0.15 }, pool: { cold: 45, cloudy: 30, rain: 20, sunny: 5 }, map: [14.7, 9.8] },
  halong: { name: 'Hạ Long', icon: '⛵', tag: 'Đông Bắc', slogan: 'Kỳ quan vịnh biển & du khách bốn phương', desc: 'Thành phố di sản với lượng du khách quốc tế và khách nghỉ dưỡng tấp nập suốt các mùa lễ hội du lịch.',
    pro: ['Khách du lịch +25% tiền boa', 'Đoàn khách du lịch (Đơn lớn) +10% giá trị'], con: ['Mưa bão −25% lượng khách', 'Lượng khách phụ thuộc mùa du lịch'], fx: { tip: 0.25, bill: 0.1, rainTraffic: -0.25 }, pool: { sunny: 35, cloudy: 25, rain: 30, cold: 10 }, map: [40.6, 17.9] },
  bmt: { name: 'Buôn Ma Thuột', icon: '☕', tag: 'Tây Nguyên Đại Ngàn', slogan: 'Đại ngàn đất đỏ bạt ngàn hương cà phê', desc: 'Thủ phủ cà phê ngập tràn nắng gió Tây Nguyên, khẩu vị người dân thích sự đậm đà, béo ngậy.',
    pro: ['Trà sữa, Trà sữa Thái / Foam cheese / Trân châu đen +20% giá trị đơn', 'Mặt bằng −25%'], con: ['Đơn trực tuyến (Online) −30%', 'Khách chủ yếu mua trực tiếp'], fx: { billTeas: { traSua: 0.2, traThai: 0.2 }, rent: -0.25, online: -0.3 }, pool: { sunny: 50, cloudy: 25, hot: 15, rain: 10 }, map: [48.3, 66.6] },
  canTho: { name: 'Cần Thơ', icon: '🛶', tag: 'Miền Tây Sông Nước', slogan: 'Chợ nổi Cái Răng & trái cây bốn mùa', desc: 'Thủ phủ miền Tây với trái cây tươi ngon rẻ, nhịp sống chậm rãi trên sông nước.',
    pro: ['Chi phí nguyên liệu −15%', 'Lượng khách ghé quán +8%'], con: ['Nắng nóng khiến khách ít kiên nhẫn −10%', 'Đơn trực tuyến −10%'], fx: { ingCost: -0.15, traffic: 0.08, patience: -0.1, online: -0.1 }, pool: { sunny: 40, hot: 30, rain: 25, cloudy: 5 }, map: [30.2, 82.1] },
  caMau: { name: 'Cà Mau', icon: '🦀', tag: 'Đất Mũi', slogan: 'Cực Nam Tổ quốc, rừng đước và tôm cua', desc: 'Vùng đất cuối trời với thiên nhiên hoang sơ, người dân chân chất, ít khách vãng lai nhưng quý quán quen.',
    pro: ['Mặt bằng −35%', 'Điện nước −15%', 'Khách quen: tiền boa +10%'], con: ['Lượng khách ghé quán −10%', 'Mưa lớn thường xuyên'], fx: { rent: -0.35, utility: -0.15, tip: 0.1, traffic: -0.1 }, pool: { rain: 40, sunny: 30, cloudy: 20, hot: 10 }, map: [23.8, 87.2] },
  hoangSa: { name: 'Hoàng Sa – Trường Sa', icon: '🏝️', tag: 'Quần Đảo Thiêng Liêng', slogan: 'Trà giữa biển khơi, chiến sĩ và ngư dân', desc: 'Quán trà nơi đầu sóng ngọn gió. Khách là chiến sĩ và ngư dân quý từng ly trà ngọt, tiền boa hậu hĩnh.',
    pro: ['Tiền boa +40%', 'Khách kiên nhẫn +30%'], con: ['Chi phí nguyên liệu vận chuyển +30%', 'Lượng khách ghé quán −25%', 'Đơn trực tuyến không khả dụng (−100%)'], fx: { tip: 0.4, patience: 0.3, ingCost: 0.3, traffic: -0.25, online: -1 }, pool: { sunny: 35, rain: 30, hot: 20, cloudy: 15 }, map: [77.6, 44.1] },
};
export const LOCATION_COST = 1000000;
export const SHARE_URL = 'https://nguyennhat98.github.io/';

/* ========== Mùa, thời tiết, sự kiện ngày ========== */
export const SEASONS = {
  spring: { name: 'Xuân', icon: '🌸', temp: [20, 28], pool: { sunny: 40, cloudy: 30, rain: 25, hot: 0, cold: 5 } },
  summer: { name: 'Hạ', icon: '🌞', temp: [28, 38], pool: { sunny: 35, cloudy: 15, rain: 18, hot: 32, cold: 0 } },
  autumn: { name: 'Thu', icon: '🍁', temp: [18, 27], pool: { sunny: 35, cloudy: 35, rain: 20, hot: 0, cold: 10 } },
  winter: { name: 'Đông', icon: '⛄', temp: [8, 17], pool: { sunny: 20, cloudy: 30, rain: 15, hot: 0, cold: 35 } },
};
export const SEASON_ORDER = ['spring', 'summer', 'autumn', 'winter'];
export const WEATHERS = {
  sunny: { name: 'Nắng đẹp', icon: '☀️', traffic: 0.1, tip: 'Nắng đẹp dịu mát! Khách dạo phố ghé quán tấp nập (+10%), kiên nhẫn hơn' },
  cloudy: { name: 'Nhiều mây', icon: '⛅', traffic: 0, tip: 'Trời nhiều mây dễ chịu, một ngày bán hàng bình thường' },
  rain: { name: 'Mưa rào', icon: '🌧️', traffic: -0.15, online: 0.3, tip: 'Trời mưa: khách tại quầy giảm 15% nhưng đơn online tăng 30%' },
  hot: { name: 'Nắng nóng', icon: '🥵', traffic: 0.05, coldBias: 1, tip: 'Trời nóng bức: khách ưa đồ lạnh, nhiều đá, size L' },
  cold: { name: 'Se lạnh', icon: '🥶', traffic: -0.05, warmBias: 1, tip: 'Trời se lạnh: khách chuộng trà nóng, hồng trà, ô long' },
};
export const DAY_EVENTS = [
  { id: 'trend', icon: '📈', name: 'Món hot trên mạng', desc: 'trà sữa được gọi nhiều gấp đôi, khách tò mò ghé quán (+25%)', traffic: 0.25, hotItem: 'traSua' },
  { id: 'festival', icon: '🎉', name: 'Ngày hội phố trà', desc: 'phố đông vui, lượng khách tăng mạnh (+30%)', traffic: 0.3 },
  { id: 'school', icon: '🎒', name: 'Ngày tan học sớm', desc: 'học sinh, sinh viên đổ về đông (+20%), giá trị đơn thấp hơn', traffic: 0.2, bill: -0.05, student: true },
  { id: 'payday', icon: '💵', name: 'Ngày phát lương', desc: 'dân văn phòng thoải mái chi tiêu: tiền boa +25%', tip: 0.25 },
  { id: 'heat', icon: '🔥', name: 'Đợt nóng đỉnh điểm', desc: 'đồ lạnh, nhiều đá bán chạy (+15% khách)', traffic: 0.15, coldBias: 1 },
  { id: 'quiet', icon: '🌙', name: 'Ngày thư thả', desc: 'khách ít hơn (−15%) nhưng kiên nhẫn hơn (+20%)', traffic: -0.15, patience: 0.2 },
  { id: 'critic', icon: '📸', name: 'Food reviewer ghé quán', desc: 'một reviewer nổi tiếng sẽ chấm điểm quán — cẩn thận từng ly!', traffic: 0.05, critic: true },
  { id: 'normal', icon: '🌤️', name: 'Một ngày bình thường', desc: 'không có sự kiện đặc biệt, cứ pha trà thật ngon!', traffic: 0 },
];

/* ========== Khách ========== */
export const ARCHETYPES = {
  sinhVien: { name: 'Sinh viên', tag: '🎓 Sinh viên', avatars: ['🧑‍🎓', '👩‍🎓', '🧒'], patience: 0.9, bill: 0.95, tip: 0.5, hard: 0.1, w: 24,
    lines: ['Chủ quán ơi cho em 1 ly {drink} {size}{tops}, tính giá sinh viên giùm em nha!', 'Em muốn {drink} {size}{tops}, nhanh giùm em kẻo trễ giờ học ạ!'] },
  vanPhong: { name: 'Dân văn phòng', tag: '💼 Văn phòng', avatars: ['👨‍💼', '👩‍💼', '🧑‍💻'], patience: 0.75, bill: 1.05, tip: 1.2, hard: 0.2, w: 22,
    lines: ['Cho tôi 1 ly {drink} {size}{tops}, pha nhanh giúp tôi, sắp họp rồi.', 'Một {drink} {size}{tops} nhé, nhớ đóng nắp kỹ để mang lên văn phòng.'] },
  genZ: { name: 'Gen Z', tag: '✨ Gen Z', avatars: ['🧑‍🎤', '👧', '👦'], patience: 0.85, bill: 1, tip: 0.8, hard: 0.3, w: 20,
    lines: ['Cho mình 1 ly {drink} {size}{tops} nha, chụp ảnh sống ảo cho đẹp á!', 'Ly {drink} {size}{tops} nhé chủ quán, mình check-in xong sẽ đăng story liền!'] },
  bac: { name: 'Bác lớn tuổi', tag: '👴 Bác', avatars: ['👴', '👵', '🧓'], patience: 1.35, bill: 1, tip: 1.1, hard: 0.05, w: 12,
    lines: ['Cháu ơi, cho bác 1 ly {drink} {size}{tops}, cứ từ từ thôi nhé.', 'Bác lấy ly {drink} {size}{tops} cháu nhé, đừng ngọt quá nha.'] },
  vip: { name: 'Khách VIP', tag: '👑 VIP', avatars: ['🕴️', '🤵', '👸'], patience: 0.8, bill: 1.15, tip: 2.2, hard: 0.35, w: 5,
    lines: ['Cho tôi 1 ly {drink} {size}{tops}, tôi trả giá cao nếu ngon.', 'Một {drink} {size}{tops}, làm cẩn thận, quán nào cũng chưa làm tôi hài lòng.'] },
  macCa: { name: 'Khách mặc cả', tag: '💸 Mặc cả', avatars: ['🧔', '👩‍🦰', '👨‍🦲'], patience: 1.1, bill: 0.88, tip: 0.2, hard: 0.15, w: 9,
    lines: ['Chủ quán ơi, cho 1 ly {drink} {size}{tops}, bớt cho tôi chút xíu nha?', 'Lấy 1 {drink} {size}{tops}, khách quen rồi, tính rẻ cho nhé!'] },
  reviewer: { name: 'Food reviewer', tag: '📸 Reviewer', avatars: ['🧑‍🍳', '📷'], patience: 0.8, bill: 1.1, tip: 1.5, hard: 0.5, w: 3,
    lines: ['Cho mình 1 ly {drink} {size}{tops}, mình đang quay review đó nha!', 'Mình lấy {drink} {size}{tops}, mình sẽ chấm điểm từng chi tiết nhé!'] },
  idol: { name: 'Idol / Streamer', tag: '🎤 Idol', avatars: ['👩‍🎤', '🤳'], patience: 0.8, bill: 1.1, tip: 1.3, hard: 0.3, w: 7,
    lines: ['Cho mình 1 ly {drink} {size}{tops} nha, mình đang livestream nên pha xinh xinh giúp mình!', 'Ly {drink} {size}{tops} nhé, nhớ cho ly đẹp để mình quay clip á!'] },
  gamer: { name: 'Game thủ', tag: '🎧 Game thủ', avatars: ['🎧', '🎮'], patience: 0.85, bill: 1, tip: 0.6, hard: 0.25, w: 9,
    lines: ['Cho mình 1 ly {drink} {size}{tops} nhé, đang kẹt trận, nhanh giúp mình!', 'Một {drink} {size}{tops} đi chủ quán, mình thức đêm leo rank đây.'] },
  congNhan: { name: 'Thợ & công nhân', tag: '👷 Công nhân', avatars: ['👷', '🧑‍🔧'], patience: 0.9, bill: 0.95, tip: 0.9, hard: 0.1, w: 9,
    lines: ['Cho anh 1 ly {drink} {size}{tops}, trời nóng quá, nhiều đá nha em!', 'Em ơi, một {drink} {size}{tops}, anh giải lao 10 phút thôi.'] },
  shipper: { name: 'Shipper', tag: '🛵 Shipper', avatars: ['🛵', '🧢'], patience: 0.55, bill: 1, tip: 0.7, hard: 0.3, w: 8,
    lines: ['Cho mình 1 ly {drink} {size}{tops}, nhanh nhanh giúp mình, còn đơn đang giao!', 'Một {drink} {size}{tops} mang đi, mình gấp lắm!'] },
  giaoVien: { name: 'Cô giáo', tag: '📚 Cô giáo', avatars: ['👩‍🏫', '📚'], patience: 1.1, bill: 1, tip: 1, hard: 0.15, w: 7,
    lines: ['Cô lấy 1 ly {drink} {size}{tops} nhé em, ít ngọt thôi.', 'Cho cô một {drink} {size}{tops}, cô nghỉ giữa tiết ghé qua.'] },
  be: { name: 'Bé tan học', tag: '🎈 Bé', avatars: ['🧒', '👧', '👦'], patience: 0.8, bill: 0.9, tip: 0.3, hard: 0.1, w: 8,
    lines: ['Cô/chú ơi cho con 1 ly {drink} {size}{tops} ạ!', 'Con muốn uống {drink} {size}{tops}, mẹ cho tiền rồi ạ!'] },
};

/* ========== Nâng cấp ========== */
export const CATEGORIES = {
  tra: { name: 'Trà', icon: '🍵', desc: 'Tăng 0,5% tỉ lệ khách ghé quán mỗi cấp.', key: 'traffic', per: 0.005 },
  huong: { name: 'Hương', icon: '🍓', desc: 'Tăng 0,5% thời gian kiên nhẫn chờ mỗi cấp.', key: 'patience', per: 0.005 },
  top: { name: 'Topping', icon: '⚫', desc: 'Giảm 0,5% tỉ lệ đánh giá xấu/kém mỗi cấp.', key: 'badRev', per: 0.005 },
  nv: { name: 'Nhân viên', icon: '🏆', desc: 'Tăng 1% tốc độ làm việc của nhân viên mỗi cấp.', key: 'speedStaff', per: 0.01 },
  online: { name: 'Online', icon: '📲', desc: 'Tăng 1% tần suất nổ đơn online mỗi cấp.', key: 'online', per: 0.01 },
};
export const ONLINE_GATE = { profit: 15000000, orders: 60, rating: 4.0 };
export const catCost = (lvl) => Math.round((1000 * Math.pow(1.55, lvl)) / 100) * 100;

export const EQUIP = [
  { id: 'binhRot', icon: '🏺', name: 'Bình rót trà', tiers: [{ n: 'Bình rót thủy tinh', c: 0, d: 'Rót trà nhanh hơn 10%' }, { n: 'Bình rót inox', c: 10000000, d: 'Rót nhanh hơn 25%' }, { n: 'Bình rót tự động', c: 35000000, d: 'Rót nhanh hơn 45%, ít tràn' }], key: 'pour', vals: [0.1, 0.25, 0.45] },
  { id: 'mayNap', icon: '🏭', name: 'Máy đóng nắp', tiers: [{ n: 'Máy đóng nắp bán tự động', c: 0, d: 'Đóng nắp 1,2 giây' }, { n: 'Máy đóng nắp tự động', c: 12000000, d: 'Đóng nắp nhanh hơn 30%' }, { n: 'Máy đóng nắp 2 đầu', c: 40000000, d: 'Đóng nắp nhanh hơn 55%' }], key: 'seal', vals: [0, 0.3, 0.55] },
  { id: 'khayTop', icon: '🧰', name: 'Khay topping', tiers: [{ n: 'Khay inox', c: 0, d: 'Giảm 3% chi phí topping mỗi phần' }, { n: 'Khay giữ nhiệt', c: 8000000, d: 'Giảm 8% chi phí topping mỗi phần' }, { n: 'Khay bảo quản', c: 30000000, d: 'Giảm 15% chi phí topping mỗi phần' }], key: 'topSave', vals: [0.03, 0.08, 0.15] },
  { id: 'boDungCu', icon: '🥄', name: 'Ly, đường, đá', tiers: [{ n: 'Bộ dụng cụ tiêu chuẩn', c: 0, d: 'Khách hài lòng +5% tiền boa' }, { n: 'Bộ định lượng chuẩn', c: 6000000, d: 'Tiền boa +12%' }, { n: 'Bộ pha chế chuyên nghiệp', c: 25000000, d: 'Tiền boa +25%' }], key: 'tip', vals: [0.05, 0.12, 0.25] },
  { id: 'tuLanh', icon: '❄️', name: 'Tủ lạnh', tiers: [{ n: 'Tủ lạnh thường', c: 500000, d: 'Hạn dùng nguyên liệu +1 ngày' }, { n: 'Tủ lạnh inverter', c: 3000000, d: 'Hạn dùng +2 ngày' }, { n: 'Kho lạnh mini', c: 15000000, d: 'Hạn dùng +3 ngày' }], key: 'life', vals: [1, 2, 3] },
  { id: 'mascot', icon: '🐻', name: 'Mascot quán', tiers: [{ n: 'Gấu bông mascot', c: 600000, d: 'Thêm 3% khách' }, { n: 'Mascot nhún nhảy', c: 5000000, d: 'Thêm 6% khách' }, { n: 'Mascot người đi phát tờ rơi', c: 20000000, d: 'Thêm 10% khách' }], key: 'traffic', vals: [0.03, 0.06, 0.1] },
  { id: 'led', icon: '💡', name: 'Biển hiệu đèn LED', tiers: [{ n: 'Biển hiệu LED nhỏ', c: 400000, d: 'Thu hút thêm 4% khách' }, { n: 'Biển hiệu LED neon', c: 4000000, d: 'Thu hút thêm 8% khách' }, { n: 'Biển LED 3D', c: 18000000, d: 'Thu hút thêm 12% khách' }], key: 'traffic', vals: [0.04, 0.08, 0.12] },
  { id: 'banGhe', icon: '🪑', name: 'Bàn ghế cho khách ngồi', tiers: [{ n: 'Bàn ghế nhựa', c: 500000, d: 'Thêm 2 bàn (tổng 4 → 6)' }, { n: 'Bàn ghế gỗ', c: 4000000, d: 'Thêm 2 bàn nữa, khách ngồi +10%' }, { n: 'Bàn ghế cao cấp', c: 20000000, d: 'Thêm 2 bàn nữa, khách ngồi +20%' }], key: 'tables', vals: [2, 4, 6] },
  { id: 'xeMay', icon: '🛵', name: 'Xe máy giao hàng', tiers: [{ n: 'Xe máy cũ', c: 800000, d: 'Đơn online +10%' }, { n: 'Xe máy điện', c: 6000000, d: 'Đơn online +20%' }, { n: 'Đội xe giao 3 người', c: 25000000, d: 'Đơn online +35%' }], key: 'online', vals: [0.1, 0.2, 0.35] },
  { id: 'qcMxh', icon: '📲', name: 'Quảng cáo mạng xã hội', tiers: [{ n: 'Fanpage cơ bản', c: 500000, d: 'Khách +3%, follower tăng đều' }, { n: 'Kênh TikTok chuyên nghiệp', c: 5000000, d: 'Khách +6%, follower nhanh hơn' }, { n: 'Agency chăm sóc kênh', c: 22000000, d: 'Khách +10%, follower rất nhanh' }], key: 'traffic', vals: [0.03, 0.06, 0.1] },
  { id: 'quay', icon: '📐', name: 'Mở rộng quầy', tiers: [{ n: 'Quầy dài thêm 1m', c: 500000, d: 'Hàng chờ tối đa 6 khách' }, { n: 'Quầy chữ L', c: 4500000, d: 'Hàng chờ tối đa 7 khách' }, { n: 'Quầy mở 2 mặt', c: 18000000, d: 'Hàng chờ tối đa 8 khách' }], key: 'queue', vals: [1, 2, 3] },
  { id: 'tang', icon: '🏬', name: 'Nâng tầng', tiers: [{ n: 'Tầng lửng', c: 2000000, d: 'Phục vụ cùng lúc +10 khách/ngày' }, { n: 'Tầng 2 rộng rãi', c: 15000000, d: 'Thêm 20 khách/ngày dự kiến' }, { n: 'Sân thượng chill', c: 50000000, d: 'Thêm 35 khách/ngày dự kiến' }], key: 'extraCust', vals: [10, 20, 35] },
  { id: 'mayLanh', icon: '🧊', name: 'Máy lạnh', tiers: [{ n: 'Quạt trần hơi nước', c: 1000000, d: 'Khách kiên nhẫn hơn 8%' }, { n: 'Máy lạnh treo tường', c: 8000000, d: 'Kiên nhẫn +15%' }, { n: 'Hệ thống điều hòa trung tâm', c: 30000000, d: 'Kiên nhẫn +25%' }], key: 'patience', vals: [0.08, 0.15, 0.25], util: [0.05, 0.1, 0.2] },
  { id: 'nhanDien', icon: '🏷️', name: 'Bộ nhận diện thương hiệu', tiers: [{ n: 'Tem ly & menu thương hiệu', c: 700000, d: 'Tiền boa +5%, tem ly in logo' }, { n: 'Đồng phục & túi giấy', c: 6000000, d: 'Tiền boa +10%, khách +3%' }, { n: 'Thương hiệu chuỗi', c: 25000000, d: 'Tiền boa +15%, khách +6%' }], key: 'brand', vals: [0.05, 0.1, 0.15] },
  { id: 'tablet', icon: '📟', name: 'Tablet nhận đơn online', tiers: [{ n: 'Tablet #1', c: 300000, d: 'Mở 1 app giao hàng' }, { n: 'Tablet #2', c: 600000, d: 'Mở thêm 1 app giao hàng' }, { n: 'Tablet #3', c: 1200000, d: 'Mở thêm 1 app giao hàng' }, { n: 'Tablet #4', c: 2400000, d: 'Mở thêm 1 app giao hàng' }], key: 'tablets', vals: [1, 2, 3, 4] },
  { id: 'mayPhat', icon: '🔌', name: 'Máy phát điện', tiers: [{ n: 'Máy phát điện mini', c: 2500000, d: 'Mất điện: máy đóng nắp & đèn vẫn chạy (bình trà tạm ngưng)' }, { n: 'Máy phát điện công suất lớn', c: 12000000, d: 'Mất điện chỉ chập chờn 1–2 giây, mọi máy vẫn chạy' }], key: 'gen', vals: [1, 2] },
  { id: 'giayPhep', icon: '📜', name: 'Giấy phép kinh doanh', tiers: [{ n: 'Giấy phép kinh doanh', c: 1500000, d: 'Qua kiểm tra giấy phép được thưởng, không bị phạt/đình chỉ' }], key: 'license', vals: [1] },
  { id: 'attp', icon: '🧪', name: 'Chứng nhận ATTP', tiers: [{ n: 'Chứng nhận ATTP', c: 3000000, d: 'Kiểm tra vệ sinh: thưởng lớn hơn, giảm 50% tiền phạt' }], key: 'attp', vals: [1] },
];
export const APPS = [
  { id: 'soppi', name: 'Soppi', color: '#ff7a3d' }, { id: 'topTop', name: 'Tóp Tóp', color: '#e8416a' },
  { id: 'biiiii', name: 'Biiiii', color: '#3d9bff' }, { id: 'goRap', name: 'Gờ Ráp', color: '#3dbd6b' },
];
export const APP_FEE = 0.2;
export const APP_RATING = 4.0;

export const PET_DECOR = [
  { id: 'sofa', icon: '🛋️', name: 'Sofa Thư Giãn Cho Bé', desc: 'Ghế sofa nệm êm ái, phục hồi năng lượng nhanh hơn.', cost: 2500000, fx: 'Giảm 25% tốc độ mất năng lượng' },
  { id: 'bat', icon: '🍲', name: 'Bát Ăn Hạt & Pate Cá Ngừ', desc: 'Thức ăn dinh dưỡng, no lâu hơn.', cost: 1800000, fx: '+20 độ no & +10 Vui vẻ' },
  { id: 'bien', icon: '🪧', name: 'Biển Gỗ Xương Treo Tường', desc: 'Bảng hiệu thú cưng trang trí quán.', cost: 1200000, fx: '+10% Tiền Tip toàn quán' },
  { id: 'voi', icon: '🚿', name: 'Vòi Sen Massage Bọt Mịn', desc: 'Tắm nhanh sạch hơn, bé vui hơn.', cost: 3000000, fx: '+30 Sạch & +10 Vui vẻ' },
  { id: 'say', icon: '💨', name: 'Máy Sấy Lông Tạo Kiểu', desc: 'Giữ bộ lông luôn mượt.', cost: 2200000, fx: 'Giảm 25% tốc độ mất Sạch' },
  { id: 'xit', icon: '🧴', name: 'Bình Xịt Dầu Hương Hoa', desc: 'Mùi thơm dịu mát.', cost: 1500000, fx: 'Giảm 25% tốc độ mất Vui vẻ' },
  { id: 'khan', icon: '🧣', name: 'Khăn Bandana Đỏ May Mắn', desc: 'Tăng tỉ lệ may mắn của toàn quán.', cost: 2000000, fx: '+8% Doanh thu toàn chuỗi' },
  { id: 'kim', icon: '✂️', name: 'Kìm Bấm Móng Chuyên Dụng', desc: 'Giữ móng sạch, bé thoải mái.', cost: 900000, fx: '+10 EXP chăm sóc mỗi lần chơi' },
  { id: 'sua', icon: '🧼', name: 'Sữa Tắm Thảo Dược Ve Trào', desc: 'Sạch bong, đuổi ve.', cost: 1700000, fx: 'Bảo vệ chỉ số khỏi tụt đột ngột' },
  { id: 'app', icon: '📱', name: 'App Smart Pet Spa Booking', desc: 'Đặt lịch spa thú cưng thông minh.', cost: 4200000, fx: '+30% tốc độ chăm sóc' },
];
export const PETS = {
  shiba: { name: 'Chó Shiba Vàng', icon: '🐕', adopt: 10000000, desc: 'Thần tài Quán chính, check-in hút khách, kiên nhẫn.',
    buffs: ['💰 Thần tài Quán chính: tăng +15% → +25% doanh thu & tiền Tip trên mỗi bill bán trực tiếp.', '🌟 Check-in hút khách: khách thích check-in cùng cún, tăng điểm đánh giá 5★.', '💗 Kiên nhẫn: khách kiên nhẫn đợi thêm +15% thời gian khi thấy bé cún vui.'], fx: { bill: 0.2, patience: 0.15, tip: 0.1 } },
  meo: { name: 'Mèo Mướp Chiêu Tài', icon: '🐈', adopt: 10000000, desc: 'Thần tài chi nhánh & nhượng quyền, giảm rủi ro.',
    buffs: ['🏢 Thần tài Chi nhánh: tăng +20% → +35% doanh thu các chi nhánh trực thuộc & nhượng quyền.', '📈 Vượng khí chuỗi tiền: tiếng lành đồn xa, các đối tác kinh doanh phải trả phí lạc.', '🛡️ Bảo vệ chi nhánh: giảm 50% nguy cơ thua lỗ của chuỗi chi nhánh nhượng quyền.'], fx: { branch: 0.25 } },
  capybara: { name: 'Cáp Bi Điềm Đạm', icon: '🦫', adopt: 0, secret: 7, desc: 'Thú cưng độc bản quý hiếm — nuôi chung cùng Chó/Mèo.',
    buffs: ['🏆 Quán chính: Tăng +7% doanh thu và +10% tiền Tip trên mỗi bill bán trực tiếp.', '🏢 Chuỗi chi nhánh: Tăng +10% doanh thu chi nhánh & giảm 30% rủi ro/lỗ của chuỗi.', '🏷️ Bán nguyên liệu thừa: Tăng +10% giá bán nguyên liệu, khách vẫn không còn lo hỏng.', '✨ Vận may Ly trà: Tăng +2% tỉ lệ bộc phát ×2 ~ ×5 giá trị ly mỗi khi khách thưởng thức tại quán.'], fx: { bill: 0.07, tip: 0.1, branch: 0.1 } },
};
for (const kind of Object.keys(PETS)) PETS[kind].icon = petArt(kind);
export const PET_CARE = [
  { id: 'feed', icon: '🍖', name: 'Cho ăn', cost: 20000, stat: 'hunger', gain: 35 },
  { id: 'play', icon: '🎾', name: 'Chơi cùng', cost: 0, stat: 'joy', gain: 30 },
  { id: 'bath', icon: '🛁', name: 'Tắm rửa', cost: 15000, stat: 'clean', gain: 40 },
  { id: 'sleep', icon: '😴', name: 'Cho ngủ', cost: 0, stat: 'energy', gain: 45 },
];

/* ========== Nhân sự ========== */
export const STAFF = [
  { id: 'thuViec', name: 'Lâm Phước', role: 'Thử việc chính thức', icon: '🦊', hire: 500000, wage: 165000, sec: 6.5, err: 0.1, desc: 'Nhân viên rót trà, hương, đường, đá. Bạn lấy ly, bỏ topping và dán nắp. 10% sai bill, hỏng thì đổ bỏ làm lại. Không thể thuê cùng Quản lý tập sự, Gen Z và SV ca đêm. Lương 165k/ngày.', excl: ['quanLy', 'genZ', 'svDem'], kind: 'pour' },
  { id: 'phaChe', name: 'Lý Gia Huy', role: 'Nhân viên pha chế', icon: '🦊', hire: 2000000, wage: 200000, sec: 1.5, err: 0.08, desc: 'Nhận trọn đơn của khách chờ lâu nhất và pha hết các ly khi quầy có từ 2 khách trở lên. Hưởng toàn bộ tiền tip khi kích hoạt. Lương 200k/ngày + 40k/h sau 22h. Tốc độ: 1500ms/ly.', need: { day: 30 }, kind: 'auto', minQueue: 2 },
  { id: 'online', name: 'Hoàng Minh', role: 'Nhân viên đơn online', icon: '🦊', hire: 1500000, wage: 250000, sec: 1.0, err: 0.01, desc: 'Chỉ làm đơn online: nhận trọn đơn và pha hết các ly. Đôi khi làm hỏng ly 1%, hỏng thì đổ bỏ làm lại. Lương 250k/ngày. Tốc độ: 1000ms/ly.', need: { online: true }, kind: 'online' },
  { id: 'quanLy', name: 'Đinh Nhân', role: 'Quản lý tập sự (Quản gia)', icon: '🦊', hire: 750000, wage: 200000, sec: 5.5, err: 0.05, desc: 'Nhân viên rót trà, hương, đường, đá, múc topping. Bạn chỉ lấy ly và dán nắp. 5% sai bill hỏng đổ bỏ. Đôi khi rót trà không đầy, chủ tiệm phải rót bù. Giúp tăng giá an toàn (Quản Gia). Lương 200k/ngày. Tốc độ: 280ms.', excl: ['thuViec'], kind: 'manager', safePrice: true },
  { id: 'genZ', name: 'Nhân viên Gen Z', role: 'Nhân viên Gen Z', icon: '🦊', hire: 1000000, wage: 275000, sec: 0.2, err: 0.12, desc: 'Pha chế siêu tốc từ A-Z. Mỗi khi làm 100 ly sẽ dỗi 10s, chủ tiệm phải dỗ dành nếu không sẽ nghỉ việc. Mỗi ngày đá bill 1 lần, nếu bắt được sẽ trả lại tiền bill. Lương 275k/ngày. Tốc độ: 200ms/thao tác; mỗi đơn đi qua các bước lấy cốc, rót trà, thêm nguyên liệu, đóng nắp và giao ly.', excl: ['thuViec'], kind: 'auto', minQueue: 1 },
  { id: 'diCho', name: 'Nhân viên đi chợ', role: 'Nhân viên đi chợ', icon: '🧺', hire: 1800000, wage: 180000, sec: 99, err: 0, desc: 'Khi hết nguyên liệu (trà sữa, topping, ly, đá…), tự chạy đi chợ mua về bán ngay trong ca. Nếu đi chợ nhiều lần trong ngày có thể khai gian hóa đơn đút túi riêng, hoặc mua trúng đồ hết hạn gây ngộ độc. Lương 180k/ngày.', need: { full: true }, kind: 'buyer' },
  { id: 'svDem', name: 'Sinh viên cuối tháng', role: 'Sinh viên cuối tháng', icon: '🦊', hire: 800000, wage: 300000, sec: 3.6, err: 0.1, desc: 'Chỉ làm ca đêm 22h–6h: nhận trọn đơn và pha hết các ly đang chờ. Có thể nhầm size. Sau 2h sáng túng tiền muốn bán trang bị cần chủ tiệm ngăn cản. Lương 300k/chỉ làm ca đêm.', excl: ['thuViec'], kind: 'night' },
  { id: 'meKetTinh', name: 'Nhân viên Me kết tinh', role: 'Marketing', icon: '🦊', hire: 1500000, wage: 350000, sec: 99, err: 0, desc: 'Tự động quay & đăng video TikTok viral liên tục cho quán thay vì chủ quán phải tự quay, thu hút followers và buff mạnh lượng khách ghé quán (+45%). Giảm 20% thời gian pha của toàn bộ nhân viên. Tự động phản hồi mọi đánh giá & nâng sao. Tự động đóng thuế duy trì buff 72h liên tục. Lương 350k/ngày.', kind: 'marketing', fxTraffic: 0.45 },
  { id: 'chuBa', name: 'Chú Ba', role: 'Chú bảo vệ', icon: '👮', hire: 3000000, wage: 300000, sec: 99, err: 0, desc: 'Bảo vệ tiệm toàn diện: 100% không bao giờ bị tiền giả, trộm cắp két, lừa đảo, bùng tiền; ngăn 100% khách ăn quỵt; giảm 50% tỉ lệ sai sót của nhân viên. Lương: 300k/ngày + 1% doanh thu. Có thể nộp đơn xin nghỉ việc.', need: { secret: 1 }, kind: 'guard', fxErr: 0.5, revPct: 0.01 },
];

/* ========== Chi nhánh / nhượng quyền ========== */
export const BRANCHES = [
  { id: 'truong', name: 'Cổng Trường Học', icon: '🏫', cost: 15000000, rent: 400000, ing: [0.30, 0.42], rev: [560000, 980000], unit: 'khách học sinh – sinh viên', desc: 'Tập trung đồng đảo học sinh – sinh viên, tiêu thụ trà sữa không giới hạn tạo tăng trưởng +15% khách quán chính.', bonus: '+15% khách quán chính' },
  { id: 'cnc', name: 'Khu Công Nghệ Cao', icon: '💻', cost: 35000000, rent: 900000, ing: [0.30, 0.30], rev: [1410000, 2240000], unit: 'dân văn phòng & IT', desc: 'Dân văn phòng & IT order theo nhóm lớn, đơn online chiếm 25%. Doanh thu ổn định hàng ngày.', bonus: '+10% đơn online' },
  { id: 'tttm', name: 'Trung Tâm Thương Mại (TTTM)', icon: '🏬', cost: 60000000, rent: 1800000, ing: [0.30, 0.30], rev: [3150000, 4900000], unit: 'khách mua sắm', desc: 'Tổng cục TTTM cao cấp, khách hàng chịu chi, thương hiệu nâng tầm uy tín rõ rệt.', bonus: '+uy tín' },
  { id: 'phoDiBo', name: 'Phố Đi Bộ', icon: '🚶', cost: 120000000, rent: 3500000, ing: [0.30, 0.30], rev: [6300000, 10500000], unit: 'khách du lịch', desc: 'Mặt tiền phố đi bộ sầm uất, đêm hè đông nghịt, doanh thu cao nhất toàn hệ thống.', bonus: '+Mặt bằng cao nhất' },
];
export const FRANCHISE = { fee: 100000000, royalty: 0.1, needRating: 4.5, needFollowers: 50000, max: 5, revRange: [600000, 1200000] };

/* ========== Mạng xã hội ========== */
export const ADS = [
  { id: 'fb', icon: '📱', name: 'Chạy Facebook Ads Địa Phương', desc: 'Quảng cáo cắm đề xuất người dùng khu vực xung quanh tiệm trong 3 ngày (+30% khách quán chính, +12% doanh thu chi nhánh & nhượng quyền, +1.500 Followers, tự động đăng 1 bài/ngày lên MXH)', cost: 500000, days: 3, traffic: 0.3, branch: 0.12, followers: 1500, posts: 1, videos: 1 },
  { id: 'tt', icon: '🎵', name: 'Chạy Video TikTok Ads Viral', desc: 'Đẩy video pha chế triệu view lên For You Page trong 3 ngày (+60% khách quán chính, +28% doanh thu chi nhánh & nhượng quyền, +8.000 Followers, tự động đăng 2 bài/ngày lên MXH)', cost: 2000000, days: 3, traffic: 0.6, branch: 0.28, followers: 8000, posts: 2, videos: 2 },
  { id: 'kol', icon: '👑', name: 'Thuê KOL / Food Reviewer Triệu Follower', desc: 'KOL ẩm thực trải nghiệm và khen hết lời trong 5 ngày (+100% khách quán chính, +48% doanh thu chi nhánh & nhượng quyền, +30.000 Followers, tự động đăng 3 bài/ngày lên MXH)', cost: 8000000, days: 5, traffic: 1, branch: 0.48, followers: 30000, posts: 3, videos: 3 },
  { id: 'bb', icon: '🌆', name: 'Treo Biển Billboard Ngã Tư Trọng Điểm', desc: 'Bảng hiệu LED khổng lồ rực sáng 7 ngày đêm (+150% khách quán chính, +72% doanh thu chi nhánh & nhượng quyền, +80.000 Followers, tự động đăng 4 bài/ngày lên MXH)', cost: 25000000, days: 7, traffic: 1.5, branch: 0.72, followers: 80000, posts: 4, videos: 4 },
];
export const FEED_AUTHORS = [
  { name: 'Thánh Ăn Vặt Hà Nội', av: '🧑‍🎤', badge: 'Reviewer 5★ Triệu View', tag: 'TikTok' },
  { name: 'Mèo Béo Review', av: '🐱', badge: 'Food blogger', tag: 'Reels' },
  { name: 'Hội Mê Trà Sữa', av: '🧋', badge: 'Cộng đồng 200K', tag: 'Facebook' },
  { name: 'Bạn Gen Z Sống Ảo', av: '🤳', badge: 'KOC', tag: 'TikTok' },
];
export const FEED_POSTS = [
  { pov: 'POV: Thách đấu chủ tiệm làm chiếc ly trà sữa to nhất lịch sử quán!', user: 'Hôm nay mình thách đấu quán làm chiếc ly to nhất có thể, cho mình full hết tất cả các loại topping có trong quầy!', owner: 'Nhận thách đấu liền! 1 Lít trà sữa nguyên chất đậm đà kèm trân châu đen, phô mai dẻo, pudding trứng và thạch củ năng tràn viền!', reply: 'U là trời cái ly nặng như quả tạ tay! Hút ngụm nào là ngập ngụa topping ngụm đó, phê chữ ê kéo dài! Xứng đáng triệu view! 🔥', sound: 'Nhạc Kịch Tính - Sound Thử Thách TikTok', tags: ['#challenge', '#lykhonglo', '#trasuakhonglo', '#viral', '#fyp'] },
  { pov: 'POV: Bạn chọn nhầm đường 100% và phải uống cho hết', user: 'Order 100% đường rồi mới biết sai lầm cỡ nào, ngọt kiểu chạm đáy răng luôn trời ơi!', owner: 'Bạn ơi lần sau cứ nói "ít ngọt" là bên mình giảm đường liền nhé, thương!', reply: 'Cười xỉu 😂 Cho em xin menu ít đường với ạ!', sound: 'Sound Ngọt Lịm Tim', tags: ['#ngotlim', '#trasua', '#review', '#fyp'] },
  { pov: 'Review thật lòng: quán trà nhỏ mà ly nào cũng chỉn chu', user: 'Mình ghé quán này 3 lần rồi, lần nào ly cũng đầy, topping tươi, bạn nhân viên dễ thương lắm!', owner: 'Cảm ơn bạn đã tin tưởng! Quán sẽ cố gắng giữ vững chất lượng ạ ❤️', reply: 'Đúng luôn, hôm qua mình cũng ghé, trân châu dai ngon xỉu.', sound: 'Lofi Chill Quán Cafe', tags: ['#reviewquan', '#trasuangon', '#chill'] },
  { pov: 'Ngày mưa ngồi quán trà, cầm ly nóng hổi thấy đời bình yên', user: 'Trời mưa nên mình trốn vào quán trà, ly hồng trà nóng bụng ấm hết cả người.', owner: 'Mưa thì cứ ghé quán trú chân, bên mình luôn có trà nóng chờ bạn nhé ☔', reply: 'Mê cái vibe quán ghê, chỗ ngồi xinh xỉu.', sound: 'Rainy Day Lofi', tags: ['#ngaymua', '#traNong', '#chill'] },
  { pov: 'Thử thách 10 vị topping trong 1 ly: có nên thử?', user: 'Mình bắt đầu thử thách 10 topping trong 1 ly, kết quả khiến cả team cười không ngậm được mồm.', owner: 'Bên mình giới hạn 4 topping/ly nên bạn nhớ chọn món tủ nhé 😆', reply: 'Chỉ 4 thôi sao 😭 cho 5 được không chủ quán!', sound: 'Funny Beat TikTok', tags: ['#thachthuc', '#topping', '#hai'] },
];

/* ========== Vườn ========== */
export const SEEDS = [
  { id: 'dauTay', name: 'Dâu Tây Đà Lạt', icon: '🍓', price: 15000, days: 2, yield: [20, 30], gives: 'dau' },
  { id: 'daoTien', name: 'Đào Tiên Giòn Ngọt', icon: '🍑', price: 15000, days: 2, yield: [20, 30], gives: 'dao' },
  { id: 'xoaiCat', name: 'Xoài Cát Hòa Lộc', icon: '🥭', price: 18000, days: 3, yield: [22, 32], gives: 'xoai' },
  { id: 'bupTra', name: 'Búp Trà Xanh Cổ Thụ', icon: '🌳', price: 20000, days: 3, yield: [25, 35], gives: 'lucTra' },
  { id: 'bacHaSeed', name: 'Bạc Hà Thơm', icon: '🌿', price: 10000, days: 1, yield: [15, 25], gives: 'bacHa' },
  { id: 'chanhVang', name: 'Chanh Vàng Quý Tộc', icon: '🍋', price: 12000, days: 1, yield: [18, 28], gives: 'chanh' },
];
export const PLOTS = 16;
export const PLOTS_START = 6;
export const plotCost = (n) => Math.round((60000 * Math.pow(1.25, n - PLOTS_START)) / 1000) * 1000;

/* ========== Thuế & ngân hàng ========== */
export const TAX = { minRate: 0.05, maxRate: 0.15, hours: 72, traffic: 0.15, speed: 0.15, theft: 0.15, lucky: 0.15 };
export const BANK = { interest: 0.01, lockShifts: 7, max: 99e9, starBonus: 0.1, bigBonus: 0.05 };

/* ========== Sưu tầm ========== */
export const SECRET_RECIPES = [
  { id: 's1', name: 'Trà Hoa Mơ Sương', icon: '🌸', desc: 'Hương mơ rừng dịu nhẹ.' },
  { id: 's2', name: 'Sữa Tuyết Núi Cao', icon: '🏔️', desc: 'Sữa lạnh tạo lớp foam tuyết.' },
  { id: 's3', name: 'Trà Đào Cam Sả Vàng', icon: '🍊', desc: 'Công thức gia truyền.' },
  { id: 's4', name: 'Matcha Cổ Điển Kyoto', icon: '🍵', desc: 'Matcha nghiền đá.' },
  { id: 's5', name: 'Trân Châu Mật Ong Rừng', icon: '🍯', desc: 'Trân châu nấu mật.' },
  { id: 's6', name: 'Trà Ô Long Hồng Ngọc', icon: '💎', desc: 'Ô long ủ hoa hồng.' },
  { id: 's7', name: 'Bí Kíp Sương Sáo Trăng Rằm', icon: '🌕', desc: 'Sương sáo trăng rằm.' },
];
export const GIFT_COST = 30000;
export const GACHA = {
  names: ['Lá trà non', 'Sữa tươi', 'Đường mía', 'Đá bào', 'Ly giấy xinh', 'Ống hút tre', 'Đào tiên', 'Vải đầu mùa', 'Nồi trân châu', 'Flan nhà làm', 'Ấm trà gốm', 'Matcha thượng hạng', 'Ô long núi cao', 'Foam mây trời', 'Dấu chân thú cưng', 'Trà hoa ngàn cánh', 'Trân châu ngọc bích', 'Ly trà sao băng'],
  icons: ['🍃', '🥛', '🍬', '🧊', '🥤', '🎋', '🍑', '🌸', '🍲', '🍮', '🫖', '🍵', '🏔️', '☁️', '🐾', '💮', '💎', '🌠'],
  rarities: ['C', 'C', 'C', 'C', 'C', 'C', 'U', 'U', 'U', 'U', 'U', 'R', 'R', 'R', 'E', 'E', 'L', 'L'],
  weights: { C: 52, U: 28, R: 13, E: 5.5, L: 1.5 },
  rarityName: { C: 'Thường', U: 'Khá hiếm', R: 'Hiếm', E: 'Cực hiếm', L: 'Huyền thoại' },
};

/* ========== Bạn bè ========== */
export const NPC_FRIENDS = [
  { id: 'f1', name: 'Quán Nhà Bà Ngoại', av: '👵', rating: 4.6, rich: 2.4e6 },
  { id: 'f2', name: 'Trà Sữa Mây Hồng', av: '☁️', rating: 4.3, rich: 1.1e6 },
  { id: 'f3', name: 'Cửa Hàng Mèo Mun', av: '🐈‍⬛', rating: 4.8, rich: 5.6e6 },
  { id: 'f4', name: 'Tiệm Gió Biển', av: '🌊', rating: 4.1, rich: 7.5e5 },
];

/* ========== Giao diện & logo ========== */
export const THEMES = {
  cream: { name: 'Kem sữa', bg: '#FDF0DF', card: '#FFFAF2', accent: '#EE7A96', accent2: '#F5A3B7', soft: '#FFE1E8' },
  nau: { name: 'Nâu cà phê', bg: '#F1E6DA', card: '#FBF5EE', accent: '#9A6444', accent2: '#C79A7A', soft: '#EBD9C8' },
  socola: { name: 'Sô cô la', bg: '#EADFD3', card: '#F8F1EA', accent: '#6B4226', accent2: '#A27B5C', soft: '#E0CDBB' },
  dau: { name: 'Hồng dâu', bg: '#FFEFF3', card: '#FFF8FA', accent: '#E0507F', accent2: '#F29AB5', soft: '#FFD6E2' },
  camdao: { name: 'Cam đào', bg: '#FFF0E2', card: '#FFF8F0', accent: '#EA8A55', accent2: '#F5B592', soft: '#FFDFC8' },
  thai: { name: 'Trà Thái', bg: '#FFF1DE', card: '#FFF8EC', accent: '#E07B39', accent2: '#F0A870', soft: '#FFDDBA' },
  chanh: { name: 'Vàng chanh', bg: '#FBF8DC', card: '#FFFDF0', accent: '#C9AA2E', accent2: '#E0CC6A', soft: '#F4EDB0' },
  matcha: { name: 'Xanh matcha', bg: '#EEF4E2', card: '#F8FBEF', accent: '#5FA95F', accent2: '#98CC98', soft: '#D7EFD9' },
  bacha: { name: 'Bạc hà', bg: '#E8F6F1', card: '#F5FBF9', accent: '#4FAF93', accent2: '#8DCDB8', soft: '#CDEDE3' },
  bien: { name: 'Xanh biển', bg: '#E9F2FB', card: '#F6FAFE', accent: '#4A8BD0', accent2: '#8DB8E6', soft: '#D0E3F6' },
  khoai: { name: 'Tím khoai môn', bg: '#F0EAFA', card: '#F9F6FD', accent: '#8F6BC8', accent2: '#B79BE0', soft: '#E1D5F4' },
  dem: { name: 'Đêm dịu', bg: '#2B2540', card: '#3A3356', accent: '#E58CB3', accent2: '#F0B0CC', soft: '#51477A', dark: true },
};
export const LOGO_ICONS = ['🧋', '🦊', '🐧', '🐻', '🦔', '🐥', '🦌', '🦉', '🐢', '🐹', '🦋', '🦝', '🐻', '🐰', '🐼', '🍓', '🍊', '🥭', '💎', '🌈', '☁️', '☀️', '🌙', '🎈', '🎁', '🍰', '🍦', '🧁', '🍩', '🍪', '💗', '⭐', '✨', '👑', '🎀'];
export const STAMP_COLORS = ['#ffffff', '#fde8cf', '#ffd6e0', '#d6f2e4', '#8b5a3c', '#2f2a3a', '#ffe08a', '#e3d6ff'];
export const SLOGANS = ['Trà sữa mỗi ngày', 'Ngon từ giọt đầu', 'Pha bằng cả trái tim', 'Nhỏ mà có võ', 'Chill cùng trà sữa', 'Bỏ trống'];
export const SHIFT_MINUTES = [3, 4, 5];
export const CHANGELOG = [
  'v1.0: Toàn màn hình, màn mở đầu gọn đẹp, hướng dẫn chi tiết + hướng dẫn lần đầu (có bỏ qua), quầy pha chế vẽ lại, bản đồ & thẻ địa điểm có hình nền, khách đến đều và chậm hơn, hiệu ứng nổ/combo mượt hơn, sửa tải logo.',
  'v0.9: Làm lại toàn bộ giao diện & vòng chơi theo kịch bản chi tiết (15 menu, pha chế có hiệu ứng, sảnh trà, chi nhánh, nhân sự…).',
  'Thêm 2 mini game: Milk Tea Crush và Trân Châu Nổ.',
  'Thêm khởi nghiệp xuyên Việt với 10 địa điểm, thú cưng, vườn cây 16 ô.',
];
