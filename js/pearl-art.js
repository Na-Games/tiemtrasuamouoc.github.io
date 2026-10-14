/** Code-native pearl characters: readable by shape as well as color, offline. */
const PALETTES = [['#a68b78','#30221f'],['#fff4a1','#e8a51c'],['#ffe1ef','#ed6ba4'],['#e2ffd8','#65b887'],['#f1dfff','#a379da']];
const MARKS = [
  '<path d="M31 51 Q40 61 49 51" fill="none" stroke="#ffe6ba" stroke-width="3" stroke-linecap="round"/><circle cx="29" cy="41" r="3" fill="#ffe6ba"/><circle cx="51" cy="41" r="3" fill="#ffe6ba"/>',
  '<path d="M40 23 L45 35 L59 36 L48 45 L52 59 L40 51 L28 59 L32 45 L21 36 L35 35Z" fill="#fff7cb" stroke="#c98811" stroke-width="2"/>',
  '<path d="M40 57 C17 42 21 24 32 28 Q40 29 40 36 Q44 24 53 28 C68 36 52 49 40 57Z" fill="#fff1f7" stroke="#cf5389" stroke-width="2"/>',
  '<path d="M24 53 Q18 25 58 24 Q59 54 24 53Z" fill="#d8ffd5" stroke="#438a60" stroke-width="2"/><path d="M25 53 L49 33 M36 43 L35 32 M41 38 L53 39" fill="none" stroke="#438a60" stroke-width="2" stroke-linecap="round"/>',
  '<path d="M23 48 Q20 22 42 25 Q63 29 55 47 Q46 65 32 49 Q26 36 40 34 Q51 36 43 44" fill="none" stroke="#f8eeff" stroke-width="5" stroke-linecap="round"/>',
];
let serial = 0;
export function pearlIcon(type, cls = '') {
  const [light, dark] = PALETTES[type], id = `pearl-gloss-${serial++}`;
  return `<svg class="pearl-icon ${cls}" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><defs><radialGradient id="${id}" cx="30%" cy="22%" r="80%"><stop stop-color="${light}"/><stop offset="1" stop-color="${dark}"/></radialGradient></defs><circle cx="40" cy="42" r="34" fill="${dark}" opacity=".2"/><circle cx="40" cy="38" r="33" fill="url(#${id})" stroke="${dark}" stroke-width="2"/><ellipse cx="27" cy="19" rx="13" ry="7" fill="white" opacity=".6" transform="rotate(-24 27 19)"/>${MARKS[type]}<path d="M60 15V23 M56 19H64" stroke="white" stroke-width="2" stroke-linecap="round" opacity=".9"/></svg>`;
}
