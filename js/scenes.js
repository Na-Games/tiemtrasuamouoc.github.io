/**
 * Bối cảnh màn bán hàng theo địa điểm khởi nghiệp: mỗi nơi có cảnh vẽ SVG với địa danh nổi tiếng,
 * thời điểm trong ngày (sáng / chiều / hoàng hôn / đêm) và thời tiết; trang bị đã mua hiện thêm trong cảnh.
 */
import { S } from './core.js';
import * as E from './econ.js';

const W = 390, H = 200;
const cloud = (x, y, s = 1, o = 0.9) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#fff" opacity="${o}"><ellipse cx="0" cy="0" rx="15" ry="6"/><ellipse cx="-10" cy="2" rx="10" ry="5"/><ellipse cx="12" cy="2" rx="11" ry="5"/></g>`;
const palm = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q3 -22 -2 -40" stroke="#8a5a34" stroke-width="3.2" fill="none" stroke-linecap="round"/><g fill="#3f9a4f"><path d="M-2 -40 Q-18 -48 -26 -38 Q-12 -42 -2 -40Z"/><path d="M-2 -40 Q14 -52 26 -40 Q12 -44 -2 -40Z"/><path d="M-2 -40 Q-10 -58 -22 -56 Q-10 -50 -2 -40Z"/><path d="M-2 -40 Q8 -60 20 -56 Q8 -50 -2 -40Z"/><path d="M-2 -40 Q-2 -56 -3 -62 Q4 -52 -2 -40Z"/></g></g>`;
const tree = (x, y, s = 1, c = '#4a9a55') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-2" y="-14" width="4" height="14" fill="#7a5230"/><circle cx="0" cy="-22" r="12" fill="${c}"/><circle cx="-8" cy="-16" r="8" fill="${c}"/><circle cx="8" cy="-16" r="8" fill="${c}"/></g>`;
const waves = (y, c = '#fff', o = 0.35) => `<g stroke="${c}" stroke-width="1.4" fill="none" opacity="${o}" stroke-linecap="round"><path d="M10 ${y} q8 -4 16 0 t16 0"/><path d="M110 ${y + 10} q8 -4 16 0 t16 0"/><path d="M220 ${y + 4} q8 -4 16 0 t16 0"/><path d="M310 ${y + 12} q8 -4 16 0 t16 0"/><path d="M60 ${y + 18} q8 -4 16 0 t16 0"/><path d="M170 ${y + 20} q8 -4 16 0 t16 0"/></g>`;

const SCENES = {
  // Tiệm gốc: đồi xanh, nhà tranh, cây trà
  goc: () => `
    <path d="M0 150 Q70 110 150 140 T300 130 T390 140 V200 H0Z" fill="#9fd48a"/>
    <path d="M0 170 Q90 140 200 165 T390 160 V200 H0Z" fill="#7fc070"/>
    <g transform="translate(250 128)"><rect x="-26" y="0" width="52" height="32" fill="#f2d9a8"/><polygon points="-32,2 0,-26 32,2" fill="#b5663a"/><rect x="-6" y="12" width="12" height="20" fill="#8a5a34"/><rect x="-20" y="10" width="9" height="9" fill="#9bd6ee"/><rect x="11" y="10" width="9" height="9" fill="#9bd6ee"/></g>
    ${tree(60, 150, 1.1)}${tree(110, 156, 0.8, '#5aa860')}${tree(335, 150, 1)}
    <g fill="#2f7d3a"><ellipse cx="170" cy="168" rx="9" ry="6"/><ellipse cx="190" cy="172" rx="9" ry="6"/><ellipse cx="150" cy="172" rx="8" ry="5"/></g>
    ${cloud(70, 40, 1)}${cloud(300, 28, 0.8)}`,

  // Hà Nội: Tháp Rùa, Chùa Một Cột, phố cổ, liễu Hồ Gươm
  hanoi: () => `
    <g><rect x="150" y="112" width="26" height="40" fill="#f0cf72"/><rect x="178" y="124" width="30" height="28" fill="#e7a468"/><rect x="210" y="108" width="24" height="44" fill="#f2e2b4"/>
    <polygon points="148,112 163,100 178,112" fill="#8a5a3a"/><polygon points="208,108 222,96 236,108" fill="#8a5a3a"/>
    <g fill="#3f8a5a"><rect x="156" y="120" width="6" height="9"/><rect x="166" y="120" width="6" height="9"/><rect x="216" y="116" width="6" height="9"/><rect x="226" y="116" width="6" height="9"/><rect x="184" y="132" width="7" height="8"/><rect x="196" y="132" width="7" height="8"/></g></g>
    <rect y="150" width="390" height="50" fill="#86cdc4"/><g stroke="#fff" opacity=".4" stroke-width="1.3" fill="none"><path d="M10 162 q8 -4 16 0 t16 0"/><path d="M150 176 q8 -4 16 0 t16 0"/><path d="M300 166 q8 -4 16 0 t16 0"/></g>
    <g><ellipse cx="270" cy="152" rx="26" ry="6" fill="#5f8f55"/><rect x="259" y="120" width="22" height="32" fill="#dcc9a0"/><rect x="261" y="104" width="18" height="16" fill="#e9d8b0"/><rect x="264" y="92" width="12" height="12" fill="#dcc9a0"/>
    <polygon points="256,120 270,111 284,120" fill="#8a6a4a"/><polygon points="258,104 270,96 282,104" fill="#8a6a4a"/><polygon points="262,92 270,83 278,92" fill="#8a6a4a"/><circle cx="270" cy="82" r="2.2" fill="#c8553d"/>
    <g fill="#6a5a3a"><rect x="264" y="131" width="4" height="9" rx="2"/><rect x="272" y="131" width="4" height="9" rx="2"/><rect x="266" y="110" width="3" height="6" rx="1.5"/><rect x="271" y="110" width="3" height="6" rx="1.5"/></g></g>
    <g><rect x="94" y="126" width="6" height="26" fill="#b0a088"/><rect x="76" y="112" width="42" height="14" fill="#c8553d"/><path d="M68 112 Q97 86 126 112Z" fill="#7a2f2f"/><path d="M68 112 q-2 -6 4 -8 M126 112 q2 -6 -4 -8" stroke="#7a2f2f" stroke-width="2" fill="none"/><rect x="86" y="116" width="22" height="9" fill="#e7b04a"/></g>
    <g fill="#f4a6c0"><circle cx="82" cy="156" r="5"/><circle cx="94" cy="160" r="4"/><circle cx="110" cy="156" r="5"/></g><g fill="#3f9a4f"><ellipse cx="88" cy="159" rx="8" ry="2.5"/><ellipse cx="104" cy="161" rx="8" ry="2.5"/></g>
    <g><rect x="28" y="108" width="5" height="46" fill="#7a5230"/><g stroke="#4fa760" stroke-width="2" fill="none" stroke-linecap="round"><path d="M30 108 q-22 4 -22 40"/><path d="M30 108 q-12 8 -12 44"/><path d="M30 108 q18 6 16 40"/><path d="M30 108 q30 6 28 36"/></g></g>
    <g><rect x="350" y="116" width="5" height="38" fill="#7a5230"/><g stroke="#4fa760" stroke-width="2" fill="none" stroke-linecap="round"><path d="M352 116 q-24 6 -24 34"/><path d="M352 116 q-12 10 -10 38"/><path d="M352 116 q20 4 22 36"/></g></g>
    ${cloud(60, 34)}${cloud(310, 26, .8)}`,

  // TP.HCM: Landmark 81, Bitexco, Nhà thờ Đức Bà, Bưu điện
  hcm: () => `
    <g fill="#9fb8d0" opacity=".7"><rect x="0" y="128" width="26" height="72"/><rect x="28" y="118" width="20" height="82"/><rect x="50" y="134" width="30" height="66"/><rect x="330" y="124" width="22" height="76"/><rect x="354" y="136" width="36" height="64"/></g>
    <g><polygon points="300,170 308,170 312,120 304,24 296,120 300,170" fill="url(#hcmg)"/><defs><linearGradient id="hcmg" x1="0" x2="1"><stop offset="0" stop-color="#7fb2e2"/><stop offset="1" stop-color="#3a64a8"/></linearGradient></defs>
    <polygon points="300,170 318,170 312,120 304,26 292,120 284,170" fill="url(#hcmg)"/><rect x="302" y="8" width="3" height="18" fill="#3a64a8"/><g stroke="#fff" stroke-width=".8" opacity=".55"><path d="M295 60h18M293 80h22M291 100h26M289 120h30M287 140h34"/></g></g>
    <g><polygon points="238,170 262,170 262,60 252,50 238,66" fill="#5f8fc0"/><polygon points="238,66 252,50 262,60" fill="#7fb2e2"/><ellipse cx="238" cy="62" rx="7" ry="2.6" fill="#d9e8f6" stroke="#3a64a8" stroke-width="1"/><g stroke="#fff" stroke-width=".8" opacity=".5"><path d="M240 80h20M240 100h20M240 120h20M240 140h20"/></g></g>
    <g><rect x="64" y="128" width="62" height="42" fill="#c8664a"/><rect x="68" y="92" width="14" height="38" fill="#c8664a"/><rect x="108" y="92" width="14" height="38" fill="#c8664a"/><polygon points="66,92 75,64 84,92" fill="#a8503a"/><polygon points="106,92 115,64 124,92" fill="#a8503a"/><rect x="74.5" y="52" width="1.8" height="14" fill="#f2e2c4"/><rect x="70" y="58" width="11" height="1.8" fill="#f2e2c4"/><rect x="114.5" y="52" width="1.8" height="14" fill="#f2e2c4"/><rect x="110" y="58" width="11" height="1.8" fill="#f2e2c4"/><circle cx="95" cy="116" r="7" fill="#f2d9a8" stroke="#a8503a" stroke-width="1.5"/><rect x="90" y="140" width="10" height="30" rx="5" fill="#7a3a2a"/><g fill="#f2d9a8"><rect x="72" y="106" width="5" height="9" rx="2.5"/><rect x="113" y="106" width="5" height="9" rx="2.5"/></g></g>
    <g><rect x="148" y="146" width="66" height="24" fill="#f2cd6a"/><polygon points="144,146 181,128 218,146" fill="#c8664a"/><g fill="#7a3a2a"><rect x="156" y="152" width="7" height="14" rx="3.5"/><rect x="170" y="152" width="7" height="14" rx="3.5"/><rect x="184" y="152" width="7" height="14" rx="3.5"/><rect x="198" y="152" width="7" height="14" rx="3.5"/></g><circle cx="181" cy="138" r="5" fill="#fff" stroke="#7a3a2a" stroke-width="1.2"/></g>
    <path d="M0 170 H390 V200 H0Z" fill="#8f9aa6"/><path d="M0 172 H390" stroke="#fff" stroke-width="2" stroke-dasharray="10 8" opacity=".6"/>
    <g fill="#4a9a55"><circle cx="30" cy="160" r="9"/><circle cx="130" cy="164" r="7"/><circle cx="355" cy="162" r="9"/></g>
    ${cloud(180, 30, .9)}${cloud(40, 50, .7)}`,

  // Huế: Ngọ Môn, Kỳ đài, sông Hương và thuyền rồng
  hue: () => `
    <g fill="#3c7f4a"><polygon points="20,150 30,96 40,150"/><polygon points="350,152 360,100 370,152"/><polygon points="40,150 52,110 64,150"/></g>
    <g><polygon points="112,170 278,170 262,140 128,140" fill="#b9b2a2"/><rect x="128" y="138" width="134" height="6" fill="#9c9484"/>
    <g fill="#5a4a3a"><path d="M150 170 v-14 a10 10 0 0 1 20 0 v14z"/><path d="M185 170 v-18 a10 10 0 0 1 20 0 v18z"/><path d="M220 170 v-14 a10 10 0 0 1 20 0 v14z"/></g>
    <rect x="148" y="108" width="94" height="30" fill="#e7b64a"/><g fill="#b8392b"><rect x="154" y="110" width="5" height="28"/><rect x="170" y="110" width="5" height="28"/><rect x="186" y="110" width="5" height="28"/><rect x="202" y="110" width="5" height="28"/><rect x="218" y="110" width="5" height="28"/><rect x="233" y="110" width="5" height="28"/></g>
    <path d="M138 110 Q195 86 252 110 L242 114 Q195 98 148 114Z" fill="#c8392b"/><path d="M162 92 Q195 70 228 92 L220 96 Q195 82 170 96Z" fill="#e0a83a"/><path d="M178 78 Q195 62 212 78 L206 82 Q195 72 184 82Z" fill="#c8392b"/></g>
    <g><rect x="46" y="150" width="30" height="8" fill="#b9b2a2"/><rect x="52" y="140" width="18" height="10" fill="#c9c2b2"/><rect x="56" y="132" width="10" height="8" fill="#b9b2a2"/><rect x="60.5" y="80" width="2.4" height="52" fill="#7a5230"/><path d="M63 82 L88 88 L63 96Z" fill="#d83a2b"/><path d="M63 82 L88 88 L63 96Z" fill="none" stroke="#f5c542" stroke-width="1.4"/></g>
    <rect y="170" width="390" height="30" fill="#78b8c4"/><g stroke="#fff" opacity=".4" stroke-width="1.3" fill="none"><path d="M20 180 q8 -4 16 0 t16 0"/><path d="M180 188 q8 -4 16 0 t16 0"/></g>
    <g class="sc-boat" transform="translate(300 176)"><path d="M-30 0 Q0 14 34 -2 L40 -10 Q36 -4 24 -4 L-26 -4Z" fill="#e7b64a"/><path d="M34 -2 q8 -8 6 -16 q-6 4 -6 8" fill="#d83a2b"/><rect x="-14" y="-16" width="26" height="12" fill="#c8392b"/><polygon points="-18,-16 -1,-28 16,-16" fill="#e0a83a"/></g>
    ${cloud(260, 36)}${cloud(50, 40, .8)}`,

  // Đà Nẵng: Cầu Rồng, Cầu Vàng (Bà Nà), bãi biển Mỹ Khê, bánh xe Sun Wheel
  danang: () => `
    <path d="M200 160 L250 90 Q290 60 330 84 L390 160Z" fill="#4f8a68"/><path d="M260 160 L300 110 Q340 90 390 130 V160Z" fill="#5a9a74"/>
    <g><path d="M300 116 Q330 82 362 116" stroke="#e7b64a" stroke-width="4" fill="none"/><g stroke="#e7b64a" stroke-width="1.4"><path d="M310 106v10M320 99v17M330 95v21M340 97v19M350 104v12"/></g>
    <path d="M288 128 q-8 -14 4 -22 l8 4 -2 18z" fill="#a89a88"/><path d="M372 128 q8 -14 -4 -22 l-8 4 2 18z" fill="#a89a88"/></g>
    <rect y="160" width="390" height="40" fill="#6fc0d4"/><g stroke="#fff" opacity=".45" stroke-width="1.3" fill="none"><path d="M10 172 q8 -4 16 0 t16 0"/><path d="M130 182 q8 -4 16 0 t16 0"/><path d="M250 174 q8 -4 16 0 t16 0"/></g>
    <g><path d="M70 150 Q130 100 190 150" stroke="#f2a83a" stroke-width="5" fill="none"/><path d="M82 150 Q130 112 178 150" stroke="#e8923a" stroke-width="3" fill="none"/><g stroke="#f2a83a" stroke-width="2"><path d="M90 140v14M105 126v28M120 118v36M135 116v38M150 120v34M165 130v24M178 142v12"/></g><rect x="60" y="148" width="140" height="8" fill="#d9c6a0"/>
    <path d="M62 150 q-20 -6 -22 -22 q4 -10 14 -8 q10 4 14 14z" fill="#5fb85a"/><circle cx="48" cy="124" r="2.4" fill="#fff"/><path d="M42 118 l6 -10 l6 10" fill="none" stroke="#e7d24a" stroke-width="2"/></g>
    <g transform="translate(28 118)"><circle r="20" fill="none" stroke="#e8e8f0" stroke-width="2.4"/><g stroke="#e8e8f0" stroke-width="1.2"><path d="M-20 0h40M0 -20v40M-14 -14l28 28M14 -14l-28 28"/></g><g fill="#f5c542"><circle cx="-20" cy="0" r="2.4"/><circle cx="20" cy="0" r="2.4"/><circle cx="0" cy="-20" r="2.4"/><circle cx="0" cy="20" r="2.4"/></g><rect x="-2" y="20" width="4" height="22" fill="#cfcfe0"/></g>
    ${palm(335, 172, 1.1)}${palm(362, 176, .9)}${cloud(200, 34)}${cloud(80, 50, .7)}`,

  // Sa Pa: Fansipan, ruộng bậc thang, nhà sàn, sương mù
  sapa: () => `
    <polygon points="0,150 70,60 120,110 170,40 240,130 300,70 390,150" fill="#7c93b8"/><polygon points="170,40 150,70 162,68 170,76 180,68 192,72" fill="#fff"/><polygon points="70,60 58,80 68,78 74,84 82,78" fill="#fff"/><polygon points="300,70 288,90 298,88 304,94 312,88" fill="#fff"/>
    <polygon points="0,170 90,100 160,150 250,96 330,150 390,120 390,200 0,200" fill="#5f8f6a"/>
    <path d="M0 162 Q100 134 200 156 T390 150 V200 H0Z" fill="#8cc760"/><path d="M0 172 Q120 148 220 168 T390 164 V200 H0Z" fill="#b7d86a"/><path d="M0 184 Q130 164 230 182 T390 178 V200 H0Z" fill="#dcc95a"/><path d="M0 194 Q140 180 240 194 T390 192 V200 H0Z" fill="#8cc760"/>
    <g stroke="#6a8a3a" stroke-width="1" fill="none" opacity=".6"><path d="M0 162 Q100 134 200 156 T390 150"/><path d="M0 172 Q120 148 220 168 T390 164"/><path d="M0 184 Q130 164 230 182 T390 178"/></g>
    <g transform="translate(300 150)"><rect x="-16" y="0" width="32" height="18" fill="#a8764a"/><polygon points="-22,2 0,-16 22,2" fill="#4a6a9a"/><rect x="-4" y="6" width="8" height="12" fill="#6a4426"/><g stroke="#6a4426" stroke-width="2"><path d="M-14 18v8M14 18v8"/></g></g>
    <g fill="#fff" opacity=".55"><ellipse cx="90" cy="128" rx="60" ry="8"/><ellipse cx="270" cy="140" rx="70" ry="9"/><ellipse cx="170" cy="112" rx="50" ry="6"/></g>${cloud(330, 36, .8)}`,

  // Hạ Long: vịnh đá vôi, thuyền buồm
  halong: () => `
    <rect y="130" width="390" height="70" fill="#4fb3b8"/><g stroke="#fff" opacity=".4" stroke-width="1.3" fill="none"><path d="M10 150 q8 -4 16 0 t16 0"/><path d="M210 160 q8 -4 16 0 t16 0"/><path d="M110 176 q8 -4 16 0 t16 0"/><path d="M300 150 q8 -4 16 0 t16 0"/></g>
    <g fill="#5d8f78"><path d="M10 138 Q16 96 34 104 Q48 70 62 100 Q80 92 86 138Z"/><path d="M120 138 Q128 80 146 92 Q160 58 176 96 Q194 90 202 138Z"/><path d="M250 138 Q258 98 274 106 Q290 76 304 104 Q324 98 330 138Z"/></g>
    <g fill="#7fb092"><path d="M34 104 Q48 70 62 100 Q50 92 34 104Z"/><path d="M146 92 Q160 58 176 96 Q160 84 146 92Z"/><path d="M274 106 Q290 76 304 104 Q290 94 274 106Z"/></g>
    <g fill="#4a7a66"><path d="M320 138 Q326 114 340 118 Q352 100 362 120 Q376 118 380 138Z"/><path d="M90 138 Q96 118 108 120 Q116 108 124 124 Q134 124 138 138Z"/></g>
    <g class="sc-boat" transform="translate(190 168)"><path d="M-34 0 Q0 16 38 -2 L30 -8 L-28 -8Z" fill="#7a4a2a"/><g fill="#c2552c"><path d="M-16 -8 L-10 -50 L10 -44 L6 -8Z"/><path d="M6 -8 L12 -40 L30 -34 L24 -8Z"/></g><g stroke="#4a2a14" stroke-width="1.6"><path d="M-8 -52 v44M14 -42 v34"/></g></g>
    ${cloud(60, 40)}${cloud(300, 30, .9)}`,

  // Buôn Ma Thuột: đồi cà phê, nhà dài Ê Đê, voi
  bmt: () => `
    <path d="M0 140 Q80 90 170 130 T330 110 T390 130 V200 H0Z" fill="#7fb25a"/><g stroke="#5a8a3f" stroke-width="2" opacity=".6" fill="none"><path d="M0 150 Q80 104 170 140"/><path d="M0 162 Q80 118 170 152"/><path d="M180 140 Q260 104 330 126"/><path d="M180 152 Q260 118 340 138"/></g>
    <path d="M0 176 Q120 150 240 172 T390 166 V200 H0Z" fill="#5f9a46"/>
    <g><path d="M96 138 Q170 108 244 138 L236 162 H104Z" fill="#a8744a"/><path d="M84 140 Q170 96 256 140 Q170 116 84 140Z" fill="#7a5230"/><g fill="#5a3a22"><rect x="112" y="150" width="6" height="22"/><rect x="146" y="150" width="6" height="22"/><rect x="186" y="150" width="6" height="22"/><rect x="224" y="150" width="6" height="22"/></g><g fill="#3a2414"><rect x="120" y="128" width="14" height="10" rx="2"/><rect x="156" y="124" width="14" height="10" rx="2"/><rect x="196" y="124" width="14" height="10" rx="2"/></g></g>
    <g transform="translate(332 160) scale(1.1)"><ellipse cx="0" cy="-10" rx="22" ry="14" fill="#8a8a96"/><circle cx="-22" cy="-14" r="9" fill="#8a8a96"/><path d="M-30 -10 q-8 10 -4 22" stroke="#8a8a96" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="-14" cy="-16" rx="6" ry="9" fill="#9a9aa6"/><g fill="#7a7a86"><rect x="-14" y="-2" width="7" height="14"/><rect x="2" y="-2" width="7" height="14"/><rect x="12" y="-2" width="7" height="14"/></g></g>
    <g><g transform="translate(34 160)"><rect x="-1.5" y="-12" width="3" height="12" fill="#6a4426"/><circle cx="0" cy="-20" r="13" fill="#2f7d3a"/><g fill="#d8392b"><circle cx="-6" cy="-20" r="2"/><circle cx="3" cy="-14" r="2"/><circle cx="6" cy="-24" r="2"/><circle cx="-2" cy="-26" r="2"/></g></g><g transform="translate(66 168) scale(.8)"><rect x="-1.5" y="-12" width="3" height="12" fill="#6a4426"/><circle cx="0" cy="-20" r="13" fill="#2f7d3a"/><g fill="#d8392b"><circle cx="-6" cy="-20" r="2"/><circle cx="3" cy="-14" r="2"/><circle cx="6" cy="-24" r="2"/></g></g></g>
    ${cloud(60, 36)}${cloud(290, 30, .8)}`,

  // Cần Thơ: chợ nổi Cái Răng, cầu Cần Thơ, ghe trái cây
  canTho: () => `
    <g stroke="#d6dde6" stroke-width="1.6" fill="none"><path d="M70 130 L112 40 L154 130"/><path d="M112 40 L40 132 M112 40 L186 132 M112 56 L56 130 M112 56 L170 130 M112 72 L70 128 M112 72 L156 128"/></g><g stroke="#a8b4c4" stroke-width="2.2" fill="none"><path d="M0 132 H390"/></g>
    <g stroke="#d6dde6" stroke-width="1.6" fill="none"><path d="M230 130 L272 46 L314 130"/><path d="M272 46 L200 132 M272 46 L346 132 M272 60 L216 130 M272 60 L330 130"/></g>
    <g fill="#4a9a55"><ellipse cx="20" cy="144" rx="30" ry="10"/><ellipse cx="370" cy="146" rx="30" ry="10"/></g>
    <rect y="150" width="390" height="50" fill="#8fbf9a"/><rect y="150" width="390" height="50" fill="#b5a078" opacity=".35"/><g stroke="#fff" opacity=".35" stroke-width="1.3" fill="none"><path d="M10 160 q8 -4 16 0 t16 0"/><path d="M200 190 q8 -4 16 0 t16 0"/></g>
    <g class="sc-boat" transform="translate(80 172)"><path d="M-30 0 Q0 10 30 0 L26 -8 L-26 -8Z" fill="#8a5a34"/><g><circle cx="-14" cy="-14" r="6" fill="#f08a2a"/><circle cx="-4" cy="-14" r="6" fill="#f5c542"/><circle cx="6" cy="-14" r="6" fill="#f08a2a"/><ellipse cx="18" cy="-14" rx="4" ry="7" fill="#7ab23a"/></g><path d="M-6 -20 l6 -12 l6 12z" fill="#e8d28a"/></g>
    <g transform="translate(200 178)"><path d="M-26 0 Q0 9 26 0 L22 -7 L-22 -7Z" fill="#6a8a9a"/><g fill="#d8392b"><circle cx="-10" cy="-12" r="5"/><circle cx="0" cy="-12" r="5"/><circle cx="10" cy="-12" r="5"/></g></g>
    <g transform="translate(300 170)"><path d="M-30 0 Q0 10 30 0 L26 -8 L-26 -8Z" fill="#b5663a"/><g fill="#7ab23a"><ellipse cx="-12" cy="-14" rx="4" ry="8"/><ellipse cx="-2" cy="-14" rx="4" ry="8"/><ellipse cx="8" cy="-14" rx="4" ry="8"/></g><rect x="14" y="-34" width="2" height="28" fill="#6a4426"/><g fill="#f5c542"><circle cx="15" cy="-30" r="3"/><circle cx="15" cy="-22" r="3"/></g></g>
    ${palm(30, 150, 1.1)}${palm(360, 152, 1.1)}${cloud(150, 28)}${cloud(310, 24, .7)}`,

  // Cà Mau: Đất Mũi, rừng đước, cột mốc
  caMau: () => `
    <rect y="120" width="390" height="80" fill="#5fb0b8"/><g stroke="#fff" opacity=".4" stroke-width="1.3" fill="none"><path d="M10 140 q8 -4 16 0 t16 0"/><path d="M180 130 q8 -4 16 0 t16 0"/><path d="M290 150 q8 -4 16 0 t16 0"/></g>
    <path d="M0 160 Q120 140 240 158 T390 154 V200 H0Z" fill="#d9c58a"/><path d="M0 178 Q140 164 260 176 T390 172 V200 H0Z" fill="#c2a96a"/>
    <g fill="#3f8a4a"><circle cx="40" cy="128" r="16"/><circle cx="62" cy="134" r="13"/><circle cx="22" cy="138" r="12"/></g>
    <g stroke="#6a4426" stroke-width="2" fill="none"><path d="M40 144 l-10 20 M40 144 l0 22 M40 144 l10 20 M62 148 l-8 18 M62 148 l8 18"/></g>
    <g fill="#3f8a4a"><circle cx="340" cy="128" r="16"/><circle cx="318" cy="134" r="13"/><circle cx="360" cy="138" r="12"/></g>
    <g stroke="#6a4426" stroke-width="2" fill="none"><path d="M340 144 l-10 20 M340 144 l0 22 M340 144 l10 20 M318 148 l-8 18 M318 148 l8 18"/></g>
    <g transform="translate(196 140)"><polygon points="-22,30 -16,0 16,0 22,30" fill="#b9b2a2"/><rect x="-14" y="-30" width="28" height="30" fill="#cfc8b8"/><polygon points="-18,-30 0,-48 18,-30" fill="#c8392b"/><path d="M-6 -12 l6 -8 l6 8z" fill="#f5c542"/><rect x="-1" y="-70" width="2" height="24" fill="#6a4426"/><path d="M1 -70 L24 -63 L1 -56Z" fill="#d83a2b"/></g>
    <g class="sc-boat" transform="translate(110 150)"><path d="M-22 0 Q0 9 24 0 L20 -7 L-18 -7Z" fill="#7a4a2a"/><path d="M-6 -7 L0 -24 L10 -7z" fill="#e8d28a"/></g>
    <g fill="#fff"><path d="M140 40 q6 -6 12 0 q6 -6 12 0 q-6 2 -12 6 q-6 -4 -12 -6z"/><path d="M270 56 q6 -6 12 0 q6 -6 12 0 q-6 2 -12 6 q-6 -4 -12 -6z"/></g>${cloud(60, 36)}${cloud(320, 30, .8)}`,

  // Hoàng Sa – Trường Sa: đảo, hải đăng, cờ Tổ quốc, tàu
  hoangSa: () => `
    <rect y="110" width="390" height="90" fill="#2f86c8"/><rect y="110" width="390" height="40" fill="#4aa6dc" opacity=".6"/>
    <g stroke="#fff" opacity=".45" stroke-width="1.4" fill="none"><path d="M10 134 q8 -4 16 0 t16 0"/><path d="M120 150 q8 -4 16 0 t16 0"/><path d="M300 138 q8 -4 16 0 t16 0"/><path d="M60 176 q8 -4 16 0 t16 0"/><path d="M230 186 q8 -4 16 0 t16 0"/></g>
    <g fill="#8a98a8"><path d="M40 114 h60 l-6 8 h-48z"/><rect x="62" y="104" width="22" height="10"/><rect x="70" y="96" width="3" height="10"/></g>
    <ellipse cx="220" cy="160" rx="90" ry="16" fill="#f3e2a8"/><ellipse cx="220" cy="166" rx="90" ry="12" fill="#e6cf86"/>
    <g transform="translate(200 128)"><polygon points="-9,32 -6,0 6,0 9,32" fill="#fff"/><rect x="-7" y="8" width="14" height="6" fill="#d83a2b"/><rect x="-6" y="20" width="12" height="6" fill="#d83a2b"/><rect x="-8" y="-10" width="16" height="10" fill="#f5e08a"/><polygon points="-10,-10 0,-20 10,-10" fill="#d83a2b"/></g>
    <g transform="translate(260 124)"><rect x="-1" y="0" width="2.4" height="40" fill="#6a4426"/><rect x="1" y="2" width="30" height="20" fill="#da251d"/><polygon points="16,6 18.4,12.6 25.4,12.6 19.8,16.6 22,23.2 16,19 10,23.2 12.2,16.6 6.6,12.6 13.6,12.6" fill="#ffcd00" transform="translate(0 -3) scale(.9 .9) translate(1.5 1)"/></g>
    ${palm(160, 164, 1)}${palm(180, 168, .8)}${palm(300, 164, 1.1)}${palm(325, 168, .8)}
    ${cloud(60, 40)}${cloud(300, 30, .9)}${cloud(180, 56, .7)}`,
};

const todOf = (hour) => (hour >= 19.2 ? 'night' : hour >= 17 ? 'dusk' : hour < 10.6 ? 'morning' : 'day');
const SKY_CLASS = { morning: 'morning', day: 'day', dusk: 'dusk', night: 'night' };

/** HTML bối cảnh cho màn bán hàng (đặt phía sau giao diện). */
export function sellSceneHTML(hour = 10) {
  const id = SCENES[S.location] ? S.location : 'goc';
  const tod = todOf(hour);
  const lv = (k) => E.equipLevel(k);
  const deco = [
    lv('mascot') > 0 ? '<span class="sc-eq mascot">🐻</span>' : '',
    lv('led') > 0 ? `<span class="sc-eq led">LED${lv('led') > 1 ? ' ✦' : ''}</span>` : '',
    lv('xeMay') > 0 ? '<span class="sc-eq moto">🛵</span>' : '',
    lv('mayLanh') > 0 ? '<span class="sc-eq ac">❄️</span>' : '',
    lv('qcMxh') > 0 ? '<span class="sc-eq like">❤️</span><span class="sc-eq like l2">👍</span>' : '',
    S.staff && S.staff.chuBa ? '<span class="sc-eq guard">👮</span>' : '',
  ].join('');
  const wx = S.weather === 'rain' ? 'rain' : S.weather === 'hot' ? 'hot' : S.weather === 'cold' ? 'cold' : S.weather === 'cloudy' ? 'cloudy' : 'sunny';
  const celestial = tod === 'night' ? '<span class="sc-sun moon">🌙</span>' : tod === 'dusk' ? '<span class="sc-sun dusk">🌅</span>' : '<span class="sc-sun">☀️</span>';
  const rain = wx === 'rain' ? `<div class="sc-rain">${Array.from({ length: 22 }, (_, i) => `<i style="left:${(i * 4.7) % 100}%;animation-delay:${(i % 7) * 0.13}s"></i>`).join('')}</div>` : '';
  return `<div class="sell-scene" id="sellScene" data-loc="${id}" data-tod="${SKY_CLASS[tod]}" data-wx="${wx}" aria-hidden="true">
    ${celestial}<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice">${SCENES[id]().replace(/(<g class="sc-boat" transform="[^"]*">)/g, '$1<animateTransform attributeName="transform" type="translate" additive="sum" values="-24 0;0 -2;24 0" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="12s" repeatCount="indefinite"/>')}</svg>${rain}${deco}
    <span class="sc-clouds"><i>☁️</i><i>☁️</i></span></div>`;
}
/** Cập nhật buổi trong ngày theo giờ trong ca (gọi định kỳ). */
export function updateSceneTime(hour) {
  const el = document.getElementById('sellScene');
  if (!el) return;
  const tod = SKY_CLASS[todOf(hour)];
  const sell = document.getElementById('sell');
  if (sell) sell.dataset.night = tod === 'night' || tod === 'dusk' ? '1' : '';
  if (el.dataset.tod !== tod) {
    el.dataset.tod = tod;
    const sun = el.querySelector('.sc-sun');
    if (sun) { sun.textContent = tod === 'night' ? '🌙' : tod === 'dusk' ? '🌅' : '☀️'; sun.className = `sc-sun ${tod === 'night' ? 'moon' : tod === 'dusk' ? 'dusk' : ''}`; }
  }
}
export const SCENE_IDS = Object.keys(SCENES);
