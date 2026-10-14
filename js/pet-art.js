/** Pet appearance follows the same care values used by gameplay bonuses. */
export const PET_MOODS = { hungry: 'Đói bụng', dirty: 'Cần tắm', sleepy: 'Buồn ngủ', sad: 'Buồn', happy: 'Vui vẻ', excited: 'Hào hứng', calm: 'Thư thái' };
export function petMood(p) {
  if ((p.hunger ?? 80) < 30) return 'hungry';
  if ((p.clean ?? 80) < 30) return 'dirty';
  if ((p.energy ?? 80) < 30) return 'sleepy';
  if ((p.joy ?? 80) < 35) return 'sad';
  return (p.joy ?? 80) >= 90 ? 'excited' : (p.joy ?? 80) >= 60 ? 'happy' : 'calm';
}
export function petArt(kind, mood = 'happy') {
  const cat = kind === 'meo', capy = kind === 'capybara';
  const color = cat ? '#bc976f' : capy ? '#b88d66' : '#e3a151';
  const tail = capy ? '' : `<path class="pet-tail" d="${cat ? 'M69 54q27-34 25-4q-2 14-17 12' : 'M72 53q26-22 20 1q-4 16-16 6'}" fill="none" stroke="${color}" stroke-width="9"/>`;
  const ears = capy ? '<circle cx="32" cy="24" r="8"/><circle cx="67" cy="24" r="8"/>' : `<path d="M24 31L20 6l24 18M58 24L80 6l-4 27"/><path d="M27 24l-3-12 13 12m28 0 11-12-3 13" fill="#edb2a3" stroke="none"/>`;
  const sad = ['sad','hungry','dirty'].includes(mood), sleep = mood === 'sleepy';
  const eyes = sleep ? '<path d="M31 37q5 5 10 0m18 0q5 5 10 0" fill="none"/>' : '<ellipse class="pet-eye" cx="36" cy="37" rx="3.5" ry="4.5" fill="#352820"/><ellipse class="pet-eye" cx="64" cy="37" rx="3.5" ry="4.5" fill="#352820"/><circle cx="37" cy="35" r="1" fill="white" stroke="none"/><circle cx="65" cy="35" r="1" fill="white" stroke="none"/>';
  const mouth = sad ? '<path d="M43 53q7-8 14 0" fill="none"/>' : '<path d="M43 48q7 13 14 0" fill="#e58b88"/>';
  const marks = cat ? '<path d="M41 22l4 9m5-10v10m9-9-4 9M25 38l7 3m43-3-7 3M36 66l8 2m12-2 9-2" stroke="#765742" stroke-width="3"/>' : '';
  const fx = mood === 'dirty' ? '<g class="pet-dirt" fill="#765744" stroke="none"><circle cx="25" cy="43" r="3"/><circle cx="68" cy="58" r="4"/><circle cx="38" cy="63" r="3"/></g><path class="pet-stink" d="M8 27q-8-7 0-14m80 17q8-7 0-14" fill="none" stroke="#839357"/>' : mood === 'sleepy' ? '<text x="79" y="17" font-size="17" fill="#777cad" stroke="none">z</text>' : mood === 'sad' ? '<path d="M29 44q-7 11 0 11q7 0 0-11" fill="#93cfea" stroke="none"/>' : mood === 'hungry' ? '<ellipse cx="50" cy="79" rx="22" ry="3" fill="#ded8c7"/>' : ['happy','excited'].includes(mood) ? '<path class="pet-heart" d="M87 15q-9-10-12-2q-2 7 12 14q14-7 12-14q-3-8-12 2" fill="#ee8aa1" stroke="none"/>' : '';
  return `<svg class="pet-art" viewBox="0 0 104 84" aria-hidden="true" focusable="false"><ellipse cx="51" cy="78" rx="34" ry="4" fill="#8b6b4628"/><g class="pet-body" stroke="#664b37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${tail}<ellipse cx="51" cy="60" rx="27" ry="18" fill="${color}"/><ellipse cx="51" cy="61" rx="14" ry="12" fill="#fff0d8" stroke="none"/><path d="M31 65v10q7 5 11 0V65m20 0v10q7 5 11 0V65" fill="${color}"/><g class="pet-head" fill="${color}">${ears}<path d="M24 28q26-20 52 0q11 27-26 32q-37-5-26-32"/><ellipse cx="50" cy="47" rx="20" ry="11" fill="#fff0dc" stroke="none"/>${marks}${eyes}<path d="M46 44q4-4 8 0l-4 4z" fill="#423126"/>${mouth}${cat ? '<path d="M28 47H15m14 5-12 3m54-8h13m-13 5 12 3" fill="none"/>' : ''}<ellipse cx="28" cy="45" rx="5" ry="3" fill="#ecaa9a" stroke="none"/><ellipse cx="72" cy="45" rx="5" ry="3" fill="#ecaa9a" stroke="none"/></g>${fx}</g></svg>`;
}
