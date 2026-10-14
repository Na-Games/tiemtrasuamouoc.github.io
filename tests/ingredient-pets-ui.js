setTimeout(() => {
  let passed = 0;
  try {
    const D=debugGame,{S,E,G,SH}=D;
    document.querySelector('.app').style.width=innerWidth>innerHeight?'640px':'320px';
    const check=(v,label)=>{if(!v)throw Error(label);passed++;};
    document.querySelector('[data-act=play]').click();
    S.settings.tutorialDone=true;S.settings.hints=false;S.settings.tut={home:true,sell:false};
    S.money=1e9;D.unlockAll();D.fillStock(100);G.startShift();D.flush();D.speed(0);
    S.settings.tut.sell=true;SH.ev.bo=[];SH.ev.ins=[];
    for(const id of ['vai','oi','mangCau','me','duaGang']) {
      const icon=document.querySelector(`.fbtn[data-f="${id}"] [data-item-icon="${id}"]`);
      check(!!icon && icon.getAttribute('aria-label')===document.querySelector(`.fbtn[data-f="${id}"]`).getAttribute('aria-label'), 'Flavor icon matches '+id);
    }
    for(const id of ['fMatcha','fCheese','fMuoi','fUbe','tcSoi','cuNang','pmTuoi','thachPm']) check(!!document.querySelector(`.tray[data-t="${id}"] [data-item-icon="${id}"]`),'Correct topping art '+id);
    check(!!document.querySelector('[data-id="duong"] [data-item-icon="duong"]'),'Syrup bottle on counter');
    check(!document.querySelector('.counter-pet'),'No unowned pets');
    check(!E.adoptPet('shiba'),'Adopt Shiba');D.counterFrame();
    const btn=()=>document.querySelector('.counter-pet[data-kind="shiba"]');
    check(btn()?.dataset.mood==='happy' && !!btn().querySelector('.pet-tail'),'Owned Shiba appears happy');
    for(const [stat,val,mood] of [['hunger',10,'hungry'],['clean',10,'dirty'],['energy',10,'sleepy'],['joy',10,'sad'],['joy',95,'excited']]) {
      Object.assign(S.pet,{hunger:80,clean:80,energy:80,joy:80});S.pet[stat]=val;D.counterFrame();
      check(btn().dataset.mood===mood,'Mood follows '+stat);
    }
    S.pet.hunger=10;D.counterFrame();btn().click();
    const money=S.money;document.querySelector('#modal [data-act=care][data-id=feed]').click();
    check(S.pet.hunger===45 && S.money===money-20000,'Feeding uses actual care stats and price');
    document.querySelector('#modal [data-modal-x]').click();
    S.collection.secrets=Object.fromEntries(Array.from({length:7},(_,i)=>['test'+i,true]));
    check(!E.adoptPet('capybara'),'Adopt Cáp Bi');D.counterFrame();
    check(document.querySelectorAll('.counter-pet').length===2 && !!document.querySelector('[data-kind=capybara] .pet-art'),'Both owned pets present');
    const primaryJoy=S.pet.joy;S.pet2.joy=10;D.counterFrame();document.querySelector('.counter-pet[data-kind=capybara]').click();
    document.querySelector('#modal [data-act=care][data-id=play]').click();
    check(S.pet2.joy===40 && S.pet.joy===primaryJoy,'Cáp Bi care has independent stats');
    document.querySelector('#modal [data-modal-x]').click();
    S.pet2={kind:'capybara'};check(E.petActive(S.pet2),'Old Cáp Bi save has valid default stats');
    check(!E.carePet('bath','capybara') && Number.isFinite(S.pet2.clean),'Old save care initializes stats');
    check(!E.adoptPet('meo'),'Switch to tabby');D.counterFrame();
    check(!!document.querySelector('.counter-pet[data-kind=meo]')&&!btn(),'Only current owned main pet appears');
    const root=document.querySelector('#sell'), view=document.querySelector('#view');
    check(root.scrollHeight<=root.clientHeight+1 && view.scrollHeight<=view.clientHeight+1,`Pets add no vertical overflow (${innerWidth}x${innerHeight}; root ${root.scrollHeight}/${root.clientHeight}; view ${view.scrollHeight}/${view.clientHeight})`);
    const q=document.querySelector('#qrow').getBoundingClientRect(),p=document.querySelector('.counter-pets').getBoundingClientRect();
    check(q.right<=p.left+2,'Pets do not cover queue');
    const cb=document.querySelector('#cbub').getBoundingClientRect();check(p.bottom<=cb.top+3,'Pets do not cover order');
    check(getComputedStyle(document.querySelector('.counter-pet .pet-body')).animationName!=='none','Pet has breathing animation');
    Object.assign(S.pet,{hunger:80,clean:80,energy:80,joy:80});Object.assign(S.pet2,{hunger:80,clean:80,energy:80,joy:80});
    const order=G.frontCustomer().order;
    G.pickCup(order.size);G.startPour(order.tea);SH.board.fill=1;G.stopPour();
    if(order.flavor)G.addFlavor(order.flavor);order.tops.forEach(id=>G.addTop(id));
    G.sealCup();G.updateShift(2);const result=G.serve();D.counterFrame();
    check(result.stars>=4 && document.querySelector('.counter-pet[data-kind=meo]').dataset.mood==='excited','Pet celebrates a successful sale');
    G.nextDay();check(S.pet.hunger===55 && S.pet2.hunger===55,'Both pets lose satiety across days');
    D.flush();
    document.querySelector('[data-act=nav][data-group=kho]').click();D.flush();
    document.querySelector('.tile[data-tab=thucung]').click();D.flush();
    S.pet2={kind:'capybara'};
    document.querySelector('[data-act=petsel][data-k=capybara]').click();D.flush();
    check(document.querySelector('.petcard.owned h4').textContent.includes('Cáp Bi'),'Pet menu shows selected Cáp Bi');
    check(!document.querySelector('.petcard.owned').textContent.includes('NaN'),'Old Cáp Bi save displays finite care values');
    D.save();const saved=JSON.parse(localStorage.getItem('tiemTraMoUoc3')).s;
    check(saved.pet.kind==='meo'&&saved.pet2.kind==='capybara'&&saved.pet.hunger===55,'Owned pets and care stats persist in save');
    document.body.dataset.ingredientPetsPassed=String(passed);
  } catch(e) {document.body.dataset.ingredientPetsError=e.message;console.error(e);}
},500);
