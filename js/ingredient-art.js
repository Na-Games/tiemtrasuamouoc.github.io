/** Small, local vector icons for ingredients without a matching sprite. */
const leaf = '<path d="M31 17Q29 4 43 5Q44 16 31 17" fill="#73a949"/><path d="M30 18l4-11" fill="none"/>';
const bowl = (color, garnish = '') => `<ellipse cx="32" cy="49" rx="24" ry="7" fill="#d7bb93" stroke="none"/><path d="M8 32h48l-6 17q-18 9-36 0z" fill="#f9e7c6"/><path d="M11 32q0-8 11-10q-2-8 8-9q3-7 8 0q13 2 10 10q9 2 6 9z" fill="${color}"/><path d="M18 30q9-6 23-1M26 20q6-3 13 0" fill="none" stroke="#fff" opacity=".7"/>${garnish}`;
const art = {
  vai: ['Vải', `<circle cx="22" cy="34" r="17" fill="#e96578"/><path d="M10 25l5 3m3-9 3 4m-8 12 4 3m8-8 4 3m-11 10 5-2m6-1 4 2" stroke="#a94250"/><circle cx="43" cy="38" r="17" fill="#fff5df"/><ellipse cx="44" cy="38" rx="7" ry="10" fill="#754331"/>${leaf}`],
  oi: ['Ổi', `<path d="M30 16C5 7-1 42 16 54q18 8 29-7q12-26-15-31" fill="#9dc967"/>${leaf}<ellipse cx="42" cy="40" rx="17" ry="20" fill="#87b554"/><ellipse cx="42" cy="40" rx="13" ry="16" fill="#ffb0a4"/><path d="M39 34l1 2m6-3v2m-9 8 2-1m7 2 1 2m-5 3v2" stroke="#bf8050" stroke-width="3"/>`],
  mangCau: ['Mãng cầu', `<path d="M30 14Q7 9 7 35q3 24 27 22q25-6 22-28q-6-20-26-15" fill="#98b960"/>${leaf}<path d="M14 25l4-4 4 5 4-5 5 5 5-4 5 4 4-4m-30 14 5-5 5 5 5-5 5 5 5-5 5 5m-29 10 5-5 5 5 5-5 5 5 5-5" fill="none" stroke="#627d3f"/>`],
  me: ['Me', '<path d="M19 8q-8 7-4 16q-8 9 0 17q-2 16 12 16q14-3 12-14q10-8 2-17q3-14-11-16z" fill="#ab7446"/><path d="M17 23q12 7 22 1m-23 17q10 6 22 1" fill="none"/><path d="M45 10q9 8 2 18q9 12-1 23" fill="none" stroke="#dec097" stroke-width="6"/>'],
  duaGang: ['Dưa gang', '<ellipse cx="27" cy="31" rx="24" ry="20" fill="#edd78d"/><path d="M14 15q-9 18 0 32m13-35q-10 21 0 38m12-35q-2 14 4 22" fill="none" stroke="#85aa57" stroke-width="4"/><path d="M26 36l32-13q8 30-25 34z" fill="#a2bc6c"/><path d="M29 38l25-9q3 20-19 24z" fill="#fff0bc"/><path d="M36 42l2 1m6-4 2 1m-5 7 2 1" stroke="#d69b53"/>'],
  duong: ['Nước đường', '<path d="M23 11h18v9l8 6v29H15V26l8-6z" fill="#fff1d3"/><path d="M18 34h28v18H18z" fill="#e7b650" stroke="none"/><path d="M24 3h17v9H24z" fill="#aa8860"/><path d="M40 5h13v5H40" fill="#aa8860"/><path d="M21 29v15" stroke="#fff" stroke-width="3"/><path d="M54 15q-7 9 0 12q7-3 0-12" fill="#e9b947"/>'],
  fMatcha: ['Foam matcha', bowl('#a8c77b','<path d="M40 23q-2-13 10-12q3 10-10 12" fill="#608d38"/>')],
  fCheese: ['Foam cheese', bowl('#ffe7a5','<path d="M39 31l15-3v10H39z" fill="#eabb4a"/><circle cx="44" cy="35" r="1.5" fill="#bd8d31"/>')],
  fMuoi: ['Foam muối', bowl('#fffaf0','<path d="M43 13l2 2m5 3 2 2m-9 1 2 2" stroke="#a6b5bd" stroke-width="3"/>')],
  fUbe: ['Foam ube', bowl('#c5a0df','<ellipse cx="47" cy="35" rx="9" ry="6" fill="#9d6db5"/><ellipse cx="47" cy="35" rx="5" ry="4" fill="#d4bce6"/>')],
  tcSoi: ['Trân châu sợi', '<ellipse cx="32" cy="45" rx="27" ry="12" fill="#efdbbd"/><path d="M12 35q8-17 14-3t13-4t12 7M10 42q8-17 14-3t13-4t15 7M17 47q8-13 15-2t17-4" fill="none" stroke="#ad7446" stroke-width="6"/>'],
  cuNang: ['Thạch củ năng', '<path d="M7 25l16-7 14 8v16l-16 8-14-9z" fill="#e9f0df"/><path d="M30 36l16-7 13 8v15l-16 8-13-9z" fill="#dbe9d4"/><path d="M7 25l14 8 16-7m-16 7v17m9-14 13 8 16-7m-16 7v16" fill="none"/><path d="M35 8l10 3-3 7-10-3z" fill="#fff9e4"/>'],
  pmTuoi: ['Phô mai tươi', bowl('#fff5d7')],
  thachPm: ['Thạch phô mai', '<path d="M6 23l19-8 19 10v23l-20 10L6 47z" fill="#fff0c9"/><path d="M6 23l18 11 20-9m-20 9v24" fill="none"/><path d="M17 30l13-4 7 5v13l-12 6-8-6z" fill="#f3cd68"/><path d="M43 12l13 5v17l-12 5-7-4V17z" fill="#ffeab0"/>'],
};
export function ingredientArt(id) {
  const entry = art[id];
  return entry ? `<svg class="ingredient-icon" data-item-icon="${id}" viewBox="0 0 64 64" role="img" aria-label="${entry[0]}" xmlns="http://www.w3.org/2000/svg"><title>${entry[0]}</title><g stroke="#634730" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${entry[1]}</g></svg>` : '';
}
