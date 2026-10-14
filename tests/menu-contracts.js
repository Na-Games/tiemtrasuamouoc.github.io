/* Load after js/bundle.js in an isolated browser profile. Tests use actual game transactions. */
(function () {
  const d = window.debugGame;
  const S = d.S, E = d.E, G = d.G, SH = d.SH;
  S.settings.tutorialDone = true;
  S.settings.hints = false;
  S.settings.tut = {sell: false};
  S.money = 1e9;
  S.phase = 'home';
  const base = JSON.stringify(S), results = [];
  const assert = (v, message) => { if (!v) throw Error(message); };
  const reset = () => { Object.assign(S, JSON.parse(base)); Object.assign(SH, {on: false, fin: false}); };
  const test = (name, fn) => { reset(); try { fn(); results.push({name, ok: true}); } catch (e) { results.push({name, ok: false, error: e.message}); } };
  const stocked = () => { d.unlockAll(); d.fillStock(100); assert(!G.startShift(), 'shift did not start'); };
  test('Mua trang bị: trừ tiền đúng, không mua quá cấp tối đa', () => {
    S.equip.binhRot = 1; const cash = S.money;
    assert(!E.buyEquip('binhRot') && S.equip.binhRot === 2 && S.money === cash - 1e7, 'tier 2');
    E.buyEquip('binhRot'); const after = S.money;
    assert(E.buyEquip('binhRot') && S.money === after && S.equip.binhRot === 3, 'tier cap');
  });
  test('Nâng tầng cộng chính xác 10/20/35 khách', () => {
    S.equip.tang = 0; const n = E.expectedCustomers();
    [10,20,35].forEach((extra,i) => { S.equip.tang = i + 1; assert(E.expectedCustomers() === n + extra, 'customer count ' + extra); });
  });
  test('Nâng hạng mục ảnh hưởng bonus và từ chối ID sai', () => {
    const before = E.bonus().speedStaff; assert(!E.buyCategory('nv'), 'purchase');
    assert(Math.abs(E.bonus().speedStaff - before - .01) < 1e-9, 'speed bonus');
    const cash = S.money; assert(E.buyCategory('bad') && S.money === cash, 'invalid category');
  });
  test('Thuê nhân sự: điều kiện và loại trừ đối xứng', () => {
    assert(!E.hire('thuViec'), 'hire'); const cash = S.money;
    assert(E.hire('quanLy') && S.money === cash, 'exclusive'); E.fire('thuViec');
    assert(!E.hire('quanLy') && E.hire('thuViec'), 'reverse exclusive');
    assert(E.hire('phaChe') && E.hire('bad'), 'day gate and invalid id');
  });
  test('Chi nhánh: chống mua trùng, giới hạn nhân viên, có buff', () => {
    S.branches = {}; const before = E.bonus().traffic; assert(!E.openBranch('truong'), 'open');
    assert(Math.abs(E.bonus().traffic-before-.15)<1e-9, 'branch bonus'); const cash = S.money;
    assert(E.openBranch('truong') && S.money === cash, 'duplicate');
    E.setBranchStaff('truong',99); assert(S.branches.truong.staff===3, 'staff cap');
  });
  test('Nhượng quyền: kiểm tra uy tín và tối đa 5 điểm', () => {
    S.franchise.count=0; S.rating=4; S.followers=50000; assert(E.sellFranchise(), 'rating gate');
    S.rating=4.5; for(let i=0;i<5;i++)assert(!E.sellFranchise(), 'sell');
    const cash=S.money; assert(E.sellFranchise() && S.money===cash && S.franchise.count===5, 'limit');
  });
  test('Khởi nghiệp: không chuyển trùng hoặc đang trong ca', () => {
    assert(!E.moveShop('hue') && S.location==='hue' && S.forecast.length===4, 'move');
    const cash=S.money; assert(E.moveShop('hue') && S.money===cash, 'duplicate');
    S.phase='sell'; assert(E.moveShop('hanoi') && S.location==='hue', 'shift guard');
  });
  test('Online: tablet, đánh giá và địa điểm', () => {
    S.history=[{day:0,profit:15e6,cups:60}]; S.rating=4; S.apps={}; S.equip.tablet=1;
    assert(!E.toggleApp('soppi'), 'open'); assert(E.toggleApp('topTop'), 'tablet limit');
    S.rating=3; assert(!E.onlineEnabled(), 'low rating'); S.rating=4;
    S.location='hoangSa'; assert(!E.onlineEnabled(), 'island offline');
  });
  test('Tiến độ online không đếm trùng ngày đã tổng kết', () => {
    S.today.cups=10; S.today.profit=1000; S.history=[{day:S.day,cups:10,profit:1000}];
    const p=E.onlineProgress(); assert(p.orders===10 && p.profit===1000, 'double count');
  });
  test('Kho: chai hương 45 ly, hạn dùng và kế hoạch không hợp lệ', () => {
    d.unlockAll(); S.stock.dau=[]; S.plan={}; const cash=S.money;
    E.setPlan('dau',2); const total=E.planTotal(); assert(!E.commitPlan(), 'purchase');
    assert(E.stockQty('dau')===90 && S.money===cash-total && S.stock.dau[0].exp>=S.day+6, 'bottle');
    assert(E.setPlan('bad',1) && E.setPlan('dau',NaN), 'invalid plan');
  });
  test('Giá size L và Quản gia', () => {
    S.staff={}; E.setPrice('sizeL',50000); assert(E.sizeLWeight()===0, 'size cap');
    E.setPrice('traSua',100000); assert(E.priceFactor()<=.2, 'overprice');
    S.staff.quanLy={shifts:0}; assert(E.priceFactor()===1 && E.priceWeight('traSua')===1, 'safe price');
  });
  test('Quảng cáo/video: không chồng chiến dịch hoặc vượt quota', () => {
    S.social.ad=null; S.social.videosToday=0; assert(!E.startAd('fb'), 'ad');
    const cash=S.money; assert(E.startAd('kol') && S.money===cash, 'ad overlap');
    let count=0; while(!E.recordVideo()) {count++; if(count>10) throw Error('unbounded quota');}
    assert(count>0 && count===S.social.videosToday, 'quota');
  });
  test('Thú cưng/Decor: đổi bé, nuôi chung và chăm sóc có hiệu ứng', () => {
    S.pet=null; S.pet2=null; assert(!E.adoptPet('shiba'), 'adopt');
    S.collection.secrets={s1:true,s2:true,s3:true,s4:true,s5:true,s6:true,s7:true};
    assert(!E.adoptPet('capybara') && S.pet.kind==='shiba', 'coexist');
    assert(!E.adoptPet('meo') && S.pet2.kind==='capybara', 'switch');
    S.pet.hunger=0; S.pet.joy=0; E.buyDecor('bat'); E.carePet('feed');
    assert(S.pet.hunger===55 && S.pet.joy===10, 'decor care');
    assert(!E.petActive(), 'inactive pet');
    S.pet.hunger=S.pet.joy=S.pet.clean=S.pet.energy=80;
    const b=E.bonus(); assert(Math.abs(b.branch-.35)<1e-9, 'combined pet bonus');
  });
  test('Thuế: chỉ nộp một lần mỗi 72h', () => {
    S.tax.until=0; const result=E.payTax(); assert(typeof result==='number', 'pay');
    const cash=S.money; assert(typeof E.payTax()==='string' && S.money===cash, 'duplicate');
  });
  test('Ngân hàng: gửi thêm reset kỳ hạn, rút sớm chỉ tiền gốc', () => {
    S.bank={balance:1100,principal:1000,shifts:7}; S.money=1000;
    assert(E.depositBank(.1)===100 && S.bank.shifts===0, 'new maturity');
    assert(E.withdrawBank()===1100 && S.bank.balance===0 && S.money===2000, 'principal only');
  });
  test('Bạn bè/vườn: hạn một quà mỗi ngày và tối đa 16 ô', () => {
    const id=S.friends.list[0] ? S.friends.list[0].id : 'npc1';
    // Select an existing built-in friend through the currently rendered panel if needed.
    S.friends.list.push({id:'contract-friend'}); assert(typeof E.visitFriend('contract-friend')==='number', 'visit');
    const cash=S.money; assert(typeof E.visitFriend('contract-friend')==='string' && S.money===cash, 'duplicate gift');
    S.garden.unlocked=16; assert(E.unlockPlot() && S.garden.unlocked===16, 'plot cap');
  });
  test('Nhân viên phụ pha/quản lý: đúng topping, đường đá không trừ hai lần', () => {
    S.staff={}; stocked(); S.staff.thuViec={shifts:0}; const c=G.frontCustomer(); c.order.flavor='dau'; c.order.tops=['tcDen'];
    const sugar=E.stockQty('duong'); G.pickCup(c.order.size);
    for(let i=0;i<240;i++)G.updateShift(.05);
    assert(SH.board.flavor==='dau' && SH.board.tops.length===0 && !SH.board.auto, 'pour assistant');
    G.addTop('tcDen'); G.sealCup(); assert(E.stockQty('duong')===sugar-1, 'duplicate sugar'); G.trashCup();
    E.fire('thuViec'); S.staff.quanLy={shifts:0}; G.pickCup(c.order.size);
    for(let i=0;i<240;i++)G.updateShift(.05);
    assert(SH.board.tops.includes('tcDen') && !SH.board.auto && SH.board.phase==='cup', 'manager');
  });
  test('KPI: ghi chi phí hằng ngày, trả lương ở ca thứ 7', () => {
    stocked(); S.staff.thuViec={shifts:0}; S.kpi={shifts:0,payable:0}; G.closeNow();
    assert(S.today.wage===165000 && S.today.payrollCash===0 && S.kpi.payable===165000, 'daily accrual');
    G.nextDay(); S.kpi.shifts=6; stocked(); G.closeNow();
    assert(S.today.payrollCash===330000 && S.kpi.payable===0, 'cycle payout');
  });
  test('Quảng cáo đăng bài ở ngày tiếp theo và nhượng quyền hưởng bonus', () => {
    S.social.posts=[]; S.social.ad=null; E.startAd('fb'); G.nextDay();
    assert(S.social.posts.length===1, 'daily ad post');
    S.franchise.count=1; stocked(); const old=Math.random; Math.random=()=>.5;
    try { G.closeNow(); assert(S.today.fran===100800, 'royalty ad multiplier'); } finally { Math.random=old; }
  });
  test('Nhân viên ca đêm làm sau 22h, không tính lương khi chưa làm', () => {
    stocked(); S.staff.svDem={shifts:0}; G.updateShift(.1);
    assert(!SH.jobs.some(j=>j.by==='svDem'), 'daytime work');
    SH.t=SH.total-.1; G.updateShift(.2); G.updateShift(.05);
    assert(SH.hour>=22 && SH.jobs.some(j=>j.by==='svDem'), 'night work');
  });
  test('Marketing tự nộp thuế và đăng video', () => {
    stocked(); S.staff.meKetTinh={shifts:0}; S.tax.until=0; S.social.videosToday=0; S.social.posts=[];
    const followers=S.followers; G.updateShift(.1);
    assert(E.taxActive() && S.social.videosToday===1 && S.followers>followers && S.social.posts.length===1, 'marketing work');
  });
  test('Cho nghỉ nhân viên giải phóng đơn đang làm', () => {
    stocked(); S.staff.genZ={shifts:0}; G.updateShift(.05);
    assert(SH.jobs.some(j=>j.by==='genZ'), 'reserved job'); E.fire('genZ');
    assert(!SH.jobs.some(j=>j.by==='genZ') && SH.queue.length>0, 'cancelled job');
  });
  test('Gen Z đang dỗi có thể dỗ bằng thao tác nhân viên', () => {
    stocked(); S.staff.genZ={shifts:0}; SH.staffT.genZ={done:100,sulk:10};
    assert(G.comfortStaff('genZ') && SH.staffT.genZ.sulk===0 && S.staff.genZ, 'comfort');
  });
  test('Lãi ngân hàng phản ánh đúng trần, không tạo lợi nhuận ảo', () => {
    stocked(); S.bank={balance:99e9-1,principal:99e9-1,shifts:7}; G.closeNow();
    assert(S.bank.balance===99e9 && S.today.interest===1, 'interest ceiling');
  });
  test('Nhân viên online tự nhận đơn ứng dụng', () => {
    stocked(); S.history=[{day:0,profit:15e6,cups:60}]; S.rating=4; S.apps.soppi=true; S.staff.online={shifts:0};
    SH.onlineQ=[{id:999,app:{id:'soppi',name:'Soppi'},exp:20,o:JSON.parse(JSON.stringify(G.frontCustomer().order))}];
    G.updateShift(.1); assert(SH.onlineQ.length===0 && SH.jobs.some(j=>j.by==='online'), 'accept online');
  });
  test('Gen Z giữ một bill, thu hồi đúng một lần', () => {
    stocked(); S.staff.genZ={shifts:0}; G.updateShift(.05);
    const job=SH.jobs.find(j=>j.by==='genZ'); assert(job && job.steps.length>=6, 'full work cycle');
    G.updateShift(job.total+.01);
    const amount=SH.staffT.genZ.hiddenBill, cash=S.money;
    assert(amount>0 && G.comfortStaff('genZ') && S.money===cash+amount, 'refund');
    assert(!G.comfortStaff('genZ') && S.money===cash+amount, 'double refund');
  });
  test('Marketing phản hồi review và tăng điểm theo mô tả', () => {
    stocked(); S.staff.meKetTinh={shifts:0}; G.pushReview(G.frontCustomer(),3,'Góp ý');
    assert(S.reviews[0].stars===4 && S.reviews[0].reply, 'reply and review');
  });
  test('Kho theo lô: chuyển ngày giữ tồn cũ, hạn thật và lượng đã dùng', () => {
    S.stock.da=[]; E.addStock('da',10); E.take('da',3);
    const expiry=S.stock.da[0].exp; G.nextDay();
    assert(S.previousUsed.da===3 && !S.lastUsed.da, 'previous usage');
    E.addStock('da',5); const b=E.stockBreakdown('da');
    assert(b.old===7 && b.fresh===5 && b.unknown===0, 'old and new lots');
    assert(S.stock.da[0].exp===expiry && E.nearestExpiry('da')===1, 'real remaining expiry');
    E.take('da',7); assert(E.stockBreakdown('da').old===0 && E.stockQty('da')===5, 'FIFO');
    S.stock.lyM=[]; E.addStock('lyM',2); G.nextDay(); E.addStock('lyM',3);
    assert(E.stockBreakdown('lyM').old===2 && E.stockBreakdown('lyM').fresh===3, 'non-expiring lots separated');
  });
  test('Lô lưu cũ không bịa ngày nhập hoặc đổi hạn khi nâng tủ lạnh', () => {
    S.stock.dau=[{q:12,exp:S.day+2}]; S.equip.tuLanh=3;
    assert(E.stockBreakdown('dau').unknown===12 && E.nearestExpiry('dau')===3, 'legacy expiry');
    E.addStock('dau',45); assert(S.stock.dau.length===2 && S.stock.dau[1].exp===S.day+9, 'new refrigerated lot');
  });
  test('Khôi phục ly của Lâm Phước không được thêm topping của quản lý', () => {
    S.staff={}; stocked(); S.staff.thuViec={shifts:0}; const c=G.frontCustomer(); c.order.tops=['tcDen'];
    G.pickCup(c.order.size); SH.board.auto.st={...SH.board.auto.st,kind:'manager'}; SH.board.auto.topsLeft=['tcDen'];
    for(let i=0;i<240;i++)G.updateShift(.05);
    assert(SH.board.tops.length===0 && !SH.board.auto, 'restored permissions');
  });
  test('Dữ liệu có hai phụ pha chỉ quản lý nhận phần topping', () => {
    S.staff={}; stocked(); S.staff.thuViec={shifts:0}; S.staff.quanLy={shifts:0};
    const c=G.frontCustomer(); c.order.tops=['tcDen']; G.pickCup(c.order.size);
    assert(SH.board.auto.st.id==='quanLy', 'choose actual manager');
    for(let i=0;i<240;i++)G.updateShift(.05);
    assert(SH.board.tops.includes('tcDen'), 'manager toppings');
  });
  test('Đường/đá một phần mỗi ly, thiếu kho không trừ dở khi đóng nắp', () => {
    S.staff={}; stocked(); G.pickCup('M'); G.startPour('traSua'); G.stopPour(); SH.board.fill=.95;
    const ice=E.stockQty('da'); S.stock.duong=[];
    assert(G.sealCup() && SH.board.phase==='cup' && E.stockQty('da')===ice, 'atomic missing supply');
    E.addStock('duong',3); assert(!G.addSupply('da') && G.addSupply('da'), 'single ice');
    assert(!G.addSupply('duong') && G.addSupply('duong'), 'single sugar');
    assert(!G.sealCup() && E.stockQty('da')===ice-1 && E.stockQty('duong')===2, 'no repeat at seal');
  });
  reset();
  document.body.dataset.contractResults=JSON.stringify(results);
  document.body.dataset.contractPassed=String(results.filter(x=>x.ok).length);
  document.body.dataset.contractTotal=String(results.length);
  console.info('MENU CONTRACTS', results);
})();
