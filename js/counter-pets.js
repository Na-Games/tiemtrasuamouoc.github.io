import { S, $, h, on, esc, fmtK, sfx } from './core.js';
import { PETS, PET_CARE } from './config.js';
import * as E from './econ.js';
import { petArt, petMood, PET_MOODS } from './pet-art.js';
import { openModal, bindActions, toast } from './ui.js';
let reaction = null;
on('served', r => { reaction = { mood: r.stars >= 4 ? 'excited' : 'sad', until: performance.now() + 2400 }; });
on('ding', () => { reaction = { mood: 'excited', until: performance.now() + 1600 }; });
on('left', () => { reaction = { mood: 'sad', until: performance.now() + 1600 }; });
const ownedPets = () => [S.pet, S.pet2].filter(p => p && PETS[p.kind]);
export function refreshCounterPets() {
  const root = $('#sell'); if (!root) return;
  const pets = ownedPets();
  let layer = $('.counter-pets', root);
  root.classList.toggle('has-counter-pets', pets.length > 0);
  const width = `${pets.length * 44 + 4}px`;
  if (root.style.getPropertyValue('--pets-width') !== width) root.style.setProperty('--pets-width', width);
  if (!pets.length) { layer?.remove(); return; }
  if (!layer) { layer = h('<div class="counter-pets" aria-label="Thú cưng của tiệm"></div>'); root.appendChild(layer); bindActions(layer, { pet: t => openPetCare(t.dataset.kind) }); }
  const states = pets.map(p => {
    const mood = petMood(p);
    return { p, mood: !['hungry','dirty','sleepy'].includes(mood) && reaction?.until > performance.now() ? reaction.mood : mood };
  });
  const signature = states.map(({p,mood}) => p.kind + ':' + mood).join('|');
  if (layer.dataset.signature === signature) return;
  layer.dataset.signature = signature;
  layer.innerHTML = states.map(({p,mood}) => `<button class="counter-pet" data-act="pet" data-kind="${p.kind}" data-mood="${mood}" aria-label="${esc(PETS[p.kind].name)}: ${PET_MOODS[mood]}. Chạm để chăm sóc" title="${esc(PETS[p.kind].name)} · ${PET_MOODS[mood]}">${petArt(p.kind,mood)}<small>${PET_MOODS[mood]}</small></button>`).join('');
}
function openPetCare(kind) {
  const pet = ownedPets().find(p => p.kind === kind); if (!pet) return;
  const modal = openModal({ id: 'counter-pet-care', cls: 'small', title: 'Chăm sóc thú cưng' });
  const paint = () => {
    const mood = petMood(pet);
    modal.body.innerHTML = `<h3 class="m-title">${esc(PETS[kind].name)}</h3><div class="pet-care-portrait" data-mood="${mood}">${petArt(kind,mood)}</div><p class="center">${PET_MOODS[mood]}</p><div class="counter-pet-stats">${[['hunger','No'],['joy','Vui'],['clean','Sạch'],['energy','Khỏe']].map(([key,label]) => `<span>${label}: <b>${Math.round(pet[key] ?? 80)}/100</b></span>`).join('')}</div><div class="pcare">${PET_CARE.map(c=>`<button class="btn soft" data-act="care" data-id="${c.id}">${c.icon} ${c.name}<small>${c.cost ? fmtK(c.cost) : 'Miễn phí'}</small></button>`).join('')}</div>`;
  };
  paint();
  bindActions(modal.body, { care: t => { const error = E.carePet(t.dataset.id,kind); if (error) return toast(error,'err'); reaction=null; sfx('pop'); paint(); refreshCounterPets(); } });
}
