(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // js/ingredient-art.js
  var leaf = '<path d="M31 17Q29 4 43 5Q44 16 31 17" fill="#73a949"/><path d="M30 18l4-11" fill="none"/>';
  var bowl = (color, garnish = "") => `<ellipse cx="32" cy="49" rx="24" ry="7" fill="#d7bb93" stroke="none"/><path d="M8 32h48l-6 17q-18 9-36 0z" fill="#f9e7c6"/><path d="M11 32q0-8 11-10q-2-8 8-9q3-7 8 0q13 2 10 10q9 2 6 9z" fill="${color}"/><path d="M18 30q9-6 23-1M26 20q6-3 13 0" fill="none" stroke="#fff" opacity=".7"/>${garnish}`;
  var art = {
    vai: ["V\u1EA3i", `<circle cx="22" cy="34" r="17" fill="#e96578"/><path d="M10 25l5 3m3-9 3 4m-8 12 4 3m8-8 4 3m-11 10 5-2m6-1 4 2" stroke="#a94250"/><circle cx="43" cy="38" r="17" fill="#fff5df"/><ellipse cx="44" cy="38" rx="7" ry="10" fill="#754331"/>${leaf}`],
    oi: ["\u1ED4i", `<path d="M30 16C5 7-1 42 16 54q18 8 29-7q12-26-15-31" fill="#9dc967"/>${leaf}<ellipse cx="42" cy="40" rx="17" ry="20" fill="#87b554"/><ellipse cx="42" cy="40" rx="13" ry="16" fill="#ffb0a4"/><path d="M39 34l1 2m6-3v2m-9 8 2-1m7 2 1 2m-5 3v2" stroke="#bf8050" stroke-width="3"/>`],
    mangCau: ["M\xE3ng c\u1EA7u", `<path d="M30 14Q7 9 7 35q3 24 27 22q25-6 22-28q-6-20-26-15" fill="#98b960"/>${leaf}<path d="M14 25l4-4 4 5 4-5 5 5 5-4 5 4 4-4m-30 14 5-5 5 5 5-5 5 5 5-5 5 5m-29 10 5-5 5 5 5-5 5 5 5-5" fill="none" stroke="#627d3f"/>`],
    me: ["Me", '<path d="M19 8q-8 7-4 16q-8 9 0 17q-2 16 12 16q14-3 12-14q10-8 2-17q3-14-11-16z" fill="#ab7446"/><path d="M17 23q12 7 22 1m-23 17q10 6 22 1" fill="none"/><path d="M45 10q9 8 2 18q9 12-1 23" fill="none" stroke="#dec097" stroke-width="6"/>'],
    duaGang: ["D\u01B0a gang", '<ellipse cx="27" cy="31" rx="24" ry="20" fill="#edd78d"/><path d="M14 15q-9 18 0 32m13-35q-10 21 0 38m12-35q-2 14 4 22" fill="none" stroke="#85aa57" stroke-width="4"/><path d="M26 36l32-13q8 30-25 34z" fill="#a2bc6c"/><path d="M29 38l25-9q3 20-19 24z" fill="#fff0bc"/><path d="M36 42l2 1m6-4 2 1m-5 7 2 1" stroke="#d69b53"/>'],
    duong: ["N\u01B0\u1EDBc \u0111\u01B0\u1EDDng", '<path d="M23 11h18v9l8 6v29H15V26l8-6z" fill="#fff1d3"/><path d="M18 34h28v18H18z" fill="#e7b650" stroke="none"/><path d="M24 3h17v9H24z" fill="#aa8860"/><path d="M40 5h13v5H40" fill="#aa8860"/><path d="M21 29v15" stroke="#fff" stroke-width="3"/><path d="M54 15q-7 9 0 12q7-3 0-12" fill="#e9b947"/>'],
    fMatcha: ["Foam matcha", bowl("#a8c77b", '<path d="M40 23q-2-13 10-12q3 10-10 12" fill="#608d38"/>')],
    fCheese: ["Foam cheese", bowl("#ffe7a5", '<path d="M39 31l15-3v10H39z" fill="#eabb4a"/><circle cx="44" cy="35" r="1.5" fill="#bd8d31"/>')],
    fMuoi: ["Foam mu\u1ED1i", bowl("#fffaf0", '<path d="M43 13l2 2m5 3 2 2m-9 1 2 2" stroke="#a6b5bd" stroke-width="3"/>')],
    fUbe: ["Foam ube", bowl("#c5a0df", '<ellipse cx="47" cy="35" rx="9" ry="6" fill="#9d6db5"/><ellipse cx="47" cy="35" rx="5" ry="4" fill="#d4bce6"/>')],
    tcSoi: ["Tr\xE2n ch\xE2u s\u1EE3i", '<ellipse cx="32" cy="45" rx="27" ry="12" fill="#efdbbd"/><path d="M12 35q8-17 14-3t13-4t12 7M10 42q8-17 14-3t13-4t15 7M17 47q8-13 15-2t17-4" fill="none" stroke="#ad7446" stroke-width="6"/>'],
    cuNang: ["Th\u1EA1ch c\u1EE7 n\u0103ng", '<path d="M7 25l16-7 14 8v16l-16 8-14-9z" fill="#e9f0df"/><path d="M30 36l16-7 13 8v15l-16 8-13-9z" fill="#dbe9d4"/><path d="M7 25l14 8 16-7m-16 7v17m9-14 13 8 16-7m-16 7v16" fill="none"/><path d="M35 8l10 3-3 7-10-3z" fill="#fff9e4"/>'],
    pmTuoi: ["Ph\xF4 mai t\u01B0\u01A1i", bowl("#fff5d7")],
    thachPm: ["Th\u1EA1ch ph\xF4 mai", '<path d="M6 23l19-8 19 10v23l-20 10L6 47z" fill="#fff0c9"/><path d="M6 23l18 11 20-9m-20 9v24" fill="none"/><path d="M17 30l13-4 7 5v13l-12 6-8-6z" fill="#f3cd68"/><path d="M43 12l13 5v17l-12 5-7-4V17z" fill="#ffeab0"/>']
  };
  function ingredientArt(id) {
    const entry = art[id];
    return entry ? `<svg class="ingredient-icon" data-item-icon="${id}" viewBox="0 0 64 64" role="img" aria-label="${entry[0]}" xmlns="http://www.w3.org/2000/svg"><title>${entry[0]}</title><g stroke="#634730" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${entry[1]}</g></svg>` : "";
  }

  // js/pet-art.js
  var PET_MOODS = { hungry: "\u0110\xF3i b\u1EE5ng", dirty: "C\u1EA7n t\u1EAFm", sleepy: "Bu\u1ED3n ng\u1EE7", sad: "Bu\u1ED3n", happy: "Vui v\u1EBB", excited: "H\xE0o h\u1EE9ng", calm: "Th\u01B0 th\xE1i" };
  function petMood(p) {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = p.hunger) != null ? _a : 80) < 30) return "hungry";
    if (((_b = p.clean) != null ? _b : 80) < 30) return "dirty";
    if (((_c = p.energy) != null ? _c : 80) < 30) return "sleepy";
    if (((_d = p.joy) != null ? _d : 80) < 35) return "sad";
    return ((_e = p.joy) != null ? _e : 80) >= 90 ? "excited" : ((_f = p.joy) != null ? _f : 80) >= 60 ? "happy" : "calm";
  }
  function petArt(kind, mood = "happy") {
    const cat = kind === "meo", capy = kind === "capybara";
    const color = cat ? "#bc976f" : capy ? "#b88d66" : "#e3a151";
    const tail = capy ? "" : `<path class="pet-tail" d="${cat ? "M69 54q27-34 25-4q-2 14-17 12" : "M72 53q26-22 20 1q-4 16-16 6"}" fill="none" stroke="${color}" stroke-width="9"/>`;
    const ears = capy ? '<circle cx="32" cy="24" r="8"/><circle cx="67" cy="24" r="8"/>' : `<path d="M24 31L20 6l24 18M58 24L80 6l-4 27"/><path d="M27 24l-3-12 13 12m28 0 11-12-3 13" fill="#edb2a3" stroke="none"/>`;
    const sad = ["sad", "hungry", "dirty"].includes(mood), sleep = mood === "sleepy";
    const eyes = sleep ? '<path d="M31 37q5 5 10 0m18 0q5 5 10 0" fill="none"/>' : '<ellipse class="pet-eye" cx="36" cy="37" rx="3.5" ry="4.5" fill="#352820"/><ellipse class="pet-eye" cx="64" cy="37" rx="3.5" ry="4.5" fill="#352820"/><circle cx="37" cy="35" r="1" fill="white" stroke="none"/><circle cx="65" cy="35" r="1" fill="white" stroke="none"/>';
    const mouth = sad ? '<path d="M43 53q7-8 14 0" fill="none"/>' : '<path d="M43 48q7 13 14 0" fill="#e58b88"/>';
    const marks = cat ? '<path d="M41 22l4 9m5-10v10m9-9-4 9M25 38l7 3m43-3-7 3M36 66l8 2m12-2 9-2" stroke="#765742" stroke-width="3"/>' : "";
    const fx = mood === "dirty" ? '<g class="pet-dirt" fill="#765744" stroke="none"><circle cx="25" cy="43" r="3"/><circle cx="68" cy="58" r="4"/><circle cx="38" cy="63" r="3"/></g><path class="pet-stink" d="M8 27q-8-7 0-14m80 17q8-7 0-14" fill="none" stroke="#839357"/>' : mood === "sleepy" ? '<text x="79" y="17" font-size="17" fill="#777cad" stroke="none">z</text>' : mood === "sad" ? '<path d="M29 44q-7 11 0 11q7 0 0-11" fill="#93cfea" stroke="none"/>' : mood === "hungry" ? '<ellipse cx="50" cy="79" rx="22" ry="3" fill="#ded8c7"/>' : ["happy", "excited"].includes(mood) ? '<path class="pet-heart" d="M87 15q-9-10-12-2q-2 7 12 14q14-7 12-14q-3-8-12 2" fill="#ee8aa1" stroke="none"/>' : "";
    return `<svg class="pet-art" viewBox="0 0 104 84" aria-hidden="true" focusable="false"><ellipse cx="51" cy="78" rx="34" ry="4" fill="#8b6b4628"/><g class="pet-body" stroke="#664b37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${tail}<ellipse cx="51" cy="60" rx="27" ry="18" fill="${color}"/><ellipse cx="51" cy="61" rx="14" ry="12" fill="#fff0d8" stroke="none"/><path d="M31 65v10q7 5 11 0V65m20 0v10q7 5 11 0V65" fill="${color}"/><g class="pet-head" fill="${color}">${ears}<path d="M24 28q26-20 52 0q11 27-26 32q-37-5-26-32"/><ellipse cx="50" cy="47" rx="20" ry="11" fill="#fff0dc" stroke="none"/>${marks}${eyes}<path d="M46 44q4-4 8 0l-4 4z" fill="#423126"/>${mouth}${cat ? '<path d="M28 47H15m14 5-12 3m54-8h13m-13 5 12 3" fill="none"/>' : ""}<ellipse cx="28" cy="45" rx="5" ry="3" fill="#ecaa9a" stroke="none"/><ellipse cx="72" cy="45" rx="5" ry="3" fill="#ecaa9a" stroke="none"/></g>${fx}</g></svg>`;
  }

  // js/config.js
  var DEBUG = true;
  var VERSION = "1.0.0";
  var SAVE_KEY = "tiemTraMoUoc3";
  var SAVE_VERSION = 1;
  var SHIFT_START_H = 10;
  var SHIFT_END_H = 22;
  var QUEUE_BASE = 5;
  var START_MONEY = 4e5;
  var BASE_RENT = 4e4;
  var BASE_UTILITY = 28e3;
  var DAYS_PER_SEASON = 7;
  var ITEMS = {
    traSua: { name: "Tr\xE0 s\u1EEFa", kind: "tea", icon: "\u{1F9CB}", color: "#c9a06f", cost: 4500, life: 3, price: 25e3, unlock: 0, temp: "cold", short: "TR\xC0 S\u1EEEA" },
    matcha: { name: "Matcha", kind: "tea", icon: "\u{1F375}", color: "#8fbf6a", cost: 6e3, life: 3, price: 3e4, unlock: 0, temp: "cold", short: "MATCHA" },
    hongTra: { name: "H\u1ED3ng tr\xE0", kind: "tea", icon: "\u{1FAD6}", color: "#b5563c", cost: 1500, life: 3, price: 22e3, unlock: 15e4, temp: "warm", short: "H\u1ED2NG TR\xC0" },
    lucTra: { name: "L\u1EE5c tr\xE0", kind: "tea", icon: "\u{1F343}", color: "#b9c46a", cost: 1500, life: 3, price: 22e3, unlock: 15e4, temp: "cold", short: "L\u1EE4C TR\xC0" },
    olong: { name: "Tr\xE0 \xF4 long", kind: "tea", icon: "\u{1F3F5}\uFE0F", color: "#a9744a", cost: 2500, life: 3, price: 28e3, unlock: 25e4, temp: "warm", short: "\xD4 LONG" },
    traThai: { name: "Tr\xE0 s\u1EEFa Th\xE1i", kind: "tea", icon: "\u{1F9E1}", color: "#e8894a", cost: 5e3, life: 3, price: 3e4, unlock: 3e5, temp: "cold", short: "TR\xC0 TH\xC1I" },
    vai: { name: "V\u1EA3i", kind: "flavor", icon: "\u{1F338}", color: "#f3d7cf", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    dao: { name: "\u0110\xE0o", kind: "flavor", icon: "\u{1F351}", color: "#f5b66b", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    dau: { name: "D\xE2u", kind: "flavor", icon: "\u{1F353}", color: "#f07c95", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    nho: { name: "Nho", kind: "flavor", icon: "\u{1F347}", color: "#8e5aa8", cost: 4400, life: 7, price: 9e3, unlock: 2e5 },
    oi: { name: "\u1ED4i", kind: "flavor", icon: "\u{1F348}", color: "#f4a3a0", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    xoai: { name: "Xo\xE0i", kind: "flavor", icon: "\u{1F96D}", color: "#f2c14e", cost: 4400, life: 7, price: 9e3, unlock: 2e5 },
    mangCau: { name: "M\xE3ng c\u1EA7u", kind: "flavor", icon: "\u{1F34F}", color: "#cfe3b0", cost: 4400, life: 7, price: 1e4, unlock: 2e5 },
    tao: { name: "T\xE1o", kind: "flavor", icon: "\u{1F34E}", color: "#d8e36b", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    chanh: { name: "Chanh", kind: "flavor", icon: "\u{1F34B}", color: "#e6e27a", cost: 4400, life: 7, price: 5e3, unlock: 2e5 },
    me: { name: "Me", kind: "flavor", icon: "\u{1F7E4}", color: "#9c6b3c", cost: 4400, life: 7, price: 7e3, unlock: 2e5 },
    duaGang: { name: "D\u01B0a gang", kind: "flavor", icon: "\u{1F348}", color: "#f6c79a", cost: 4400, life: 7, price: 1e4, unlock: 2e5 },
    choco: { name: "Chocolate", kind: "flavor", icon: "\u{1F36B}", color: "#5b3a29", cost: 4400, life: 7, price: 1e4, unlock: 2e5 },
    bacHa: { name: "B\u1EA1c h\xE0", kind: "flavor", icon: "\u{1F33F}", color: "#9fe0c0", cost: 4400, life: 7, price: 8e3, unlock: 25e4 },
    tcDen: { name: "Tr\xE2n ch\xE2u \u0111en", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u26AB", color: "#2b1d14", cost: 2e3, life: 2, price: 6e3, unlock: 0 },
    tcTrang: { name: "Tr\xE2n ch\xE2u tr\u1EAFng", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u26AA", color: "#f4efe4", cost: 1500, life: 4, price: 5e3, unlock: 0 },
    tcVang: { name: "Tr\xE2n ch\xE2u ho\xE0ng kim", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u{1F7E1}", color: "#e0a526", cost: 2500, life: 2, price: 8e3, unlock: 2e5 },
    tcSoi: { name: "Tr\xE2n ch\xE2u s\u1EE3i", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u{1F7E0}", color: "#a8744e", cost: 2500, life: 2, price: 8e3, unlock: 25e4 },
    tcNo: { name: "Tr\xE2n ch\xE2u n\u1ED5", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u{1F534}", color: "#f28fb0", cost: 3500, life: 3, price: 9e3, unlock: 3e5 },
    cuNang: { name: "Th\u1EA1ch c\u1EE7 n\u0103ng", kind: "top", group: "Th\u1EA1ch", icon: "\u{1F7E2}", color: "#9fd49a", cost: 2e3, life: 3, price: 7e3, unlock: 2e5 },
    thachTc: { name: "Th\u1EA1ch tr\xE1i c\xE2y", kind: "top", group: "Th\u1EA1ch", icon: "\u{1F7E7}", color: "#f5a0b8", cost: 2e3, life: 3, price: 6e3, unlock: 2e5 },
    suongSao: { name: "S\u01B0\u01A1ng s\xE1o", kind: "top", group: "Th\u1EA1ch", icon: "\u2B1B", color: "#1f2a24", cost: 1500, life: 3, price: 6e3, unlock: 15e4 },
    thachCf: { name: "Th\u1EA1ch c\xE0 ph\xEA", kind: "top", group: "Th\u1EA1ch", icon: "\u{1F7EB}", color: "#5a3a26", cost: 2e3, life: 3, price: 7e3, unlock: 2e5 },
    fCheese: { name: "Foam cheese", kind: "top", group: "Foam", icon: "\u{1F9C0}", color: "#f7d35c", cost: 3500, life: 2, price: 1e4, unlock: 3e5 },
    fMatcha: { name: "Foam matcha", kind: "top", group: "Foam", icon: "\u{1F348}", color: "#b6d48f", cost: 4e3, life: 2, price: 1e4, unlock: 35e4 },
    fMuoi: { name: "Foam mu\u1ED1i", kind: "top", group: "Foam", icon: "\u{1F90D}", color: "#f4efe4", cost: 3e3, life: 2, price: 9e3, unlock: 3e5 },
    fUbe: { name: "Foam ube", kind: "top", group: "Foam", icon: "\u{1F49C}", color: "#b894d8", cost: 4500, life: 2, price: 12e3, unlock: 4e5 },
    pmVien: { name: "Ph\xF4 mai vi\xEAn", kind: "top", group: "Ph\xF4 mai", icon: "\u{1F7E8}", color: "#f7d56b", cost: 4e3, life: 3, price: 1e4, unlock: 35e4 },
    pmTuoi: { name: "Ph\xF4 mai t\u01B0\u01A1i", kind: "top", group: "Ph\xF4 mai", icon: "\u2B1C", color: "#fff1c2", cost: 5e3, life: 3, price: 12e3, unlock: 4e5 },
    thachPm: { name: "Th\u1EA1ch ph\xF4 mai", kind: "top", group: "Ph\xF4 mai", icon: "\u{1F536}", color: "#f5e3a0", cost: 3e3, life: 3, price: 9e3, unlock: 3e5 },
    lyM: { name: "Ly size M + \u1ED1ng h\xFAt", kind: "supply", icon: "\u{1F964}", color: "#dcd5c8", cost: 1500, life: 0, unlock: 0 },
    lyL: { name: "Ly size L + \u1ED1ng h\xFAt", kind: "supply", icon: "\u{1F964}", color: "#dcd5c8", cost: 1500, life: 0, unlock: 0 },
    da: { name: "\u0110\xE1 vi\xEAn", kind: "supply", icon: "\u{1F9CA}", color: "#cfe8f5", cost: 1e3, life: 2, unlock: 0 },
    duong: { name: "N\u01B0\u1EDBc \u0111\u01B0\u1EDDng", kind: "supply", icon: "\u{1F36F}", color: "#e8c25a", cost: 500, life: 7, unlock: 0 }
  };
  for (const id of Object.keys(ITEMS)) ITEMS[id].icon = ingredientArt(id) || ITEMS[id].icon;
  var IDS = Object.keys(ITEMS);
  var byKind = (k) => IDS.filter((i) => ITEMS[i].kind === k);
  var TEAS = byKind("tea");
  var FLAVORS = byKind("flavor");
  var TOPS = byKind("top");
  var SUPPLIES = byKind("supply");
  var TOP_GROUPS = ["Tr\xE2n ch\xE2u", "Th\u1EA1ch", "Foam", "Ph\xF4 mai"];
  var FLAVOR_BOTTLE = 45;
  var SIZE_L_CAP = 5e4;
  var LOCATIONS = {
    goc: {
      name: "Ti\u1EC7m Tr\xE0 Ban \u0110\u1EA7u",
      short: "Ti\u1EC7m g\u1ED1c",
      icon: "\u{1F3E1}",
      tag: "Ti\u1EC7m Tr\xE0 C\u0169",
      slogan: "Kh\xF4ng gian \u1EA5m c\xFAng, kinh doanh b\xECnh y\xEAn",
      desc: "C\u0103n ti\u1EC7m tr\xE0 m\u1ED9c m\u1EA1c quen thu\u1ED9c thu\u1EDF m\u1EDBi m\u1EDF qu\xE1n. Kh\xF4ng b\u1ECB \xE1p l\u1EF1c th\u1EED th\xE1ch v\xF9ng mi\u1EC1n, bu\xF4n b\xE1n th\u01B0 th\xE1i theo nh\u1ECBp \u0111\u1ED9 nguy\xEAn b\u1EA3n.",
      pro: ["Kh\xF4ng gian nguy\xEAn b\u1EA3n th\xE2n quen: qu\u1EA7y pha ch\u1EBF g\u1ED7 kinh \u0111i\u1EC3n", "Kh\xF4ng \xE1p d\u1EE5ng b\u1EA5t k\u1EF3 chi ph\xED v\u1EADn h\xE0nh hay b\u1EA5t l\u1EE3i v\xF9ng mi\u1EC1n n\xE0o"],
      con: ["Kh\xF4ng h\u01B0\u1EDFng c\xE1c \u0111i\u1EC3m th\u01B0\u1EDFng \u0111\u1EB7c th\xF9 doanh thu c\u1EE7a c\xE1c t\u1EC9nh th\xE0nh"],
      fx: {},
      pool: null,
      map: [53.6, 57.1]
    },
    hanoi: {
      name: "H\xE0 N\u1ED9i",
      icon: "\u{1F3DB}\uFE0F",
      tag: "Th\u1EE7 \u0110\xF4",
      slogan: "Ng\xE0n n\u0103m v\u0103n hi\u1EBFn & tr\xE0 sen h\u1ED3 T\xE2y",
      desc: "Th\u1EE7 \u0111\xF4 s\xF4i \u0111\u1ED9ng v\u1EDBi n\xE9t v\u0103n h\xF3a th\u01B0\u1EDFng tr\xE0 tinh t\u1EBF. Kh\xE1ch h\xE0ng s\u1EB5n s\xE0ng chi m\u1EA1nh tay cho \u0111\u1ED3 u\u1ED1ng chu\u1EA9n v\u1ECB.",
      pro: ["L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n +15%", "Ti\u1EC1n boa nh\u1EADn \u0111\u01B0\u1EE3c +15%"],
      con: ["Kh\xE1ch kh\xF3 t\xEDnh +5%", "C\u1ED1c ch\xE1y/h\u1ECFng \u22121\u2605"],
      fx: { traffic: 0.15, tip: 0.15, hardCust: 0.05 },
      pool: { sunny: 25, cloudy: 40, rain: 20, cold: 15 },
      map: [30.8, 17.5]
    },
    hcm: {
      name: "TP. H\u1ED3 Ch\xED Minh",
      icon: "\u{1F3D9}\uFE0F",
      tag: "\u0110\xF4ng Nam B\u1ED9",
      slogan: "H\xF2n ng\u1ECDc Vi\u1EC5n \u0110\xF4ng kh\xF4ng bao gi\u1EDD ng\u1EE7",
      desc: "\u0110\u1EA1i \u0111\xF4 th\u1ECB s\xF4i \u0111\u1ED9ng v\xE0 s\u1EA7m u\u1EA5t b\u1EADc nh\u1EA5t c\u1EA3 n\u01B0\u1EDBc. Kh\xE1ch h\xE0ng tr\u1EBB trung, th\xEDch order online v\xE0 tr\xE0 s\u1EEFa \u0111\xEAm.",
      pro: ["Sau 20h: +25% gi\xE1 tr\u1ECB \u0111\u01A1n", "\u0110\u01A1n tr\u1EF1c tuy\u1EBFn (Online) +20%"],
      con: ["Sau 20h kh\xE1ch kh\xF3 t\xEDnh +10%", "\u0110i\u1EC7n n\u01B0\u1EDBc +20%"],
      fx: { lateBill: 0.25, online: 0.2, utility: 0.2 },
      pool: { sunny: 40, hot: 30, rain: 25, cloudy: 5 },
      map: [37.6, 77.8]
    },
    hue: {
      name: "C\u1ED1 \u0111\xF4 Hu\u1EBF",
      icon: "\u{1F3EF}",
      tag: "C\u1ED1 \u0110\xF4 Mi\u1EC1n Trung",
      slogan: "C\u1ED1 \u0111\xF4 tr\u1EA7m m\u1EB7c & tr\xE0 cung \u0111\xECnh thanh tao",
      desc: "V\xF9ng \u0111\u1EA5t kinh k\u1EF3 th\u01A1 m\u1ED9ng v\u1EDBi truy\u1EC1n th\u1ED1ng tr\xE0 cung \u0111\xECnh, nh\u1ECBp s\u1ED1ng t\u1EEB t\u1ED1n, tao nh\xE3.",
      pro: ["Kh\xE1ch ki\xEAn nh\u1EABn +25%", "Tr\xE0 \u0111\u1EB7c s\u1EA3n (Olong) +20% gi\xE1 tr\u1ECB \u0111\u01A1n"],
      con: ["Tr\u1EDDi m\u01B0a \u221220% l\u01B0\u1EE3ng kh\xE1ch", "Tr\u1EDDi m\u01B0a \u221220% \u0111\u01A1n tr\u1EF1c tuy\u1EBFn (Online)"],
      fx: { patience: 0.25, billTeas: { olong: 0.2 }, rainTraffic: -0.2, rainOnline: -0.2 },
      pool: { cloudy: 35, rain: 40, sunny: 20, cold: 5 },
      map: [44.7, 44.4]
    },
    danang: {
      name: "\u0110\xE0 N\u1EB5ng",
      icon: "\u{1F309}",
      tag: "Duy\xEAn H\u1EA3i Nam Trung B\u1ED9",
      slogan: "Th\xE0nh ph\u1ED1 \u0111\xE1ng s\u1ED1ng & c\u1EA7u R\u1ED3ng ph\u1ED3n hoa",
      desc: "\u0110\xF4 th\u1ECB du l\u1ECBch tr\u1EBB trung, v\u0103n minh v\xE0 m\u1EBFn kh\xE1ch b\xEAn b\u1EDD s\xF4ng H\xE0n th\u01A1 m\u1ED9ng.",
      pro: ["0% ti\u1EC1n gi\u1EA3", "x2 \u0111i\u1EC3m combo nhanh"],
      con: ["Kh\xE1ch nh\u1EA1y gi\xE1: t\u0103ng gi\xE1 \u2192 \u221210% kh\u1EA3 n\u0103ng mua", "Kh\xF4ng c\xF3 th\u01B0\u1EDFng doanh thu tr\u1EF1c ti\u1EBFp"],
      fx: { priceSens: 0.1, comboX2: 1 },
      pool: { sunny: 45, cloudy: 25, rain: 15, hot: 15 },
      map: [49.6, 46.8]
    },
    sapa: {
      name: "Sa Pa",
      icon: "\u{1F3D4}\uFE0F",
      tag: "T\xE2y B\u1EAFc",
      slogan: "X\u1EE9 s\u1EDF s\u01B0\u01A1ng m\xF9 & \u0111\u1ED3i ch\xE8 T\xE2y B\u1EAFc",
      desc: "Th\u1ECB tr\u1EA5n trong s\u01B0\u01A1ng v\u1EDBi kh\xED h\u1EADu se l\u1EA1nh quanh n\u0103m. Kh\xE1ch du l\u1ECBch y\xEAu th\xEDch nh\u1EEFng ly tr\xE0 n\xF3ng h\u1ED5i, tr\xE0 th\u1EA3o m\u1ED9c \u1EA5m b\u1EE5ng.",
      pro: ["Tr\xE0 n\xF3ng (H\u1ED3ng/L\u1EE5c tr\xE0/N\xF3ng) +20% gi\xE1 tr\u1ECB \u0111\u01A1n", "Kh\xE1ch ng\u1EAFm c\u1EA3nh +20% ki\xEAn nh\u1EABn"],
      con: ["Chi ph\xED nguy\xEAn li\u1EC7u v\u1EADn chuy\u1EC3n +15%", "\u0110\u1ED3 u\u1ED1ng l\u1EA1nh \u221215% ti\u1EC1n boa"],
      fx: { billTeas: { hongTra: 0.2, lucTra: 0.2, olong: 0.2 }, patience: 0.2, ingCost: 0.15, coldTip: -0.15 },
      pool: { cold: 45, cloudy: 30, rain: 20, sunny: 5 },
      map: [14.7, 9.8]
    },
    halong: {
      name: "H\u1EA1 Long",
      icon: "\u26F5",
      tag: "\u0110\xF4ng B\u1EAFc",
      slogan: "K\u1EF3 quan v\u1ECBnh bi\u1EC3n & du kh\xE1ch b\u1ED1n ph\u01B0\u01A1ng",
      desc: "Th\xE0nh ph\u1ED1 di s\u1EA3n v\u1EDBi l\u01B0\u1EE3ng du kh\xE1ch qu\u1ED1c t\u1EBF v\xE0 kh\xE1ch ngh\u1EC9 d\u01B0\u1EE1ng t\u1EA5p n\u1EADp su\u1ED1t c\xE1c m\xF9a l\u1EC5 h\u1ED9i du l\u1ECBch.",
      pro: ["Kh\xE1ch du l\u1ECBch +25% ti\u1EC1n boa", "\u0110o\xE0n kh\xE1ch du l\u1ECBch (\u0110\u01A1n l\u1EDBn) +10% gi\xE1 tr\u1ECB"],
      con: ["M\u01B0a b\xE3o \u221225% l\u01B0\u1EE3ng kh\xE1ch", "L\u01B0\u1EE3ng kh\xE1ch ph\u1EE5 thu\u1ED9c m\xF9a du l\u1ECBch"],
      fx: { tip: 0.25, bill: 0.1, rainTraffic: -0.25 },
      pool: { sunny: 35, cloudy: 25, rain: 30, cold: 10 },
      map: [40.6, 17.9]
    },
    bmt: {
      name: "Bu\xF4n Ma Thu\u1ED9t",
      icon: "\u2615",
      tag: "T\xE2y Nguy\xEAn \u0110\u1EA1i Ng\xE0n",
      slogan: "\u0110\u1EA1i ng\xE0n \u0111\u1EA5t \u0111\u1ECF b\u1EA1t ng\xE0n h\u01B0\u01A1ng c\xE0 ph\xEA",
      desc: "Th\u1EE7 ph\u1EE7 c\xE0 ph\xEA ng\u1EADp tr\xE0n n\u1EAFng gi\xF3 T\xE2y Nguy\xEAn, kh\u1EA9u v\u1ECB ng\u01B0\u1EDDi d\xE2n th\xEDch s\u1EF1 \u0111\u1EADm \u0111\xE0, b\xE9o ng\u1EADy.",
      pro: ["Tr\xE0 s\u1EEFa, Tr\xE0 s\u1EEFa Th\xE1i / Foam cheese / Tr\xE2n ch\xE2u \u0111en +20% gi\xE1 tr\u1ECB \u0111\u01A1n", "M\u1EB7t b\u1EB1ng \u221225%"],
      con: ["\u0110\u01A1n tr\u1EF1c tuy\u1EBFn (Online) \u221230%", "Kh\xE1ch ch\u1EE7 y\u1EBFu mua tr\u1EF1c ti\u1EBFp"],
      fx: { billTeas: { traSua: 0.2, traThai: 0.2 }, rent: -0.25, online: -0.3 },
      pool: { sunny: 50, cloudy: 25, hot: 15, rain: 10 },
      map: [48.3, 66.6]
    },
    canTho: {
      name: "C\u1EA7n Th\u01A1",
      icon: "\u{1F6F6}",
      tag: "Mi\u1EC1n T\xE2y S\xF4ng N\u01B0\u1EDBc",
      slogan: "Ch\u1EE3 n\u1ED5i C\xE1i R\u0103ng & tr\xE1i c\xE2y b\u1ED1n m\xF9a",
      desc: "Th\u1EE7 ph\u1EE7 mi\u1EC1n T\xE2y v\u1EDBi tr\xE1i c\xE2y t\u01B0\u01A1i ngon r\u1EBB, nh\u1ECBp s\u1ED1ng ch\u1EADm r\xE3i tr\xEAn s\xF4ng n\u01B0\u1EDBc.",
      pro: ["Chi ph\xED nguy\xEAn li\u1EC7u \u221215%", "L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n +8%"],
      con: ["N\u1EAFng n\xF3ng khi\u1EBFn kh\xE1ch \xEDt ki\xEAn nh\u1EABn \u221210%", "\u0110\u01A1n tr\u1EF1c tuy\u1EBFn \u221210%"],
      fx: { ingCost: -0.15, traffic: 0.08, patience: -0.1, online: -0.1 },
      pool: { sunny: 40, hot: 30, rain: 25, cloudy: 5 },
      map: [30.2, 82.1]
    },
    caMau: {
      name: "C\xE0 Mau",
      icon: "\u{1F980}",
      tag: "\u0110\u1EA5t M\u0169i",
      slogan: "C\u1EF1c Nam T\u1ED5 qu\u1ED1c, r\u1EEBng \u0111\u01B0\u1EDBc v\xE0 t\xF4m cua",
      desc: "V\xF9ng \u0111\u1EA5t cu\u1ED1i tr\u1EDDi v\u1EDBi thi\xEAn nhi\xEAn hoang s\u01A1, ng\u01B0\u1EDDi d\xE2n ch\xE2n ch\u1EA5t, \xEDt kh\xE1ch v\xE3ng lai nh\u01B0ng qu\xFD qu\xE1n quen.",
      pro: ["M\u1EB7t b\u1EB1ng \u221235%", "\u0110i\u1EC7n n\u01B0\u1EDBc \u221215%", "Kh\xE1ch quen: ti\u1EC1n boa +10%"],
      con: ["L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n \u221210%", "M\u01B0a l\u1EDBn th\u01B0\u1EDDng xuy\xEAn"],
      fx: { rent: -0.35, utility: -0.15, tip: 0.1, traffic: -0.1 },
      pool: { rain: 40, sunny: 30, cloudy: 20, hot: 10 },
      map: [23.8, 87.2]
    },
    hoangSa: {
      name: "Ho\xE0ng Sa \u2013 Tr\u01B0\u1EDDng Sa",
      icon: "\u{1F3DD}\uFE0F",
      tag: "Qu\u1EA7n \u0110\u1EA3o Thi\xEAng Li\xEAng",
      slogan: "Tr\xE0 gi\u1EEFa bi\u1EC3n kh\u01A1i, chi\u1EBFn s\u0129 v\xE0 ng\u01B0 d\xE2n",
      desc: "Qu\xE1n tr\xE0 n\u01A1i \u0111\u1EA7u s\xF3ng ng\u1ECDn gi\xF3. Kh\xE1ch l\xE0 chi\u1EBFn s\u0129 v\xE0 ng\u01B0 d\xE2n qu\xFD t\u1EEBng ly tr\xE0 ng\u1ECDt, ti\u1EC1n boa h\u1EADu h\u0129nh.",
      pro: ["Ti\u1EC1n boa +40%", "Kh\xE1ch ki\xEAn nh\u1EABn +30%"],
      con: ["Chi ph\xED nguy\xEAn li\u1EC7u v\u1EADn chuy\u1EC3n +30%", "L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n \u221225%", "\u0110\u01A1n tr\u1EF1c tuy\u1EBFn kh\xF4ng kh\u1EA3 d\u1EE5ng (\u2212100%)"],
      fx: { tip: 0.4, patience: 0.3, ingCost: 0.3, traffic: -0.25, online: -1 },
      pool: { sunny: 35, rain: 30, hot: 20, cloudy: 15 },
      map: [77.6, 44.1]
    }
  };
  var LOCATION_COST = 1e6;
  var SEASONS = {
    spring: { name: "Xu\xE2n", icon: "\u{1F338}", temp: [20, 28], pool: { sunny: 40, cloudy: 30, rain: 25, hot: 0, cold: 5 } },
    summer: { name: "H\u1EA1", icon: "\u{1F31E}", temp: [28, 38], pool: { sunny: 35, cloudy: 15, rain: 18, hot: 32, cold: 0 } },
    autumn: { name: "Thu", icon: "\u{1F341}", temp: [18, 27], pool: { sunny: 35, cloudy: 35, rain: 20, hot: 0, cold: 10 } },
    winter: { name: "\u0110\xF4ng", icon: "\u26C4", temp: [8, 17], pool: { sunny: 20, cloudy: 30, rain: 15, hot: 0, cold: 35 } }
  };
  var SEASON_ORDER = ["spring", "summer", "autumn", "winter"];
  var WEATHERS = {
    sunny: { name: "N\u1EAFng \u0111\u1EB9p", icon: "\u2600\uFE0F", traffic: 0.1, tip: "N\u1EAFng \u0111\u1EB9p d\u1ECBu m\xE1t! Kh\xE1ch d\u1EA1o ph\u1ED1 gh\xE9 qu\xE1n t\u1EA5p n\u1EADp (+10%), ki\xEAn nh\u1EABn h\u01A1n" },
    cloudy: { name: "Nhi\u1EC1u m\xE2y", icon: "\u26C5", traffic: 0, tip: "Tr\u1EDDi nhi\u1EC1u m\xE2y d\u1EC5 ch\u1ECBu, m\u1ED9t ng\xE0y b\xE1n h\xE0ng b\xECnh th\u01B0\u1EDDng" },
    rain: { name: "M\u01B0a r\xE0o", icon: "\u{1F327}\uFE0F", traffic: -0.15, online: 0.3, tip: "Tr\u1EDDi m\u01B0a: kh\xE1ch t\u1EA1i qu\u1EA7y gi\u1EA3m 15% nh\u01B0ng \u0111\u01A1n online t\u0103ng 30%" },
    hot: { name: "N\u1EAFng n\xF3ng", icon: "\u{1F975}", traffic: 0.05, coldBias: 1, tip: "Tr\u1EDDi n\xF3ng b\u1EE9c: kh\xE1ch \u01B0a \u0111\u1ED3 l\u1EA1nh, nhi\u1EC1u \u0111\xE1, size L" },
    cold: { name: "Se l\u1EA1nh", icon: "\u{1F976}", traffic: -0.05, warmBias: 1, tip: "Tr\u1EDDi se l\u1EA1nh: kh\xE1ch chu\u1ED9ng tr\xE0 n\xF3ng, h\u1ED3ng tr\xE0, \xF4 long" }
  };
  var DAY_EVENTS = [
    { id: "trend", icon: "\u{1F4C8}", name: "M\xF3n hot tr\xEAn m\u1EA1ng", desc: "tr\xE0 s\u1EEFa \u0111\u01B0\u1EE3c g\u1ECDi nhi\u1EC1u g\u1EA5p \u0111\xF4i, kh\xE1ch t\xF2 m\xF2 gh\xE9 qu\xE1n (+25%)", traffic: 0.25, hotItem: "traSua" },
    { id: "festival", icon: "\u{1F389}", name: "Ng\xE0y h\u1ED9i ph\u1ED1 tr\xE0", desc: "ph\u1ED1 \u0111\xF4ng vui, l\u01B0\u1EE3ng kh\xE1ch t\u0103ng m\u1EA1nh (+30%)", traffic: 0.3 },
    { id: "school", icon: "\u{1F392}", name: "Ng\xE0y tan h\u1ECDc s\u1EDBm", desc: "h\u1ECDc sinh, sinh vi\xEAn \u0111\u1ED5 v\u1EC1 \u0111\xF4ng (+20%), gi\xE1 tr\u1ECB \u0111\u01A1n th\u1EA5p h\u01A1n", traffic: 0.2, bill: -0.05, student: true },
    { id: "payday", icon: "\u{1F4B5}", name: "Ng\xE0y ph\xE1t l\u01B0\u01A1ng", desc: "d\xE2n v\u0103n ph\xF2ng tho\u1EA3i m\xE1i chi ti\xEAu: ti\u1EC1n boa +25%", tip: 0.25 },
    { id: "heat", icon: "\u{1F525}", name: "\u0110\u1EE3t n\xF3ng \u0111\u1EC9nh \u0111i\u1EC3m", desc: "\u0111\u1ED3 l\u1EA1nh, nhi\u1EC1u \u0111\xE1 b\xE1n ch\u1EA1y (+15% kh\xE1ch)", traffic: 0.15, coldBias: 1 },
    { id: "quiet", icon: "\u{1F319}", name: "Ng\xE0y th\u01B0 th\u1EA3", desc: "kh\xE1ch \xEDt h\u01A1n (\u221215%) nh\u01B0ng ki\xEAn nh\u1EABn h\u01A1n (+20%)", traffic: -0.15, patience: 0.2 },
    { id: "critic", icon: "\u{1F4F8}", name: "Food reviewer gh\xE9 qu\xE1n", desc: "m\u1ED9t reviewer n\u1ED5i ti\u1EBFng s\u1EBD ch\u1EA5m \u0111i\u1EC3m qu\xE1n \u2014 c\u1EA9n th\u1EADn t\u1EEBng ly!", traffic: 0.05, critic: true },
    { id: "normal", icon: "\u{1F324}\uFE0F", name: "M\u1ED9t ng\xE0y b\xECnh th\u01B0\u1EDDng", desc: "kh\xF4ng c\xF3 s\u1EF1 ki\u1EC7n \u0111\u1EB7c bi\u1EC7t, c\u1EE9 pha tr\xE0 th\u1EADt ngon!", traffic: 0 }
  ];
  var ARCHETYPES = {
    sinhVien: {
      name: "Sinh vi\xEAn",
      tag: "\u{1F393} Sinh vi\xEAn",
      avatars: ["\u{1F9D1}\u200D\u{1F393}", "\u{1F469}\u200D\u{1F393}", "\u{1F9D2}"],
      patience: 0.9,
      bill: 0.95,
      tip: 0.5,
      hard: 0.1,
      w: 24,
      lines: ["Ch\u1EE7 qu\xE1n \u01A1i cho em 1 ly {drink} {size}{tops}, t\xEDnh gi\xE1 sinh vi\xEAn gi\xF9m em nha!", "Em mu\u1ED1n {drink} {size}{tops}, nhanh gi\xF9m em k\u1EBBo tr\u1EC5 gi\u1EDD h\u1ECDc \u1EA1!"]
    },
    vanPhong: {
      name: "D\xE2n v\u0103n ph\xF2ng",
      tag: "\u{1F4BC} V\u0103n ph\xF2ng",
      avatars: ["\u{1F468}\u200D\u{1F4BC}", "\u{1F469}\u200D\u{1F4BC}", "\u{1F9D1}\u200D\u{1F4BB}"],
      patience: 0.75,
      bill: 1.05,
      tip: 1.2,
      hard: 0.2,
      w: 22,
      lines: ["Cho t\xF4i 1 ly {drink} {size}{tops}, pha nhanh gi\xFAp t\xF4i, s\u1EAFp h\u1ECDp r\u1ED3i.", "M\u1ED9t {drink} {size}{tops} nh\xE9, nh\u1EDB \u0111\xF3ng n\u1EAFp k\u1EF9 \u0111\u1EC3 mang l\xEAn v\u0103n ph\xF2ng."]
    },
    genZ: {
      name: "Gen Z",
      tag: "\u2728 Gen Z",
      avatars: ["\u{1F9D1}\u200D\u{1F3A4}", "\u{1F467}", "\u{1F466}"],
      patience: 0.85,
      bill: 1,
      tip: 0.8,
      hard: 0.3,
      w: 20,
      lines: ["Cho m\xECnh 1 ly {drink} {size}{tops} nha, ch\u1EE5p \u1EA3nh s\u1ED1ng \u1EA3o cho \u0111\u1EB9p \xE1!", "Ly {drink} {size}{tops} nh\xE9 ch\u1EE7 qu\xE1n, m\xECnh check-in xong s\u1EBD \u0111\u0103ng story li\u1EC1n!"]
    },
    bac: {
      name: "B\xE1c l\u1EDBn tu\u1ED5i",
      tag: "\u{1F474} B\xE1c",
      avatars: ["\u{1F474}", "\u{1F475}", "\u{1F9D3}"],
      patience: 1.35,
      bill: 1,
      tip: 1.1,
      hard: 0.05,
      w: 12,
      lines: ["Ch\xE1u \u01A1i, cho b\xE1c 1 ly {drink} {size}{tops}, c\u1EE9 t\u1EEB t\u1EEB th\xF4i nh\xE9.", "B\xE1c l\u1EA5y ly {drink} {size}{tops} ch\xE1u nh\xE9, \u0111\u1EEBng ng\u1ECDt qu\xE1 nha."]
    },
    vip: {
      name: "Kh\xE1ch VIP",
      tag: "\u{1F451} VIP",
      avatars: ["\u{1F574}\uFE0F", "\u{1F935}", "\u{1F478}"],
      patience: 0.8,
      bill: 1.15,
      tip: 2.2,
      hard: 0.35,
      w: 5,
      lines: ["Cho t\xF4i 1 ly {drink} {size}{tops}, t\xF4i tr\u1EA3 gi\xE1 cao n\u1EBFu ngon.", "M\u1ED9t {drink} {size}{tops}, l\xE0m c\u1EA9n th\u1EADn, qu\xE1n n\xE0o c\u0169ng ch\u01B0a l\xE0m t\xF4i h\xE0i l\xF2ng."]
    },
    macCa: {
      name: "Kh\xE1ch m\u1EB7c c\u1EA3",
      tag: "\u{1F4B8} M\u1EB7c c\u1EA3",
      avatars: ["\u{1F9D4}", "\u{1F469}\u200D\u{1F9B0}", "\u{1F468}\u200D\u{1F9B2}"],
      patience: 1.1,
      bill: 0.88,
      tip: 0.2,
      hard: 0.15,
      w: 9,
      lines: ["Ch\u1EE7 qu\xE1n \u01A1i, cho 1 ly {drink} {size}{tops}, b\u1EDBt cho t\xF4i ch\xFAt x\xEDu nha?", "L\u1EA5y 1 {drink} {size}{tops}, kh\xE1ch quen r\u1ED3i, t\xEDnh r\u1EBB cho nh\xE9!"]
    },
    reviewer: {
      name: "Food reviewer",
      tag: "\u{1F4F8} Reviewer",
      avatars: ["\u{1F9D1}\u200D\u{1F373}", "\u{1F4F7}"],
      patience: 0.8,
      bill: 1.1,
      tip: 1.5,
      hard: 0.5,
      w: 3,
      lines: ["Cho m\xECnh 1 ly {drink} {size}{tops}, m\xECnh \u0111ang quay review \u0111\xF3 nha!", "M\xECnh l\u1EA5y {drink} {size}{tops}, m\xECnh s\u1EBD ch\u1EA5m \u0111i\u1EC3m t\u1EEBng chi ti\u1EBFt nh\xE9!"]
    },
    idol: {
      name: "Idol / Streamer",
      tag: "\u{1F3A4} Idol",
      avatars: ["\u{1F469}\u200D\u{1F3A4}", "\u{1F933}"],
      patience: 0.8,
      bill: 1.1,
      tip: 1.3,
      hard: 0.3,
      w: 7,
      lines: ["Cho m\xECnh 1 ly {drink} {size}{tops} nha, m\xECnh \u0111ang livestream n\xEAn pha xinh xinh gi\xFAp m\xECnh!", "Ly {drink} {size}{tops} nh\xE9, nh\u1EDB cho ly \u0111\u1EB9p \u0111\u1EC3 m\xECnh quay clip \xE1!"]
    },
    gamer: {
      name: "Game th\u1EE7",
      tag: "\u{1F3A7} Game th\u1EE7",
      avatars: ["\u{1F3A7}", "\u{1F3AE}"],
      patience: 0.85,
      bill: 1,
      tip: 0.6,
      hard: 0.25,
      w: 9,
      lines: ["Cho m\xECnh 1 ly {drink} {size}{tops} nh\xE9, \u0111ang k\u1EB9t tr\u1EADn, nhanh gi\xFAp m\xECnh!", "M\u1ED9t {drink} {size}{tops} \u0111i ch\u1EE7 qu\xE1n, m\xECnh th\u1EE9c \u0111\xEAm leo rank \u0111\xE2y."]
    },
    congNhan: {
      name: "Th\u1EE3 & c\xF4ng nh\xE2n",
      tag: "\u{1F477} C\xF4ng nh\xE2n",
      avatars: ["\u{1F477}", "\u{1F9D1}\u200D\u{1F527}"],
      patience: 0.9,
      bill: 0.95,
      tip: 0.9,
      hard: 0.1,
      w: 9,
      lines: ["Cho anh 1 ly {drink} {size}{tops}, tr\u1EDDi n\xF3ng qu\xE1, nhi\u1EC1u \u0111\xE1 nha em!", "Em \u01A1i, m\u1ED9t {drink} {size}{tops}, anh gi\u1EA3i lao 10 ph\xFAt th\xF4i."]
    },
    shipper: {
      name: "Shipper",
      tag: "\u{1F6F5} Shipper",
      avatars: ["\u{1F6F5}", "\u{1F9E2}"],
      patience: 0.55,
      bill: 1,
      tip: 0.7,
      hard: 0.3,
      w: 8,
      lines: ["Cho m\xECnh 1 ly {drink} {size}{tops}, nhanh nhanh gi\xFAp m\xECnh, c\xF2n \u0111\u01A1n \u0111ang giao!", "M\u1ED9t {drink} {size}{tops} mang \u0111i, m\xECnh g\u1EA5p l\u1EAFm!"]
    },
    giaoVien: {
      name: "C\xF4 gi\xE1o",
      tag: "\u{1F4DA} C\xF4 gi\xE1o",
      avatars: ["\u{1F469}\u200D\u{1F3EB}", "\u{1F4DA}"],
      patience: 1.1,
      bill: 1,
      tip: 1,
      hard: 0.15,
      w: 7,
      lines: ["C\xF4 l\u1EA5y 1 ly {drink} {size}{tops} nh\xE9 em, \xEDt ng\u1ECDt th\xF4i.", "Cho c\xF4 m\u1ED9t {drink} {size}{tops}, c\xF4 ngh\u1EC9 gi\u1EEFa ti\u1EBFt gh\xE9 qua."]
    },
    be: {
      name: "B\xE9 tan h\u1ECDc",
      tag: "\u{1F388} B\xE9",
      avatars: ["\u{1F9D2}", "\u{1F467}", "\u{1F466}"],
      patience: 0.8,
      bill: 0.9,
      tip: 0.3,
      hard: 0.1,
      w: 8,
      lines: ["C\xF4/ch\xFA \u01A1i cho con 1 ly {drink} {size}{tops} \u1EA1!", "Con mu\u1ED1n u\u1ED1ng {drink} {size}{tops}, m\u1EB9 cho ti\u1EC1n r\u1ED3i \u1EA1!"]
    }
  };
  var CATEGORIES = {
    tra: { name: "Tr\xE0", icon: "\u{1F375}", desc: "T\u0103ng 0,5% t\u1EC9 l\u1EC7 kh\xE1ch gh\xE9 qu\xE1n m\u1ED7i c\u1EA5p.", key: "traffic", per: 5e-3 },
    huong: { name: "H\u01B0\u01A1ng", icon: "\u{1F353}", desc: "T\u0103ng 0,5% th\u1EDDi gian ki\xEAn nh\u1EABn ch\u1EDD m\u1ED7i c\u1EA5p.", key: "patience", per: 5e-3 },
    top: { name: "Topping", icon: "\u26AB", desc: "Gi\u1EA3m 0,5% t\u1EC9 l\u1EC7 \u0111\xE1nh gi\xE1 x\u1EA5u/k\xE9m m\u1ED7i c\u1EA5p.", key: "badRev", per: 5e-3 },
    nv: { name: "Nh\xE2n vi\xEAn", icon: "\u{1F3C6}", desc: "T\u0103ng 1% t\u1ED1c \u0111\u1ED9 l\xE0m vi\u1EC7c c\u1EE7a nh\xE2n vi\xEAn m\u1ED7i c\u1EA5p.", key: "speedStaff", per: 0.01 },
    online: { name: "Online", icon: "\u{1F4F2}", desc: "T\u0103ng 1% t\u1EA7n su\u1EA5t n\u1ED5 \u0111\u01A1n online m\u1ED7i c\u1EA5p.", key: "online", per: 0.01 }
  };
  var ONLINE_GATE = { profit: 15e6, orders: 60, rating: 4 };
  var catCost = (lvl) => Math.round(1e3 * Math.pow(1.55, lvl) / 100) * 100;
  var EQUIP = [
    { id: "binhRot", icon: "\u{1F3FA}", name: "B\xECnh r\xF3t tr\xE0", tiers: [{ n: "B\xECnh r\xF3t th\u1EE7y tinh", c: 0, d: "R\xF3t tr\xE0 nhanh h\u01A1n 10%" }, { n: "B\xECnh r\xF3t inox", c: 1e7, d: "R\xF3t nhanh h\u01A1n 25%" }, { n: "B\xECnh r\xF3t t\u1EF1 \u0111\u1ED9ng", c: 35e6, d: "R\xF3t nhanh h\u01A1n 45%, \xEDt tr\xE0n" }], key: "pour", vals: [0.1, 0.25, 0.45] },
    { id: "mayNap", icon: "\u{1F3ED}", name: "M\xE1y \u0111\xF3ng n\u1EAFp", tiers: [{ n: "M\xE1y \u0111\xF3ng n\u1EAFp b\xE1n t\u1EF1 \u0111\u1ED9ng", c: 0, d: "\u0110\xF3ng n\u1EAFp 1,2 gi\xE2y" }, { n: "M\xE1y \u0111\xF3ng n\u1EAFp t\u1EF1 \u0111\u1ED9ng", c: 12e6, d: "\u0110\xF3ng n\u1EAFp nhanh h\u01A1n 30%" }, { n: "M\xE1y \u0111\xF3ng n\u1EAFp 2 \u0111\u1EA7u", c: 4e7, d: "\u0110\xF3ng n\u1EAFp nhanh h\u01A1n 55%" }], key: "seal", vals: [0, 0.3, 0.55] },
    { id: "khayTop", icon: "\u{1F9F0}", name: "Khay topping", tiers: [{ n: "Khay inox", c: 0, d: "Gi\u1EA3m 3% chi ph\xED topping m\u1ED7i ph\u1EA7n" }, { n: "Khay gi\u1EEF nhi\u1EC7t", c: 8e6, d: "Gi\u1EA3m 8% chi ph\xED topping m\u1ED7i ph\u1EA7n" }, { n: "Khay b\u1EA3o qu\u1EA3n", c: 3e7, d: "Gi\u1EA3m 15% chi ph\xED topping m\u1ED7i ph\u1EA7n" }], key: "topSave", vals: [0.03, 0.08, 0.15] },
    { id: "boDungCu", icon: "\u{1F944}", name: "Ly, \u0111\u01B0\u1EDDng, \u0111\xE1", tiers: [{ n: "B\u1ED9 d\u1EE5ng c\u1EE5 ti\xEAu chu\u1EA9n", c: 0, d: "Kh\xE1ch h\xE0i l\xF2ng +5% ti\u1EC1n boa" }, { n: "B\u1ED9 \u0111\u1ECBnh l\u01B0\u1EE3ng chu\u1EA9n", c: 6e6, d: "Ti\u1EC1n boa +12%" }, { n: "B\u1ED9 pha ch\u1EBF chuy\xEAn nghi\u1EC7p", c: 25e6, d: "Ti\u1EC1n boa +25%" }], key: "tip", vals: [0.05, 0.12, 0.25] },
    { id: "tuLanh", icon: "\u2744\uFE0F", name: "T\u1EE7 l\u1EA1nh", tiers: [{ n: "T\u1EE7 l\u1EA1nh th\u01B0\u1EDDng", c: 5e5, d: "H\u1EA1n d\xF9ng nguy\xEAn li\u1EC7u +1 ng\xE0y" }, { n: "T\u1EE7 l\u1EA1nh inverter", c: 3e6, d: "H\u1EA1n d\xF9ng +2 ng\xE0y" }, { n: "Kho l\u1EA1nh mini", c: 15e6, d: "H\u1EA1n d\xF9ng +3 ng\xE0y" }], key: "life", vals: [1, 2, 3] },
    { id: "mascot", icon: "\u{1F43B}", name: "Mascot qu\xE1n", tiers: [{ n: "G\u1EA5u b\xF4ng mascot", c: 6e5, d: "Th\xEAm 3% kh\xE1ch" }, { n: "Mascot nh\xFAn nh\u1EA3y", c: 5e6, d: "Th\xEAm 6% kh\xE1ch" }, { n: "Mascot ng\u01B0\u1EDDi \u0111i ph\xE1t t\u1EDD r\u01A1i", c: 2e7, d: "Th\xEAm 10% kh\xE1ch" }], key: "traffic", vals: [0.03, 0.06, 0.1] },
    { id: "led", icon: "\u{1F4A1}", name: "Bi\u1EC3n hi\u1EC7u \u0111\xE8n LED", tiers: [{ n: "Bi\u1EC3n hi\u1EC7u LED nh\u1ECF", c: 4e5, d: "Thu h\xFAt th\xEAm 4% kh\xE1ch" }, { n: "Bi\u1EC3n hi\u1EC7u LED neon", c: 4e6, d: "Thu h\xFAt th\xEAm 8% kh\xE1ch" }, { n: "Bi\u1EC3n LED 3D", c: 18e6, d: "Thu h\xFAt th\xEAm 12% kh\xE1ch" }], key: "traffic", vals: [0.04, 0.08, 0.12] },
    { id: "banGhe", icon: "\u{1FA91}", name: "B\xE0n gh\u1EBF cho kh\xE1ch ng\u1ED3i", tiers: [{ n: "B\xE0n gh\u1EBF nh\u1EF1a", c: 5e5, d: "Th\xEAm 2 b\xE0n (t\u1ED5ng 4 \u2192 6)" }, { n: "B\xE0n gh\u1EBF g\u1ED7", c: 4e6, d: "Th\xEAm 2 b\xE0n n\u1EEFa, kh\xE1ch ng\u1ED3i +10%" }, { n: "B\xE0n gh\u1EBF cao c\u1EA5p", c: 2e7, d: "Th\xEAm 2 b\xE0n n\u1EEFa, kh\xE1ch ng\u1ED3i +20%" }], key: "tables", vals: [2, 4, 6] },
    { id: "xeMay", icon: "\u{1F6F5}", name: "Xe m\xE1y giao h\xE0ng", tiers: [{ n: "Xe m\xE1y c\u0169", c: 8e5, d: "\u0110\u01A1n online +10%" }, { n: "Xe m\xE1y \u0111i\u1EC7n", c: 6e6, d: "\u0110\u01A1n online +20%" }, { n: "\u0110\u1ED9i xe giao 3 ng\u01B0\u1EDDi", c: 25e6, d: "\u0110\u01A1n online +35%" }], key: "online", vals: [0.1, 0.2, 0.35] },
    { id: "qcMxh", icon: "\u{1F4F2}", name: "Qu\u1EA3ng c\xE1o m\u1EA1ng x\xE3 h\u1ED9i", tiers: [{ n: "Fanpage c\u01A1 b\u1EA3n", c: 5e5, d: "Kh\xE1ch +3%, follower t\u0103ng \u0111\u1EC1u" }, { n: "K\xEAnh TikTok chuy\xEAn nghi\u1EC7p", c: 5e6, d: "Kh\xE1ch +6%, follower nhanh h\u01A1n" }, { n: "Agency ch\u0103m s\xF3c k\xEAnh", c: 22e6, d: "Kh\xE1ch +10%, follower r\u1EA5t nhanh" }], key: "traffic", vals: [0.03, 0.06, 0.1] },
    { id: "quay", icon: "\u{1F4D0}", name: "M\u1EDF r\u1ED9ng qu\u1EA7y", tiers: [{ n: "Qu\u1EA7y d\xE0i th\xEAm 1m", c: 5e5, d: "H\xE0ng ch\u1EDD t\u1ED1i \u0111a 6 kh\xE1ch" }, { n: "Qu\u1EA7y ch\u1EEF L", c: 45e5, d: "H\xE0ng ch\u1EDD t\u1ED1i \u0111a 7 kh\xE1ch" }, { n: "Qu\u1EA7y m\u1EDF 2 m\u1EB7t", c: 18e6, d: "H\xE0ng ch\u1EDD t\u1ED1i \u0111a 8 kh\xE1ch" }], key: "queue", vals: [1, 2, 3] },
    { id: "tang", icon: "\u{1F3EC}", name: "N\xE2ng t\u1EA7ng", tiers: [{ n: "T\u1EA7ng l\u1EEDng", c: 2e6, d: "Ph\u1EE5c v\u1EE5 c\xF9ng l\xFAc +10 kh\xE1ch/ng\xE0y" }, { n: "T\u1EA7ng 2 r\u1ED9ng r\xE3i", c: 15e6, d: "Th\xEAm 20 kh\xE1ch/ng\xE0y d\u1EF1 ki\u1EBFn" }, { n: "S\xE2n th\u01B0\u1EE3ng chill", c: 5e7, d: "Th\xEAm 35 kh\xE1ch/ng\xE0y d\u1EF1 ki\u1EBFn" }], key: "extraCust", vals: [10, 20, 35] },
    { id: "mayLanh", icon: "\u{1F9CA}", name: "M\xE1y l\u1EA1nh", tiers: [{ n: "Qu\u1EA1t tr\u1EA7n h\u01A1i n\u01B0\u1EDBc", c: 1e6, d: "Kh\xE1ch ki\xEAn nh\u1EABn h\u01A1n 8%" }, { n: "M\xE1y l\u1EA1nh treo t\u01B0\u1EDDng", c: 8e6, d: "Ki\xEAn nh\u1EABn +15%" }, { n: "H\u1EC7 th\u1ED1ng \u0111i\u1EC1u h\xF2a trung t\xE2m", c: 3e7, d: "Ki\xEAn nh\u1EABn +25%" }], key: "patience", vals: [0.08, 0.15, 0.25], util: [0.05, 0.1, 0.2] },
    { id: "nhanDien", icon: "\u{1F3F7}\uFE0F", name: "B\u1ED9 nh\u1EADn di\u1EC7n th\u01B0\u01A1ng hi\u1EC7u", tiers: [{ n: "Tem ly & menu th\u01B0\u01A1ng hi\u1EC7u", c: 7e5, d: "Ti\u1EC1n boa +5%, tem ly in logo" }, { n: "\u0110\u1ED3ng ph\u1EE5c & t\xFAi gi\u1EA5y", c: 6e6, d: "Ti\u1EC1n boa +10%, kh\xE1ch +3%" }, { n: "Th\u01B0\u01A1ng hi\u1EC7u chu\u1ED7i", c: 25e6, d: "Ti\u1EC1n boa +15%, kh\xE1ch +6%" }], key: "brand", vals: [0.05, 0.1, 0.15] },
    { id: "tablet", icon: "\u{1F4DF}", name: "Tablet nh\u1EADn \u0111\u01A1n online", tiers: [{ n: "Tablet #1", c: 3e5, d: "M\u1EDF 1 app giao h\xE0ng" }, { n: "Tablet #2", c: 6e5, d: "M\u1EDF th\xEAm 1 app giao h\xE0ng" }, { n: "Tablet #3", c: 12e5, d: "M\u1EDF th\xEAm 1 app giao h\xE0ng" }, { n: "Tablet #4", c: 24e5, d: "M\u1EDF th\xEAm 1 app giao h\xE0ng" }], key: "tablets", vals: [1, 2, 3, 4] },
    { id: "mayPhat", icon: "\u{1F50C}", name: "M\xE1y ph\xE1t \u0111i\u1EC7n", tiers: [{ n: "M\xE1y ph\xE1t \u0111i\u1EC7n mini", c: 25e5, d: "M\u1EA5t \u0111i\u1EC7n: m\xE1y \u0111\xF3ng n\u1EAFp & \u0111\xE8n v\u1EABn ch\u1EA1y (b\xECnh tr\xE0 t\u1EA1m ng\u01B0ng)" }, { n: "M\xE1y ph\xE1t \u0111i\u1EC7n c\xF4ng su\u1EA5t l\u1EDBn", c: 12e6, d: "M\u1EA5t \u0111i\u1EC7n ch\u1EC9 ch\u1EADp ch\u1EDDn 1\u20132 gi\xE2y, m\u1ECDi m\xE1y v\u1EABn ch\u1EA1y" }], key: "gen", vals: [1, 2] },
    { id: "giayPhep", icon: "\u{1F4DC}", name: "Gi\u1EA5y ph\xE9p kinh doanh", tiers: [{ n: "Gi\u1EA5y ph\xE9p kinh doanh", c: 15e5, d: "Qua ki\u1EC3m tra gi\u1EA5y ph\xE9p \u0111\u01B0\u1EE3c th\u01B0\u1EDFng, kh\xF4ng b\u1ECB ph\u1EA1t/\u0111\xECnh ch\u1EC9" }], key: "license", vals: [1] },
    { id: "attp", icon: "\u{1F9EA}", name: "Ch\u1EE9ng nh\u1EADn ATTP", tiers: [{ n: "Ch\u1EE9ng nh\u1EADn ATTP", c: 3e6, d: "Ki\u1EC3m tra v\u1EC7 sinh: th\u01B0\u1EDFng l\u1EDBn h\u01A1n, gi\u1EA3m 50% ti\u1EC1n ph\u1EA1t" }], key: "attp", vals: [1] }
  ];
  var APPS = [
    { id: "soppi", name: "Soppi", color: "#ff7a3d" },
    { id: "topTop", name: "T\xF3p T\xF3p", color: "#e8416a" },
    { id: "biiiii", name: "Biiiii", color: "#3d9bff" },
    { id: "goRap", name: "G\u1EDD R\xE1p", color: "#3dbd6b" }
  ];
  var APP_FEE = 0.2;
  var PET_DECOR = [
    { id: "sofa", icon: "\u{1F6CB}\uFE0F", name: "Sofa Th\u01B0 Gi\xE3n Cho B\xE9", desc: "Gh\u1EBF sofa n\u1EC7m \xEAm \xE1i, ph\u1EE5c h\u1ED3i n\u0103ng l\u01B0\u1EE3ng nhanh h\u01A1n.", cost: 25e5, fx: "Gi\u1EA3m 25% t\u1ED1c \u0111\u1ED9 m\u1EA5t n\u0103ng l\u01B0\u1EE3ng" },
    { id: "bat", icon: "\u{1F372}", name: "B\xE1t \u0102n H\u1EA1t & Pate C\xE1 Ng\u1EEB", desc: "Th\u1EE9c \u0103n dinh d\u01B0\u1EE1ng, no l\xE2u h\u01A1n.", cost: 18e5, fx: "+20 \u0111\u1ED9 no & +10 Vui v\u1EBB" },
    { id: "bien", icon: "\u{1FAA7}", name: "Bi\u1EC3n G\u1ED7 X\u01B0\u01A1ng Treo T\u01B0\u1EDDng", desc: "B\u1EA3ng hi\u1EC7u th\xFA c\u01B0ng trang tr\xED qu\xE1n.", cost: 12e5, fx: "+10% Ti\u1EC1n Tip to\xE0n qu\xE1n" },
    { id: "voi", icon: "\u{1F6BF}", name: "V\xF2i Sen Massage B\u1ECDt M\u1ECBn", desc: "T\u1EAFm nhanh s\u1EA1ch h\u01A1n, b\xE9 vui h\u01A1n.", cost: 3e6, fx: "+30 S\u1EA1ch & +10 Vui v\u1EBB" },
    { id: "say", icon: "\u{1F4A8}", name: "M\xE1y S\u1EA5y L\xF4ng T\u1EA1o Ki\u1EC3u", desc: "Gi\u1EEF b\u1ED9 l\xF4ng lu\xF4n m\u01B0\u1EE3t.", cost: 22e5, fx: "Gi\u1EA3m 25% t\u1ED1c \u0111\u1ED9 m\u1EA5t S\u1EA1ch" },
    { id: "xit", icon: "\u{1F9F4}", name: "B\xECnh X\u1ECBt D\u1EA7u H\u01B0\u01A1ng Hoa", desc: "M\xF9i th\u01A1m d\u1ECBu m\xE1t.", cost: 15e5, fx: "Gi\u1EA3m 25% t\u1ED1c \u0111\u1ED9 m\u1EA5t Vui v\u1EBB" },
    { id: "khan", icon: "\u{1F9E3}", name: "Kh\u0103n Bandana \u0110\u1ECF May M\u1EAFn", desc: "T\u0103ng t\u1EC9 l\u1EC7 may m\u1EAFn c\u1EE7a to\xE0n qu\xE1n.", cost: 2e6, fx: "+8% Doanh thu to\xE0n chu\u1ED7i" },
    { id: "kim", icon: "\u2702\uFE0F", name: "K\xECm B\u1EA5m M\xF3ng Chuy\xEAn D\u1EE5ng", desc: "Gi\u1EEF m\xF3ng s\u1EA1ch, b\xE9 tho\u1EA3i m\xE1i.", cost: 9e5, fx: "+10 EXP ch\u0103m s\xF3c m\u1ED7i l\u1EA7n ch\u01A1i" },
    { id: "sua", icon: "\u{1F9FC}", name: "S\u1EEFa T\u1EAFm Th\u1EA3o D\u01B0\u1EE3c Ve Tr\xE0o", desc: "S\u1EA1ch bong, \u0111u\u1ED5i ve.", cost: 17e5, fx: "B\u1EA3o v\u1EC7 ch\u1EC9 s\u1ED1 kh\u1ECFi t\u1EE5t \u0111\u1ED9t ng\u1ED9t" },
    { id: "app", icon: "\u{1F4F1}", name: "App Smart Pet Spa Booking", desc: "\u0110\u1EB7t l\u1ECBch spa th\xFA c\u01B0ng th\xF4ng minh.", cost: 42e5, fx: "+30% t\u1ED1c \u0111\u1ED9 ch\u0103m s\xF3c" }
  ];
  var PETS = {
    shiba: {
      name: "Ch\xF3 Shiba V\xE0ng",
      icon: "\u{1F415}",
      adopt: 1e7,
      desc: "Th\u1EA7n t\xE0i Qu\xE1n ch\xEDnh, check-in h\xFAt kh\xE1ch, ki\xEAn nh\u1EABn.",
      buffs: ["\u{1F4B0} Th\u1EA7n t\xE0i Qu\xE1n ch\xEDnh: t\u0103ng +15% \u2192 +25% doanh thu & ti\u1EC1n Tip tr\xEAn m\u1ED7i bill b\xE1n tr\u1EF1c ti\u1EBFp.", "\u{1F31F} Check-in h\xFAt kh\xE1ch: kh\xE1ch th\xEDch check-in c\xF9ng c\xFAn, t\u0103ng \u0111i\u1EC3m \u0111\xE1nh gi\xE1 5\u2605.", "\u{1F497} Ki\xEAn nh\u1EABn: kh\xE1ch ki\xEAn nh\u1EABn \u0111\u1EE3i th\xEAm +15% th\u1EDDi gian khi th\u1EA5y b\xE9 c\xFAn vui."],
      fx: { bill: 0.2, patience: 0.15, tip: 0.1 }
    },
    meo: {
      name: "M\xE8o M\u01B0\u1EDBp Chi\xEAu T\xE0i",
      icon: "\u{1F408}",
      adopt: 1e7,
      desc: "Th\u1EA7n t\xE0i chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, gi\u1EA3m r\u1EE7i ro.",
      buffs: ["\u{1F3E2} Th\u1EA7n t\xE0i Chi nh\xE1nh: t\u0103ng +20% \u2192 +35% doanh thu c\xE1c chi nh\xE1nh tr\u1EF1c thu\u1ED9c & nh\u01B0\u1EE3ng quy\u1EC1n.", "\u{1F4C8} V\u01B0\u1EE3ng kh\xED chu\u1ED7i ti\u1EC1n: ti\u1EBFng l\xE0nh \u0111\u1ED3n xa, c\xE1c \u0111\u1ED1i t\xE1c kinh doanh ph\u1EA3i tr\u1EA3 ph\xED l\u1EA1c.", "\u{1F6E1}\uFE0F B\u1EA3o v\u1EC7 chi nh\xE1nh: gi\u1EA3m 50% nguy c\u01A1 thua l\u1ED7 c\u1EE7a chu\u1ED7i chi nh\xE1nh nh\u01B0\u1EE3ng quy\u1EC1n."],
      fx: { branch: 0.25 }
    },
    capybara: {
      name: "C\xE1p Bi \u0110i\u1EC1m \u0110\u1EA1m",
      icon: "\u{1F9AB}",
      adopt: 0,
      secret: 7,
      desc: "Th\xFA c\u01B0ng \u0111\u1ED9c b\u1EA3n qu\xFD hi\u1EBFm \u2014 nu\xF4i chung c\xF9ng Ch\xF3/M\xE8o.",
      buffs: ["\u{1F3C6} Qu\xE1n ch\xEDnh: T\u0103ng +7% doanh thu v\xE0 +10% ti\u1EC1n Tip tr\xEAn m\u1ED7i bill b\xE1n tr\u1EF1c ti\u1EBFp.", "\u{1F3E2} Chu\u1ED7i chi nh\xE1nh: T\u0103ng +10% doanh thu chi nh\xE1nh & gi\u1EA3m 30% r\u1EE7i ro/l\u1ED7 c\u1EE7a chu\u1ED7i.", "\u{1F3F7}\uFE0F B\xE1n nguy\xEAn li\u1EC7u th\u1EEBa: T\u0103ng +10% gi\xE1 b\xE1n nguy\xEAn li\u1EC7u, kh\xE1ch v\u1EABn kh\xF4ng c\xF2n lo h\u1ECFng.", "\u2728 V\u1EADn may Ly tr\xE0: T\u0103ng +2% t\u1EC9 l\u1EC7 b\u1ED9c ph\xE1t \xD72 ~ \xD75 gi\xE1 tr\u1ECB ly m\u1ED7i khi kh\xE1ch th\u01B0\u1EDFng th\u1EE9c t\u1EA1i qu\xE1n."],
      fx: { bill: 0.07, tip: 0.1, branch: 0.1 }
    }
  };
  for (const kind of Object.keys(PETS)) PETS[kind].icon = petArt(kind);
  var PET_CARE = [
    { id: "feed", icon: "\u{1F356}", name: "Cho \u0103n", cost: 2e4, stat: "hunger", gain: 35 },
    { id: "play", icon: "\u{1F3BE}", name: "Ch\u01A1i c\xF9ng", cost: 0, stat: "joy", gain: 30 },
    { id: "bath", icon: "\u{1F6C1}", name: "T\u1EAFm r\u1EEDa", cost: 15e3, stat: "clean", gain: 40 },
    { id: "sleep", icon: "\u{1F634}", name: "Cho ng\u1EE7", cost: 0, stat: "energy", gain: 45 }
  ];
  var STAFF = [
    { id: "thuViec", name: "L\xE2m Ph\u01B0\u1EDBc", role: "Th\u1EED vi\u1EC7c ch\xEDnh th\u1EE9c", icon: "\u{1F98A}", hire: 5e5, wage: 165e3, sec: 6.5, err: 0.1, desc: "Nh\xE2n vi\xEAn r\xF3t tr\xE0, h\u01B0\u01A1ng, \u0111\u01B0\u1EDDng, \u0111\xE1. B\u1EA1n l\u1EA5y ly, b\u1ECF topping v\xE0 d\xE1n n\u1EAFp. 10% sai bill, h\u1ECFng th\xEC \u0111\u1ED5 b\u1ECF l\xE0m l\u1EA1i. Kh\xF4ng th\u1EC3 thu\xEA c\xF9ng Qu\u1EA3n l\xFD t\u1EADp s\u1EF1, Gen Z v\xE0 SV ca \u0111\xEAm. L\u01B0\u01A1ng 165k/ng\xE0y.", excl: ["quanLy", "genZ", "svDem"], kind: "pour" },
    { id: "phaChe", name: "L\xFD Gia Huy", role: "Nh\xE2n vi\xEAn pha ch\u1EBF", icon: "\u{1F98A}", hire: 2e6, wage: 2e5, sec: 1.5, err: 0.08, desc: "Nh\u1EADn tr\u1ECDn \u0111\u01A1n c\u1EE7a kh\xE1ch ch\u1EDD l\xE2u nh\u1EA5t v\xE0 pha h\u1EBFt c\xE1c ly khi qu\u1EA7y c\xF3 t\u1EEB 2 kh\xE1ch tr\u1EDF l\xEAn. H\u01B0\u1EDFng to\xE0n b\u1ED9 ti\u1EC1n tip khi k\xEDch ho\u1EA1t. L\u01B0\u01A1ng 200k/ng\xE0y + 40k/h sau 22h. T\u1ED1c \u0111\u1ED9: 1500ms/ly.", need: { day: 30 }, kind: "auto", minQueue: 2 },
    { id: "online", name: "Ho\xE0ng Minh", role: "Nh\xE2n vi\xEAn \u0111\u01A1n online", icon: "\u{1F98A}", hire: 15e5, wage: 25e4, sec: 1, err: 0.01, desc: "Ch\u1EC9 l\xE0m \u0111\u01A1n online: nh\u1EADn tr\u1ECDn \u0111\u01A1n v\xE0 pha h\u1EBFt c\xE1c ly. \u0110\xF4i khi l\xE0m h\u1ECFng ly 1%, h\u1ECFng th\xEC \u0111\u1ED5 b\u1ECF l\xE0m l\u1EA1i. L\u01B0\u01A1ng 250k/ng\xE0y. T\u1ED1c \u0111\u1ED9: 1000ms/ly.", need: { online: true }, kind: "online" },
    { id: "quanLy", name: "\u0110inh Nh\xE2n", role: "Qu\u1EA3n l\xFD t\u1EADp s\u1EF1 (Qu\u1EA3n gia)", icon: "\u{1F98A}", hire: 75e4, wage: 2e5, sec: 5.5, err: 0.05, desc: "Nh\xE2n vi\xEAn r\xF3t tr\xE0, h\u01B0\u01A1ng, \u0111\u01B0\u1EDDng, \u0111\xE1, m\xFAc topping. B\u1EA1n ch\u1EC9 l\u1EA5y ly v\xE0 d\xE1n n\u1EAFp. 5% sai bill h\u1ECFng \u0111\u1ED5 b\u1ECF. \u0110\xF4i khi r\xF3t tr\xE0 kh\xF4ng \u0111\u1EA7y, ch\u1EE7 ti\u1EC7m ph\u1EA3i r\xF3t b\xF9. Gi\xFAp t\u0103ng gi\xE1 an to\xE0n (Qu\u1EA3n Gia). L\u01B0\u01A1ng 200k/ng\xE0y. T\u1ED1c \u0111\u1ED9: 280ms.", excl: ["thuViec"], kind: "manager", safePrice: true },
    { id: "genZ", name: "Nh\xE2n vi\xEAn Gen Z", role: "Nh\xE2n vi\xEAn Gen Z", icon: "\u{1F98A}", hire: 1e6, wage: 275e3, sec: 0.2, err: 0.12, desc: "Pha ch\u1EBF si\xEAu t\u1ED1c t\u1EEB A-Z. M\u1ED7i khi l\xE0m 100 ly s\u1EBD d\u1ED7i 10s, ch\u1EE7 ti\u1EC7m ph\u1EA3i d\u1ED7 d\xE0nh n\u1EBFu kh\xF4ng s\u1EBD ngh\u1EC9 vi\u1EC7c. M\u1ED7i ng\xE0y \u0111\xE1 bill 1 l\u1EA7n, n\u1EBFu b\u1EAFt \u0111\u01B0\u1EE3c s\u1EBD tr\u1EA3 l\u1EA1i ti\u1EC1n bill. L\u01B0\u01A1ng 275k/ng\xE0y. T\u1ED1c \u0111\u1ED9: 200ms/thao t\xE1c; m\u1ED7i \u0111\u01A1n \u0111i qua c\xE1c b\u01B0\u1EDBc l\u1EA5y c\u1ED1c, r\xF3t tr\xE0, th\xEAm nguy\xEAn li\u1EC7u, \u0111\xF3ng n\u1EAFp v\xE0 giao ly.", excl: ["thuViec"], kind: "auto", minQueue: 1 },
    { id: "diCho", name: "Nh\xE2n vi\xEAn \u0111i ch\u1EE3", role: "Nh\xE2n vi\xEAn \u0111i ch\u1EE3", icon: "\u{1F9FA}", hire: 18e5, wage: 18e4, sec: 99, err: 0, desc: "Khi h\u1EBFt nguy\xEAn li\u1EC7u (tr\xE0 s\u1EEFa, topping, ly, \u0111\xE1\u2026), t\u1EF1 ch\u1EA1y \u0111i ch\u1EE3 mua v\u1EC1 b\xE1n ngay trong ca. N\u1EBFu \u0111i ch\u1EE3 nhi\u1EC1u l\u1EA7n trong ng\xE0y c\xF3 th\u1EC3 khai gian h\xF3a \u0111\u01A1n \u0111\xFAt t\xFAi ri\xEAng, ho\u1EB7c mua tr\xFAng \u0111\u1ED3 h\u1EBFt h\u1EA1n g\xE2y ng\u1ED9 \u0111\u1ED9c. L\u01B0\u01A1ng 180k/ng\xE0y.", need: { full: true }, kind: "buyer" },
    { id: "svDem", name: "Sinh vi\xEAn cu\u1ED1i th\xE1ng", role: "Sinh vi\xEAn cu\u1ED1i th\xE1ng", icon: "\u{1F98A}", hire: 8e5, wage: 3e5, sec: 3.6, err: 0.1, desc: "Ch\u1EC9 l\xE0m ca \u0111\xEAm 22h\u20136h: nh\u1EADn tr\u1ECDn \u0111\u01A1n v\xE0 pha h\u1EBFt c\xE1c ly \u0111ang ch\u1EDD. C\xF3 th\u1EC3 nh\u1EA7m size. Sau 2h s\xE1ng t\xFAng ti\u1EC1n mu\u1ED1n b\xE1n trang b\u1ECB c\u1EA7n ch\u1EE7 ti\u1EC7m ng\u0103n c\u1EA3n. L\u01B0\u01A1ng 300k/ch\u1EC9 l\xE0m ca \u0111\xEAm.", excl: ["thuViec"], kind: "night" },
    { id: "meKetTinh", name: "Nh\xE2n vi\xEAn Me k\u1EBFt tinh", role: "Marketing", icon: "\u{1F98A}", hire: 15e5, wage: 35e4, sec: 99, err: 0, desc: "T\u1EF1 \u0111\u1ED9ng quay & \u0111\u0103ng video TikTok viral li\xEAn t\u1EE5c cho qu\xE1n thay v\xEC ch\u1EE7 qu\xE1n ph\u1EA3i t\u1EF1 quay, thu h\xFAt followers v\xE0 buff m\u1EA1nh l\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n (+45%). Gi\u1EA3m 20% th\u1EDDi gian pha c\u1EE7a to\xE0n b\u1ED9 nh\xE2n vi\xEAn. T\u1EF1 \u0111\u1ED9ng ph\u1EA3n h\u1ED3i m\u1ECDi \u0111\xE1nh gi\xE1 & n\xE2ng sao. T\u1EF1 \u0111\u1ED9ng \u0111\xF3ng thu\u1EBF duy tr\xEC buff 72h li\xEAn t\u1EE5c. L\u01B0\u01A1ng 350k/ng\xE0y.", kind: "marketing", fxTraffic: 0.45 },
    { id: "chuBa", name: "Ch\xFA Ba", role: "Ch\xFA b\u1EA3o v\u1EC7", icon: "\u{1F46E}", hire: 3e6, wage: 3e5, sec: 99, err: 0, desc: "B\u1EA3o v\u1EC7 ti\u1EC7m to\xE0n di\u1EC7n: 100% kh\xF4ng bao gi\u1EDD b\u1ECB ti\u1EC1n gi\u1EA3, tr\u1ED9m c\u1EAFp k\xE9t, l\u1EEBa \u0111\u1EA3o, b\xF9ng ti\u1EC1n; ng\u0103n 100% kh\xE1ch \u0103n qu\u1EF5t; gi\u1EA3m 50% t\u1EC9 l\u1EC7 sai s\xF3t c\u1EE7a nh\xE2n vi\xEAn. L\u01B0\u01A1ng: 300k/ng\xE0y + 1% doanh thu. C\xF3 th\u1EC3 n\u1ED9p \u0111\u01A1n xin ngh\u1EC9 vi\u1EC7c.", need: { secret: 1 }, kind: "guard", fxErr: 0.5, revPct: 0.01 }
  ];
  var BRANCHES = [
    { id: "truong", name: "C\u1ED5ng Tr\u01B0\u1EDDng H\u1ECDc", icon: "\u{1F3EB}", cost: 15e6, rent: 4e5, ing: [0.3, 0.42], rev: [56e4, 98e4], unit: "kh\xE1ch h\u1ECDc sinh \u2013 sinh vi\xEAn", desc: "T\u1EADp trung \u0111\u1ED3ng \u0111\u1EA3o h\u1ECDc sinh \u2013 sinh vi\xEAn, ti\xEAu th\u1EE5 tr\xE0 s\u1EEFa kh\xF4ng gi\u1EDBi h\u1EA1n t\u1EA1o t\u0103ng tr\u01B0\u1EDFng +15% kh\xE1ch qu\xE1n ch\xEDnh.", bonus: "+15% kh\xE1ch qu\xE1n ch\xEDnh" },
    { id: "cnc", name: "Khu C\xF4ng Ngh\u1EC7 Cao", icon: "\u{1F4BB}", cost: 35e6, rent: 9e5, ing: [0.3, 0.3], rev: [141e4, 224e4], unit: "d\xE2n v\u0103n ph\xF2ng & IT", desc: "D\xE2n v\u0103n ph\xF2ng & IT order theo nh\xF3m l\u1EDBn, \u0111\u01A1n online chi\u1EBFm 25%. Doanh thu \u1ED5n \u0111\u1ECBnh h\xE0ng ng\xE0y.", bonus: "+10% \u0111\u01A1n online" },
    { id: "tttm", name: "Trung T\xE2m Th\u01B0\u01A1ng M\u1EA1i (TTTM)", icon: "\u{1F3EC}", cost: 6e7, rent: 18e5, ing: [0.3, 0.3], rev: [315e4, 49e5], unit: "kh\xE1ch mua s\u1EAFm", desc: "T\u1ED5ng c\u1EE5c TTTM cao c\u1EA5p, kh\xE1ch h\xE0ng ch\u1ECBu chi, th\u01B0\u01A1ng hi\u1EC7u n\xE2ng t\u1EA7m uy t\xEDn r\xF5 r\u1EC7t.", bonus: "+uy t\xEDn" },
    { id: "phoDiBo", name: "Ph\u1ED1 \u0110i B\u1ED9", icon: "\u{1F6B6}", cost: 12e7, rent: 35e5, ing: [0.3, 0.3], rev: [63e5, 105e5], unit: "kh\xE1ch du l\u1ECBch", desc: "M\u1EB7t ti\u1EC1n ph\u1ED1 \u0111i b\u1ED9 s\u1EA7m u\u1EA5t, \u0111\xEAm h\xE8 \u0111\xF4ng ngh\u1ECBt, doanh thu cao nh\u1EA5t to\xE0n h\u1EC7 th\u1ED1ng.", bonus: "+M\u1EB7t b\u1EB1ng cao nh\u1EA5t" }
  ];
  var FRANCHISE = { fee: 1e8, royalty: 0.1, needRating: 4.5, needFollowers: 5e4, max: 5, revRange: [6e5, 12e5] };
  var ADS = [
    { id: "fb", icon: "\u{1F4F1}", name: "Ch\u1EA1y Facebook Ads \u0110\u1ECBa Ph\u01B0\u01A1ng", desc: "Qu\u1EA3ng c\xE1o c\u1EAFm \u0111\u1EC1 xu\u1EA5t ng\u01B0\u1EDDi d\xF9ng khu v\u1EF1c xung quanh ti\u1EC7m trong 3 ng\xE0y (+30% kh\xE1ch qu\xE1n ch\xEDnh, +12% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +1.500 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 1 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 5e5, days: 3, traffic: 0.3, branch: 0.12, followers: 1500, posts: 1, videos: 1 },
    { id: "tt", icon: "\u{1F3B5}", name: "Ch\u1EA1y Video TikTok Ads Viral", desc: "\u0110\u1EA9y video pha ch\u1EBF tri\u1EC7u view l\xEAn For You Page trong 3 ng\xE0y (+60% kh\xE1ch qu\xE1n ch\xEDnh, +28% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +8.000 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 2 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 2e6, days: 3, traffic: 0.6, branch: 0.28, followers: 8e3, posts: 2, videos: 2 },
    { id: "kol", icon: "\u{1F451}", name: "Thu\xEA KOL / Food Reviewer Tri\u1EC7u Follower", desc: "KOL \u1EA9m th\u1EF1c tr\u1EA3i nghi\u1EC7m v\xE0 khen h\u1EBFt l\u1EDDi trong 5 ng\xE0y (+100% kh\xE1ch qu\xE1n ch\xEDnh, +48% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +30.000 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 3 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 8e6, days: 5, traffic: 1, branch: 0.48, followers: 3e4, posts: 3, videos: 3 },
    { id: "bb", icon: "\u{1F306}", name: "Treo Bi\u1EC3n Billboard Ng\xE3 T\u01B0 Tr\u1ECDng \u0110i\u1EC3m", desc: "B\u1EA3ng hi\u1EC7u LED kh\u1ED5ng l\u1ED3 r\u1EF1c s\xE1ng 7 ng\xE0y \u0111\xEAm (+150% kh\xE1ch qu\xE1n ch\xEDnh, +72% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +80.000 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 4 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 25e6, days: 7, traffic: 1.5, branch: 0.72, followers: 8e4, posts: 4, videos: 4 }
  ];
  var FEED_AUTHORS = [
    { name: "Th\xE1nh \u0102n V\u1EB7t H\xE0 N\u1ED9i", av: "\u{1F9D1}\u200D\u{1F3A4}", badge: "Reviewer 5\u2605 Tri\u1EC7u View", tag: "TikTok" },
    { name: "M\xE8o B\xE9o Review", av: "\u{1F431}", badge: "Food blogger", tag: "Reels" },
    { name: "H\u1ED9i M\xEA Tr\xE0 S\u1EEFa", av: "\u{1F9CB}", badge: "C\u1ED9ng \u0111\u1ED3ng 200K", tag: "Facebook" },
    { name: "B\u1EA1n Gen Z S\u1ED1ng \u1EA2o", av: "\u{1F933}", badge: "KOC", tag: "TikTok" }
  ];
  var FEED_POSTS = [
    { pov: "POV: Th\xE1ch \u0111\u1EA5u ch\u1EE7 ti\u1EC7m l\xE0m chi\u1EBFc ly tr\xE0 s\u1EEFa to nh\u1EA5t l\u1ECBch s\u1EED qu\xE1n!", user: "H\xF4m nay m\xECnh th\xE1ch \u0111\u1EA5u qu\xE1n l\xE0m chi\u1EBFc ly to nh\u1EA5t c\xF3 th\u1EC3, cho m\xECnh full h\u1EBFt t\u1EA5t c\u1EA3 c\xE1c lo\u1EA1i topping c\xF3 trong qu\u1EA7y!", owner: "Nh\u1EADn th\xE1ch \u0111\u1EA5u li\u1EC1n! 1 L\xEDt tr\xE0 s\u1EEFa nguy\xEAn ch\u1EA5t \u0111\u1EADm \u0111\xE0 k\xE8m tr\xE2n ch\xE2u \u0111en, ph\xF4 mai d\u1EBBo, pudding tr\u1EE9ng v\xE0 th\u1EA1ch c\u1EE7 n\u0103ng tr\xE0n vi\u1EC1n!", reply: "U l\xE0 tr\u1EDDi c\xE1i ly n\u1EB7ng nh\u01B0 qu\u1EA3 t\u1EA1 tay! H\xFAt ng\u1EE5m n\xE0o l\xE0 ng\u1EADp ng\u1EE5a topping ng\u1EE5m \u0111\xF3, ph\xEA ch\u1EEF \xEA k\xE9o d\xE0i! X\u1EE9ng \u0111\xE1ng tri\u1EC7u view! \u{1F525}", sound: "Nh\u1EA1c K\u1ECBch T\xEDnh - Sound Th\u1EED Th\xE1ch TikTok", tags: ["#challenge", "#lykhonglo", "#trasuakhonglo", "#viral", "#fyp"] },
    { pov: "POV: B\u1EA1n ch\u1ECDn nh\u1EA7m \u0111\u01B0\u1EDDng 100% v\xE0 ph\u1EA3i u\u1ED1ng cho h\u1EBFt", user: "Order 100% \u0111\u01B0\u1EDDng r\u1ED3i m\u1EDBi bi\u1EBFt sai l\u1EA7m c\u1EE1 n\xE0o, ng\u1ECDt ki\u1EC3u ch\u1EA1m \u0111\xE1y r\u0103ng lu\xF4n tr\u1EDDi \u01A1i!", owner: 'B\u1EA1n \u01A1i l\u1EA7n sau c\u1EE9 n\xF3i "\xEDt ng\u1ECDt" l\xE0 b\xEAn m\xECnh gi\u1EA3m \u0111\u01B0\u1EDDng li\u1EC1n nh\xE9, th\u01B0\u01A1ng!', reply: "C\u01B0\u1EDDi x\u1EC9u \u{1F602} Cho em xin menu \xEDt \u0111\u01B0\u1EDDng v\u1EDBi \u1EA1!", sound: "Sound Ng\u1ECDt L\u1ECBm Tim", tags: ["#ngotlim", "#trasua", "#review", "#fyp"] },
    { pov: "Review th\u1EADt l\xF2ng: qu\xE1n tr\xE0 nh\u1ECF m\xE0 ly n\xE0o c\u0169ng ch\u1EC9n chu", user: "M\xECnh gh\xE9 qu\xE1n n\xE0y 3 l\u1EA7n r\u1ED3i, l\u1EA7n n\xE0o ly c\u0169ng \u0111\u1EA7y, topping t\u01B0\u01A1i, b\u1EA1n nh\xE2n vi\xEAn d\u1EC5 th\u01B0\u01A1ng l\u1EAFm!", owner: "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng! Qu\xE1n s\u1EBD c\u1ED1 g\u1EAFng gi\u1EEF v\u1EEFng ch\u1EA5t l\u01B0\u1EE3ng \u1EA1 \u2764\uFE0F", reply: "\u0110\xFAng lu\xF4n, h\xF4m qua m\xECnh c\u0169ng gh\xE9, tr\xE2n ch\xE2u dai ngon x\u1EC9u.", sound: "Lofi Chill Qu\xE1n Cafe", tags: ["#reviewquan", "#trasuangon", "#chill"] },
    { pov: "Ng\xE0y m\u01B0a ng\u1ED3i qu\xE1n tr\xE0, c\u1EA7m ly n\xF3ng h\u1ED5i th\u1EA5y \u0111\u1EDDi b\xECnh y\xEAn", user: "Tr\u1EDDi m\u01B0a n\xEAn m\xECnh tr\u1ED1n v\xE0o qu\xE1n tr\xE0, ly h\u1ED3ng tr\xE0 n\xF3ng b\u1EE5ng \u1EA5m h\u1EBFt c\u1EA3 ng\u01B0\u1EDDi.", owner: "M\u01B0a th\xEC c\u1EE9 gh\xE9 qu\xE1n tr\xFA ch\xE2n, b\xEAn m\xECnh lu\xF4n c\xF3 tr\xE0 n\xF3ng ch\u1EDD b\u1EA1n nh\xE9 \u2614", reply: "M\xEA c\xE1i vibe qu\xE1n gh\xEA, ch\u1ED7 ng\u1ED3i xinh x\u1EC9u.", sound: "Rainy Day Lofi", tags: ["#ngaymua", "#traNong", "#chill"] },
    { pov: "Th\u1EED th\xE1ch 10 v\u1ECB topping trong 1 ly: c\xF3 n\xEAn th\u1EED?", user: "M\xECnh b\u1EAFt \u0111\u1EA7u th\u1EED th\xE1ch 10 topping trong 1 ly, k\u1EBFt qu\u1EA3 khi\u1EBFn c\u1EA3 team c\u01B0\u1EDDi kh\xF4ng ng\u1EADm \u0111\u01B0\u1EE3c m\u1ED3m.", owner: "B\xEAn m\xECnh gi\u1EDBi h\u1EA1n 4 topping/ly n\xEAn b\u1EA1n nh\u1EDB ch\u1ECDn m\xF3n t\u1EE7 nh\xE9 \u{1F606}", reply: "Ch\u1EC9 4 th\xF4i sao \u{1F62D} cho 5 \u0111\u01B0\u1EE3c kh\xF4ng ch\u1EE7 qu\xE1n!", sound: "Funny Beat TikTok", tags: ["#thachthuc", "#topping", "#hai"] }
  ];
  var SEEDS = [
    { id: "dauTay", name: "D\xE2u T\xE2y \u0110\xE0 L\u1EA1t", icon: "\u{1F353}", price: 15e3, days: 2, yield: [20, 30], gives: "dau" },
    { id: "daoTien", name: "\u0110\xE0o Ti\xEAn Gi\xF2n Ng\u1ECDt", icon: "\u{1F351}", price: 15e3, days: 2, yield: [20, 30], gives: "dao" },
    { id: "xoaiCat", name: "Xo\xE0i C\xE1t H\xF2a L\u1ED9c", icon: "\u{1F96D}", price: 18e3, days: 3, yield: [22, 32], gives: "xoai" },
    { id: "bupTra", name: "B\xFAp Tr\xE0 Xanh C\u1ED5 Th\u1EE5", icon: "\u{1F333}", price: 2e4, days: 3, yield: [25, 35], gives: "lucTra" },
    { id: "bacHaSeed", name: "B\u1EA1c H\xE0 Th\u01A1m", icon: "\u{1F33F}", price: 1e4, days: 1, yield: [15, 25], gives: "bacHa" },
    { id: "chanhVang", name: "Chanh V\xE0ng Qu\xFD T\u1ED9c", icon: "\u{1F34B}", price: 12e3, days: 1, yield: [18, 28], gives: "chanh" }
  ];
  var PLOTS = 16;
  var PLOTS_START = 6;
  var plotCost = (n) => Math.round(6e4 * Math.pow(1.25, n - PLOTS_START) / 1e3) * 1e3;
  var TAX = { minRate: 0.05, maxRate: 0.15, hours: 72, traffic: 0.15, speed: 0.15, theft: 0.15, lucky: 0.15 };
  var BANK = { interest: 0.01, lockShifts: 7, max: 99e9, starBonus: 0.1, bigBonus: 0.05 };
  var SECRET_RECIPES = [
    { id: "s1", name: "Tr\xE0 Hoa M\u01A1 S\u01B0\u01A1ng", icon: "\u{1F338}", desc: "H\u01B0\u01A1ng m\u01A1 r\u1EEBng d\u1ECBu nh\u1EB9." },
    { id: "s2", name: "S\u1EEFa Tuy\u1EBFt N\xFAi Cao", icon: "\u{1F3D4}\uFE0F", desc: "S\u1EEFa l\u1EA1nh t\u1EA1o l\u1EDBp foam tuy\u1EBFt." },
    { id: "s3", name: "Tr\xE0 \u0110\xE0o Cam S\u1EA3 V\xE0ng", icon: "\u{1F34A}", desc: "C\xF4ng th\u1EE9c gia truy\u1EC1n." },
    { id: "s4", name: "Matcha C\u1ED5 \u0110i\u1EC3n Kyoto", icon: "\u{1F375}", desc: "Matcha nghi\u1EC1n \u0111\xE1." },
    { id: "s5", name: "Tr\xE2n Ch\xE2u M\u1EADt Ong R\u1EEBng", icon: "\u{1F36F}", desc: "Tr\xE2n ch\xE2u n\u1EA5u m\u1EADt." },
    { id: "s6", name: "Tr\xE0 \xD4 Long H\u1ED3ng Ng\u1ECDc", icon: "\u{1F48E}", desc: "\xD4 long \u1EE7 hoa h\u1ED3ng." },
    { id: "s7", name: "B\xED K\xEDp S\u01B0\u01A1ng S\xE1o Tr\u0103ng R\u1EB1m", icon: "\u{1F315}", desc: "S\u01B0\u01A1ng s\xE1o tr\u0103ng r\u1EB1m." }
  ];
  var GIFT_COST = 3e4;
  var GACHA = {
    names: ["L\xE1 tr\xE0 non", "S\u1EEFa t\u01B0\u01A1i", "\u0110\u01B0\u1EDDng m\xEDa", "\u0110\xE1 b\xE0o", "Ly gi\u1EA5y xinh", "\u1ED0ng h\xFAt tre", "\u0110\xE0o ti\xEAn", "V\u1EA3i \u0111\u1EA7u m\xF9a", "N\u1ED3i tr\xE2n ch\xE2u", "Flan nh\xE0 l\xE0m", "\u1EA4m tr\xE0 g\u1ED1m", "Matcha th\u01B0\u1EE3ng h\u1EA1ng", "\xD4 long n\xFAi cao", "Foam m\xE2y tr\u1EDDi", "D\u1EA5u ch\xE2n th\xFA c\u01B0ng", "Tr\xE0 hoa ng\xE0n c\xE1nh", "Tr\xE2n ch\xE2u ng\u1ECDc b\xEDch", "Ly tr\xE0 sao b\u0103ng"],
    icons: ["\u{1F343}", "\u{1F95B}", "\u{1F36C}", "\u{1F9CA}", "\u{1F964}", "\u{1F38B}", "\u{1F351}", "\u{1F338}", "\u{1F372}", "\u{1F36E}", "\u{1FAD6}", "\u{1F375}", "\u{1F3D4}\uFE0F", "\u2601\uFE0F", "\u{1F43E}", "\u{1F4AE}", "\u{1F48E}", "\u{1F320}"],
    rarities: ["C", "C", "C", "C", "C", "C", "U", "U", "U", "U", "U", "R", "R", "R", "E", "E", "L", "L"],
    weights: { C: 52, U: 28, R: 13, E: 5.5, L: 1.5 },
    rarityName: { C: "Th\u01B0\u1EDDng", U: "Kh\xE1 hi\u1EBFm", R: "Hi\u1EBFm", E: "C\u1EF1c hi\u1EBFm", L: "Huy\u1EC1n tho\u1EA1i" }
  };
  var NPC_FRIENDS = [
    { id: "f1", name: "Qu\xE1n Nh\xE0 B\xE0 Ngo\u1EA1i", av: "\u{1F475}", rating: 4.6, rich: 24e5 },
    { id: "f2", name: "Tr\xE0 S\u1EEFa M\xE2y H\u1ED3ng", av: "\u2601\uFE0F", rating: 4.3, rich: 11e5 },
    { id: "f3", name: "C\u1EEDa H\xE0ng M\xE8o Mun", av: "\u{1F408}\u200D\u2B1B", rating: 4.8, rich: 56e5 },
    { id: "f4", name: "Ti\u1EC7m Gi\xF3 Bi\u1EC3n", av: "\u{1F30A}", rating: 4.1, rich: 75e4 }
  ];
  var THEMES = {
    cream: { name: "Kem s\u1EEFa", bg: "#FDF0DF", card: "#FFFAF2", accent: "#EE7A96", accent2: "#F5A3B7", soft: "#FFE1E8" },
    nau: { name: "N\xE2u c\xE0 ph\xEA", bg: "#F1E6DA", card: "#FBF5EE", accent: "#9A6444", accent2: "#C79A7A", soft: "#EBD9C8" },
    socola: { name: "S\xF4 c\xF4 la", bg: "#EADFD3", card: "#F8F1EA", accent: "#6B4226", accent2: "#A27B5C", soft: "#E0CDBB" },
    dau: { name: "H\u1ED3ng d\xE2u", bg: "#FFEFF3", card: "#FFF8FA", accent: "#E0507F", accent2: "#F29AB5", soft: "#FFD6E2" },
    camdao: { name: "Cam \u0111\xE0o", bg: "#FFF0E2", card: "#FFF8F0", accent: "#EA8A55", accent2: "#F5B592", soft: "#FFDFC8" },
    thai: { name: "Tr\xE0 Th\xE1i", bg: "#FFF1DE", card: "#FFF8EC", accent: "#E07B39", accent2: "#F0A870", soft: "#FFDDBA" },
    chanh: { name: "V\xE0ng chanh", bg: "#FBF8DC", card: "#FFFDF0", accent: "#C9AA2E", accent2: "#E0CC6A", soft: "#F4EDB0" },
    matcha: { name: "Xanh matcha", bg: "#EEF4E2", card: "#F8FBEF", accent: "#5FA95F", accent2: "#98CC98", soft: "#D7EFD9" },
    bacha: { name: "B\u1EA1c h\xE0", bg: "#E8F6F1", card: "#F5FBF9", accent: "#4FAF93", accent2: "#8DCDB8", soft: "#CDEDE3" },
    bien: { name: "Xanh bi\u1EC3n", bg: "#E9F2FB", card: "#F6FAFE", accent: "#4A8BD0", accent2: "#8DB8E6", soft: "#D0E3F6" },
    khoai: { name: "T\xEDm khoai m\xF4n", bg: "#F0EAFA", card: "#F9F6FD", accent: "#8F6BC8", accent2: "#B79BE0", soft: "#E1D5F4" },
    dem: { name: "\u0110\xEAm d\u1ECBu", bg: "#2B2540", card: "#3A3356", accent: "#E58CB3", accent2: "#F0B0CC", soft: "#51477A", dark: true }
  };
  var LOGO_ICONS = ["\u{1F9CB}", "\u{1F98A}", "\u{1F427}", "\u{1F43B}", "\u{1F994}", "\u{1F425}", "\u{1F98C}", "\u{1F989}", "\u{1F422}", "\u{1F439}", "\u{1F98B}", "\u{1F99D}", "\u{1F43B}", "\u{1F430}", "\u{1F43C}", "\u{1F353}", "\u{1F34A}", "\u{1F96D}", "\u{1F48E}", "\u{1F308}", "\u2601\uFE0F", "\u2600\uFE0F", "\u{1F319}", "\u{1F388}", "\u{1F381}", "\u{1F370}", "\u{1F366}", "\u{1F9C1}", "\u{1F369}", "\u{1F36A}", "\u{1F497}", "\u2B50", "\u2728", "\u{1F451}", "\u{1F380}"];
  var STAMP_COLORS = ["#ffffff", "#fde8cf", "#ffd6e0", "#d6f2e4", "#8b5a3c", "#2f2a3a", "#ffe08a", "#e3d6ff"];
  var SLOGANS = ["Tr\xE0 s\u1EEFa m\u1ED7i ng\xE0y", "Ngon t\u1EEB gi\u1ECDt \u0111\u1EA7u", "Pha b\u1EB1ng c\u1EA3 tr\xE1i tim", "Nh\u1ECF m\xE0 c\xF3 v\xF5", "Chill c\xF9ng tr\xE0 s\u1EEFa", "B\u1ECF tr\u1ED1ng"];
  var SHIFT_MINUTES = [3, 4, 5];
  var CHANGELOG = [
    "v1.0: To\xE0n m\xE0n h\xECnh, m\xE0n m\u1EDF \u0111\u1EA7u g\u1ECDn \u0111\u1EB9p, h\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt + h\u01B0\u1EDBng d\u1EABn l\u1EA7n \u0111\u1EA7u (c\xF3 b\u1ECF qua), qu\u1EA7y pha ch\u1EBF v\u1EBD l\u1EA1i, b\u1EA3n \u0111\u1ED3 & th\u1EBB \u0111\u1ECBa \u0111i\u1EC3m c\xF3 h\xECnh n\u1EC1n, kh\xE1ch \u0111\u1EBFn \u0111\u1EC1u v\xE0 ch\u1EADm h\u01A1n, hi\u1EC7u \u1EE9ng n\u1ED5/combo m\u01B0\u1EE3t h\u01A1n, s\u1EEDa t\u1EA3i logo.",
    "v0.9: L\xE0m l\u1EA1i to\xE0n b\u1ED9 giao di\u1EC7n & v\xF2ng ch\u01A1i theo k\u1ECBch b\u1EA3n chi ti\u1EBFt (15 menu, pha ch\u1EBF c\xF3 hi\u1EC7u \u1EE9ng, s\u1EA3nh tr\xE0, chi nh\xE1nh, nh\xE2n s\u1EF1\u2026).",
    "Th\xEAm 2 mini game: Milk Tea Crush v\xE0 Tr\xE2n Ch\xE2u N\u1ED5.",
    "Th\xEAm kh\u1EDFi nghi\u1EC7p xuy\xEAn Vi\u1EC7t v\u1EDBi 10 \u0111\u1ECBa \u0111i\u1EC3m, th\xFA c\u01B0ng, v\u01B0\u1EDDn c\xE2y 16 \xF4."
  ];

  // js/core.js
  var listeners = /* @__PURE__ */ new Map();
  function on(ev, cb) {
    if (!listeners.has(ev)) listeners.set(ev, /* @__PURE__ */ new Set());
    listeners.get(ev).add(cb);
    return () => {
      var _a;
      return (_a = listeners.get(ev)) == null ? void 0 : _a.delete(cb);
    };
  }
  function emit(ev, data) {
    for (const cb of [...listeners.get(ev) || []]) {
      try {
        cb(data);
      } catch (e) {
        console.error(`[bus] ${ev}`, e);
      }
    }
  }
  var clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  var rand = (a, b) => Math.random() * (b - a) + a;
  var randInt = (a, b) => Math.floor(rand(a, b + 1));
  var pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  var chance = (p) => Math.random() < p;
  var sum = (arr, f = (x) => x) => arr.reduce((s, x) => s + f(x), 0);
  function wpick(weights) {
    const es = Object.entries(weights).filter(([, w]) => w > 0);
    let r = Math.random() * es.reduce((s, [, w]) => s + w, 0);
    for (const [k, w] of es) {
      r -= w;
      if (r <= 0) return k;
    }
    return es.length ? es[es.length - 1][0] : void 0;
  }
  var trimNum = (n, d) => String(Number(n.toFixed(d))).replace(".", ",");
  function fmtK(n) {
    const v = Number(n) || 0, a = Math.abs(v);
    if (a >= 1e9) return trimNum(v / 1e9, 2) + " t\u1EF7";
    if (a >= 1e6) return trimNum(v / 1e6, 2) + "tr";
    if (a >= 1e3) return trimNum(v / 1e3, 1) + "k";
    return Math.round(v) + "\u0111";
  }
  var fmt = (n) => {
    const v = Math.round(Number(n) || 0);
    return (v < 0 ? "-" : "") + Math.abs(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "\u0111";
  };
  var esc = (s) => String(s != null ? s : "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  var $ = (sel, root2 = document) => root2.querySelector(sel);
  var $$ = (sel, root2 = document) => [...root2.querySelectorAll(sel)];
  function h(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  var wait = (ms) => new Promise((r) => setTimeout(r, ms));
  var pad2 = (n) => String(n).padStart(2, "0");
  var fmtClock = (hh) => `${pad2(Math.floor(hh))}:${pad2(Math.floor(hh % 1 * 60 / 10) * 10)}`;
  function newState() {
    const stock = {}, unlocked2 = {}, onMenu = {}, prices = {};
    for (const id of IDS) {
      stock[id] = [];
      unlocked2[id] = ITEMS[id].unlock === 0;
      onMenu[id] = ITEMS[id].unlock === 0 && ITEMS[id].kind !== "supply";
      if (ITEMS[id].price) prices[id] = ITEMS[id].price;
    }
    prices.sizeL = 7e3;
    const plots = [];
    for (let i = 0; i < PLOTS; i++) plots.push({ seed: null, water: 0, grown: 0 });
    return {
      v: SAVE_VERSION,
      shopName: "Ti\u1EC7m Tr\xE0 M\u01A1 \u01AF\u1EDBc",
      logo: { emoji: "\u{1F9CB}", img: null },
      stamp: { frame: "round", textStyle: "straight", bg: "#ffffff", slogan: "Tr\xE0 s\u1EEFa m\u1ED7i ng\xE0y", icon: "\u{1F9CB}", img: null },
      day: 1,
      money: START_MONEY,
      phase: "home",
      tab: "kho",
      subtab: {},
      location: "goc",
      season: "spring",
      weather: "sunny",
      temp: 25,
      eventId: "trend",
      forecast: [],
      rating: 4,
      reviews: [],
      ratingCount: 0,
      followers: 144,
      stock,
      unlocked: unlocked2,
      onMenu,
      prices,
      plan: {},
      lastUsed: {},
      previousUsed: {},
      cat: { tra: 0, huong: 0, top: 0, nv: 0, online: 0 },
      equip: {},
      apps: {},
      staff: {},
      kpi: { shifts: 0 },
      ev: { lic: 0, food: 0, blk: 0 },
      pet: null,
      petDecor: {},
      garden: { plots, unlocked: PLOTS_START, seeds: {}, watered: false },
      branches: {},
      franchise: { count: 0 },
      social: { ad: null, videosToday: 0, posts: [], viral: 0 },
      tax: { until: 0, last: 0, paid: 0, rate: 0.1 },
      bank: { balance: 0, principal: 0, since: 0, shifts: 0 },
      today: freshToday(),
      history: [],
      collection: { owned: {}, secrets: {}, packs: 1 },
      friends: { code: "TTN-" + Math.random().toString(36).slice(2, 7).toUpperCase(), list: [], gifted: {} },
      crush: { level: 1, best: 0, perm: 0, gifts: 0 },
      pearl: { best: 0, playsDay: 0 },
      settings: { music: 0.7, sfx: 0.8, style: "lofi", haptic: 2, hints: true, shiftMin: 4, shiftMinNext: 4, theme: "cream", tutorialDone: false },
      firstRun: true,
      started: false,
      savedAt: Date.now()
    };
  }
  function freshToday() {
    return { rev: 0, tips: 0, online: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, purchase: 0, cups: 0, left: 0, stars: [], waste: 0, branch: 0, fran: 0, interest: 0 };
  }
  var S = newState();
  var restoreHook = null;
  var registerRestoreHook = (fn) => {
    restoreHook = fn;
  };
  function replaceState(next) {
    for (const k of Object.keys(S)) delete S[k];
    Object.assign(S, next);
    if (restoreHook) restoreHook();
  }
  var dirty = /* @__PURE__ */ new Set();
  var markDirty = (...k) => k.forEach((x) => dirty.add(x));
  var consumeDirty = () => {
    const o = [...dirty];
    dirty.clear();
    return o;
  };
  var saveHook = null;
  var registerSaveHook = (fn) => {
    saveHook = fn;
  };
  var storageWarned = false;
  function store() {
    try {
      const s = window.localStorage;
      s.getItem(SAVE_KEY);
      return s;
    } catch (e) {
      return null;
    }
  }
  function saveFailed() {
    if (!storageWarned) {
      storageWarned = true;
      emit("save:error");
    }
    return false;
  }
  var BK = SAVE_KEY + "_bk";
  function saveGame() {
    if (saveHook) saveHook();
    const st = store();
    if (!st) return saveFailed();
    const previous = S.savedAt;
    S.savedAt = Date.now();
    try {
      st.setItem(SAVE_KEY, JSON.stringify({ v: SAVE_VERSION, t: Date.now(), s: S }));
      storageWarned = false;
      return true;
    } catch (e) {
      S.savedAt = previous;
      return saveFailed();
    }
  }
  var pend = null;
  function requestSave() {
    if (pend) return;
    pend = setTimeout(() => {
      pend = null;
      saveGame();
    }, 700);
  }
  function saveBackup() {
    if (saveHook) saveHook();
    const st = store();
    if (!st) return;
    try {
      const list = JSON.parse(st.getItem(BK) || "[]");
      list.unshift({ t: Date.now(), day: S.day, money: S.money, s: JSON.stringify(S) });
      st.setItem(BK, JSON.stringify(list.slice(0, 3)));
    } catch (e) {
    }
  }
  function listBackups() {
    var _a;
    try {
      return JSON.parse(((_a = store()) == null ? void 0 : _a.getItem(BK)) || "[]").map((b, i) => ({ i, t: b.t, day: b.day, money: b.money }));
    } catch (e) {
      return [];
    }
  }
  function normalize(raw) {
    const d = newState();
    const s = { ...d, ...raw };
    for (const k of ["logo", "stamp", "cat", "garden", "social", "tax", "bank", "collection", "friends", "crush", "pearl", "settings", "kpi", "forecast", "ev"]) {
      if (d[k] && typeof d[k] === "object" && !Array.isArray(d[k])) s[k] = { ...d[k], ...raw[k] || {} };
    }
    for (const k of ["stock", "unlocked", "onMenu", "prices"]) s[k] = { ...d[k], ...raw[k] || {} };
    if (raw.stock && Array.isArray(raw.stock.ly) && !raw.stock.lyM && !raw.stock.lyL) {
      const lots = raw.stock.ly.filter((l) => l && l.q > 0);
      s.stock.lyM = lots.map((l) => ({ ...l, q: Math.ceil(l.q / 2) }));
      s.stock.lyL = lots.map((l) => ({ ...l, q: Math.floor(l.q / 2) })).filter((l) => l.q > 0);
    }
    for (const id of IDS) if (!Array.isArray(s.stock[id])) s.stock[id] = [];
    s.stock = Object.fromEntries(IDS.map((id) => [id, s.stock[id].filter((l) => l && l.q > 0)]));
    if (!Array.isArray(s.garden.plots) || s.garden.plots.length < PLOTS) s.garden.plots = d.garden.plots;
    s.money = Math.max(0, Number(s.money) || 0);
    s.rating = clamp(Number(s.rating) || 4, 1, 5);
    if (s.phase === "sell" && !s.shiftRuntime) s.phase = "home";
    s.today = { ...freshToday(), ...raw.today || {} };
    return s;
  }
  function loadGame() {
    const st = store();
    if (!st) return false;
    try {
      const raw = st.getItem(SAVE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      replaceState(normalize(data.s));
      return true;
    } catch (e) {
      console.warn("[save] h\u1ECFng", e);
      return false;
    }
  }
  function restoreBackup(i) {
    try {
      const b = JSON.parse(store().getItem(BK) || "[]")[i];
      if (!b) return false;
      replaceState(normalize(JSON.parse(b.s)));
      saveGame();
      return true;
    } catch (e) {
      return false;
    }
  }
  function exportCode() {
    if (saveHook) saveHook();
    const json = JSON.stringify({ v: SAVE_VERSION, s: S });
    return "TTM3." + btoa(unescape(encodeURIComponent(json)));
  }
  function importCode(code) {
    try {
      const c = String(code).trim();
      if (!c.startsWith("TTM3.")) return false;
      const data = JSON.parse(decodeURIComponent(escape(atob(c.slice(5)))));
      replaceState(normalize(data.s));
      saveGame();
      return true;
    } catch (e) {
      return false;
    }
  }
  function wipeSave() {
    var _a, _b;
    try {
      (_a = store()) == null ? void 0 : _a.removeItem(SAVE_KEY);
      (_b = store()) == null ? void 0 : _b.removeItem(BK);
    } catch (e) {
    }
    replaceState(newState());
  }
  var updaters = [];
  var renderers = /* @__PURE__ */ new Map();
  var frames = [];
  var last = 0;
  var running = false;
  var paused = false;
  var speed = 1;
  var registerUpdate = (f) => updaters.push(f);
  var registerRenderer = (k, f) => renderers.set(k, f);
  var registerFrame = (f) => frames.push(f);
  function loop(ts) {
    var _a;
    if (!running) return;
    const dt = Math.min((ts - last) / 1e3, 0.25);
    last = ts;
    if (!paused) for (const f of updaters) {
      try {
        f(dt * speed);
      } catch (e) {
        console.error("[loop] update", e);
      }
    }
    for (const k of consumeDirty()) {
      try {
        (_a = renderers.get(k)) == null ? void 0 : _a();
      } catch (e) {
        console.error("[loop] render " + k, e);
      }
    }
    for (const f of frames) {
      try {
        f(dt);
      } catch (e) {
        console.error("[loop] frame", e);
      }
    }
    requestAnimationFrame(loop);
  }
  function startLoop() {
    if (running) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(loop);
  }
  var setPaused = (v) => {
    paused = !!v;
  };
  var isPaused = () => paused;
  var setSpeed = (v) => {
    speed = v;
  };
  function flushRender() {
    var _a;
    for (const k of consumeDirty()) {
      try {
        (_a = renderers.get(k)) == null ? void 0 : _a();
      } catch (e) {
        console.error(e);
      }
    }
  }
  var actx = null;
  var master = null;
  var mgain = null;
  var musicTimer = null;
  var mstep = 0;
  var unlocked = false;
  var sfxBus = null;
  var pendingClick = null;
  var sfxActiveUntil = 0;
  var sfxPriority = -1;
  var sfxLastPlayed = /* @__PURE__ */ Object.create(null);
  function ctx() {
    if (actx) return actx;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
      master = actx.createGain();
      master.connect(actx.destination);
      mgain = actx.createGain();
      mgain.connect(actx.destination);
      applyVolumes();
    } catch (e) {
      actx = null;
    }
    return actx;
  }
  function applyVolumes() {
    if (!master) return;
    master.gain.value = 0.45 * S.settings.sfx;
    mgain.gain.value = 0.16 * S.settings.music;
  }
  function tone(f, d, type = "sine", vol = 1, when = 0, dest = null) {
    if (!actx) return;
    try {
      const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + when;
      o.type = type;
      o.frequency.value = f;
      g.gain.setValueAtTime(1e-4, t);
      g.gain.exponentialRampToValueAtTime(Math.max(2e-4, vol), t + 0.012);
      g.gain.exponentialRampToValueAtTime(1e-4, t + d);
      o.connect(g).connect(dest || sfxBus || master);
      o.start(t);
      o.stop(t + d + 0.05);
    } catch (e) {
    }
  }
  function glide(f0, f1, d, type = "sine", vol = 0.2, when = 0) {
    if (!actx) return;
    try {
      const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + when;
      o.type = type;
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(Math.max(25, f1), t + d);
      g.gain.setValueAtTime(1e-4, t);
      g.gain.exponentialRampToValueAtTime(Math.max(2e-4, vol), t + 0.01);
      g.gain.exponentialRampToValueAtTime(1e-4, t + d);
      o.connect(g).connect(sfxBus || master);
      o.start(t);
      o.stop(t + d + 0.04);
    } catch (e) {
    }
  }
  var SFX = {
    click: () => {
      tone(520, 0.035, "sine", 0.16);
      tone(780, 0.045, "sine", 0.07, 0.015);
    },
    pop: () => glide(520, 300, 0.075, "triangle", 0.2),
    cup: () => {
      tone(390, 0.07, "sine", 0.24);
      tone(520, 0.08, "triangle", 0.12, 0.055);
    },
    pour: () => {
      glide(720, 520, 0.14, "sine", 0.07);
      tone(340, 0.12, "sine", 0.035);
    },
    drop: () => {
      glide(760, 420, 0.085, "sine", 0.2);
      tone(620, 0.08, "triangle", 0.12, 0.035);
    },
    seal: () => {
      glide(220, 110, 0.16, "triangle", 0.24);
      tone(620, 0.08, "sine", 0.08, 0.17);
    },
    ding: () => {
      tone(1318, 0.2, "sine", 0.2);
      tone(1760, 0.26, "sine", 0.12, 0.045);
    },
    coin: () => {
      tone(880, 0.065, "sine", 0.14);
      tone(1175, 0.09, "sine", 0.12, 0.06);
    },
    reward: () => {
      tone(659, 0.13, "sine", 0.16);
      tone(784, 0.16, "sine", 0.16, 0.09);
      tone(988, 0.22, "sine", 0.12, 0.19);
      tone(1318, 0.27, "sine", 0.08, 0.29);
    },
    success: () => {
      tone(523, 0.12, "triangle", 0.22);
      tone(659, 0.14, "triangle", 0.19, 0.1);
      tone(784, 0.2, "sine", 0.17, 0.2);
    },
    error: () => {
      glide(330, 240, 0.11, "triangle", 0.19);
      tone(196, 0.14, "sine", 0.13, 0.1);
    },
    sad: () => {
      tone(392, 0.16, "sine", 0.15);
      glide(330, 262, 0.22, "sine", 0.14, 0.13);
    },
    sparkle: () => [1318, 1568, 1976].forEach((f, i) => tone(f, 0.08, "sine", 0.12, i * 0.055)),
    unlock: () => {
      tone(587, 0.11, "sine", 0.16);
      tone(784, 0.13, "sine", 0.15, 0.1);
      tone(988, 0.2, "sine", 0.13, 0.2);
    },
    level: () => [523, 659, 784, 988, 1175].forEach((f, i) => tone(f, 0.14, "triangle", 0.15, i * 0.09)),
    bell: () => {
      tone(1568, 0.24, "sine", 0.18);
      tone(1976, 0.3, "sine", 0.12, 0.035);
    },
    match: () => {
      tone(660 + Math.random() * 220, 0.085, "triangle", 0.17);
    },
    boom: () => {
      glide(150, 58, 0.24, "sine", 0.22);
      tone(392, 0.12, "triangle", 0.1, 0.08);
    },
    /* --- Trân Châu Nổ --- */
    // nổ lách tách nhỏ (nhóm 2-3 viên), tông ngẫu nhiên nhẹ
    pearlPop: () => {
      const f = 650 + Math.random() * 180;
      glide(f, f * 0.72, 0.055, "sine", 0.16);
      tone(f * 1.5, 0.06, "triangle", 0.11, 0.025);
    },
    // nổ vừa (4-5 viên): tông cao hơn, 4 nốt tách liên tiếp
    pearlPop2: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f * (1 + Math.random() * 0.02), 0.06, "sine", 0.13, i * 0.04)),
    // nổ lớn (≥6 viên)
    pearlBoom: () => {
      glide(130, 55, 0.2, "sine", 0.22);
      [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.11, "triangle", 0.14, 0.06 + i * 0.05));
    },
    fly: () => {
      [440, 587, 740].forEach((f, i) => tone(f, 0.06, "sine", 0.09, i * 0.04));
    },
    swoosh: () => glide(760, 300, 0.18, "sine", 0.08),
    bounce: () => {
      glide(280, 190, 0.07, "sine", 0.15);
      tone(440, 0.05, "triangle", 0.07, 0.045);
    },
    // arpeggio combo tăng dần theo cấp: gọi sfx('combo2') ... sfx('combo6')
    combo: () => [659, 784, 988].forEach((f, i) => tone(f, 0.1, "triangle", 0.16, i * 0.065)),
    ...Object.fromEntries([2, 3, 4, 5, 6].map((l) => ["combo" + l, () => {
      const b = 523 * Math.pow(1.122, l * 2);
      [1, 1.25, 1.5, 2, 2.5].slice(0, l + 1).forEach((m, i) => tone(b * m, 0.12, "triangle", 0.42, i * 0.055));
    }])),
    collect: () => {
      tone(1200, 0.06, "sine", 0.3);
      tone(1600, 0.1, "sine", 0.3, 0.06);
    },
    win: () => {
      [523, 659, 784, 1046, 784, 1046, 1318].forEach((f, i) => tone(f, 0.18, "triangle", 0.55, i * 0.09));
      tone(1568, 0.5, "sine", 0.3, 0.65);
    },
    lose: () => {
      [440, 392, 330, 262].forEach((f, i) => tone(f, 0.2, "sine", 0.5, i * 0.13));
    },
    alarm: () => {
      [880, 620, 880, 620].forEach((f, i) => tone(f, 0.16, "square", 0.12, i * 0.18));
      glide(180, 70, 0.5, "sawtooth", 0.12, 0.05);
    }
  };
  var SFX_RULES = {
    click: [65, 0, 90, 0.48],
    pop: [90, 1, 140, 0.62],
    cup: [130, 2, 170, 0.62],
    pour: [650, 0, 180, 0.42],
    drop: [110, 2, 150, 0.62],
    seal: [180, 3, 320, 0.75],
    ding: [180, 4, 330, 0.72],
    coin: [130, 2, 190, 0.55],
    reward: [250, 4, 620, 0.76],
    success: [220, 4, 430, 0.72],
    error: [180, 3, 300, 0.62],
    sad: [250, 2, 430, 0.55],
    sparkle: [150, 2, 230, 0.52],
    unlock: [300, 4, 470, 0.72],
    level: [350, 4, 610, 0.68],
    bell: [250, 3, 430, 0.68],
    match: [70, 1, 130, 0.58],
    boom: [260, 3, 430, 0.7],
    pearlPop: [70, 1, 170, 0.5],
    pearlPop2: [100, 2, 260, 0.58],
    pearlBoom: [280, 4, 440, 0.72],
    fly: [100, 1, 200, 0.48],
    swoosh: [130, 1, 230, 0.45],
    bounce: [100, 1, 160, 0.5],
    alarm: [600, 4, 900, 0.7],
    combo: [180, 3, 360, 0.62],
    collect: [150, 2, 260, 0.6],
    win: [600, 5, 1450, 0.74],
    lose: [400, 3, 700, 0.62]
  };
  var HAPTIC_MUL = [0, 0.6, 1, 1.7];
  var HAPTIC = {
    click: 8,
    pop: 10,
    cup: 14,
    drop: 10,
    seal: [20, 30, 40],
    ding: 22,
    coin: 12,
    success: [15, 40, 25],
    error: [40, 30, 40],
    sad: 30,
    sparkle: 8,
    unlock: [20, 30, 20],
    level: [15, 30, 15, 30, 30],
    bell: 16,
    match: 12,
    boom: [40, 20, 60],
    pour: 0,
    alarm: [50, 40, 50, 40, 90],
    combo: [14, 24, 20],
    bounce: 8,
    fly: 6,
    swoosh: 8,
    collect: [10, 20, 10]
  };
  var HAPTIC_MIN = [0, 14, 22, 36];
  var BRIDGE_OBJECTS = ["Android", "AndroidBridge", "AndroidInterface", "NativeBridge", "JSInterface", "AppBridge", "Native", "app"];
  var BRIDGE_METHODS = ["vibrate", "haptic", "hapticFeedback", "vibrateMs"];
  function nativeVibrate(ms) {
    try {
      const cap = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics;
      if (cap && cap.vibrate) {
        cap.vibrate({ duration: ms });
        return true;
      }
      if (navigator.notification && navigator.notification.vibrate) {
        navigator.notification.vibrate(ms);
        return true;
      }
      for (const o of BRIDGE_OBJECTS) {
        const obj = window[o];
        if (!obj) continue;
        for (const m of BRIDGE_METHODS) if (typeof obj[m] === "function") {
          obj[m](ms);
          return true;
        }
      }
    } catch (e) {
    }
    return false;
  }
  function nativeProbe() {
    const cap = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics;
    if (cap && cap.vibrate) return true;
    if (navigator.notification && navigator.notification.vibrate) return true;
    return BRIDGE_OBJECTS.some((o) => window[o] && BRIDGE_METHODS.some((m) => typeof window[o][m] === "function"));
  }
  function buzz(pattern = 10) {
    var _a;
    const level = (_a = S.settings.haptic) != null ? _a : 2;
    const m = HAPTIC_MUL[level] || 0;
    if (pattern === 0 || !m) return false;
    const arr = (Array.isArray(pattern) ? pattern : [pattern]).map((v, i) => i % 2 === 0 ? Math.max(HAPTIC_MIN[level], Math.round(v * m)) : v);
    try {
      if (typeof navigator.vibrate === "function") {
        const ok = navigator.vibrate(arr);
        if (ok !== false) return true;
      }
    } catch (e) {
    }
    let t = 0, sent = false;
    arr.forEach((v, i) => {
      if (i % 2 === 0) {
        sent = true;
        setTimeout(() => nativeVibrate(v), t);
      }
      t += v;
    });
    return sent && nativeProbe();
  }
  function playSfx(n) {
    var _a;
    const sound = SFX[n];
    if (!sound || !unlocked || S.settings.sfx <= 0) return;
    const [cooldown, priority, duration, volume] = SFX_RULES[n] || (n.startsWith("combo") ? [180, 3, 420, 0.62] : [100, 1, 220, 0.55]);
    const now = performance.now();
    if (now - ((_a = sfxLastPlayed[n]) != null ? _a : -Infinity) < cooldown) return;
    if (now < sfxActiveUntil && priority < sfxPriority) return;
    const c = ctx();
    if (!c || !master) return;
    if (sfxBus) {
      sfxBus.gain.cancelScheduledValues(c.currentTime);
      sfxBus.gain.setTargetAtTime(1e-4, c.currentTime, 0.018);
    }
    const bus = c.createGain();
    bus.gain.setValueAtTime(volume, c.currentTime);
    bus.connect(master);
    sfxBus = bus;
    sfxActiveUntil = now + duration;
    sfxPriority = priority;
    sfxLastPlayed[n] = now;
    sound();
    setTimeout(() => {
      if (sfxBus === bus) {
        bus.gain.setTargetAtTime(1e-4, c.currentTime, 0.035);
        sfxBus = null;
        sfxPriority = -1;
        sfxActiveUntil = 0;
      }
      setTimeout(() => {
        try {
          bus.disconnect();
        } catch (e) {
        }
      }, 120);
    }, duration);
  }
  var sfx = (n) => {
    var _a;
    buzz((_a = HAPTIC[n]) != null ? _a : 8);
    if (!unlocked || S.settings.sfx <= 0) return;
    if (n === "click") {
      if (pendingClick) return;
      pendingClick = setTimeout(() => {
        pendingClick = null;
        playSfx("click");
      }, 38);
      return;
    }
    if (pendingClick) {
      clearTimeout(pendingClick);
      pendingClick = null;
    }
    playSfx(n);
  };
  var STYLES = {
    lofi: { ms: 420, mel: [523, 0, 659, 0, 587, 0, 523, 0, 440, 0, 523, 659, 587, 0, 0, 0], bass: [131, 0, 0, 0, 175, 0, 0, 0, 147, 0, 0, 0, 196, 0, 0, 0], type: "sine" },
    vui: { ms: 260, mel: [659, 784, 880, 784, 659, 523, 587, 659, 698, 880, 784, 698, 659, 587, 523, 0], bass: [262, 0, 262, 0, 349, 0, 349, 0, 294, 0, 294, 0, 392, 0, 392, 0], type: "triangle" },
    spring: {
      ms: 330,
      type: "triangle",
      mel: [523, 659, 784, 0, 880, 784, 659, 0, 587, 659, 698, 784, 659, 587, 523, 0, 659, 784, 1047, 0, 988, 880, 784, 659, 698, 784, 880, 698, 659, 587, 523, 0],
      bass: [131, 0, 196, 0, 131, 0, 196, 0, 175, 0, 220, 0, 196, 0, 147, 0, 165, 0, 247, 0, 165, 0, 220, 0, 175, 0, 220, 0, 196, 0, 131, 0]
    },
    summer: {
      ms: 245,
      type: "triangle",
      mel: [784, 0, 880, 988, 1175, 988, 880, 0, 784, 880, 988, 0, 880, 784, 659, 0, 659, 784, 880, 0, 988, 880, 784, 659, 740, 880, 988, 880, 784, 0, 784, 0],
      bass: [196, 0, 294, 0, 196, 0, 294, 0, 165, 0, 247, 0, 165, 0, 247, 0, 131, 0, 196, 0, 131, 0, 196, 0, 147, 0, 220, 0, 196, 0, 294, 0]
    },
    autumn: {
      ms: 470,
      type: "sine",
      mel: [440, 0, 523, 587, 659, 0, 587, 523, 392, 0, 440, 523, 494, 0, 440, 0, 349, 0, 440, 523, 587, 0, 523, 440, 330, 392, 494, 0, 440, 0, 0, 0],
      bass: [110, 0, 0, 165, 110, 0, 0, 0, 131, 0, 0, 196, 131, 0, 0, 0, 87, 0, 0, 131, 87, 0, 0, 0, 82, 0, 0, 123, 110, 0, 0, 0]
    },
    winter: {
      ms: 560,
      type: "sine",
      mel: [659, 0, 0, 784, 740, 0, 659, 0, 587, 0, 659, 0, 494, 0, 0, 0, 523, 0, 659, 0, 784, 0, 740, 659, 587, 0, 494, 0, 659, 0, 0, 0],
      bass: [82, 0, 0, 0, 123, 0, 0, 0, 98, 0, 0, 0, 147, 0, 0, 0, 131, 0, 0, 0, 196, 0, 0, 0, 123, 0, 0, 0, 82, 0, 0, 0]
    }
  };
  function restartMusic() {
    if (musicTimer) clearInterval(musicTimer);
    musicTimer = null;
    mstep = 0;
    const st = STYLES[S.settings.style];
    if (!unlocked || !actx || !st || S.settings.music <= 0) return;
    musicTimer = setInterval(() => {
      const i = mstep++ % st.mel.length;
      if (st.mel[i]) tone(st.mel[i], st.ms / 1e3 * 0.9, st.type, 0.5, 0, mgain);
      if (st.bass[i]) tone(st.bass[i], st.ms / 1e3 * 1.8, "sine", 0.4, 0, mgain);
    }, st.ms);
  }
  function initAudio() {
    const once = () => {
      unlocked = true;
      const c = ctx();
      if ((c == null ? void 0 : c.state) === "suspended") c.resume().catch(() => {
      });
      if (c && !musicTimer) restartMusic();
    };
    window.addEventListener("pointerdown", once);
    window.addEventListener("touchend", once, { passive: true });
    window.addEventListener("click", once);
    window.addEventListener("keydown", once);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (musicTimer) clearInterval(musicTimer);
        musicTimer = null;
        if (actx && actx.state === "running") actx.suspend().catch(() => {
        });
      } else if (unlocked) once();
    });
  }

  // js/econ.js
  var econ_exports = {};
  __export(econ_exports, {
    MAX_SECRET: () => MAX_SECRET,
    addStock: () => addStock,
    adoptPet: () => adoptPet,
    appsOpen: () => appsOpen,
    bonus: () => bonus,
    buyCategory: () => buyCategory,
    buyDecor: () => buyDecor,
    buyEquip: () => buyEquip,
    carePet: () => carePet,
    commitPlan: () => commitPlan,
    costOf: () => costOf,
    depositBank: () => depositBank,
    ensureForecast: () => ensureForecast,
    equipLevel: () => equipLevel,
    equipNext: () => equipNext,
    eventOf: () => eventOf,
    expectedCustomers: () => expectedCustomers,
    expireStock: () => expireStock,
    expiringToday: () => expiringToday,
    fire: () => fire,
    hasStaff: () => hasStaff,
    hire: () => hire,
    hireBlock: () => hireBlock,
    lifeBonus: () => lifeBonus,
    lifeDays: () => lifeDays,
    moveShop: () => moveShop,
    nearestExpiry: () => nearestExpiry,
    onlineEnabled: () => onlineEnabled,
    onlineProgress: () => onlineProgress,
    openBranch: () => openBranch,
    openMissing: () => openMissing,
    payTax: () => payTax,
    petActive: () => petActive,
    pickEvent: () => pickEvent,
    planTotal: () => planTotal,
    priceFactor: () => priceFactor,
    priceLimit: () => priceLimit,
    priceOf: () => priceOf,
    priceWeight: () => priceWeight,
    recordVideo: () => recordVideo,
    rentToday: () => rentToday,
    rollWeatherFor: () => rollWeatherFor,
    safePrice: () => safePrice,
    seasonOf: () => seasonOf,
    secretCount: () => secretCount,
    sellFranchise: () => sellFranchise,
    setBranchStaff: () => setBranchStaff,
    setPlan: () => setPlan,
    setPrice: () => setPrice,
    sizeLWeight: () => sizeLWeight,
    staffCount: () => staffCount,
    staffWagePerDay: () => staffWagePerDay,
    startAd: () => startAd,
    stockBreakdown: () => stockBreakdown,
    stockQty: () => stockQty,
    tabletsOwned: () => tabletsOwned,
    take: () => take,
    taxActive: () => taxActive,
    toggleApp: () => toggleApp,
    toggleMenu: () => toggleMenu,
    unitCost: () => unitCost,
    unitSize: () => unitSize,
    unlockItem: () => unlockItem,
    unlockPlot: () => unlockPlot,
    utilityToday: () => utilityToday,
    visitFriend: () => visitFriend,
    weatherOf: () => weatherOf,
    withdrawBank: () => withdrawBank
  });
  var seasonOf = (day) => SEASON_ORDER[Math.floor((day - 1) / DAYS_PER_SEASON) % 4];
  function rollWeatherFor(day) {
    const se = SEASONS[seasonOf(day)];
    const loc = LOCATIONS[S.location];
    const pool = (loc == null ? void 0 : loc.pool) || se.pool;
    const id = wpick(pool) || "sunny";
    const [lo, hi] = se.temp;
    let t = randInt(lo, hi);
    if (id === "hot") t = hi + randInt(0, 3);
    if (id === "cold") t = lo - randInt(0, 3);
    if (id === "rain") t -= 2;
    return { day, weather: id, temp: t };
  }
  function ensureForecast() {
    S.forecast = (S.forecast || []).filter((f) => f.day >= S.day);
    for (let d = S.day; d <= S.day + 3; d++) if (!S.forecast.some((f) => f.day === d)) S.forecast.push(rollWeatherFor(d));
    S.forecast.sort((a, b) => a.day - b.day);
    S.weather = S.forecast[0].weather;
    S.temp = S.forecast[0].temp;
    S.season = seasonOf(S.day);
  }
  function pickEvent() {
    const pool = DAY_EVENTS.map((e) => ({ e, w: e.id === "normal" ? 3 : 1 }));
    let r = Math.random() * sum(pool, (p) => p.w);
    for (const p of pool) {
      r -= p.w;
      if (r <= 0) return p.e.id;
    }
    return "normal";
  }
  var eventOf = () => DAY_EVENTS.find((e) => e.id === S.eventId) || DAY_EVENTS[DAY_EVENTS.length - 1];
  var weatherOf = () => WEATHERS[S.weather] || WEATHERS.sunny;
  function equipLevel(id) {
    const eq = EQUIP.find((e) => e.id === id);
    const v = S.equip[id];
    if (v === void 0) return eq && eq.tiers[0].c === 0 ? 1 : 0;
    return v;
  }
  var hasStaff = (id) => !!S.staff[id];
  var staffCount = () => Object.keys(S.staff).length;
  var safePrice = () => hasStaff("quanLy");
  var taxActive = () => Date.now() < S.tax.until;
  var tabletsOwned = () => equipLevel("tablet");
  var appsOpen = () => Object.values(S.apps).filter(Boolean).length;
  var onlineEnabled = () => appsOpen() > 0 && S.rating >= ONLINE_GATE.rating && LOCATIONS[S.location].fx.online !== -1;
  var secretCount = () => Object.keys(S.collection.secrets).length;
  function petActive(p = S.pet) {
    if (!p) return false;
    return ["hunger", "joy", "clean", "energy"].reduce((sum2, k) => {
      var _a;
      return sum2 + ((_a = p[k]) != null ? _a : 80);
    }, 0) / 4 >= 60;
  }
  function bonus() {
    var _a, _b, _c, _d;
    const b = {
      traffic: 0,
      tip: 0,
      patience: 0,
      bill: 0,
      online: 0,
      rent: 0,
      utility: 0,
      ingCost: 0,
      priceSens: 0,
      hardCust: 0,
      branch: 0,
      lateBill: 0,
      rainTraffic: 0,
      rainOnline: 0,
      coldTip: 0,
      billTeas: {},
      errReduce: 0,
      queue: QUEUE_BASE,
      tables: 4,
      extraCust: 0,
      pour: 0,
      seal: 0,
      life: 0,
      topSave: 0,
      speedStaff: 0,
      theft: 0,
      lucky: 0,
      comboX2: 0,
      badRev: 0
    };
    const add = (fx) => {
      if (!fx) return;
      for (const [k, v] of Object.entries(fx)) {
        if (k === "billTeas") {
          for (const [t, x] of Object.entries(v)) b.billTeas[t] = (b.billTeas[t] || 0) + x;
        } else if (k in b && typeof v === "number") b[k] += v;
      }
    };
    add((_a = LOCATIONS[S.location]) == null ? void 0 : _a.fx);
    const ev = eventOf();
    add({ traffic: ev.traffic || 0, tip: ev.tip || 0, patience: ev.patience || 0, bill: ev.bill || 0 });
    const w = weatherOf();
    b.traffic += w.traffic || 0;
    b.online += w.online || 0;
    if (S.weather === "rain") {
      b.traffic += b.rainTraffic;
      b.online += b.rainOnline;
    }
    b.traffic += S.cat.tra * CATEGORIES.tra.per;
    b.patience += S.cat.huong * CATEGORIES.huong.per;
    b.badRev += S.cat.top * CATEGORIES.top.per;
    b.speedStaff += (S.cat.nv || 0) * CATEGORIES.nv.per;
    b.online += (S.cat.online || 0) * CATEGORIES.online.per;
    for (const eq of EQUIP) {
      const lv = equipLevel(eq.id);
      if (lv <= 0) continue;
      const v = eq.vals[Math.min(lv, eq.vals.length) - 1];
      if (eq.key === "brand") {
        b.tip += v;
        b.traffic += lv >= 2 ? lv === 2 ? 0.03 : 0.06 : 0;
      } else if (eq.key === "queue") b.queue += v;
      else if (eq.key === "tables") b.tables = 4 + v;
      else if (eq.key === "extraCust") b.extraCust += v;
      else if (eq.key === "tablets") {
      } else if (eq.key in b) b[eq.key] += v;
      if (eq.util) b.utility += eq.util[Math.min(lv, eq.util.length) - 1];
    }
    for (const st of STAFF) {
      if (!S.staff[st.id]) continue;
      if (st.kind === "marketing") b.traffic += st.fxTraffic;
      if (st.kind === "guard") {
        b.errReduce += st.fxErr;
        b.theft = 1;
      }
    }
    if (taxActive()) {
      b.traffic += TAX.traffic;
      b.speedStaff += TAX.speed;
      b.theft += TAX.theft;
      b.lucky += TAX.lucky;
    }
    if (S.social.ad && S.day <= S.social.ad.endsDay) b.traffic += ((_b = ADS.find((a) => a.id === S.social.ad.id)) == null ? void 0 : _b.traffic) || 0;
    if (S.social.videoDay === S.day) b.traffic += S.social.videoBuff || 0;
    if (petActive()) {
      const fx = ((_c = PETS[S.pet.kind]) == null ? void 0 : _c.fx) || {};
      b.bill += fx.bill || 0;
      b.tip += fx.tip || 0;
      b.patience += fx.patience || 0;
      b.branch += fx.branch || 0;
      if (S.petDecor.bien) b.tip += 0.1;
      if (S.petDecor.khan) {
        b.bill += 0.08;
        b.branch += 0.08;
      }
    }
    b.bill += S.crush.perm;
    b.bill += Math.min(0.2, Object.keys(S.collection.owned).length * 3e-3);
    if (S.pet2 && petActive(S.pet2) && ((_d = S.pet) == null ? void 0 : _d.kind) !== "capybara") add(PETS.capybara.fx);
    if (S.branches.truong) b.traffic += 0.15;
    if (S.branches.cnc) b.online += 0.1;
    const active = staffCount();
    b.traffic += Math.min(0.08, active * 0.01);
    return b;
  }
  function priceOf(id) {
    var _a, _b, _c;
    return (_c = (_b = S.prices[id]) != null ? _b : (_a = ITEMS[id]) == null ? void 0 : _a.price) != null ? _c : 0;
  }
  function setPrice(id, v) {
    if (id !== "sizeL" && !ITEMS[id] || !Number.isFinite(v)) return "Gi\xE1 kh\xF4ng h\u1EE3p l\u1EC7";
    v = Math.round(v);
    if (id === "sizeL") v = clamp(v, 0, SIZE_L_CAP);
    else v = clamp(v, 0, 2e5);
    S.prices[id] = v;
    requestSave();
  }
  function priceLimit(id) {
    const k = id === "sizeL" ? "size" : ITEMS[id].kind;
    const m = safePrice() ? 1.5 : 1;
    if (k === "tea") return { warn: 5e4 * m, hard: 12e4 };
    if (k === "size") return { warn: 2e4 * m, hard: SIZE_L_CAP };
    return { warn: 2e4 * m, hard: 3e4 * m };
  }
  function priceFactor() {
    if (safePrice()) return 1;
    let f = 1;
    if (priceOf("sizeL") >= SIZE_L_CAP || [...TEAS, ...FLAVORS, ...TOPS].some((id) => S.onMenu[id] && priceOf(id) > 5e4)) f = 0.2;
    const teas = TEAS.filter((t) => S.onMenu[t]);
    for (const t of teas) if (priceOf(t) > priceLimit(t).warn) f = Math.min(f, 0.2);
    const m = safePrice() ? 1.5 : 1;
    const maxTea = teas.length ? Math.max(...teas.map(priceOf)) : 0;
    if (maxTea > 12e4 * m) f = Math.min(f, 0.4);
    const sens = bonus().priceSens;
    if (sens > 0) {
      const over = teas.length ? sum(teas, (t) => Math.max(0, priceOf(t) / ITEMS[t].price - 1)) / teas.length : 0;
      f *= 1 - clamp(over * sens * 4, 0, sens * 3);
    }
    return f;
  }
  function priceWeight(id) {
    if (safePrice()) return 1;
    const k = ITEMS[id].kind;
    if (k === "tea") return priceOf(id) > priceLimit(id).warn ? 0.2 : 1;
    const lim = priceLimit(id);
    const p = priceOf(id);
    if (p > lim.hard) return 0;
    if (p > lim.warn) return 0.2;
    return 1;
  }
  function sizeLWeight() {
    const p = priceOf("sizeL");
    const lim = priceLimit("sizeL");
    if (p >= lim.hard) return 0;
    if (safePrice()) return 1;
    return p > lim.warn ? 0.1 : 1;
  }
  var lifeBonus = () => bonus().life;
  var stockQty = (id) => sum(S.stock[id] || [], (l) => l.q);
  function costOf(id) {
    const b = bonus();
    const it = ITEMS[id];
    let c = it.cost * (1 + b.ingCost);
    if (it.kind === "top") c *= 1 - b.topSave;
    return c;
  }
  function addStock(id, q) {
    const it = ITEMS[id];
    if (!it || q <= 0) return;
    const exp = it.life ? S.day + it.life - 1 + lifeBonus() : -1;
    let lot = S.stock[id].find((l) => l.exp === exp && l.receivedDay === S.day);
    if (lot) lot.q += q;
    else S.stock[id].push({ q, exp, receivedDay: S.day });
    S.stock[id].sort((a, b) => (a.exp === -1 ? 1e9 : a.exp) - (b.exp === -1 ? 1e9 : b.exp));
  }
  function take(id, n = 1) {
    if (stockQty(id) < n) return false;
    let left = n;
    for (const l of S.stock[id]) {
      const t = Math.min(l.q, left);
      l.q -= t;
      left -= t;
      if (left <= 0) break;
    }
    S.stock[id] = S.stock[id].filter((l) => l.q > 0);
    S.today.cogs += costOf(id) * n;
    S.lastUsed[id] = (S.lastUsed[id] || 0) + n;
    return true;
  }
  function expireStock() {
    let waste = 0;
    const list = [];
    for (const id of IDS) {
      const bad = S.stock[id].filter((l) => l.exp !== -1 && l.exp <= S.day);
      const q = sum(bad, (l) => l.q);
      if (q > 0) {
        waste += q * costOf(id);
        list.push({ id, q });
      }
      S.stock[id] = S.stock[id].filter((l) => !(l.exp !== -1 && l.exp <= S.day));
    }
    S.today.waste += waste;
    S.today.cogs += waste;
    return { waste, list };
  }
  function expiringToday(id) {
    return sum((S.stock[id] || []).filter((l) => l.exp !== -1 && l.exp <= S.day), (l) => l.q);
  }
  function nearestExpiry(id) {
    const lots = (S.stock[id] || []).filter((l) => l.exp !== -1);
    if (!lots.length) return null;
    return Math.min(...lots.map((l) => l.exp)) - S.day + 1;
  }
  var lifeDays = (id) => ITEMS[id].life ? ITEMS[id].life + lifeBonus() : 0;
  function stockBreakdown(id) {
    const lots = (S.stock[id] || []).filter((l) => l.q > 0);
    return {
      old: sum(lots.filter((l) => Number.isFinite(l.receivedDay) && l.receivedDay < S.day), (l) => l.q),
      fresh: sum(lots.filter((l) => l.receivedDay === S.day), (l) => l.q),
      unknown: sum(lots.filter((l) => !Number.isFinite(l.receivedDay)), (l) => l.q),
      lots: lots.map((l) => ({ q: l.q, days: l.exp === -1 ? null : l.exp - S.day + 1 }))
    };
  }
  function unlockItem(id) {
    const it = ITEMS[id];
    if (!it || S.unlocked[id]) return "\u0110\xE3 m\u1EDF kh\xF3a";
    if (S.money < it.unlock) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= it.unlock;
    S.unlocked[id] = true;
    S.onMenu[id] = true;
    if (it.kind === "flavor") {
      addStock(id, FLAVOR_BOTTLE);
      S.today.purchase += it.unlock;
    }
    markDirty("hud", "panel", "board");
    emit("unlock", id);
    requestSave();
    return null;
  }
  function toggleMenu(id) {
    if (!S.unlocked[id]) return "Ch\u01B0a m\u1EDF kh\xF3a";
    S.onMenu[id] = !S.onMenu[id];
    markDirty("panel", "board");
    requestSave();
    return null;
  }
  var unitSize = (id) => ITEMS[id].kind === "flavor" ? FLAVOR_BOTTLE : 1;
  var unitCost = (id) => costOf(id) * unitSize(id);
  function planTotal() {
    return Math.round(sum(Object.entries(S.plan), ([id, n]) => unitCost(id) * n));
  }
  function setPlan(id, n) {
    if (!ITEMS[id] || !S.unlocked[id] || !Number.isFinite(n)) return "Nguy\xEAn li\u1EC7u ho\u1EB7c s\u1ED1 l\u01B0\u1EE3ng kh\xF4ng h\u1EE3p l\u1EC7";
    n = clamp(Math.round(n), 0, 999);
    if (n <= 0) delete S.plan[id];
    else S.plan[id] = n;
    markDirty("panel", "cta");
  }
  function commitPlan() {
    if (Object.entries(S.plan).some(([id, n]) => !ITEMS[id] || !S.unlocked[id] || !Number.isInteger(n) || n < 0 || n > 999)) return "K\u1EBF ho\u1EA1ch nh\u1EADp h\xE0ng kh\xF4ng h\u1EE3p l\u1EC7";
    const total = planTotal();
    if (total <= 0) return "Ch\u01B0a ch\u1ECDn g\xEC \u0111\u1EC3 nh\u1EADp";
    if (S.money < total) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n nh\u1EADp h\xE0ng";
    S.money -= total;
    S.today.purchase += total;
    for (const [id, n] of Object.entries(S.plan)) addStock(id, n * unitSize(id));
    S.plan = {};
    markDirty("hud", "panel", "cta");
    emit("purchase", total);
    requestSave();
    return null;
  }
  function openMissing() {
    const miss = [];
    const teaOk = TEAS.some((t) => S.onMenu[t] && stockQty(t) > 0);
    const topOk = TOPS.some((t) => S.onMenu[t] && stockQty(t) > 0);
    const supOk = (stockQty("lyM") > 0 || stockQty("lyL") > 0) && stockQty("da") > 0 && stockQty("duong") > 0;
    if (!teaOk) miss.push("Tr\xE0");
    if (!topOk) miss.push("Topping");
    if (!supOk) miss.push("D\u1EE5ng c\u1EE5");
    return { miss, canOpen: teaOk && supOk };
  }
  function buyCategory(key) {
    if (!CATEGORIES[key]) return "H\u1EA1ng m\u1EE5c kh\xF4ng h\u1EE3p l\u1EC7";
    const lvl = S.cat[key];
    const cost = catCost(lvl);
    if (!Number.isFinite(cost)) return "\u0110\xE3 \u0111\u1EA1t gi\u1EDBi h\u1EA1n c\u1EA5p \u0111\u1ED9";
    if (S.money < cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= cost;
    S.cat[key]++;
    markDirty("hud", "panel");
    requestSave();
    return null;
  }
  function equipNext(id) {
    const eq = EQUIP.find((e) => e.id === id);
    if (!eq) return null;
    const lv = equipLevel(id);
    if (lv >= eq.tiers.length) return null;
    return eq.tiers[lv];
  }
  function buyEquip(id) {
    const eq = EQUIP.find((e) => e.id === id);
    const next = equipNext(id);
    if (!next) return "\u0110\xE3 t\u1ED1i \u0111a";
    if (S.money < next.c) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= next.c;
    S.equip[id] = equipLevel(id) + 1;
    markDirty("hud", "panel");
    emit("equip", eq);
    requestSave();
    return null;
  }
  function buyDecor(id) {
    const d = PET_DECOR.find((x) => x.id === id);
    if (!d || S.petDecor[id]) return "\u0110\xE3 s\u1EDF h\u1EEFu";
    if (!S.pet) return "C\u1EA7n nh\u1EADn nu\xF4i th\xFA c\u01B0ng tr\u01B0\u1EDBc";
    if (S.money < d.cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= d.cost;
    S.petDecor[id] = 1;
    markDirty("hud", "panel");
    requestSave();
    return null;
  }
  function toggleApp(id) {
    const app = APPS.find((a) => a.id === id);
    if (!app) return "Kh\xF4ng c\xF3 app";
    if (S.apps[id]) {
      S.apps[id] = false;
      markDirty("panel");
      requestSave();
      return null;
    }
    const pr = onlineProgress();
    if (pr.profit < ONLINE_GATE.profit || pr.orders < ONLINE_GATE.orders) return "Ch\u01B0a \u0111\u1EA1t \u0111i\u1EC1u ki\u1EC7n m\u1EDF b\xE1n online (l\u1EE3i nhu\u1EADn & s\u1ED1 \u0111\u01A1n)";
    if (S.rating < 4) return "C\u1EA7n \u0111\xE1nh gi\xE1 t\u1EEB 4,0\u2605 tr\u1EDF l\xEAn";
    if (appsOpen() >= tabletsOwned()) return "C\u1EA7n mua th\xEAm tablet (m\u1ED7i tablet ch\u1EA1y 1 app)";
    S.apps[id] = true;
    markDirty("panel");
    requestSave();
    return null;
  }
  function hireBlock(id) {
    const st = STAFF.find((s) => s.id === id);
    if (!st) return "Nh\xE2n vi\xEAn kh\xF4ng h\u1EE3p l\u1EC7";
    if (S.staff[id]) return "\u0110\xE3 thu\xEA";
    for (const ex of st.excl || []) if (S.staff[ex]) return `Kh\xF4ng th\u1EC3 thu\xEA c\xF9ng ${STAFF.find((s) => s.id === ex).role}`;
    for (const o of STAFF) if ((o.excl || []).includes(id) && S.staff[o.id]) return `Kh\xF4ng th\u1EC3 thu\xEA c\xF9ng ${o.role}`;
    const n = st.need;
    if ((n == null ? void 0 : n.day) && S.day < n.day) return `M\u1EDF \u1EDF ng\xE0y ${n.day}`;
    if ((n == null ? void 0 : n.online) && !onlineEnabled()) return "C\u1EA7n m\u1EDF \u0111\u01A1n online";
    if ((n == null ? void 0 : n.full) && Object.keys(S.staff).length < 2) return "C\u1EA7n c\xF3 \u2265 2 nh\xE2n vi\xEAn";
    if ((n == null ? void 0 : n.secret) && secretCount() < n.secret) return `C\u1EA7n m\u1EDF kho\xE1 ${n.secret} c\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n \u1EDF m\u1EE5c s\u01B0u t\u1EA7m`;
    return null;
  }
  function hire(id) {
    const st = STAFF.find((s) => s.id === id);
    const why = hireBlock(id);
    if (why) return why;
    if (S.money < st.hire) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= st.hire;
    S.staff[id] = { since: S.day, shifts: 0 };
    markDirty("hud", "panel");
    emit("hire", st);
    requestSave();
    return null;
  }
  function fire(id) {
    delete S.staff[id];
    emit("fire", id);
    markDirty("panel");
    requestSave();
  }
  var staffWagePerDay = () => sum(STAFF.filter((s) => S.staff[s.id]), (s) => s.wage);
  function rentToday() {
    return Math.round(BASE_RENT * (1 + bonus().rent));
  }
  function utilityToday() {
    return Math.round(BASE_UTILITY * (1 + bonus().utility));
  }
  function expectedCustomers() {
    const b = bonus();
    const rating = 0.8 + clamp(S.rating, 1, 5) * 0.05;
    const base = 14 + 0.8 * Math.min(S.day, 60);
    const wealth = 1 + clamp(Math.log10(Math.max(S.money, 1e3) / 1e3) * 0.12, 0, 0.6);
    const staffBoost = 1 + Math.min(0.9, staffCount() * 0.15);
    return Math.max(4, Math.round(base * (1 + b.traffic) * priceFactor() * rating * wealth * staffBoost) + b.extraCust);
  }
  function onlineProgress() {
    const recorded = S.history.some((x) => x.day === S.day);
    return { profit: sum(S.history, (x) => x.profit) + (recorded ? 0 : S.today.profit || 0), orders: sum(S.history, (x) => x.cups) + (recorded ? 0 : S.today.cups), rating: S.rating };
  }
  var MAX_SECRET = SECRET_RECIPES.length;
  function commitMenuChange() {
    markDirty("hud", "panel", "board", "cta", "tiles");
    requestSave();
  }
  function openBranch(id) {
    const b = BRANCHES.find((x) => x.id === id);
    if (!b) return "Chi nh\xE1nh kh\xF4ng h\u1EE3p l\u1EC7";
    if (S.branches[id]) return "Chi nh\xE1nh \u0111\xE3 m\u1EDF";
    if (S.money < b.cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= b.cost;
    S.branches[id] = { staff: 0, rev: 0, days: 0 };
    commitMenuChange();
    return null;
  }
  function setBranchStaff(id, n) {
    if (!S.branches[id] || !Number.isFinite(n)) return "Chi nh\xE1nh ho\u1EB7c s\u1ED1 l\u01B0\u1EE3ng kh\xF4ng h\u1EE3p l\u1EC7";
    S.branches[id].staff = clamp(Math.round(n), 0, 3);
    commitMenuChange();
    return null;
  }
  function sellFranchise() {
    if (S.franchise.count >= FRANCHISE.max) return "\u0110\xE3 \u0111\u1EA1t s\u1ED1 \u0111i\u1EC3m nh\u01B0\u1EE3ng quy\u1EC1n t\u1ED1i \u0111a";
    if (S.rating < FRANCHISE.needRating || S.followers < FRANCHISE.needFollowers) return "Ch\u01B0a \u0111\u1EE7 uy t\xEDn ho\u1EB7c ng\u01B0\u1EDDi theo d\xF5i";
    S.money += FRANCHISE.fee;
    S.franchise.count++;
    commitMenuChange();
    return null;
  }
  function moveShop(id) {
    if (!LOCATIONS[id]) return "\u0110\u1ECBa \u0111i\u1EC3m kh\xF4ng h\u1EE3p l\u1EC7";
    if (S.phase === "sell") return "H\xE3y k\u1EBFt th\xFAc ca tr\u01B0\u1EDBc khi chuy\u1EC3n qu\xE1n";
    if (S.location === id) return "Qu\xE1n \u0111ang \u1EDF \u0111\u1ECBa \u0111i\u1EC3m n\xE0y";
    if (S.money < LOCATION_COST) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n kh\u1EDFi nghi\u1EC7p";
    S.money -= LOCATION_COST;
    S.location = id;
    S.forecast = [];
    ensureForecast();
    commitMenuChange();
    markDirty("view");
    return null;
  }
  function startAd(id) {
    const ad = ADS.find((x) => x.id === id);
    if (!ad) return "Chi\u1EBFn d\u1ECBch kh\xF4ng h\u1EE3p l\u1EC7";
    if (S.social.ad && S.day <= S.social.ad.endsDay) return "\u0110ang c\xF3 m\u1ED9t chi\u1EBFn d\u1ECBch ho\u1EA1t \u0111\u1ED9ng";
    if (S.money < ad.cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n ch\u1EA1y qu\u1EA3ng c\xE1o";
    S.money -= ad.cost;
    S.social.ad = { id, endsDay: S.day + ad.days - 1 };
    S.followers += ad.followers;
    commitMenuChange();
    return null;
  }
  function recordVideo() {
    const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((x) => x.id === S.social.ad.id) : null;
    if (S.social.videosToday >= (ad ? ad.videos : 1)) return "\u0110\xE3 h\u1EBFt l\u01B0\u1EE3t quay video h\xF4m nay";
    S.social.videosToday++;
    S.social.videoDay = S.day;
    S.social.videoBuff = Math.max(S.social.videoBuff || 0, rand(0.02, 0.15));
    commitMenuChange();
    return null;
  }
  function visitFriend(id) {
    if (![...NPC_FRIENDS, ...S.friends.list].some((x) => x.id === id)) return "B\u1EA1n b\xE8 kh\xF4ng h\u1EE3p l\u1EC7";
    if (S.friends.gifted[id] === S.day) return "\u0110\xE3 th\u0103m b\u1EA1n n\xE0y h\xF4m nay";
    const gift = randInt(5, 20) * 1e3;
    S.friends.gifted[id] = S.day;
    S.money += gift;
    S.followers += randInt(10, 80);
    commitMenuChange();
    return gift;
  }
  function unlockPlot() {
    const g = S.garden;
    if (g.unlocked >= PLOTS) return "\u0110\xE3 m\u1EDF to\xE0n b\u1ED9 m\u1EA3nh \u0111\u1EA5t";
    const cost = plotCost(g.unlocked + 1);
    if (S.money < cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= cost;
    g.unlocked++;
    commitMenuChange();
    return null;
  }
  function adoptPet(kind) {
    const p = PETS[kind];
    if (!p) return "Th\xFA c\u01B0ng kh\xF4ng h\u1EE3p l\u1EC7";
    if (kind === "capybara" && secretCount() < p.secret) return "Ch\u01B0a \u0111\u1EE7 c\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n";
    if (kind === "capybara" && (S.pet2 || S.pet && S.pet.kind === kind) || S.pet && S.pet.kind === kind) return "\u0110\xE3 nh\u1EADn nu\xF4i b\xE9 n\xE0y";
    if (S.money < p.adopt) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n nh\u1EADn nu\xF4i";
    S.money -= p.adopt;
    if (kind === "capybara" && S.pet) S.pet2 = { kind, hunger: 80, joy: 80, clean: 80, energy: 80 };
    else {
      if (S.pet && S.pet.kind === "capybara") S.pet2 = S.pet;
      S.pet = { kind, hunger: 80, joy: 80, clean: 80, energy: 80 };
    }
    commitMenuChange();
    return null;
  }
  function carePet(id, kind = ((_a) => (_a = S.pet) == null ? void 0 : _a.kind)()) {
    var _a2;
    const c = PET_CARE.find((x) => x.id === id), p = [S.pet, S.pet2].find((p2) => (p2 == null ? void 0 : p2.kind) === kind);
    if (!p || !c) return "Ch\u01B0a c\xF3 th\xFA c\u01B0ng ho\u1EB7c thao t\xE1c kh\xF4ng h\u1EE3p l\u1EC7";
    if (S.money < c.cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    for (const key of ["hunger", "joy", "clean", "energy"]) p[key] = (_a2 = p[key]) != null ? _a2 : 80;
    S.money -= c.cost;
    p[c.stat] = clamp(p[c.stat] + c.gain * (S.petDecor.app ? 1.3 : 1), 0, 100);
    if (id === "feed" && S.petDecor.bat) {
      p.hunger = clamp(p.hunger + 20, 0, 100);
      p.joy = clamp(p.joy + 10, 0, 100);
    }
    if (id === "bath" && S.petDecor.voi) {
      p.clean = clamp(p.clean + 30, 0, 100);
      p.joy = clamp(p.joy + 10, 0, 100);
    }
    if (id === "play" && S.petDecor.kim) p.exp = (p.exp || 0) + 10;
    commitMenuChange();
    return null;
  }
  function payTax() {
    if (taxActive()) return "Thu\u1EBF v\u1EABn c\xF2n hi\u1EC7u l\u1EF1c";
    S.tax.rate = clamp(Number(S.tax.rate) || TAX.minRate, TAX.minRate, TAX.maxRate);
    const amount = Math.round(S.money * S.tax.rate);
    if (amount <= 0) return "K\xE9t tr\u1ED1ng, ch\u01B0a c\xF3 g\xEC \u0111\u1EC3 n\u1ED9p thu\u1EBF";
    S.money -= amount;
    S.tax.paid += amount;
    S.today.tax += amount;
    S.tax.last = Date.now();
    S.tax.until = S.tax.last + TAX.hours * 36e5;
    commitMenuChange();
    return amount;
  }
  function depositBank(fraction) {
    if (![0.1, 0.5, 1].includes(fraction)) return "M\u1EE9c g\u1EEDi kh\xF4ng h\u1EE3p l\u1EC7";
    const amount = Math.min(Math.floor(S.money * fraction), Math.max(0, BANK.max - S.bank.balance));
    if (amount <= 0) return "Kh\xF4ng c\xF2n h\u1EA1n m\u1EE9c ho\u1EB7c ti\u1EC1n \u0111\u1EC3 g\u1EEDi";
    S.money -= amount;
    S.bank.balance += amount;
    S.bank.principal = (S.bank.principal || 0) + amount;
    S.bank.shifts = 0;
    commitMenuChange();
    return amount;
  }
  function withdrawBank() {
    const b = S.bank;
    if (b.balance <= 0) return "Kh\xF4ng c\xF3 ti\u1EC1n g\u1EEDi";
    const amount = b.shifts < BANK.lockShifts ? b.principal || 0 : b.balance;
    S.money += amount;
    b.balance = 0;
    b.principal = 0;
    b.shifts = 0;
    commitMenuChange();
    return amount;
  }

  // js/sell.js
  var sell_exports = {};
  __export(sell_exports, {
    SH: () => SH,
    acceptOnline: () => acceptOnline,
    addFlavor: () => addFlavor,
    addSupply: () => addSupply,
    addTop: () => addTop,
    cleanTable: () => cleanTable,
    closeNow: () => closeNow,
    comfortStaff: () => comfortStaff,
    evaluate: () => evaluate,
    frontCustomer: () => frontCustomer,
    genPost: () => genPost,
    isWrongOrder: () => isWrongOrder,
    makeOrder: () => makeOrder,
    nextDay: () => nextDay,
    orderPrice: () => orderPrice,
    pickCup: () => pickCup,
    pushReview: () => pushReview,
    rejectCustomer: () => rejectCustomer,
    resetShiftRuntime: () => resetShiftRuntime,
    restoreShiftRuntime: () => restoreShiftRuntime,
    sealCup: () => sealCup,
    selectCustomer: () => selectCustomer,
    serve: () => serve,
    staffJobPreview: () => staffJobPreview,
    startPour: () => startPour,
    startShift: () => startShift,
    stopPour: () => stopPour,
    trashCup: () => trashCup,
    updateShift: () => updateShift
  });

  // js/icons.js
  var P = {
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    pause: '<rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    book: '<path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V18c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z"/><path d="M12 6v12.5"/>',
    branch: '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/>',
    collect: '<rect x="8" y="3" width="12" height="15" rx="2.2"/><path d="M4.5 7.5V19a2 2 0 0 0 2 2H16"/><path d="M14 8.2l1.1 2.2 2.4.35-1.75 1.7.42 2.4L14 13.7l-2.17 1.15.42-2.4-1.75-1.7 2.4-.35z"/>',
    tiem: '<g fill="currentColor" fill-opacity=".16" stroke="none"><path d="M5 5h14l1.5 5.5H3.5z"/><path d="M5.5 13h13v7h-13z"/></g><path d="M3.5 10.5L5 5h14l1.5 5.5"/><path d="M3.5 10.5a2.8 2.8 0 0 0 5.5 0 2.8 2.8 0 0 0 6 0 2.8 2.8 0 0 0 5.5 0"/><path d="M5.5 13v7h13v-7"/><path d="M10 20v-4.5h4V20"/>',
    kho: '<g fill="currentColor" fill-opacity=".16" stroke="none"><path d="M3.5 7.5L12 3.5l8.5 4L12 11.5z"/><path d="M12 11.5l8.5-4v9L12 20.5z" fill-opacity=".3"/></g><path d="M3.5 7.5L12 3.5l8.5 4v9L12 20.5l-8.5-4z"/><path d="M3.5 7.5L12 11.5l8.5-4M12 11.5v9"/><path d="M7.7 5.6l8.5 4"/>',
    phattrien: '<g fill="currentColor" fill-opacity=".16" stroke="none"><rect x="4" y="12" width="3.6" height="8" rx="1"/><rect x="10.2" y="7.5" width="3.6" height="12.5" rx="1"/><rect x="16.4" y="14" width="3.6" height="6" rx="1"/></g><path d="M4 20.5h16"/><path d="M4.5 9l4.5-4 3.5 2.5L19 3.5"/><path d="M15 3.5h4v4"/>',
    xahoi: '<g fill="currentColor" fill-opacity=".16" stroke="none"><circle cx="9" cy="8.5" r="3.2"/><circle cx="17.5" cy="9.5" r="2.5"/></g><circle cx="9" cy="8.5" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9.5" r="2.5"/><path d="M17.5 14.5c2.4 0 3.8 1.7 3.8 4"/>',
    them: '<g fill="currentColor" fill-opacity=".16" stroke="none"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></g><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>'
  };
  function icon(name, size = 22, cls = "") {
    return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;
  }

  // js/platform.js
  async function copyText(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {
    }
    const input = document.createElement("textarea");
    input.value = text;
    input.readOnly = true;
    input.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0";
    const active = document.activeElement;
    document.body.appendChild(input);
    let copied = false;
    try {
      input.focus();
      input.select();
      input.setSelectionRange(0, text.length);
      copied = !!document.execCommand("copy");
    } catch (e) {
    } finally {
      input.remove();
      if (active && active.focus) active.focus();
    }
    return copied;
  }

  // js/sell-art.js
  var DIR = "assets/sell/sprites/";
  var img = (name, cls = "") => `<img class="sale-art ${cls}" src="${DIR}${name}.png" alt="" draggable="false" decoding="async">`;
  var customerCells = {
    sinhVien: 1,
    vanPhong: 2,
    genZ: 0,
    bac: 4,
    vip: 8,
    macCa: 9,
    reviewer: 2,
    be: 6,
    idol: 3,
    gamer: 5,
    congNhan: 7,
    shipper: 1,
    giaoVien: 8
  };
  var TEAS2 = ["traSua", "matcha", "hongTra", "lucTra", "olong", "traThai"];
  var TOPS2 = ["tcDen", "tcTrang", "tcVang", "tcSoi", "tcNo", "cuNang", "thachTc", "suongSao", "thachCf", "fCheese", "fMatcha", "fMuoi", "fUbe", "pmVien", "thachPm"];
  var TOP_ALIAS = { pmTuoi: "pmVien" };
  function customerArt(key) {
    if (!Object.prototype.hasOwnProperty.call(customerCells, key)) return "";
    return img(`customer-${customerCells[key]}`, "customer-sprite");
  }
  function teaArt(id) {
    return img(`tea-${TEAS2.includes(id) ? id : "traSua"}`);
  }
  function toppingArt(id) {
    const custom = ingredientArt(id);
    if (custom) return custom;
    const k = TOP_ALIAS[id] || id;
    return img(`top-${TOPS2.includes(k) ? k : "tcDen"}`);
  }
  function stackArt(size) {
    const L = size === "L";
    const rims = L ? [46, 52, 58, 64, 70, 76, 82] : [48, 54, 60, 66, 72, 78];
    const wl = (y) => 6.5 + 6.5 * (y - 34) / 60;
    const lines = rims.map((y) => `<path d="M${wl(y).toFixed(1)} ${y} Q30 ${y + 3.4} ${(60 - wl(y)).toFixed(1)} ${y}" fill="none" stroke="rgba(122,90,62,.5)" stroke-width="1.1"/>`).join("");
    const id = `stk${cupUid++}`;
    return `<svg class="sale-art stack-svg" viewBox="0 26 60 78" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
    <defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#e6cfa8"/><stop offset=".35" stop-color="#fbf0dc"/><stop offset=".7" stop-color="#f1dfc0"/><stop offset="1" stop-color="#d9bf94"/></linearGradient></defs>
    <ellipse cx="30" cy="99" rx="21" ry="3.6" fill="rgba(60,35,10,.2)"/>
    <path d="M6.5 34 L13 93 Q30 98.5 47 93 L53.5 34 Z" fill="url(#${id})" stroke="#7a5a3e" stroke-width="1.8" stroke-linejoin="round"/>
    ${lines}
    <path d="M6.5 34 Q30 26 53.5 34" fill="none" stroke="#7a5a3e" stroke-width="1.8"/>
    <ellipse cx="30" cy="34" rx="23.5" ry="6.4" fill="#fffaf0" stroke="#7a5a3e" stroke-width="1.8"/>
    <ellipse cx="30" cy="35.2" rx="19.5" ry="4.2" fill="#e4cda6"/>
    <path d="M12 44 L16.5 86" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".55"/>
  </svg>`;
  }
  function sealerArt() {
    return img("sealer");
  }
  var cupUid = 0;
  var BODY_IN = "M7.6 13 L17.4 95.5 Q39 101 60.6 95.5 L70.4 13 Z";
  var Y_TOP = 14;
  var Y_BOT = 97;
  var wallL = (y) => 6 + 10 * (y - 12) / 84;
  var wallR = (y) => 72 - 10 * (y - 12) / 84;
  var surfaceOf = (fill) => Y_BOT - (Y_BOT - Y_TOP) * Math.min(1, Math.max(0, fill) * 0.86);
  var teaTone = (hex, amount) => /^#[0-9a-f]{6}$/i.test(hex || "") ? "#" + [1, 3, 5].map((p) => Math.round(Math.max(0, Math.min(255, parseInt(hex.slice(p, p + 2), 16) + amount))).toString(16).padStart(2, "0")).join("") : hex || "#fff";
  function setCupFill(cupEl, fill) {
    const liq = cupEl && cupEl.querySelector(".c-liq");
    if (!liq) return;
    const y = surfaceOf(fill);
    liq.setAttribute("y", y.toFixed(1));
    liq.setAttribute("height", (110 - y).toFixed(1));
    const top = cupEl.querySelector(".c-liq-top");
    if (top) top.setAttribute("y", y.toFixed(1));
    const surf = cupEl.querySelector(".c-surf");
    if (surf) {
      surf.setAttribute("cy", y.toFixed(1));
      surf.style.opacity = fill > 0.02 ? 1 : 0;
    }
    const bubbles = cupEl.querySelector(".c-pour-bubbles");
    if (bubbles) bubbles.setAttribute("transform", `translate(0 ${y.toFixed(1)})`);
    const ice = cupEl.querySelector(".c-ice");
    if (ice) ice.setAttribute("transform", `translate(0 ${Math.min(78, y + 6).toFixed(1)})`);
  }
  function cupSvg(opts) {
    var _a;
    const { fill = 0, tea = null, flavor = null, tops = [], shown = [], lid = "", straw = false, ice = false, sugar = false } = opts;
    const id = `cup${cupUid++}`;
    const y = surfaceOf(tea ? fill : 0);
    const balls = [];
    let n = 0;
    for (let ti = 0; ti < tops.length; ti++) {
      const c = tops[ti], cnt = (_a = shown[ti]) != null ? _a : 3;
      for (let k = 0; k < cnt; k++, n++) {
        const row2 = Math.floor(n / 5), col = n % 5;
        const yy = 91 - row2 * 6.6;
        const xx = Math.max(wallL(yy) + 4.2, Math.min(wallR(yy) - 4.2, 39 + (col - 2) * 8.2 + (row2 % 2 ? 4.1 : 0)));
        balls.push(`<circle cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="3.7" fill="${c}"/><circle cx="${(xx - 1.2).toFixed(1)}" cy="${(yy - 1.3).toFixed(1)}" r="1.1" fill="#fff" opacity=".55"/>`);
      }
    }
    const liquid = tea ? `<rect class="c-liq" x="0" y="${y.toFixed(1)}" width="78" height="${(110 - y).toFixed(1)}" fill="url(#${id}tea)"/>
      <rect class="c-liq-top" x="0" y="${y.toFixed(1)}" width="78" height="14" fill="url(#${id}g)"/>
      ${flavor ? `<rect class="c-flav" x="0" y="64" width="78" height="40" fill="${flavor}" opacity=".5"/>` : ""}
      <ellipse class="c-surf" cx="39" cy="${y.toFixed(1)}" rx="31.5" ry="3.1" fill="#fff" fill-opacity=".38" style="opacity:${fill > 0.02 ? 1 : 0}"/>
      <g class="c-pour-bubbles" transform="translate(0 ${y.toFixed(1)})"><circle class="tea-bubble" cx="33" cy="5" r="1.8"/><circle class="tea-bubble" cx="45" cy="9" r="1.2"/><circle class="tea-bubble" cx="39" cy="15" r="1.5"/></g>` : "";
    const lidSvg = lid ? `<g class="c-lidg ${lid === "drop" ? "drop" : ""}">
      <path d="M7.5 9.8 Q39 -8.5 70.5 9.8 Z" fill="rgba(255,255,255,.72)" stroke="#cdbda7" stroke-width="1.1"/>
      <path d="M16 8 Q26 0 36 -0.5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".85"/>
      <path d="M3.4 10 Q3.4 7.6 6 7.6 H72 Q74.6 7.6 74.6 10 L72.7 17.4 Q72.5 18.5 71.4 18.5 H6.6 Q5.5 18.5 5.3 17.4 Z" fill="#fffdf8" stroke="#cdbda7" stroke-width="1.2"/>
      <path d="M6.2 12.4 H71.8" stroke="#e3d6c1" stroke-width="1"/>
    </g>` : "";
    const strawSvg = straw ? '<g class="c-strawg"><line x1="41" y1="92" x2="54" y2="-22" stroke="#ff7fa0" stroke-width="5" stroke-linecap="round"/><line x1="41" y1="92" x2="54" y2="-22" stroke="#fff" stroke-width="5" stroke-dasharray="4 5" opacity=".9"/></g>' : "";
    return `<svg class="cup-svg" viewBox="0 0 78 104" width="100%" height="100%" overflow="visible" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
    <defs><clipPath id="${id}c"><path d="${BODY_IN}"/></clipPath>
      <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".32"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
      <linearGradient id="${id}tea" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${teaTone(tea, 15)}"/><stop offset=".35" stop-color="${tea || "#fff"}"/><stop offset="1" stop-color="${teaTone(tea, -28)}"/></linearGradient></defs>
    <ellipse cx="39" cy="100" rx="25" ry="3.2" fill="rgba(60,35,10,.16)"/>
    <g clip-path="url(#${id}c)">${liquid}${sugar ? '<g class="c-sugar" fill="none" stroke="#cd8b25" stroke-width="2" opacity=".32"><path d="M33 31 Q52 47 29 64 Q24 76 46 91"/><path d="M43 34 Q26 49 48 67 Q53 80 34 94"/></g>' : ""}${balls.join("")}
      ${ice ? `<g class="c-ice" transform="translate(0 ${Math.min(78, y + 6).toFixed(1)})">${[23, 36, 48].map((x, i) => `<g transform="translate(${x} ${i % 2 * 6})"><path d="M0 3 L6 0 L12 3 L6 6 Z" fill="#e6faff" stroke="#8bc6e7" stroke-width=".7"/><path d="M0 3 L6 6 L6 14 L0 11 Z" fill="#bce4f7" stroke="#8bc6e7" stroke-width=".7"/><path d="M6 6 L12 3 L12 11 L6 14 Z" fill="#8dcce9" stroke="#75b9db" stroke-width=".7"/><path d="M2 4 L5 5" stroke="#fff" stroke-width="1.2"/></g>`).join("")}</g>` : ""}
    </g>
    ${strawSvg}
    <path d="M6 12 L16 96 Q39 103 62 96 L72 12" fill="rgba(235,245,252,.2)" stroke="rgba(121,88,64,.9)" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12.5 20 L19 82" stroke="#fff" stroke-width="3.2" stroke-linecap="round" opacity=".55"/>
    <path d="M66 24 L61 62" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".4"/>
    <ellipse cx="39" cy="12" rx="33" ry="4.6" fill="rgba(255,255,255,.28)" stroke="rgba(121,88,64,.9)" stroke-width="1.6"/>
    ${lidSvg}
  </svg>`;
  }
  function staffArt(id) {
    const cells = { thuViec: 2, phaChe: 1, online: 5, quanLy: 4, genZ: 3, diCho: 6, svDem: 9, meKetTinh: 8, chuBa: 7 };
    return img(`customer-${cells[id] || 0}`, "staff-sprite");
  }

  // js/guide-content.js
  var cup = () => cupSvg({ fill: 0.95, tea: ITEMS.traSua.color, tops: [ITEMS.tcDen.color], lid: "on", straw: true });
  function guideSections() {
    return [
      { id: "prepare", ico: "\u{1F3EA}", title: "M\xE0n chu\u1EA9n b\u1ECB", open: true, rows: [
        ["\u{1FAA7}", "<b>Bi\u1EC3n hi\u1EC7u</b>: ch\u1EA1m logo \u0111\u1EC3 \u0111\u1ED5i h\xECnh, ch\u1EA1m t\xEAn \u0111\u1EC3 s\u1EEDa t\xEAn ti\u1EC7m. Nh\xE3n \u0111\u1ECBa \u0111i\u1EC3m m\u1EDF <b>Kh\u1EDFi nghi\u1EC7p</b>; nh\xE3n <b>\u{1F3EE} S\u1EA3nh Tr\xE0</b> m\u1EDF qu\u1EA3n l\xFD b\xE0n gh\u1EBF.", ".shopcard"],
        ["\u{1F964}", "<b>Menu h\xF4m nay</b>: hi\u1EC3n th\u1ECB tr\xE0 v\xE0 topping \u0111\xE3 m\u1EDF kh\xF3a, \u0111ang b\u1EADt trong menu, k\xE8m gi\xE1 v\xE0 ph\u1EE5 thu size L. S\u1EF1 ki\u1EC7n v\xE0 l\u01B0\u1EE3ng kh\xE1ch d\u1EF1 ki\u1EBFn n\u1EB1m d\u01B0\u1EDBi c\xE1c \xF4 ch\u1EE9c n\u0103ng.", "#board"],
        ["\u{1F9ED}", "<b>Thanh nh\xF3m</b>: \u{1F3EA} Ti\u1EC7m \xB7 \u{1F4E6} Kho \xB7 \u{1F4C8} Ph\xE1t tri\u1EC3n \xB7 \u{1F465} X\xE3 h\u1ED9i \xB7 \u{1F380} Th\xEAm. Ch\u1ECDn nh\xF3m r\u1ED3i ch\u1ECDn \xF4 ch\u1EE9c n\u0103ng; thanh n\xE0y hi\u1EC7n khi chu\u1EA9n b\u1ECB v\xE0 sau ca.", "#nav"],
        [icon("menu", 24), "<b>C\xE0i \u0111\u1EB7t</b>: n\xFAt ba g\u1EA1ch \u1EDF g\xF3c tr\xE1i khi chu\u1EA9n b\u1ECB. Trong ca b\xE1n, v\u1ECB tr\xED n\xE0y \u0111\u1ED5i th\xE0nh n\xFAt <b>T\u1EA1m d\u1EEBng</b>.", '#hud [data-act="settings"], #hud [data-act="pause"]'],
        [icon("book", 24), "<b>H\u01B0\u1EDBng d\u1EABn</b>: n\xFAt s\xE1ch \u1EDF b\xEAn ph\u1EA3i khi chu\u1EA9n b\u1ECB. Trong ca b\xE1n, n\xFAt n\xE0y \u0111\u1ED5i th\xE0nh b\xE1nh r\u0103ng \u0111\u1EC3 m\u1EDF C\xE0i \u0111\u1EB7t; v\xE0o C\xE0i \u0111\u1EB7t \u2192 H\u01B0\u1EDBng d\u1EABn \u0111\u1EC3 \u0111\u1ECDc l\u1EA1i.", '#hud [data-act="guide"]'],
        ["\u{1F326}\uFE0F", "<b>D\u1EF1 b\xE1o</b>: ch\u1EA1m nh\xE3n th\u1EDDi ti\u1EBFt, m\xF9a v\xE0 nhi\u1EC7t \u0111\u1ED9 ngay d\u01B0\u1EDBi Ng\xE0y \u0111\u1EC3 xem d\u1EF1 b\xE1o c\xE1c ng\xE0y t\u1EDBi c\xF9ng s\u1EF1 ki\u1EC7n h\xF4m nay.", "#hud .wx"],
        [icon("branch", 24), "<b>Chi nh\xE1nh</b>: n\xFAt h\xECnh ng\xF4i nh\xE0 \u1EDF b\xEAn ph\u1EA3i m\u1EDF qu\u1EA3n l\xFD chi nh\xE1nh. N\xFAt h\xECnh b\u1ED9 th\u1EBB b\xEAn c\u1EA1nh m\u1EDF <b>S\u01B0u t\u1EA7m</b>.", '#hud [data-act="branchTop"]'],
        ["\u{1F3EE}", "<b>N\xFAt d\u01B0\u1EDBi c\xF9ng</b>: c\xF3 k\u1EBF ho\u1EA1ch mua th\xEC hi\u1EC7n <b>N\u1EA5u & nh\u1EADp</b>; ch\u01B0a \u0111\u1EE7 kho th\xEC hi\u1EC7n <b>\u26A0\uFE0F Ch\u01B0a n\u1EA5u\u2026</b> v\xE0 d\u1EABn v\u1EC1 Kho; \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n th\xEC hi\u1EC7n <b>M\u1EDF c\u1EEDa ng\xE0y\u2026</b>. \u0110\xE2y l\xE0 c\xE1c tr\u1EA1ng th\xE1i theo kho v\xE0 k\u1EBF ho\u1EA1ch, kh\xF4ng ph\u1EA3i th\u1EE9 t\u1EF1 b\u1EAFt bu\u1ED9c.", "#cta"]
      ] },
      { id: "stock", ico: "\u{1F4E6}", title: "Kho & nh\u1EADp h\xE0ng", rows: [
        ["\u{1FAD6}", "<b>Kho</b> c\xF3 tab \u{1FAD6} Tr\xE0, \u{1F9CB} Topping, \u{1F964} D\u1EE5ng c\u1EE5 v\xE0 \u{1F353} H\u01B0\u01A1ng khi c\xF3 h\u01B0\u01A1ng \u0111\u01B0\u1EE3c m\u1EDF kh\xF3a. C\xE1c d\xF2ng h\xE0ng hi\u1EC3n th\u1ECB t\xEAn, t\u1ED3n kho, gi\xE1 nh\u1EADp v\xE0 h\u1EA1n d\xF9ng.", '.panel-in[data-tab="kho"]'],
        ["\u{1F522}", "<b>\xD4 s\u1ED1 0\u2013999</b> l\xE0 l\u01B0\u1EE3ng mu\u1ED1n mua th\xEAm, kh\xF4ng ph\u1EA3i t\u1ED3n kho. G\xF5 s\u1ED1 ho\u1EB7c b\u1EA5m \u2212/+ \u0111\u1EC3 thay \u0111\u1ED5i 1 \u0111\u01A1n v\u1ECB; s\u1ED1 0 b\u1ECF m\xF3n kh\u1ECFi k\u1EBF ho\u1EA1ch. D\xF2ng +N v\xE0 chi ph\xED l\xE0 ph\u1EA7n d\u1EF1 \u0111\u1ECBnh nh\u1EADp.", ".krow .stepper"],
        ["\u23F3", `<b>H\u1EA1n d\xF9ng</b>: d\xF2ng h\xE0ng ghi h\u1EA1n c\xF2n l\u1EA1i c\u1EE7a l\xF4 g\u1EA7n h\u1EBFt h\u1EA1n nh\u1EA5t; m\u1EDF <b>H\u1EA1n d\xF9ng t\u1EEBng l\xF4</b> \u0111\u1EC3 xem chi ti\u1EBFt. T\u1ED3n t\u1EEB h\xF4m tr\u01B0\u1EDBc v\xE0 ph\u1EA7n nh\u1EADp h\xF4m nay \u0111\u01B0\u1EE3c t\xE1ch ri\xEAng. H\u01B0\u01A1ng: <b>1 chai pha ${FLAVOR_BOTTLE} ly</b>; t\u1EE7 l\u1EA1nh k\xE9o d\xE0i h\u1EA1n cho l\xF4 nh\u1EADp m\u1EDBi.`, ".krow .life"],
        ["\u{1F6D2}", "<b>N\u1EA5u & nh\u1EADp</b> x\xE1c nh\u1EADn to\xE0n b\u1ED9 k\u1EBF ho\u1EA1ch, tr\u1EEB t\u1ED5ng ti\u1EC1n v\xE0 th\xEAm h\xE0ng v\xE0o kho. N\u1EBFu thi\u1EBFu ti\u1EC1n, giao d\u1ECBch kh\xF4ng th\u1EF1c hi\u1EC7n. \u0110\u1ED5i s\u1ED1 l\u01B0\u1EE3ng tr\u01B0\u1EDBc khi x\xE1c nh\u1EADn ch\u01B0a ti\xEAu ti\u1EC1n.", '#cta [data-act="plan"]'],
        ["\u2705", "<b>\u0110i\u1EC1u ki\u1EC7n m\u1EDF c\u1EEDa</b>: c\xF3 \xEDt nh\u1EA5t m\u1ED9t lo\u1EA1i tr\xE0 \u0111ang b\u1EADt trong menu, ly M ho\u1EB7c ly L, \u0111\xE1 v\xE0 \u0111\u01B0\u1EDDng. <b>Topping kh\xF4ng b\u1EAFt bu\u1ED9c</b>; mu\u1ED1n b\xE1n topping th\xEC c\u1EA7n c\xF3 h\xE0ng v\xE0 b\u1EADt trong menu.", '#cta [data-act="open"]'],
        ["\u{1FAB4}", "<b>V\u01B0\u1EDDn c\xE2y</b>: m\u1EDF \xF4 \u0111\u1EA5t, ch\u1ECDn c\xE2y, t\u01B0\u1EDBi v\xE0 thu ho\u1EA1ch khi \u0111\u1EE7 ti\u1EBFn \u0111\u1ED9. <b>Th\xFA c\u01B0ng</b>: nh\u1EADn nu\xF4i v\xE0 ch\u0103m s\xF3c b\u1EB1ng c\xE1c n\xFAt trong panel.", '.tile[data-tab="vuon"], .tile[data-tab="thucung"]']
      ] },
      { id: "brew", ico: "\u{1F9CB}", title: "B\xE1n h\xE0ng \xB7 t\u1EEB \u0111\u1ECDc \u0111\u01A1n \u0111\u1EBFn giao ly", open: true, rows: [
        [customerArt("vanPhong"), "<b>1. \u0110\u1ECDc \u0111\u01A1n</b>: ch\u1ECDn kh\xE1ch trong h\xE0ng ch\u1EDD. Khung order ghi y\xEAu c\u1EA7u c\u1EE1 ly, tr\xE0, h\u01B0\u01A1ng v\xE0 topping. V\xF2ng avatar v\xE0 thanh KI\xCAN NH\u1EAAN gi\u1EA3m khi ch\u1EDD; c\u1EA1n th\xEC kh\xE1ch b\u1ECF \u0111i. N\u1ED9i dung d\xE0i c\xF3 th\u1EC3 cu\u1ED9n \u0111\u1ECDc.", "#qrow, #cbub"],
        ["\u2716", "<b>T\u1EEB ch\u1ED1i</b>: n\xFAt \u0111\u1ECF trong khung order b\u1ECF \u0111\u01A1n c\u1EE7a kh\xE1ch \u0111ang ch\u1ECDn. \u0110\xE2y l\xE0 t\u1EEB ch\u1ED1i ph\u1EE5c v\u1EE5, kh\xF4ng ph\u1EA3i n\xFAt s\u1EEDa ho\u1EB7c \u0111\xF3ng khung order.", '#cbub [data-act="reject"]'],
        [stackArt("M"), "<b>2. L\u1EA5y ly</b>: ch\u1EA1m ch\u1ED3ng M ho\u1EB7c L \u1EDF QU\u1EA6Y TR\xC0 \u0111\xFAng y\xEAu c\u1EA7u. Tr\u1EEB m\u1ED9t ly kh\u1ECFi kho v\xE0 \u0111\u1EB7t l\xEAn b\xE0n PHA LY; ch\u1EC9 c\xF3 m\u1ED9t ly tr\xEAn b\xE0n t\u1EA1i m\u1ED9t th\u1EDDi \u0111i\u1EC3m.", ".stacks"],
        [teaArt("traSua"), "<b>3. Ch\u1ECDn tr\xE0 v\xE0 r\xF3t</b>: ch\u1EA1m b\xECnh \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u, ch\u1EA1m l\u1EA1i khi \u0111ang r\xF3t \u0111\u1EC3 d\u1EEBng. Ly \u0111i d\u01B0\u1EDBi v\xF2i; d\xF2ng tr\xE0 v\xE0 m\u1EE9c n\u01B0\u1EDBc t\u0103ng theo thao t\xE1c. Canh thanh r\xF3t t\u1EDBi v\xF9ng v\xE0ng, tr\xE1nh thi\u1EBFu ho\u1EB7c tr\xE0n.", "#disps, #stream, #pourbar"],
        ["\u{1F353}", "<b>4. Th\xEAm h\u01B0\u01A1ng</b>: n\u1EBFu \u0111\u01A1n c\xF3 y\xEAu c\u1EA7u, ch\u1EA1m n\xFAt h\u01B0\u01A1ng trong h\xE0ng H\u01AF\u01A0NG <b>d\u01B0\u1EDBi khu PHA LY, ph\xEDa tr\xEAn c\xE1c khay topping</b>. M\u1ED7i ly ch\u1ECDn m\u1ED9t h\u01B0\u01A1ng v\xE0 ti\xEAu hao m\u1ED9t ph\u1EA7n nguy\xEAn li\u1EC7u.", "#flavs"],
        [toppingArt("tcDen"), "<b>5. Th\xEAm topping</b>: ch\u1EA1m khay \u0111\xFAng m\xF3n; h\u1EA1t bay v\xE0o ly v\xE0 kho gi\u1EA3m m\u1ED9t ph\u1EA7n. Kh\xF4ng th\xEAm tr\xF9ng m\u1ED9t lo\u1EA1i, t\u1ED1i \u0111a <b>4 lo\u1EA1i topping</b> m\u1ED7i ly. M\xF3n kh\xF3a ho\u1EB7c t\u1EAFt menu kh\xF4ng d\xF9ng \u0111\u01B0\u1EE3c.", "#trays"],
        [sealerArt(), "<b>6. \u0110\xF3ng n\u1EAFp</b>: m\u1ED7i ly d\xF9ng m\u1ED9t ph\u1EA7n \u0111\xE1 v\xE0 m\u1ED9t ph\u1EA7n \u0111\u01B0\u1EDDng. C\xF3 th\u1EC3 ch\u1EA1m n\xFAt \u0110\xE1/\u0110\u01B0\u1EDDng d\u01B0\u1EDBi PHA LY; khi \u0111\xF3ng n\u1EAFp t\u1EF1 th\xEAm ph\u1EA7n c\xF2n thi\u1EBFu, kh\xF4ng tr\u1EEB l\u1EA1i ph\u1EA7n \u0111\xE3 th\xEAm. Thi\u1EBFu kho th\xEC ch\u01B0a \u0111\xF3ng \u0111\u01B0\u1EE3c. Khi \u0111\xE3 c\xF3 tr\xE0, ch\u1EA1m m\xE1y \u0111\u1EC3 \xE9p n\u1EAFp; ch\u1EDD ho\xE0n t\u1EA5t.", "#sealer"],
        [cup(), "<b>7. Giao kh\xE1ch</b>: ly ho\xE0n th\xE0nh c\xF3 n\u1EAFp v\xE0 \u1ED1ng h\xFAt; <b>ch\u1EA1m ly</b> tr\xEAn PHA LY \u0111\u1EC3 giao kh\xE1ch \u0111ang ch\u1ECDn. Ly bay t\u1EDBi kh\xE1ch, ti\u1EC1n v\xE0 \u0111\xE1nh gi\xE1 c\u1EADp nh\u1EADt theo k\u1EBFt qu\u1EA3. Ly sai c\xF3 th\u1EC3 b\u1ECB t\u1EEB ch\u1ED1i ho\u1EB7c mua gi\xE1 th\u1EA5p.", '#cupslot[data-act="boardTap"]'],
        ["\u{1F5D1}\uFE0F", "<b>Pha sai</b>: ch\u1EA1m th\xF9ng r\xE1c \u0111\u1EC3 b\u1ECF ly r\u1ED3i l\u1EA5y ly m\u1EDBi. Nguy\xEAn li\u1EC7u \u0111\xE3 d\xF9ng kh\xF4ng \u0111\u01B0\u1EE3c ho\xE0n l\u1EA1i; thao t\xE1c \u0111\u01B0\u1EE3c ghi v\xE0o hao ph\xED.", '[data-act="trash"]'],
        ["\u{1F4F1}", "<b>Online</b>: s\u1ED1 tr\xEAn \u0111i\u1EC7n tho\u1EA1i l\xE0 s\u1ED1 \u0111\u01A1n ch\u1EDD. Ch\u1EA1m \u0111\u1EC3 xem v\xE0 nh\u1EADn \u0111\u01A1n. Kh\u1EA3 n\u0103ng nh\u1EADn \u0111\u01A1n ph\u1EE5 thu\u1ED9c m\u1EDF kh\xF3a \u1EE9ng d\u1EE5ng, \u0111\xE1nh gi\xE1 v\xE0 \u0111\u1ECBa \u0111i\u1EC3m; nh\xE2n vi\xEAn online ch\u1EC9 x\u1EED l\xFD \u0111\u01A1n online.", '[data-act="phone"]'],
        ["\u2B50", "<b>Ch\u1EA5m sao</b>: sai tr\xE0 \u22123, sai size \u22122, sai/thi\u1EBFu/th\u1EEBa h\u01B0\u01A1ng \u22121; thi\u1EBFu ho\u1EB7c th\u1EEBa topping tr\u1EEB t\u1ED1i \u0111a 2. R\xF3t d\u01B0\u1EDBi 75%, c\xF3 tr\xE0 tr\xE0n ho\u1EB7c ki\xEAn nh\u1EABn c\xF2n d\u01B0\u1EDBi 20%: m\u1ED7i l\u1ED7i \u22121. Kh\xE1ch kh\xF3 t\xEDnh c\xF3 th\u1EC3 tr\u1EEB th\xEAm; k\u1EBFt qu\u1EA3 gi\u1EDBi h\u1EA1n 1\u20135 sao.", "#patBar, #pbFill"],
        [icon("pause", 24), "<b>T\u1EA1m d\u1EEBng</b>: n\xFAt hai v\u1EA1ch \u1EDF g\xF3c tr\xE1i t\u1EA1m d\u1EEBng ca. Ch\u01A1i ti\u1EBFp \u0111\u1EC3 quay l\u1EA1i, ho\u1EB7c ch\u1ECDn \u0110\xF3ng c\u1EEDa h\xF4m nay \u0111\u1EC3 k\u1EBFt th\xFAc s\u1EDBm; kh\xE1ch \u0111ang ch\u1EDD s\u1EBD ra v\u1EC1.", '#hud [data-act="pause"]']
      ] },
      { id: "lobby", ico: "\u{1F3EE}", title: "S\u1EA3nh & t\u1ED5ng k\u1EBFt", rows: [
        ["\u{1FA91}", "<b>Ra s\u1EA3nh \u2192</b>: n\xFAt cu\u1ED1i qu\u1EA7y chuy\u1EC3n sang s\u1EA3nh, k\xE8m s\u1ED1 b\xE0n \u0111ang c\xF3 kh\xE1ch/t\u1ED5ng s\u1ED1 b\xE0n. Ch\u1ECDn quay l\u1EA1i qu\u1EA7y \u0111\u1EC3 ti\u1EBFp t\u1EE5c pha.", "#lobbyGo"],
        ["\u{1F9F9}", "<b>D\u1ECDn b\xE0n</b>: b\xE0n b\u1EA9n c\u1EA7n d\u1ECDn \u0111\u1EC3 ti\u1EBFp kh\xE1ch m\u1EDBi. S\u1ED1 b\xE0n ph\u1EE5 thu\u1ED9c trang b\u1ECB s\u1EA3nh; kh\xE1ch d\xF9ng t\u1EA1i qu\xE1n c\xF3 th\u1EC3 boa th\xEAm.", '.tile[data-tab="sanh"]'],
        ["\u{1F4CA}", "<b>Cu\u1ED1i ca</b>: xem T\u1ED5ng k\u1EBFt ng\xE0y \u0111\u1EC3 bi\u1EBFt doanh thu, boa, kh\xE1ch v\xE0 chi ph\xED. Trong nh\xF3m Ti\u1EC7m, T\u1ED5ng k\u1EBFt xem l\u1ECBch s\u1EED; \u0110\xE1nh gi\xE1 xem c\xE1c nh\u1EADn x\xE9t \u0111\xE3 ghi nh\u1EADn.", '.tile[data-tab="tongket"], .tile[data-tab="danhgia"]']
      ] },
      { id: "development", ico: "\u{1F4C8}", title: "Ph\xE1t tri\u1EC3n", rows: [
        ["\u{1F6E0}\uFE0F", "<b>N\xE2ng c\u1EA5p</b>: m\u1EDF kh\xF3a nguy\xEAn li\u1EC7u, n\xE2ng trang b\u1ECB v\xE0 decor. M\u1ED7i m\u1EE5c ghi gi\xE1, c\u1EA5p hi\u1EC7n t\u1EA1i v\xE0 t\xE1c d\u1EE5ng; \u0111\u1EA1t c\u1EA5p t\u1ED1i \u0111a th\xEC kh\xF4ng th\u1EC3 mua th\xEAm.", '.tile[data-tab="nangcap"]'],
        ["\u{1F50C}", "<b>Trang b\u1ECB tr\xEAn qu\u1EA7y</b>: k\xE9o h\xE0ng icon d\u01B0\u1EDBi \u0110\xE1/\u0110\u01B0\u1EDDng v\xE0 ch\u1EA1m \u0111\u1EC3 xem t\xE1c d\u1EE5ng c\u1EA5p hi\u1EC7n t\u1EA1i. Khi m\u1EA5t \u0111i\u1EC7n, x\xE1c nh\u1EADn b\u1EADt m\xE1y ph\xE1t: C1 ch\u1EA1y \u0111\xE8n v\xE0 m\xE1y \u0111\xF3ng n\u1EAFp; C2 ch\u1EA1y c\u1EA3 b\xECnh tr\xE0. Khi \u0111o\xE0n ki\u1EC3m tra \u0111\u1EBFn, x\xE1c nh\u1EADn xu\u1EA5t tr\xECnh gi\u1EA5y ph\xE9p ho\u1EB7c ki\u1EC3m tra v\u1EC7 sinh.", ".equip-strip"],
        [staffArt("thuViec"), "<b>Nh\xE2n s\u1EF1 h\u1ED7 tr\u1EE3</b>: L\xE2m Ph\u01B0\u1EDBc r\xF3t tr\xE0, th\xEAm h\u01B0\u01A1ng/\u0111\u01B0\u1EDDng/\u0111\xE1; b\u1EA1n l\u1EA5y ly, th\xEAm topping v\xE0 \u0111\xF3ng n\u1EAFp. \u0110inh Nh\xE2n th\xEAm c\u1EA3 topping; b\u1EA1n l\u1EA5y ly v\xE0 \u0111\xF3ng n\u1EAFp. H\xE3y \u0111\u1EE3i nh\xE2n vi\xEAn pha xong r\u1ED3i thao t\xE1c.", '.tile[data-tab="nhansu"]'],
        [staffArt("online"), "<b>Nh\xE2n s\u1EF1 t\u1EF1 ph\u1EE5c v\u1EE5</b>: nh\xE2n vi\xEAn pha ch\u1EBF, Gen Z v\xE0 ca \u0111\xEAm x\u1EED l\xFD tr\u1ECDn \u0111\u01A1n theo \u0111i\u1EC1u ki\u1EC7n ri\xEAng; nh\xE2n vi\xEAn online ch\u1EC9 l\xE0m \u0111\u01A1n online. \u0110i\u1EC1u ki\u1EC7n thu\xEA, l\u01B0\u01A1ng v\xE0 c\xE1c gi\u1EDBi h\u1EA1n \u0111\u01B0\u1EE3c ghi t\u1EA1i t\u1EEBng th\u1EBB.", '.panel-in[data-tab="nhansu"]'],
        ["\u{1F3E2}", "<b>Chi nh\xE1nh</b>: thu\xEA m\u1EDF chi nh\xE1nh, \u0111i\u1EC1u ch\u1EC9nh nh\xE2n vi\xEAn v\xE0 xem b\xE1o c\xE1o. Nh\u01B0\u1EE3ng quy\u1EC1n c\xF3 \u0111i\u1EC1u ki\u1EC7n \u0111\xE1nh gi\xE1/followers ri\xEAng. Thu nh\u1EADp v\xE0 chi ph\xED chu\u1ED7i c\u1EADp nh\u1EADt theo ng\xE0y.", '.tile[data-tab="chinhanh"]'],
        ["\u{1F5FA}\uFE0F", "<b>Kh\u1EDFi nghi\u1EC7p</b>: \u0111\u1ED5i \u0111\u1ECBa \u0111i\u1EC3m khi ch\u01B0a trong ca b\xE1n. M\u1ED7i n\u01A1i c\xF3 gi\xE1 m\u1EDF, l\u01B0\u1EE3ng kh\xE1ch, chi ph\xED v\xE0 t\xE1c \u0111\u1ED9ng kh\xE1c nhau; xem m\xF4 t\u1EA3 tr\u01B0\u1EDBc khi x\xE1c nh\u1EADn.", '.tile[data-tab="khoinghiep"]'],
        ["\u{1F4B5}", "<b>Gi\xE1 b\xE1n</b> \u1EDF nh\xF3m Ti\u1EC7m: ch\u1EC9nh tr\xE0, h\u01B0\u01A1ng, topping v\xE0 ph\u1EE5 thu L. Gi\xE1 cao c\xF3 th\u1EC3 gi\u1EA3m l\u01B0\u1EE3ng kh\xE1ch; ng\u01B0\u1EE1ng v\xE0 gi\u1EDBi h\u1EA1n ph\u1EE5 thu\u1ED9c lo\u1EA1i m\xF3n v\xE0 nh\xE2n vi\xEAn h\u1ED7 tr\u1EE3 gi\xE1.", '.tile[data-tab="giaban"]']
      ] },
      { id: "social", ico: "\u{1F465}", title: "X\xE3 h\u1ED9i & Th\xEAm", rows: [
        ["\u{1F4F1}", "<b>M\u1EA1ng X\xE3 H\u1ED9i</b>: ch\u1EA1y t\u1ED1i \u0111a m\u1ED9t chi\u1EBFn d\u1ECBch qu\u1EA3ng c\xE1o; quay video theo s\u1ED1 l\u01B0\u1EE3t chi\u1EBFn d\u1ECBch cho ph\xE9p. Theo d\xF5i followers, b\xE0i \u0111\u0103ng v\xE0 th\u01B0\u1EDFng l\u01B0\u1EE3ng kh\xE1ch trong panel.", '.tile[data-tab="mxh"]'],
        ["\u{1F465}", "<b>B\u1EA1n b\xE8</b>: nh\u1EADp m\xE3 m\u1EDDi, th\u0103m qu\xE1n nh\u1EADn qu\xE0 m\u1ED9t l\u1EA7n/ng\xE0y cho m\u1ED7i b\u1EA1n v\xE0 xem b\u1EA3ng t\xE0i s\u1EA3n. Danh s\xE1ch, t\xEAn v\xE0 s\u1ED1 li\u1EC7u b\u1EA1n b\xE8 hi\u1EC7n \u0111\u01B0\u1EE3c l\u01B0u/m\xF4 ph\u1ECFng trong game, ch\u01B0a \u0111\u1ED3ng b\u1ED9 t\xE0i kho\u1EA3n tr\u1EF1c tuy\u1EBFn.", '.tile[data-tab="banbe"]'],
        ["\u{1F4DC}", `<b>Thu\u1EBF & Bank</b> trong Th\xEAm: \u0111\xF3ng thu\u1EBF \u0111\u1EC3 k\xEDch ho\u1EA1t th\u01B0\u1EDFng ${TAX.hours} gi\u1EDD, g\u1EEDi ti\u1EBFt ki\u1EC7m v\xE0 r\xFAt ti\u1EC1n. R\xFAt s\u1EDBm ch\u1EC9 nh\u1EADn g\u1ED1c; \u0111\u1EE7 ${BANK.lockShifts} ca b\xE1n theo ti\u1EBFn \u0111\u1ED9 k\u1EF3 h\u1EA1n m\u1EDBi \u0111\u01B0\u1EE3c nh\u1EADn c\u1EA3 l\xE3i.`, '.tile[data-tab="thue"]'],
        [icon("collect", 24), "<b>S\u01B0u t\u1EA7m</b> trong Th\xEAm ho\u1EB7c n\xFAt b\u1ED9 th\u1EBB tr\xEAn thanh \u0111\u1EA7u m\xE0n h\xECnh: xem b\u1ED9 s\u01B0u t\u1EADp v\xE0 th\u1EF1c hi\u1EC7n c\xE1c thao t\xE1c \u0111ang \u0111\u01B0\u1EE3c m\u1EDF trong panel.", '.tile[data-tab="suutam"], #hud [data-act="collectTop"]']
      ] },
      { id: "games", ico: "\u{1F36C}", title: "Th\xEAm \xB7 Tr\xF2 ch\u01A1i", rows: [
        ["\u{1F36C}", "<b>Milk Tea Crush</b>: v\xE0o Th\xEAm \u2192 Milk Tea Crush, \u0111\u1ED5i ch\u1ED7 hai \xF4 k\u1EC1 nhau \u0111\u1EC3 gh\xE9p \xEDt nh\u1EA5t 3 icon. Ho\xE0n th\xE0nh m\u1EE5c ti\xEAu trong s\u1ED1 l\u01B0\u1EE3t cho ph\xE9p; gh\xE9p \u0111\u1EB7c bi\u1EC7t t\u1EA1o h\xE0ng/c\u1ED9t, c\xE1, bom ho\u1EB7c c\u1EA7u v\u1ED3ng. Qua m\xE0n c\u1ED9ng 1% doanh thu v\u0129nh vi\u1EC5n, t\u1ED1i \u0111a 50%.", '.panel-in [data-act="crush"]'],
        [toppingArt("tcNo"), "<b>Tr\xE2n Ch\xE2u N\u1ED5</b>: c\xF9ng panel tr\xF2 ch\u01A1i, ch\u1EA1m nh\xF3m t\u1EEB 2 vi\xEAn c\xF9ng m\xE0u k\u1EC1 nhau. M\u1EE5c ti\xEAu 120 \u0111i\u1EC3m trong 30 gi\xE2y; n\u1ED5 ti\u1EBFp trong 1,2 gi\xE2y t\u0103ng combo. \u0110i\u1EC3m = s\u1ED1 vi\xEAn\xB2 \xD7 combo; th\u01B0\u1EDFng ti\u1EC1n v\xE0 nguy\xEAn li\u1EC7u theo k\u1EBFt qu\u1EA3.", '.panel-in [data-act="pearl"]'],
        ["\u23F1\uFE0F", "<b>L\u01B0\u1EE3t Tr\xE2n Ch\xE2u N\u1ED5</b>: t\u1ED1i \u0111a 3 l\u01B0\u1EE3t/ng\xE0y, t\xEDnh khi b\u1EA5m B\u1EAFt \u0111\u1EA7u. M\u1EDF m\xE0n gi\u1EDBi thi\u1EC7u ch\u01B0a ti\xEAu l\u01B0\u1EE3t. Xem \u0111i\u1EC3m, k\u1EF7 l\u1EE5c, combo v\xE0 ti\u1EBFn \u0111\u1ED9 m\u1EE5c ti\xEAu ngay trong v\xE1n.", '#pBody [data-act="start"]']
      ] },
      { id: "settings", ico: icon("settings", 24), title: "C\xE0i \u0111\u1EB7t & l\u01B0u ti\u1EBFn tr\xECnh", rows: [
        ["\u{1F3A8}", "<b>M\xE0u giao di\u1EC7n v\xE0 rung</b>: ch\u1ECDn trong C\xE0i \u0111\u1EB7t. Rung ph\u1EE5 thu\u1ED9c thi\u1EBFt b\u1ECB v\xE0 quy\u1EC1n rung c\u1EE7a \u1EE9ng d\u1EE5ng b\u1ECDc APK.", '[data-act="theme"], [data-act="haptic"]'],
        ["\u{1F3B5}", "<b>Nh\u1EA1c v\xE0 SFX</b>: ch\u1EC9nh \xE2m l\u01B0\u1EE3ng ri\xEAng; n\xFAt loa t\u1EAFt/b\u1EADt t\u1EEBng k\xEAnh. Nh\u1EA1c n\u1EC1n & M\xF9a c\xF3 \u{1F3A7} Lofi, \u{1F389} Vui nh\u1ED9n, \u{1F338} Xu\xE2n, \u2600\uFE0F H\u1EA1, \u{1F342} Thu, \u2744\uFE0F \u0110\xF4ng ho\u1EB7c T\u1EAFt nh\u1EA1c.", '[data-act="style"]'],
        ["\u{1F9ED}", "<b>Ch\u1EC9 d\u1EABn t\u1EEBng b\u01B0\u1EDBc</b> b\u1EADt/t\u1EAFt d\xF2ng nh\u1EAFc thao t\xE1c tr\xEAn qu\u1EA7y. H\u01B0\u1EDBng d\u1EABn l\u1EA7n \u0111\u1EA7u l\xE0m s\xE1ng t\u1EEBng v\xF9ng l\xE0 ph\u1EA7n ri\xEAng, g\u1ED3m 15 b\u01B0\u1EDBc chu\u1EA9n b\u1ECB v\xE0 c\xE1c b\u01B0\u1EDBc trong ca b\xE1n.", '[data-act="hints"], #coach'],
        ["\u23F1\uFE0F", "<b>Th\u1EDDi gian b\xE1n m\u1ED7i ng\xE0y</b>: ch\u1ECDn th\u1EDDi l\u01B0\u1EE3ng ca trong C\xE0i \u0111\u1EB7t; thay \u0111\u1ED5i \xE1p d\u1EE5ng khi m\u1EDF ca ti\u1EBFp theo.", '[data-act="shiftMin"]'],
        ["\u{1F4BE}", "<b>L\u01B0u ti\u1EBFn tr\xECnh</b>: game t\u1EF1 l\u01B0u tr\xEAn thi\u1EBFt b\u1ECB. D\xF9ng xu\u1EA5t/nh\u1EADp m\xE3 sao l\u01B0u ho\u1EB7c kh\xF4i ph\u1EE5c trong C\xE0i \u0111\u1EB7t \u0111\u1EC3 gi\u1EEF ti\u1EBFn tr\xECnh khi \u0111\u1ED5i tr\xECnh duy\u1EC7t hay c\xE0i l\u1EA1i \u1EE9ng d\u1EE5ng.", '[data-act="export"], [data-act="import"]']
      ] }
    ];
  }
  function guideHTML() {
    return guideSections().map((s) => `<details class="g-det" data-guide-section="${s.id}"${s.open ? " open" : ""}><summary>${s.ico} ${esc(s.title)}</summary><ul class="g-list">${s.rows.map(([ico, body, target]) => `<li data-guide-target="${esc(target)}"><span class="g-art" aria-hidden="true">${ico}</span><div>${body}</div></li>`).join("")}</ul></details>`).join("");
  }

  // js/ui.js
  function bindActions(root2, map) {
    root2.addEventListener("click", (e) => {
      const t = e.target.closest("[data-act]");
      if (!t || !root2.contains(t) || t.disabled) return;
      const fn = map[t.dataset.act];
      if (fn) {
        sfx("click");
        fn(t, e);
      }
    });
  }
  function toast(msg, type = "", dur = 2300) {
    if (S.phase === "sell" && !isModalOpen() && type !== "err") return;
    const root2 = $("#toasts");
    if (!root2) return;
    for (const el of root2.children) {
      if (el.dataset.msg === msg && !el.classList.contains("out")) {
        clearTimeout(el._tm);
        el.classList.remove("bump");
        void el.offsetWidth;
        el.classList.add("bump");
        el._tm = setTimeout(() => {
          el.classList.add("out");
          setTimeout(() => el.remove(), 260);
        }, dur);
        return;
      }
    }
    const t = h(`<div class="toast ${type}">${esc(msg)}</div>`);
    t.dataset.msg = msg;
    root2.appendChild(t);
    while (root2.children.length > 3) root2.firstElementChild.remove();
    t._tm = setTimeout(() => {
      t.classList.add("out");
      setTimeout(() => t.remove(), 260);
    }, dur);
  }
  var centerOf = (t) => {
    if (!t) return { x: innerWidth / 2, y: innerHeight / 2 };
    if (typeof t.x === "number") return t;
    const r = t.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };
  function fxText(text, target, cls = "") {
    if (S.phase === "sell") return;
    const { x, y } = centerOf(target);
    const f = h(`<div class="fx-float ${cls}" style="left:${x}px;top:${y}px">${esc(text)}</div>`);
    $("#fx").appendChild(f);
    setTimeout(() => f.remove(), 1e3);
  }
  function fxSpark(target, n = 8) {
    if (S.phase === "sell" && isModalOpen()) return;
    const { x, y } = centerOf(target);
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2, d = rand(24, 56);
      const s = h(`<div class="fx-spark" style="left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px">\u2728</div>`);
      $("#fx").appendChild(s);
      setTimeout(() => s.remove(), 760);
    }
  }
  var stack = [];
  function openModal({ html: body, cls = "", title = "", onClose = null, closable = true, id = "" }) {
    var _a;
    if (id) {
      const ex = stack.find((m2) => m2.id === id);
      if (ex) {
        ex.body.innerHTML = body;
        return ex;
      }
    }
    emit("modal:open");
    const back = h(`<div class="modal-back"><div class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    ${closable ? '<button class="modal-x" data-modal-x aria-label="\u0110\xF3ng">\u2715</button>' : ""}<div class="modal-body"></div></div></div>`);
    const bodyEl = $(".modal-body", back);
    bodyEl.innerHTML = body;
    $("#modal").appendChild(back);
    const m = { id, el: back, body: bodyEl, close };
    function close() {
      const i = stack.indexOf(m);
      if (i < 0) return;
      stack.splice(i, 1);
      back.remove();
      if (!stack.length) {
        $("#modal").classList.remove("on");
        $("#app").classList.remove("modal-open");
      }
      onClose == null ? void 0 : onClose();
    }
    const sheet = $(".modal", back);
    let dragY = null;
    sheet.addEventListener("touchstart", (e) => {
      const r = sheet.getBoundingClientRect();
      dragY = e.touches[0].clientY - r.top < 34 ? e.touches[0].clientY : null;
    }, { passive: true });
    sheet.addEventListener("touchmove", (e) => {
      if (dragY == null) return;
      const dy = Math.max(0, e.touches[0].clientY - dragY);
      sheet.style.transform = `translateY(${dy}px)`;
    }, { passive: true });
    sheet.addEventListener("touchend", (e) => {
      if (dragY == null) return;
      const dy = e.changedTouches[0].clientY - dragY;
      dragY = null;
      if (dy > 90 && closable) close();
      else sheet.style.transform = "";
    });
    (_a = $("[data-modal-x]", back)) == null ? void 0 : _a.addEventListener("click", () => {
      sfx("click");
      close();
    });
    back.addEventListener("click", (e) => {
      if (e.target === back && closable) close();
    });
    stack.push(m);
    $("#modal").classList.add("on");
    $("#app").classList.add("modal-open");
    return m;
  }
  var closeAllModals = () => {
    while (stack.length) stack[stack.length - 1].close();
  };
  var isModalOpen = (id) => id ? stack.some((m) => m.id === id) : stack.length > 0;
  function confirmBox(title, msg, onYes, yes = "\u0110\u1ED3ng \xFD", danger = false) {
    const m = openModal({ html: `<h3 class="m-title">${esc(title)}</h3><p class="m-text">${msg}</p>
    <div class="m-row"><button class="btn ghost" data-act="no">H\u1EE7y</button><button class="btn ${danger ? "danger" : "pri"}" data-act="yes">${esc(yes)}</button></div>`, cls: "small" });
    bindActions(m.body, { no: () => m.close(), yes: () => {
      m.close();
      onYes();
    } });
    return m;
  }
  function alertBox(title, body, btn = "\u0110\xE3 hi\u1EC3u") {
    const m = openModal({ html: `<h3 class="m-title">${title}</h3><div class="m-text">${body}</div><button class="btn pri block" data-act="ok">${esc(btn)}</button>`, cls: "small" });
    bindActions(m.body, { ok: () => m.close() });
    return m;
  }
  function logoHTML(size = 56, cls = "") {
    const l = S.logo;
    const inner = l.img ? `<img src="${l.img}" alt="Logo qu\xE1n" />` : `<span>${l.emoji}</span>`;
    return `<span class="logo-c ${cls}" style="--sz:${size}px">${inner}</span>`;
  }
  var HAPTIC_NAMES = ["T\u1EAFt", "Nh\u1EB9", "V\u1EEBa", "M\u1EA1nh"];
  var THEME_DARK = { "--text": "#f1ebff", "--muted": "#b8aedc", "--brown": "#e8dfff", "--brown2": "#b8aedc", "--card2": "#453d66", "--line": "rgba(255,255,255,.14)" };
  function applyTheme() {
    var _a;
    const k = THEMES[S.settings.theme] ? S.settings.theme : "cream";
    const t = THEMES[k], st = document.documentElement.style;
    document.documentElement.dataset.theme = k;
    document.documentElement.dataset.season = S.season || "spring";
    st.setProperty("--bg", t.bg);
    st.setProperty("--paper", t.bg);
    st.setProperty("--card", t.card);
    st.setProperty("--pink", t.accent);
    st.setProperty("--pink2", t.accent2);
    st.setProperty("--pink-soft", t.soft);
    for (const [n, v] of Object.entries(THEME_DARK)) {
      if (t.dark) st.setProperty(n, v);
      else st.removeProperty(n);
    }
    (_a = document.querySelector('meta[name="theme-color"]')) == null ? void 0 : _a.setAttribute("content", t.bg);
  }
  function openChoice(title, opts, cur2, onPick) {
    const m = openModal({ cls: "small", html: `<h3 class="m-title">${title}</h3><div class="choice-list">${opts.map(([v, label], i) => `<button class="choice ${v === cur2 ? "on" : ""}" data-act="pick" data-i="${i}"><span>${label}</span><i>${v === cur2 ? "\u2713" : ""}</i></button>`).join("")}</div><button class="btn block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, { pick: (t) => {
      onPick(opts[+t.dataset.i][0]);
      m.close();
    }, x: () => m.close() });
  }
  function openThemePicker(onDone) {
    const sw = (id, t) => `<button class="thm-it ${S.settings.theme === id ? "on" : ""}" data-act="pick" data-k="${id}"><i style="background:linear-gradient(135deg, ${t.bg} 50%, ${t.accent} 50%)"></i><b>${t.name}</b></button>`;
    const m = openModal({ cls: "small", html: `<h3 class="m-title">M\xE0u giao di\u1EC7n</h3><p class="m-text center">Ch\u1ECDn m\xE0u b\u1EA1n th\xEDch, \u0111\u1ED5i l\xFAc n\xE0o c\u0169ng \u0111\u01B0\u1EE3c.</p>
    <div class="thm-grid">${Object.entries(THEMES).map(([id, t]) => sw(id, t)).join("")}</div><button class="btn pri block" data-act="done">Xong</button>` });
    bindActions(m.body, {
      pick: (t) => {
        S.settings.theme = t.dataset.k;
        applyTheme();
        requestSave();
        for (const el of $$(".thm-it", m.body)) el.classList.toggle("on", el === t);
      },
      done: () => {
        m.close();
        onDone == null ? void 0 : onDone();
      }
    });
  }
  function renderHud() {
    const el = $("#hud");
    if (!el) return;
    const w = weatherOf();
    const se = SEASONS[S.season];
    const sell = S.phase === "sell";
    const sub = sell ? '\u23F0 <span id="clock">' + fmtClock(SH.hour) + "</span>" : S.phase === "end" ? "H\u1EBFt ng\xE0y" : "Chu\u1EA9n b\u1ECB";
    const full = S.rating;
    const stars = Array.from({ length: 5 }, (_, i) => `<i class="${i + 1 <= Math.round(full) ? "on" : ""}">\u2605</i>`).join("");
    el.innerHTML = `
    <div class="hud-l">
      <button class="hbtn ${sell ? "pause" : ""}" data-act="${sell ? "pause" : "settings"}" aria-label="${sell ? "T\u1EA1m d\u1EEBng" : "C\xE0i \u0111\u1EB7t"}">${icon(sell ? "pause" : "menu", 18)}</button>
    </div>
    <div class="hud-day"><b>Ng\xE0y ${S.day}</b><span class="hud-sub">${sub}</span>
      <button class="wx" data-act="forecast" aria-label="D\u1EF1 b\xE1o th\u1EDDi ti\u1EBFt">${w.icon} ${se.name} \xB7 ${S.temp}\xB0C</button></div>
    <div class="hud-r">
      <div class="hud-money"><small>${esc(S.shopName)}</small><b data-money>${fmtK(S.money)}</b></div>
      <div class="hud-r-btns"><button class="hbtn sm" data-act="${sell ? "settings" : "guide"}" aria-label="${sell ? "C\xE0i \u0111\u1EB7t" : "H\u01B0\u1EDBng d\u1EABn"}">${icon(sell ? "settings" : "book", 16)}</button><button class="hbtn sm" data-act="branchTop" aria-label="Chi nh\xE1nh">${icon("branch", 16)}</button><button class="hbtn sm" data-act="collectTop" aria-label="S\u01B0u t\u1EA7m">${icon("collect", 16)}</button></div>
      <div class="hud-rate"><span class="stars">${stars}</span><small>${S.rating.toFixed(1).replace(".", ",")} \xB7 ${S.ratingCount} \u0110G</small></div>
    </div>`;
  }
  function updateClock() {
    const c = $("#clock");
    if (c && SH.on) c.textContent = fmtClock(SH.hour);
  }
  var hudActs = {};
  function setHudActions(a) {
    hudActs = a;
  }
  function initHud() {
    bindActions($("#hud"), new Proxy({}, { get: (_, k) => hudActs[k] }));
  }
  function aggregate(entries) {
    const a = { rev: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, fine: 0, branch: 0, fran: 0, interest: 0, profit: 0, cups: 0, left: 0, online: 0, stars: [], days: entries.length };
    for (const e of entries) {
      for (const k of ["rev", "cogs", "rent", "util", "wage", "tax", "fine", "branch", "fran", "interest", "profit", "cups", "left", "online"]) a[k] += e[k] || 0;
      if (e.stars) a.stars.push(e.stars);
    }
    a.avgStars = a.stars.length ? sum(a.stars) / a.stars.length : 0;
    return a;
  }
  var pct = (x, t) => t > 0 ? x / t * 100 : 0;
  function plHTML(a, label) {
    const loss = a.profit < 0;
    const cost = a.cogs + a.rent + a.util + a.wage + a.tax + (a.fine || 0);
    const base = Math.max(a.rev, cost, 1);
    const cg = pct(a.cogs, base), pe = pct(a.wage, base), ma = pct(a.rent + a.util, base);
    const lossPct = loss ? Math.max(0, 100 - cg - pe - ma) : 0;
    const cogsPct = pct(a.cogs, a.rev), wagePct = pct(a.wage, a.rev);
    const unit = a.cups > 0 ? (a.rev - a.cogs) / a.cups : 0;
    const fixed = (a.rent + a.util + a.wage) / Math.max(1, a.days);
    const be = unit > 0 ? Math.ceil(fixed / unit) : 0;
    const soldPerDay = a.cups / Math.max(1, a.days);
    const cogsCls = a.rev > 0 && cogsPct >= 28 && cogsPct <= 32 ? "good" : "warn";
    const wageCls = a.rev > 0 && wagePct >= 15 && wagePct <= 20 ? "good" : a.wage === 0 ? "neutral" : "warn";
    const row2 = (c, n, v, p) => `<div class="pl2-r"><i style="background:${c}"></i><span>${n}</span><em>${p}</em><b>${v}</b></div>`;
    const gap = Math.max(0, be - Math.round(soldPerDay));
    return `<section class="pl2">
    <div class="pl2-hero ${loss ? "neg" : "pos"}"><small>${esc(label)} \xB7 ${loss ? "L\u1ED7" : "L\xE3i"}</small><b>${loss ? "\u2212" : "+"}${fmtK(Math.abs(a.profit))}</b><span>Doanh thu ${fmtK(a.rev)} \xB7 Chi ph\xED ${fmtK(cost)}</span></div>
    <div class="pl-bar"><i style="width:${cg}%;background:#ff8a3d"></i><i style="width:${pe}%;background:#3d9bff"></i><i style="width:${ma}%;background:#8b5cf6"></i><i style="width:${lossPct}%;background:#ef4444"></i></div>
    <div class="pl2-list">
      ${row2("#ff8a3d", "Nguy\xEAn li\u1EC7u", fmtK(a.cogs), cogsPct.toFixed(0) + "%")}
      ${row2("#3d9bff", "Nh\xE2n s\u1EF1", fmtK(a.wage), wagePct.toFixed(0) + "%")}
      ${row2("#8b5cf6", "M\u1EB7t b\u1EB1ng & \u0111i\u1EC7n n\u01B0\u1EDBc", fmtK(a.rent + a.util), pct(a.rent + a.util, a.rev).toFixed(0) + "%")}
      ${row2("#d97706", "Thu\u1EBF & ti\u1EC1n ph\u1EA1t", fmtK(a.tax + (a.fine || 0)), pct(a.tax + (a.fine || 0), a.rev).toFixed(0) + "%")}
      ${row2("#2d8a63", "Chi nh\xE1nh / nh\u01B0\u1EE3ng quy\u1EC1n / l\xE3i g\u1EEDi", fmtK(a.branch + a.fran + a.interest), "")}
    </div>
    <details class="pl2-more"><summary>Ph\xE2n t\xEDch F&B chi ti\u1EBFt</summary>
      <div class="pl-cards">
        <div class="pl-card ${cogsCls}"><small>Nguy\xEAn li\u1EC7u</small><em>Chu\u1EA9n 28\u201332%</em><b>${cogsPct.toFixed(1)}%</b><p>${cogsCls === "good" ? "\u{1F7E2} \u0110\u1EA1t chu\u1EA9n" : "\u{1F7E0} L\u1EC7ch chu\u1EA9n"}</p></div>
        <div class="pl-card ${wageCls}"><small>Nh\xE2n s\u1EF1</small><em>Chu\u1EA9n 15\u201320%</em><b>${wagePct.toFixed(1)}%</b><p>${a.wage === 0 ? "\u26AA Ch\u01B0a c\xF3" : wageCls === "good" ? "\u{1F7E2} \u0110\u1EA1t chu\u1EA9n" : "\u{1F7E0} L\u1EC7ch chu\u1EA9n"}</p></div>
        <div class="pl-card ${soldPerDay >= be ? "good" : "bad"}"><small>H\xF2a v\u1ED1n</small><em>${be} ly/ng\xE0y</em><b>${Math.round(soldPerDay)} ly</b><p>${soldPerDay >= be ? "\u{1F7E2} \u0110\xE3 v\u01B0\u1EE3t" : `\u{1F534} Thi\u1EBFu ${gap} ly`}</p></div>
      </div>
      <p class="pl2-diag">${loss ? `Chi ph\xED (${fmtK(cost)}) v\u01B0\u1EE3t doanh thu (${fmtK(a.rev)}). C\u1EA7n b\xE1n th\xEAm ${gap} ly \u0111\u1EC3 h\xF2a v\u1ED1n.` : `Qu\xE1n \u0111ang c\xF3 l\xE3i ${fmtK(a.profit)}. Gi\u1EEF nguy\xEAn li\u1EC7u 28\u201332% v\xE0 rating cao \u0111\u1EC3 t\u0103ng kh\xE1ch.`}</p>
    </details>
  </section>`;
  }
  function openDaySummary() {
    const T = S.today;
    const tomorrow = S.forecast.find((f) => f.day === S.day + 1) || rollWeatherFor(S.day + 1);
    const tw = WEATHERS[tomorrow.weather];
    const agg = aggregate([{ ...T, stars: T.avgStars }]);
    agg.profit = T.profit;
    agg.rev = T.rev + T.tips;
    const m = openModal({
      cls: "day",
      closable: false,
      id: "day",
      html: `
    <div class="day-moon">\u{1F319}<small>\u2B50</small></div>
    <h2 class="day-title">H\u1EBFt ng\xE0y ${S.day}</h2>
    <div class="day-stats"><div><b>${T.cups}</b><span>ly b\xE1n</span></div><div><b>${T.left}</b><span>kh\xE1ch b\u1ECF v\u1EC1</span></div><div><b>${T.avgStars ? T.avgStars.toFixed(1) + "\u2605" : "\u2013"}</b><span>\u0111\xE1nh gi\xE1</span></div></div>
    ${plHTML(agg, "Ng\xE0y " + S.day)}
    ${T.expired && T.expired.length ? `<div class="exp-note">\u26A0\uFE0F ${sum(T.expired, (x) => x.q)} ${T.expired.every((x) => ITEMS[x.id].kind === "top") ? "topping" : "ph\u1EA7n nguy\xEAn li\u1EC7u/topping"} \u0111\xE3 h\u1ECFng, b\u1ECB b\u1ECF \u0111i: \u2212${fmtK(T.expiredCost || 0)}<small>${T.expired.map((x) => `${ITEMS[x.id].icon} ${esc(ITEMS[x.id].name)} \xD7${x.q}`).join(" \xB7 ")}</small></div>` : ""}
    ${T.fine ? `<div class="exp-note">\u{1F4CB} Ti\u1EC1n ph\u1EA1t ki\u1EC3m tra \u0111\u1ED9t xu\u1EA5t: \u2212${fmtK(T.fine)}</div>` : ""}
    <div class="day-cash"><span>\u{1F5C4}\uFE0F S\u1ED1 d\u01B0 k\xE9t</span><b>${fmtK(S.money)}</b></div>
    <div class="tomorrow">\u{1F4C5} <b>Ng\xE0y mai:</b> ${esc(tw.tip)}</div>
    <button class="btn ghost block" data-act="sum">\u{1F4CA} T\u1ED5ng k\u1EBFt</button>
    <button class="btn pri block" data-act="next">Ng\xE0y ${S.day + 1} \u279C</button>`
    });
    bindActions(m.body, {
      sum: () => {
        m.close();
        nextDay();
        S.tab = "tongket";
        markDirty("view", "panel");
        sfx("success");
        emit("goto", "tongket");
      },
      next: () => {
        m.close();
        nextDay();
        sfx("success");
      }
    });
  }
  function sliderRow(label, key, icon2) {
    const v = Math.round(S.settings[key] * 100);
    return `<div class="vol"><div class="vol-h"><b>${icon2} ${label}</b><span class="pct" data-pct="${key}">${v}%</span></div>
    <div class="vol-r"><button class="rb" data-act="vol-" data-k="${key}">\u2212</button><input type="range" min="0" max="100" value="${v}" data-slider="${key}" aria-label="${label}"><button class="rb" data-act="vol+" data-k="${key}">\uFF0B</button><button class="rb" data-act="mute" data-k="${key}" aria-label="${v ? "T\u1EAFt" : "B\u1EADt"} ${label}" aria-pressed="${!v}">${v ? "\u{1F50A}" : "\u{1F507}"}</button></div></div>`;
  }
  function bindSliders(m) {
    const set = (k, v) => {
      S.settings[k] = Math.round(clamp(v, 0, 1) * 100) / 100;
      const sl = $(`[data-slider="${k}"]`, m.body);
      if (sl) sl.value = Math.round(S.settings[k] * 100);
      const p = $(`[data-pct="${k}"]`, m.body);
      if (p) p.textContent = Math.round(S.settings[k] * 100) + "%";
      const button = $(`[data-act="mute"][data-k="${k}"]`, m.body);
      if (button) {
        const muted = S.settings[k] === 0;
        button.textContent = muted ? "\u{1F507}" : "\u{1F50A}";
        button.setAttribute("aria-pressed", String(muted));
        button.setAttribute("aria-label", `${muted ? "B\u1EADt" : "T\u1EAFt"} ${(sl == null ? void 0 : sl.getAttribute("aria-label")) || "\xE2m thanh"}`);
      }
      applyVolumes();
      if (k === "music") restartMusic();
      requestSave();
    };
    $$("[data-slider]", m.body).forEach((s) => s.addEventListener("input", () => set(s.dataset.slider, s.value / 100)));
    return { "vol-": (t) => set(t.dataset.k, S.settings[t.dataset.k] - 0.1), "vol+": (t) => set(t.dataset.k, S.settings[t.dataset.k] + 0.1), mute: (t) => set(t.dataset.k, S.settings[t.dataset.k] > 0 ? 0 : 0.7) };
  }
  function openPause() {
    if (isModalOpen("pause")) return;
    setPaused(true);
    const left = Math.max(0, Math.round(SH.total - SH.t));
    const m = openModal({
      id: "pause",
      cls: "pause",
      closable: false,
      onClose: () => setPaused(false),
      html: `
    <div class="pause-ico">\u23F8</div><h2 class="day-title">T\u1EA1m d\u1EEBng ca b\xE1n</h2>
    <p class="m-text center">C\xF2n ${left}s \xB7 ${SH.queue.length} kh\xE1ch \u0111ang ch\u1EDD</p>
    <div class="box">${sliderRow("Nh\u1EA1c n\u1EC1n qu\xE1n", "music", "\u{1F3B5}")}${sliderRow("\xC2m thanh pha ch\u1EBF & SFX", "sfx", "\u{1F9CB}")}</div>
    <button class="btn pri block" data-act="resume">\u25B6 Ch\u01A1i ti\u1EBFp</button>
    <button class="btn pri block" data-act="close">\u0110\xF3ng c\u1EEDa h\xF4m nay</button>`
    });
    const acts = bindSliders(m);
    bindActions(m.body, {
      ...acts,
      resume: () => m.close(),
      close: () => confirmBox("\u0110\xF3ng c\u1EEDa h\xF4m nay?", "Kh\xE1ch \u0111ang ch\u1EDD s\u1EBD ra v\u1EC1 v\xE0 ca b\xE1n k\u1EBFt th\xFAc ngay.", () => {
        m.close();
        closeNow();
      }, "\u0110\xF3ng c\u1EEDa", true)
    });
  }
  var MUSIC_OPTIONS = [
    ["lofi", "\u{1F3A7} Lofi Chill Qu\xE1n Cafe"],
    ["vui", "\u{1F389} Vui nh\u1ED9n"],
    ["spring", "\u{1F338} M\xF9a Xu\xE2n"],
    ["summer", "\u2600\uFE0F M\xF9a H\u1EA1"],
    ["autumn", "\u{1F342} M\xF9a Thu"],
    ["winter", "\u2744\uFE0F M\xF9a \u0110\xF4ng"],
    ["off", "T\u1EAFt nh\u1EA1c"]
  ];
  var musicStyleName = () => {
    var _a;
    return ((_a = MUSIC_OPTIONS.find(([id]) => id === S.settings.style)) == null ? void 0 : _a[1]) || "T\u1EAFt nh\u1EA1c";
  };
  function openSettings() {
    var _a;
    const sell = S.phase === "sell";
    if (sell) setPaused(true);
    const row2 = (act, icon2, label, value = "") => `<button class="set-row" data-act="${act}"><span class="si">${icon2}</span><b>${label}</b><em>${value}</em></button>`;
    const m = openModal({
      id: "settings",
      cls: "settings",
      onClose: () => {
        if (sell && !isModalOpen("pause")) setPaused(false);
      },
      html: `
    <h2 class="set-title">\u2699\uFE0F C\xE0i \u0111\u1EB7t</h2>
    ${row2("guide", "\u{1F4D6}", "H\u01B0\u1EDBng d\u1EABn")}
    ${row2("news", "\u{1F381}", "C\xF3 g\xEC m\u1EDBi", "v" + VERSION)}
    ${row2("update", "\u{1F504}", "C\u1EADp nh\u1EADt b\u1EA3n m\u1EDBi", "T\u1EA3i l\u1EA1i web & xo\xE1 b\u1ED9 nh\u1EDB \u0111\u1EC7m")}
    ${row2("hints", "\u{1F9ED}", "Ch\u1EC9 d\u1EABn t\u1EEBng b\u01B0\u1EDBc", S.settings.hints ? "T\u1EF1 \u0111\u1ED9ng" : "T\u1EAFt")}
    ${row2("shiftMin", "\u23F1\uFE0F", "Th\u1EDDi gian b\xE1n m\u1ED7i ng\xE0y", `${S.settings.shiftMinNext} ph\xFAt \xB7 \xE1p d\u1EE5ng t\u1EEB ng\xE0y sau`)}
    ${row2("theme", "\u{1F3A8}", "M\xE0u giao di\u1EC7n", THEMES[S.settings.theme].name)}
    ${row2("haptic", "\u{1F4F3}", "Rung", HAPTIC_NAMES[(_a = S.settings.haptic) != null ? _a : 2])}
    <div class="box">${sliderRow("Nh\u1EA1c n\u1EC1n qu\xE1n", "music", "\u{1F3B5}")}${sliderRow("\xC2m thanh pha ch\u1EBF & SFX", "sfx", "\u{1F9CB}")}</div>
    ${row2("style", "\u{1F3BC}", "Nh\u1EA1c n\u1EC1n & M\xF9a", musicStyleName())}
    ${row2("export", "\u{1F4E6}", "Sao l\u01B0u ti\u1EBFn tr\xECnh", S.savedAt ? "\u0110\xE3 l\u01B0u" : "Ch\u01B0a sao l\u01B0u")}
    ${row2("backups", "\u{1F5C2}\uFE0F", "Kh\xF4i ph\u1EE5c b\u1EA3n t\u1EF1 l\u01B0u", `Game t\u1EF1 l\u01B0u ${listBackups().length} cu\u1ED1i ng\xE0y g\u1EA7n nh\u1EA5t`)}
    ${row2("import", "\u{1F511}", "Kh\xF4i ph\u1EE5c t\u1EEB m\xE3")}
    ${row2("reset", "\u21A9\uFE0F", "Ch\u01A1i l\u1EA1i t\u1EEB \u0111\u1EA7u")}
    <button class="btn pri block" data-act="close">\u0110\xF3ng</button>`
    });
    const sliders = bindSliders(m);
    const setVal = (act, text) => {
      const e = $(`[data-act="${act}"] em`, m.body);
      if (e) e.textContent = text;
    };
    bindActions(m.body, {
      ...sliders,
      close: () => m.close(),
      guide: () => openGuide(),
      news: () => alertBox("\u{1F381} C\xF3 g\xEC m\u1EDBi", CHANGELOG.map((c) => `<p>\u2022 ${esc(c)}</p>`).join("")),
      update: () => confirmBox("C\u1EADp nh\u1EADt b\u1EA3n m\u1EDBi", "L\u01B0u game v\xE0 t\u1EA3i l\u1EA1i trang \u0111\u1EC3 l\u1EA5y b\u1EA3n m\u1EDBi nh\u1EA5t?", () => {
        saveGame();
        location.reload();
      }),
      hints: () => openChoice("\u{1F9ED} Ch\u1EC9 d\u1EABn t\u1EEBng b\u01B0\u1EDBc", [[true, "T\u1EF1 \u0111\u1ED9ng"], [false, "T\u1EAFt"]], S.settings.hints, (v) => {
        S.settings.hints = v;
        requestSave();
        setVal("hints", v ? "T\u1EF1 \u0111\u1ED9ng" : "T\u1EAFt");
      }),
      shiftMin: () => openChoice("\u23F1\uFE0F Th\u1EDDi gian b\xE1n m\u1ED7i ng\xE0y", SHIFT_MINUTES.map((n) => [n, `${n} ph\xFAt`]), S.settings.shiftMinNext, (v) => {
        S.settings.shiftMinNext = v;
        requestSave();
        setVal("shiftMin", `${v} ph\xFAt \xB7 \xE1p d\u1EE5ng t\u1EEB ng\xE0y sau`);
      }),
      haptic: () => {
        var _a2;
        return openChoice("\u{1F4F3} Rung khi thao t\xE1c & ch\u01A1i game", HAPTIC_NAMES.map((n, i) => [i, n]), (_a2 = S.settings.haptic) != null ? _a2 : 2, (v) => {
          S.settings.haptic = v;
          requestSave();
          setVal("haptic", HAPTIC_NAMES[v]);
          if (v > 0 && !buzz([40, 60, 40])) toast("Thi\u1EBFt b\u1ECB ho\u1EB7c \u1EE9ng d\u1EE5ng n\xE0y ch\u01B0a cho web rung. V\u1EDBi APK: b\u1EADt quy\u1EC1n VIBRATE trong c\xF4ng c\u1EE5 t\u1EA1o APK.", "err", 3200);
        });
      },
      theme: () => openThemePicker(() => setVal("theme", THEMES[S.settings.theme].name)),
      style: () => openChoice("\u{1F3BC} Nh\u1EA1c n\u1EC1n & M\xF9a", MUSIC_OPTIONS, S.settings.style, (v) => {
        S.settings.style = v;
        restartMusic();
        requestSave();
        setVal("style", musicStyleName());
      }),
      export: () => openExport(),
      import: () => openImport(),
      backups: () => openBackups(),
      reset: () => confirmBox("Ch\u01A1i l\u1EA1i t\u1EEB \u0111\u1EA7u?", "To\xE0n b\u1ED9 ti\u1EBFn tr\xECnh s\u1EBD b\u1ECB xo\xE1 v\u0129nh vi\u1EC5n. B\u1EA1n ch\u1EAFc ch\u1EAFn ch\u1EE9?", () => {
        closeAllModals();
        wipeSave();
        applyTheme();
        emit("reset");
      }, "Xo\xE1 & ch\u01A1i l\u1EA1i", true)
    });
  }
  function openExport() {
    const code = exportCode();
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F4E6} M\xE3 sao l\u01B0u</h3><p class="m-text">Sao ch\xE9p m\xE3 b\xEAn d\u01B0\u1EDBi v\xE0 c\u1EA5t \u1EDF n\u01A1i an to\xE0n. D\xE1n v\xE0o "Kh\xF4i ph\u1EE5c t\u1EEB m\xE3" \u0111\u1EC3 ch\u01A1i ti\u1EBFp tr\xEAn m\xE1y kh\xE1c.</p>
    <textarea class="code" readonly data-code>${code}</textarea><button class="btn pri block" data-act="copy">\u{1F4CB} Sao ch\xE9p</button><button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, {
      copy: async () => {
        if (await copyText(code)) toast("\u0110\xE3 sao ch\xE9p m\xE3!", "ok");
        else {
          const input = $("[data-code]", m.body);
          input.focus();
          input.select();
          input.setSelectionRange(0, code.length);
          toast("H\xE3y nh\u1EA5n gi\u1EEF m\xE3 \u0111\xE3 ch\u1ECDn \u0111\u1EC3 sao ch\xE9p", "");
        }
      },
      x: () => m.close()
    });
  }
  function openImport() {
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F511} Kh\xF4i ph\u1EE5c t\u1EEB m\xE3</h3><textarea class="code" data-code placeholder="D\xE1n m\xE3 TTM3.\u2026 v\xE0o \u0111\xE2y"></textarea>
    <button class="btn pri block" data-act="go">Kh\xF4i ph\u1EE5c</button><button class="btn ghost block" data-act="x">H\u1EE7y</button>` });
    bindActions(m.body, {
      go: () => {
        if (importCode($("[data-code]", m.body).value)) {
          closeAllModals();
          applyTheme();
          emit("reset");
          toast("Kh\xF4i ph\u1EE5c th\xE0nh c\xF4ng!", "ok");
        } else toast("M\xE3 kh\xF4ng h\u1EE3p l\u1EC7", "err");
      },
      x: () => m.close()
    });
  }
  function openBackups() {
    const list = listBackups();
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F5C2}\uFE0F B\u1EA3n t\u1EF1 l\u01B0u</h3>${list.length ? list.map((b) => `<button class="set-row" data-act="rb" data-i="${b.i}"><span class="si">\u{1F4BE}</span><b>Ng\xE0y ${b.day} \xB7 ${fmtK(b.money)}</b><em>${new Date(b.t).toLocaleString("vi-VN")}</em></button>`).join("") : '<p class="m-text center">Ch\u01B0a c\xF3 b\u1EA3n t\u1EF1 l\u01B0u n\xE0o. Game t\u1EF1 l\u01B0u v\xE0o cu\u1ED1i m\u1ED7i ng\xE0y.</p>'}
    <button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, {
      rb: (t) => confirmBox("Kh\xF4i ph\u1EE5c b\u1EA3n n\xE0y?", "Ti\u1EBFn tr\xECnh hi\u1EC7n t\u1EA1i s\u1EBD b\u1ECB thay th\u1EBF.", () => {
        if (restoreBackup(+t.dataset.i)) {
          closeAllModals();
          applyTheme();
          emit("reset");
          toast("\u0110\xE3 kh\xF4i ph\u1EE5c!", "ok");
        }
      }),
      x: () => m.close()
    });
  }
  function openGuide() {
    const m = openModal({ id: "guide", cls: "settings", html: `<h2 class="set-title">${icon("book", 24)} H\u01B0\u1EDBng d\u1EABn ch\u01A1i</h2>
    <div class="guide rich">${guideHTML()}</div>
    <button class="btn pri block" data-act="x" style="margin-top:6px">\u0110\xE3 hi\u1EC3u</button>` });
    bindActions(m.body, { x: () => m.close() });
  }
  function openForecast() {
    const ev = eventOf();
    const loc = LOCATIONS[S.location];
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F326}\uFE0F Th\u1EDDi ti\u1EBFt & M\xF9a</h3>
    <p class="m-text center">${loc.icon} ${esc(loc.name)} \xB7 ${SEASONS[S.season].icon} M\xF9a ${SEASONS[S.season].name}</p>
    ${S.forecast.slice(0, 4).map((f, i) => {
      const w = WEATHERS[f.weather];
      return `<div class="wx-row"><span class="wi">${w.icon}</span><div><b>${i === 0 ? "H\xF4m nay" : "Ng\xE0y " + f.day} \xB7 ${f.temp}\xB0C \u2014 ${w.name}</b><small>${esc(w.tip)}</small></div></div>`;
    }).join("")}
    <div class="wx-row ev"><span class="wi">${ev.icon}</span><div><b>S\u1EF1 ki\u1EC7n h\xF4m nay: ${esc(ev.name)}</b><small>${esc(ev.desc)}</small></div></div>
    <button class="btn pri block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, { x: () => m.close() });
  }
  var fsPending = false;
  function lockPortrait() {
    var _a, _b, _c;
    try {
      const result = (_b = (_a = screen.orientation) == null ? void 0 : _a.lock) == null ? void 0 : _b.call(_a, "portrait");
      (_c = result == null ? void 0 : result.catch) == null ? void 0 : _c.call(result, () => {
      });
    } catch (e) {
    }
  }
  var isEmbedded = () => /; wv\)/.test(navigator.userAgent) || !!(window.matchMedia && (window.matchMedia("(display-mode: fullscreen)").matches || window.matchMedia("(display-mode: standalone)").matches));
  function goFullscreen() {
    if (isEmbedded()) return;
    try {
      const d = document.documentElement;
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        lockPortrait();
        return;
      }
      if (fsPending) return;
      const f = d.requestFullscreen || d.webkitRequestFullscreen || d.msRequestFullscreen;
      if (f) {
        fsPending = true;
        const r = f.call(d, { navigationUI: "hide" });
        if (r && r.then) r.then(() => {
          fsPending = false;
          lockPortrait();
        }, () => {
          fsPending = false;
        });
        else fsPending = false;
      }
    } catch (e) {
      fsPending = false;
    }
  }
  var fsDone = false;
  var fullscreenChanged = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      fsDone = true;
      lockPortrait();
    }
  };
  document.addEventListener("fullscreenchange", fullscreenChanged);
  document.addEventListener("webkitfullscreenchange", fullscreenChanged);
  function showIntro(onPlay) {
    const el = $("#intro");
    el.hidden = false;
    const hasSave = S.started;
    el.innerHTML = `
    <div class="intro-sky"><span class="star">\u2B50</span><span class="cloud c1">\u2601\uFE0F</span><span class="cloud c2">\u2601\uFE0F</span><span class="cloud c3">\u2601\uFE0F</span><span class="bubble-tea">\u{1F9CB}</span><span class="spark" style="left:12%;top:36%">\u2726</span><span class="spark" style="right:10%;top:44%;animation-delay:-1s">\u2726</span><span class="spark" style="left:46%;top:30%;animation-delay:-1.8s">\u2726</span></div>
    <div class="in-rays" aria-hidden="true"></div>
    <div class="in-fx" aria-hidden="true"><i class="bub" style="left:6%;--s:14px;--d:0.0s;--t:9.0s"></i><i class="bub" style="left:14%;--s:9px;--d:2.5s;--t:7.5s"></i><i class="bub" style="left:23%;--s:18px;--d:5.0s;--t:11.0s"></i><i class="bub" style="left:33%;--s:10px;--d:1.2s;--t:8.0s"></i><i class="bub" style="left:44%;--s:15px;--d:6.5s;--t:10.0s"></i><i class="bub" style="left:55%;--s:9px;--d:3.2s;--t:7.0s"></i><i class="bub" style="left:63%;--s:17px;--d:0.8s;--t:12.0s"></i><i class="bub" style="left:72%;--s:11px;--d:4.4s;--t:8.5s"></i><i class="bub" style="left:81%;--s:15px;--d:7.5s;--t:10.5s"></i><i class="bub" style="left:90%;--s:10px;--d:2.0s;--t:7.8s"></i><i class="bub" style="left:96%;--s:13px;--d:5.6s;--t:9.4s"></i> <i class="pet" style="left:8%;--d:0.0s;--t:11.0s;--x:40px">\u{1F338}</i><i class="pet" style="left:24%;--d:3.5s;--t:13.0s;--x:-30px">\u{1F338}</i><i class="pet" style="left:42%;--d:6.0s;--t:12.0s;--x:50px">\u{1F338}</i><i class="pet" style="left:61%;--d:1.5s;--t:14.0s;--x:-40px">\u{1F338}</i><i class="pet" style="left:78%;--d:8.0s;--t:11.5s;--x:30px">\u{1F338}</i><i class="pet" style="left:92%;--d:4.5s;--t:12.5s;--x:-35px">\u{1F338}</i></div>
    <div class="in-aw" aria-hidden="true"></div>
    <div class="in-lights" aria-hidden="true"><i style="--c:#ff7aa2;--d:0.0s"></i><i style="--c:#ffd45e;--d:0.2s"></i><i style="--c:#7fd6ff;--d:0.5s"></i><i style="--c:#9fe39a;--d:0.7s"></i><i style="--c:#ffa86b;--d:0.9s"></i><i style="--c:#c9a0ff;--d:1.2s"></i><i style="--c:#ff7aa2;--d:1.4s"></i><i style="--c:#ffd45e;--d:1.6s"></i><i style="--c:#7fd6ff;--d:1.8s"></i><i style="--c:#9fe39a;--d:2.1s"></i><i style="--c:#ffa86b;--d:2.3s"></i><i style="--c:#c9a0ff;--d:2.5s"></i><i style="--c:#ff7aa2;--d:2.8s"></i><i style="--c:#ffd45e;--d:3.0s"></i><i style="--c:#7fd6ff;--d:3.2s"></i><i style="--c:#9fe39a;--d:3.5s"></i><i style="--c:#ffa86b;--d:3.7s"></i><i style="--c:#c9a0ff;--d:3.9s"></i></div>
    <div class="in-birds" aria-hidden="true"><span class="b1">\u{1F54A}\uFE0F</span><span class="b2">\u{1F426}</span></div>
    <div class="in-lan" aria-hidden="true"><span>\u{1F3EE}</span><span>\u{1F390}</span><span>\u{1F3EE}</span></div>
    <div class="in-sign" aria-hidden="true">M\u1EDE C\u1EECA</div>
    <h1 class="intro-title"><span class="tt-spk a">\u2728</span><span class="tt-spk b">\u2726</span><span class="tt-spk c">\u2728</span>Ti\u1EC7m Tr\xE0 M\u01A1 \u01AF\u1EDBc</h1>
    <p class="intro-tag">Pha tr\xE0, \u0111\xF3n kh\xE1ch, m\u1EDF ti\u1EC7m nh\u1ECF c\u1EE7a ri\xEAng b\u1EA1n</p>
    <div class="intro-info">${esc(S.shopName)} \xB7 Ng\xE0y ${S.day} \xB7 ${fmtK(S.money)}</div>
    <div class="in-hero" aria-hidden="true"><span class="hero-glow"></span><span class="hero-cup">\u{1F9CB}</span><span class="hero-steam s1">\u2728</span><span class="hero-steam s2">\u2728</span><span class="hero-steam s3">\u{1F497}</span></div>
    <button class="btn pri big" data-act="play">${hasSave ? "Ch\u01A1i ti\u1EBFp" : "Ch\u01A1i m\u1EDBi"}</button>
    <button class="link" data-act="guide">H\u01B0\u1EDBng d\u1EABn</button>
    <div class="in-queue" aria-hidden="true"><span class="q1">\u{1F9D1}\u200D\u{1F393}<b>\u{1F9CB}</b></span><span class="q2">\u{1F469}\u200D\u{1F4BC}<b>\u{1F375}</b></span><span class="q3">\u{1F475}<b>\u{1F9CB}</b></span><span class="q4">\u{1F466}<b>\u{1F964}</b></span></div>
    <div class="in-counter" aria-hidden="true"><span class="in-plant">\u{1F335}</span><div class="in-cups"><span>\u{1F9CB}</span><span>\u{1F964}</span><span>\u{1F9C3}</span><span>\u{1F375}</span></div><div class="in-cat">\u{1F431}<small>z z</small></div><span class="in-plant">\u{1FAB4}</span></div>
    <div class="in-front" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="in-walk" aria-hidden="true"><span class="w1"><em class="stp">\u{1F6B6}\u200D\u2640\uFE0F</em><i>\u{1F9CB}</i></span><span class="w2"><em class="rid">\u{1F6F5}</em></span><span class="w3"><em class="trt">\u{1F415}</em></span></div>
    <span class="in-corner l">\u{1F353}</span><span class="in-corner r">\u{1F343}</span>
    <small class="ver">${VERSION}</small>`;
    bindActions(el, { play: () => {
      goFullscreen();
      el.hidden = true;
      onPlay();
    }, guide: () => openGuide() });
  }

  // js/events.js
  var INSPECTOR = { key: "inspector", tag: "\u{1F575}\uFE0F \u0110o\xE0n ki\u1EC3m tra", avatar: "\u{1F575}\uFE0F" };
  var ROUND_K = (v) => Math.round(v / 1e3) * 1e3;
  function blankEv() {
    return { bo: [], boI: 0, off: 0, flick: 0, halt: 0, mode: "", ins: [], pending: null };
  }
  function ensureEv() {
    if (!SH.ev) SH.ev = blankEv();
    return SH.ev;
  }
  function onShiftStart() {
    const ev = SH.ev = blankEv();
    clearUi();
    if (S.day < 2) return;
    const total = SH.total;
    const span = total - 60 - 25;
    const lastHad = (S.ev.blk || 0) > 0;
    let n = +wpick(lastHad ? { 0: 65, 1: 30, 2: 5 } : { 0: 42, 1: 41, 2: 17 });
    if (span < 120) n = Math.min(n, 1);
    for (let i = 0; i < n; i++) ev.bo.push(Math.round(30 + span * (i + rand(0.1, 0.9)) / n));
    S.ev.blk = n;
    const sinceLic = S.day - (S.ev.lic || 0), sinceFood = S.day - (S.ev.food || 0);
    const wantLic = S.day >= 3 && sinceLic >= 2 && chance(clamp(0.22 + 0.08 * (sinceLic - 2), 0.22, 0.7));
    const wantFood = S.day >= 4 && sinceFood >= 2 && chance(clamp(0.2 + 0.08 * (sinceFood - 2), 0.2, 0.65));
    const used = [...ev.bo];
    const place2 = (lo, hi) => {
      let t = total * rand(lo, hi);
      for (let k = 0; k < 8 && used.some((u) => Math.abs(u - t) < 45); k++) t = total * rand(lo, hi);
      used.push(t);
      return Math.round(t);
    };
    if (wantLic) {
      ev.ins.push({ k: "lic", at: place2(0.25, 0.7), done: false });
      S.ev.lic = S.day;
    }
    if (wantFood) {
      ev.ins.push({ k: "food", at: place2(0.3, 0.75), done: false });
      S.ev.food = S.day;
    }
  }
  function onRestore() {
    const ev = ensureEv();
    Object.assign(ev, { off: 0, flick: 0, halt: 0, mode: "", pending: null, generatorPending: false });
    ev.bo = Array.isArray(ev.bo) ? ev.bo : [];
    ev.ins = Array.isArray(ev.ins) ? ev.ins : [];
    clearUi();
  }
  function blocked(kind) {
    const ev = SH.ev;
    if (!ev || !SH.on) return null;
    if (ev.halt > 0) return "Qu\xE1n \u0111ang b\u1ECB \u0111\xECnh ch\u1EC9!";
    if (ev.off > 0) {
      if (kind === "pump" && ev.mode !== "gen2") return "\u0110ang m\u1EA5t \u0111i\u1EC7n!";
      if (kind === "seal" && ev.mode === "full") return "\u0110ang m\u1EA5t \u0111i\u1EC7n!";
    }
    return null;
  }
  var halted = () => !!(SH.ev && SH.ev.halt > 0);
  function update(dt) {
    const ev = SH.ev;
    if (!ev) return;
    if (ev.flick > 0) ev.flick = Math.max(0, ev.flick - dt);
    if (ev.halt > 0) {
      ev.halt = Math.max(0, ev.halt - dt);
      if (!ev.halt) note("\u2705 Qu\xE1n \u0111\u01B0\u1EE3c m\u1EDF c\u1EEDa tr\u1EDF l\u1EA1i", "ok");
    }
    if (ev.off > 0) {
      ev.off -= dt;
      if (ev.off <= 0) endBlackout();
    } else if (ev.boI < ev.bo.length && SH.t >= ev.bo[ev.boI] && SH.t < SH.total - 25) {
      ev.boI++;
      startBlackout();
    }
    if (!ev.pending) {
      const due = ev.ins.find((x) => !x.done && SH.t >= x.at && SH.t < SH.total - 8);
      if (due) {
        due.done = true;
        ev.pending = due.k;
      }
    }
    if (ev.generatorPending && ev.off > 0 && !isModalOpen()) offerGenerator();
    if (ev.pending && ev.off <= 0 && !ev.halt && !isModalOpen()) openInspection(ev.pending);
    sync();
  }
  function startBlackout(sec) {
    var _a;
    const ev = ensureEv();
    const gen = equipLevel("mayPhat");
    buzz([60, 40, 60, 40, 120]);
    sfx("alarm");
    if (ev.off > 0) return;
    ev.off = sec || rand(15, 25);
    ev.mode = "full";
    ev.flick = 1.2;
    if ((_a = SH.board) == null ? void 0 : _a.pouring) stopPour();
    ev.generatorPending = gen > 0;
    note("\u26A1 M\u1EA5t \u0111i\u1EC7n! B\xECnh tr\xE0 v\xE0 m\xE1y \u0111\xF3ng n\u1EAFp t\u1EA1m ng\u1EEBng", "err");
    if (ev.generatorPending && !isModalOpen()) offerGenerator();
    sync();
  }
  function requestGenerator() {
    const ev = ensureEv();
    if (!SH.on || ev.off <= 0) return "\u0110i\u1EC7n l\u01B0\u1EDBi \u0111ang ho\u1EA1t \u0111\u1ED9ng, ch\u01B0a c\u1EA7n m\xE1y ph\xE1t";
    if (!equipLevel("mayPhat")) return "Ch\u01B0a mua m\xE1y ph\xE1t \u0111i\u1EC7n";
    if (ev.mode !== "full") return "M\xE1y ph\xE1t \u0111ang ch\u1EA1y";
    ev.generatorPending = true;
    if (!isModalOpen()) offerGenerator();
    return null;
  }
  function offerGenerator() {
    const ev = ensureEv(), gen = equipLevel("mayPhat");
    ev.generatorPending = false;
    if (!gen || ev.off <= 0) return;
    const wasPaused = isPaused();
    setPaused(true);
    const m = openModal({
      id: "generator",
      cls: "small ev-modal",
      closable: false,
      title: "D\xF9ng m\xE1y ph\xE1t \u0111i\u1EC7n",
      onClose: () => {
        setPaused(wasPaused);
        requestSave();
      },
      html: `<div class="ev-ico">\u{1F50C}</div><h3 class="m-title">M\u1EA5t \u0111i\u1EC7n \u2014 b\u1EADt m\xE1y ph\xE1t?</h3><p class="m-text">${gen >= 2 ? "M\xE1y c\xF4ng su\u1EA5t l\u1EDBn c\u1EA5p \u0111i\u1EC7n cho b\xECnh tr\xE0, m\xE1y \u0111\xF3ng n\u1EAFp v\xE0 \u0111\xE8n. B\u1EA1n ti\u1EBFp t\u1EE5c pha v\xE0 b\xE1n h\xE0ng." : "M\xE1y mini c\u1EA5p \u0111i\u1EC7n cho m\xE1y \u0111\xF3ng n\u1EAFp v\xE0 \u0111\xE8n. B\xECnh tr\xE0 ch\u1EDD \u0111i\u1EC7n l\u01B0\u1EDBi; n\xE2ng C2 \u0111\u1EC3 ch\u1EA1y to\xE0n b\u1ED9 qu\u1EA7y."}</p><div class="m-row"><button class="btn ghost" data-act="no">Ch\u1EDD \u0111i\u1EC7n l\u01B0\u1EDBi</button><button class="btn pri" data-act="yes">\u{1F50C} \u0110\u1ED3ng \xFD s\u1EED d\u1EE5ng</button></div>`
    });
    let decided = false;
    bindActions(m.body, {
      yes: () => {
        if (decided) return;
        decided = true;
        if (ev.off > 0) {
          ev.mode = gen >= 2 ? "gen2" : "gen1";
          ev.flick = gen >= 2 ? rand(1, 2) : 0;
        }
        sync();
        m.close();
        note("\u{1F50C} M\xE1y ph\xE1t \u0111i\u1EC7n \u0111ang ch\u1EA1y", "ok");
      },
      no: () => {
        if (decided) return;
        decided = true;
        m.close();
      }
    });
  }
  function endBlackout() {
    const ev = ensureEv();
    ev.off = 0;
    ev.mode = "";
    ev.generatorPending = false;
    note("\u{1F4A1} \u0110\xE3 c\xF3 \u0111i\u1EC7n tr\u1EDF l\u1EA1i", "ok");
    sfx("success");
    sync();
  }
  var uiKey = "";
  function layer() {
    let el = $("#evlayer");
    if (!el) {
      el = h('<div id="evlayer" class="ev-layer" aria-hidden="true"><div class="ev-dark"></div><div class="ev-badge"></div></div>');
      $("#app").appendChild(el);
    }
    return el;
  }
  function sync() {
    var _a;
    const ev = SH.ev, app = $("#app");
    if (!ev || !app) return;
    const off = ev.off > 0, halt = ev.halt > 0, flick = ev.flick > 0;
    const key = `${off ? ev.mode : ""}|${flick ? 1 : 0}|${halt ? 1 : 0}|${Math.ceil(ev.off)}|${Math.ceil(ev.halt)}`;
    if (key === uiKey) return;
    uiKey = key;
    app.classList.toggle("ev-off", off && ev.mode === "full");
    app.classList.toggle("ev-gen1", off && ev.mode === "gen1");
    app.classList.toggle("ev-flick", flick);
    app.classList.toggle("ev-halt", halt);
    if (!off && !halt && !flick) {
      (_a = $("#evlayer")) == null ? void 0 : _a.remove();
      return;
    }
    const badge = $(".ev-badge", layer());
    if (off) badge.textContent = ev.mode === "gen2" ? `\u{1F50C} M\xE1y ph\xE1t \u0111ang ch\u1EA1y \xB7 ${Math.ceil(ev.off)}s` : ev.mode === "gen1" ? `\u{1F50C} M\xE1y ph\xE1t mini \xB7 b\xECnh tr\xE0 ch\u1EDD \u0111i\u1EC7n \xB7 ${Math.ceil(ev.off)}s` : `\u26A1 M\u1EA4T \u0110I\u1EC6N \xB7 ${Math.ceil(ev.off)}s`;
    else if (halt) badge.textContent = `\u{1F6AB} Qu\xE1n b\u1ECB \u0111\xECnh ch\u1EC9 \xB7 ${Math.ceil(ev.halt)}s`;
    else badge.textContent = "";
    badge.style.display = badge.textContent ? "" : "none";
  }
  function clearUi() {
    var _a, _b;
    uiKey = "";
    (_a = $("#evlayer")) == null ? void 0 : _a.remove();
    (_b = $("#app")) == null ? void 0 : _b.classList.remove("ev-off", "ev-gen1", "ev-flick", "ev-halt");
  }
  function note(msg, type = "") {
    const root2 = $("#toasts");
    if (!root2 || [...root2.children].some((x) => x.dataset.msg === msg || x.textContent === msg)) return;
    const t = h(`<div class="toast ${type}">${esc(msg)}</div>`);
    t.dataset.msg = msg;
    root2.appendChild(t);
    while (root2.children.length > 3) root2.firstElementChild.remove();
    setTimeout(() => {
      t.classList.add("out");
      setTimeout(() => t.remove(), 260);
    }, 2800);
  }
  on("shift:end", clearUi);
  on("reset", clearUi);
  function money(delta) {
    S.money = Math.max(0, S.money + delta);
    markDirty("hud");
  }
  function fine(amount) {
    const pay = Math.min(amount, S.money);
    S.money -= pay;
    S.today.fine = (S.today.fine || 0) + pay;
    markDirty("hud");
    return pay;
  }
  function reward(amount) {
    money(amount);
    S.today.tips += amount;
    SH.tip += amount;
    SH.rev += amount;
    return amount;
  }
  var row = (cls, ico, title, detail) => `<div class="ev-row ${cls}"><i>${ico}</i><div><b>${title}</b><small>${detail}</small></div></div>`;
  var verdict = (cls, text) => `<div class="ev-verdict ${cls}">${text}</div>`;
  function licenseResult() {
    const has = equipLevel("giayPhep") > 0;
    if (has) {
      const r = reward(clamp(ROUND_K(SH.rev * 0.05), 3e4, 15e4));
      pushReview(INSPECTOR, 5, "Qu\xE1n c\xF3 gi\u1EA5y ph\xE9p kinh doanh \u0111\u1EA7y \u0111\u1EE7, l\xE0m \u0103n \u0111\xE0ng ho\xE0ng, uy t\xEDn!");
      S.followers += 30;
      return { rows: row("ok", "\u2705", "Gi\u1EA5y ph\xE9p kinh doanh", "H\u1EE3p l\u1EC7, c\xF2n hi\u1EC7u l\u1EF1c"), v: verdict("ok", `\u0110\u1EA0T \xB7 th\u01B0\u1EDFng +${fmtK(r)} \xB7 +1 \u0111\xE1nh gi\xE1 5\u2605 \xB7 +30 ng\u01B0\u1EDDi theo d\xF5i`) };
    }
    const f = fine(clamp(ROUND_K(SH.rev * 0.25 + 8e4), 12e4, 8e5));
    const halt = Math.round(rand(30, 45));
    SH.ev.halt = halt;
    pushReview(INSPECTOR, 2, "Nghe n\xF3i qu\xE1n b\u1ECB \u0111\xECnh ch\u1EC9 v\xEC ch\u01B0a c\xF3 gi\u1EA5y ph\xE9p kinh doanh...");
    return { rows: row("bad", "\u274C", "Gi\u1EA5y ph\xE9p kinh doanh", "Kh\xF4ng xu\u1EA5t tr\xECnh \u0111\u01B0\u1EE3c gi\u1EA5y ph\xE9p"), v: verdict("bad", `B\u1ECA PH\u1EA0T \u2212${fmtK(f)} \xB7 \u0111\xECnh ch\u1EC9 ${halt} gi\xE2y (kh\xE1ch v\u1EABn ph\u1EA3i ch\u1EDD)`) + '<p class="ev-tip">\u{1F4A1} Mua \u201CGi\u1EA5y ph\xE9p kinh doanh\u201D \u1EDF N\xE2ng c\u1EA5p \u203A Trang b\u1ECB.</p>' };
  }
  function foodResult() {
    const cert = equipLevel("attp") > 0;
    const dirty2 = SH.tables.filter((t) => t.s === "dirty").length;
    let overdue = 0, today = 0;
    const bad = [];
    for (const id of IDS) {
      for (const l of S.stock[id] || []) {
        if (l.exp === -1 || l.q <= 0) continue;
        if (l.exp < S.day) {
          overdue += l.q;
          bad.push(ITEMS[id].name);
        } else if (l.exp === S.day) today += l.q;
      }
    }
    const crit = [];
    if (!dirty2) crit.push([0, "\u2705", "V\u1EC7 sinh s\u1EA3nh", "T\u1EA5t c\u1EA3 b\xE0n \u0111\u1EC1u s\u1EA1ch s\u1EBD"]);
    else if (dirty2 === 1) crit.push([1, "\u26A0\uFE0F", "V\u1EC7 sinh s\u1EA3nh", "1 b\xE0n ch\u01B0a \u0111\u01B0\u1EE3c d\u1ECDn"]);
    else crit.push([2, "\u274C", "V\u1EC7 sinh s\u1EA3nh", `${dirty2} b\xE0n b\u1EA9n ch\u01B0a d\u1ECDn`]);
    if (overdue) crit.push([2, "\u274C", "H\u1EA1n s\u1EED d\u1EE5ng nguy\xEAn li\u1EC7u", `${overdue} ph\u1EA7n qu\xE1 h\u1EA1n c\xF2n trong kho (${[...new Set(bad)].slice(0, 3).join(", ")})`]);
    else if (today) crit.push([1, "\u26A0\uFE0F", "H\u1EA1n s\u1EED d\u1EE5ng nguy\xEAn li\u1EC7u", `${today} ph\u1EA7n h\u1EBFt h\u1EA1n trong h\xF4m nay, c\u1EA7n d\xF9ng/b\u1ECF s\u1EDBm`]);
    else crit.push([0, "\u2705", "H\u1EA1n s\u1EED d\u1EE5ng nguy\xEAn li\u1EC7u", "Kh\xF4ng c\xF3 h\xE0ng qu\xE1 h\u1EA1n hay s\u1EAFp h\u1EBFt h\u1EA1n"]);
    crit.push(cert ? [0, "\u2705", "Ch\u1EE9ng nh\u1EADn ATTP", "C\xF3 ch\u1EE9ng nh\u1EADn an to\xE0n th\u1EF1c ph\u1EA9m"] : [1, "\u26A0\uFE0F", "Ch\u1EE9ng nh\u1EADn ATTP", "Ch\u01B0a c\xF3 ch\u1EE9ng nh\u1EADn ATTP"]);
    const score = sum(crit, (c) => c[0]);
    const rows = crit.map(([lv, ico, t, d]) => row(lv === 0 ? "ok" : lv === 1 ? "warn" : "bad", ico, t, d)).join("");
    if (score <= 1) {
      const r = reward(clamp(ROUND_K(SH.rev * 0.06 * (cert ? 1.5 : 1)), 4e4, 18e4));
      pushReview(INSPECTOR, cert ? 5 : 4, "Qu\xE1n s\u1EA1ch s\u1EBD, nguy\xEAn li\u1EC7u t\u01B0\u01A1i, \u0111\u1EA1t chu\u1EA9n v\u1EC7 sinh an to\xE0n th\u1EF1c ph\u1EA9m!");
      return { rows, v: verdict("ok", `\u0110\u1EA0T \xB7 th\u01B0\u1EDFng +${fmtK(r)} \xB7 +1 \u0111\xE1nh gi\xE1 ${cert ? 5 : 4}\u2605`) };
    }
    if (score <= 3) {
      pushReview(INSPECTOR, 3, "\u0110o\xE0n ki\u1EC3m tra nh\u1EAFc nh\u1EDF qu\xE1n c\u1EA7n ch\xFA \xFD v\u1EC7 sinh h\u01A1n.");
      return { rows, v: verdict("warn", "C\u1EA2NH C\xC1O \xB7 kh\xF4ng b\u1ECB ph\u1EA1t ti\u1EC1n \xB7 \u22121 \u0111\xE1nh gi\xE1 3\u2605") + '<p class="ev-tip">\u{1F4A1} D\u1ECDn b\xE0n k\u1ECBp th\u1EDDi, d\xF9ng topping c\u0169 tr\u01B0\u1EDBc v\xE0 mua ch\u1EE9ng nh\u1EADn ATTP \u0111\u1EC3 tr\xE1nh b\u1ECB ph\u1EA1t.</p>' };
    }
    const f = fine(Math.round(clamp(ROUND_K(SH.rev * 0.15 + 6e4), 1e5, 5e5) * (cert ? 0.5 : 1) / 1e3) * 1e3);
    pushReview(INSPECTOR, 1, "Qu\xE1n b\u1ECB x\u1EED ph\u1EA1t v\xEC m\u1EA5t v\u1EC7 sinh an to\xE0n th\u1EF1c ph\u1EA9m, th\u1EA5t v\u1ECDng!");
    return { rows, v: verdict("bad", `B\u1ECA PH\u1EA0T \u2212${fmtK(f)} \xB7 \u22121 \u0111\xE1nh gi\xE1 1\u2605`) + '<p class="ev-tip">\u{1F4A1} D\u1ECDn b\xE0n b\u1EA9n, b\u1ECF nguy\xEAn li\u1EC7u qu\xE1 h\u1EA1n v\xE0 mua ch\u1EE9ng nh\u1EADn ATTP (gi\u1EA3m 50% ti\u1EC1n ph\u1EA1t).</p>' };
  }
  function openInspection(kind) {
    const ev = ensureEv();
    ev.pending = null;
    setPaused(true);
    sfx("alarm");
    buzz([40, 30, 40]);
    const lic = kind === "lic";
    const title = lic ? "Ki\u1EC3m tra gi\u1EA5y ph\xE9p kinh doanh" : "Ki\u1EC3m tra v\u1EC7 sinh ATTP";
    const hasLicense = equipLevel("giayPhep") > 0;
    let checked = false;
    const m = openModal({
      id: "inspect",
      cls: "small ev-modal",
      closable: false,
      title,
      onClose: () => {
        if (!isModalOpen("pause")) setPaused(false);
        markDirty("hud");
        requestSave();
      },
      html: `<div class="ev-ico">\u{1F575}\uFE0F</div><h3 class="m-title">\u0110o\xE0n ki\u1EC3m tra \u0111ang t\u1EDBi!</h3>
      <p class="m-text center">${lic ? "\u0110o\xE0n thanh tra y\xEAu c\u1EA7u xu\u1EA5t tr\xECnh gi\u1EA5y ph\xE9p kinh doanh c\u1EE7a qu\xE1n." : "\u0110o\xE0n ki\u1EC3m tra v\u1EC7 sinh an to\xE0n th\u1EF1c ph\u1EA9m \u0111ang xem x\xE9t qu\u1EA7y, s\u1EA3nh v\xE0 kho nguy\xEAn li\u1EC7u."}</p>
      ${lic ? `<p class="m-text center">${hasLicense ? "\u{1F4DC} Gi\u1EA5y ph\xE9p \u0111\xE3 mua \u0111ang c\xF3 t\u1EA1i qu\xE1n." : "\u26A0\uFE0F Qu\xE1n ch\u01B0a c\xF3 gi\u1EA5y ph\xE9p kinh doanh."}</p>` : ""}
      <button class="btn pri block" data-act="go">${lic ? hasLicense ? "\u{1F4DC} Xu\u1EA5t tr\xECnh gi\u1EA5y ph\xE9p" : "X\xE1c nh\u1EADn ch\u01B0a c\xF3 gi\u1EA5y ph\xE9p" : "\u{1F9EA} X\xE1c nh\u1EADn ki\u1EC3m tra v\u1EC7 sinh"}</button>`
    });
    bindActions(m.body, {
      go: () => {
        if (checked) return;
        checked = true;
        const r = lic ? licenseResult() : foodResult();
        m.body.innerHTML = `<div class="ev-ico">${lic ? "\u{1F4DC}" : "\u{1F9EA}"}</div><h3 class="m-title">${title}</h3>
        <div class="ev-list">${r.rows}</div>${r.v}<button class="btn pri block" data-act="ok">\u0110\xE3 hi\u1EC3u</button>`;
        sfx("bell");
      },
      ok: () => m.close()
    });
  }
  var inShift = () => SH.on && S.phase === "sell" ? true : (console.warn("[events] c\u1EA7n \u0111ang trong ca b\xE1n h\xE0ng"), false);
  var debugEvents = {
    blackout: (sec) => {
      if (inShift()) startBlackout(sec);
    },
    licenseCheck: () => {
      if (inShift()) ensureEv().pending = "lic";
    },
    foodCheck: () => {
      if (inShift()) ensureEv().pending = "food";
    }
  };

  // js/sell.js
  var SH = { on: false };
  on("fire", (id) => {
    if (SH.jobs) SH.jobs = SH.jobs.filter((job) => job.by !== id);
    if (SH.board && SH.board.auto && SH.board.auto.st.id === id) {
      SH.board.pouring = false;
      SH.board.auto = null;
      SH.board.autoDone = true;
    }
  });
  registerSaveHook(() => {
    S.shiftRuntime = S.phase === "sell" && SH.on ? JSON.parse(JSON.stringify(SH)) : null;
  });
  function restoreShiftRuntime() {
    const saved = S.shiftRuntime;
    SH.on = false;
    SH.fin = false;
    if (S.phase !== "sell") return false;
    if (!saved || !saved.on || !Number.isFinite(saved.total) || saved.total <= 0 || !Number.isFinite(saved.t) || !Array.isArray(saved.queue) || !Array.isArray(saved.plan) || !Array.isArray(saved.jobs) || !Array.isArray(saved.tables) || !Array.isArray(saved.onlineQ)) {
      S.phase = "home";
      S.shiftRuntime = null;
      return false;
    }
    Object.assign(SH, saved);
    if (SH.board) SH.board.pouring = false;
    onRestore();
    cid = Math.max(cid, ...SH.queue.map((c) => c.id + 1), ...SH.onlineQ.map((c) => (c.id || 0) + 1));
    return true;
  }
  registerRestoreHook(restoreShiftRuntime);
  function spawnPlan(n, total) {
    const seg = [[10, 11, 1], [11, 13, 1.7], [13, 17, 1], [17, 19, 1.7], [19, 22, 1.1]];
    const tot = sum(seg, (s) => (s[1] - s[0]) * s[2]);
    const hourAt = (q) => {
      let r = q * tot;
      for (const [a, b, w] of seg) {
        const m = (b - a) * w;
        if (r <= m) return a + r / w;
        r -= m;
      }
      return 22;
    };
    const times = [];
    const minGap = Math.max(3, total / Math.max(n, 1) * 0.3);
    for (let i = 0; i < n; i++) {
      const q = clamp((i + 0.5 + rand(-0.28, 0.28)) / n, 0, 0.999);
      let t = (hourAt(q) - 10) / 12 * total * 0.94 + 1.5;
      if (times.length && t - times[times.length - 1] < minGap) t = times[times.length - 1] + minGap;
      times.push(t);
    }
    return times;
  }
  function makeOrder() {
    const b = bonus();
    const w = weatherOf();
    const ev = eventOf();
    const tw = {};
    for (const t of TEAS) {
      if (!S.onMenu[t] || !S.unlocked[t]) continue;
      let x = priceWeight(t) * (stockQty(t) > 0 ? 1 : 0.2);
      const tp = ITEMS[t].temp;
      if ((w.coldBias || ev.coldBias) && tp === "cold") x *= 1.5;
      if (w.warmBias && tp === "warm") x *= 1.8;
      if (ev.hotItem === t) x *= 2;
      tw[t] = x;
    }
    const tea = wpick(tw) || TEAS.find((t) => S.onMenu[t]) || "traSua";
    const size = chance(0.3 * sizeLWeight() * (w.coldBias || ev.coldBias ? 1.5 : 1)) ? "L" : "M";
    let flavor = null;
    const fw = {};
    for (const f of FLAVORS) if (S.onMenu[f] && S.unlocked[f]) fw[f] = priceWeight(f) * (stockQty(f) > 0 ? 1 : 0.15);
    if (Object.keys(fw).length && chance(0.45)) flavor = wpick(fw) || null;
    const tw2 = {};
    for (const t of TOPS) if (S.onMenu[t] && S.unlocked[t]) tw2[t] = priceWeight(t) * (stockQty(t) > 0 ? 1 : 0.15);
    const nT = Math.min(Object.keys(tw2).length, +wpick({ 0: 20, 1: 45, 2: 25, 3: 8, 4: 2 }));
    const tops = [];
    const pool = { ...tw2 };
    for (let i = 0; i < nT; i++) {
      const t = wpick(pool);
      if (!t) break;
      tops.push(t);
      delete pool[t];
    }
    return { tea, size, flavor, tops };
  }
  function orderText(arch, o) {
    const drink = ITEMS[o.tea].name.toLowerCase() + (o.flavor ? ` v\u1ECB ${ITEMS[o.flavor].name.toLowerCase()}` : "");
    const tops = o.tops.length ? " v\u1EDBi " + o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(" v\xE0 ") : "";
    return pick(arch.lines).replace("{drink}", drink).replace("{size}", "size " + o.size).replace("{tops}", tops);
  }
  function orderPrice(o) {
    return priceOf(o.tea) + (o.flavor ? priceOf(o.flavor) : 0) + sum(o.tops, (t) => priceOf(t)) + (o.size === "L" ? priceOf("sizeL") : 0);
  }
  var cid = 1;
  function newCustomer(opts = {}) {
    const b = bonus();
    const keys = {};
    for (const [k, a2] of Object.entries(ARCHETYPES)) {
      if (k === "reviewer" && !opts.reviewer) continue;
      keys[k] = a2.w * (eventOf().student && (k === "sinhVien" || k === "be") ? 2 : 1);
    }
    const key = opts.reviewer ? "reviewer" : wpick(keys);
    const a = ARCHETYPES[key];
    const order = makeOrder();
    const maxP = 62 * a.patience * (1 + b.patience) * (opts.online ? 1.2 : 1);
    return {
      id: cid++,
      key,
      tag: a.tag,
      avatar: pick(a.avatars),
      order,
      text: orderText(a, order),
      p: maxP,
      maxP,
      online: !!opts.online,
      app: opts.app || null,
      hard: clamp(a.hard + b.hardCust - b.badRev + (S.location === "hcm" && SH.hour >= 20 ? 0.1 : 0), 0, 1),
      born: SH.t
    };
  }
  function startShift() {
    if (SH.on) return "\u0110ang trong ca";
    const chk = openMissing();
    if (!chk.canOpen) return "Ch\u01B0a \u0111\u1EE7 nguy\xEAn li\u1EC7u \u0111\u1EC3 m\u1EDF c\u1EEDa";
    const total = S.settings.shiftMin * 60;
    const n = expectedCustomers();
    Object.assign(SH, {
      on: true,
      total,
      t: 0,
      hour: SHIFT_START_H,
      queue: [],
      sel: null,
      plan: spawnPlan(n, total),
      pi: 0,
      expected: n,
      served: 0,
      left: 0,
      rev: 0,
      tip: 0,
      board: null,
      onlineQ: [],
      onlineNext: rand(12, 25),
      tables: [],
      view: "counter",
      staffT: {},
      jobs: [],
      over: 0,
      fb: [],
      buyT: 0,
      fin: false,
      critic: eventOf().critic ? { at: total * rand(0.35, 0.6), done: false } : null,
      sat: 0,
      cupsDone: 0
    });
    if (S.settings.tut && S.settings.tut.sell === false) {
      const c = newCustomer();
      c.order.tops = [];
      c.order.flavor = null;
      c.text = orderText(ARCHETYPES[c.key], c.order);
      SH.queue.push(c);
      SH.pi = Math.min(SH.pi + 1, SH.plan.length);
    }
    const nt = bonus().tables;
    for (let i = 0; i < nt; i++) SH.tables.push({ s: "free", t: 0 });
    onShiftStart();
    S.phase = "sell";
    S.started = true;
    markDirty("view", "hud");
    emit("shift:start");
    return null;
  }
  var frontCustomer = () => SH.queue.find((c) => c.id === SH.sel) || SH.queue[0] || null;
  function selectCustomer(id) {
    if (!SH.queue.some((c) => c.id === id)) return;
    SH.sel = id;
    emit("sel");
  }
  function removeCust(c) {
    SH.queue = SH.queue.filter((x) => x !== c);
    if (SH.sel === c.id) SH.sel = null;
    SH.jobs = SH.jobs.filter((j) => j.cid !== c.id);
    emit("queue");
  }
  function rejectCustomer() {
    const c = frontCustomer();
    if (!c) return "Ch\u01B0a c\xF3 kh\xE1ch \u0111\u1EC3 t\u1EEB ch\u1ED1i";
    removeCust(c);
    SH.left++;
    S.today.left++;
    if (chance(0.3)) pushReview(c, 3, "Qu\xE1n t\u1EEB ch\u1ED1i \u0111\u01A1n c\u1EE7a m\xECnh, h\u01A1i ti\u1EBFc.");
    emit("rejected", c);
    markDirty("hud");
    return null;
  }
  function isWrongOrder(board, c) {
    const o = c.order;
    return board.tea !== o.tea || board.size !== o.size || (board.flavor || null) !== (o.flavor || null) || o.tops.some((t) => !board.tops.includes(t)) || board.tops.some((t) => !o.tops.includes(t));
  }
  function customerLeaves(c, why) {
    removeCust(c);
    SH.left++;
    S.today.left++;
    if (why === "patience") {
      const stars = chance(0.5) ? 1 : 2;
      pushReview(c, stars, "Ch\u1EDD l\xE2u qu\xE1 n\xEAn m\xECnh \u0111\xE0nh b\u1ECF v\u1EC1...");
      emit("left", c);
    }
  }
  var REV_TEXT = {
    5: ["Ly tr\xE0 chu\u1EA9n v\u1ECB lu\xF4n, nh\xE2n vi\xEAn d\u1EC5 th\u01B0\u01A1ng, s\u1EBD quay l\u1EA1i nh\xE9!", "Pha nhanh, \u0111\xFAng order t\u1EEBng ch\xFAt m\u1ED9t. 10 \u0111i\u1EC3m!", "Qu\xE1n xinh, tr\xE0 ngon, topping t\u01B0\u01A1i. Ch\u1EA5m 5 sao!"],
    4: ["Tr\xE0 ngon, ch\u1EDD h\u01A1i l\xE2u m\u1ED9t ch\xFAt nh\u01B0ng x\u1EE9ng \u0111\xE1ng.", "\u1ED4n \xE1p, l\u1EA7n sau m\xECnh s\u1EBD gh\xE9 ti\u1EBFp.", "Ly \u0111\u1EB9p, v\u1ECB \u1ED5n, gi\xE1 h\u1EE3p l\xFD."],
    3: ["T\u1EA1m \u0111\u01B0\u1EE3c, mong l\u1EA7n sau chu\u1EA9n v\u1ECB h\u01A1n.", "H\u01A1i nh\u1EA1t so v\u1EDBi mong \u0111\u1EE3i, ly c\u0169ng ch\u01B0a \u0111\u1EA7y.", "B\xECnh th\u01B0\u1EDDng, kh\xF4ng c\xF3 g\xEC \u0111\u1EB7c bi\u1EC7t."],
    2: ["Ly b\u1ECB sai so v\u1EDBi order c\u1EE7a m\xECnh r\u1ED3i \u{1F615}", "Ch\u1EDD kh\xE1 l\xE2u m\xE0 ly l\u1EA1i sai topping.", "H\u01A1i th\u1EA5t v\u1ECDng, qu\xE1n c\u1EA7n c\u1EA9n th\u1EADn h\u01A1n."],
    1: ["Sai h\u1EB3n m\xF3n m\xECnh g\u1ECDi, bu\u1ED3n gh\xEA.", "Ch\u1EDD m\xE3i kh\xF4ng t\u1EDBi l\u01B0\u1EE3t, m\xECnh v\u1EC1 \u0111\xE2y.", "Tr\u1EA3i nghi\u1EC7m t\u1EC7, mong qu\xE1n r\xFAt kinh nghi\u1EC7m."]
  };
  function pushReview(c, stars, text) {
    const reply = S.staff.meKetTinh ? "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 gh\xE9 qu\xE1n! Ti\u1EC7m \u0111\xE3 ghi nh\u1EADn g\xF3p \xFD v\xE0 mong \u0111\u01B0\u1EE3c ph\u1EE5c v\u1EE5 b\u1EA1n t\u1ED1t h\u01A1n." : null;
    if (reply) stars = Math.min(5, stars + 1);
    const weight = c.key === "reviewer" ? 3 : 1;
    for (let i = 0; i < weight; i++) {
      S.reviews.unshift({ stars, name: c.tag, av: c.avatar, text: text || pick(REV_TEXT[stars]), reply, day: S.day });
    }
    if (S.reviews.length > 200) S.reviews.length = 200;
    S.ratingCount += 1;
    S.rating = clamp((40 + sum(S.reviews, (r) => r.stars)) / (10 + S.reviews.length), 1, 5);
    S.today.stars.push(stars);
    markDirty("hud");
  }
  function pickCup(size) {
    if (!SH.on) return "Ch\u01B0a m\u1EDF c\u1EEDa";
    if (SH.board) return "\u0110ang c\xF3 ly tr\xEAn th\u1EDBt";
    const customer = frontCustomer();
    if (customer && SH.jobs.some((job) => job.cid === customer.id)) return "Nh\xE2n vi\xEAn \u0111ang l\xE0m \u0111\u01A1n n\xE0y. Ch\u1ECDn kh\xE1ch kh\xE1c \u0111\u1EC3 pha song song.";
    const blk = blocked("cup");
    if (blk) return blk;
    const cupId = size === "L" ? "lyL" : "lyM";
    if (stockQty(cupId) < 1) return `H\u1EBFt ly size ${size === "L" ? "L" : "M"} r\u1ED3i!`;
    take(cupId, 1);
    SH.board = { size, cid: customer == null ? void 0 : customer.id, tea: null, fill: 0, flavor: null, tops: [], phase: "cup", sealT: 0, pouring: false, spill: 0, auto: null };
    const st = counterAssistant();
    if (st) {
      const c = frontCustomer();
      if (c) SH.board.auto = { cid: c.id, t: 1.1, topsLeft: st.kind === "manager" ? [...c.order.tops] : [], st };
    }
    emit("cup:pick", size);
    return null;
  }
  function startPour(tea) {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "H\xE3y l\u1EA5y ly tr\u01B0\u1EDBc";
    if (b.tea && b.tea !== tea) return "Ly \u0111\xE3 r\xF3t lo\u1EA1i tr\xE0 kh\xE1c";
    if (b.fill >= 1.25) return "Ly \u0111\u1EA7y r\u1ED3i";
    const blk = blocked("pump");
    if (blk) return blk;
    if (!b.tea) {
      if (stockQty(tea) < 1) return `H\u1EBFt ${ITEMS[tea].name}!`;
      take(tea, 1);
      b.tea = tea;
    }
    b.pouring = true;
    emit("pour:start", tea);
    return null;
  }
  function stopPour() {
    const b = SH.board;
    if (!b || !b.pouring) return;
    b.pouring = false;
    emit("pour:stop");
  }
  function addFlavor(id) {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "H\xE3y l\u1EA5y ly tr\u01B0\u1EDBc";
    if (b.flavor) return "Ly \u0111\xE3 c\xF3 h\u01B0\u01A1ng";
    if (stockQty(id) < 1) return `H\u1EBFt ${ITEMS[id].name}!`;
    take(id, 1);
    b.flavor = id;
    emit("flavor", id);
    return null;
  }
  function addTop(id) {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "H\xE3y l\u1EA5y ly tr\u01B0\u1EDBc";
    if (b.tops.includes(id)) return "Ly \u0111\xE3 c\xF3 topping n\xE0y";
    if (b.tops.length >= 4) return "T\u1ED1i \u0111a 4 topping";
    if (stockQty(id) < 1) return `H\u1EBFt ${ITEMS[id].name}!`;
    take(id, 1);
    b.tops.push(id);
    emit("top", id);
    return null;
  }
  function sealCup() {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "Ch\u01B0a c\xF3 ly \u0111\u1EC3 \u0111\xF3ng n\u1EAFp";
    if (!b.tea || b.fill < 0.2) return "Ly ch\u01B0a c\xF3 tr\xE0";
    const blk = blocked("seal");
    if (blk) return blk;
    if (b.auto) return "Nh\xE2n vi\xEAn \u0111ang pha, h\xE3y \u0111\u1EE3i ho\xE0n t\u1EA5t";
    for (const [id, flag] of [["da", "iceAdded"], ["duong", "sugarAdded"]]) {
      if (!b[flag] && stockQty(id) < 1) return `H\u1EBFt ${ITEMS[id].name}, c\u1EA7n nh\u1EADp th\xEAm tr\u01B0\u1EDBc khi \u0111\xF3ng n\u1EAFp`;
    }
    if (b.pouring) stopPour();
    if (!b.iceAdded) addSupply("da");
    if (!b.sugarAdded) addSupply("duong");
    b.phase = "sealing";
    b.sealT = 1.2 * (1 - bonus().seal);
    b.sealMax = b.sealT;
    emit("seal:start");
    return null;
  }
  function addSupply(id) {
    const flag = id === "da" ? "iceAdded" : id === "duong" ? "sugarAdded" : null;
    if (!flag) return "Nguy\xEAn li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7";
    const b = SH.board;
    if (!b || b.phase !== "cup") return "H\xE3y l\u1EA5y ly tr\u01B0\u1EDBc";
    if (b[flag]) return `Ly \u0111\xE3 th\xEAm ${ITEMS[id].name}`;
    if (!take(id, 1)) return `H\u1EBFt ${ITEMS[id].name}!`;
    b[flag] = true;
    emit("staff:ingredient", id);
    return null;
  }
  function trashCup() {
    if (!SH.board) return;
    SH.board = null;
    S.today.waste += 3e3;
    emit("trash");
  }
  function evaluate(board, c) {
    const o = c.order;
    const issues = [];
    let stars = 5;
    if (board.tea !== o.tea) {
      stars -= 3;
      issues.push("sai lo\u1EA1i tr\xE0");
    }
    if (board.size !== o.size) {
      stars -= 2;
      issues.push("sai size");
    }
    if ((board.flavor || null) !== (o.flavor || null)) {
      stars -= 1;
      issues.push(board.flavor ? "th\u1EEBa/sai h\u01B0\u01A1ng" : "thi\u1EBFu h\u01B0\u01A1ng");
    }
    const miss = o.tops.filter((t) => !board.tops.includes(t)).length;
    const extra = board.tops.filter((t) => !o.tops.includes(t)).length;
    if (miss + extra) {
      stars -= Math.min(2, miss + extra);
      issues.push("sai topping");
    }
    if (board.fill < 0.75) {
      stars -= 1;
      issues.push("ly l\u01B0ng");
    }
    if (board.spill > 0) {
      stars -= 1;
      issues.push("r\xF3t tr\xE0n");
    }
    if (c.p / c.maxP < 0.2) {
      stars -= 1;
      issues.push("ch\u1EDD l\xE2u");
    }
    if (stars >= 4 && chance(clamp(c.hard * 0.5, 0, 0.5))) {
      stars -= 1;
      issues.push("kh\xE1ch kh\xF3 t\xEDnh");
    }
    return { stars: clamp(stars, 1, 5), issues };
  }
  var PAY = { 1: 0.3, 2: 0.55, 3: 0.8, 4: 1, 5: 1 };
  function serve(forced) {
    const b = SH.board;
    const c = (forced == null ? void 0 : forced.c) || frontCustomer();
    if (!c) return "Ch\u01B0a c\xF3 kh\xE1ch";
    const board = (forced == null ? void 0 : forced.board) || b;
    if (!board || board.phase !== "ready" && !forced) return "Ly ch\u01B0a \u0111\xF3ng n\u1EAFp xong";
    if (!forced) {
      const blk = blocked("serve");
      if (blk) return blk;
    }
    const ev = evaluate(board, c);
    const wrong = !forced && isWrongOrder(board, c);
    if (wrong) {
      const refuseP = clamp(0.3 + c.hard * 0.6 + (ev.stars <= 2 ? 0.2 : 0), 0.25, 0.85);
      if (chance(refuseP)) {
        SH.board = null;
        pushReview(c, 1, "Sai order r\u1ED3i, m\xECnh kh\xF4ng nh\u1EADn ly n\xE0y!");
        removeCust(c);
        SH.left++;
        S.today.left++;
        S.today.waste += 3e3;
        const out = { stars: 1, pay: 0, tip: 0, issues: ev.issues, luck: false, seat: null, cust: c, byStaff: false, refused: true };
        emit("served", out);
        markDirty("hud");
        requestSave();
        return out;
      }
    }
    const res = settle(c, board, ev.stars, ev.issues, !!forced, wrong);
    if (!forced) SH.board = null;
    return res;
  }
  function settle(c, board, stars, issues, byStaff, discount = false) {
    const bn = bonus();
    const unit = priceOf(board.tea) + (board.flavor ? priceOf(board.flavor) : 0) + sum(board.tops, (t) => priceOf(t)) + (board.size === "L" ? priceOf("sizeL") : 0);
    const arch = ARCHETYPES[c.key];
    const localBill = bn.billTeas[board.tea] || (S.location === "bmt" && board.tops.some((id) => id === "fCheese" || id === "tcDen") ? 0.2 : 0);
    let bill = unit * PAY[stars] * arch.bill * (1 + bn.bill + localBill);
    if (SH.hour >= 20) bill *= 1 + bn.lateBill;
    if (c.online) bill *= 1.15;
    if (discount) bill *= 0.7;
    let luck = false;
    if (chance(0.015 + bn.lucky * 0.1)) {
      bill *= 2;
      luck = true;
    }
    let tip = 0;
    if (stars >= 4) {
      const coldPen = ITEMS[board.tea].temp === "cold" ? bn.coldTip : 0;
      tip = bill * 0.12 * arch.tip * (stars === 5 ? 1.5 : 1) * Math.max(0, 1 + bn.tip + coldPen);
      if (byStaff && board.by === "phaChe") tip = 0;
    }
    let pay = Math.round(bill);
    tip = Math.round(tip);
    if (c.online) {
      const fee = Math.round(pay * APP_FEE);
      pay -= fee;
      S.today.online += pay + tip;
    }
    S.money += pay + tip;
    S.today.rev += pay;
    S.today.tips += tip;
    S.today.cups += 1;
    SH.rev += pay + tip;
    SH.tip += tip;
    SH.served++;
    SH.cupsDone++;
    pushReview(c, stars, null);
    S.followers += Math.round((stars >= 4 ? 3 : 0) + equipLevel("qcMxh") * 2);
    removeCust(c);
    let seat = null;
    if (!c.online && !byStaff && chance(0.4 + Math.max(0, equipLevel("banGhe") - 1) * 0.1)) {
      const free = SH.tables.findIndex((t) => t.s === "free");
      if (free >= 0) {
        SH.tables[free] = { s: "busy", t: rand(16, 28), av: c.avatar };
        seat = free;
        const extra = Math.round(bill * 0.1);
        S.money += extra;
        S.today.rev += extra;
        SH.rev += extra;
      }
    }
    const out = { stars, pay, tip, issues, luck, seat, cust: c, byStaff, discount };
    emit("served", out);
    markDirty("hud");
    requestSave();
    return out;
  }
  function cleanTable(i) {
    const t = SH.tables[i];
    if (!t || t.s !== "dirty") return false;
    SH.tables[i] = { s: "free", t: 0 };
    const tip = randInt(1, 3) * 1e3;
    S.money += tip;
    S.today.tips += tip;
    SH.tip += tip;
    SH.rev += tip;
    emit("table:clean", { i, tip });
    markDirty("hud");
    return true;
  }
  function spawnOnline() {
    const open = APPS.filter((a) => S.apps[a.id]);
    if (!open.length) return;
    SH.onlineQ.push({ id: cid++, app: pick(open), exp: 22, o: makeOrder() });
    emit("online:new");
  }
  function acceptOnline(id) {
    const q = SH.onlineQ.find((x) => x.id === id);
    if (!q) return "\u0110\u01A1n \u0111\xE3 h\u1EBFt h\u1EA1n";
    if (SH.queue.length >= bonus().queue + 2) return "H\xE0ng ch\u1EDD \u0111\xE3 \u0111\u1EA7y";
    SH.onlineQ = SH.onlineQ.filter((x) => x !== q);
    const c = newCustomer({ online: true, app: q.app });
    c.order = q.o;
    c.avatar = "\u{1F4F1}";
    c.tag = `\u{1F4F1} ${q.app.name}`;
    c.text = `\u0110\u01A1n ${q.app.name}: ${ITEMS[q.o.tea].name} size ${q.o.size}${q.o.flavor ? " v\u1ECB " + ITEMS[q.o.flavor].name.toLowerCase() : ""}${q.o.tops.length ? " + " + q.o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(", ") : ""}. Giao nhanh gi\xFAp nh\xE9!`;
    SH.queue.push(c);
    emit("queue");
    return null;
  }
  function staffStep(dt) {
    const b = bonus();
    const speedMul = 1 / (1 + b.speedStaff) * (S.staff.meKetTinh ? 0.8 : 1);
    for (const st of STAFF) {
      if (!S.staff[st.id]) continue;
      if (st.kind === "marketing") {
        if (!taxActive() && S.money > 0) payTax();
        SH.staffT[st.id] = (SH.staffT[st.id] || 0) - dt;
        if (SH.staffT[st.id] <= 0) {
          SH.staffT[st.id] = 20;
          if (!recordVideo()) {
            S.followers += randInt(1500, 6e3);
            S.social.posts.unshift(genPost());
            S.social.posts = S.social.posts.slice(0, 10);
            markDirty("panel", "hud");
            requestSave();
          }
        }
      } else if (st.kind === "auto" || st.kind === "online" || st.kind === "night") {
        const key = st.id;
        if (blocked("pump") || blocked("seal")) continue;
        if (st.kind === "online" && onlineEnabled() && SH.onlineQ.length) acceptOnline(SH.onlineQ[0].id);
        const runtime = SH.staffT[key] || (SH.staffT[key] = { done: 0, sulk: 0 });
        if (runtime.sulk > 0) {
          runtime.sulk -= dt;
          if (runtime.sulk <= 0) {
            fire(key);
            emit("staff:quit", st);
          }
          continue;
        }
        if (st.kind === "night" && !(SH.hour >= 22 || SH.hour < 6)) continue;
        const busy = SH.jobs.find((j) => j.by === key);
        if (busy) {
          busy.t -= dt;
          if (busy.t <= 0) {
            finishJob(busy, st, b);
            SH.jobs = SH.jobs.filter((j) => j !== busy);
          }
          continue;
        }
        const free = SH.queue.filter((c) => !SH.jobs.some((j) => j.cid === c.id));
        const front = frontCustomer();
        let cand = null;
        if (st.kind === "online") cand = free.find((c) => c.online);
        else if (SH.queue.length >= (st.minQueue || 1)) cand = free.filter((c) => {
          var _a, _b, _c;
          return !c.online && !(SH.board && c.id === ((_c = (_b = SH.board.cid) != null ? _b : (_a = SH.board.auto) == null ? void 0 : _a.cid) != null ? _c : front == null ? void 0 : front.id));
        }).sort((x, y) => x.p - y.p)[0];
        if (cand) {
          const need = needs(cand.order);
          if (!canTake(need)) continue;
          const steps = key === "genZ" ? ["cup", "pour", ...cand.order.flavor ? ["flavor"] : [], "sugar", "ice", ...cand.order.tops.map((id) => "top:" + id), "seal", "serve"] : null;
          const total = st.sec * speedMul / (1 + Math.min(0.1, (S.staff[key].shifts || 0) * 5e-3)) * ((steps == null ? void 0 : steps.length) || 1);
          SH.jobs.push({ by: key, cid: cand.id, t: total, total, steps });
          if (key === "genZ") emit("staff:job", { cid: cand.id, by: key });
          for (const [id, n] of need) take(id, n);
        }
      } else if (st.kind === "buyer") {
        SH.buyT += dt;
        if (SH.buyT >= 4) {
          SH.buyT = 0;
          const want = [...TEAS.filter((t) => S.onMenu[t]), ...FLAVORS.filter((t) => S.onMenu[t] && S.unlocked[t]), ...TOPS.filter((t) => S.onMenu[t]), "lyM", "lyL", "da", "duong"];
          for (const id of want) {
            if (stockQty(id) === 0) {
              const q = 8, cost = Math.round(unitCost(id) * q * 1.1);
              if (S.money >= cost) {
                S.money -= cost;
                S.today.purchase += cost;
                addStock(id, q);
                emit("buyer", id);
                markDirty("hud");
                break;
              }
            }
          }
        }
      }
    }
  }
  var needs = (o) => [[o.size === "L" ? "lyL" : "lyM", 1], [o.tea, 1], ...o.flavor ? [[o.flavor, 1]] : [], ...o.tops.map((t) => [t, 1]), ["da", 1], ["duong", 1]];
  var canTake = (list) => list.every(([id, n]) => stockQty(id) >= n);
  function staffJobPreview(job, customer) {
    var _a;
    if (!job || !customer) return null;
    const o = customer.order;
    const steps = job.steps || ["cup", "pour", ...o.flavor ? ["flavor"] : [], "sugar", "ice", ...o.tops.map((id) => "top:" + id), "seal", "serve"];
    const total = Math.max(1e-3, job.total || ((_a = STAFF.find((st) => st.id === job.by)) == null ? void 0 : _a.sec) || 1);
    const progress = clamp(1 - job.t / total, 0, 1);
    const index = Math.min(steps.length - 1, Math.floor(progress * steps.length));
    const step = steps[index], local = progress * steps.length - index;
    const done = steps.slice(0, index);
    const labels = { cup: "L\u1EA5y c\u1ED1c " + o.size, pour: "R\xF3t " + ITEMS[o.tea].name, flavor: o.flavor ? "Th\xEAm h\u01B0\u01A1ng " + ITEMS[o.flavor].name : "Th\xEAm h\u01B0\u01A1ng", sugar: "Th\xEAm \u0111\u01B0\u1EDDng", ice: "Th\xEAm \u0111\xE1", seal: "\u0110\xF3ng n\u1EAFp", serve: "Giao ly cho kh\xE1ch" };
    const tops = done.filter((s) => s.startsWith("top:")).map((s) => s.slice(4));
    if (step.startsWith("top:") && local >= 0.5) tops.push(step.slice(4));
    const cup2 = { size: o.size, tea: index > 0 ? o.tea : null, fill: step === "pour" ? local * 0.95 : index > 1 ? 0.95 : 0, flavor: done.includes("flavor") || step === "flavor" && local >= 0.5 ? o.flavor : null, tops, iceAdded: done.includes("ice") || step === "ice" && local >= 0.5, sugarAdded: done.includes("sugar") || step === "sugar" && local >= 0.5, phase: step === "seal" ? "sealing" : step === "serve" ? "ready" : "cup", sealMax: total / steps.length };
    return { cup: cup2, step, index, count: steps.length, progress, label: labels[step] || "Th\xEAm " + ITEMS[step.slice(4)].name };
  }
  function finishJob(job, st, b) {
    const c = SH.queue.find((x) => x.id === job.cid);
    if (!c) return;
    const err = clamp(st.err * (1 - b.errReduce), 0, 1);
    const board = { tea: c.order.tea, size: c.order.size, flavor: c.order.flavor, tops: [...c.order.tops], fill: 1, spill: 0, phase: "ready" };
    let forceStars = null;
    if (st.kind === "online" && chance(err)) {
      emit("staff:retry", st);
      return;
    }
    if (st.kind !== "online" && chance(err)) {
      board.size = board.size === "M" ? "L" : "M";
      forceStars = 3;
    }
    const result = serveStaff(c, board, forceStars, st);
    const runtime = SH.staffT[st.id];
    if (runtime && typeof runtime === "object") {
      runtime.done++;
      if (st.id === "genZ" && runtime.done % 100 === 0) runtime.sulk = 10;
    }
    if (st.id === "genZ" && !S.staff.chuBa && runtime && !runtime.billTaken) {
      runtime.billTaken = true;
      runtime.hiddenBill = result.pay;
      S.money -= result.pay;
      S.today.rev -= result.pay;
      SH.rev -= result.pay;
      emit("staff:bill", st);
      markDirty("hud");
      requestSave();
    }
  }
  function serveStaff(c, board, forceStars, st) {
    board.by = st.id;
    const ev = evaluate(board, c);
    return settle(c, board, forceStars ? Math.min(forceStars, ev.stars) : Math.min(ev.stars, 5), ev.issues, true);
  }
  var counterAssistant = () => STAFF.find((s) => S.staff[s.id] && s.kind === "manager") || STAFF.find((s) => S.staff[s.id] && s.kind === "pour");
  function advanceCounterStaff(bd, dt, bonus2) {
    var _a;
    if (bd.phase !== "cup") {
      bd.auto = null;
      return;
    }
    if (!bd.auto && !bd.autoDone) {
      const st2 = counterAssistant();
      const c2 = SH.queue.find((c3) => c3.id === bd.cid) || frontCustomer();
      if (st2 && c2) bd.auto = { cid: c2.id, t: 0.6, st: st2, topsLeft: st2.kind === "manager" ? [...c2.order.tops] : [] };
    }
    const a = bd.auto;
    if (!a) return;
    const c = SH.queue.find((c2) => c2.id === a.cid);
    const st = STAFF.find((s) => {
      var _a2;
      return s.id === ((_a2 = a.st) == null ? void 0 : _a2.id);
    });
    if (!c || !st || !S.staff[st.id] || !["pour", "manager"].includes(st.kind)) {
      if (bd.pouring) stopPour();
      bd.auto = null;
      bd.autoDone = true;
      return;
    }
    a.st = st;
    if (st.kind !== "manager") a.topsLeft = [];
    a.stage = a.stage || "tea";
    if (a.stage === "tea" && blocked("pump")) {
      bd.pouring = false;
      return;
    }
    a.t -= dt;
    if (a.stage === "pour") {
      if (blocked("pump")) {
        bd.pouring = false;
        return;
      }
      if (bd.fill < a.target) {
        bd.pouring = true;
        return;
      }
      stopPour();
      a.stage = "flavor";
      a.t = 0.45;
    }
    if (a.t > 0) return;
    const takeOnce = (id, flag) => {
      if (bd[flag]) return true;
      if (stockQty(id) < 1) {
        a.waiting = ITEMS[id].name;
        return false;
      }
      const err = addSupply(id);
      if (err) {
        a.waiting = err;
        return false;
      }
      a.waiting = null;
      return true;
    };
    if (a.stage === "tea") {
      if (!bd.tea) {
        const err = startPour(c.order.tea);
        if (err) {
          a.waiting = err;
          return;
        }
      }
      a.target = chance(a.st.err * (1 - bonus2.errReduce)) ? 0.6 : 0.95;
      a.stage = "pour";
      bd.pouring = true;
      a.waiting = null;
    } else if (a.stage === "flavor") {
      if (c.order.flavor && !bd.flavor) {
        const err = addFlavor(c.order.flavor);
        if (err) {
          a.waiting = err;
          return;
        }
        emit("staff:flavor", c.order.flavor);
      }
      a.stage = "sugar";
      a.t = 0.45;
    } else if (a.stage === "sugar") {
      if (!takeOnce("duong", "sugarAdded")) return;
      a.stage = "ice";
      a.t = 0.45;
    } else if (a.stage === "ice") {
      if (!takeOnce("da", "iceAdded")) return;
      a.stage = "topping";
      a.t = 0.45;
    } else if (a.stage === "topping") {
      const id = st.kind === "manager" ? (_a = a.topsLeft) == null ? void 0 : _a[0] : null;
      if (id) {
        if (!bd.tops.includes(id)) {
          const err = addTop(id);
          if (err) {
            a.waiting = err;
            return;
          }
          emit("staff:top", { id, staff: st.id });
        }
        a.topsLeft.shift();
        a.t = 0.45;
      } else {
        bd.auto = null;
        bd.autoDone = true;
        emit("auto:pour");
      }
    }
  }
  function comfortStaff(id) {
    const runtime = SH.staffT[id];
    if (!runtime || typeof runtime !== "object" || !(runtime.sulk > 0) && !(runtime.hiddenBill > 0)) return false;
    if (runtime.hiddenBill > 0) {
      S.money += runtime.hiddenBill;
      S.today.rev += runtime.hiddenBill;
      SH.rev += runtime.hiddenBill;
      runtime.hiddenBill = 0;
      markDirty("hud");
      requestSave();
    }
    runtime.sulk = 0;
    emit("staff:comfort", id);
    return true;
  }
  function updateShift(dt) {
    if (!SH.on || S.phase !== "sell") return;
    SH.t += dt;
    SH.hour = SH.t <= SH.total ? SHIFT_START_H + SH.t / SH.total * (SHIFT_END_H - SHIFT_START_H) : (22 + Math.min(8, (SH.t - SH.total) / 22 * 8)) % 24;
    update(dt);
    const b = bonus();
    const maxQ = b.queue;
    while (SH.pi < SH.plan.length && SH.t >= SH.plan[SH.pi] && SH.t < SH.total) {
      SH.pi++;
      if (SH.queue.length >= maxQ) {
        SH.left++;
        S.today.left++;
        emit("balk");
        continue;
      }
      SH.queue.push(newCustomer());
      emit("queue");
      emit("ding");
    }
    if (SH.critic && !SH.critic.done && SH.t >= SH.critic.at && SH.queue.length < maxQ) {
      SH.critic.done = true;
      SH.queue.push(newCustomer({ reviewer: true }));
      emit("queue");
    }
    if (S.settings && onlineEnabled() && SH.t < SH.total * 0.95) {
      SH.onlineNext -= dt;
      if (SH.onlineNext <= 0) {
        SH.onlineNext = rand(16, 34) / Math.max(0.3, 1 + b.online);
        spawnOnline();
      }
    }
    for (const q of SH.onlineQ) q.exp -= dt;
    const before = SH.onlineQ.length;
    SH.onlineQ = SH.onlineQ.filter((q) => q.exp > 0);
    if (before !== SH.onlineQ.length) emit("online:new");
    for (const c of [...SH.queue]) {
      if (SH.jobs.some((j) => j.cid === c.id)) {
        c.p -= dt * 0.4;
      } else c.p -= dt;
      if (c.p <= 0) customerLeaves(c, "patience");
    }
    const bd = SH.board;
    if (bd) {
      if (bd.pouring && !blocked("pump")) {
        const rate = 0.55 * (1 + b.pour + b.speedStaff);
        bd.fill += rate * dt;
        if (bd.fill > 1) {
          bd.spill += (bd.fill - 1) * 0.5 * (equipLevel("binhRot") >= 3 ? 0.5 : 1);
        }
        if (bd.fill >= 1.25) {
          bd.fill = 1.25;
          bd.pouring = false;
          emit("pour:stop");
        }
      }
      if (bd.phase === "sealing" && !blocked("seal")) {
        bd.sealT -= dt;
        if (bd.sealT <= 0) {
          bd.phase = "ready";
          emit("seal:done");
        }
      }
      advanceCounterStaff(bd, dt, b);
    }
    for (let i = 0; i < SH.tables.length; i++) {
      const t = SH.tables[i];
      if (t.s === "busy") {
        t.t -= dt;
        if (t.t <= 0) {
          SH.tables[i] = { s: "dirty", t: 0 };
          emit("tables");
        }
      }
    }
    if (!halted()) staffStep(dt);
    if (SH.t >= SH.total) {
      SH.over += dt;
      if (SH.queue.length === 0 || SH.over > 22) finishShift(false);
    }
  }
  function closeNow() {
    if (!SH.on) return;
    SH.queue.forEach((c) => {
      SH.left++;
      S.today.left++;
    });
    SH.queue = [];
    finishShift(true);
  }
  function branchDaily() {
    const bn = bonus();
    let net = 0, rev = 0;
    for (const [id, br] of Object.entries(S.branches)) {
      const def = BRANCHES.find((x) => x.id === id);
      if (!def) continue;
      const adB = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id).branch : 0;
      const r = rand(def.rev[0], def.rev[1]) * (0.8 + S.rating * 0.05) * (1 + bn.branch + adB) * (1 + 0.1 * (br.staff || 0));
      const ing = r * rand(def.ing[0], def.ing[1]);
      const wage = (br.staff || 0) * 15e4;
      const p = r - ing - wage - def.rent;
      br.profit = p;
      br.rev = (br.rev || 0) + r;
      br.days = (br.days || 0) + 1;
      br.last = { r, ing, wage, rent: def.rent, p };
      net += p;
      rev += r;
    }
    return { net, rev };
  }
  function franchiseDaily() {
    const n = S.franchise.count;
    if (!n) return 0;
    const bn = bonus();
    const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id) : null;
    return Math.round(sum(Array.from({ length: n }), () => rand(FRANCHISE.revRange[0], FRANCHISE.revRange[1]) * FRANCHISE.royalty * (1 + bn.branch + (ad ? ad.branch : 0))));
  }
  function finishShift(early) {
    if (SH.fin) return;
    SH.fin = true;
    SH.on = false;
    const T = S.today;
    const ex = expireStock();
    T.rent = rentToday();
    T.util = utilityToday();
    const nightWorked = SH.staffT.svDem && SH.staffT.svDem.done > 0;
    T.wage = staffWagePerDay() - (S.staff.svDem && !nightWorked ? STAFF.find((s) => s.id === "svDem").wage : 0) + (S.staff.chuBa ? Math.round(T.rev * 0.01) : 0) + (S.staff.phaChe ? Math.round(Math.min(8, SH.over / 22 * 8) * 4e4) : 0);
    S.kpi.payable = (S.kpi.payable || 0) + T.wage;
    const br = branchDaily();
    T.branch = Math.round(br.net);
    T.fran = franchiseDaily();
    let interest = 0;
    if (S.bank.balance > 0) {
      const rate = BANK.interest * (1 + (S.rating >= 4.5 ? BANK.starBonus : 0) + (S.bank.balance > 1e9 ? BANK.bigBonus : 0));
      interest = Math.min(BANK.max - S.bank.balance, Math.round(S.bank.balance * rate));
      S.bank.balance += interest;
      S.bank.shifts++;
    }
    T.interest = interest;
    T.payrollCash = S.kpi.shifts + 1 >= 7 ? Math.min(Math.max(0, S.money + T.branch + T.fran - T.rent - T.util), S.kpi.payable) : 0;
    S.kpi.payable -= T.payrollCash;
    S.money = Math.max(0, S.money - T.rent - T.util - T.payrollCash + T.branch + T.fran);
    T.profit = T.rev + T.tips - T.cogs - T.rent - T.util - T.wage - T.tax - (T.fine || 0) + T.branch + T.fran + T.interest;
    T.avgStars = T.stars.length ? sum(T.stars) / T.stars.length : 0;
    T.expired = ex.list;
    T.expiredCost = Math.round(ex.waste);
    T.cash = S.money;
    T.event = S.eventId;
    T.weather = S.weather;
    S.history.push({ day: S.day, rev: T.rev + T.tips, cogs: T.cogs, rent: T.rent, util: T.util, wage: T.wage, payrollCash: T.payrollCash, fine: T.fine || 0, tax: T.tax, branch: T.branch, fran: T.fran, interest, profit: T.profit, cups: T.cups, left: T.left, stars: T.avgStars, online: T.online, event: S.eventId });
    if (S.history.length > 400) S.history.shift();
    S.kpi.shifts++;
    for (const k of Object.keys(S.staff)) S.staff[k].shifts = (S.staff[k].shifts || 0) + 1;
    S.phase = "end";
    S.last = { early };
    saveBackup();
    saveGame();
    markDirty("view", "hud");
    emit("shift:end", T);
  }
  function nextDay() {
    S.previousUsed = { ...S.lastUsed };
    for (const lots of Object.values(S.stock)) for (const lot of lots) {
      if (!Number.isFinite(lot.receivedDay)) lot.receivedDay = S.day;
    }
    S.day++;
    ensureForecast();
    S.eventId = pickEvent();
    S.today = freshToday();
    S.lastUsed = {};
    S.social.videosToday = 0;
    S.social.videoBuff = 0;
    S.social.videoDay = S.day;
    const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id) : null;
    if (ad) {
      for (let i = 0; i < ad.posts; i++) S.social.posts.unshift(genPost());
      S.social.posts = S.social.posts.slice(0, 10);
    }
    S.pearl.playsDay = 0;
    S.crush.playedToday = false;
    const g = S.garden;
    for (const p of g.plots) if (p.seed) {
      if (g.watered) p.grown++;
    }
    g.watered = false;
    for (const pet of [S.pet, S.pet2].filter(Boolean)) {
      const decay = (k, v) => {
        var _a;
        return Math.max(0, ((_a = pet[k]) != null ? _a : 80) - v);
      };
      const d = (id, f) => S.petDecor[id] ? f : 1;
      pet.hunger = decay("hunger", 25 * d("bat", 0.8));
      pet.joy = decay("joy", 15 * d("xit", 0.75));
      pet.clean = decay("clean", 12 * d("say", 0.75));
      pet.energy = decay("energy", 20 * d("sofa", 0.75));
    }
    if (S.kpi.shifts >= 7) {
      S.kpi.shifts = 0;
      emit("kpi:cycle");
    }
    S.phase = "home";
    S.plan = {};
    Object.assign(SH, { on: false, fin: false });
    markDirty("view", "hud", "panel", "cta");
    emit("day:next");
    saveGame();
  }
  function resetShiftRuntime() {
    Object.assign(SH, { on: false, fin: false });
    restoreShiftRuntime();
  }
  function genPost() {
    const t = pick(FEED_POSTS), a = pick(FEED_AUTHORS);
    return { ...t, author: a, day: S.day, views: randInt(20, 180) + "K", likes: randInt(2, 20) + "K" };
  }

  // js/counter-pets.js
  var reaction = null;
  on("served", (r) => {
    reaction = { mood: r.stars >= 4 ? "excited" : "sad", until: performance.now() + 2400 };
  });
  on("ding", () => {
    reaction = { mood: "excited", until: performance.now() + 1600 };
  });
  on("left", () => {
    reaction = { mood: "sad", until: performance.now() + 1600 };
  });
  var ownedPets = () => [S.pet, S.pet2].filter((p) => p && PETS[p.kind]);
  function refreshCounterPets() {
    const root2 = $("#sell");
    if (!root2) return;
    const pets = ownedPets();
    let layer2 = $(".counter-pets", root2);
    root2.classList.toggle("has-counter-pets", pets.length > 0);
    const width = `${pets.length * 44 + 4}px`;
    if (root2.style.getPropertyValue("--pets-width") !== width) root2.style.setProperty("--pets-width", width);
    if (!pets.length) {
      layer2 == null ? void 0 : layer2.remove();
      return;
    }
    if (!layer2) {
      layer2 = h('<div class="counter-pets" aria-label="Th\xFA c\u01B0ng c\u1EE7a ti\u1EC7m"></div>');
      root2.appendChild(layer2);
      bindActions(layer2, { pet: (t) => openPetCare(t.dataset.kind) });
    }
    const states = pets.map((p) => {
      const mood = petMood(p);
      return { p, mood: !["hungry", "dirty", "sleepy"].includes(mood) && (reaction == null ? void 0 : reaction.until) > performance.now() ? reaction.mood : mood };
    });
    const signature = states.map(({ p, mood }) => p.kind + ":" + mood).join("|");
    if (layer2.dataset.signature === signature) return;
    layer2.dataset.signature = signature;
    layer2.innerHTML = states.map(({ p, mood }) => `<button class="counter-pet" data-act="pet" data-kind="${p.kind}" data-mood="${mood}" aria-label="${esc(PETS[p.kind].name)}: ${PET_MOODS[mood]}. Ch\u1EA1m \u0111\u1EC3 ch\u0103m s\xF3c" title="${esc(PETS[p.kind].name)} \xB7 ${PET_MOODS[mood]}">${petArt(p.kind, mood)}<small>${PET_MOODS[mood]}</small></button>`).join("");
  }
  function openPetCare(kind) {
    const pet = ownedPets().find((p) => p.kind === kind);
    if (!pet) return;
    const modal = openModal({ id: "counter-pet-care", cls: "small", title: "Ch\u0103m s\xF3c th\xFA c\u01B0ng" });
    const paint2 = () => {
      const mood = petMood(pet);
      modal.body.innerHTML = `<h3 class="m-title">${esc(PETS[kind].name)}</h3><div class="pet-care-portrait" data-mood="${mood}">${petArt(kind, mood)}</div><p class="center">${PET_MOODS[mood]}</p><div class="counter-pet-stats">${[["hunger", "No"], ["joy", "Vui"], ["clean", "S\u1EA1ch"], ["energy", "Kh\u1ECFe"]].map(([key, label]) => {
        var _a;
        return `<span>${label}: <b>${Math.round((_a = pet[key]) != null ? _a : 80)}/100</b></span>`;
      }).join("")}</div><div class="pcare">${PET_CARE.map((c) => `<button class="btn soft" data-act="care" data-id="${c.id}">${c.icon} ${c.name}<small>${c.cost ? fmtK(c.cost) : "Mi\u1EC5n ph\xED"}</small></button>`).join("")}</div>`;
    };
    paint2();
    bindActions(modal.body, { care: (t) => {
      const error = carePet(t.dataset.id, kind);
      if (error) return toast(error, "err");
      reaction = null;
      sfx("pop");
      paint2();
      refreshCounterPets();
    } });
  }

  // js/scenes.js
  var W = 390;
  var H = 200;
  var cloud = (x, y, s = 1, o = 0.9) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#fff" opacity="${o}"><ellipse cx="0" cy="0" rx="15" ry="6"/><ellipse cx="-10" cy="2" rx="10" ry="5"/><ellipse cx="12" cy="2" rx="11" ry="5"/></g>`;
  var palm = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q3 -22 -2 -40" stroke="#8a5a34" stroke-width="3.2" fill="none" stroke-linecap="round"/><g fill="#3f9a4f"><path d="M-2 -40 Q-18 -48 -26 -38 Q-12 -42 -2 -40Z"/><path d="M-2 -40 Q14 -52 26 -40 Q12 -44 -2 -40Z"/><path d="M-2 -40 Q-10 -58 -22 -56 Q-10 -50 -2 -40Z"/><path d="M-2 -40 Q8 -60 20 -56 Q8 -50 -2 -40Z"/><path d="M-2 -40 Q-2 -56 -3 -62 Q4 -52 -2 -40Z"/></g></g>`;
  var tree = (x, y, s = 1, c = "#4a9a55") => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-2" y="-14" width="4" height="14" fill="#7a5230"/><circle cx="0" cy="-22" r="12" fill="${c}"/><circle cx="-8" cy="-16" r="8" fill="${c}"/><circle cx="8" cy="-16" r="8" fill="${c}"/></g>`;
  var SCENES = {
    // Tiệm gốc: đồi xanh, nhà tranh, cây trà
    goc: () => `
    <path d="M0 150 Q70 110 150 140 T300 130 T390 140 V200 H0Z" fill="#9fd48a"/>
    <path d="M0 170 Q90 140 200 165 T390 160 V200 H0Z" fill="#7fc070"/>
    <g transform="translate(250 128)"><rect x="-26" y="0" width="52" height="32" fill="#f2d9a8"/><polygon points="-32,2 0,-26 32,2" fill="#b5663a"/><rect x="-6" y="12" width="12" height="20" fill="#8a5a34"/><rect x="-20" y="10" width="9" height="9" fill="#9bd6ee"/><rect x="11" y="10" width="9" height="9" fill="#9bd6ee"/></g>
    ${tree(60, 150, 1.1)}${tree(110, 156, 0.8, "#5aa860")}${tree(335, 150, 1)}
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
    ${cloud(60, 34)}${cloud(310, 26, 0.8)}`,
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
    ${cloud(180, 30, 0.9)}${cloud(40, 50, 0.7)}`,
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
    ${cloud(260, 36)}${cloud(50, 40, 0.8)}`,
    // Đà Nẵng: Cầu Rồng, Cầu Vàng (Bà Nà), bãi biển Mỹ Khê, bánh xe Sun Wheel
    danang: () => `
    <path d="M200 160 L250 90 Q290 60 330 84 L390 160Z" fill="#4f8a68"/><path d="M260 160 L300 110 Q340 90 390 130 V160Z" fill="#5a9a74"/>
    <g><path d="M300 116 Q330 82 362 116" stroke="#e7b64a" stroke-width="4" fill="none"/><g stroke="#e7b64a" stroke-width="1.4"><path d="M310 106v10M320 99v17M330 95v21M340 97v19M350 104v12"/></g>
    <path d="M288 128 q-8 -14 4 -22 l8 4 -2 18z" fill="#a89a88"/><path d="M372 128 q8 -14 -4 -22 l-8 4 2 18z" fill="#a89a88"/></g>
    <rect y="160" width="390" height="40" fill="#6fc0d4"/><g stroke="#fff" opacity=".45" stroke-width="1.3" fill="none"><path d="M10 172 q8 -4 16 0 t16 0"/><path d="M130 182 q8 -4 16 0 t16 0"/><path d="M250 174 q8 -4 16 0 t16 0"/></g>
    <g><path d="M70 150 Q130 100 190 150" stroke="#f2a83a" stroke-width="5" fill="none"/><path d="M82 150 Q130 112 178 150" stroke="#e8923a" stroke-width="3" fill="none"/><g stroke="#f2a83a" stroke-width="2"><path d="M90 140v14M105 126v28M120 118v36M135 116v38M150 120v34M165 130v24M178 142v12"/></g><rect x="60" y="148" width="140" height="8" fill="#d9c6a0"/>
    <path d="M62 150 q-20 -6 -22 -22 q4 -10 14 -8 q10 4 14 14z" fill="#5fb85a"/><circle cx="48" cy="124" r="2.4" fill="#fff"/><path d="M42 118 l6 -10 l6 10" fill="none" stroke="#e7d24a" stroke-width="2"/></g>
    <g transform="translate(28 118)"><circle r="20" fill="none" stroke="#e8e8f0" stroke-width="2.4"/><g stroke="#e8e8f0" stroke-width="1.2"><path d="M-20 0h40M0 -20v40M-14 -14l28 28M14 -14l-28 28"/></g><g fill="#f5c542"><circle cx="-20" cy="0" r="2.4"/><circle cx="20" cy="0" r="2.4"/><circle cx="0" cy="-20" r="2.4"/><circle cx="0" cy="20" r="2.4"/></g><rect x="-2" y="20" width="4" height="22" fill="#cfcfe0"/></g>
    ${palm(335, 172, 1.1)}${palm(362, 176, 0.9)}${cloud(200, 34)}${cloud(80, 50, 0.7)}`,
    // Sa Pa: Fansipan, ruộng bậc thang, nhà sàn, sương mù
    sapa: () => `
    <polygon points="0,150 70,60 120,110 170,40 240,130 300,70 390,150" fill="#7c93b8"/><polygon points="170,40 150,70 162,68 170,76 180,68 192,72" fill="#fff"/><polygon points="70,60 58,80 68,78 74,84 82,78" fill="#fff"/><polygon points="300,70 288,90 298,88 304,94 312,88" fill="#fff"/>
    <polygon points="0,170 90,100 160,150 250,96 330,150 390,120 390,200 0,200" fill="#5f8f6a"/>
    <path d="M0 162 Q100 134 200 156 T390 150 V200 H0Z" fill="#8cc760"/><path d="M0 172 Q120 148 220 168 T390 164 V200 H0Z" fill="#b7d86a"/><path d="M0 184 Q130 164 230 182 T390 178 V200 H0Z" fill="#dcc95a"/><path d="M0 194 Q140 180 240 194 T390 192 V200 H0Z" fill="#8cc760"/>
    <g stroke="#6a8a3a" stroke-width="1" fill="none" opacity=".6"><path d="M0 162 Q100 134 200 156 T390 150"/><path d="M0 172 Q120 148 220 168 T390 164"/><path d="M0 184 Q130 164 230 182 T390 178"/></g>
    <g transform="translate(300 150)"><rect x="-16" y="0" width="32" height="18" fill="#a8764a"/><polygon points="-22,2 0,-16 22,2" fill="#4a6a9a"/><rect x="-4" y="6" width="8" height="12" fill="#6a4426"/><g stroke="#6a4426" stroke-width="2"><path d="M-14 18v8M14 18v8"/></g></g>
    <g fill="#fff" opacity=".55"><ellipse cx="90" cy="128" rx="60" ry="8"/><ellipse cx="270" cy="140" rx="70" ry="9"/><ellipse cx="170" cy="112" rx="50" ry="6"/></g>${cloud(330, 36, 0.8)}`,
    // Hạ Long: vịnh đá vôi, thuyền buồm
    halong: () => `
    <rect y="130" width="390" height="70" fill="#4fb3b8"/><g stroke="#fff" opacity=".4" stroke-width="1.3" fill="none"><path d="M10 150 q8 -4 16 0 t16 0"/><path d="M210 160 q8 -4 16 0 t16 0"/><path d="M110 176 q8 -4 16 0 t16 0"/><path d="M300 150 q8 -4 16 0 t16 0"/></g>
    <g fill="#5d8f78"><path d="M10 138 Q16 96 34 104 Q48 70 62 100 Q80 92 86 138Z"/><path d="M120 138 Q128 80 146 92 Q160 58 176 96 Q194 90 202 138Z"/><path d="M250 138 Q258 98 274 106 Q290 76 304 104 Q324 98 330 138Z"/></g>
    <g fill="#7fb092"><path d="M34 104 Q48 70 62 100 Q50 92 34 104Z"/><path d="M146 92 Q160 58 176 96 Q160 84 146 92Z"/><path d="M274 106 Q290 76 304 104 Q290 94 274 106Z"/></g>
    <g fill="#4a7a66"><path d="M320 138 Q326 114 340 118 Q352 100 362 120 Q376 118 380 138Z"/><path d="M90 138 Q96 118 108 120 Q116 108 124 124 Q134 124 138 138Z"/></g>
    <g class="sc-boat" transform="translate(190 168)"><path d="M-34 0 Q0 16 38 -2 L30 -8 L-28 -8Z" fill="#7a4a2a"/><g fill="#c2552c"><path d="M-16 -8 L-10 -50 L10 -44 L6 -8Z"/><path d="M6 -8 L12 -40 L30 -34 L24 -8Z"/></g><g stroke="#4a2a14" stroke-width="1.6"><path d="M-8 -52 v44M14 -42 v34"/></g></g>
    ${cloud(60, 40)}${cloud(300, 30, 0.9)}`,
    // Buôn Ma Thuột: đồi cà phê, nhà dài Ê Đê, voi
    bmt: () => `
    <path d="M0 140 Q80 90 170 130 T330 110 T390 130 V200 H0Z" fill="#7fb25a"/><g stroke="#5a8a3f" stroke-width="2" opacity=".6" fill="none"><path d="M0 150 Q80 104 170 140"/><path d="M0 162 Q80 118 170 152"/><path d="M180 140 Q260 104 330 126"/><path d="M180 152 Q260 118 340 138"/></g>
    <path d="M0 176 Q120 150 240 172 T390 166 V200 H0Z" fill="#5f9a46"/>
    <g><path d="M96 138 Q170 108 244 138 L236 162 H104Z" fill="#a8744a"/><path d="M84 140 Q170 96 256 140 Q170 116 84 140Z" fill="#7a5230"/><g fill="#5a3a22"><rect x="112" y="150" width="6" height="22"/><rect x="146" y="150" width="6" height="22"/><rect x="186" y="150" width="6" height="22"/><rect x="224" y="150" width="6" height="22"/></g><g fill="#3a2414"><rect x="120" y="128" width="14" height="10" rx="2"/><rect x="156" y="124" width="14" height="10" rx="2"/><rect x="196" y="124" width="14" height="10" rx="2"/></g></g>
    <g transform="translate(332 160) scale(1.1)"><ellipse cx="0" cy="-10" rx="22" ry="14" fill="#8a8a96"/><circle cx="-22" cy="-14" r="9" fill="#8a8a96"/><path d="M-30 -10 q-8 10 -4 22" stroke="#8a8a96" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="-14" cy="-16" rx="6" ry="9" fill="#9a9aa6"/><g fill="#7a7a86"><rect x="-14" y="-2" width="7" height="14"/><rect x="2" y="-2" width="7" height="14"/><rect x="12" y="-2" width="7" height="14"/></g></g>
    <g><g transform="translate(34 160)"><rect x="-1.5" y="-12" width="3" height="12" fill="#6a4426"/><circle cx="0" cy="-20" r="13" fill="#2f7d3a"/><g fill="#d8392b"><circle cx="-6" cy="-20" r="2"/><circle cx="3" cy="-14" r="2"/><circle cx="6" cy="-24" r="2"/><circle cx="-2" cy="-26" r="2"/></g></g><g transform="translate(66 168) scale(.8)"><rect x="-1.5" y="-12" width="3" height="12" fill="#6a4426"/><circle cx="0" cy="-20" r="13" fill="#2f7d3a"/><g fill="#d8392b"><circle cx="-6" cy="-20" r="2"/><circle cx="3" cy="-14" r="2"/><circle cx="6" cy="-24" r="2"/></g></g></g>
    ${cloud(60, 36)}${cloud(290, 30, 0.8)}`,
    // Cần Thơ: chợ nổi Cái Răng, cầu Cần Thơ, ghe trái cây
    canTho: () => `
    <g stroke="#d6dde6" stroke-width="1.6" fill="none"><path d="M70 130 L112 40 L154 130"/><path d="M112 40 L40 132 M112 40 L186 132 M112 56 L56 130 M112 56 L170 130 M112 72 L70 128 M112 72 L156 128"/></g><g stroke="#a8b4c4" stroke-width="2.2" fill="none"><path d="M0 132 H390"/></g>
    <g stroke="#d6dde6" stroke-width="1.6" fill="none"><path d="M230 130 L272 46 L314 130"/><path d="M272 46 L200 132 M272 46 L346 132 M272 60 L216 130 M272 60 L330 130"/></g>
    <g fill="#4a9a55"><ellipse cx="20" cy="144" rx="30" ry="10"/><ellipse cx="370" cy="146" rx="30" ry="10"/></g>
    <rect y="150" width="390" height="50" fill="#8fbf9a"/><rect y="150" width="390" height="50" fill="#b5a078" opacity=".35"/><g stroke="#fff" opacity=".35" stroke-width="1.3" fill="none"><path d="M10 160 q8 -4 16 0 t16 0"/><path d="M200 190 q8 -4 16 0 t16 0"/></g>
    <g class="sc-boat" transform="translate(80 172)"><path d="M-30 0 Q0 10 30 0 L26 -8 L-26 -8Z" fill="#8a5a34"/><g><circle cx="-14" cy="-14" r="6" fill="#f08a2a"/><circle cx="-4" cy="-14" r="6" fill="#f5c542"/><circle cx="6" cy="-14" r="6" fill="#f08a2a"/><ellipse cx="18" cy="-14" rx="4" ry="7" fill="#7ab23a"/></g><path d="M-6 -20 l6 -12 l6 12z" fill="#e8d28a"/></g>
    <g transform="translate(200 178)"><path d="M-26 0 Q0 9 26 0 L22 -7 L-22 -7Z" fill="#6a8a9a"/><g fill="#d8392b"><circle cx="-10" cy="-12" r="5"/><circle cx="0" cy="-12" r="5"/><circle cx="10" cy="-12" r="5"/></g></g>
    <g transform="translate(300 170)"><path d="M-30 0 Q0 10 30 0 L26 -8 L-26 -8Z" fill="#b5663a"/><g fill="#7ab23a"><ellipse cx="-12" cy="-14" rx="4" ry="8"/><ellipse cx="-2" cy="-14" rx="4" ry="8"/><ellipse cx="8" cy="-14" rx="4" ry="8"/></g><rect x="14" y="-34" width="2" height="28" fill="#6a4426"/><g fill="#f5c542"><circle cx="15" cy="-30" r="3"/><circle cx="15" cy="-22" r="3"/></g></g>
    ${palm(30, 150, 1.1)}${palm(360, 152, 1.1)}${cloud(150, 28)}${cloud(310, 24, 0.7)}`,
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
    <g fill="#fff"><path d="M140 40 q6 -6 12 0 q6 -6 12 0 q-6 2 -12 6 q-6 -4 -12 -6z"/><path d="M270 56 q6 -6 12 0 q6 -6 12 0 q-6 2 -12 6 q-6 -4 -12 -6z"/></g>${cloud(60, 36)}${cloud(320, 30, 0.8)}`,
    // Hoàng Sa – Trường Sa: đảo, hải đăng, cờ Tổ quốc, tàu
    hoangSa: () => `
    <rect y="110" width="390" height="90" fill="#2f86c8"/><rect y="110" width="390" height="40" fill="#4aa6dc" opacity=".6"/>
    <g stroke="#fff" opacity=".45" stroke-width="1.4" fill="none"><path d="M10 134 q8 -4 16 0 t16 0"/><path d="M120 150 q8 -4 16 0 t16 0"/><path d="M300 138 q8 -4 16 0 t16 0"/><path d="M60 176 q8 -4 16 0 t16 0"/><path d="M230 186 q8 -4 16 0 t16 0"/></g>
    <g fill="#8a98a8"><path d="M40 114 h60 l-6 8 h-48z"/><rect x="62" y="104" width="22" height="10"/><rect x="70" y="96" width="3" height="10"/></g>
    <ellipse cx="220" cy="160" rx="90" ry="16" fill="#f3e2a8"/><ellipse cx="220" cy="166" rx="90" ry="12" fill="#e6cf86"/>
    <g transform="translate(200 128)"><polygon points="-9,32 -6,0 6,0 9,32" fill="#fff"/><rect x="-7" y="8" width="14" height="6" fill="#d83a2b"/><rect x="-6" y="20" width="12" height="6" fill="#d83a2b"/><rect x="-8" y="-10" width="16" height="10" fill="#f5e08a"/><polygon points="-10,-10 0,-20 10,-10" fill="#d83a2b"/></g>
    <g transform="translate(260 124)"><rect x="-1" y="0" width="2.4" height="40" fill="#6a4426"/><rect x="1" y="2" width="30" height="20" fill="#da251d"/><polygon points="16,6 18.4,12.6 25.4,12.6 19.8,16.6 22,23.2 16,19 10,23.2 12.2,16.6 6.6,12.6 13.6,12.6" fill="#ffcd00" transform="translate(0 -3) scale(.9 .9) translate(1.5 1)"/></g>
    ${palm(160, 164, 1)}${palm(180, 168, 0.8)}${palm(300, 164, 1.1)}${palm(325, 168, 0.8)}
    ${cloud(60, 40)}${cloud(300, 30, 0.9)}${cloud(180, 56, 0.7)}`
  };
  var todOf = (hour) => hour >= 19.2 ? "night" : hour >= 17 ? "dusk" : hour < 10.6 ? "morning" : "day";
  var SKY_CLASS = { morning: "morning", day: "day", dusk: "dusk", night: "night" };
  function sellSceneHTML(hour = 10) {
    const id = SCENES[S.location] ? S.location : "goc";
    const tod = todOf(hour);
    const lv = (k) => equipLevel(k);
    const deco = [
      lv("mascot") > 0 ? '<span class="sc-eq mascot">\u{1F43B}</span>' : "",
      lv("led") > 0 ? `<span class="sc-eq led">LED${lv("led") > 1 ? " \u2726" : ""}</span>` : "",
      lv("xeMay") > 0 ? '<span class="sc-eq moto">\u{1F6F5}</span>' : "",
      lv("mayLanh") > 0 ? '<span class="sc-eq ac">\u2744\uFE0F</span>' : "",
      lv("qcMxh") > 0 ? '<span class="sc-eq like">\u2764\uFE0F</span><span class="sc-eq like l2">\u{1F44D}</span>' : "",
      S.staff && S.staff.chuBa ? '<span class="sc-eq guard">\u{1F46E}</span>' : ""
    ].join("");
    const wx = S.weather === "rain" ? "rain" : S.weather === "hot" ? "hot" : S.weather === "cold" ? "cold" : S.weather === "cloudy" ? "cloudy" : "sunny";
    const celestial = tod === "night" ? '<span class="sc-sun moon">\u{1F319}</span>' : tod === "dusk" ? '<span class="sc-sun dusk">\u{1F305}</span>' : '<span class="sc-sun">\u2600\uFE0F</span>';
    const rain = wx === "rain" ? `<div class="sc-rain">${Array.from({ length: 22 }, (_, i) => `<i style="left:${i * 4.7 % 100}%;animation-delay:${i % 7 * 0.13}s"></i>`).join("")}</div>` : "";
    return `<div class="sell-scene" id="sellScene" data-loc="${id}" data-tod="${SKY_CLASS[tod]}" data-wx="${wx}" aria-hidden="true">
    ${celestial}<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice">${SCENES[id]().replace(/(<g class="sc-boat" transform="[^"]*">)/g, '$1<animateTransform attributeName="transform" type="translate" additive="sum" values="-24 0;0 -2;24 0" dur="12s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="12s" repeatCount="indefinite"/>')}</svg>${rain}${deco}
    <span class="sc-clouds"><i>\u2601\uFE0F</i><i>\u2601\uFE0F</i></span></div>`;
  }
  function updateSceneTime(hour) {
    const el = document.getElementById("sellScene");
    if (!el) return;
    const tod = SKY_CLASS[todOf(hour)];
    const sell = document.getElementById("sell");
    if (sell) sell.dataset.night = tod === "night" || tod === "dusk" ? "1" : "";
    if (el.dataset.tod !== tod) {
      el.dataset.tod = tod;
      const sun = el.querySelector(".sc-sun");
      if (sun) {
        sun.textContent = tod === "night" ? "\u{1F319}" : tod === "dusk" ? "\u{1F305}" : "\u2600\uFE0F";
        sun.className = `sc-sun ${tod === "night" ? "moon" : tod === "dusk" ? "dusk" : ""}`;
      }
    }
  }
  var SCENE_IDS = Object.keys(SCENES);

  // js/brewui.js
  var sizePx = { M: [54, 76], L: [64, 90] };
  var topShown = {};
  var topShownBoard = null;
  var shownFor = (c) => {
    if (c !== SH.board) return [];
    if (topShownBoard !== c) {
      topShown = {};
      topShownBoard = c;
    }
    return (c.tops || []).map((_, i) => topShown[i]);
  };
  function cupHTML(c, { mini = false, stamp = true } = {}) {
    var _a;
    const [w, hgt] = sizePx[c.size || "M"];
    const k = mini ? 0.78 : 1;
    const tea = c.tea ? ITEMS[c.tea] : null;
    const fl = c.flavor ? ITEMS[c.flavor] : null;
    const fill = clamp((_a = c.fill) != null ? _a : 0, 0, 1.15);
    const lid = c.phase === "ready" ? "on" : c.phase === "sealing" ? "drop" : "";
    const svg = cupSvg({ fill, tea: tea ? tea.color : null, flavor: fl ? fl.color : null, tops: (c.tops || []).map((t) => ITEMS[t].color), shown: shownFor(c), lid, straw: c.phase === "ready", ice: c.iceAdded, sugar: c.sugarAdded });
    const st = stamp && !mini && equipLevel("nhanDien") > 0 ? `<span class="c-stamp">${logoHTML(20)}</span>` : "";
    const seal = Math.round(Math.max(500, (c.sealMax || 1.2) * 1e3 * 0.8));
    return `<div class="cup ${c.phase || ""}" style="width:${w * k}px;height:${hgt * k}px;--seal-ms:${seal}ms">${svg}${st}</div>`;
  }
  function orderCup(o) {
    return cupHTML({ size: o.size, tea: o.tea, flavor: o.flavor, tops: o.tops, fill: 0.95, phase: "ready" }, { mini: true, stamp: false });
  }
  var root = null;
  var counterHeight = -1;
  function fitCounter() {
    if (!(root == null ? void 0 : root.isConnected) || SH.view !== "counter") return;
    const height = root.clientHeight - Math.max(0, parseFloat(getComputedStyle(root).paddingBottom) - 4);
    if (height === counterHeight) return;
    counterHeight = height;
    const unit = (height - 32) / 100;
    root.style.setProperty("--counter-u", `${Math.max(1, unit * 12 >= 72 ? unit : (height - 32 - 72) / 88)}px`);
  }
  var brewFxGeneration = 0;
  function clearBrewFx() {
    brewFxGeneration++;
    const layer2 = $("#brewfx");
    if (layer2) layer2.textContent = "";
    $$(".fx-lid").forEach((el) => el.remove());
    const fx = $("#fx");
    if (fx) fx.textContent = "";
  }
  function brewFxLayer() {
    let layer2 = $("#brewfx");
    if (!layer2) {
      layer2 = h('<div id="brewfx" aria-hidden="true"></div>');
      $("#app").appendChild(layer2);
    }
    return layer2;
  }
  var canShowBrewFx = () => S.phase === "sell" && SH.view === "counter" && !isModalOpen();
  on("modal:open", clearBrewFx);
  on("shift:end", clearBrewFx);
  function renderSell() {
    var _a;
    clearBrewFx();
    const view = $("#view");
    if (S.phase !== "sell") return;
    view.classList.toggle("counter-view", SH.view === "counter");
    if (SH.view === "lobby") return renderLobby(view);
    view.innerHTML = `<div class="sell" id="sell" data-night="${SH.hour >= 17 ? "1" : ""}">
    ${sellSceneHTML(SH.hour)}
    <div class="queue-row" id="qrow"></div>
    <div class="cust-zone">
      <div class="cust-av" id="cav"></div>
      <div class="bubble" id="cbub"></div>
    </div>
    <div class="hint" id="hint"></div>
    <div class="shelf">
      <div class="shelf-head"><div class="tag-w">QU\u1EA6Y TR\xC0</div><div class="staff-strip" id="staffStrip">${staffStripHTML()}</div></div>
      <div class="shelf-row">
        <div class="stacks">
          <button class="stack" data-act="cup" data-size="M" aria-label="L\u1EA5y ly size M"><div class="cupstack image-stack m">${stackArt("M")}</div><b>M</b><span class="cnt" data-cnt="lyM">0</span></button>
          <button class="stack big" data-act="cup" data-size="L" aria-label="L\u1EA5y ly size L"><div class="cupstack image-stack l">${stackArt("L")}</div><b>L</b><span class="cnt" data-cnt="lyL">0</span></button>
        </div>
        <div class="disps" id="disps">${TEAS.map(dispHTML).join("")}</div>
      </div>

    </div>
    <div class="work">
      <div class="work-row">
        <div class="work-l">
          <div class="tag-w sm">PHA LY</div>
          <div class="board" id="wboard"><div class="cupslot" id="cupslot" data-act="boardTap"></div>
            <div class="board-txt" id="boardTxt">L\u1EA5y ly<br/>M ho\u1EB7c L</div>
            <div class="pourbar" id="pourbar"><div class="pb-zone"></div><i id="pbFill"></i></div></div>
        </div>
        <button class="sealer image-sealer" id="sealer" data-act="seal" aria-label="M\xE1y \u0111\xF3ng n\u1EAFp">${sealerArt()}<span class="sl-led">READY</span></button>
        <div class="work-side">
          <button class="phone" data-act="phone" aria-label="\u0110\u01A1n online"><span>\u{1F4F1}</span><b id="phoneBadge">0</b></button>
          <button class="trash" data-act="trash" aria-label="Th\xF9ng r\xE1c">\u{1F5D1}\uFE0F</button>
        </div>
      </div>
      <div class="supply-row">${["da", "duong"].map((id) => `<button class="supply-btn" data-act="supply" data-id="${id}">${ITEMS[id].icon} ${id === "da" ? "\u0110\xE1" : "\u0110\u01B0\u1EDDng"} <span data-cnt="${id}">0</span><small class="supply-state">1 ph\u1EA7n/ly</small></button>`).join("")}<button class="supply-btn upgrade-shortcut" data-act="upgrade-menu" aria-label="Xem trang b\u1ECB v\xE0 n\xE2ng c\u1EA5p">\u{1F6E0}\uFE0F</button></div>
      <div class="flav-row" id="flavs"></div><div class="trays" id="trays"></div>
    </div>
    <div class="foot"><button class="btn pri lobby-go" data-act="lobby" id="lobbyGo">Ra s\u1EA3nh \u2192 <span id="lobbyCnt">0/0</span></button></div>
    <div class="stream" id="stream" aria-hidden="true"><span class="st-jet"><i class="st-gloss"></i></span><span class="st-impact"><span class="st-spl"><i></i><i></i><i></i><i></i><i></i></span><span class="st-ring"></span><span class="st-ring r2"></span></span></div>
  </div>`;
    root = $("#sell");
    counterHeight = -1;
    fitCounter();
    fillTrays();
    fillFlavors();
    refreshQueue();
    refreshCustomer();
    bindActions(root, sellActs);
    (_a = $("#staffStrip")) == null ? void 0 : _a.addEventListener("click", (e) => {
      const b = e.target.closest(".stf");
      if (!b) return;
      if (comfortStaff(b.dataset.stf)) sfx("success");
      else sfx("click");
      b.classList.add("tip");
      clearTimeout(b._tm);
      b._tm = setTimeout(() => b.classList.remove("tip"), 1800);
    });
    frameSell(0, true);
  }
  var staffStripHTML = () => STAFF.filter((st) => S.staff[st.id]).map((st) => `<button class="stf idle" data-stf="${st.id}" data-tip="${esc(st.name)}" aria-label="${esc(st.name)}">${staffArt(st.id)}<b></b></button>`).join("");
  function staffStatus(st) {
    const auto = SH.board && SH.board.auto;
    if (auto && auto.st.id === st.id) return { cls: "work", p: 60, txt: `${st.name}: ${auto.waiting || auto.stage || "chu\u1EA9n b\u1ECB pha"}` };
    const mood = SH.staffT[st.id];
    if (mood && (mood.sulk > 0 || mood.hiddenBill > 0)) return { cls: "sulk", p: 0, txt: `${st.name}: ${mood.hiddenBill > 0 ? "\u0111ang gi\u1EEF bill, ch\u1EA1m \u0111\u1EC3 thu l\u1EA1i" : "\u0111ang d\u1ED7i, ch\u1EA1m \u0111\u1EC3 d\u1ED7 tr\u01B0\u1EDBc khi ngh\u1EC9 vi\u1EC7c"}` };
    const job = SH.jobs.find((j) => j.by === st.id);
    if (job) return { cls: "work", p: clamp((1 - job.t / Math.max(0.5, st.sec)) * 100, 4, 100), txt: `${st.name}: \u0111ang pha m\xF3n cho kh\xE1ch` };
    if (st.kind === "night") return { cls: "idle", p: 0, txt: `${st.name}: ch\u1EC9 l\xE0m sau 22h \u0111\u1EBFn 6h` };
    if (st.kind === "auto" || st.kind === "online") return { cls: "idle", p: 0, txt: `${st.name}: ${st.kind === "online" ? "ch\u1EDD \u0111\u01A1n online" : "\u0111ang r\u1EA3nh, ch\u1EDD kh\xE1ch"}` };
    if (st.kind === "buyer") return { cls: "idle", p: 0, txt: `${st.name}: canh kho, h\u1EBFt h\xE0ng s\u1EBD \u0111i ch\u1EE3` };
    if (st.id === "chuBa") return { cls: "idle", p: 0, txt: `${st.name}: \u0111ang canh g\xE1c qu\xE1n` };
    if (st.id === "meKetTinh") return { cls: "idle", p: 0, txt: `${st.name}: \u0111ang quay video qu\u1EA3ng b\xE1` };
    return { cls: "idle", p: 0, txt: st.name };
  }
  function updateStaffStrip() {
    for (const el of $$("#staffStrip .stf")) {
      const st = STAFF.find((x) => x.id === el.dataset.stf);
      if (!st) continue;
      const s = staffStatus(st);
      el.classList.toggle("sulk", s.cls === "sulk");
      el.classList.toggle("work", s.cls === "work");
      el.classList.toggle("idle", s.cls !== "work");
      el.style.setProperty("--p", s.p.toFixed(0));
      el.dataset.tip = s.txt;
    }
  }
  function updateStaffJobs() {
    const row2 = $("#qrow");
    if (!row2) return;
    for (const card of $$(".qav", row2)) {
      const job = SH.jobs.find((j) => String(j.cid) === card.dataset.cid && j.by === "genZ");
      let status = card.querySelector(".genz-job");
      if (!job) {
        status == null ? void 0 : status.remove();
        card.classList.remove("genz-working");
        continue;
      }
      card.classList.add("genz-working");
      if (!status) {
        status = h('<span class="genz-job"><b>\u2728</b><i></i></span>');
        card.appendChild(status);
      }
      const staff = STAFF.find((s) => s.id === job.by), total = job.total || (staff == null ? void 0 : staff.sec) || 1;
      status.style.setProperty("--job-progress", `${clamp((1 - job.t / total) * 100, 4, 100)}%`);
      status.setAttribute("aria-label", `Gen Z \u0111ang pha \u0111\u01A1n cho kh\xE1ch, c\xF2n ${Math.ceil(job.t * 10) / 10} gi\xE2y`);
    }
    const selected = frontCustomer();
    const selectedJob = SH.jobs.find((j) => j.cid === (selected == null ? void 0 : selected.id) && j.by === "genZ");
    const label = $("#cbub .genz-order-status");
    if (label && selectedJob) label.textContent = "\u2728 Gen Z \xB7 " + staffJobPreview(selectedJob, selected).label;
    for (const inspector of $$(".staff-job-inspector")) {
      if (inspector.dataset.finished) continue;
      const cid2 = Number(inspector.dataset.cid), customer = SH.queue.find((c) => c.id === cid2);
      const job = SH.jobs.find((j) => j.cid === cid2 && j.by === "genZ");
      if (!job || !customer) {
        $("[data-job-status]", inspector).textContent = "\u0110\u01A1n t\u1EF1 \u0111\u1ED9ng \u0111\xE3 d\u1EEBng";
        continue;
      }
      renderStaffPreview(inspector, staffJobPreview(job, customer));
    }
  }
  function renderStaffPreview(inspector, preview) {
    var _a;
    const slot = $(".staff-order-cup", inspector), b = preview.cup;
    const signature = `${preview.index}|${b.tea}|${b.flavor}|${b.tops.join(",")}|${b.iceAdded}|${b.sugarAdded}|${b.phase}`;
    slot.dataset.step = preview.step;
    slot.style.setProperty("--tea", ((_a = ITEMS[b.tea]) == null ? void 0 : _a.color) || "#f4c68a");
    if (slot.dataset.signature !== signature) {
      slot.dataset.signature = signature;
      slot.innerHTML = cupHTML(b) + '<span class="staff-preview-stream"></span><span class="staff-preview-drop">\u2726</span>';
    }
    setCupFill($(".cup", slot), b.fill);
    $("[data-job-status]", inspector).textContent = `${preview.index + 1}/${preview.count} \xB7 ${preview.label}`;
    $("[data-job-progress]", inspector).style.width = `${preview.progress * 100}%`;
  }
  function openStaffJob(cid2) {
    const customer = SH.queue.find((c) => c.id === cid2), job = SH.jobs.find((j) => j.cid === cid2 && j.by === "genZ");
    if (!customer || !job) return;
    const modal = openModal({ id: "staff-job-" + cid2, cls: "small", title: "Chu tr\xECnh pha c\u1EE7a Gen Z", html: `<div class="staff-job-inspector" data-cid="${cid2}"><h3 class="m-title">\u2728 Gen Z \u0111ang pha cho ${esc(customer.tag)}</h3><p class="m-text">${esc(customer.text)}</p><div class="staff-preview-board"><div class="staff-order-cup"></div><span class="staff-preview-customer">${customerArt(customer.key) || customer.avatar}</span></div><b class="staff-job-status" data-job-status></b><div class="bar staff-job-progress"><i data-job-progress></i></div><p class="m-text muted">\u0110\xE2y l\xE0 ly ri\xEAng c\u1EE7a nh\xE2n vi\xEAn. B\u1EA1n c\xF3 th\u1EC3 \u0111\xF3ng c\u1EEDa s\u1ED5 \u0111\u1EC3 ti\u1EBFp t\u1EE5c pha cho kh\xE1ch kh\xE1c.</p></div>` });
    renderStaffPreview($(".staff-job-inspector", modal.body), staffJobPreview(job, customer));
  }
  on("served", (result) => {
    for (const inspector of $$(".staff-job-inspector")) {
      if (Number(inspector.dataset.cid) !== result.cust.id) continue;
      inspector.dataset.finished = "1";
      const slot = $(".staff-order-cup", inspector), order = result.cust.order;
      slot.innerHTML = cupHTML({ ...order, fill: 1, phase: "ready", iceAdded: true, sugarAdded: true });
      slot.dataset.step = "done";
      $("[data-job-status]", inspector).textContent = `\u2705 \u0110\xE3 giao ly \xB7 ${result.stars} sao \xB7 +${fmtK(result.pay + result.tip)}`;
      $("[data-job-progress]", inspector).style.width = "100%";
    }
  });
  function openUpgradeMenu() {
    const rows = EQUIP.map((eq) => {
      const level = equipLevel(eq.id), tier = eq.tiers[Math.max(0, Math.min(level, eq.tiers.length) - 1)];
      const next = eq.tiers[Math.min(level, eq.tiers.length - 1)];
      const current = level ? tier.d : "Ch\u01B0a mua";
      return `<button class="upgrade-item" data-act="equipment" data-id="${eq.id}"><span class="upgrade-icon">${eq.icon}</span><span><b>${esc(eq.name)} \xB7 C${level}</b><small>${level < eq.tiers.length ? `Hi\u1EC7n t\u1EA1i: ${esc(current)} \xB7 Ti\u1EBFp theo: ${esc(next.d)}` : esc(current)}</small></span><span class="upgrade-arrow">\u203A</span></button>`;
    }).join("");
    const modal = openModal({ id: "counter-upgrades", cls: "small counter-upgrade-modal", title: "\u{1F6E0}\uFE0F Trang b\u1ECB & n\xE2ng c\u1EA5p", html: `<div class="upgrade-list">${rows}</div>` });
    bindActions(modal.body, { equipment: (button) => sellActs.equipment(button) });
  }
  function dispHTML(t) {
    const it = ITEMS[t];
    const locked = !S.unlocked[t];
    const off = S.unlocked[t] && !S.onMenu[t];
    return `<button class="disp ${locked ? "locked" : ""} ${off ? "off" : ""}" data-act="disp" data-tea="${t}" aria-label="${it.name}" ${locked ? 'data-locked="1"' : ""}>
    <div class="jar image-jar">${teaArt(t)}${locked ? '<em class="lk">\u{1F512}</em>' : ""}<span class="tap image-tap"><i class="drip" style="background:${it.color}"></i></span></div>
    <span class="cnt" data-cnt="${t}">0</span></button>`;
  }
  function fillFlavors() {
    const list = FLAVORS.filter((f) => S.unlocked[f] && S.onMenu[f]);
    $("#flavs").innerHTML = list.length ? `<span class="tag-w sm">H\u01AF\u01A0NG</span>` + list.map((f) => `<button class="fbtn" data-act="flav" data-f="${f}" aria-label="${ITEMS[f].name}"><i style="background:${ITEMS[f].color}"></i><b>${ITEMS[f].icon}</b><small>${esc(ITEMS[f].name)}</small><span class="cnt" data-cnt="${f}">0</span></button>`).join("") : "";
  }
  function fillTrays() {
    const order = [...TOPS].sort((a, b) => (S.unlocked[b] && S.onMenu[b] ? 1 : 0) - (S.unlocked[a] && S.onMenu[a] ? 1 : 0));
    const slots = Math.max(12, Math.ceil(order.length / 4) * 4);
    $("#trays").innerHTML = order.slice(0, slots).map((t) => {
      const it = ITEMS[t];
      const locked = !S.unlocked[t], off = S.unlocked[t] && !S.onMenu[t];
      return `<button class="tray image-tray ${locked ? "locked" : ""} ${off ? "off" : ""}" data-act="top" data-t="${t}" aria-label="${it.name}"><div class="pile">${toppingArt(t)}</div>${locked ? '<em class="lk">\u{1F512}</em>' : ""}<small>${it.name.replace("Tr\xE2n ch\xE2u ", "TC ").replace("Th\u1EA1ch ", "Th. ")}</small><span class="cnt" data-cnt="${t}">0</span></button>`;
    }).join("");
  }
  var sellActs = {
    "upgrade-menu": () => openUpgradeMenu(),
    supply: (t) => {
      const err = addSupply(t.dataset.id);
      if (err) {
        toast(err, "err");
        sfx("error");
      }
    },
    equipment: (t) => {
      var _a, _b, _c;
      const eq = EQUIP.find((eq2) => eq2.id === t.dataset.id);
      if (!eq) return;
      if (eq.id === "mayPhat" && ((_a = SH.ev) == null ? void 0 : _a.off) > 0 && SH.ev.mode === "full") {
        const err = requestGenerator();
        if (err) toast(err, "err");
        return;
      }
      const level = equipLevel(eq.id);
      const tier = eq.tiers[Math.max(0, Math.min(level, eq.tiers.length) - 1)];
      const extra = eq.id === "tuLanh" ? "\xC1p d\u1EE5ng cho l\xF4 nh\u1EADp m\u1EDBi; h\u1EA1n c\u1EE7a l\xF4 \u0111\xE3 nh\u1EADp gi\u1EEF nguy\xEAn." : eq.id === "tablet" ? "C\u1EA7n m\u1EDF \u1EE9ng d\u1EE5ng trong N\xE2ng c\u1EA5p \u203A Online v\xE0 \u0111\u1EA1t \u0111i\u1EC1u ki\u1EC7n nh\u1EADn \u0111\u01A1n." : eq.id === "giayPhep" ? "Khi \u0111o\xE0n ki\u1EC3m tra \u0111\u1EBFn, ch\u1EA1m Xu\u1EA5t tr\xECnh gi\u1EA5y ph\xE9p \u0111\u1EC3 x\xE1c nh\u1EADn." : eq.id === "attp" ? "V\u1EABn c\u1EA7n d\u1ECDn b\xE0n v\xE0 d\xF9ng nguy\xEAn li\u1EC7u c\xF2n h\u1EA1n; ch\u1EE9ng nh\u1EADn kh\xF4ng thay vi\u1EC7c gi\u1EEF v\u1EC7 sinh." : eq.id === "mayPhat" ? ((_c = (_b = SH.ev) == null ? void 0 : _b.mode) == null ? void 0 : _c.startsWith("gen")) ? "\u{1F50C} \u0110ang c\u1EA5p \u0111i\u1EC7n d\u1EF1 ph\xF2ng." : "\u0110i\u1EC7n l\u01B0\u1EDBi \u0111ang ho\u1EA1t \u0111\u1ED9ng. Khi m\u1EA5t \u0111i\u1EC7n, x\xE1c nh\u1EADn b\u1EADt m\xE1y ph\xE1t." : "Hi\u1EC7u qu\u1EA3 c\u1EA5p hi\u1EC7n t\u1EA1i \u0111\u01B0\u1EE3c \xE1p d\u1EE5ng trong ca b\xE1n h\xE0ng.";
      openModal({ id: "equipment", cls: "small", title: eq.name, html: `<h3 class="m-title">${eq.icon} ${esc(eq.name)} \xB7 C${level}</h3><p class="m-text"><b>${level ? esc(tier.n) : "Ch\u01B0a mua"}</b><br>${level ? esc(tier.d) : "Khi mua c\u1EA5p \u0111\u1EA7u: " + esc(tier.d)}</p><p class="m-text">${level ? extra : "Mua thi\u1EBFt b\u1ECB trong Ph\xE1t tri\u1EC3n \u203A N\xE2ng c\u1EA5p khi chu\u1EA9n b\u1ECB ca b\xE1n h\xE0ng."}</p>` });
    },
    cup: (t) => {
      const e = pickCup(t.dataset.size);
      if (e) {
        toast(e, "err");
        sfx("error");
      }
    },
    disp: (t) => {
      const id = t.dataset.tea;
      if (!S.unlocked[id]) return toast("M\u1EDF kh\xF3a trong N\xE2ng c\u1EA5p \u203A Tr\xE0", "err");
      if (!S.onMenu[id]) return toast("M\xF3n \u0111ang t\u1EAFt kh\u1ECFi menu", "err");
      const b = SH.board;
      if (b == null ? void 0 : b.pouring) {
        stopPour();
        return;
      }
      const e = startPour(id);
      if (e) {
        toast(e, "err");
        sfx("error");
      }
    },
    flav: (t) => {
      const e = addFlavor(t.dataset.f);
      if (e) {
        toast(e, "err");
        sfx("error");
      } else dropFx(t, "#fff");
    },
    top: (t) => {
      const id = t.dataset.t;
      if (!S.unlocked[id]) return toast("M\u1EDF kh\xF3a trong N\xE2ng c\u1EA5p \u203A Topping", "err");
      if (!S.onMenu[id]) return toast("M\xF3n \u0111ang t\u1EAFt kh\u1ECFi menu", "err");
      const b = SH.board;
      let idx = -1;
      if (b) {
        if (topShownBoard !== b) {
          topShown = {};
          topShownBoard = b;
        }
        idx = b.tops.length;
        topShown[idx] = 0;
      }
      const e = addTop(id);
      if (e) {
        if (idx >= 0) delete topShown[idx];
        toast(e, "err");
        sfx("error");
      } else dropFx(t, ITEMS[id].color, idx);
    },
    seal: () => {
      const e = sealCup();
      if (e) {
        toast(e, "err");
        sfx("error");
      }
    },
    boardTap: () => {
      var _a;
      if (((_a = SH.board) == null ? void 0 : _a.phase) === "ready") doServe();
    },
    trash: () => {
      if (SH.board) {
        trashCup();
        sfx("pop");
        toast("\u0110\xE3 \u0111\u1ED5 ly", "");
      }
    },
    reject: () => {
      const c = frontCustomer();
      const e = rejectCustomer();
      if (e) {
        toast(e, "err");
        return;
      }
      sfx("sad");
      toast(`\u0110\xE3 t\u1EEB ch\u1ED1i \u0111\u01A1n c\u1EE7a ${c.tag}`, "err", 1400);
    },
    phone: () => openOnlineList(),
    lobby: () => {
      SH.view = "lobby";
      markDirty("view");
    },
    sel: (t) => {
      const cid2 = +t.dataset.cid;
      if (SH.jobs.some((j) => j.cid === cid2 && j.by === "genZ")) openStaffJob(cid2);
      else selectCustomer(cid2);
    }
  };
  var serveHold = false;
  function tween(ms, step, done) {
    const t0 = performance.now();
    const f = (now) => {
      const t = Math.min(1, (now - t0) / ms);
      step(t);
      if (t < 1) requestAnimationFrame(f);
      else if (done) done();
    };
    requestAnimationFrame(f);
  }
  var THANKS = [
    null,
    ["\u{1F615}", "H\u01A1i th\u1EA5t v\u1ECDng..."],
    ["\u{1F615}", "H\u01A1i th\u1EA5t v\u1ECDng..."],
    ["\u{1F642}", "C\u0169ng \u0111\u01B0\u1EE3c, c\u1EA3m \u01A1n!"],
    ["\u{1F60A}", "Ngon, c\u1EA3m \u01A1n b\u1EA1n!"],
    ["\u{1F970}", "Ngon tuy\u1EC7t v\u1EDDi, c\u1EA3m \u01A1n!"]
  ];
  var REFUSED = ["\u{1F620}", "Sai m\xF3n r\u1ED3i, t\xF4i kh\xF4ng nh\u1EADn!"];
  var DISCOUNTED = ["\u{1F612}", "Sai m\xF3n, th\xF4i b\xE1n r\u1EBB t\xF4i l\u1EA5y!"];
  function floatText(text, x, y, cls = "") {
    const el = h(`<div class="fx-float ${cls}" style="left:${x}px;top:${y}px">${esc(text)}</div>`);
    brewFxLayer().appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }
  function flyCoins(from, n) {
    const money2 = $("[data-money]");
    if (!money2) return;
    const mr = money2.getBoundingClientRect(), tx = mr.left + mr.width / 2, ty = mr.top + mr.height / 2;
    for (let i = 0; i < n; i++) {
      const sx = from.x + rand(-16, 16), sy = from.y + rand(-8, 8);
      const c = h(`<div class="fx-coin" style="left:${sx}px;top:${sy}px;--dx:${tx - sx}px;--dy:${ty - sy}px;animation-delay:${i * 50}ms">\u{1FA99}</div>`);
      brewFxLayer().appendChild(c);
      setTimeout(() => c.remove(), 1e3 + i * 50);
    }
  }
  function doServe() {
    if (serveHold) return;
    const cupEl = $("#cupslot .cup");
    const av = $("#cav"), bub = $("#cbub");
    const show2 = canShowBrewFx() && cupEl && av;
    const from = cupEl ? cupEl.getBoundingClientRect() : null;
    serveHold = true;
    const r = serve();
    if (typeof r === "string") {
      serveHold = false;
      toast(r, "err");
      sfx("error");
      return;
    }
    const finish2 = () => {
      serveHold = false;
      if (SH.on && S.phase === "sell" && SH.view === "counter") refreshCustomer();
    };
    if (!show2) {
      finish2();
      return;
    }
    const to = av.getBoundingClientRect();
    const tx = to.left + to.width / 2, ty = to.top + to.height * 0.55;
    const dx = tx - (from.left + from.width / 2), dy = ty - (from.top + from.height / 2);
    const generation = brewFxGeneration;
    const clone = cupEl.cloneNode(true);
    clone.style.cssText = `position:fixed;left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px;margin:0;pointer-events:none;transition:none;will-change:transform,opacity`;
    brewFxLayer().appendChild(clone);
    cupEl.style.visibility = "hidden";
    const DUR = r.refused ? 900 : 640;
    const alive = () => generation === brewFxGeneration && clone.isConnected;
    tween(DUR, (t) => {
      if (!alive()) return;
      const e = r.refused ? Math.sin(Math.PI * Math.min(1, t * 1.05)) * 0.9 : t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      clone.style.transform = `translate(${(dx * e).toFixed(1)}px,${(dy * e - 46 * 4 * t * (1 - t)).toFixed(1)}px) scale(${(1 - 0.4 * e).toFixed(3)}) rotate(${(-10 + 16 * e).toFixed(1)}deg)`;
    }, () => {
      if (!r.refused) {
        tween(300, (t) => {
          if (!alive()) return;
          const up = Math.sin(Math.min(1, t * 1.6) * Math.PI) * 6;
          clone.style.transform = `translate(${dx}px,${(dy - up - 16 * t).toFixed(1)}px) scale(${(0.6 * (1 - 0.75 * t) + 0.1 * Math.sin(Math.PI * Math.min(1, t * 2))).toFixed(3)}) rotate(6deg)`;
          clone.style.opacity = String(1 - t);
        }, () => clone.remove());
      } else clone.remove();
      if (generation !== brewFxGeneration) {
        finish2();
        return;
      }
      const [emo, msg] = r.refused ? REFUSED : r.discount ? DISCOUNTED : THANKS[r.stars] || THANKS[3];
      const face = $(".face", av);
      if (face) {
        face.classList.remove("thanks", "sad");
        void face.offsetWidth;
        face.classList.add(r.stars <= 2 ? "sad" : "thanks");
      }
      if (bub) bub.innerHTML = `<div class="thanks-msg"><span class="thanks-emo">${emo}</span><div><b>${msg}</b><small>${"\u2605".repeat(r.stars)}${"\u2606".repeat(5 - r.stars)}</small></div></div>`;
      if (r.refused) {
        floatText("\u274C Kh\xE1ch kh\xF4ng nh\u1EADn ly", tx, to.top + 6, "r");
        sfx("sad");
        setTimeout(finish2, 900);
        return;
      }
      floatText(`+${fmtK(r.pay)}${r.tip ? " (+" + fmtK(r.tip) + " boa)" : ""}${r.discount ? " \xB7 b\xE1n r\u1EBB \u221230%" : ""}`, tx, to.top + 6, "");
      setTimeout(() => floatText("\u2605".repeat(r.stars) + "\u2606".repeat(5 - r.stars), tx, to.top - 14, r.stars >= 4 ? "g" : r.stars <= 2 ? "r" : ""), 200);
      if (r.issues.length) setTimeout(() => floatText(r.issues.slice(0, 2).join(", "), tx, to.top + 26, "r"), 480);
      if (r.luck) setTimeout(() => floatText("\u{1F340} MAY M\u1EAEN \xD72!", tx, to.top + 44, "g"), 650);
      flyCoins({ x: tx, y: ty }, r.stars >= 4 ? 7 : 3);
      fxSpark({ x: tx, y: ty }, r.stars >= 5 ? 10 : 5);
      sfx(r.stars >= 4 ? "reward" : "sad");
      setTimeout(finish2, 900);
    });
  }
  function dropFx(fromEl, color, idx = -1, ingredient = "") {
    sfx("drop");
    const slot = $("#cupslot");
    const reveal = (count) => {
      if (idx < 0 || SH.board !== topShownBoard) return;
      if (count >= 3) delete topShown[idx];
      else topShown[idx] = count;
      updateBoard(true);
    };
    if (!fromEl || !slot || !canShowBrewFx()) {
      reveal(3);
      return;
    }
    const generation = brewFxGeneration, board = SH.board;
    const a = fromEl.getBoundingClientRect();
    const n = 5, DUR = 820, GAP = 95, SPLIT = 0.62;
    const balls = [];
    for (let k = 0; k < n; k++) {
      const sx = a.left + a.width / 2 + rand(-10, 10), sy = a.top + a.height / 2;
      const el = h(`<div class="${ingredient === "da" ? "fx-ice" : "fx-ball"}" style="left:${sx - 7}px;top:${sy - 7}px;${ingredient === "da" ? "" : `background-color:${color};`}opacity:0">${ingredient === "da" ? "\u{1F9CA}" : ""}</div>`);
      brewFxLayer().appendChild(el);
      balls.push({ el, k, sx, sy, jit: rand(-9, 9), rise: 34 + rand(0, 22), done: false });
    }
    const t0 = performance.now();
    let surfaceY = 0;
    const frame2 = (now) => {
      var _a;
      if (generation !== brewFxGeneration || !slot.isConnected || !canShowBrewFx() || SH.board !== board) {
        balls.forEach((o) => o.el.remove());
        reveal(3);
        return;
      }
      const cupEl = slot.querySelector(".cup") || slot;
      const cr = cupEl.getBoundingClientRect();
      const liq = (_a = cupEl.querySelector) == null ? void 0 : _a.call(cupEl, ".c-liq");
      const lr = liq ? liq.getBoundingClientRect() : null;
      surfaceY = lr && lr.height > 2 ? lr.top + 3 : cr.bottom - 8;
      const cx = cr.left + cr.width / 2, rimY = cr.top - 16;
      let alive = false;
      for (const o of balls) {
        if (o.done) continue;
        const u = (now - t0 - o.k * GAP) / DUR;
        if (u < 0) {
          alive = true;
          continue;
        }
        if (u >= 1) {
          o.done = true;
          o.el.remove();
          reveal(Math.round((o.k + 1) * 3 / n));
          if (o.k === 0) {
            slot.classList.remove("plop");
            void slot.offsetWidth;
            slot.classList.add("plop");
          }
          if (o.k === n - 1) splash(slot, color, surfaceY);
          continue;
        }
        alive = true;
        const ex = cx + o.jit;
        let x, y, sc = 1, op = 1;
        if (u <= SPLIT) {
          const w = u / SPLIT;
          x = o.sx + (ex - o.sx) * (1 - (1 - w) * (1 - w));
          y = o.sy + (rimY - o.sy) * w - o.rise * 4 * w * (1 - w);
          sc = 1 + 0.15 * Math.sin(w * Math.PI);
        } else {
          const w = (u - SPLIT) / (1 - SPLIT);
          x = ex;
          y = rimY + (surfaceY - rimY) * w * w;
          sc = 1 - 0.25 * w;
          op = w > 0.85 ? 1 - (w - 0.85) / 0.15 : 1;
        }
        o.el.style.opacity = op;
        o.el.style.transform = `translate(${(x - o.sx).toFixed(1)}px,${(y - o.sy).toFixed(1)}px) scale(${sc.toFixed(2)})${ingredient === "da" ? ` rotate(${Math.round(u * 180 + o.k * 30)}deg)` : ""}`;
      }
      if (alive) requestAnimationFrame(frame2);
    };
    requestAnimationFrame(frame2);
  }
  function sugarFx(fromEl) {
    const slot = $("#cupslot"), board = SH.board, generation = brewFxGeneration;
    if (!fromEl || !slot || !canShowBrewFx()) return;
    const from = fromEl.getBoundingClientRect(), sx = from.left + from.width / 2, sy = from.top;
    const el = h('<svg class="fx-sugar-stream" aria-hidden="true"><path class="syrup-shadow"/><path class="syrup-body"/><path class="syrup-gloss"/></svg>');
    brewFxLayer().appendChild(el);
    const start = performance.now();
    const frame2 = (now) => {
      const u = (now - start) / 950;
      if (u >= 1 || generation !== brewFxGeneration || SH.board !== board || !slot.isConnected || !canShowBrewFx()) {
        el.remove();
        return;
      }
      const cup2 = slot.querySelector(".cup"), r = cup2 == null ? void 0 : cup2.getBoundingClientRect();
      if (!r) {
        el.remove();
        return;
      }
      const tx = r.left + r.width / 2, ty = r.top + 9;
      const bend = Math.min(sy, ty) - 38;
      const path = `M${sx} ${sy} Q${(sx + tx) / 2} ${bend} ${tx} ${ty}`;
      for (const p of el.children) {
        p.setAttribute("d", path);
        p.style.strokeDasharray = "1";
        p.style.strokeDashoffset = `${1 - Math.min(1, u * 3)}`;
        p.setAttribute("pathLength", "1");
      }
      el.style.opacity = `${Math.min(1, (1 - u) * 5)}`;
      requestAnimationFrame(frame2);
    };
    sfx("drop");
    requestAnimationFrame(frame2);
  }
  function splash(cup2, color, atY) {
    if (!canShowBrewFx() || !cup2.isConnected) return;
    const r = cup2.getBoundingClientRect();
    const x = r.left + r.width / 2, y = atY != null ? atY : r.top + r.height * 0.5;
    fxSpark({ x, y }, 5);
    const ring = h(`<div class="fx-ripple" style="left:${x}px;top:${y}px;border-color:${color}"></div>`);
    brewFxLayer().appendChild(ring);
    setTimeout(() => ring.remove(), 520);
  }
  function flyCupIn(size) {
    const slot = $("#cupslot"), cupEl = slot == null ? void 0 : slot.firstElementChild;
    if (!cupEl || !canShowBrewFx()) return;
    cupEl.animate([
      { transform: "scale(.45)", opacity: 0.15 },
      { transform: "scale(.8)", opacity: 0.65, offset: 0.6 },
      { transform: "scale(1)", opacity: 1 }
    ], { duration: 360, easing: "ease-out" });
  }
  function sealAnim() {
    var _a;
    const cupEl = $("#cupslot .cup"), sealer = $("#sealer");
    if (!cupEl || !sealer || !canShowBrewFx()) return;
    const dur = Math.max(600, (((_a = SH.board) == null ? void 0 : _a.sealMax) || 1.2) * 1e3);
    sealer.classList.add("press");
    cupEl.animate([
      { transform: "none", offset: 0 },
      { transform: "none", offset: 0.6 },
      { transform: "scale(1.05,.93)", offset: 0.72 },
      { transform: "scale(.99,1.03)", offset: 0.86 },
      { transform: "none", offset: 1 }
    ], { duration: dur, easing: "ease-out" });
    setTimeout(() => sealer.classList.remove("press"), dur);
    sfx("seal");
  }
  on("cup:pick", (size) => {
    const board = SH.board;
    setTimeout(() => {
      if (SH.board !== board || !canShowBrewFx() || board.phase !== "cup") return;
      updateBoard(true);
      flyCupIn(size);
      sfx("cup");
    }, 0);
  });
  on("seal:start", () => {
    updateBoard(true);
    sealAnim();
  });
  on("seal:done", () => {
    sfx("ding");
    updateBoard(true);
    const cs = $("#cupslot");
    if (cs) {
      fxSpark({ x: cs.getBoundingClientRect().left + cs.offsetWidth / 2, y: cs.getBoundingClientRect().top + cs.offsetHeight * 0.35 }, 6);
      cs.classList.remove("plop");
      void cs.offsetWidth;
      cs.classList.add("plop");
    }
    const s = $("#sealer");
    s == null ? void 0 : s.classList.add("ding");
    setTimeout(() => s == null ? void 0 : s.classList.remove("ding"), 600);
  });
  on("top", () => updateBoard(true));
  on("flavor", () => updateBoard(true));
  on("staff:flavor", (id) => {
    updateBoard(true);
    if (canShowBrewFx()) dropFx($(`[data-f="${id}"]`) || $("#staffStrip .stf.work"), ITEMS[id].color);
  });
  on("staff:top", ({ id }) => {
    const board = SH.board;
    if (!board) return;
    if (topShownBoard !== board) {
      topShown = {};
      topShownBoard = board;
    }
    const idx = board.tops.indexOf(id);
    topShown[idx] = 0;
    updateBoard(true);
    dropFx($(`[data-t="${id}"]`) || $("#staffStrip .stf.work"), ITEMS[id].color, idx);
  });
  on("staff:ingredient", (id) => {
    updateBoard(true);
    if (!canShowBrewFx()) return;
    const from = $(`[data-act="supply"][data-id="${id}"]`) || $("#staffStrip .stf.work") || $("#sealer");
    if (id === "duong") sugarFx(from);
    else dropFx(from, ITEMS[id].color, -1, id);
  });
  on("auto:pour", () => updateBoard(true));
  on("trash", () => updateBoard(true));
  on("queue", () => {
    if (SH.on && S.phase === "sell" && SH.view === "counter") {
      refreshQueue();
      refreshCustomer();
    }
  });
  on("staff:job", () => {
    if (SH.view === "counter") {
      refreshQueue();
      refreshCustomer();
    }
  });
  on("sel", () => {
    refreshQueue();
    refreshCustomer();
  });
  on("served", () => {
    updateBoard(true);
    refreshQueue();
    if (!serveHold) refreshCustomer();
  });
  on("left", (c) => {
    toast(`${c.tag} b\u1ECF v\u1EC1 v\xEC ch\u1EDD qu\xE1 l\xE2u \u{1F622}`, "err", 1500);
    sfx("sad");
  });
  on("balk", () => toast("H\xE0ng ch\u1EDD \u0111\u1EA7y, c\xF3 kh\xE1ch b\u1ECF \u0111i \u{1F636}", "err", 1200));
  on("ding", () => sfx("bell"));
  on("buyer", (id) => toast(`\u{1F9FA} Nh\xE2n vi\xEAn \u0111i ch\u1EE3 v\u1EEBa mua ${ITEMS[id].name}`, "", 1500));
  on("online:new", () => updatePhone());
  on("table:clean", ({ i, tip }) => {
    if (SH.view === "lobby") {
      markDirty("view");
      fxText(`+${fmtK(tip)}`, $(`[data-table="${i}"]`));
      sfx("coin");
    }
  });
  on("tables", () => {
    if (SH.view === "lobby") markDirty("view");
    else updateLobbyBtn();
  });
  function refreshQueue() {
    const row2 = $("#qrow");
    if (!row2) return;
    const front = frontCustomer();
    row2.innerHTML = SH.queue.map((c) => `<button class="qav ${front === c ? "on" : ""}" data-act="sel" data-cid="${c.id}" aria-label="Kh\xE1ch ${esc(c.tag)}"><span class="ring" data-ring="${c.id}" style="--p:${(c.p / c.maxP * 100).toFixed(0)}"></span><b>${c.online ? c.avatar : customerArt(c.key) || c.avatar}</b>${SH.jobs.some((j) => j.cid === c.id && j.by === "genZ") ? '<span class="genz-job"><b>\u26A1</b><i></i></span>' : ""}</button>`).join("") || '<span class="q-empty">Ch\u01B0a c\xF3 kh\xE1ch...</span>';
  }
  function refreshCustomer() {
    const av = $("#cav"), bub = $("#cbub");
    if (!av || serveHold) return;
    const c = frontCustomer();
    if (!c) {
      av.innerHTML = '<span class="idle">\u2615</span>';
      bub.innerHTML = '<div class="btxt dim">Qu\u1EA7y \u0111ang v\u1EAFng... chu\u1EA9n b\u1ECB ly n\u01B0\u1EDBc th\u1EADt ngon nh\xE9!</div>';
      return;
    }
    av.classList.remove("enter");
    bub.classList.remove("enter");
    void av.offsetWidth;
    av.classList.add("enter");
    bub.classList.add("enter");
    const o = c.order;
    const workerJob = SH.jobs.find((j) => j.cid === c.id && j.by === "genZ");
    av.innerHTML = `<span class="face">${c.online ? c.avatar : customerArt(c.key) || c.avatar}</span>`;
    bub.innerHTML = `<div class="order-head"><span class="atag">${esc(c.tag)}</span><button class="rej" data-act="reject" aria-label="T\u1EEB ch\u1ED1i \u0111\u01A1n c\u1EE7a ${esc(c.tag)}">\u2716 T\u1EEB ch\u1ED1i</button></div>${workerJob ? `<div class="genz-order-status">\u2728 Gen Z \u0111ang x\u1EED l\xFD \u0111\u01A1n n\xE0y</div>` : ""}<div class="b-row">${orderCup(o)}<div><div class="btxt" tabindex="0" aria-label="N\u1ED9i dung \u0111\u01A1n h\xE0ng">${esc(c.text)}</div></div></div>
    <div class="pat"><span>KI\xCAN NH\u1EAAN</span><div class="bar" id="patBar"><i style="width:${(c.p / c.maxP * 100).toFixed(0)}%"></i></div></div>`;
  }
  function updateBoard(force) {
    const slot = $("#cupslot"), txt = $("#boardTxt"), bar2 = $("#pourbar");
    if (!slot) return;
    const b = SH.board;
    if (!b) {
      slot.innerHTML = "";
      txt.style.display = "";
      bar2.classList.remove("on");
      return;
    }
    txt.style.display = "none";
    bar2.classList.add("on");
    const sig = `${b.phase}|${b.tea}|${b.flavor}|${b.tops.join(",")}|${b.size}|${!!b.iceAdded}|${!!b.sugarAdded}`;
    if (force || slot.dataset.sig !== sig) {
      slot.dataset.sig = sig;
      slot.innerHTML = cupHTML(b);
    }
    setCupFill(slot.querySelector(".cup"), b.fill);
    $("#pbFill").style.width = `${clamp(b.fill / 1.25 * 100, 0, 100)}%`;
    $("#pbFill").className = b.fill > 1.02 ? "over" : b.fill >= 0.85 ? "ok" : "";
    slot.classList.toggle("ready", b.phase === "ready");
  }
  function updatePhone() {
    const bd = $("#phoneBadge");
    if (!bd) return;
    bd.textContent = SH.onlineQ.length;
    bd.parentElement.classList.toggle("has", SH.onlineQ.length > 0);
  }
  function updateLobbyBtn() {
    var _a;
    const c = $("#lobbyCnt");
    if (!c) return;
    const dirty2 = SH.tables.filter((t) => t.s === "dirty").length;
    c.textContent = `${SH.tables.filter((t) => t.s === "busy").length}/${SH.tables.length}`;
    (_a = $("#lobbyGo")) == null ? void 0 : _a.classList.toggle("alert", dirty2 > 0);
  }
  function hintText() {
    const auto = SH.board && SH.board.auto;
    if (auto) {
      const labels = { tea: "ch\u1ECDn tr\xE0", pour: "r\xF3t tr\xE0", flavor: "th\xEAm h\u01B0\u01A1ng", sugar: "th\xEAm \u0111\u01B0\u1EDDng", ice: "th\xEAm \u0111\xE1", topping: "th\xEAm topping" };
      return `${auto.st.name}: ${auto.waiting || labels[auto.stage] || "chu\u1EA9n b\u1ECB pha"}`;
    }
    if (!S.settings.hints) return "";
    const c = frontCustomer();
    if (!c) return "Ch\u1EDD kh\xE1ch gh\xE9 qu\u1EA7y...";
    const o = c.order, b = SH.board;
    if (!b) return `B\u01B0\u1EDBc 1: ch\u1EA1m ch\u1ED3ng ly ${o.size}`;
    if (b.phase === "sealing") return "\u0110ang \u0111\xF3ng n\u1EAFp...";
    if (b.phase === "ready") return "Xong r\u1ED3i! Ch\u1EA1m ly \u0111\u1EC3 giao cho kh\xE1ch";
    if (b.pouring) return "Ch\u1EA1m l\u1EA7n n\u1EEFa \u0111\u1EC3 d\u1EEBng khi thanh t\u1EDBi v\xF9ng v\xE0ng";
    if (!b.tea) return `B\u01B0\u1EDBc 2: ch\u1EA1m b\xECnh ${ITEMS[o.tea].name} \u0111\u1EC3 r\xF3t`;
    if (b.size !== o.size) return `Kh\xE1ch mu\u1ED1n size ${o.size}, \u0111\u1ED5 ly (\u{1F5D1}\uFE0F) v\xE0 l\u1EA5y l\u1EA1i nh\xE9`;
    if (b.tea !== o.tea) return `Sai tr\xE0! Kh\xE1ch mu\u1ED1n ${ITEMS[o.tea].name}`;
    if (o.flavor && !b.flavor) return `B\u01B0\u1EDBc 3: ch\u1EA1m chai h\u01B0\u01A1ng ${ITEMS[o.flavor].name}`;
    const miss = o.tops.filter((t) => !b.tops.includes(t));
    if (miss.length) return `B\u01B0\u1EDBc 4: th\xEAm topping ${miss.map((t) => ITEMS[t].name).join(", ")}`;
    return "B\u01B0\u1EDBc 5: ch\u1EA1m M\xC1Y \u0110\xD3NG N\u1EAEP \u1EDF b\xEAn ph\u1EA3i";
  }
  var cntT = 0;
  function frameSell(dt, force) {
    var _a, _b, _c;
    if (S.phase !== "sell") return;
    updateClock();
    if (SH.view === "lobby") {
      lobbyFrame();
      return;
    }
    if (!root || !root.isConnected) return;
    fitCounter();
    updateStaffJobs();
    refreshCounterPets();
    cntT -= dt;
    const front = frontCustomer();
    const bar2 = $("#patBar > i");
    if (bar2 && front) {
      const r = front.p / front.maxP;
      bar2.style.width = `${(r * 100).toFixed(0)}%`;
      bar2.parentElement.className = `bar ${r < 0.25 ? "danger" : r < 0.55 ? "warn" : ""}`;
    }
    for (const c of SH.queue) {
      const rg = $(`[data-ring="${c.id}"]`);
      if (rg) rg.style.setProperty("--p", (c.p / c.maxP * 100).toFixed(0));
    }
    const hint = $("#hint");
    if (hint) {
      const t = hintText();
      if (hint.textContent !== t) hint.textContent = t;
      hint.style.display = t ? "" : "none";
    }
    updateBoard(false);
    const st = $("#stream");
    const b = SH.board;
    const slot = $("#cupslot");
    const pouring = !!(b == null ? void 0 : b.pouring) && canShowBrewFx();
    slot == null ? void 0 : slot.classList.toggle("pouring-art", pouring);
    if (pouring && b.tea && slot) {
      const d = $(`.disp[data-tea="${b.tea}"] .tap`);
      if (d && st) {
        const a = d.getBoundingClientRect(), r0 = root.getBoundingClientRect();
        const tapX = a.left + a.width / 2;
        if (((_a = slot._pour) == null ? void 0 : _a.tea) !== b.tea) {
          const board = slot.offsetParent, br = board.getBoundingClientRect();
          const baseL = br.left + board.clientLeft + slot.offsetLeft, baseT = br.top + board.clientTop + slot.offsetTop;
          const cupEl = slot.querySelector(".cup");
          const cupW = cupEl ? cupEl.offsetWidth : 60, cupH = cupEl ? cupEl.offsetHeight : 80;
          const cupTop = baseT + slot.offsetHeight - 6 - cupH;
          const cx = clamp(tapX, r0.left + cupW / 2 + 8, r0.right - cupW / 2 - 8);
          const nx = Math.round(cx - (baseL + slot.offsetWidth / 2)), ny = 0;
          slot.style.transform = `translate(${nx}px,${ny}px)`;
          slot.classList.add("under-tap");
          slot._pour = { tea: b.tea, t0: performance.now(), lastSfx: performance.now(), mouthY: cupTop + ny + 4 };
        }
        const P3 = slot._pour;
        if (performance.now() - P3.t0 > 380) {
          const cupEl = slot.querySelector(".cup");
          const mouth = cupEl.getBoundingClientRect();
          const liq = cupEl.querySelector(".c-liq");
          const lr = liq ? liq.getBoundingClientRect() : null;
          const surfaceY = lr && lr.height > 2 ? lr.top + 2 : mouth.bottom - 8;
          const rimY = mouth.top + mouth.height * 0.12;
          const dx = mouth.left + mouth.width / 2 - tapX, dy = Math.max(10, surfaceY - a.bottom);
          const len = Math.hypot(dx, dy);
          const rim = clamp((rimY - a.bottom) / dy, 0, 1) * 100;
          const angle = -Math.atan2(dx, dy) * 180 / Math.PI;
          st.style.cssText = `display:block;left:${tapX - 4 - r0.left}px;top:${a.bottom - r0.top}px;height:${len}px;--rim:${rim.toFixed(1)}%;--tea:${ITEMS[b.tea].color};--impact-angle:${-angle}deg;transform-origin:50% 0;transform:rotate(${angle}deg);color:${ITEMS[b.tea].color}`;
          if (performance.now() - P3.lastSfx > 1100) {
            P3.lastSfx = performance.now();
            sfx("pour");
          }
        } else st.style.display = "none";
      }
    } else {
      if (st) st.style.display = "none";
      if (slot == null ? void 0 : slot._pour) {
        slot._pour = null;
        slot.style.transform = "";
        slot.classList.remove("under-tap");
      }
    }
    if (cntT <= 0 || force) {
      cntT = 0.25;
      updateStaffStrip();
      for (const el of $$(".supply-btn[data-id]", root)) {
        const added = !!(b == null ? void 0 : b[el.dataset.id === "da" ? "iceAdded" : "sugarAdded"]);
        el.classList.toggle("added", added);
        $(".supply-state", el).textContent = added ? "\u2713 \u0110\xE3 th\xEAm" : "1 ph\u1EA7n/ly";
        el.disabled = !b || b.phase !== "cup" || added;
      }
      const generator = $('.equip-chip[data-id="mayPhat"]', root);
      if (generator) {
        const running2 = ((_b = SH.ev) == null ? void 0 : _b.off) > 0 && ((_c = SH.ev.mode) == null ? void 0 : _c.startsWith("gen"));
        generator.classList.toggle("running", !!running2);
        $("b", generator).textContent = running2 ? "\u0110ANG CH\u1EA0Y" : `C${equipLevel("mayPhat")}`;
      }
      updateSceneTime(SH.hour);
      for (const el of $$("[data-cnt]", root)) {
        const id = el.dataset.cnt, q = stockQty(id);
        el.textContent = q;
        el.parentElement.classList.toggle("empty", q === 0);
        el.parentElement.classList.toggle("exp-soon", q > 0 && expiringToday(id) > 0);
      }
      updatePhone();
      updateLobbyBtn();
      for (const d of $$(".disp", root)) d.classList.toggle("pouring", !!((b == null ? void 0 : b.pouring) && b.tea === d.dataset.tea));
    }
  }
  function openOnlineList() {
    const draw = () => {
      if (!SH.onlineQ.length) return '<p class="m-text center">Ch\u01B0a c\xF3 \u0111\u01A1n online n\xE0o. C\u1EA7n m\u1EDF app trong N\xE2ng c\u1EA5p \u203A Online.</p>';
      return SH.onlineQ.map((q) => `<div class="on-row"><span class="on-app" style="background:${q.app.color}">${q.app.name[0]}</span><div class="grow"><b>${q.app.name}</b><small>${ITEMS[q.o.tea].name} ${q.o.size}${q.o.flavor ? " \xB7 " + ITEMS[q.o.flavor].name : ""}${q.o.tops.length ? " \xB7 " + q.o.tops.length + " topping" : ""}</small></div><button class="btn pri sm" data-act="acc" data-id="${q.id}">Nh\u1EADn \xB7 ${Math.ceil(q.exp)}s</button></div>`).join("");
    };
    const m = openModal({ id: "online", cls: "small", html: `<h3 class="m-title">\u{1F4F1} \u0110\u01A1n online</h3><div id="onl">${draw()}</div><button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, { acc: (t) => {
      const e = acceptOnline(+t.dataset.id);
      if (e) toast(e, "err");
      else {
        toast("\u0110\xE3 nh\u1EADn \u0111\u01A1n!", "ok");
        $("#onl", m.body).innerHTML = draw();
      }
    }, x: () => m.close() });
  }
  function renderLobby(view) {
    const busy = SH.tables.filter((t) => t.s === "busy").length;
    view.innerHTML = `<div class="lobby" id="lobby">
    <div class="lobby-top"><button class="btn pri" data-act="back">\u2190 V\xE0o qu\u1EA7y<br/>pha ch\u1EBF</button>
      <div class="lobby-stat"><span>\u{1F465} Ch\u1EDD: <b>${SH.queue.length}</b> kh\xE1ch</span><span>\u{1FA91} B\xE0n: <b>${busy}/${SH.tables.length}</b> b\xE0n</span><span>\u{1F4B0} <b>${fmtK(S.money)}</b></span></div></div>
    <div class="lcard"><div class="lc-h"><h4>\u{1F9CB} Qu\u1EA7y Pha Ch\u1EBF & H\xE0ng Ch\u1EDD</h4><span class="pill">\u0110ang ch\u1EDD: ${SH.queue.length} ng\u01B0\u1EDDi</span></div>
      <p class="muted">Kh\xE1ch t\u1EF1 \u0111\u1ED9ng \u0111\u1EBFn x\u1EBFp h\xE0ng (t\u1ED1i \u0111a ${bonus().queue} kh\xE1ch ch\u1EDD).</p>
      <div class="lobby-q">${SH.queue.map((c) => `<span class="lq">${c.avatar}</span>`).join("") || "<em>Ch\u01B0a c\xF3 kh\xE1ch x\u1EBFp h\xE0ng</em>"}</div></div>
    <div class="lcard"><div class="lc-h"><h4>\u{1FA91} Khu B\xE0n Gh\u1EBF Kh\xE1ch Ng\u1ED3i</h4><span class="pill y">\u{1FA91} +10% ng\u1ED3i t\u1EA1i qu\xE1n</span></div>
      <p class="muted">Kh\xE1ch ch\u1EC9 v\xE0o ng\u1ED3i khi b\xE0n \u0111\u01B0\u1EE3c d\u1ECDn s\u1EA1ch \u2728 \u2014 ch\u1EA1m b\xE0n d\u01A1 \u0111\u1EC3 d\u1ECDn.</p>
      <div class="tables">${SH.tables.map((t, i) => `<button class="tbl ${t.s}" data-act="table" data-i="${i}" data-table="${i}" aria-label="B\xE0n ${i + 1}"><span class="t-ico">${t.s === "busy" ? t.av || "\u{1F9D1}" : t.s === "dirty" ? "\u{1F9F9}" : "\u2728"}</span><small>${t.s === "busy" ? "\u0110ang ng\u1ED3i" : t.s === "dirty" ? "D\u1ECDn b\xE0n!" : "B\xE0n s\u1EA1ch"}</small></button>`).join("")}</div></div>
  </div>`;
    bindActions($("#lobby"), {
      back: () => {
        SH.view = "counter";
        markDirty("view");
      },
      table: (t) => cleanTable(+t.dataset.i)
    });
  }
  var lobbyT = 0;
  function lobbyFrame() {
    lobbyT++;
    if (lobbyT % 20 === 0 && $("#lobby")) {
      const busy = SH.tables.filter((t) => t.s === "busy").length;
      const st = $(".lobby-stat");
      if (st) st.innerHTML = `<span>\u{1F465} Ch\u1EDD: <b>${SH.queue.length}</b> kh\xE1ch</span><span>\u{1FA91} B\xE0n: <b>${busy}/${SH.tables.length}</b> b\xE0n</span><span>\u{1F4B0} <b>${fmtK(S.money)}</b></span>`;
    }
  }

  // js/panels1.js
  var subtab = (k, d) => S.subtab[k] || d;
  var tabs = (key, list, def) => `<div class="tabs scroll">${list.map(([id, label]) => `<button class="tab ${subtab(key, def) === id ? "on" : ""}" data-act="sub" data-k="${key}" data-v="${id}">${label}</button>`).join("")}</div>`;
  var setSub = (t) => {
    S.subtab[t.dataset.k] = t.dataset.v;
    markDirty("panel");
  };
  var KHO_TABS = () => [["tra", "\u{1FAD6} Tr\xE0"], ["top", "\u{1F9CB} Topping"], ["dc", "\u{1F964} D\u1EE5ng c\u1EE5"], ...FLAVORS.some((f) => S.unlocked[f]) ? [["huong", "\u{1F353} H\u01B0\u01A1ng"]] : []];
  function khoRow(id) {
    var _a, _b;
    const it = ITEMS[id];
    const qty = stockQty(id), plan = S.plan[id] || 0;
    const unit = unitSize(id);
    const exp = expiringToday(id);
    const life = lifeDays(id);
    const remaining = nearestExpiry(id), stock = stockBreakdown(id);
    const expiryText = remaining === null ? life ? `L\xF4 m\u1EDBi: ${life} ng\xE0y` : "" : remaining <= 0 ? "Qu\xE1 h\u1EA1n" : remaining === 1 ? "H\u1EBFt h\u1EA1n h\xF4m nay" : `C\xF2n ${remaining} ng\xE0y`;
    const profit = it.price ? priceOf(id) - costOf(id) : 0;
    const pctMargin = it.price ? Math.round(profit / priceOf(id) * 100) : 0;
    const step = 1;
    return `<div class="krow">
    <span class="k-ico" style="background:${it.color}33">${it.icon}</span>
    <div class="k-main"><div class="k-t"><b>${it.name}</b>${expiryText ? `<span class="life">\u23F3 ${expiryText}</span>` : ""}</div>
      ${it.price && it.kind !== "supply" ? `<span class="sale">\u{1F4B5} B\xE1n ${pctMargin}% (+${fmtK(profit)})</span>` : ""}
      <small>\u{1F4E6} T\u1ED3n ${qty}${it.kind === "flavor" ? " ly" : ""} \xB7 ${fmtK(costOf(id) * (it.kind === "flavor" ? FLAVOR_BOTTLE : 1))}${it.kind === "flavor" ? "/chai" : "/ly"}${exp ? ` \xB7 <em class="warn">\u26A0\uFE0F ${exp} h\u1EBFt h\u1EA1n h\xF4m nay</em>` : ""}</small>
      <small>T\u1EEB h\xF4m tr\u01B0\u1EDBc: ${stock.old} \xB7 Nh\u1EADp h\xF4m nay c\xF2n: ${stock.fresh}${stock.unknown ? ` \xB7 L\xF4 c\u0169 ch\u01B0a r\xF5 ng\xE0y nh\u1EADp: ${stock.unknown}` : ""}</small>
      ${((_a = S.previousUsed) == null ? void 0 : _a[id]) || S.lastUsed[id] ? `<small>\u{1F3ED} H\xF4m qua d\xF9ng: ${((_b = S.previousUsed) == null ? void 0 : _b[id]) || 0} \xB7 H\xF4m nay d\xF9ng: ${S.lastUsed[id] || 0}</small>` : ""}
      ${stock.lots.length ? `<details class="stock-lots"><summary>H\u1EA1n d\xF9ng t\u1EEBng l\xF4</summary>${stock.lots.map((l) => `<small>${l.q} ph\u1EA7n \xB7 ${l.days === null ? "Kh\xF4ng h\u1EBFt h\u1EA1n" : l.days <= 0 ? "Qu\xE1 h\u1EA1n" : l.days === 1 ? "H\u1EBFt h\u1EA1n h\xF4m nay" : `C\xF2n ${l.days} ng\xE0y (t\xEDnh c\u1EA3 h\xF4m nay)`}</small>`).join("")}</details>` : ""}
      ${id === "da" || id === "duong" ? `<small class="supply-help">${id === "da" ? "\u{1F9CA} L\xE0m l\u1EA1nh ly" : "\u{1F36F} T\u1EA1o \u0111\u1ED9 ng\u1ECDt"}: 1 ph\u1EA7n/ly. Th\xEAm \u1EDF PHA LY; khi \u0111\xF3ng n\u1EAFp s\u1EBD t\u1EF1 th\xEAm ph\u1EA7n c\xF2n thi\u1EBFu.</small>` : ""}
      <small class="plan">${plan ? `+${plan * unit}${it.kind === "flavor" ? ` ly (${plan} chai)` : ""} \xB7 ${fmtK(unitCost(id) * plan)}` : "&nbsp;"}</small></div>
    <div class="stepper"><button data-act="k-" data-id="${id}" data-step="${step}" aria-label="Gi\u1EA3m">\u2212</button><input class="num" type="number" inputmode="numeric" min="0" max="999" value="${plan}" data-plan="${id}" aria-label="S\u1ED1 l\u01B0\u1EE3ng ${it.name}"><button data-act="k+" data-id="${id}" data-step="${step}" aria-label="T\u0103ng">+</button></div>
  </div>`;
  }
  var kho = {
    html() {
      const t = subtab("kho", "tra");
      let list = [];
      let head = "";
      if (t === "tra") list = TEAS.filter((i) => S.unlocked[i]);
      else if (t === "dc") list = SUPPLIES;
      else if (t === "huong") {
        list = FLAVORS.filter((i) => S.unlocked[i]);
        head = `<p class="note">\u{1F353} 1 chai = ${FLAVOR_BOTTLE} ly. H\u1EA1n l\xF4 m\u1EDBi t\u0103ng theo t\u1EE7 l\u1EA1nh; h\u1EA1n c\xF2n l\u1EA1i c\u1EE7a t\u1EEBng l\xF4 hi\u1EC3n th\u1ECB b\xEAn d\u01B0\u1EDBi. H\u1EBFt chai th\xEC c\u1EA7n mua th\xEAm.</p>`;
      } else {
        return `${tabs("kho", KHO_TABS(), "tra")}${TOP_GROUPS.map((g) => {
          const items = TOPS.filter((i) => ITEMS[i].group === g && S.unlocked[i]);
          return items.length ? `<h5 class="grp">${g}</h5>${items.map(khoRow).join("")}` : "";
        }).join("")}${khoLegend()}`;
      }
      return `${tabs("kho", KHO_TABS(), "tra")}${head}${list.map(khoRow).join("")}${khoLegend()}`;
    },
    acts: {
      sub: setSub,
      "k+": (t) => {
        const id = t.dataset.id;
        setPlan(id, (S.plan[id] || 0) + +t.dataset.step);
      },
      "k-": (t) => {
        const id = t.dataset.id;
        setPlan(id, (S.plan[id] || 0) - +t.dataset.step);
      }
    },
    bind(root2) {
      for (const inp of root2.querySelectorAll("[data-plan]")) {
        inp.addEventListener("change", () => setPlan(inp.dataset.plan, Math.round(+inp.value || 0)));
      }
    }
  };
  var khoLegend = () => '<div class="legend">\u{1F4E6} T\u1ED3n t\u1EEB h\xF4m tr\u01B0\u1EDBc l\xE0 ph\u1EA7n c\xF2n l\u1EA1i ch\u01B0a d\xF9ng \xB7 \u01B0u ti\xEAn d\xF9ng l\xF4 s\u1EAFp h\u1EBFt h\u1EA1n \xB7 h\xE0ng h\u1EBFt h\u1EA1n h\xF4m nay \u0111\u01B0\u1EE3c b\u1ECF cu\u1ED1i ca.</div>';
  var GIA_TABS = () => [["tra", "\u{1FAD6} Tr\xE0"], ["huong", "\u{1F353} H\u01B0\u01A1ng"], ["top", "\u{1F9CB} Topping"], ["size", "\u2B06\uFE0F Size"]];
  var giaRow = (id) => {
    const it = ITEMS[id];
    const cost = costOf(id);
    const p = priceOf(id);
    return `<div class="grow-row"><span class="k-ico" style="background:${it.color}33">${it.icon}</span>
    <div class="k-main"><b>${it.name}</b><small>\u{1F4A1} ${fmtK(p)} \xB7 V\u1ED1n ${fmtK(cost)} \xB7 L\xE3i ${fmtK(p - cost)}</small></div>
    <div class="pinput"><input type="number" inputmode="decimal" min="0" step="0.5" value="${p / 1e3}" data-price="${id}" aria-label="Gi\xE1 ${it.name}"><span>k</span></div></div>`;
  };
  var giaban = {
    html() {
      const t = subtab("gia", "tra");
      let body = "";
      if (t === "tra") body = TEAS.filter((i) => S.unlocked[i]).map(giaRow).join("");
      else if (t === "huong") {
        const l = FLAVORS.filter((i) => S.unlocked[i]);
        body = l.length ? l.map(giaRow).join("") : '<div class="lockbox">\u{1F512}\u{1F6E0}\uFE0F<br/>M\u1EDF kh\xF3a H\u01B0\u01A1ng trong N\xE2ng c\u1EA5p \u203A H\u01B0\u01A1ng</div>';
      } else if (t === "top") {
        const l = TOPS.filter((i) => S.unlocked[i]);
        body = TOP_GROUPS.map((g) => {
          const x = l.filter((i) => ITEMS[i].group === g);
          return x.length ? `<h5 class="grp">${g}</h5>${x.map(giaRow).join("")}` : "";
        }).join("");
      } else body = `<div class="grow-row"><span class="k-ico">\u2B06\uFE0F</span><div class="k-main"><b>Size L</b><small>\u{1F4A1} ${fmtK(priceOf("sizeL"))} \xB7 ph\u1EE5 thu so v\u1EDBi size M</small></div><div class="pinput"><input type="number" inputmode="decimal" min="0" max="${SIZE_L_CAP / 1e3}" step="0.5" value="${priceOf("sizeL") / 1e3}" data-price="sizeL" aria-label="Gi\xE1 size L"><span>k</span></div></div>`;
      return `<details class="warnbox"><summary>\u26A0\uFE0F Quy t\u1EAFc gi\xE1 b\xE1n <small>${safePrice() ? "\xB7 \u0111\xE3 c\xF3 Qu\u1EA3n Gia" : "\xB7 ch\u01B0a c\xF3 Qu\u1EA3n Gia"}</small></summary>
      <p>\u2022 M\xF3n n\xE0o (tr\xE0, h\u01B0\u01A1ng, topping) tr\xEAn <b>50k</b>: Kh\xE1ch ch\xEA m\u1EAFc, qu\xE1n v\u1EAFng <b>80% kh\xE1ch</b>.</p>
      <p>\u2022 M\u1ED9t ly tr\xEAn <b>120k</b>: <b>60% kh\xE1ch b\u1ECF \u0111i</b> v\xE0 \u0111\xE1nh gi\xE1 1\u2605-2\u2605.</p>
      <p>\u2022 Size L tr\xEAn <b>20k</b> l\xE0 \u0111\u1EAFt (90% kh\xE1ch n\xE9), size L t\u1ED1i \u0111a <b>50k</b> (\u0111\u1EC3 \u0111\xFAng m\u1EE9c n\xE0y kh\xF4ng ai ch\u1ECDn v\xE0 qu\xE1n v\u1EAFng 80%).</p>
      <p>\u2022 H\u01B0\u01A1ng & Topping tr\xEAn <b>20k</b>: 80% kh\xE1ch kh\xF4ng g\u1ECDi; tr\xEAn <b>30k</b>: kh\xF4ng ai g\u1ECDi.</p>
      <p class="tip">\u{1F4A1} Ch\u1EC9 \u0111\u01B0\u1EE3c t\u0103ng gi\xE1 an to\xE0n kh\xF4ng b\u1ECB ph\u1EA1t khi s\u1EDF h\u1EEFu <b>Qu\u1EA3n Gia</b> (m\u1EE5c Nh\xE2n s\u1EF1 \u203A Qu\u1EA3n l\xFD t\u1EADp s\u1EF1)!</p></details>
      ${tabs("gia", GIA_TABS(), "tra")}${body}`;
    },
    acts: {
      sub: setSub
    },
    bind(root2) {
      root2.querySelectorAll("[data-price]").forEach((inp) => inp.addEventListener("change", () => {
        setPrice(inp.dataset.price, Math.round(parseFloat(inp.value || "0") * 1e3));
        markDirty("panel", "board");
      }));
    }
  };
  var NC_TABS = [["tra", "\u{1F375} Tr\xE0"], ["huong", "\u{1F353} H\u01B0\u01A1ng"], ["top", "\u{1F9CB} Topping"], ["trangbi", "\u{1F6E0}\uFE0F Trang b\u1ECB"], ["decor", "\u{1F43E} Decor Th\xFA C\u01B0ng"], ["nv", "\u{1F3C6} Nh\xE2n vi\xEAn"], ["online", "\u{1F4F2} Online"]];
  function catCard(key) {
    const c = CATEGORIES[key], lvl = S.cat[key] || 0;
    return `<div class="catcard"><div><b>\u2B50 N\xC2NG C\u1EA4P C\u1EA4P \u0110\u1ED8 (LEVEL)</b><h4>H\u1EA1ng m\u1EE5c: ${c.name} (C\u1EA5p ${lvl})</h4><p>${c.desc}</p><p class="eff">Hi\u1EC7u qu\u1EA3 hi\u1EC7n t\u1EA1i: <b>+${(lvl * c.per * 100).toFixed(1)}%</b></p></div>
    <button class="btn pri sm" data-act="cat" data-k="${key}">N\xE2ng l\xEAn C\u1EA5p ${lvl + 1}<br/>${fmtK(catCost(lvl))}</button></div>`;
  }
  function itemBuyRow(id, extra = "") {
    const it = ITEMS[id];
    if (S.unlocked[id]) {
      const on2 = S.onMenu[id];
      return `<div class="nrow"><span class="k-ico" style="background:${it.color}33">${it.icon}</span><div class="k-main"><b>${it.name}</b>${extra}</div><button class="btn sm ${on2 ? "ghost" : "pri"}" data-act="menu" data-id="${id}">${on2 ? "\u2713 B\u1ECF kh\u1ECFi menu" : "Th\xEAm v\xE0o menu"}</button></div>`;
    }
    return `<div class="nrow"><span class="k-ico" style="background:${it.color}33">${it.icon}</span><div class="k-main"><b>${it.name}</b>${extra || (it.kind === "flavor" ? '<small class="red">H\u1EBFt h\xE0ng, ch\u01B0a c\xF3 trong menu</small>' : "")}</div><button class="btn sm gold" data-act="unlock" data-id="${id}">${fmtK(it.unlock)}<br/>Mua</button></div>`;
  }
  var nangcap = {
    html() {
      const t = subtab("nc", "tra");
      let body = "";
      if (t === "tra") body = catCard("tra") + TEAS.map((i) => itemBuyRow(i)).join("");
      else if (t === "huong") body = catCard("huong") + `<p class="note">1 chai = ${FLAVOR_BOTTLE} ly, d\xF9ng \u0111\u01B0\u1EE3c 7 ng\xE0y t\xEDnh c\u1EA3 ng\xE0y mua. Mua 2 chai \u0111\u01B0\u1EE3c ${FLAVOR_BOTTLE * 2} ly. H\u1EBFt chai th\xEC ph\u1EA3i mua chai m\u1EDBi m\u1EDBi d\xF9ng \u0111\u01B0\u1EE3c, ch\u01B0a h\u1EBFt h\u1EA1n b\u1ECB \u0111\u1ED5 b\u1ECF.</p>` + FLAVORS.map((i) => itemBuyRow(i, S.unlocked[i] ? `<small>C\xF2n ${stockQty(i)} ly</small>` : "")).join("");
      else if (t === "top") body = catCard("top") + TOP_GROUPS.map((g) => `<h5 class="grp">${g}</h5>` + TOPS.filter((i) => ITEMS[i].group === g).map((i) => itemBuyRow(i)).join("")).join("");
      else if (t === "trangbi") body = EQUIP.map(equipRow).join("");
      else if (t === "decor") body = `<h4 class="subh">\u{1F3E1} Trang Tr\xED & N\xE2ng C\u1EA5p Nh\xE0 Th\xFA C\u01B0ng (Pet House Decor)</h4>${S.pet ? "" : '<p class="note">C\u1EA7n nh\u1EADn nu\xF4i th\xFA c\u01B0ng \u1EDF menu Th\xFA c\u01B0ng tr\u01B0\u1EDBc khi mua.</p>'}` + PET_DECOR.map((d) => `<div class="nrow"><span class="k-ico">${d.icon}</span><div class="k-main"><b>${d.name}</b><small>${d.desc}</small><small class="eff">\u2728 ${d.fx}</small></div><button class="btn sm ${S.petDecor[d.id] ? "ghost" : "gold"}" data-act="decor" data-id="${d.id}" ${S.petDecor[d.id] ? "disabled" : ""}>${S.petDecor[d.id] ? "\u2713 \u0110\xE3 c\xF3" : fmtK(d.cost) + "<br/>Mua"}</button></div>`).join("");
      else if (t === "nv") body = catCard("nv") + `<div class="note">Thu\xEA & qu\u1EA3n l\xFD nh\xE2n vi\xEAn \u1EDF menu <b>Qu\u1EA3n l\xFD nh\xE2n s\u1EF1</b>. M\u1ED7i c\u1EA5p t\u0103ng t\u1ED1c \u0111\u1ED9 l\xE0m vi\u1EC7c c\u1EE7a to\xE0n b\u1ED9 nh\xE2n vi\xEAn.</div><button class="btn pri block" data-act="goto" data-to="nhansu">\u{1F3C6} \u0110i t\u1EDBi Qu\u1EA3n l\xFD nh\xE2n s\u1EF1</button>`;
      else body = onlineHTML();
      return `<div class="tabs scroll">${NC_TABS.map(([id, l]) => `<button class="tab ${t === id ? "on" : ""}" data-act="sub" data-k="nc" data-v="${id}">${l}</button>`).join("")}</div>${body}`;
    },
    acts: {
      sub: setSub,
      cat: (t) => {
        const e = buyCategory(t.dataset.k);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("success");
          fxSpark(t, 6);
          toast("N\xE2ng c\u1EA5p th\xE0nh c\xF4ng!", "ok");
        }
      },
      menu: (t) => {
        const e = toggleMenu(t.dataset.id);
        if (e) toast(e, "err");
      },
      unlock: (t) => {
        const e = unlockItem(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("unlock");
          fxSpark(t, 8);
          toast(`\u0110\xE3 m\u1EDF kh\xF3a ${ITEMS[t.dataset.id].name}!`, "ok");
        }
      },
      equip: (t) => {
        const e = buyEquip(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("unlock");
          fxSpark(t, 8);
          toast("\u0110\xE3 n\xE2ng c\u1EA5p trang b\u1ECB!", "ok");
        }
      },
      decor: (t) => {
        const e = buyDecor(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("unlock");
          toast("\u0110\xE3 mua!", "ok");
        }
      },
      app: (t) => {
        const e = toggleApp(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else toast("\u0110\xE3 c\u1EADp nh\u1EADt \u1EE9ng d\u1EE5ng", "ok");
      }
    }
  };
  function equipRow(eq) {
    const lv = equipLevel(eq.id), next = equipNext(eq.id);
    const cur2 = lv > 0 ? eq.tiers[lv - 1] : null;
    return `<div class="erow"><span class="k-ico big">${eq.icon}</span><div class="k-main"><div class="k-t"><b>${eq.name}</b><span class="tier">${lv ? `C${lv}` : "Ch\u01B0a mua"}</span></div>
    <small>${cur2 ? `${cur2.n}: ${cur2.d}` : "Ch\u01B0a s\u1EDF h\u1EEFu"}</small>
    <div class="pips">${eq.tiers.map((_, i) => `<i class="${i < lv ? "on" : ""}"></i>`).join("")}</div>
    ${next ? `<button class="btn sm gold full" data-act="equip" data-id="${eq.id}">L\xEAn C${lv + 1} \xB7 ${next.n} \xB7 ${fmtK(next.c)}</button>` : '<button class="btn sm ghost full" disabled>\u0110\xE3 \u0111\u1EA1t c\u1EA5p t\u1ED1i \u0111a</button>'}</div></div>`;
  }
  function onlineHTML() {
    const pr = onlineProgress();
    const bar2 = (l, v, t, f) => `<div class="gate"><span>${l}</span><div class="bar"><i style="width:${Math.min(100, v / t * 100)}%"></i></div><b>${f(v)}/${f(t)}</b></div>`;
    const ok = pr.profit >= ONLINE_GATE.profit && pr.orders >= ONLINE_GATE.orders && pr.rating >= ONLINE_GATE.rating;
    return `${catCard("online")}
    <div class="catcard col"><h4>\u{1F4F2} M\u1EDF b\xE1n Online (${APPS.map((a) => a.name).join(", ")})</h4>
      ${bar2("\u{1F4B0} l\u1EE3i nhu\u1EADn", pr.profit, ONLINE_GATE.profit, (x) => fmtK(Math.max(0, x)))}${bar2("\u{1F9CB} \u0111\u01A1n", pr.orders, ONLINE_GATE.orders, (x) => x)}${bar2("\u2B50 \u0111\xE1nh gi\xE1", pr.rating, ONLINE_GATE.rating, (x) => x.toFixed(1))}
      <p class="note">Khi \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n, c\u1EA3 ${APPS.length} app \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t! M\u1ED7i tablet ch\u1EA1y 1 app. C\u1EA7n duy tr\xEC \u0111\xE1nh gi\xE1 t\u1EEB 4,0\u2605 tr\u1EDF l\xEAn. Ph\xED app \u2212${APP_FEE * 100}%. Tablet \u0111ang c\xF3: <b>${tabletsOwned()}/4</b>.</p></div>
    ${APPS.map((a) => `<div class="nrow"><span class="app-dot" style="background:${a.color}">${a.name[0]}</span><div class="k-main"><b>${a.name}</b><small>M\u1EDF c\xF9ng ${a.name} \xB7 c\u1EA7n \u2B50 ${ONLINE_GATE.rating.toFixed(1)} tr\u1EDF l\xEAn \xB7 m\u1ED7i tablet ch\u1EA1y 1 app</small></div>
      <button class="btn sm ${S.apps[a.id] ? "ghost" : ok ? "pri" : "ghost"}" data-act="app" data-id="${a.id}">${S.apps[a.id] ? "\u2713 \u0110ang b\u1EADt" : ok ? "B\u1EADt app" : "Ch\u01B0a \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n"}</button></div>`).join("")}`;
  }
  var PANELS1 = { kho, giaban, nangcap };

  // js/panels2.js
  function staffCard(st) {
    const hired = !!S.staff[st.id];
    const why = hireBlock(st.id);
    const wageTxt = `${fmtK(st.wage)}/ng\xE0y${st.revPct ? ` + ${st.revPct * 100}% doanh thu` : ""}`;
    return `<div class="staffcard ${hired ? "hired" : ""}"><div class="sc-top"><span class="sc-av">${staffArt(st.id)}</span><div class="grow"><b>${esc(st.name)}</b><small>(${esc(st.role)})</small>
      <div class="sc-st">${hired ? "\u{1F7E2} \u0110ang l\xE0m" : "\u26AA Ch\u01B0a tuy\u1EC3n"}</div><div class="sc-w">\u{1F4B5} L\u01B0\u01A1ng ${wageTxt}</div></div>
      ${hired ? `<button class="btn ghost sm" data-act="fire" data-id="${st.id}">Cho ngh\u1EC9</button>` : why ? `<span class="why">${esc(why)}</span>` : `<button class="btn pri sm" data-act="hire" data-id="${st.id}">${fmtK(st.hire)}<br/>Thu\xEA</button>`}</div>
    <details class="fold"><summary>Xem chi ti\u1EBFt</summary><p class="sc-d">${esc(st.desc)}</p></details></div>`;
  }
  var nhansu = {
    html() {
      const n = S.kpi.shifts;
      const callPct = Math.min(8, staffCount());
      const hiredList = STAFF.filter((s) => S.staff[s.id]);
      const avail = STAFF.filter((s) => !S.staff[s.id]);
      return `<div class="kpi"><div class="kpi-h"><b>\u{1F4CA} Chu k\u1EF3 x\xE9t KPI & Tr\u1EA3 l\u01B0\u01A1ng 7 ca b\xE1n n\u01B0\u1EDBc</b><span class="chip">Ca ${n}/7</span></div>
      <div class="bar"><i style="width:${(n / 7 * 100).toFixed(0)}%"></i></div>
      <p>\u0110\xE3 t\xEDch lu\u1EF9 ${n}/7 ca b\xE1n. C\xF2n ${7 - n} ca b\xE1n n\u1EEFa s\u1EBD \u0111\u1EBFn \u0111\u1EE3t x\xE9t KPI & thanh to\xE1n d\u1ED3n ti\u1EC1n l\u01B0\u01A1ng, cho to\xE0n b\u1ED9 nh\xE2n vi\xEAn. L\u01B0\u01A1ng ch\u1EDD thanh to\xE1n: ${fmtK(S.kpi.payable || 0)}.</p>
      <span class="chip green">\u{1F4E3} G\u1ECDi th\xEAm kh\xE1ch: +${callPct}%</span>
      <button class="btn soft block" data-act="kpi">\u{1F50D} Xem chi ti\u1EBFt KPI & Phong \u0111\u1ED9 nh\xE2n vi\xEAn</button></div>
      ${hiredList.length ? `<h5 class="grp">\u0110\u1ED9i ng\u0169 qu\xE1n (${hiredList.length})</h5>${hiredList.map(staffCard).join("")}` : `<div class="emptybox">\u{1F468}\u200D\u{1F373}<b>Ch\u01B0a c\xF3 nh\xE2n vi\xEAn n\xE0o trong \u0111\u1ED9i ng\u0169 qu\xE1n</b><p>B\u1EA1n c\xF3 th\u1EC3 b\u1EA5m <b>Thu\xEA</b> ngay \u1EE9ng vi\xEAn b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u ch\u1EA5m c\xF4ng & x\xE9t KPI.</p></div>`}
      <h5 class="grp">\u2795 TUY\u1EC2N TH\xCAM NH\xC2N VI\xCAN M\u1EDAI (${avail.length}):</h5>${avail.map(staffCard).join("")}`;
    },
    acts: {
      hire: (t) => {
        const e = hire(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("success");
          toast("\u0110\xE3 thu\xEA nh\xE2n vi\xEAn m\u1EDBi! \u{1F44F}", "ok");
        }
      },
      fire: (t) => confirmBox("Cho ngh\u1EC9 vi\u1EC7c?", "Nh\xE2n vi\xEAn s\u1EBD r\u1EDDi qu\xE1n v\xE0 b\u1EA1n kh\xF4ng \u0111\u01B0\u1EE3c ho\xE0n ph\xED tuy\u1EC3n d\u1EE5ng.", () => {
        fire(t.dataset.id);
        toast("\u0110\xE3 cho ngh\u1EC9 vi\u1EC7c", "");
      }, "Cho ngh\u1EC9", true),
      kpi: () => {
        const rows = STAFF.filter((s) => S.staff[s.id]);
        alertBox("\u{1F4CB} KPI & phong \u0111\u1ED9 nh\xE2n vi\xEAn", rows.length ? rows.map((s) => `<div class="dl"><span>${s.icon} ${esc(s.name)}</span><b>${S.staff[s.id].shifts || 0} ca \xB7 ${fmtK(s.wage)}/ng\xE0y</b></div>`).join("") + `<p class="muted">T\u1ED5ng l\u01B0\u01A1ng: ${fmtK(staffWagePerDay())}/ng\xE0y. Nh\xE2n vi\xEAn l\xE0m c\xE0ng l\xE2u t\u1ED1c \u0111\u1ED9 c\xE0ng \u1ED5n \u0111\u1ECBnh.</p>` : "<p>Ch\u01B0a c\xF3 nh\xE2n vi\xEAn \u0111\u1EC3 ch\u1EA5m KPI.</p>");
      }
    }
  };
  var fmtCountdown = (ms) => {
    const s = Math.max(0, Math.floor(ms / 1e3));
    return `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor(s % 3600 / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };
  function tickCountdown() {
    const el = document.querySelector('[data-cd="tax"]');
    if (el) el.textContent = fmtCountdown(S.tax.until - Date.now());
  }
  function taxReceipt(amount) {
    const until = new Date(S.tax.until);
    const m = openModal({ cls: "small", html: `<div class="receipt"><div class="r-ico">\u{1F3DB}\uFE0F\u{1F4DC}</div><h3>BI\xCAN LAI \u0110\xD3NG THU\u1EBE TR\u1EF0C TUY\u1EBEN 72H</h3>
    <div class="r-box"><p>\u2705 <b>Tr\u1EA1ng th\xE1i:</b> \u0110\xC3 N\u1ED8P THU\u1EBE TH\xC0NH C\xD4NG</p><p>\u{1F4B0} <b>S\u1ED1 ti\u1EC1n n\u1ED9p:</b> ${fmtK(amount)} (${Math.round(S.tax.rate * 100)}% k\xE9t)</p><p>\u23F1\uFE0F <b>Th\u1EDDi h\u1EA1n b\u1EA3o h\u1ED9:</b> 72 Gi\u1EDD Th\u1EF1c T\u1EBF (3 ng\xE0y) (\u0111\u1EBFn ${until.toLocaleString("vi-VN")})</p>
    <p>\u2728 <b>Hi\u1EC7u \u1EE9ng k\xEDch ho\u1EA1t:</b></p><p>\u2022 T\u0103ng +15% kh\xE1ch h\xE0ng gh\xE9 qu\xE1n.</p><p>\u2022 T\u0103ng +15% t\u1ED1c \u0111\u1ED9 l\xE0m vi\u1EC7c c\u1EE7a to\xE0n b\u1ED9 nh\xE2n vi\xEAn.</p><p>\u2022 Gi\u1EA3m 15% nguy c\u01A1 tr\u1ED9m c\u1EAFp, ti\u1EC1n gi\u1EA3 v\xE0 b\xF9ng ti\u1EC1n!</p><p>\u2022 T\u0103ng +15% t\u1EC9 l\u1EC7 may m\u1EAFn x2 ti\u1EC1n bill m\u1ED7i ly n\u01B0\u1EDBc!</p></div></div>
    <button class="btn pri block" data-act="ok">\u0110\xE3 hi\u1EC3u & X\xE1c nh\u1EADn</button>` });
    bindActions(m.body, { ok: () => m.close() });
  }
  var thue = {
    html() {
      const active = taxActive();
      const rate = S.tax.rate;
      const amt = Math.round(S.money * rate);
      const b = S.bank;
      const principal = b.principal || 0;
      return `<div class="taxcard"><h4>\u{1F3DB}\uFE0F \u0110\xD3NG THU\u1EBE TR\u1EF0C TUY\u1EBEN 72H (3 NG\xC0Y TH\u1EF0C)</h4><p>\u0110\xF3ng thu\u1EBF m\u1ED7i 3 ng\xE0y th\u1EF1c t\u1EBF (72 gi\u1EDD) \u0111\u1EC3 Buff to\xE0n di\u1EC7n & ph\xF2ng ng\u1EEBa tr\u1ED9m c\u1EAFp.</p>
      ${active ? `<div class="ok-box">\u{1F7E1} <b>BUFF THU\u1EBE \u0110ANG C\xD3 HI\u1EC6U L\u1EF0C</b><div>\u23F3 H\u1EA1n ch\xF3t: <b data-cd="tax">${fmtCountdown(S.tax.until - Date.now())}</b></div><small>\u0110\xE3 n\u1ED9p thu\u1EBF; kh\xF4ng c\u1EA7n \u0111\xF3ng l\u1EA1i tr\u01B0\u1EDBc khi h\u1EBFt th\u1EDDi h\u1EA1n.</small></div>` : `<div class="warn-box">\u23F0 Ch\u01B0a c\xF3 buff thu\u1EBF. N\u1ED9p thu\u1EBF \u0111\u1EC3 nh\u1EADn hi\u1EC7u \u1EE9ng trong 72 gi\u1EDD th\u1EF1c.</div>`}
      <div class="tax-sel"><b>\u{1F4B0} Ch\u1ECDn m\u1EE9c \u0111\xF3ng thu\u1EBF theo s\u1ED1 ti\u1EC1n k\xE9t hi\u1EC7n c\xF3</b><p class="muted">K\xE9t hi\u1EC7n c\xF3: <b>${fmtK(S.money)}</b> \xB7 M\u1EE9c thu\u1EBF quy \u0111\u1ECBnh t\u1EEB ${TAX.minRate * 100}% \u0111\u1EBFn ${TAX.maxRate * 100}%.</p>
        <div class="rate-row"><span>T\u1EC9 l\u1EC7 \u0111\xF3ng thu\u1EBF:</span><b>${Math.round(rate * 100)}%</b></div>
        <input type="range" min="5" max="15" step="1" value="${Math.round(rate * 100)}" data-rate aria-label="T\u1EC9 l\u1EC7 thu\u1EBF">
        <div class="rate-btns">${[5, 8, 10, 12, 15].map((r) => `<button class="rb2 ${Math.round(rate * 100) === r ? "on" : ""}" data-act="rate" data-r="${r}">${r}%${r === 5 ? "<small>(T\u1ED1i thi\u1EC3u)</small>" : r === 15 ? "<small>(T\u1ED1i \u0111a)</small>" : ""}</button>`).join("")}</div>
        <div class="tax-amt">S\u1ED1 ti\u1EC1n thu\u1EBF c\u1EA7n n\u1ED9p: <b>${fmtK(amt)}</b> \xB7 Quy\u1EC1n l\u1EE3i nh\u1EADn \u0111\u01B0\u1EE3c: <b>Buff +15% / 72h</b></div>
        <button class="btn pri block" data-act="pay" ${active ? "disabled" : ""}>\u{1F3DB}\uFE0F ${active ? "\u0110\xE3 n\u1ED9p thu\u1EBF (\u0111ang c\xF3 buff)" : `N\u1ED9p thu\u1EBF ngay (${fmtK(amt)} \xB7 Buff +15%)`}</button></div>
      <div class="bank"><div class="bank-h"><small>B\u1EA2O H\u1ED8 T\xC0I CH\xCDNH AN TO\xC0N 100%</small><h4>\u{1F3E6} NG\xC2N H\xC0NG T\xC0 T\u01AFA BANK</h4><span class="chip y">L\xC3I K\xC9P ${BANK.interest * 100}%/NG\xC0Y</span></div>
        <div class="bank-st"><div><small>\u{1F4B0} Ti\u1EC1n g\u1EEDi hi\u1EC7n t\u1EA1i:</small><b>${fmtK(b.balance)}</b><em>(G\u1ED1c: ${fmtK(principal)})</em></div><div><small>\u{1F4C8} H\u1EA1n m\u1EE9c g\u1EEDi t\u1ED1i \u0111a:</small><b>${fmtK(BANK.max)}</b><em>(+${BANK.starBonus * 100}% khi \u0111\u1EA1t 4,5\u2605; khi qu\xE1 1 t\u1EF7 t\u0103ng +${BANK.bigBonus * 100}%, t\u1ED1i \u0111a 99 T\u1EF7)</em></div></div>
        <div class="bank-lock">\u{1F512} K\u1EF3 h\u1EA1n cam k\u1EBFt: <b>${BANK.lockShifts} ng\xE0y b\xE1n n\u01B0\u1EDBc</b> \xB7 Ti\u1EBFn \u0111\u1ED9: <b>${Math.min(b.shifts, BANK.lockShifts)}/${BANK.lockShifts}</b> ng\xE0y. R\xFAt tr\u01B0\u1EDBc h\u1EA1n s\u1EBD m\u1EA5t to\xE0n b\u1ED9 ti\u1EC1n l\xE3i.</div>
        <p class="bank-note">\u{1F510} <b>\u0110\u1EB7c quy\u1EC1n:</b> Ti\u1EC1n g\u1EEDi tuy\u1EC7t \u0111\u1ED1i kh\xF4ng b\u1ECB tr\u1ED9m c\u1EAFp, b\xF9ng ti\u1EC1n hay l\u1EEBa \u0111\u1EA3o.</p>
        <div class="dep-btns"><button class="btn gold sm" data-act="dep" data-p="0.1">G\u1EEDi 10% k\xE9t</button><button class="btn gold sm" data-act="dep" data-p="0.5">G\u1EEDi 50%</button><button class="btn gold sm" data-act="dep" data-p="1">G\u1EEDi t\u1EA5t c\u1EA3</button></div>
        <button class="btn soft block" data-act="wd" ${b.balance > 0 ? "" : "disabled"}>\u{1F4B8} R\xFAt ti\u1EC1n</button></div>
      <details class="policy fold"><summary>\u{1F4DC} Ch\xEDnh s\xE1ch thu\u1EBF & Th\u1ED1ng k\xEA ti\u1EC7m</summary><p>\u2022 Chu k\u1EF3 72 gi\u1EDD (3 ng\xE0y) th\u1EF1c t\u1EBF. H\u1EBFt 72h c\u1EA7n \u0111\xF3ng chu k\u1EF3 m\u1EDBi, kh\xF4ng c\u1ED9ng d\u1ED3n.</p><p>\u2022 N\u1ED9p t\u1EEB 5% \u0111\u1EBFn 15% k\xE9t \u0111\u1EC3 nh\u1EADn buff c\u1ED1 \u0111\u1ECBnh +15% trong 72 gi\u1EDD; ch\u1ECDn m\u1EE9c cao h\u01A1n kh\xF4ng c\u1ED9ng d\u1ED3n buff.</p><p>\u2022 Nh\xE2n vi\xEAn Me k\u1EBFt tinh: Khi \u0111\xE3 thu\xEA, qu\xE1n kh\xF4ng b\u1ECB ph\u1EA1t ch\u1EADm thu\u1EBF; chuy\u1EC3n th\xE0nh th\u1EDDi gian \xE2n h\u1EA1n duy tr\xEC buff.</p><p>\u2022 T\u1ED5ng thu\u1EBF \u0111\xE3 n\u1ED9p: <b>${fmtK(S.tax.paid)}</b></p></details>`;
    },
    acts: {
      rate: (t) => {
        S.tax.rate = +t.dataset.r / 100;
        markDirty("panel");
      },
      pay: () => {
        const result = payTax();
        if (typeof result === "string") return toast(result, "err");
        sfx("success");
        taxReceipt(result);
      },
      dep: (t) => {
        const result = depositBank(+t.dataset.p);
        if (typeof result === "string") return toast(result, "err");
        sfx("coin");
        toast(`\u0110\xE3 g\u1EEDi ${fmtK(result)}`, "ok");
      },
      wd: () => {
        const b = S.bank;
        const early = b.shifts < BANK.lockShifts;
        confirmBox("R\xFAt ti\u1EC1n ti\u1EBFt ki\u1EC7m?", early ? `Ch\u01B0a \u0111\u1EE7 ${BANK.lockShifts} ng\xE0y cam k\u1EBFt: ch\u1EC9 nh\u1EADn l\u1EA1i ti\u1EC1n g\u1ED1c ${fmtK(b.principal || 0)}, m\u1EA5t l\xE3i ${fmtK(b.balance - (b.principal || 0))}.` : `B\u1EA1n s\u1EBD nh\u1EADn ${fmtK(b.balance)} g\u1ED3m c\u1EA3 l\xE3i.`, () => {
          const result = withdrawBank();
          if (typeof result === "string") return toast(result, "err");
          sfx("coin");
        }, "R\xFAt ti\u1EC1n");
      }
    },
    bind(root2) {
      var _a;
      (_a = root2.querySelector("[data-rate]")) == null ? void 0 : _a.addEventListener("input", (e) => {
        S.tax.rate = +e.target.value / 100;
        markDirty("panel");
      });
    }
  };
  function branchHTML() {
    return `<div class="brh"><h4>\u{1F3E2} H\u1EC6 TH\u1ED0NG CHI NH\xC1NH TR\u1EF0C THU\u1ED8C</h4><p>M\u1EDF r\u1ED9ng chu\u1ED7i c\u1EEDa h\xE0ng tr\xE0 s\u1EEFa \u0111\u1EC3 thu h\xFAt th\xEAm kh\xE1ch v\xE0 t\u1EA1o d\xF2ng ti\u1EC1n th\u1EE5 \u0111\u1ED9ng m\u1ED7i ng\xE0y.</p></div>` + BRANCHES.map((b) => {
      const o = S.branches[b.id];
      const cost = b.cost;
      const lastTxt = (o == null ? void 0 : o.last) ? `<small>H\xF4m qua: doanh thu ${fmtK(o.last.r)} \xB7 l\xE3i r\xF2ng <b class="${o.last.p >= 0 ? "pos" : "neg"}">${fmtK(o.last.p)}</b></small>` : "";
      return `<div class="brcard ${o ? "open" : ""}"><div class="br-top"><span class="br-ic">${b.icon}</span><div class="grow"><b>${b.name}</b><small>${esc(b.desc)}</small></div><span class="chip ${o ? "green" : ""}">${o ? "\u0110ang ho\u1EA1t \u0111\u1ED9ng" : "Ch\u01B0a m\u1EDF"}</span></div>
        <div class="br-st"><div>\u{1F4B5} Ti\u1EC1n thu\xEA m\u1EB7t b\u1EB1ng: <b class="neg">\u2212${fmtK(b.rent)}/ng\xE0y</b></div><div>\u{1F465} Ph\xE1t l\u01B0\u01A1ng (${(o == null ? void 0 : o.staff) || 0} NV): <b class="neg">\u2212${fmtK(((o == null ? void 0 : o.staff) || 0) * 15e4)}/ng\xE0y</b></div>
          <div>\u{1F4E6} Nh\u1EADp li\u1EC7u nguy\xEAn li\u1EC7u: <b class="neg">\u2212${fmtK(b.rev[0] * b.ing[0])} ~ ${fmtK(b.rev[1] * b.ing[1])}/ng\xE0y</b></div><div>\u{1F4C8} Doanh thu t\u1EF1 \u0111\u1ED9ng: <b class="pos">+${fmtK(b.rev[0])} ~ ${fmtK(b.rev[1])}/ng\xE0y</b></div>
          <div>\u2B50 \u0110\xE1nh gi\xE1 b\xECnh qu\xE2n: <b>${o ? S.rating.toFixed(1) : "(Ch\u01B0a m\u1EDF)"}</b></div>${lastTxt}</div>
        ${o ? `<div class="row2"><span>\u{1F465} Nh\xE2n vi\xEAn chi nh\xE1nh:</span><div class="stepper"><button data-act="bstaff-" data-id="${b.id}">\u2212</button><input class="num" type="number" inputmode="numeric" min="0" max="3" value="${o.staff || 0}" data-bstaff="${b.id}" aria-label="Nh\xE2n vi\xEAn chi nh\xE1nh"><button data-act="bstaff+" data-id="${b.id}">+</button></div></div>` : `<button class="btn pri block" data-act="bopen" data-id="${b.id}">${fmtK(cost)}<br/>Thu\xEA & M\u1EDF chi nh\xE1nh</button>`}</div>`;
    }).join("");
  }
  function franchiseHTML() {
    const okR = S.rating >= FRANCHISE.needRating, okF = S.followers >= FRANCHISE.needFollowers;
    const can = okR && okF && S.franchise.count < FRANCHISE.max;
    return `<div class="frcard"><h4>\u{1F91D} M\xD4 H\xCCNH B\xC1N NH\u01AF\u1EE2NG QUY\u1EC0N (FRANCHISING)</h4><p>M\u1EDF b\xE1n b\u1EA3n quy\u1EC1n th\u01B0\u01A1ng hi\u1EC7u cho c\xE1c \u0111\u1ED1i t\xE1c. Thu ph\xED gia nh\u1EADp ${fmt(FRANCHISE.fee)} + Ph\xED b\u1EA3n quy\u1EC1n (Royalty Fee) ${FRANCHISE.royalty * 100}% doanh thu m\u1ED7i ng\xE0y!</p>
      <p class="muted">\u0110\xE3 nh\u01B0\u1EE3ng quy\u1EC1n: <b>${S.franchise.count}/${FRANCHISE.max}</b> \u0111i\u1EC3m b\xE1n.</p>
      <button class="btn ${can ? "pri" : "ghost"} block" data-act="fopen" ${can ? "" : "disabled"}>${can ? `\u{1F91D} B\xE1n nh\u01B0\u1EE3ng quy\u1EC1n (+${fmtK(FRANCHISE.fee)})` : "\u{1F512} CH\u01AFA \u0110\u1EA0T \u0110I\u1EC0U KI\u1EC6N"}</button>
      <div class="frreq"><div class="frbox"><small>\u2B50 \u0110i\u1EC3m Uy T\xEDn Qu\xE1n:</small><b>${S.rating.toFixed(1)} / ${FRANCHISE.needRating}\u2605 ${okR ? "\u2705" : "\u274C"}</b><div class="bar"><i style="width:${Math.min(100, S.rating / FRANCHISE.needRating * 100)}%"></i></div></div>
        <div class="frbox"><small>\u{1F4F1} Ng\u01B0\u1EDDi Theo D\xF5i MXH:</small><b>${S.followers.toLocaleString("vi-VN")}\u0111 / ${FRANCHISE.needFollowers.toLocaleString("vi-VN")} ${okF ? "\u2705" : "\u274C"}</b><div class="bar"><i style="width:${Math.min(100, S.followers / FRANCHISE.needFollowers * 100)}%"></i></div></div></div></div>
    <details class="tipbox fold"><summary>\u{1F4A1} M\u1EB9o \u0111\u1EC3 m\u1EDF b\xE1n nh\u01B0\u1EE3ng quy\u1EC1n</summary><p>\u2022 H\xE3y ph\u1EE5c v\u1EE5 kh\xE1ch th\u1EADt nhanh v\xE0 d\xE1n n\u1EAFp chu\u1EA9n x\xE1c \u0111\u1EC3 nh\u1EADn nhi\u1EC1u \u0111\xE1nh gi\xE1 <b>5 sao</b> n\xE2ng \u0111i\u1EC3m Uy T\xEDn l\xEAn \u2265 4.5\u2605.</p><p>\u2022 V\xE0o m\u1EE5c <b>M\u1EA1ng X\xE3 H\u1ED9i</b> \u0111\u1EC3 ch\u1EA1y c\xE1c chi\u1EBFn d\u1ECBch Qu\u1EA3ng c\xE1o TikTok / Facebook / Thu\xEA KOL \u0111\u1EC3 t\xEDch l\u0169y \u0111\u1EE7 50.000 Ng\u01B0\u1EDDi theo d\xF5i!</p></details>`;
  }
  function statsHTML() {
    const last2 = S.history[S.history.length - 1];
    const main = last2 ? last2.profit - last2.branch - last2.fran - last2.interest : 0;
    const brN = Object.keys(S.branches).length;
    const brP = (last2 == null ? void 0 : last2.branch) || 0, frP = (last2 == null ? void 0 : last2.fran) || 0;
    const total = main + brP + frP;
    const tot = Math.max(1, Math.abs(main) + Math.abs(brP) + Math.abs(frP));
    const bar2 = (l, v) => `<div class="sbar"><span>${l}</span><div class="bar"><i style="width:${Math.abs(v) / tot * 100}%"></i></div><b>${fmtK(v)}</b></div>`;
    return `<div class="stcard"><small>B\xC1O C\xC1O T\xC0I CH\xCDNH TO\xC0N H\u1EC6 TH\u1ED0NG</small><h4>L\u1EE3i Nhu\u1EADn R\xF2ng: <span class="${total >= 0 ? "pos" : "neg"}">${fmtK(total)}</span></h4><p class="muted">T\u1ED5ng h\u1EE3p l\u1EE3i nhu\u1EADn t\u1EEB Qu\xE1n ch\xEDnh, ${brN} Chi nh\xE1nh tr\u1EF1c thu\u1ED9c & ${S.franchise.count} Chi nh\xE1nh nh\u01B0\u1EE3ng quy\u1EC1n (ng\xE0y g\u1EA7n nh\u1EA5t).</p></div>
    <div class="dl"><span>\u{1F3EA} Qu\xE1n Ch\xEDnh (Flagship)</span><b class="${main >= 0 ? "pos" : "neg"}">${fmtK(main)}</b></div>
    <div class="dl"><span>\u{1F3E2} ${brN} Chi Nh\xE1nh Tr\u1EF1c Thu\u1ED9c</span><b class="${brP >= 0 ? "pos" : "neg"}">${fmtK(brP)}</b></div>
    <div class="dl"><span>\u{1F91D} ${S.franchise.count} Chi Nh\xE1nh Nh\u01B0\u1EE3ng Quy\u1EC1n</span><b class="pos">${fmtK(frP)}</b></div>
    <div class="dl big"><span>\u{1F4B0} T\u1ED5ng L\u1EE3i Nhu\u1EADn Chu\u1ED7i</span><b class="${total >= 0 ? "pos" : "neg"}">${fmtK(total)}</b></div>
    <div class="stcard"><b>\u{1F4CA} Bi\u1EC3u \u0110\u1ED3 Ph\xE2n B\u1ED5 L\u1EE3i Nhu\u1EADn:</b>${bar2("Qu\xE1n ch\xEDnh", main)}${bar2("Chi nh\xE1nh", brP)}${bar2("Nh\u01B0\u1EE3ng quy\u1EC1n", frP)}</div>`;
  }
  var chinhanh = {
    html() {
      const t = S.subtab.cn || "tt";
      const tb = [["tt", "\u{1F3E2} Tr\u1EF1c thu\u1ED9c"], ["nq", "\u{1F91D} Nh\u01B0\u1EE3ng quy\u1EC1n"], ["tk", "\u{1F4CA} Th\u1ED1ng k\xEA"]];
      return `<div class="tabs scroll">${tb.map(([id, l]) => `<button class="tab ${t === id ? "on" : ""}" data-act="sub" data-v="${id}">${l}</button>`).join("")}</div>${t === "tt" ? branchHTML() : t === "nq" ? franchiseHTML() : statsHTML()}`;
    },
    bind(root2) {
      for (const inp of root2.querySelectorAll("[data-bstaff]")) {
        inp.addEventListener("focus", () => inp.select());
        inp.addEventListener("change", () => {
          const error = setBranchStaff(inp.dataset.bstaff, +inp.value);
          if (error) toast(error, "err");
        });
      }
    },
    acts: {
      sub: (t) => {
        S.subtab.cn = t.dataset.v;
        markDirty("panel");
      },
      bopen: (t) => {
        const b = BRANCHES.find((x) => x.id === t.dataset.id);
        if (!b) return;
        confirmBox("Thu\xEA & m\u1EDF chi nh\xE1nh?", `Chi ph\xED m\u1EDF: ${fmtK(b.cost)}. Chi nh\xE1nh t\u1EF1 kinh doanh v\xE0 g\u1EEDi l\xE3i r\xF2ng v\u1EC1 m\u1ED7i cu\u1ED1i ng\xE0y.`, () => {
          const error = openBranch(b.id);
          if (error) return toast(error, "err");
          sfx("unlock");
          toast("\u{1F3E2} Khai tr\u01B0\u01A1ng chi nh\xE1nh m\u1EDBi!", "ok");
        }, "M\u1EDF chi nh\xE1nh");
      },
      "bstaff+": (t) => {
        const o = S.branches[t.dataset.id];
        if (o) setBranchStaff(t.dataset.id, (o.staff || 0) + 1);
      },
      "bstaff-": (t) => {
        const o = S.branches[t.dataset.id];
        if (o) setBranchStaff(t.dataset.id, (o.staff || 0) - 1);
      },
      fopen: () => {
        const error = sellFranchise();
        if (error) return toast(error, "err");
        sfx("level");
        toast(`\u{1F91D} \u0110\xE3 b\xE1n nh\u01B0\u1EE3ng quy\u1EC1n! +${fmtK(FRANCHISE.fee)}`, "ok");
      }
    }
  };
  function postHTML(p) {
    return `<div class="post"><div class="p-h"><span class="p-av">${p.author.av}</span><div class="grow"><b>${esc(p.author.name)}</b><small>${esc(p.author.badge)} \xB7 H\xF4m nay \xB7 \u{1F441} ${p.views} l\u01B0\u1EE3t xem</small></div><span class="p-tag">${p.author.tag}</span></div>
    <div class="p-pov"><span class="pov">\u{1F3AC} POV</span> ${esc(p.pov)}</div>
    <div class="p-d"><span class="who u">${esc(p.author.name.split(" ")[0])}:</span> "${esc(p.user)}"</div>
    <div class="p-d"><span class="who o">Ch\u1EE7 qu\xE1n:</span> "${esc(p.owner)}"</div>
    <div class="p-d"><span class="who u">${esc(p.author.name.split(" ")[0])}:</span> "${esc(p.reply)}"</div>
    <div class="p-snd">\u{1F4BF} ${esc(p.sound)}</div><div class="p-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="p-f">\u{1F90D} ${p.likes} Th\xEDch \xB7 \u{1F4AC} Ph\u1EA3n h\u1ED3i (1)</div><div class="p-own"><b>${esc(S.shopName)}:</b> C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 gh\xE9 ph\xE1 \u0111\u1EA3o menu qu\xE1n nh\xE9! L\u1EA7n sau c\xF3 th\u1EED th\xE1ch m\u1EDBi qu\xE1n l\u1EA1i ti\u1EBFp chi\xEAu! \u{1F44B}</div></div>`;
  }
  var mxh = {
    html() {
      const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id) : null;
      const verified = S.followers >= 5e4 && S.rating >= 4.5;
      const quota = ad ? ad.videos : 1;
      const used = S.social.videosToday;
      const traffic = (ad ? Math.round(ad.traffic * 100) : 0) + (S.social.videoDay === S.day ? Math.round((S.social.videoBuff || 0) * 100) : 0);
      return `<div class="profile"><div class="pf-h">${logoHTML(60)}<div><h4>${esc(S.shopName)} ${verified ? "\u2714\uFE0F" : ""}</h4><small class="${verified ? "green" : "grayish"}">${verified ? "\u{1F331} \u0110\xE3 t\xEDch xanh" : "\u{1F331} \u0110ang x\xE2y th\u01B0\u01A1ng hi\u1EC7u"}</small><p class="muted">${verified ? "K\xEAnh \u1EA9m th\u1EF1c ch\xEDnh th\u1EE9c" : "C\u1EA7n 50K followers & 4.5\u2605 \u0111\u1EC3 t\xEDch xanh"}</p></div></div>
      <div class="pf-s"><div><b>${S.followers.toLocaleString("vi-VN")}</b><small>Ng\u01B0\u1EDDi theo d\xF5i</small></div><div><b>${S.rating.toFixed(1)} \u2605</b><small>${S.ratingCount} \u0111\xE1nh gi\xE1</small></div><div><b>+${traffic}%</b><small>Buff Ads / video</small></div></div></div>
      <div class="adbox"><h4>\u{1F4E3} Qu\u1EA3ng c\xE1o t\u0103ng kh\xE1ch</h4><p class="sub">\u0110ang ch\u1EA1y ${ad ? 1 : 0}/1 chi\u1EBFn d\u1ECBch${ad ? ` \xB7 c\xF2n ${S.social.ad.endsDay - S.day + 1} ng\xE0y` : ""}</p>
      ${ADS.map((a) => `<div class="adcard ${(ad == null ? void 0 : ad.id) === a.id ? "run" : ""}" data-act="adinfo" data-id="${a.id}"><span class="ad-ic">${a.icon}</span><div class="ad-m"><b>${a.name}</b><small>+${Math.round(a.traffic * 100)}% kh\xE1ch \xB7 ${a.days} ng\xE0y \xB7 \u24D8</small></div><button class="btn pri sm ad-btn" data-act="ad" data-id="${a.id}" ${ad ? "disabled" : ""}>${(ad == null ? void 0 : ad.id) === a.id ? "\u0110ang ch\u1EA1y" : `<b>${fmtK(a.cost)}</b><small>K\xEDch ho\u1EA1t</small>`}</button></div>`).join("")}</div>
      <div class="vidbox"><h4>\u{1F3AC} \u0110\u0103ng video qu\u1EA3ng b\xE1</h4><p>T\u1EC9 l\u1EC7 Viral: <b>25%</b> \xB7 M\u1ED7i l\u1EA7n quay nh\u1EADn ng\u1EABu nhi\xEAn % buff kh\xE1ch. S\u1ED1 l\u01B0\u1EE3t quay h\xF4m nay d\u1EF1a v\xE0o chi\u1EBFn d\u1ECBch ads (${used}/${quota} l\u01B0\u1EE3t/ng\xE0y).</p>
      <button class="btn ${used < quota ? "pri" : "ghost"} block" data-act="video" ${used < quota ? "" : "disabled"}>${used < quota ? "\u{1F3A5} Quay & \u0111\u0103ng video" : "\u{1F512} C\u1EA7n ch\u1EA1y chi\u1EBFn d\u1ECBch Ads \u0111\u1EC3 quay video"}</button></div>
      <h4 class="feedh">\u{1F4F1} B\u1EA3ng tin</h4>
      ${S.social.posts.length ? S.social.posts.map(postHTML).join("") : '<div class="emptybox">\u{1F4F1}<b>Ch\u01B0a c\xF3 b\xE0i \u0111\u0103ng n\xE0o</b><p>Ch\u1EA1y qu\u1EA3ng c\xE1o ho\u1EB7c quay video \u0111\u1EC3 c\xE1c reviewer \u0111\u0103ng b\xE0i v\u1EC1 qu\xE1n b\u1EA1n.</p></div>'}`;
    },
    acts: {
      adinfo: (t) => {
        const a = ADS.find((x) => x.id === t.dataset.id);
        const m = openModal({ cls: "small", html: `<h3 class="m-title">${a.icon} ${esc(a.name)}</h3><p class="m-text">${a.desc}</p><p class="m-text center"><b>${fmtK(a.cost)}</b> \xB7 ${a.days} ng\xE0y</p><button class="btn pri block" data-act="x">\u0110\xF3ng</button>` });
        bindActions(m.body, { x: () => m.close() });
      },
      ad: (t) => {
        const a = ADS.find((x) => x.id === t.dataset.id);
        if (S.money < a.cost) {
          toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n ch\u1EA1y qu\u1EA3ng c\xE1o", "err");
          sfx("error");
          return;
        }
        confirmBox(a.name, `Chi ${fmtK(a.cost)} ch\u1EA1y trong ${a.days} ng\xE0y: +${Math.round(a.traffic * 100)}% kh\xE1ch qu\xE1n ch\xEDnh, +${a.followers.toLocaleString("vi-VN")} followers.`, () => {
          const error = startAd(a.id);
          if (error) return toast(error, "err");
          for (let i = 0; i < a.posts; i++) S.social.posts.unshift(genPost());
          S.social.posts = S.social.posts.slice(0, 10);
          markDirty("hud", "panel");
          requestSave();
          sfx("success");
          toast("\u{1F4E3} Chi\u1EBFn d\u1ECBch \u0111\xE3 b\u1EAFt \u0111\u1EA7u!", "ok");
        }, "K\xEDch ho\u1EA1t");
      },
      video: () => {
        const error = recordVideo();
        if (error) return toast(error, "err");
        const viral = chance(0.25);
        const gain = viral ? randInt(1500, 6e3) : randInt(100, 600);
        S.followers += gain;
        if (viral) S.social.posts.unshift(genPost());
        markDirty("panel");
        requestSave();
        toast(viral ? `\u{1F525} Video l\xEAn xu h\u01B0\u1EDBng! +${gain.toLocaleString("vi-VN")} followers` : `Video \u0111\u1EA1t ${gain} followers m\u1EDBi`, viral ? "gold" : "ok");
        sfx(viral ? "level" : "success");
      }
    }
  };
  var PANELS2 = { nhansu, thue, chinhanh, mxh };

  // js/panels3.js
  var seedDef = (id) => SEEDS.find((s) => s.id === id);
  function plotHTML(i) {
    const g = S.garden;
    if (i >= g.unlocked) return `<button class="plot locked" data-act="punlock" aria-label="M\u1EDF kh\xF3a \xF4 \u0111\u1EA5t"><span>\u{1F512}</span><small>${fmtK(plotCost(i + 1))}</small></button>`;
    const p = g.plots[i];
    if (!p.seed) return `<button class="plot empty" data-act="plant" data-i="${i}" aria-label="\xD4 \u0111\u1EA5t tr\u1ED1ng"><span>\u{1F7EB}</span><small>Tr\u1ED1ng</small></button>`;
    const sd = seedDef(p.seed);
    const left = sd.days - p.grown;
    if (left <= 0) return `<button class="plot ready" data-act="harv1" data-i="${i}" aria-label="Thu ho\u1EA1ch"><span>${sd.icon}</span><small>Ch\xEDn r\u1ED3i!</small></button>`;
    return `<button class="plot grow" data-act="plant" data-i="${i}" aria-label="\u0110ang l\u1EDBn"><span>${p.grown ? "\u{1F33F}" : "\u{1F331}"}</span><small>${left} ng\xE0y</small></button>`;
  }
  function harvest(i) {
    const p = S.garden.plots[i], sd = (p == null ? void 0 : p.seed) && seedDef(p.seed);
    if (!sd || p.grown < sd.days) return 0;
    const q = randInt(sd.yield[0], sd.yield[1]);
    const id = sd.gives;
    if (!S.unlocked[id]) {
      S.unlocked[id] = true;
      S.onMenu[id] = true;
    }
    addStock(id, q);
    p.seed = null;
    p.grown = 0;
    return q;
  }
  var vuon = {
    html() {
      const g = S.garden;
      const growing = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown < seedDef(p.seed).days).length;
      const ready = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown >= seedDef(p.seed).days).length;
      const empty = g.plots.slice(0, g.unlocked).filter((p) => !p.seed).length;
      const sel = S.subtab.seed || SEEDS[0].id;
      return `<div class="farm-h"><h4>\u{1FAB4} N\xD4NG TR\u1EA0I ORGANIC (${PLOTS} M\u1EA2NH \u0110\u1EA4T)</h4><p>M\u1EA3nh \u0111\u1EA5t n\xF4ng tr\u1EA1i xanh m\u01B0\u1EDBt v\u1EDBi ${PLOTS} lu\u1ED1ng \u0111\u1EA5t m\xE0u m\u1EE1. Nh\u1EA5n v\xE0o t\u1EEBng m\u1EA3nh \u0111\u1EA5t \u0111\u1EC3 gieo h\u1EA1t, t\u01B0\u1EDBi n\u01B0\u1EDBc v\xE0 thu ho\u1EA1ch n\xF4ng s\u1EA3n s\u1EA1ch mi\u1EC5n ph\xED v\xE0o kho ti\u1EC7m tr\xE0!</p></div>
      <div class="plots">${Array.from({ length: PLOTS }, (_, i) => plotHTML(i)).join("")}</div>
      <div class="farm-btns"><button class="btn blue" data-act="water"><b>T\u01B0\u1EDBi N\u01B0\u1EDBc</b><small>${growing} \xF4 c\xE2y${g.watered ? " \xB7 \u0111\xE3 t\u01B0\u1EDBi" : ""}</small></button><button class="btn orange" data-act="harvest"><b>Thu Ho\u1EA1ch</b><small>${ready ? ready + " \xF4 ch\xEDn" : "Ch\u1EDD qu\u1EA3 ch\xEDn"}</small></button>
        <button class="btn green" data-act="replant"><b>Tr\u1ED3ng L\u1EA1i</b><small>${empty} \xF4 tr\u1ED1ng</small></button><button class="btn purple" data-act="shop"><b>C\u1EEDa H\xE0ng</b><small>H\u1EA1t gi\u1ED1ng</small></button></div>
      <div class="seedbox"><b>\u{1F392} Kho t\xFAi h\u1EA1t gi\u1ED1ng c\u1EE7a b\u1EA1n:</b> <small>\u0110\xE3 m\u1EDF: ${g.unlocked}/${PLOTS} m\u1EA3nh</small>
        <div class="seeds">${SEEDS.map((s) => `<button class="seed ${sel === s.id ? "on" : ""}" data-act="selseed" data-id="${s.id}"><span>${s.icon}</span><b>${s.name}</b><em>${g.seeds[s.id] || 0}</em></button>`).join("")}</div>
        <small class="muted">Ch\u1EA1m m\u1ED9t \xF4 \u0111\u1EA5t tr\u1ED1ng \u0111\u1EC3 gieo h\u1EA1t \u0111ang ch\u1ECDn. C\xE2y l\u1EDBn th\xEAm m\u1ED7i ng\xE0y n\u1EBFu b\u1EA1n \u0111\xE3 t\u01B0\u1EDBi n\u01B0\u1EDBc.</small></div>`;
    },
    acts: {
      selseed: (t) => {
        S.subtab.seed = t.dataset.id;
        markDirty("panel");
      },
      plant: (t) => {
        const i = +t.dataset.i, p = S.garden.plots[i];
        if (p.seed) return toast("C\xE2y \u0111ang l\u1EDBn, h\xE3y ki\xEAn nh\u1EABn \u{1F331}", "");
        const id = S.subtab.seed || SEEDS[0].id;
        if (!(S.garden.seeds[id] > 0)) return toast("H\u1EBFt h\u1EA1t gi\u1ED1ng n\xE0y, v\xE0o C\u1EEDa H\xE0ng mua th\xEAm!", "err");
        S.garden.seeds[id]--;
        p.seed = id;
        p.grown = 0;
        sfx("pop");
        markDirty("panel");
        requestSave();
      },
      harv1: (t) => {
        const q = harvest(+t.dataset.i);
        if (q) {
          sfx("success");
          fxSpark(t, 8);
          toast(`Thu ho\u1EA1ch +${q} ph\u1EA7n nguy\xEAn li\u1EC7u!`, "ok");
          markDirty("panel");
          requestSave();
        }
      },
      harvest: () => {
        let n = 0, items = {};
        S.garden.plots.forEach((p, i) => {
          const s = p.seed && seedDef(p.seed);
          if (s && p.grown >= s.days) {
            const k = s.gives;
            const q = harvest(i);
            n++;
            items[k] = (items[k] || 0) + q;
          }
        });
        if (!n) return toast("Ch\u01B0a c\xF3 \xF4 n\xE0o ch\xEDn", "err");
        sfx("success");
        toast("Thu ho\u1EA1ch: " + Object.entries(items).map(([k, q]) => `${ITEMS[k].name} +${q}`).join(" \xB7 "), "ok");
        markDirty("panel");
        requestSave();
      },
      water: () => {
        const g = S.garden;
        if (!g.plots.some((p) => p.seed)) return toast("Ch\u01B0a c\xF3 c\xE2y n\xE0o \u0111\u1EC3 t\u01B0\u1EDBi", "err");
        g.watered = true;
        sfx("pour");
        toast("\u{1F4A7} \u0110\xE3 t\u01B0\u1EDBi n\u01B0\u1EDBc! C\xE2y s\u1EBD l\u1EDBn th\xEAm khi sang ng\xE0y m\u1EDBi.", "ok");
        markDirty("panel");
        requestSave();
      },
      replant: () => {
        const id = S.subtab.seed || SEEDS[0].id;
        let n = 0;
        for (let i = 0; i < S.garden.unlocked; i++) {
          const p = S.garden.plots[i];
          if (!p.seed && S.garden.seeds[id] > 0) {
            p.seed = id;
            p.grown = 0;
            S.garden.seeds[id]--;
            n++;
          }
        }
        if (!n) return toast("Kh\xF4ng c\xF3 \xF4 tr\u1ED1ng ho\u1EB7c \u0111\xE3 h\u1EBFt h\u1EA1t gi\u1ED1ng", "err");
        sfx("pop");
        toast(`\u0110\xE3 tr\u1ED3ng ${n} \xF4`, "ok");
        markDirty("panel");
        requestSave();
      },
      punlock: () => {
        const g = S.garden, cost = plotCost(g.unlocked + 1);
        confirmBox("M\u1EDF th\xEAm m\u1EA3nh \u0111\u1EA5t?", `M\u1EDF \xF4 s\u1ED1 ${g.unlocked + 1} v\u1EDBi gi\xE1 ${fmtK(cost)}.`, () => {
          const error = unlockPlot();
          if (error) return toast(error, "err");
          sfx("unlock");
        }, "M\u1EDF kh\xF3a");
      },
      shop: () => {
        const m = openModal({ id: "seedshop", cls: "small", html: `<h3 class="m-title">\u{1F6D2} C\u1EEDa h\xE0ng h\u1EA1t gi\u1ED1ng</h3>${SEEDS.map((s) => `<div class="nrow"><span class="k-ico">${s.icon}</span><div class="k-main"><b>${s.name}</b><small>L\u1EDBn trong ${s.days} ng\xE0y \xB7 thu ${s.yield[0]}-${s.yield[1]} ph\u1EA7n ${ITEMS[s.gives].name}</small></div><button class="btn gold sm" data-act="buy" data-id="${s.id}">${fmtK(s.price)}</button></div>`).join("")}<button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
        bindActions(m.body, { buy: (t) => {
          const s = seedDef(t.dataset.id);
          if (S.money < s.price) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n", "err");
          S.money -= s.price;
          S.garden.seeds[s.id] = (S.garden.seeds[s.id] || 0) + 1;
          sfx("coin");
          markDirty("hud", "panel");
          toast(`+1 ${s.name}`, "ok");
          requestSave();
        }, x: () => m.close() });
      }
    }
  };
  var bar = (v) => `<div class="bar ${v < 30 ? "danger" : v < 60 ? "warn" : ""}"><i style="width:${Math.round(v)}%"></i></div>`;
  function petCard(k) {
    var _a;
    const p = PETS[k];
    const can = k === "capybara" ? secretCount() >= p.secret : true;
    const sel = (S.subtab.pet || ((_a = S.pet) == null ? void 0 : _a.kind) || "shiba") === k;
    return `<button class="petchip ${sel ? "on" : ""}" data-act="petsel" data-k="${k}">${p.icon} ${p.name.split(" ").slice(0, 2).join(" ")} ${can ? "" : "<em>(Ch\u01B0a m\u1EDF)</em>"}</button>`;
  }
  var thucung = {
    html() {
      var _a;
      const selected = S.subtab.pet || ((_a = S.pet) == null ? void 0 : _a.kind) || "shiba";
      const nav = `<div class="petrow pet-tabs">${["shiba", "meo", "capybara"].map(petCard).join("")}</div>`;
      if (S.pet && (selected === S.pet.kind || selected === "capybara" && S.pet2)) {
        const p2 = selected === S.pet.kind ? S.pet : S.pet2, info = PETS[p2.kind];
        const act = petActive(p2);
        return `${nav}<div class="petcard owned"><div class="pet-big">${info.icon}</div><h4>${info.name}</h4><p class="muted">${act ? "\u2705 Buff \u0111ang k\xEDch ho\u1EA1t (trung b\xECnh c\xE1c ch\u1EC9 s\u1ED1 \u2265 60)" : "\u26A0\uFE0F C\u1EA7n ch\u0103m s\xF3c \u0111\u1EC3 k\xEDch ho\u1EA1t buff (trung b\xECnh \u2265 60)"}</p>
        <div class="pstats">${[["hunger", "\u{1F356} No"], ["joy", "\u{1F497} Vui v\u1EBB"], ["clean", "\u{1F6C1} S\u1EA1ch s\u1EBD"], ["energy", "\u{1F634} Kh\u1ECFe"]].map(([k2, l]) => {
          var _a2, _b;
          return `<div class="ps"><span>${l}</span>${bar((_a2 = p2[k2]) != null ? _a2 : 80)}<b>${Math.round((_b = p2[k2]) != null ? _b : 80)}</b></div>`;
        }).join("")}</div>
        <div class="pcare">${PET_CARE.map((c) => `<button class="btn soft" data-act="care" data-id="${c.id}" data-kind="${p2.kind}">${c.icon}<br/>${c.name}${c.cost ? `<small>${fmtK(c.cost)}</small>` : ""}</button>`).join("")}</div>
        <div class="buffs">${info.buffs.map((b) => `<p>${b}</p>`).join("")}</div>
        <p class="muted">Decor \u0111\xE3 mua: ${Object.keys(S.petDecor).length}/${PET_DECOR.length} \xB7 mua th\xEAm \u1EDF N\xE2ng c\u1EA5p \u203A Decor Th\xFA C\u01B0ng.</p><div class="petrow">${["shiba", "meo"].filter((k2) => k2 !== p2.kind).map((k2) => `<button class="btn soft" data-act="adopt" data-k="${k2}">\u0110\u1ED5i sang ${PETS[k2].icon} ${PETS[k2].name} \xB7 ${fmtK(PETS[k2].adopt)}</button>`).join("")}</div></div>
        ${S.pet2 && p2 !== S.pet2 ? `<div class="petcard owned"><div class="pet-big">${PETS.capybara.icon}</div><h4>${PETS.capybara.name} <span class="chip green">Nu\xF4i chung</span></h4>${PETS.capybara.buffs.map((b) => `<p>${b}</p>`).join("")}</div>` : ""}
        ${!S.pet2 && secretCount() >= 7 ? '<button class="btn pri block" data-act="capy">\u{1F9AB} Nh\u1EADn nu\xF4i C\xE1p Bi (mi\u1EC5n ph\xED)</button>' : ""}`;
      }
      const k = selected;
      const p = PETS[k];
      const sc = secretCount();
      const body = k === "capybara" ? `<div class="petcard cap"><div class="pet-big">${PETS.capybara.icon}</div><h4>\u{1F9AB} C\xC1P BI \u0110I\u1EC0M \u0110\u1EA0M (CAPYBARA)</h4><p>Th\xFA c\u01B0ng \u0111\u1ED9c b\u1EA3n qu\xFD hi\u1EBFm d\xE0nh ri\xEAng cho Nh\xE0 S\xE1ng T\u1EA1o Ti\u1EC7m Tr\xE0 S\u1EEFa Tinh Hoa! <b>K\u1EBFt h\u1EE3p tr\u1ECDn v\u1EB9n c\u1EA3 s\u1EE9c m\u1EA1nh c\u1EE7a Ch\xF3 v\xE0 M\xE8o</b>, \u0111\u1EB7c bi\u1EC7t c\xF3 th\u1EC3 nu\xF4i chung song song c\xF9ng 1 Ch\xF3 ho\u1EB7c 1 M\xE8o!</p>
        <div class="buffs"><b>4 \u0110\u1EB6C QUY\u1EC0N T\u1ED0I TH\u01AF\u1EE2NG C\u1EE6A C\xC1P BI:</b>${p.buffs.map((b) => `<p>${b}</p>`).join("")}</div>
        <div class="cond"><b>\u2B50 \u0110i\u1EC1u ki\u1EC7n m\u1EDF kh\xF3a: ${p.secret} C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n</b><div class="bar"><i style="width:${sc / p.secret * 100}%"></i></div><small>B\u1EA1n \u0111\xE3 s\xE1ng t\u1EA1o ${sc}/${p.secret} c\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n trong S\u1ED5 Tay S\u01B0u T\u1EA7m. C\u1EA7n th\xEAm ${Math.max(0, p.secret - sc)} c\xF4ng th\u1EE9c n\u1EEFa \u0111\u1EC3 m\u1EDF kh\xF3a C\xE1p Bi!</small></div>
        <button class="btn ${sc >= p.secret ? "pri" : "soft"} block" data-act="${sc >= p.secret ? "capy" : "goto"}" data-to="suutam">${sc >= p.secret ? "\u{1F9AB} Nh\u1EADn nu\xF4i C\xE1p Bi" : "\u{1F4D6} \u0110\u1EBFn M\u1EE5c S\u01B0u T\u1EA7m S\xE1ng T\u1EA1o C\xF4ng Th\u1EE9c (" + sc + "/" + p.secret + ")"}</button></div>` : `<div class="petcard"><div class="pet-big">${p.icon}</div><h4>\u{1F3E1} C\u0102N PH\xD2NG TH\xDA C\u01AFNG M\u01A0 \u01AF\u1EDAC</h4><p>B\u1EA1n \u0111\u01B0\u1EE3c ch\u1ECDn <b>1 trong 2 b\xE9 c\u01B0ng</b> \u0111\u1EC3 \u0111\u1ED3ng h\xE0nh c\xF9ng ti\u1EC7m c\u1EE7a m\xECnh. H\xE3y ch\u1ECDn ng\u01B0\u1EDDi b\u1EA1n ph\xF9 h\u1EE3p nh\u1EA5t v\u1EDBi chi\u1EBFn l\u01B0\u1EE3c kinh doanh c\u1EE7a b\u1EA1n! <small>Sau khi ch\u1ECDn, b\u1EA1n c\xF3 th\u1EC3 \u0111\u1ED5i l\u1EA1i b\xE9 kia v\xE0 c\xE1c ch\u1EC9 s\u1ED1 ch\u0103m s\xF3c tr\u1EDF v\u1EC1 80!</small></p>
        <div class="buffs"><h5>${p.icon} ${p.name}</h5>${p.buffs.map((b) => `<p>${b}</p>`).join("")}</div>
        <div class="adopt"><b>Ph\xED nh\u1EADn nu\xF4i ${p.icon} ${p.name}:</b> <span class="money">${fmt(p.adopt)}</span><p>Ti\u1EC1n k\xE9t qu\xE1n hi\u1EC7n c\xF3: ${fmtK(S.money)} ${S.money >= p.adopt ? "\u2705" : `\u274C (C\u1EA7n th\xEAm ${fmtK(p.adopt - S.money)})`}</p></div>
        <button class="btn ${S.money >= p.adopt ? "pri" : "ghost"} block" data-act="adopt" data-k="${k}">\u{1F43E} Nh\u1EADn Nu\xF4i ${p.name} (${fmtK(p.adopt)})</button></div>`;
      return `${nav}${body}`;
    },
    acts: {
      petsel: (t) => {
        S.subtab.pet = t.dataset.k;
        markDirty("panel");
      },
      goto: (t) => emit("goto", t.dataset.to),
      adopt: (t) => {
        const k = t.dataset.k, p = PETS[k];
        if (S.money < p.adopt) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n nh\u1EADn nu\xF4i", "err");
        confirmBox("Nh\u1EADn nu\xF4i " + p.name + "?", `Ph\xED ${fmtK(p.adopt)}. Ch\u1EC9 s\u1ED1 ch\u0103m s\xF3c b\xE9 ch\xEDnh tr\u1EDF v\u1EC1 80; C\xE1p Bi nu\xF4i chung \u0111\u01B0\u1EE3c gi\u1EEF l\u1EA1i.`, () => {
          const error = adoptPet(k);
          if (error) return toast(error, "err");
          S.subtab.pet = k;
          sfx("level");
          toast("\u{1F43E} Ch\xE0o m\u1EEBng th\xE0nh vi\xEAn m\u1EDBi!", "gold");
        }, "Nh\u1EADn nu\xF4i");
      },
      capy: () => {
        const error = adoptPet("capybara");
        if (error) return toast(error, "err");
        sfx("level");
        toast("\u{1F9AB} C\xE1p Bi \u0111\xE3 v\u1EC1 qu\xE1n!", "gold");
      },
      care: (t) => {
        const c = PET_CARE.find((x) => x.id === t.dataset.id);
        const error = carePet(t.dataset.id, t.dataset.kind);
        if (error) return toast(error, "err");
        sfx("pop");
        fxText("+" + c.name, t, "g");
      }
    }
  };
  function locCard(id) {
    const l = LOCATIONS[id];
    const here = S.location === id;
    return `<div class="loccard ${here ? "here" : ""}" id="loc-${id}"><div class="loc-img ${id}">${sceneHTML(id)}<span class="loc-tag">${l.icon} ${esc(l.tag)}</span><h4>${l.icon} ${esc(l.name)}</h4></div>
    <div class="loc-body"><i class="slogan">"${esc(l.slogan)}"</i>
    <details class="fold"><summary>Xem m\xF4 t\u1EA3, l\u1EE3i th\u1EBF & th\u1EED th\xE1ch</summary><p>${esc(l.desc)}</p>
    <div class="pro"><b>\u{1F7E2} L\u1EE3i Th\u1EBF Kinh Doanh (\u01AFu \u0110i\u1EC3m):</b>${l.pro.map((x) => `<p>\u2022 ${esc(x)}</p>`).join("")}</div>
    ${l.con.length ? `<div class="con"><b>\u{1F534} Th\u1EED Th\xE1ch V\u1EADn H\xE0nh (Kh\xF3 Kh\u0103n):</b>${l.con.map((x) => `<p>\u2022 ${esc(x)}</p>`).join("")}</div>` : ""}</details>
    <button class="btn ${here ? "ghost" : "pri"} block" data-act="startup" data-id="${id}" ${here ? "disabled" : ""}>${here ? "\u2705 \u0110ang \u0110\u1EB7t Qu\xE1n T\u1EA1i \u0110\xE2y" : `\u{1F680} Kh\u1EDFi Nghi\u1EC7p T\u1EA1i ${l.name} \xB7 ${fmtK(LOCATION_COST)}`}</button></div></div>`;
  }
  var SCENES2 = {
    goc: [["\u{1F3E1}", 46, 64, 8], ["\u{1F333}", 16, 44, 8], ["\u{1FAB4}", 80, 34, 8], ["\u{1F9CB}", 30, 30, 6]],
    hanoi: [["\u{1F3EF}", 60, 60, 10], ["\u{1F338}", 14, 36, 10], ["\u{1F6D5}", 82, 44, 10], ["\u{1F3EE}", 38, 26, 60], ["\u{1FAB7}", 46, 28, 4]],
    hcm: [["\u{1F3D9}\uFE0F", 58, 74, 8], ["\u{1F307}", 16, 50, 12], ["\u{1F6F5}", 36, 30, 4], ["\u{1F306}", 84, 46, 8]],
    hue: [["\u{1F3EF}", 54, 70, 8], ["\u{1F338}", 18, 36, 8], ["\u{1F6F6}", 82, 30, 4], ["\u{1F3EE}", 36, 26, 56]],
    danang: [["\u{1F309}", 54, 72, 6], ["\u{1F3D6}\uFE0F", 16, 44, 6], ["\u26F1\uFE0F", 84, 32, 6], ["\u{1F30A}", 36, 30, 2]],
    sapa: [["\u{1F3D4}\uFE0F", 48, 80, 4], ["\u{1F33E}", 16, 40, 6], ["\u2601\uFE0F", 80, 30, 54], ["\u{1F332}", 86, 38, 6], ["\u{1F375}", 30, 28, 4]],
    halong: [["\u26F5", 46, 50, 14], ["\u{1F3DD}\uFE0F", 18, 52, 6], ["\u{1FAA8}", 76, 42, 6], ["\u{1F30A}", 50, 30, 2]],
    bmt: [["\u2615", 22, 42, 8], ["\u{1F333}", 56, 58, 8], ["\u{1F418}", 82, 44, 6], ["\u{1F33F}", 38, 30, 4]],
    canTho: [["\u{1F6F6}", 40, 46, 6], ["\u{1F34D}", 16, 36, 8], ["\u{1F965}", 80, 36, 8], ["\u{1F334}", 60, 58, 8]],
    caMau: [["\u{1F980}", 22, 38, 6], ["\u{1F333}", 54, 54, 8], ["\u{1F990}", 80, 30, 6], ["\u{1F30A}", 38, 28, 2]],
    hoangSa: [["\u{1F3DD}\uFE0F", 46, 66, 6], ["\u{1F334}", 22, 46, 8], ["\u2693", 82, 34, 6], ["\u{1F6A2}", 66, 36, 34]]
  };
  var sceneHTML = (id) => `<div class="loc-scene" aria-hidden="true">${(SCENES2[id] || []).map(([e, x, sz, b]) => `<span style="left:${x}%;font-size:${sz}px;bottom:${b}px">${e}</span>`).join("")}</div>`;
  var VM_H = 136;
  var vmXY = ([lo, la]) => [(lo - 102) * 8, (24 - la) * 8];
  var vmF = (n) => +n.toFixed(1);
  var vmPt = (p) => {
    const [x, y] = vmXY(p);
    return vmF(x) + " " + vmF(y);
  };
  function vmCurve(pts, tn = 1) {
    const q = pts.map(vmXY);
    let d = "";
    for (let i = 0; i < q.length - 1; i++) {
      const a = q[i - 1] || q[i], b = q[i], c = q[i + 1], e = q[i + 2] || c, k = tn / 6;
      d += `C${vmF(b[0] + (c[0] - a[0]) * k)} ${vmF(b[1] + (c[1] - a[1]) * k)} ${vmF(c[0] - (e[0] - b[0]) * k)} ${vmF(c[1] - (e[1] - b[1]) * k)} ${vmF(c[0])} ${vmF(c[1])}`;
    }
    return d;
  }
  var vmLine = (pts, tn) => `M${vmPt(pts[0])}${vmCurve(pts, tn)}`;
  var vmLoop = (pts, tn) => `${vmLine([...pts, pts[0]], tn)}Z`;
  var VM_N = [[102.15, 22.4], [102.45, 22.75], [102.9, 22.5], [103.3, 22.75], [103.6, 22.6], [103.95, 22.5], [104.3, 22.82], [104.7, 23], [105, 23.25], [105.32, 23.37], [105.6, 23.1], [105.95, 23], [106.4, 22.9], [106.7, 22.85], [106.6, 22.45], [106.75, 22], [107.15, 21.95], [107.45, 21.65], [107.95, 21.55], [108.05, 21.5]];
  var VM_C = [[108.05, 21.5], [107.75, 21.3], [107.5, 21.1], [107.3, 21], [107, 20.85], [106.8, 20.75], [106.6, 20.55], [106.5, 20.3], [106.2, 20.1], [105.95, 19.9], [105.85, 19.6], [105.8, 19.25], [105.8, 18.7], [106.1, 18.35], [106.4, 18], [106.65, 17.55], [107.1, 17], [107.5, 16.6], [107.9, 16.35], [108.2, 16.12], [108.35, 15.9], [108.65, 15.55], [108.9, 15.15], [109.05, 14.6], [109.2, 14], [109.3, 13.5], [109.4, 13], [109.3, 12.5], [109.2, 12], [109.1, 11.6], [108.9, 11.3], [108.5, 11], [108.1, 10.9], [107.6, 10.55], [107.1, 10.35], [106.85, 10.4], [106.75, 10.3], [106.6, 9.95], [106.4, 9.55], [106, 9.3], [105.7, 9], [105.35, 8.75], [104.85, 8.6], [104.8, 8.8], [104.95, 9.3], [105.05, 9.8], [105.05, 10], [104.8, 10.2], [104.5, 10.42]];
  var VM_W = [[104.5, 10.42], [104.85, 10.9], [105.35, 10.85], [105.8, 11.05], [106.1, 11.35], [106.4, 11.7], [106.9, 11.95], [107.3, 12.15], [107.5, 12.4], [107.4, 13], [107.5, 13.5], [107.4, 14.1], [107.55, 14.6], [107.4, 15.15], [107.55, 15.6], [107.2, 15.9], [107.1, 16.2], [106.7, 16.55], [106.55, 17], [106.4, 17], [105.95, 17.4], [105.6, 17.75], [105.15, 18.3], [104.7, 18.75], [104, 19.2], [104, 19.7], [104.6, 20.4], [104.1, 20.85], [103.7, 20.65], [103.35, 20.95], [103, 21.5], [102.7, 21.7], [102.2, 22.05], [102.15, 22.4]];
  var VM_GULF = [[104.5, 10.42], [104.2, 10.55], [103.6, 10.6], [103.2, 11], [102.9, 11.6], [102.5, 12.1], [102, 12.4]];
  var VM_CHINA = [[114.5, 22.6], [113.6, 22.1], [112.3, 21.7], [111, 21.5], [110.5, 21.1], [110.4, 20.4], [110.2, 20.25], [109.95, 20.9], [109.7, 21.45], [109.1, 21.5], [108.05, 21.5]];
  var VM_HAINAN = [[108.65, 19.35], [108.8, 19.8], [109.3, 20.05], [110.1, 20.1], [110.6, 19.9], [111, 19.6], [110.8, 19], [110.4, 18.7], [109.7, 18.3], [109.1, 18.25], [108.65, 18.5], [108.6, 19]];
  var VM_PQ = [[103.98, 10.45], [104.05, 10.3], [104, 10.1], [103.92, 9.95], [103.85, 10.1], [103.88, 10.3]];
  var VM_CD = [[106.55, 8.78], [106.65, 8.72], [106.7, 8.65], [106.6, 8.62], [106.52, 8.7]];
  var VM_LAND = `M${vmPt(VM_N[0])}${vmCurve(VM_N)}${vmCurve(VM_C)}${vmCurve(VM_W)}Z`;
  var VM_SEA = `${vmLine(VM_C)}${vmCurve(VM_GULF)}L${vmPt([102, 7])}L${vmPt([114.5, 7])}L${vmPt(VM_CHINA[0])}${vmCurve(VM_CHINA)}Z`;
  var VM_RIVERS = [
    [[103.97, 22.5], [104.5, 22], [104.95, 21.65], [105.4, 21.3], [105.85, 21.03], [106.2, 20.65], [106.55, 20.25]],
    // sông Hồng
    [[104.9, 11.6], [105.1, 11.15], [105.25, 10.8], [105.8, 10.35], [106.3, 10.1], [106.75, 9.95]],
    // Mê Kông - sông Tiền
    [[105.3, 10.75], [105.6, 10.2], [105.9, 9.8], [106.2, 9.45]],
    // sông Hậu
    [[104.2, 14.2], [104.9, 12.8], [104.9, 11.6]]
    // Mê Kông thượng
  ];
  var VM_MTS = [[103.8, 22.25], [104.25, 22.05], [104.6, 21.6], [103.3, 21.5], [105.6, 18.4], [106.2, 17.6], [106.8, 16.8], [107.1, 15.9], [107.25, 15.2], [108.3, 13.9], [108.4, 13], [108.5, 12], [105, 22]];
  var VM_ISL = [[111.2, 16.45], [111.6, 16.55], [111.75, 16.2], [112.3, 16.05], [111.5, 16.85]];
  var VM_TS = [[114, 10.3], [113.4, 9], [112.9, 9.8], [112.3, 8.9], [111.9, 9.9], [113.9, 9.2], [112.6, 10]];
  var vmTxt = (lo, la, t, cls, rot) => {
    const [x, y] = vmXY([lo, la]);
    return `<text x="${vmF(x)}" y="${vmF(y)}" class="vt ${cls}"${rot ? ` transform="rotate(${rot} ${vmF(x)} ${vmF(y)})"` : ""}>${t}</text>`;
  };
  var vmMt = (p) => {
    const [x, y] = vmXY(p);
    return `M${vmF(x - 1.3)} ${vmF(y + 0.9)}L${vmF(x - 0.2)} ${vmF(y - 1)}L${vmF(x + 0.5)} ${vmF(y + 0.1)}L${vmF(x + 0.9)} ${vmF(y - 0.5)}L${vmF(x + 1.5)} ${vmF(y + 0.9)}Z`;
  };
  var vmDot = (p, r) => {
    const [x, y] = vmXY(p);
    return `<circle cx="${vmF(x)}" cy="${vmF(y)}" r="${r}"/>`;
  };
  var VM_PIN_LBL = { goc: ["Ti\u1EC7m g\u1ED1c", "r"], hanoi: ["H\xE0 N\u1ED9i", "l"], sapa: ["Sa Pa", "r"], halong: ["H\u1EA1 Long", "r"], hue: ["Hu\u1EBF", "l"], danang: ["\u0110\xE0 N\u1EB5ng", "r"], bmt: ["Bu\xF4n Ma Thu\u1ED9t", "r"], hcm: ["TP.HCM", "r"], canTho: ["C\u1EA7n Th\u01A1", "l"], caMau: ["C\xE0 Mau", "r"], hoangSa: ["Ho\xE0ng Sa", "r"] };
  var vmStar = (R) => Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? R * 0.382 : R;
    return vmF(Math.cos(a) * r) + "," + vmF(Math.sin(a) * r);
  }).join(" ");
  var vmFlag = (lo, la) => {
    const [x, y] = vmXY([lo, la]);
    return `<g class="vflag" transform="translate(${vmF(x)} ${vmF(y)})"><path d="M0 0V-4.2" class="pole"/><g><rect x="0" y="-4.2" width="3.4" height="2.3"/><polygon points="${vmStar(0.7).replace(/(-?[d.]+),(-?[d.]+)/g, (m, a, b) => vmF(+a + 1.7) + "," + vmF(+b - 3.05))}"/></g></g>`;
  };
  var vmapSvg = () => `<svg viewBox="0 0 100 ${VM_H}" role="img" aria-label="B\u1EA3n \u0111\u1ED3 Vi\u1EC7t Nam">
  <defs>
    <linearGradient id="vfl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ee3a2f"/><stop offset="1" stop-color="#b3150f"/></linearGradient>
    <linearGradient id="vsg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f8fb8"/><stop offset=".5" stop-color="#1b6a9c"/><stop offset="1" stop-color="#0d3a6b"/></linearGradient>
    <clipPath id="vclip"><path d="${VM_SEA}"/></clipPath>
    <pattern id="vwave" width="7" height="5" patternUnits="userSpaceOnUse"><path d="M0 1.6Q1.75 0 3.5 1.6T7 1.6M-3.5 4.1Q-1.75 2.5 0 4.1T3.5 4.1T7 4.1" class="vwv"/></pattern></defs>
  <rect width="100" height="${VM_H}" class="vnb"/>
  ${vmTxt(103.6, 23.3, "TRUNG QU\u1ED0C", "nb")}${vmTxt(105.3, 17.6, "L\xC0O", "nb", -62)}${vmTxt(102.95, 15.2, "TH\xC1I LAN", "nb", -90)}${vmTxt(105, 12.2, "CAMPUCHIA", "nb")}
  <path d="${VM_SEA}" class="vsea"/><g clip-path="url(#vclip)"><rect class="vwvm" x="-7" width="114" height="${VM_H}" fill="url(#vwave)"/></g>
  <g class="vcloud c1"><ellipse cx="0" cy="0" rx="6" ry="1.8"/><ellipse cx="3" cy="-1.2" rx="3.6" ry="1.8"/><ellipse cx="-3" cy="-.8" rx="3" ry="1.4"/></g>
  <g class="vcloud c2"><ellipse cx="0" cy="0" rx="5" ry="1.5"/><ellipse cx="2.4" cy="-1" rx="3" ry="1.5"/></g>
  <path d="${vmLoop(VM_HAINAN)}" class="vnb2"/>${vmTxt(109.7, 19.1, "H\u1EA3i Nam", "nb s")}
  ${vmTxt(112.3, 13.6, "BI\u1EC2N \u0110\xD4NG", "sea")}${vmTxt(107.35, 18.9, "V\u1ECBnh B\u1EAFc B\u1ED9", "sea s")}${vmTxt(103.2, 9.2, "V\u1ECBnh Th\xE1i Lan", "sea s")}
  <path d="${VM_LAND}" class="vglow"/>
  <path d="${VM_LAND}" class="land"/>
  <g class="vstar" transform="translate(${vmF(vmXY([104.65, 19.4])[0])} ${vmF(vmXY([104.65, 19.4])[1])})"><polygon points="${vmStar(4.6)}"/></g>
  <path d="${vmLoop(VM_PQ)}" class="land isl-l"/><path d="${vmLoop(VM_CD)}" class="land isl-l"/>
  ${VM_RIVERS.map((r, i) => `<path d="${vmLine(r)}" class="river${i === 3 ? " dim" : ""}"/>`).join("")}
  <path d="${VM_MTS.map(vmMt).join("")}" class="mts"/>
  <g class="isl">${VM_ISL.map((p) => vmDot(p, 0.55)).join("")}</g><g class="isl">${VM_TS.map((p) => vmDot(p, 0.55)).join("")}</g>
  ${vmFlag(111.6, 16.3)}${vmFlag(113.2, 9.6)}
  <g class="vboat b1" transform="translate(${vmPt([111, 12.2])})"><g><path d="M-2.2 0.4H2.2L1.4 1.6H-1.4Z" class="hull"/><path d="M0 -3.4V.2M0.3 -3.2L2 0H0.3Z" class="sail"/></g></g>
  <g class="vboat b2" transform="translate(${vmPt([103, 9.7])})"><g><path d="M-2.2 0.4H2.2L1.4 1.6H-1.4Z" class="hull"/><path d="M0 -3.4V.2M0.3 -3.2L2 0H0.3Z" class="sail"/></g></g>
  <g class="vbird"><path d="M0 0Q1 -1.2 2 0Q3 -1.2 4 0"/><path d="M5 2Q5.8 1 6.6 2Q7.4 1 8.2 2"/></g>
  ${vmTxt(111.5, 15.3, "Q.\u0111 Ho\xE0ng Sa", "sea s")}${vmTxt(112.7, 8.55, "Q.\u0111 Tr\u01B0\u1EDDng Sa", "sea s")}
  ${vmTxt(103.3, 21.55, "Ho\xE0ng Li\xEAn S\u01A1n", "mt s", 0)}${vmTxt(107.2, 14.35, "Tr\u01B0\u1EDDng S\u01A1n", "mt s", -72)}${vmTxt(106.1, 21.7, "S. H\u1ED3ng", "rv s", -38)}${vmTxt(104.75, 11.15, "S. M\xEA K\xF4ng", "rv s", 0)}${vmTxt(103.6, 10.85, "Ph\xFA Qu\u1ED1c", "nb s")}
  <g class="cmp" transform="translate(89 13)"><circle r="6.2" class="cmp-r"/><g class="cmp-spin"><path d="M0 -6L1.5 0L0 6L-1.5 0Z" class="cmp-n"/><path d="M-6 0L0 -1.5L6 0L0 1.5Z" class="cmp-e"/></g><text y="-8" class="vt cmp-t">B</text></g>
  <g class="scl" transform="translate(36 131)"><path d="M0 0H14.4M0 -1V1M7.2 -.7V.7M14.4 -1V1"/><text x="7.2" y="-2" class="vt s">200 km</text></g>
</svg>`;
  var VM_LEGEND = '<div class="vm-legend"><span><i class="lg-dot"></i>Qu\xE1n tr\xE0</span><span><i class="lg-isl"></i>\u0110\u1EA3o</span><span><i class="lg-rv"></i>S\xF4ng</span><span><i class="lg-mt"></i>N\xFAi</span></div>';
  var khoinghiep = {
    html() {
      const pins = Object.entries(LOCATIONS).map(([id, l]) => {
        const [lb, sd] = VM_PIN_LBL[id] || [l.short || l.name, "r"];
        return `<button class="pin pin-${sd} ${S.location === id ? "on" : ""}" style="left:${l.map[0]}%;top:${l.map[1]}%" data-act="pin" data-id="${id}" aria-label="${esc(l.name)}"><span>${l.icon}</span><small>${esc(lb)}</small></button>`;
      }).join("");
      const cur2 = LOCATIONS[S.location];
      return `<div class="cur-loc"><span class="chip y">\u{1F3E0} TI\u1EC6M TR\xC0 G\u1ED0C (BAN \u0110\u1EA6U)</span><span class="chip green">\u2B50 \u0110ANG KINH DOANH</span><h4>${cur2.icon} ${esc(cur2.name)}</h4><i>"${esc(cur2.slogan)}"</i><p>${esc(cur2.desc)}</p></div>
      <h4 class="subh">B\u1EA3n \u0110\u1ED3 Kh\u1EDFi Nghi\u1EC7p Xuy\xEAn Vi\u1EC7t</h4><p class="muted">Ch\u1EA1m v\xE0o c\xE1c bi\u1EC3u t\u01B0\u1EE3ng ghim tr\xEAn b\u1EA3n \u0111\u1ED3 ho\u1EB7c danh s\xE1ch b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 ch\u1ECDn \u0111\u1ECBa \u0111i\u1EC3m m\u1EDF qu\xE1n. M\u1ED7i t\u1EC9nh th\xE0nh mang l\u1EA1i l\u1EE3i th\u1EBF doanh thu v\xE0 th\u1EED th\xE1ch v\u1EADn h\xE0nh \u0111\u1ED9c b\u1EA3n!</p>
      <div class="vmap">${vmapSvg()}${pins}${VM_LEGEND}</div>
      <h4 class="subh">Danh S\xE1ch \u0110\u1ECBa \u0110i\u1EC3m Kinh Doanh</h4>${Object.keys(LOCATIONS).map(locCard).join("")}`;
    },
    acts: {
      pin: (t) => {
        const el = document.getElementById("loc-" + t.dataset.id);
        el == null ? void 0 : el.scrollIntoView({ behavior: "smooth", block: "center" });
        el == null ? void 0 : el.classList.add("flash");
        setTimeout(() => el == null ? void 0 : el.classList.remove("flash"), 1400);
      },
      startup: (t) => {
        const l = LOCATIONS[t.dataset.id];
        if (S.money < LOCATION_COST) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n kh\u1EDFi nghi\u1EC7p", "err");
        confirmBox(`Kh\u1EDFi nghi\u1EC7p t\u1EA1i ${l.name}?`, `Chi ph\xED ${fmtK(LOCATION_COST)}. Qu\xE1n chuy\u1EC3n sang v\xF9ng m\u1EDBi: \u0111\u1ED5i th\u1EDDi ti\u1EBFt, l\u1EE3i th\u1EBF v\xE0 th\u1EED th\xE1ch v\u1EADn h\xE0nh.`, () => {
          const error = moveShop(t.dataset.id);
          if (error) return toast(error, "err");
          sfx("level");
          toast(`\u{1F680} \u0110\xE3 kh\u1EDFi nghi\u1EC7p t\u1EA1i ${l.name}!`, "gold");
        }, "Kh\u1EDFi nghi\u1EC7p");
      }
    }
  };
  var sanh = {
    html() {
      const b = bonus();
      return `<div class="lobby-top"><div class="lobby-stat"><span>\u{1F465} Ch\u1EDD: <b>0</b> kh\xE1ch</span><span>\u{1FA91} B\xE0n: <b>0/${b.tables}</b> b\xE0n</span><span>\u{1F4B0} <b>${fmtK(S.money)}</b></span></div></div>
      <div class="lcard"><div class="lc-h"><h4>\u{1F9CB} Qu\u1EA7y Pha Ch\u1EBF & H\xE0ng Ch\u1EDD</h4><span class="pill">T\u1ED1i \u0111a ${b.queue} kh\xE1ch</span></div><p class="muted">Kh\xE1ch t\u1EF1 \u0111\u1ED9ng \u0111\u1EBFn x\u1EBFp h\xE0ng (t\u1ED1i \u0111a ${b.queue} kh\xE1ch ch\u1EDD). M\u1EDF r\u1ED9ng qu\u1EA7y \u1EDF N\xE2ng c\u1EA5p \u203A Trang b\u1ECB \u0111\u1EC3 ch\u1EDD \u0111\u01B0\u1EE3c nhi\u1EC1u h\u01A1n.</p><div class="lobby-q"><span class="lq">\u{1F642}</span><span class="lq">\u{1F600}</span><span class="lq">\u{1F9D1}</span><span class="lq dim">\uFF0B</span></div></div>
      <div class="lcard"><div class="lc-h"><h4>\u{1FA91} Khu B\xE0n Gh\u1EBF Kh\xE1ch Ng\u1ED3i</h4><span class="pill y">\u{1FA91} +10% ng\u1ED3i t\u1EA1i qu\xE1n</span></div><p class="muted">Kh\xE1ch ch\u1EC9 v\xE0o ng\u1ED3i khi b\xE0n \u0111\u01B0\u1EE3c d\u1ECDn s\u1EA1ch \u2728 \u2014 trong ca b\xE1n b\u1EA5m <b>Ra s\u1EA3nh \u2192</b> \u0111\u1EC3 d\u1ECDn b\xE0n d\u01A1 nh\u1EADn ti\u1EC1n boa!</p>
        <div class="tables">${Array.from({ length: b.tables }, (_, i) => `<div class="tbl free"><span class="t-ico">\u2728</span><small>B\xE0n ${i + 1}</small></div>`).join("")}</div>
        <button class="btn gold block" data-act="goto" data-to="nangcap">\u{1F6E0}\uFE0F N\xE2ng c\u1EA5p b\xE0n gh\u1EBF</button></div>`;
    },
    acts: { goto: (t) => {
      S.subtab.nc = "trangbi";
      emit("goto", t.dataset.to);
    } }
  };
  var danhgia = {
    html() {
      const rv = S.reviews;
      const dist = [5, 4, 3, 2, 1].map((s) => [s, rv.filter((r) => r.stars === s).length]);
      const mx = Math.max(1, ...dist.map((d) => d[1]));
      return `<div class="rvhead"><div class="big-r">${S.rating.toFixed(1).replace(".", ",")}<small>/5</small></div><div><span class="stars lg">${Array.from({ length: 5 }, (_, i) => `<i class="${i < Math.round(S.rating) ? "on" : ""}">\u2605</i>`).join("")}</span><small>${S.ratingCount} l\u01B0\u1EE3t \u0111\xE1nh gi\xE1 \xB7 ${rv.length} g\u1EA7n nh\u1EA5t</small></div></div>
      <div class="dist">${dist.map(([s, n]) => `<div class="dr"><span>${s}\u2605</span><div class="bar"><i style="width:${n / mx * 100}%"></i></div><b>${n}</b></div>`).join("")}</div>
      ${rv.length ? rv.slice(0, 30).map((r) => `<div class="review"><span class="r-av">${r.av}</span><div class="grow"><div class="r-h"><b>${esc(r.name)}</b><span class="stars">${"\u2605".repeat(r.stars)}${"\u2606".repeat(5 - r.stars)}</span></div><p>${esc(r.text)}</p>${r.reply ? `<p class="muted">Ti\u1EC7m tr\u1EA3 l\u1EDDi: ${esc(r.reply)}</p>` : ""}<small>Ng\xE0y ${r.day}</small></div></div>`).join("") : '<div class="emptybox">\u2B50<b>Ch\u01B0a c\xF3 \u0111\xE1nh gi\xE1</b><p>M\u1EDF c\u1EEDa v\xE0 ph\u1EE5c v\u1EE5 kh\xE1ch \u0111\u1EC3 nh\u1EADn \u0111\xE1nh gi\xE1 \u0111\u1EA7u ti\xEAn!</p></div>'}`;
    },
    acts: {}
  };
  function periodEntries(mode, idx) {
    const hs = S.history;
    const len = mode === "day" ? 1 : mode === "week" ? 7 : 30;
    const end2 = hs.length - idx * len;
    const start = Math.max(0, end2 - len);
    return { list: hs.slice(start, end2), label: mode === "day" ? hs[end2 - 1] ? `Ng\xE0y ${hs[end2 - 1].day}` : "\u2014" : mode === "week" ? `Tu\u1EA7n ${Math.ceil(Math.max(1, hs.length - idx * 7) / 7)}` : `Th\xE1ng ${Math.ceil(Math.max(1, hs.length - idx * 30) / 30)}`, can: { prev: start > 0, next: idx > 0 } };
  }
  var tongket = {
    html() {
      const mode = S.subtab.tk || "day";
      const idx = S.subtab.tkIdx || 0;
      const per = periodEntries(mode, idx);
      const a = aggregate(per.list);
      const ev = mode === "day" && per.list[0] ? DAY_EVENTS.find((e) => e.id === (per.list[0].event || "normal")) : null;
      return `<div class="tabs">${[["day", "Theo ng\xE0y"], ["week", "Theo tu\u1EA7n"], ["month", "Theo th\xE1ng"]].map(([id, l]) => `<button class="tab ${mode === id ? "on" : ""}" data-act="tkmode" data-v="${id}">${l}</button>`).join("")}</div>
      <div class="navr"><button class="rb" data-act="tkprev" ${per.can.prev ? "" : "disabled"}>\u2039</button><b>${esc(per.label)}</b><button class="rb" data-act="tknext" ${per.can.next ? "" : "disabled"}>\u203A</button></div>
      ${ev ? `<div class="evline">${ev.icon} S\u1EF1 ki\u1EC7n: <b>${esc(ev.name)}</b></div>` : ""}
      ${per.list.length ? `<div class="day-stats"><div><b>${a.cups}</b><span>ly b\xE1n</span></div><div><b>${a.left}</b><span>kh\xE1ch b\u1ECF v\u1EC1</span></div><div><b>${a.avgStars ? a.avgStars.toFixed(1) : "\u2013"}\u2605</b><span>\u0111\xE1nh gi\xE1</span></div></div>${plHTML(a, per.label)}` : '<div class="emptybox">\u{1F4CA}<b>Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u</b><p>Ho\xE0n th\xE0nh \xEDt nh\u1EA5t m\u1ED9t ng\xE0y b\xE1n h\xE0ng \u0111\u1EC3 xem b\xE1o c\xE1o.</p></div>'}`;
    },
    acts: {
      tkmode: (t) => {
        S.subtab.tk = t.dataset.v;
        S.subtab.tkIdx = 0;
        markDirty("panel");
      },
      tkprev: () => {
        S.subtab.tkIdx = (S.subtab.tkIdx || 0) + 1;
        markDirty("panel");
      },
      tknext: () => {
        S.subtab.tkIdx = Math.max(0, (S.subtab.tkIdx || 0) - 1);
        markDirty("panel");
      }
    }
  };
  var banbe = {
    html() {
      const f = S.friends;
      const list = [...NPC_FRIENDS.map((x) => ({ ...x })), ...f.list];
      const board = [{ id: "me", name: S.shopName + " (B\u1EA1n)", av: "\u2B50", rich: S.money, rating: S.rating }, ...list].sort((a, b) => b.rich - a.rich);
      return `<div class="codecard"><small>M\xE3 m\u1EDDi c\u1EE7a b\u1EA1n</small><b>${f.code}</b><button class="btn soft sm" data-act="copycode">\u{1F4CB} Sao ch\xE9p</button></div>
      <div class="addf"><input id="friendCode" placeholder="Nh\u1EADp m\xE3 b\u1EA1n b\xE8 (TTN-XXXXX)" aria-label="M\xE3 b\u1EA1n b\xE8"><button class="btn pri sm" data-act="addf">Th\xEAm b\u1EA1n</button></div>
      <h5 class="grp">\u{1F465} Danh s\xE1ch b\u1EA1n b\xE8 (${list.length})</h5>
      ${list.map((x) => `<div class="frow"><span class="r-av">${x.av}</span><div class="grow"><b>${esc(x.name)}</b><small>\u2B50 ${x.rating.toFixed(1)} \xB7 \u{1F4B0} ${fmtK(x.rich)}</small></div><button class="btn ${f.gifted[x.id] === S.day ? "ghost" : "gold"} sm" data-act="visit" data-id="${x.id}" ${f.gifted[x.id] === S.day ? "disabled" : ""}>${f.gifted[x.id] === S.day ? "\u0110\xE3 th\u0103m" : "\u{1F381} Th\u0103m qu\xE1n"}</button></div>`).join("")}
      <h5 class="grp">\u{1F3C6} B\u1EA3ng x\u1EBFp h\u1EA1ng t\xE0i s\u1EA3n</h5>${board.map((x, i) => `<div class="dl ${x.id === "me" ? "me" : ""}"><span>${i + 1}. ${x.av} ${esc(x.name)}</span><b>${fmtK(x.rich)}</b></div>`).join("")}`;
    },
    acts: {
      copycode: async () => {
        if (await copyText(S.friends.code)) toast("\u0110\xE3 sao ch\xE9p m\xE3 m\u1EDDi!", "ok");
        else alertBox("M\xE3 m\u1EDDi c\u1EE7a b\u1EA1n", `<input class="field" readonly value="${esc(S.friends.code)}" aria-label="M\xE3 m\u1EDDi">Nh\u1EA5n gi\u1EEF m\xE3 \u0111\u1EC3 sao ch\xE9p.`);
      },
      addf: () => {
        var _a;
        const v = (((_a = $("#friendCode")) == null ? void 0 : _a.value) || "").trim().toUpperCase();
        if (!/^TTN-[A-Z0-9]{3,8}$/.test(v)) return toast("M\xE3 b\u1EA1n b\xE8 kh\xF4ng h\u1EE3p l\u1EC7 (d\u1EA1ng TTN-XXXXX)", "err");
        if (v === S.friends.code) return toast("\u0110\xF3 l\xE0 m\xE3 c\u1EE7a b\u1EA1n!", "err");
        if (S.friends.list.some((x) => x.id === v)) return toast("\u0110\xE3 l\xE0 b\u1EA1n r\u1ED3i", "err");
        S.friends.list.push({ id: v, name: "B\u1EA1n " + v, av: pick(["\u{1F43B}", "\u{1F98A}", "\u{1F430}", "\u{1F43C}"]), rating: +rand(3.8, 4.9).toFixed(1), rich: Math.round(rand(2e5, 4e6)) });
        toast("\u0110\xE3 k\u1EBFt b\u1EA1n!", "ok");
        sfx("success");
        markDirty("panel");
        requestSave();
      },
      visit: (t) => {
        const gift = visitFriend(t.dataset.id);
        if (typeof gift === "string") return toast(gift, "err");
        toast(`\u{1F381} B\u1EA1n t\u1EB7ng qu\xE0! +${fmtK(gift)}`, "gold");
        sfx("coin");
        markDirty("hud", "panel");
        requestSave();
      }
    }
  };
  function openPack() {
    const c = S.collection;
    if (c.packs <= 0) return null;
    c.packs--;
    const out = [];
    for (let i = 0; i < 3; i++) {
      const r = wpick(GACHA.weights);
      const idxs = GACHA.rarities.map((x, k2) => x === r ? k2 : -1).filter((k2) => k2 >= 0);
      const k = pick(idxs);
      const dup = !!c.owned[k];
      c.owned[k] = (c.owned[k] || 0) + 1;
      if (dup) addStock("tcDen", 3);
      out.push({ k, r, dup });
    }
    const sec = SECRET_RECIPES.filter((s) => !c.secrets[s.id]);
    let secret = null;
    if (sec.length && chance(0.12)) {
      secret = pick(sec);
      c.secrets[secret.id] = true;
    }
    markDirty("panel", "hud");
    requestSave();
    return { out, secret };
  }
  var suutam = {
    html() {
      const c = S.collection;
      const owned = Object.keys(c.owned).length;
      return `<div class="colhead"><h4>\u{1F3B4} S\u1ED4 TAY S\u01AFU T\u1EA6M & GACHA NGUY\xCAN LI\u1EC6U</h4><p>\u0110\xE3 c\xF3 <b>${owned}/${GACHA.names.length}</b> th\u1EBB \xB7 C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n <b>${secretCount()}/${SECRET_RECIPES.length}</b> \xB7 Th\u01B0\u1EDFng: +${Math.min(20, owned * 0.3).toFixed(1)}% doanh thu</p>
      <div class="row2"><button class="btn gold" data-act="pack" ${c.packs > 0 ? "" : "disabled"}>\u{1F381} M\u1EDF t\xFAi qu\xE0 (${c.packs})</button><button class="btn soft" data-act="buypack">\u{1F6D2} Mua t\xFAi (${fmtK(GIFT_COST)})</button></div></div>
      <h5 class="grp">\u{1F4D6} C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n</h5><div class="secrets">${SECRET_RECIPES.map((s) => `<div class="secret ${c.secrets[s.id] ? "got" : ""}"><span>${c.secrets[s.id] ? s.icon : "\u{1F512}"}</span><b>${c.secrets[s.id] ? esc(s.name) : "???"}</b><small>${c.secrets[s.id] ? esc(s.desc) : "Ch\u01B0a kh\xE1m ph\xE1"}</small></div>`).join("")}</div>
      <h5 class="grp">\u{1F9FA} Th\u1EBB nguy\xEAn li\u1EC7u</h5><div class="cards">${GACHA.names.map((n, k) => `<div class="gcard r${GACHA.rarities[k]} ${c.owned[k] ? "" : "unk"}"><span>${c.owned[k] ? GACHA.icons[k] : "\u2754"}</span><b>${c.owned[k] ? n : "???"}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${c.owned[k] > 1 ? " \xD7" + c.owned[k] : ""}</small></div>`).join("")}</div>`;
    },
    acts: {
      pack: () => {
        const r = openPack();
        if (!r) return;
        sfx("unlock");
        const m = openModal({ cls: "small", html: `<h3 class="m-title">\u2728 Ph\xE1t hi\u1EC7n m\u1EDBi!</h3><div class="cards">${r.out.map(({ k, dup }) => `<div class="gcard r${GACHA.rarities[k]} flip"><span>${GACHA.icons[k]}</span><b>${GACHA.names[k]}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${dup ? " \xB7 tr\xF9ng (+3 TC \u0111en)" : " \xB7 M\u1EDAI!"}</small></div>`).join("")}</div>${r.secret ? `<div class="secret got big"><span>${r.secret.icon}</span><b>C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n: ${esc(r.secret.name)}</b><small>${esc(r.secret.desc)}</small></div>` : ""}<button class="btn pri block" data-act="x">Tuy\u1EC7t! \u2728</button>` });
        bindActions(m.body, { x: () => m.close() });
        fxSpark($(".gcard", m.body), 10);
      },
      buypack: () => {
        if (S.money < GIFT_COST) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n", "err");
        S.money -= GIFT_COST;
        S.collection.packs++;
        sfx("coin");
        markDirty("hud", "panel");
        requestSave();
      }
    }
  };
  var PANELS3 = { vuon, thucung, khoinghiep, sanh, danhgia, tongket, banbe, suutam };

  // js/pearl-art.js
  var PALETTES = [["#a68b78", "#30221f"], ["#fff4a1", "#e8a51c"], ["#ffe1ef", "#ed6ba4"], ["#e2ffd8", "#65b887"], ["#f1dfff", "#a379da"]];
  var MARKS = [
    '<path d="M31 51 Q40 61 49 51" fill="none" stroke="#ffe6ba" stroke-width="3" stroke-linecap="round"/><circle cx="29" cy="41" r="3" fill="#ffe6ba"/><circle cx="51" cy="41" r="3" fill="#ffe6ba"/>',
    '<path d="M40 23 L45 35 L59 36 L48 45 L52 59 L40 51 L28 59 L32 45 L21 36 L35 35Z" fill="#fff7cb" stroke="#c98811" stroke-width="2"/>',
    '<path d="M40 57 C17 42 21 24 32 28 Q40 29 40 36 Q44 24 53 28 C68 36 52 49 40 57Z" fill="#fff1f7" stroke="#cf5389" stroke-width="2"/>',
    '<path d="M24 53 Q18 25 58 24 Q59 54 24 53Z" fill="#d8ffd5" stroke="#438a60" stroke-width="2"/><path d="M25 53 L49 33 M36 43 L35 32 M41 38 L53 39" fill="none" stroke="#438a60" stroke-width="2" stroke-linecap="round"/>',
    '<path d="M23 48 Q20 22 42 25 Q63 29 55 47 Q46 65 32 49 Q26 36 40 34 Q51 36 43 44" fill="none" stroke="#f8eeff" stroke-width="5" stroke-linecap="round"/>'
  ];
  var serial = 0;
  function pearlIcon(type, cls = "") {
    const [light, dark] = PALETTES[type], id = `pearl-gloss-${serial++}`;
    return `<svg class="pearl-icon ${cls}" viewBox="0 0 80 80" aria-hidden="true" focusable="false"><defs><radialGradient id="${id}" cx="30%" cy="22%" r="80%"><stop stop-color="${light}"/><stop offset="1" stop-color="${dark}"/></radialGradient></defs><circle cx="40" cy="42" r="34" fill="${dark}" opacity=".2"/><circle cx="40" cy="38" r="33" fill="url(#${id})" stroke="${dark}" stroke-width="2"/><ellipse cx="27" cy="19" rx="13" ry="7" fill="white" opacity=".6" transform="rotate(-24 27 19)"/>${MARKS[type]}<path d="M60 15V23 M56 19H64" stroke="white" stroke-width="2" stroke-linecap="round" opacity=".9"/></svg>`;
  }

  // js/minigames.js
  var N = 7;
  var ICONS = ["\u{1F9CB}", "\u{1F353}", "\u{1F96D}", "\u{1F375}", "\u{1F347}"];
  var SPECIAL = { stripeH: "\u26A1", stripeV: "\u26A1", bomb: "\u{1F366}", fish: "\u{1F41F}", rainbow: "\u{1F308}" };
  var uid = 1;
  var Q = null;
  var levelCfg = (L) => ({ types: L < 3 ? 4 : 5, moves: Math.max(16, 25 - Math.floor(L / 4)), collect: 10 + 2 * L, score: 1e3 + 200 * L });
  var rt = (q) => Math.floor(Math.random() * q.types);
  var mk = (q, t = rt(q)) => ({ id: uid++, t, sp: null });
  function newGrid(q) {
    var _a, _b, _c, _d;
    const g = Array.from({ length: N }, () => Array(N).fill(null));
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        let t, tries = 0;
        do {
          t = rt(q);
          tries++;
        } while (tries < 20 && (c >= 2 && ((_a = g[r][c - 1]) == null ? void 0 : _a.t) === t && ((_b = g[r][c - 2]) == null ? void 0 : _b.t) === t || r >= 2 && ((_c = g[r - 1][c]) == null ? void 0 : _c.t) === t && ((_d = g[r - 2][c]) == null ? void 0 : _d.t) === t));
        g[r][c] = mk(q, t);
      }
    }
    return g;
  }
  function findMatches(g, swapCells = []) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const mark = /* @__PURE__ */ new Set();
    const runs = [];
    const key = (r, c) => r * N + c;
    for (let r = 0; r < N; r++) {
      let c = 0;
      while (c < N) {
        const t = (_a = g[r][c]) == null ? void 0 : _a.t;
        let e = c + 1;
        while (t !== void 0 && e < N && ((_b = g[r][e]) == null ? void 0 : _b.t) === t) e++;
        if (t !== void 0 && e - c >= 3) {
          runs.push({ dir: "h", r, c, len: e - c, t });
          for (let k = c; k < e; k++) mark.add(key(r, k));
        }
        c = e;
      }
    }
    for (let c = 0; c < N; c++) {
      let r = 0;
      while (r < N) {
        const t = (_c = g[r][c]) == null ? void 0 : _c.t;
        let e = r + 1;
        while (t !== void 0 && e < N && ((_d = g[e][c]) == null ? void 0 : _d.t) === t) e++;
        if (t !== void 0 && e - r >= 3) {
          runs.push({ dir: "v", r, c, len: e - r, t });
          for (let k = r; k < e; k++) mark.add(key(k, c));
        }
        r = e;
      }
    }
    const specials = [];
    const hr = runs.filter((x) => x.dir === "h"), vr = runs.filter((x) => x.dir === "v");
    const used = /* @__PURE__ */ new Set();
    for (const a of hr) for (const b of vr) {
      if (a.t !== b.t) continue;
      if (b.c >= a.c && b.c < a.c + a.len && a.r >= b.r && a.r < b.r + b.len) {
        specials.push({ r: a.r, c: b.c, sp: "bomb", t: a.t });
        used.add(a);
        used.add(b);
      }
    }
    for (const x of runs) {
      if (used.has(x)) continue;
      const anchor = swapCells.find((s) => x.dir === "h" ? s.r === x.r && s.c >= x.c && s.c < x.c + x.len : s.c === x.c && s.r >= x.r && s.r < x.r + x.len);
      const pr = anchor || (x.dir === "h" ? { r: x.r, c: x.c + Math.floor(x.len / 2) } : { r: x.r + Math.floor(x.len / 2), c: x.c });
      if (x.len >= 5) specials.push({ r: pr.r, c: pr.c, sp: "rainbow", t: x.t });
      else if (x.len === 4) specials.push({ r: pr.r, c: pr.c, sp: x.dir === "h" ? "stripeV" : "stripeH", t: x.t });
    }
    for (const s of swapCells) {
      for (const [dr, dc] of [[0, 0], [0, -1], [-1, 0], [-1, -1]]) {
        const r0 = s.r + dr, c0 = s.c + dc;
        if (r0 < 0 || c0 < 0 || r0 + 1 >= N || c0 + 1 >= N) continue;
        const t = (_e = g[r0][c0]) == null ? void 0 : _e.t;
        if (t !== void 0 && ((_f = g[r0][c0 + 1]) == null ? void 0 : _f.t) === t && ((_g = g[r0 + 1][c0]) == null ? void 0 : _g.t) === t && ((_h = g[r0 + 1][c0 + 1]) == null ? void 0 : _h.t) === t && !specials.some((p) => p.sp === "fish")) {
          [[r0, c0], [r0, c0 + 1], [r0 + 1, c0], [r0 + 1, c0 + 1]].forEach(([r, c]) => mark.add(key(r, c)));
          specials.push({ r: s.r, c: s.c, sp: "fish", t });
        }
      }
    }
    return { mark, specials };
  }
  function expand(g, mark, q, hintType) {
    var _a, _b;
    const key = (r, c) => r * N + c;
    const queue = [...mark];
    const seen = new Set(queue);
    const add = (r, c) => {
      if (r < 0 || c < 0 || r >= N || c >= N) return;
      const k = key(r, c);
      if (!seen.has(k)) {
        seen.add(k);
        mark.add(k);
        queue.push(k);
      }
    };
    while (queue.length) {
      const k = queue.shift();
      const r = Math.floor(k / N), c = k % N, tile = g[r][c];
      if (!(tile == null ? void 0 : tile.sp)) continue;
      q.used[tile.sp] = (q.used[tile.sp] || 0) + 1;
      if (tile.sp === "stripeH") for (let i = 0; i < N; i++) add(r, i);
      else if (tile.sp === "stripeV") for (let i = 0; i < N; i++) add(i, c);
      else if (tile.sp === "bomb") for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) add(r + dr, c + dc);
      else if (tile.sp === "fish") {
        add(r, c);
        for (let i = 0; i < 3; i++) add(randInt(0, N - 1), randInt(0, N - 1));
      } else if (tile.sp === "rainbow") {
        const t = hintType != null ? hintType : (_a = g[randInt(0, N - 1)][randInt(0, N - 1)]) == null ? void 0 : _a.t;
        for (let rr = 0; rr < N; rr++) for (let cc = 0; cc < N; cc++) if (((_b = g[rr][cc]) == null ? void 0 : _b.t) === t) add(rr, cc);
      }
    }
  }
  function gravity(g, q) {
    for (let c = 0; c < N; c++) {
      let w = N - 1;
      for (let r = N - 1; r >= 0; r--) if (g[r][c]) {
        g[w][c] = g[r][c];
        if (w !== r) g[r][c] = null;
        w--;
      }
      for (let r = w; r >= 0; r--) g[r][c] = mk(q);
    }
  }
  function hasMove(g) {
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      for (const [dr, dc] of [[0, 1], [1, 0]]) {
        const r2 = r + dr, c2 = c + dc;
        if (r2 >= N || c2 >= N) continue;
        if (g[r][c].sp || g[r2][c2].sp) return true;
        [g[r][c], g[r2][c2]] = [g[r2][c2], g[r][c]];
        const ok = findMatches(g).mark.size > 0;
        [g[r][c], g[r2][c2]] = [g[r2][c2], g[r][c]];
        if (ok) return true;
      }
    }
    return false;
  }
  function tileHTML(t, r, c) {
    return `<div class="mt ${t.sp ? "sp " + t.sp : ""}" data-id="${t.id}" data-r="${r}" data-c="${c}" style="left:${c * 100 / N}%;top:${r * 100 / N}%"><span>${ICONS[t.t]}</span>${t.sp ? `<i>${SPECIAL[t.sp]}</i>` : ""}</div>`;
  }
  function paint(q, fresh = false) {
    const board = $("#crushBoard");
    if (!board) return;
    const present = new Map($$(".mt", board).map((e) => [e.dataset.id, e]));
    const keep = /* @__PURE__ */ new Set();
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const t = q.g[r][c];
      if (!t) continue;
      keep.add(String(t.id));
      let el = present.get(String(t.id));
      if (!el) {
        el = h(tileHTML(t, fresh ? r : -2, c));
        board.appendChild(el);
        void el.offsetWidth;
      }
      el.dataset.r = r;
      el.dataset.c = c;
      el.style.left = `${c * 100 / N}%`;
      el.style.top = `${r * 100 / N}%`;
      el.className = `mt ${t.sp ? "sp " + t.sp : ""} ${q.sel && q.sel.r === r && q.sel.c === c ? "sel" : ""}`;
      el.firstElementChild.textContent = ICONS[t.t];
      const badge = el.querySelector("i");
      if (t.sp && !badge) el.insertAdjacentHTML("beforeend", `<i>${SPECIAL[t.sp]}</i>`);
    }
    for (const [id, el] of present) if (!keep.has(id) && !el.classList.contains("pop")) el.remove();
  }
  var tileCenter = (r, c) => ({ x: (c + 0.5) * 100 / N, y: (r + 0.5) * 100 / N });
  function burst(board, r, c, icon2, big = false) {
    if (!board || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { x, y } = tileCenter(r, c);
    const n = big ? 14 : 7;
    const w = board.clientWidth || 300;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + rand(-0.3, 0.3), d = rand(0.45, big ? 1.5 : 1) * w / N * 1.5;
      const el = h(`<span class="mfx" style="left:${x}%;top:${y}%;font-size:${rand(big ? 14 : 11, big ? 22 : 17)}px">${i % 3 === 0 ? "\u2728" : i % 3 === 1 ? icon2 : "\u{1F4A5}"}</span>`);
      board.appendChild(el);
      el.animate([
        { transform: "translate(-50%,-50%) scale(.4) rotate(0)", opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) scale(1.2) rotate(${rand(-200, 200)}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * d * 1.2}px), calc(-50% + ${Math.sin(a) * d * 1.2 + 14}px)) scale(.2) rotate(${rand(-320, 320)}deg)`, opacity: 0 }
      ], { duration: rand(380, 560), easing: "cubic-bezier(.2,.7,.4,1)" }).onfinish = () => el.remove();
    }
    const ring = h(`<span class="mfx-ring" style="left:${x}%;top:${y}%"></span>`);
    board.appendChild(ring);
    setTimeout(() => ring.remove(), 420);
    if (big) {
      const halo = h(`<span class="mfx-ring mfx-halo" style="left:${x}%;top:${y}%"></span>`);
      board.appendChild(halo);
      setTimeout(() => halo.remove(), 620);
    }
  }
  function specialFx(board, sp, r, c) {
    if (!board) return;
    const { x, y } = tileCenter(r, c);
    if (sp === "stripeH" || sp === "stripeV") {
      const beam = h(`<span class="mbeam ${sp === "stripeH" ? "hz" : "vt"}" style="${sp === "stripeH" ? `top:${y}%` : `left:${x}%`}"></span>`);
      board.appendChild(beam);
      setTimeout(() => beam.remove(), 520);
    } else if (sp === "bomb") {
      const w = h(`<span class="mshock" style="left:${x}%;top:${y}%"></span>`);
      board.appendChild(w);
      setTimeout(() => w.remove(), 560);
    } else if (sp === "fish") {
      const f = h(`<span class="mfish" style="left:${x}%;top:${y}%">\u{1F41F}</span>`);
      board.appendChild(f);
      const tx = rand(-0.4, 0.4) * board.clientWidth, ty = rand(-0.4, 0.4) * board.clientWidth;
      f.animate([{ transform: "translate(-50%,-50%) scale(1)" }, { transform: `translate(calc(-50% + ${tx / 2}px), calc(-50% + ${ty / 2 - 40}px)) scale(1.5) rotate(180deg)` }, { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1) rotate(360deg)` }], { duration: 560, easing: "ease-in-out" }).onfinish = () => f.remove();
    } else if (sp === "rainbow") {
      const f = h('<span class="mflash"></span>');
      board.appendChild(f);
      setTimeout(() => f.remove(), 600);
    }
  }
  function comboBanner(board, n) {
    const words = ["", "", "COMBO x2!", "NGON QU\xC1! x3", "SI\xCAU C\u1EA4P! x4", "HO\xC0N H\u1EA2O! x5"];
    const t = h(`<div class="mcombo c${Math.min(n, 5)}">${words[Math.min(n, 5)] || "HUY\u1EC0N THO\u1EA0I! x" + n}</div>`);
    board.appendChild(t);
    setTimeout(() => t.remove(), 900);
    if (n >= 3) {
      board.classList.remove("shake");
      void board.offsetWidth;
      board.classList.add("shake");
    }
  }
  function updateHud(q) {
    if (!$("#cMoves")) return;
    $("#cMoves").textContent = q.moves;
    $("#cScore").textContent = q.score;
    $("#cCollect").textContent = `${Math.min(q.got, q.cfg.collect)}/${q.cfg.collect}`;
    $("#cScoreGoal").textContent = `${Math.min(q.score, q.cfg.score)}/${q.cfg.score}`;
    const stars = q.score >= q.cfg.score * 1.5 ? 3 : q.score >= q.cfg.score * 1.2 ? 2 : q.score >= q.cfg.score ? 1 : 0;
    $$("#cStars i").forEach((s, i) => s.classList.toggle("on", i < stars));
    $("#cBar").style.width = `${clamp(q.score / q.cfg.score * 100, 0, 100)}%`;
  }
  async function resolve(q, swapCells) {
    var _a;
    let cascade = 0, first = true;
    while (true) {
      const { mark, specials } = findMatches(q.g, first ? swapCells : []);
      if (!mark.size && !((_a = q.forceMark) == null ? void 0 : _a.size)) break;
      if (q.forceMark) {
        q.forceMark.forEach((k) => mark.add(k));
        q.forceMark = null;
      }
      cascade++;
      const spKeys = new Set(specials.map((s) => s.r * N + s.c));
      expand(q.g, mark, q, q.hintRainbow);
      q.hintRainbow = void 0;
      const cleared = [...mark].filter((k) => !spKeys.has(k) || q.g[Math.floor(k / N)][k % N].sp);
      const pts = cleared.length * 20 * cascade;
      q.score += pts;
      for (const k of cleared) {
        const r = Math.floor(k / N), c = k % N, t = q.g[r][c];
        if (t) {
          if (t.t === 0) q.got++;
        }
      }
      const board = $("#crushBoard");
      for (const k of cleared) {
        const r = Math.floor(k / N), c = k % N, t = q.g[r][c];
        const el = $(`.mt[data-id="${t.id}"]`);
        if (el) {
          el.classList.add("pop");
          setTimeout(() => el.remove(), 260);
        }
        if (t.sp) specialFx(board, t.sp, r, c);
        burst(board, r, c, ICONS[t.t], !!t.sp || cleared.length >= 6);
        q.g[r][c] = null;
      }
      if (cleared.length >= 5 && cascade === 1) fxSpark(board, 6);
      for (const s of specials) {
        if (!q.g[s.r][s.c]) q.g[s.r][s.c] = { id: uid++, t: s.t, sp: s.sp };
        else {
          q.g[s.r][s.c].sp = s.sp;
          q.g[s.r][s.c].t = s.t;
        }
        q.made[s.sp] = (q.made[s.sp] || 0) + 1;
      }
      if (cascade > 1) comboBanner(board, cascade);
      if (pts >= 60) fxText(`+${pts}`, board, cascade > 1 ? "g" : "");
      sfx(cascade > 1 ? "boom" : "match");
      updateHud(q);
      await wait(300);
      if (Q !== q) return;
      gravity(q.g, q);
      paint(q);
      await wait(260);
      if (Q !== q) return;
      first = false;
    }
    if (!hasMove(q.g)) {
      q.g = newGrid(q.cfg);
      paint(q, true);
      toast("X\xE1o b\xE0n m\u1EDBi \u{1F504}", "");
      await wait(200);
    }
  }
  async function swap(q, a, b) {
    if (q.busy || q.over) return;
    q.busy = true;
    const A = q.g[a.r][a.c], B = q.g[b.r][b.c];
    q.g[a.r][a.c] = B;
    q.g[b.r][b.c] = A;
    paint(q);
    await wait(200);
    const m = findMatches(q.g, [a, b]);
    const spActive = A.sp || B.sp;
    if (!m.mark.size && !spActive) {
      q.g[a.r][a.c] = A;
      q.g[b.r][b.c] = B;
      paint(q);
      sfx("error");
      await wait(200);
      q.busy = false;
      return;
    }
    q.moves--;
    if (spActive) {
      q.forceMark = /* @__PURE__ */ new Set();
      const ak = [a, b].map((p) => p.r * N + p.c);
      ak.forEach((k) => q.forceMark.add(k));
      if (A.sp === "rainbow" && !B.sp) q.hintRainbow = B.t;
      else if (B.sp === "rainbow" && !A.sp) q.hintRainbow = A.t;
    }
    await resolve(q, [a, b]);
    if (Q !== q) return;
    q.sel = null;
    updateHud(q);
    q.busy = false;
    await checkEnd(q);
  }
  async function checkEnd(q) {
    const win = q.got >= q.cfg.collect && q.score >= q.cfg.score;
    if (win) return finish(q, true);
    if (q.moves <= 0) return finish(q, false);
  }
  function finish(q, win) {
    q.over = true;
    if (Q !== q) return;
    const L = S.crush.level;
    let reward2 = "";
    if (win) {
      S.crush.level = L + 1;
      S.crush.best = Math.max(S.crush.best || 0, L);
      S.crush.perm = Math.min(0.5, S.crush.perm + 0.01);
      const money2 = 8e3 + L * 2e3;
      S.money += money2;
      reward2 = `+1% doanh thu v\u0129nh vi\u1EC5n \xB7 +${fmtK(money2)}`;
      if (L % 5 === 0) {
        S.collection.packs++;
        const ids = ["tcDen", "traSua", "lyM"];
        for (const id of ids) addStock(id, 3);
        reward2 += " \xB7 \u{1F381} +1 t\xFAi qu\xE0 & 3 nguy\xEAn li\u1EC7u";
      }
      sfx("level");
    } else sfx("sad");
    markDirty("hud", "panel");
    requestSave();
    const ov = $("#crushOver");
    ov.hidden = false;
    ov.innerHTML = `<div class="ov-card"><div class="ov-ico">${win ? "\u{1F3C6}" : "\u{1F63F}"}</div><h3>${win ? "Th\u1EAFng m\xE0n " + L + "!" : "H\u1EBFt l\u01B0\u1EE3t r\u1ED3i!"}</h3><p>${win ? esc(reward2) : "Th\u1EED l\u1EA1i nh\xE9, b\u1EA1n s\u1EBD l\xE0m \u0111\u01B0\u1EE3c th\xF4i!"}</p><button class="btn pri block" data-act="${win ? "next" : "retry"}">${win ? "M\xE0n ti\u1EBFp theo \u279C" : "Ch\u01A1i l\u1EA1i"}</button><button class="btn ghost block" data-act="x">\u0110\xF3ng</button></div>`;
  }
  function crushHTML() {
    const q = Q;
    return `<div class="crush"><div class="c-head"><div><h3>\u{1F36C} MILK TEA CRUSH</h3><small>M\xE0n ${S.crush.level} \xB7 ${S.crush.level < 3 ? "Nh\u1EADp M\xF4n Tr\xE0 S\u1EEFa" : "Th\u1EED Th\xE1ch Tr\xE0 S\u1EEFa"}</small></div><button class="btn soft sm" data-act="retry">\u{1F504} Ch\u01A1i l\u1EA1i</button></div>
    <div class="c-stats"><div><small>\u0110I\u1EC2M S\u1ED0</small><b id="cScore">0</b></div><div class="c-moves"><b id="cMoves">${q.moves}</b><small>L\u01AF\u1EE2T</small></div><div><small>M\u1EE4C TI\xCAU: ${q.cfg.score}</small><span class="stars" id="cStars"><i>\u2605</i><i>\u2605</i><i>\u2605</i></span></div></div>
    <div class="c-goals"><span>\u{1F3AF} M\u1EE4C TI\xCAU:</span><span class="g">${ICONS[0]} <b id="cCollect">0/${q.cfg.collect}</b></span><span class="g">\u2B50 <b id="cScoreGoal">0/${q.cfg.score}</b></span></div>
    <div class="bar"><i id="cBar" style="width:0%"></i></div>
    <p class="c-tip">L\xE0m quen x\u1EBFp k\u1EB9o: thu th\u1EADp ${q.cfg.collect} ${ICONS[0]} Tr\xE2n Ch\xE2u!</p>
    <div class="crush-board" id="crushBoard"></div><div class="crush-over" id="crushOver" hidden></div>
    <p class="c-tip">\u{1F4A1} Gh\xE9p 4: \u26A1 Ly S\u1ECDc qu\xE9t h\xE0ng/c\u1ED9t \xB7 Gh\xE9p 2x2: \u{1F41F} C\xE1 Bay \xB7 Gh\xE9p L/T: \u{1F366} Kem Cheese n\u1ED5 3x3 \xB7 Gh\xE9p 5: \u{1F308} C\u1EA7u V\u1ED3ng x\xF3a 1 lo\u1EA1i. Ho\xE0n th\xE0nh \u0111\u1EE7 M\u1EE5c ti\xEAu tr\u01B0\u1EDBc khi h\u1EBFt l\u01B0\u1EE3t!</p></div>`;
  }
  function openCrush() {
    const cfg = levelCfg(S.crush.level);
    Q = { cfg, g: null, moves: cfg.moves, score: 0, got: 0, busy: false, over: false, sel: null, types: cfg.types, used: {}, made: {} };
    Q.g = newGrid(cfg);
    const m = openModal({ id: "crush", cls: "crush-m", html: crushHTML(), onClose: () => {
      Q = null;
    } });
    paint(Q, true);
    updateHud(Q);
    const restart = () => {
      m.close();
      openCrush();
    };
    bindActions(m.body, { retry: restart, next: restart, x: () => m.close() });
    const board = $("#crushBoard", m.body);
    let down = null;
    const pointerDown = (e) => {
      const el = e.target.closest(".mt");
      if (!el || !Q || Q.busy || Q.over) return;
      down = { r: +el.dataset.r, c: +el.dataset.c, x: e.clientX, y: e.clientY };
    };
    const pointerUp = (e) => {
      if (!down || !Q) return;
      const d = down;
      down = null;
      const dx = e.clientX - d.x, dy = e.clientY - d.y;
      if (Math.max(Math.abs(dx), Math.abs(dy)) > 18) {
        const b = Math.abs(dx) > Math.abs(dy) ? { r: d.r, c: d.c + Math.sign(dx) } : { r: d.r + Math.sign(dy), c: d.c };
        if (b.r >= 0 && b.c >= 0 && b.r < N && b.c < N) swap(Q, { r: d.r, c: d.c }, b);
        return;
      }
      const cur2 = { r: d.r, c: d.c };
      if (Q.sel && Math.abs(Q.sel.r - cur2.r) + Math.abs(Q.sel.c - cur2.c) === 1) {
        const a = Q.sel;
        Q.sel = null;
        swap(Q, a, cur2);
      } else {
        Q.sel = cur2;
        sfx("click");
        paint(Q);
      }
    };
    board.style.touchAction = "none";
    if (window.PointerEvent) {
      board.addEventListener("pointerdown", (e) => {
        var _a;
        pointerDown(e);
        if (down) (_a = board.setPointerCapture) == null ? void 0 : _a.call(board, e.pointerId);
      });
      board.addEventListener("pointerup", pointerUp);
      board.addEventListener("pointercancel", () => {
        down = null;
      });
    } else {
      board.addEventListener("touchstart", (e) => {
        if (e.touches.length !== 1) {
          down = null;
          return;
        }
        e.preventDefault();
        pointerDown({ target: e.target, clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
      }, { passive: false });
      board.addEventListener("touchend", (e) => {
        e.preventDefault();
        const t = e.changedTouches[0];
        if (t) pointerUp({ clientX: t.clientX, clientY: t.clientY });
      }, { passive: false });
      board.addEventListener("touchcancel", () => {
        down = null;
      });
      board.addEventListener("mousedown", pointerDown);
      board.addEventListener("mouseup", pointerUp);
    }
  }
  function crushDebug() {
    return { get Q() {
      return Q;
    }, swap, N, open: openCrush };
  }
  var PN = 6;
  var PDUR = 30;
  var PGOAL = 120;
  var PCOMBO_MS = 1200;
  var PIDS = ["tcDen", "tcVang", "tcNo", "cuNang", "fUbe"];
  var PCOL = PIDS.length;
  var P2 = null;
  function pearlBurst(el, color, big) {
    const layer2 = $("#pFx"), stage = $("#pStage");
    if (!layer2 || !stage) return;
    const origin = stage.getBoundingClientRect();
    const r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const ring = h(`<span class="pfx-ring" style="left:${x - origin.left}px;top:${y - origin.top}px;border-color:${color}"></span>`);
    layer2.appendChild(ring);
    ring.animate([{ transform: "translate(-50%,-50%) scale(.3)", opacity: 0.9 }, { transform: "translate(-50%,-50%) scale(1.9)", opacity: 0 }], { duration: 420, easing: "ease-out" }).onfinish = () => ring.remove();
    if (big) {
      const halo = h(`<span class="pfx-ring pfx-mega" style="left:${x - origin.left}px;top:${y - origin.top}px;border-color:${color}"></span>`);
      layer2.appendChild(halo);
      halo.animate([{ transform: "translate(-50%,-50%) scale(.15)", opacity: 0.95 }, { transform: "translate(-50%,-50%) scale(2.8)", opacity: 0 }], { duration: 680, easing: "cubic-bezier(.16,.72,.32,1)" }).onfinish = () => halo.remove();
    }
    const n = big ? 10 : 6;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + rand(-0.3, 0.3), d = rand(24, big ? 62 : 48), s = rand(5, 9);
      const f = h(`<span class="pfx-dot" style="left:${x - origin.left}px;top:${y - origin.top}px;width:${s}px;height:${s}px;background:${color}">${i % 3 === 0 ? "\u2726" : ""}</span>`);
      layer2.appendChild(f);
      f.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d + 14}px)) scale(.3)`, opacity: 0 }], { duration: rand(380, 560), easing: "cubic-bezier(.2,.7,.4,1)" }).onfinish = () => f.remove();
    }
  }
  var pRand = () => randInt(0, PCOL - 1);
  function pNew() {
    return Array.from({ length: PN }, () => Array.from({ length: PN }, pRand));
  }
  function pGroup(b, r, c) {
    const col = b[r][c];
    if (col < 0) return [];
    const seen = /* @__PURE__ */ new Set(), st = [[r, c]], out = [];
    while (st.length) {
      const [y, x] = st.pop(), k = y * PN + x;
      if (seen.has(k) || y < 0 || x < 0 || y >= PN || x >= PN || b[y][x] !== col) continue;
      seen.add(k);
      out.push([y, x]);
      st.push([y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]);
    }
    return out;
  }
  function pCollapse(b) {
    const fall = Array.from({ length: PN }, () => Array(PN).fill(0));
    for (let c = 0; c < PN; c++) {
      const col = [];
      for (let r = PN - 1; r >= 0; r--) if (b[r][c] >= 0) col.push({ v: b[r][c], r });
      const nNew = PN - col.length;
      for (let r = PN - 1; r >= 0; r--) {
        const i = PN - 1 - r;
        if (i < col.length) {
          b[r][c] = col[i].v;
          fall[r][c] = r - col[i].r;
        } else {
          b[r][c] = pRand();
          fall[r][c] = r + (nNew - (i - col.length));
        }
      }
    }
    return fall;
  }
  var pHas = (b) => b.some((row2, r) => row2.some((_, c) => pGroup(b, r, c).length >= 2));
  function pRender(fall) {
    const el = $("#pBoard");
    if (!el || !P2) return;
    el.innerHTML = P2.b.map((row2, r) => row2.map((v, c) => `<button class="pc pearl-cell p${v}" data-act="pop" data-r="${r}" data-c="${c}" aria-label="${esc(ITEMS[PIDS[v]].name)}"><span class="pb pearl-character" style="--pc:${ITEMS[PIDS[v]].color};--float-delay:${(r + c) * 0.13}s">${pearlIcon(v)}</span></button>`).join("")).join("");
    const balls = $$("#pBoard .pb");
    const step = el.firstElementChild ? el.firstElementChild.offsetHeight + 5 : 50;
    let maxFall = 0;
    balls.forEach((b, i) => {
      const d = fall ? fall[Math.floor(i / PN)][i % PN] : 0;
      if (fall && d > 0) {
        maxFall = Math.max(maxFall, d);
        b.animate([{ transform: `translateY(${-d * step}px)` }, { transform: "translateY(0)" }], { duration: 170 + d * 60, easing: "cubic-bezier(.35,.9,.45,1.25)" });
      } else if (!fall) {
        b.animate([{ transform: "scale(0)" }, { transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 300, delay: i * 6, easing: "ease-out", fill: "backwards" });
      }
    });
    const game = P2;
    if (maxFall) {
      sfx("swoosh");
      setTimeout(() => P2 === game && !game.over && sfx("bounce"), 170 + maxFall * 60);
    }
    pStats();
  }
  function pStats() {
    var _a;
    if (!P2 || !$("#pScore")) return;
    $("#pScore").textContent = P2.score;
    $("#pTime").textContent = Math.ceil(P2.t) + "s";
    $("#pBar").style.width = `${P2.t / PDUR * 100}%`;
    $("#pGoalFill").style.width = `${Math.min(100, P2.score / PGOAL * 100)}%`;
    $("#pGoalText").textContent = `${P2.score}/${PGOAL}`;
    $("#pBest").textContent = Math.max(S.pearl.best, P2.score);
    $("#pComboCount").textContent = `\xD7${Math.max(1, Math.min(P2.combo, 6))}`;
    $("#pLastGain").textContent = P2.lastGain ? `+${P2.lastGain}` : "\u2014";
    $("#pEquation").textContent = P2.lastGroup ? `${P2.lastGroup}\xB2 \xD7 ${P2.lastMul} = +${P2.lastGain}` : "\u0110i\u1EC3m = s\u1ED1 vi\xEAn\xB2 \xD7 combo";
    $("#pPopped").textContent = sum(P2.cnt);
    $("#pComboFill").style.width = `${P2.combo ? Math.max(0, 1 - (performance.now() - P2.lastPop) / PCOMBO_MS) * 100 : 0}%`;
    (_a = $(".pg")) == null ? void 0 : _a.classList.toggle("time-warning", P2.t <= 8);
  }
  function pScoreFx(cell, gain, group, mul) {
    const stage = $("#pStage"), layer2 = $("#pFx");
    if (!stage || !layer2) return;
    const origin = stage.getBoundingClientRect(), r = cell.getBoundingClientRect();
    const x = r.left + r.width / 2 - origin.left, y = r.top + r.height / 2 - origin.top;
    const label = h(`<span class="pearl-gain" style="left:${x}px;top:${y}px">+${gain}<small>${group} vi\xEAn \xB7 \xD7${mul}</small></span>`);
    layer2.appendChild(label);
    label.animate([{ transform: "translate(-50%,-30%) scale(.5)", opacity: 0 }, { transform: "translate(-50%,-75%) scale(1.15)", opacity: 1, offset: 0.25 }, { transform: "translate(-50%,-140%) scale(1)", opacity: 0 }], { duration: 850, easing: "ease-out" }).onfinish = () => label.remove();
    const target = $("#pScore").getBoundingClientRect();
    const spark = h(`<span class="pearl-score-flight" style="left:${x}px;top:${y}px">\u2726</span>`);
    layer2.appendChild(spark);
    spark.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: `translate(${target.left - origin.left - x}px,${target.top - origin.top - y}px) scale(.4)`, opacity: 0 }], { duration: 650, easing: "ease-in" }).onfinish = () => spark.remove();
    $("#pScore").animate([{ transform: "scale(1)" }, { transform: "scale(1.2)" }, { transform: "scale(1)" }], { duration: 320 });
  }
  function pComboFx(mul) {
    const e = $("#pCombo");
    if (!e) return;
    e.textContent = mul > 1 ? `COMBO x${mul}` : "";
    if (mul < 2) return;
    const s = 1.3 + Math.min(mul, 6) * 0.1;
    e.animate([{ transform: `scale(${s + 0.5}) rotate(-6deg)` }, { transform: `scale(${s}) rotate(5deg)` }, { transform: "scale(1) rotate(-3deg)" }, { transform: "scale(1) rotate(0)" }], { duration: 380, easing: "ease-out" });
    const b = $("#pBoard");
    if (mul >= 3 && b) b.animate([{ transform: "translateX(0)" }, { transform: "translateX(-3px)" }, { transform: "translateX(3px)" }, { transform: "translateX(-2px)" }, { transform: "translateX(0)" }], { duration: 220 });
  }
  function pEnd() {
    if (!P2 || P2.over) return;
    P2.over = true;
    clearInterval(P2.timer);
    const win = P2.score >= PGOAL;
    const money2 = P2.score * 60;
    const rewards = [];
    PIDS.forEach((id, i) => {
      const q = Math.floor(P2.cnt[i] / 4);
      if (q > 0) rewards.push([id, q]);
    });
    if (!rewards.length && P2.score >= 40) rewards.push(["tcDen", Math.floor(P2.score / 40)]);
    S.money += money2;
    for (const [id, q] of rewards) addStock(id, q);
    S.pearl.best = Math.max(S.pearl.best, P2.score);
    let extra = "";
    if (win && chance(0.3)) {
      S.collection.packs++;
      extra = "<p>\u{1F381} +1 t\xFAi qu\xE0 s\u01B0u t\u1EA7m!</p>";
    }
    markDirty("hud", "panel");
    requestSave();
    sfx(win ? "win" : "lose");
    const rw = rewards.length ? rewards.map(([id, q]) => `<span class="prw">${pearlIcon(PIDS.indexOf(id), "reward-pearl")}+${q} ${esc(ITEMS[id].name)}</span>`).join("") : '<span class="muted">Ch\u01B0a \u0111\u1EE7 vi\xEAn \u0111\u1EC3 nh\u1EADn tr\xE2n ch\xE2u</span>';
    $("#pBody").innerHTML = `<div class="ov-card inline"><div class="ov-ico">${win ? "\u{1F3C6}" : "\u{1F642}"}</div><h3>${win ? "TH\xC0NH C\xD4NG!" : "C\u1ED1 l\xEAn l\u1EA7n sau!"}</h3><p>\u0110i\u1EC3m: <b>${P2.score}</b> \xB7 Combo cao nh\u1EA5t: <b>x${P2.maxMul}</b> (k\u1EF7 l\u1EE5c ${S.pearl.best})</p><p>Ti\u1EC1n th\u01B0\u1EDFng: <b class="money">+${fmtK(money2)}</b></p><div class="prws">${rw}</div>${extra}<button class="btn pri block" data-act="x">Nh\u1EADn th\u01B0\u1EDFng \u{1F381}</button></div>`;
  }
  function openPearl() {
    if (S.pearl.playsDay >= 3) return toast("H\xF4m nay b\u1EA1n \u0111\xE3 ch\u01A1i \u0111\u1EE7 3 l\u01B0\u1EE3t Tr\xE2n Ch\xE2u N\u1ED5", "err");
    const m = openModal({ id: "pearl", cls: "pearl-modal", onClose: () => {
      if (P2 == null ? void 0 : P2.timer) clearInterval(P2.timer);
      P2 = null;
    }, html: `<div id="pBody"><h3 class="m-title">\u2728 Tr\xE2n Ch\xE2u N\u1ED5</h3><div class="pearl-preview">${PIDS.map((_, i) => pearlIcon(i)).join("")}</div><p class="m-text center">Ch\u1EA1m nh\xF3m \u2265 2 tr\xE2n ch\xE2u c\xF9ng m\xE0u k\u1EC1 nhau \u0111\u1EC3 l\xE0m n\u1ED5. Nh\xF3m c\xE0ng l\u1EDBn \u0111i\u1EC3m c\xE0ng cao, n\u1ED5 li\xEAn ti\u1EBFp trong ${PCOMBO_MS / 1e3}s = nh\xE2n combo! M\u1EE5c ti\xEAu <b>${PGOAL}</b> \u0111i\u1EC3m trong ${PDUR} gi\xE2y. Cu\u1ED1i v\xE1n nh\u1EADn th\xEAm tr\xE2n ch\xE2u nguy\xEAn li\u1EC7u cho kho.</p><p class="m-text center muted">L\u01B0\u1EE3t h\xF4m nay: ${S.pearl.playsDay}/3 \xB7 K\u1EF7 l\u1EE5c: ${S.pearl.best}</p><button class="btn pri block" data-act="start">\u25B6 B\u1EAFt \u0111\u1EA7u</button></div>` });
    bindActions(m.body, {
      x: () => m.close(),
      start: () => {
        if (P2 && !P2.over) return;
        S.pearl.playsDay++;
        requestSave();
        P2 = { b: pNew(), score: 0, combo: 0, maxMul: 1, lastPop: 0, lastGain: 0, lastGroup: 0, lastMul: 1, busy: false, cnt: Array(PCOL).fill(0), t: PDUR, over: false, timer: null };
        if (!pHas(P2.b)) P2.b = pNew();
        $("#pBody").innerHTML = `<div class="pg"><div class="pearl-heading"><b>\u2728 TR\xC2N CH\xC2U N\u1ED4</b><span>\u23F1 <b id="pTime">30s</b></span></div><div class="pearl-scoreboard"><div><small>\u0110I\u1EC2M T\xCDCH L\u0168Y</small><b id="pScore">0</b></div><div><small>K\u1EF6 L\u1EE4C</small><b id="pBest">${S.pearl.best}</b></div><div><small>COMBO</small><b id="pComboCount">\xD71</b></div><div><small>V\u1EEAA NH\u1EACN</small><b id="pLastGain">\u2014</b></div></div><div class="pearl-progress"><span>M\u1EE5c ti\xEAu <b id="pGoalText">0/${PGOAL}</b></span><div class="bar goal-bar"><i id="pGoalFill"></i></div><div class="bar time-bar"><i id="pBar"></i></div></div><div class="pearl-combo-row"><span id="pCombo" class="pcombo">S\u1EB5n s\xE0ng!</span><div class="bar combo-bar"><i id="pComboFill"></i></div></div><div class="pearl-stage" id="pStage"><div class="pboard" id="pBoard"></div><div class="pearl-fx" id="pFx" aria-hidden="true"></div></div><div class="pearl-calculation"><b id="pEquation">\u0110i\u1EC3m = s\u1ED1 vi\xEAn\xB2 \xD7 combo</b><span>\u0110\xE3 n\u1ED5 <b id="pPopped">0</b> vi\xEAn</span></div></div>`;
        pRender();
        sfx("fly");
        let last2 = performance.now();
        P2.timer = setInterval(() => {
          const now = performance.now();
          P2.t -= (now - last2) / 1e3;
          last2 = now;
          if (P2.t <= 0) {
            P2.t = 0;
            pEnd();
            return;
          }
          if (P2.combo && now - P2.lastPop > PCOMBO_MS) {
            P2.combo = 0;
            const e = $("#pCombo");
            if (e) e.textContent = "N\u1ED5 li\xEAn ti\u1EBFp \u0111\u1EC3 combo!";
          }
          pStats();
        }, 120);
      },
      pop: (t) => {
        if (!P2 || P2.over || P2.busy) return;
        const r = +t.dataset.r, c = +t.dataset.c, g = pGroup(P2.b, r, c);
        if (g.length < 2) {
          P2.combo = 0;
          pComboFx(0);
          sfx("pop");
          t.animate([{ transform: "translateX(-3px)" }, { transform: "translateX(3px)" }, { transform: "translateX(0)" }], { duration: 160 });
          return;
        }
        const now = performance.now();
        P2.combo = now - P2.lastPop <= PCOMBO_MS && P2.combo ? P2.combo + 1 : 1;
        P2.lastPop = now;
        const mul = Math.min(P2.combo, 6);
        P2.maxMul = Math.max(P2.maxMul, mul);
        const gain = g.length * g.length * mul, col = P2.b[r][c], color = ITEMS[PIDS[col]].color, big = g.length >= 5;
        P2.score += gain;
        P2.cnt[col] += g.length;
        P2.lastGain = gain;
        P2.lastGroup = g.length;
        P2.lastMul = mul;
        P2.busy = true;
        const game = P2;
        for (const [y, x] of g) {
          const cell = $(`.pc[data-r="${y}"][data-c="${x}"]`);
          if (cell) {
            pearlBurst(cell, color, big);
            cell.classList.add("pearl-popping");
          }
          P2.b[y][x] = -1;
        }
        pScoreFx(t, gain, g.length, mul);
        pStats();
        sfx(g.length >= 6 ? "pearlBoom" : g.length >= 4 ? "pearlPop2" : "pearlPop");
        if (mul >= 2) setTimeout(() => {
          if (P2 === game && !game.over) sfx("combo" + mul);
        }, 90);
        pComboFx(mul);
        setTimeout(() => {
          if (P2 !== game || game.over) return;
          const fall = pCollapse(game.b);
          if (!pHas(game.b)) {
            game.b = pNew();
            pRender();
          } else pRender(fall);
          const settle2 = 170 + Math.max(...fall.flat()) * 60;
          setTimeout(() => {
            if (P2 === game && !game.over) game.busy = false;
          }, settle2);
        }, 160);
      }
    });
  }
  function pearlDebug() {
    return { get state() {
      return P2;
    }, open: openPearl, group: pGroup, render: pRender, end: pEnd };
  }
  var crush = {
    html() {
      const L = S.crush.level;
      return `<div class="mgcard crushc"><h4>\u{1F36C} MILK TEA CRUSH</h4><p>Gh\xE9p 3 icon gi\u1ED1ng nhau s\u1EBD n\u1ED5! M\u1ED7i m\xE0n v\u01B0\u1EE3t qua t\u0103ng <b>+1% doanh thu v\u0129nh vi\u1EC5n</b> cho qu\xE1n (kh\xF4ng b\u1ECB reset khi thua hay qua ng\xE0y m\u1EDBi).</p>
      <div class="mg-info"><div><small>M\xC0N HI\u1EC6N T\u1EA0I</small><b>M\xE0n ${L}</b></div><div><small>TH\u01AF\u1EDENG KHI TH\u1EAENG</small><b>+1% DT v\u0129nh vi\u1EC5n \u26A1</b><small>(C\u1EE9 5 m\xE0n: +1 T\xFAi Qu\xE0 \u{1F381})</small></div></div>
      <div class="mg-info"><div><small>Buff hi\u1EC7n c\xF3</small><b>+${(S.crush.perm * 100).toFixed(0)}% doanh thu</b></div><div><small>M\xE0n cao nh\u1EA5t</small><b>${S.crush.best || 0}</b></div></div>
      <div class="rules"><b>\u{1F4D6} Lu\u1EADt ch\u01A1i & Th\u1EED th\xE1ch t\u0103ng d\u1EA7n:</b><p>\u2022 M\xE0n c\xE0ng cao \u0111\u1ED9 kh\xF3 c\xE0ng t\u0103ng: m\u1EE5c ti\xEAu \u0111i\u1EC3m cao h\u01A1n, l\u01B0\u1EE3t \u0111i \xEDt h\u01A1n, nhi\u1EC1u lo\u1EA1i topping tr\xE0 s\u1EEFa v\xE0 th\u1EDDi gian \u0111\u1EBFm ng\u01B0\u1EE3c suy ngh\u0129 m\u1ED7i l\u01B0\u1EE3t nhanh d\u1EA7n.</p><p>\u2022 <b>Combo k\u1EB9o \u0111\u1EB7c bi\u1EC7t:</b></p><p>- Gh\xE9p 4: \u26A1 Ly S\u1ECDc qu\xE9t s\u1EA1ch 1 h\xE0ng/c\u1ED9t.</p><p>- Gh\xE9p 2x2: \u{1F41F} Con C\xE1 Bay t\u1EF1 b\u01A1i \u0111\u1EBFn n\u1ED5 \xF4 ng\u1EABu nhi\xEAn.</p><p>- Gh\xE9p L / T: \u{1F366} Kem Cheese n\u1ED5 lan 3x3.</p><p>- Gh\xE9p 5: \u{1F308} C\u1EA7u V\u1ED3ng qu\xE9t s\u1EA1ch to\xE0n b\u1ED9 1 lo\u1EA1i k\u1EB9o.</p></div>
      <button class="btn grad block" data-act="crush">\u{1F3AE} V\xC0O CH\u01A0I MILK TEA CRUSH NGAY</button></div>
      <div class="mgcard"><h4>\u26AB TR\xC2N CH\xC2U N\u1ED4</h4><p>Ch\u1EA1m nh\xF3m tr\xE2n ch\xE2u c\xF9ng m\xE0u k\u1EC1 nhau \u0111\u1EC3 l\xE0m n\u1ED5 trong 30 gi\xE2y. Nh\u1EADn ti\u1EC1n & nhi\u1EC1u lo\u1EA1i tr\xE2n ch\xE2u nguy\xEAn li\u1EC7u. H\xF4m nay c\xF2n <b>${3 - S.pearl.playsDay}</b> l\u01B0\u1EE3t.</p><button class="btn pri block" data-act="pearl">\u25B6 Ch\u01A1i Tr\xE2n Ch\xE2u N\u1ED5</button></div>`;
    },
    acts: { crush: () => openCrush(), pearl: () => openPearl() }
  };

  // js/avatar.js
  var sid = 0;
  function stampSVG(st, size = 150, name = S.shopName) {
    const id = "sp" + sid++;
    const icon2 = st.img ? `<image href="${st.img}" x="30" y="26" width="40" height="40" clip-path="circle(20px at 20px 20px)" preserveAspectRatio="xMidYMid slice"/>` : `<text x="50" y="${st.textStyle === "curveBottom" ? 56 : 58}" text-anchor="middle" font-size="30">${st.icon}</text>`;
    const frame2 = st.frame === "round" ? `<circle cx="50" cy="50" r="47" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/>` : st.frame === "rounded" ? `<rect x="4" y="4" width="92" height="92" rx="22" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/>` : `<circle cx="50" cy="46" r="42" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/><path d="M8 72 L50 84 L92 72 L92 90 L50 98 L8 90 Z" fill="#f06f8f"/>`;
    const dark = ["#8b5a3c", "#2f2a3a"].includes(st.bg);
    const fg = dark ? "#fff" : "#7a3b4d";
    const nm = esc(name).slice(0, 22);
    const fs = clamp(150 / Math.max(10, nm.length * 1.6), 6, 10);
    let text = "";
    if (st.textStyle === "curveTop") text = `<path id="${id}" d="M16,50 A34,34 0 0 1 84,50" fill="none"/><text font-size="${fs}" font-weight="800" fill="${fg}" letter-spacing="1"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${nm}</textPath></text>`;
    else if (st.textStyle === "curveBottom") text = `<path id="${id}" d="M14,56 A36,36 0 0 0 86,56" fill="none"/><text font-size="${fs}" font-weight="800" fill="${fg}" letter-spacing="1"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${nm}</textPath></text>`;
    else text = `<text x="50" y="${st.frame === "ribbon" ? 88 : 78}" text-anchor="middle" font-size="${fs}" font-weight="800" fill="${st.frame === "ribbon" ? "#fff" : fg}">${nm}</text>`;
    const slogan = st.slogan && st.slogan !== "B\u1ECF tr\u1ED1ng" && st.textStyle !== "curveBottom" && st.frame !== "ribbon" ? `<text x="50" y="88" text-anchor="middle" font-size="5" fill="${fg}" opacity=".8">${esc(st.slogan)}</text>` : "";
    const iconEl = icon2;
    return `<svg class="stamp-svg" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-label="Tem th\u01B0\u01A1ng hi\u1EC7u">${frame2}${iconEl}${text}${slogan}</svg>`;
  }
  function drawSquare(img2, size) {
    const cv = document.createElement("canvas");
    cv.width = cv.height = size;
    const ctx2 = cv.getContext("2d");
    const w = img2.naturalWidth || img2.width, hh = img2.naturalHeight || img2.height;
    const s = Math.min(w, hh);
    ctx2.fillStyle = "#fff";
    ctx2.fillRect(0, 0, size, size);
    ctx2.drawImage(img2, (w - s) / 2, (hh - s) / 2, s, s, 0, 0, size, size);
    return cv.toDataURL("image/jpeg", 0.82);
  }
  function loadImage(src) {
    return new Promise((resolve2, reject) => {
      const img2 = new Image();
      img2.onload = () => resolve2(img2);
      img2.onerror = () => reject(new Error("decode"));
      img2.src = src;
    });
  }
  async function fileToDataURL(file, size = 160) {
    try {
      const url = URL.createObjectURL(file);
      try {
        return drawSquare(await loadImage(url), size);
      } finally {
        URL.revokeObjectURL(url);
      }
    } catch (e) {
      const data = await new Promise((resolve2, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve2(fr.result);
        fr.onerror = () => reject(new Error("read"));
        fr.readAsDataURL(file);
      });
      return drawSquare(await loadImage(data), size);
    }
  }
  var fileBtn = (label, key, cls) => `<label class="btn ${cls} file-btn">${label}<input type="file" accept="image/*" data-pick="${key}" aria-label="${label}"></label>`;
  function bindFiles(root2, onPick) {
    root2.querySelectorAll("input[data-pick]").forEach((inp) => {
      inp.addEventListener("change", async () => {
        const f = inp.files && inp.files[0];
        inp.value = "";
        if (!f) return;
        try {
          onPick(inp.dataset.pick, await fileToDataURL(f));
        } catch (e) {
          toast("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh, h\xE3y th\u1EED \u1EA3nh kh\xE1c (JPG/PNG)", "err");
        }
      });
    });
  }
  function openLogoModal() {
    const m = openModal({ id: "logo", cls: "small", html: logoBody() });
    const refresh = () => {
      m.body.innerHTML = logoBody();
      bindFiles(m.body, onPick);
    };
    const onPick = (key, url) => {
      S.logo.img = url;
      S.stamp.img = url;
      markDirty("view", "hud");
      requestSave();
      refresh();
      toast("\u0110\xE3 \u0111\u1ED5i logo qu\xE1n!", "ok");
      sfx("success");
    };
    bindFiles(m.body, onPick);
    bindActions(m.body, {
      design: () => {
        m.close();
        openStampDesigner();
      },
      reset: () => {
        S.logo.img = null;
        S.stamp.img = null;
        markDirty("view");
        requestSave();
        refresh();
      },
      x: () => m.close()
    });
  }
  var logoBody = () => `<h3 class="m-title">\u{1F3A8} Logo Qu\xE1n & Nh\u1EADn Di\u1EC7n Th\u01B0\u01A1ng Hi\u1EC7u</h3><p class="m-text center">Logo n\xE0y hi\u1EC3n th\u1ECB tr\u01B0\u1EDBc t\xEAn ti\u1EC7m, tr\xEAn trang M\u1EA1ng X\xE3 H\u1ED9i v\xE0 in tr\xEAn tem ly tr\xE0 c\u1EE7a b\u1EA1n!</p>
  <div class="logo-prev">${logoHTML(70)}<div><b>${esc(S.shopName)}</b><small>Bi\u1EC3n hi\u1EC7u \xB7 M\u1EA1ng X\xE3 H\u1ED9i \xB7 Tem in ly</small></div></div>
  ${fileBtn("\u{1F4F7} T\u1EA3i \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n l\xE0m Logo", "logo", "pri block")}
  <button class="btn soft block" data-act="design">\u{1F3A8} Thi\u1EBFt k\u1EBF tem & Ch\u1ECDn m\u1EABu logo ly</button>
  ${S.logo.img ? '<button class="btn ghost block" data-act="reset">\u21A9\uFE0F D\xF9ng l\u1EA1i bi\u1EC3u t\u01B0\u1EE3ng m\u1EB7c \u0111\u1ECBnh</button>' : ""}
  <button class="btn ghost block" data-act="x">\u0110\xF3ng</button>`;
  function openStampDesigner() {
    const d = { ...S.stamp };
    const body = () => `<h3 class="m-title">\u{1F3A8} Thi\u1EBFt k\u1EBF tem th\u01B0\u01A1ng hi\u1EC7u</h3><p class="m-text center">Tem s\u1EBD in l\xEAn m\u1ECDi ly b\u1EA1n pha. T\xEAn qu\xE1n t\u1EF1 l\u1EA5y theo t\xEAn \u0111\xE3 \u0111\u1EB7t.</p>
    <div class="stamp-prev">${stampSVG(d, 150)}</div>
    <h5 class="grp c">Ki\u1EC3u khung</h5><div class="chips">${[["round", "Tr\xF2n"], ["rounded", "Bo g\xF3c"], ["ribbon", "Ruy b\u0103ng"]].map(([k, l]) => `<button class="chip-s ${d.frame === k ? "on" : ""}" data-act="frame" data-v="${k}">${l}</button>`).join("")}</div>
    <h5 class="grp c">Ki\u1EC3u ch\u1EEF t\xEAn qu\xE1n</h5><div class="chips">${[["straight", "Th\u1EB3ng h\xE0ng"], ["curveTop", "Cong ph\xEDa tr\xEAn"], ["curveBottom", "Cong ph\xEDa d\u01B0\u1EDBi"]].map(([k, l]) => `<button class="chip-s ${d.textStyle === k ? "on" : ""}" data-act="ts" data-v="${k}">${l}</button>`).join("")}</div>
    <h5 class="grp c">M\xE0u n\u1EC1n tem</h5><div class="chips colors">${STAMP_COLORS.map((c) => `<button class="swatch ${d.bg === c ? "on" : ""}" style="background:${c}" data-act="bg" data-v="${c}" aria-label="M\xE0u ${c}"></button>`).join("")}</div>
    <h5 class="grp c">Kh\u1EA9u hi\u1EC7u (tu\u1EF3 ch\u1ECDn)</h5><input class="field" maxlength="26" value="${esc(d.slogan || "")}" data-slogan placeholder="vd: Tr\xE0 s\u1EEFa m\u1ED7i ng\xE0y" aria-label="Kh\u1EA9u hi\u1EC7u">
    <div class="chips">${SLOGANS.map((s) => `<button class="chip-s sm" data-act="slg" data-v="${esc(s)}">${esc(s)}</button>`).join("")}</div>
    <div class="row-between"><h5 class="grp">H\xECnh logo</h5>${fileBtn("\u{1F4F7} T\u1EA3i \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n", "stamp", "soft sm")}</div>
    <div class="icons">${LOGO_ICONS.map((ic) => `<button class="ico-s ${!d.img && d.icon === ic ? "on" : ""}" data-act="ic" data-v="${ic}">${ic}</button>`).join("")}</div>
    <button class="btn pri block" data-act="save">L\u01B0u tem</button><button class="btn ghost block" data-act="x">\u0110\xF3ng</button>`;
    const m = openModal({ id: "stamp", cls: "small tall", html: body() });
    const redraw = () => {
      const sc = m.body.scrollTop;
      m.body.innerHTML = body();
      m.body.scrollTop = sc;
      bindInput();
      bindFiles(m.body, onPick);
    };
    const onPick = (key, url) => {
      d.img = url;
      redraw();
    };
    const bindInput = () => {
      var _a;
      return (_a = $("[data-slogan]", m.body)) == null ? void 0 : _a.addEventListener("input", (e) => {
        d.slogan = e.target.value;
        $(".stamp-prev", m.body).innerHTML = stampSVG(d, 150);
      });
    };
    bindInput();
    bindFiles(m.body, onPick);
    bindActions(m.body, {
      frame: (t) => {
        d.frame = t.dataset.v;
        redraw();
      },
      ts: (t) => {
        d.textStyle = t.dataset.v;
        redraw();
      },
      bg: (t) => {
        d.bg = t.dataset.v;
        redraw();
      },
      slg: (t) => {
        d.slogan = t.dataset.v === "B\u1ECF tr\u1ED1ng" ? "" : t.dataset.v;
        redraw();
      },
      ic: (t) => {
        d.icon = t.dataset.v;
        d.img = null;
        redraw();
      },
      save: () => {
        S.stamp = { ...d };
        if (d.img) S.logo.img = d.img;
        else {
          S.logo.emoji = d.icon;
          S.logo.img = null;
        }
        markDirty("view", "hud");
        requestSave();
        sfx("success");
        toast("\u0110\xE3 l\u01B0u tem th\u01B0\u01A1ng hi\u1EC7u! \u{1F389}", "ok");
        m.close();
      },
      x: () => m.close()
    });
  }

  // js/home.js
  var PANELS = { ...PANELS1, ...PANELS2, ...PANELS3, crush };
  var TILES = [
    ["kho", "Kho", "\u{1F4E6}"],
    ["vuon", "V\u01B0\u1EDDn c\xE2y", "\u{1FAB4}"],
    ["thucung", "Th\xFA c\u01B0ng", "\u{1F415}"],
    ["khoinghiep", "Kh\u1EDFi nghi\u1EC7p", "\u{1F5FA}\uFE0F"],
    ["sanh", "S\u1EA3nh Tr\xE0", "\u{1F3EE}"],
    ["chinhanh", "Chi Nh\xE1nh", "\u{1F3E2}"],
    ["mxh", "M\u1EA1ng X\xE3 H\u1ED9i", "\u{1F4F1}"],
    ["nhansu", "Qu\u1EA3n l\xFD nh\xE2n s\u1EF1", "\u{1F3C6}"],
    ["thue", "Thu\u1EBF & Bank", "\u{1F4DC}"],
    ["nangcap", "N\xE2ng c\u1EA5p", "\u{1F6E0}\uFE0F"],
    ["giaban", "Gi\xE1 b\xE1n", "\u{1F4B5}"],
    ["danhgia", "\u0110\xE1nh gi\xE1", "\u2B50"],
    ["tongket", "T\u1ED5ng k\u1EBFt", "\u{1F4CA}"],
    ["banbe", "B\u1EA1n b\xE8", "\u{1F465}"],
    ["crush", "Milk Tea Crush", "\u{1F36C}"],
    ["suutam", "S\u01B0u t\u1EA7m", "\u{1F3B4}"]
  ];
  var GROUPS = [
    { id: "tiem", label: "Ti\u1EC7m", icon: "\u{1F3EA}", tabs: ["giaban", "sanh", "tongket", "danhgia"] },
    { id: "kho", label: "Kho", icon: "\u{1F4E6}", tabs: ["kho", "vuon", "thucung"] },
    { id: "pt", label: "Ph\xE1t tri\u1EC3n", icon: "\u{1F4C8}", tabs: ["nangcap", "nhansu", "chinhanh", "khoinghiep"] },
    { id: "xh", label: "X\xE3 h\u1ED9i", icon: "\u{1F465}", tabs: ["mxh", "banbe"] },
    { id: "them", label: "Th\xEAm", icon: "\u{1F380}", tabs: ["crush", "thue", "suutam"] }
  ];
  var groupOf = (tab) => GROUPS.find((g) => g.tabs.includes(tab)) || GROUPS[1];
  var TILE_BY_ID = Object.fromEntries(TILES.map((t) => [t[0], t]));
  var ALL_TABS = TILES.map((t) => t[0]);
  function renderHome() {
    const view = $("#view");
    if (S.phase === "sell") return;
    const loc = LOCATIONS[S.location];
    view.innerHTML = `<div class="home" id="home">
    <div class="home-awning" aria-hidden="true"></div>
    <div class="shopcard"><button class="sign-logo" data-act="logo" aria-label="\u0110\u1ED5i logo qu\xE1n">${logoHTML(52)}</button>
      <div class="sc-main"><button class="sign-name" data-act="rename" aria-label="S\u1EEDa t\xEAn ti\u1EC7m"><span>${esc(S.shopName)}</span> <i>\u270E</i></button>
        <div class="loc-chips"><button class="chip y" data-act="goto" data-to="khoinghiep">${loc.icon} ${esc(loc.name)}</button><button class="chip green" data-act="goto" data-to="sanh">\u{1F3EE} S\u1EA3nh Tr\xE0</button></div></div></div>
    <div class="chalk" id="board"></div>
    <div class="tiles" id="tiles"></div>
    <div class="evb" id="evb"></div>
    <div class="expect" id="exp"></div>
    <div class="panel" id="panel"></div>
  </div>`;
    renderBoard();
    renderTiles();
    renderEvent();
    renderPanel();
    bindActions($("#home"), {
      logo: () => openLogoModal(),
      rename: () => openRename(),
      goto: (t) => goTab(t.dataset.to),
      tile: (t) => goTab(t.dataset.tab, false)
    });
    bindNav();
    const panelActs = new Proxy({}, { get: (_, k) => (t, e) => {
      var _a, _b;
      const fn = (_b = (_a = PANELS[S.tab]) == null ? void 0 : _a.acts) == null ? void 0 : _b[k];
      if (fn) fn(t, e);
      else if (k === "goto") goTab(t.dataset.to);
    } });
    bindActions($("#panel"), panelActs);
  }
  function goTab(tab, scroll = true) {
    if (!ALL_TABS.includes(tab)) return;
    if (S.phase !== "home" && S.phase !== "end") return;
    S.tab = tab;
    markDirty("panel", "tiles");
    if (scroll) setTimeout(() => {
      var _a;
      return (_a = $("#panel")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30);
  }
  function renderTiles() {
    const g = groupOf(S.tab);
    const el = $("#tiles");
    if (el) el.innerHTML = g.tabs.map((id) => TILE_BY_ID[id]).map(([id, label, emo]) => `<button class="tile ${S.tab === id ? "on" : ""}" data-act="tile" data-tab="${id}"><span class="t-i">${emo}</span>${label}${id === "thucung" && !S.pet ? "<em>\u{1F512}</em>" : ""}</button>`).join("");
    renderNav();
  }
  function renderNav() {
    const el = $("#nav");
    if (!el) return;
    const show2 = S.phase === "home" || S.phase === "end";
    el.hidden = !show2;
    if (!show2) {
      el.innerHTML = "";
      return;
    }
    const cur2 = groupOf(S.tab).id;
    el.innerHTML = GROUPS.map((g) => `<button class="nav-i ${cur2 === g.id ? "on" : ""}" data-act="nav" data-group="${g.id}" aria-label="${g.label}"><i class="nav-e">${g.icon}</i><span>${g.label}</span></button>`).join("");
  }
  var navBound = false;
  function bindNav() {
    if (navBound) return;
    navBound = true;
    bindActions($("#nav"), {
      nav: (t) => {
        var _a, _b;
        const g = GROUPS.find((x) => x.id === t.dataset.group);
        if (groupOf(S.tab).id === g.id) {
          (_a = $("#view")) == null ? void 0 : _a.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        goTab(g.tabs[0], false);
        (_b = $("#view")) == null ? void 0 : _b.scrollTo({ top: 0 });
      }
    });
  }
  function renderEvent() {
    const ev = eventOf();
    const el = $("#evb");
    if (!el) return;
    el.innerHTML = `<span class="ev-i">${ev.icon}</span><div><b>H\xF4m nay: ${esc(ev.name)}</b><p>${esc(ev.desc)}</p></div>`;
    $("#exp").innerHTML = `\u{1F465} <b>~${expectedCustomers()}</b> <small>kh\xE1ch d\u1EF1 ki\u1EBFn</small> \xB7 ${weatherOf().icon} ${weatherOf().name}`;
  }
  function renderBoard() {
    const el = $("#board");
    if (!el) return;
    const teas = TEAS.filter((t) => S.onMenu[t] && S.unlocked[t]);
    const tops = TOPS.filter((t) => S.onMenu[t] && S.unlocked[t]);
    const row2 = (n, p) => `<div class="cr"><span>${esc(n)}</span><b>${p}</b></div>`;
    el.innerHTML = `<h3>\u{1F964} Menu h\xF4m nay</h3>
    <div class="cols">${teas.map((t) => row2(ITEMS[t].name, fmtK(priceOf(t)))).join("") || "<em>Ch\u01B0a c\xF3 m\xF3n</em>"}</div>
    ${tops.length ? `<h5>Topping</h5><div class="cols">${tops.map((t) => row2(ITEMS[t].name, "+" + fmtK(priceOf(t)))).join("")}</div>` : ""}
    <div class="sz">Size L +${fmtK(priceOf("sizeL"))}</div>`;
  }
  var tabScroll = {};
  function renderPanel() {
    var _a;
    const el = $("#panel");
    if (!el) return;
    const P3 = PANELS[S.tab] || PANELS.kho;
    el.innerHTML = `<div class="panel-in" data-tab="${S.tab}">${P3.html()}</div>`;
    (_a = P3.bind) == null ? void 0 : _a.call(P3, el);
    const row2 = el.querySelector(".tabs.scroll");
    if (row2) {
      const on2 = row2.querySelector(".tab.on");
      if (on2) row2.scrollLeft = Math.max(0, on2.offsetLeft - (row2.clientWidth - on2.offsetWidth) / 2);
      row2.addEventListener("scroll", () => {
        tabScroll[S.tab] = row2.scrollLeft;
      }, { passive: true });
    }
    renderEvent();
  }
  function renderCta() {
    const el = $("#cta");
    if (!el) return;
    if (S.phase !== "home") {
      el.innerHTML = "";
      el.className = "cta";
      return;
    }
    const total = planTotal();
    const chk = openMissing();
    if (total > 0) {
      el.className = "cta";
      el.innerHTML = `<button class="cta-btn" data-act="plan">N\u1EA5u & nh\u1EADp \xB7 ${fmtK(total)}</button>`;
    } else if (!chk.canOpen) {
      el.className = "cta bad";
      el.innerHTML = `<button class="cta-btn cta-red" data-act="tokho">\u26A0\uFE0F Ch\u01B0a n\u1EA5u ${chk.miss.map((m) => m === "Tr\xE0" ? "\u{1FAD6} Tr\xE0" : m === "Topping" ? "\u{1F9CB} Topping" : "\u{1F964} D\u1EE5ng c\u1EE5").join(" \xB7 ")}</button>`;
    } else {
      el.className = "cta";
      el.innerHTML = `${chk.miss.length ? `<div class="cta-warn">\u26A0\uFE0F Ch\u01B0a c\xF3 ${chk.miss.join(", ")} \u2014 v\u1EABn c\xF3 th\u1EC3 m\u1EDF c\u1EEDa</div>` : ""}<button class="cta-btn" data-act="open">M\u1EDF c\u1EEDa ng\xE0y ${S.day}</button>`;
    }
  }
  var ctaBound = false;
  function bindCta() {
    if (ctaBound) return;
    ctaBound = true;
    bindActions($("#cta"), {
      plan: () => {
        const e = commitPlan();
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("coin");
          toast("\u0110\xE3 n\u1EA5u & nh\u1EADp nguy\xEAn li\u1EC7u!", "ok");
        }
      },
      tokho: () => {
        const missing = openMissing().miss;
        S.subtab.kho = missing.includes("Tr\xE0") ? "tra" : missing.includes("D\u1EE5ng c\u1EE5") ? "dc" : "top";
        goTab("kho");
        toast("V\xE0o Kho ch\u1ECDn Tr\xE0, Topping, D\u1EE5ng c\u1EE5 r\u1ED3i b\u1EA5m N\u1EA5u & nh\u1EADp", "");
      },
      open: () => {
        S.settings.shiftMin = S.settings.shiftMinNext;
        const e = startShift();
        if (e) {
          toast(e, "err");
          sfx("error");
          return;
        }
        sfx("bell");
        markDirty("view", "hud", "cta");
      }
    });
  }
  function openRename() {
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u270F\uFE0F T\xEAn ti\u1EC7m c\u1EE7a b\u1EA1n</h3><input class="field" maxlength="24" value="${esc(S.shopName)}" data-name aria-label="T\xEAn ti\u1EC7m"><button class="btn pri block" data-act="ok">L\u01B0u t\xEAn</button><button class="btn ghost block" data-act="x">H\u1EE7y</button>` });
    const inp = $("[data-name]", m.body);
    setTimeout(() => inp.focus(), 50);
    bindActions(m.body, {
      ok: () => {
        const v = inp.value.trim();
        if (v) {
          S.shopName = v;
          markDirty("view", "hud");
          requestSave();
          sfx("success");
          toast("Bi\u1EC3n hi\u1EC7u m\u1EDBi! \u{1FAA7}", "ok");
        }
        m.close();
      },
      x: () => m.close()
    });
  }
  function openPanelModal(tab) {
    var _a;
    const P3 = PANELS[tab];
    const m = openModal({ id: "pm-" + tab, cls: "tall", html: `<div class="panel-in">${P3.html()}</div>` });
    const redraw = () => {
      var _a2;
      m.body.innerHTML = `<div class="panel-in">${P3.html()}</div>`;
      (_a2 = P3.bind) == null ? void 0 : _a2.call(P3, m.body);
    };
    bindActions(m.body, new Proxy({}, { get: (_, k) => (t, e) => {
      var _a2;
      const fn = (_a2 = P3.acts) == null ? void 0 : _a2[k];
      if (fn) {
        fn(t, e);
        setTimeout(redraw, 20);
      }
    } }));
    (_a = P3.bind) == null ? void 0 : _a.call(P3, m.body);
    return m;
  }

  // js/tutorial.js
  var goNav = (g) => () => {
    var _a;
    (_a = document.querySelector(`.nav-i[data-group="${g}"]`)) == null ? void 0 : _a.click();
    flushRender();
  };
  var goKho = (tab) => () => {
    var _a;
    goNav("kho")();
    (_a = document.querySelector(`.tab[data-v="${tab}"]`)) == null ? void 0 : _a.click();
    flushRender();
  };
  var goGames = () => {
    var _a;
    goNav("them")();
    (_a = document.querySelector('.tile[data-tab="crush"]')) == null ? void 0 : _a.click();
    flushRender();
  };
  var openingDescription = () => planTotal() > 0 ? "B\u1EA1n \u0111ang c\xF3 k\u1EBF ho\u1EA1ch nh\u1EADp h\xE0ng. N\xFAt hi\u1EC7n t\u1EA1i l\xE0 <b>N\u1EA5u & nh\u1EADp</b>: x\xE1c nh\u1EADn \u0111\u1EC3 tr\u1EA3 ti\u1EC1n v\xE0 \u0111\u01B0a h\xE0ng v\xE0o kho. Sau \u0111\xF3 ki\u1EC3m tra nguy\xEAn li\u1EC7u tr\u01B0\u1EDBc khi m\u1EDF c\u1EEDa." : openMissing().canOpen ? "Kho \u0111\xE3 \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n m\u1EDF c\u1EEDa. Ch\u1EA1m <b>M\u1EDF c\u1EEDa ng\xE0y\u2026</b> \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u ca b\xE1n h\xE0ng. Topping kh\xF4ng b\u1EAFt bu\u1ED9c, nh\u01B0ng c\u1EA7n nh\u1EADp n\u1EBFu mu\u1ED1n b\xE1n m\xF3n c\xF3 topping." : "N\xFAt \u0111ang b\xE1o thi\u1EBFu nguy\xEAn li\u1EC7u v\xE0 d\u1EABn v\u1EC1 Kho, ch\u01B0a b\u1EAFt \u0111\u1EA7u b\xE1n h\xE0ng. C\u1EA7n c\xF3 <b>tr\xE0 \u0111ang b\u1EADt trong menu, \xEDt nh\u1EA5t m\u1ED9t c\u1EE1 ly, \u0111\xE1 v\xE0 \u0111\u01B0\u1EDDng</b>. Nh\u1EADp h\xE0ng xong, n\xFAt m\u1EDBi \u0111\u1ED5i th\xE0nh <b>M\u1EDF c\u1EEDa ng\xE0y\u2026</b>.";
  var STEPS = {
    home: [
      { sel: ".shopcard", ico: "\u{1FAA7}", t: "Ti\u1EC7m c\u1EE7a b\u1EA1n", d: "\u0110\xE2y l\xE0 <b>bi\u1EC3n hi\u1EC7u</b>. Ch\u1EA1m logo ho\u1EB7c t\xEAn \u0111\u1EC3 \u0111\u1ED5i; hai nh\xE3n nh\u1ECF d\u1EABn t\u1EDBi <b>Kh\u1EDFi nghi\u1EC7p</b> v\xE0 <b>S\u1EA3nh Tr\xE0</b>." },
      { sel: "#board", ico: "\u{1F964}", t: "Menu h\xF4m nay", d: "B\u1EA3ng ph\u1EA5n li\u1EC7t k\xEA m\xF3n \u0111ang b\xE1n v\xE0 gi\xE1. Size L \u0111\u01B0\u1EE3c c\u1ED9ng th\xEAm ti\u1EC1n. M\xF3n n\xE0o kh\xF4ng c\xF3 nguy\xEAn li\u1EC7u s\u1EBD kh\xF4ng b\xE1n \u0111\u01B0\u1EE3c." },
      { sel: "#nav", ico: "\u{1F9ED}", t: "Thanh nh\xF3m d\u01B0\u1EDBi c\xF9ng", d: "5 nh\xF3m: <b>\u{1F3EA} Ti\u1EC7m \xB7 \u{1F4E6} Kho \xB7 \u{1F4C8} Ph\xE1t tri\u1EC3n \xB7 \u{1F465} X\xE3 h\u1ED9i \xB7 \u{1F380} Th\xEAm</b>. Ch\u1ECDn nh\xF3m r\u1ED3i ch\u1EA1m \xF4 ch\u1EE9c n\u0103ng ngay b\xEAn tr\xEAn." },
      { sel: '.nav-i[data-group="tiem"]', pre: goNav("tiem"), ico: "\u{1F4B5}", t: "Nh\xF3m Ti\u1EC7m \xB7 Gi\xE1 b\xE1n", d: "V\xE0o <b>Gi\xE1 b\xE1n</b> ch\u1EC9nh gi\xE1 Tr\xE0, H\u01B0\u01A1ng, Topping, Size. Gi\xE1 qu\xE1 cao khi\u1EBFn kh\xE1ch b\u1ECF \u0111i. C\xF9ng nh\xF3m c\xF3 S\u1EA3nh, T\u1ED5ng k\u1EBFt, \u0110\xE1nh gi\xE1." },
      { sel: '.nav-i[data-group="pt"]', pre: goNav("pt"), ico: "\u{1F6E0}\uFE0F", t: "Nh\xF3m Ph\xE1t tri\u1EC3n \xB7 N\xE2ng c\u1EA5p", d: "\xD4 <b>N\xE2ng c\u1EA5p</b> m\u1EDF kh\xF3a tr\xE0, topping v\xE0 ti\u1EC7n \xEDch. C\xF3 th\u1EC3 l\xE0m sau khi c\xF3 ti\u1EC1n; c\xF9ng nh\xF3m c\xF3 Nh\xE2n s\u1EF1, Chi nh\xE1nh, Kh\u1EDFi nghi\u1EC7p." },
      { sel: '.nav-i[data-group="kho"]', pre: goNav("kho"), ico: "\u{1F4E6}", t: "V\xE0o Kho", d: "M\u1EDF nh\xF3m <b>Kho</b> \u0111\u1EC3 ch\u1ECDn nguy\xEAn li\u1EC7u cho h\xF4m nay. M\u1ED7i ng\xE0y b\u1EA1n nh\u1EADp h\xE0ng \u1EDF \u0111\xE2y tr\u01B0\u1EDBc khi m\u1EDF c\u1EEDa." },
      { sel: '.tab[data-v="tra"]', pre: goKho("tra"), ico: "\u{1FAD6}", t: "Tab Tr\xE0", d: "Ch\u1ECDn lo\u1EA1i <b>Tr\xE0</b> s\u1EBD b\xE1n. M\u1ED7i d\xF2ng cho bi\u1EBFt t\u1ED3n kho, v\u1ED1n v\xE0 h\u1EA1n d\xF9ng \u23F3." },
      { sel: '.tab[data-v="top"]', pre: goKho("top"), ico: "\u{1F9CB}", t: "Tab Topping", d: "Ch\u1ECDn <b>Topping</b> kh\xE1ch hay g\u1ECDi: tr\xE2n ch\xE2u, th\u1EA1ch, kem... Kh\xF4ng c\u1EA7n nh\u1EADp h\u1EBFt, ch\u1EC9 nh\u1EADp m\xF3n b\u1EA1n mu\u1ED1n b\xE1n." },
      { sel: '.tab[data-v="dc"]', pre: goKho("dc"), ico: "\u{1F964}", t: "Tab D\u1EE5ng c\u1EE5", d: "<b>Ly M, ly L, \u0111\xE1, \u0111\u01B0\u1EDDng</b> d\xF9ng \u0111\u1EC3 pha ch\u1EBF. C\xF3 \xEDt nh\u1EA5t m\u1ED9t c\u1EE1 ly \u0111\u1EC3 m\u1EDF c\u1EEDa; nh\u1EADp c\u1EA3 hai n\u1EBFu mu\u1ED1n ph\u1EE5c v\u1EE5 \u0111\u1EE7 hai size." },
      { sel: ".krow .stepper", pre: goKho("dc"), ico: "\u{1F522}", t: "L\u1EADp s\u1ED1 l\u01B0\u1EE3ng c\u1EA7n nh\u1EADp", d: "\xD4 gi\u1EEFa l\xE0 <b>s\u1ED1 l\u01B0\u1EE3ng d\u1EF1 \u0111\u1ECBnh mua th\xEAm</b>, kh\xF4ng ph\u1EA3i t\u1ED3n kho. G\xF5 s\u1ED1 0\u2013999 ho\u1EB7c b\u1EA5m <b>\u2212 / +</b> \u0111\u1EC3 gi\u1EA3m/t\u0103ng 1. S\u1ED1 0 b\u1ECF m\xF3n kh\u1ECFi k\u1EBF ho\u1EA1ch. H\xE0ng ch\u1EC9 v\xE0o kho v\xE0 ti\u1EC1n ch\u1EC9 b\u1ECB tr\u1EEB khi x\xE1c nh\u1EADn <b>N\u1EA5u & nh\u1EADp</b>." },
      { sel: "#cta .cta-btn", ico: "\u{1F6D2}", t: "X\xE1c nh\u1EADn nh\u1EADp h\xE0ng", d: () => planTotal() > 0 ? "N\xFAt <b>N\u1EA5u & nh\u1EADp</b> x\xE1c nh\u1EADn to\xE0n b\u1ED9 s\u1ED1 l\u01B0\u1EE3ng \u0111\xE3 ch\u1ECDn v\xE0 tr\u1EEB t\u1ED5ng chi ph\xED. Kh\xF4ng \u0111\u1EE7 ti\u1EC1n th\xEC giao d\u1ECBch kh\xF4ng th\u1EF1c hi\u1EC7n. B\u1EA5m Ti\u1EBFp ch\u1EC9 xem h\u01B0\u1EDBng d\u1EABn, kh\xF4ng mua h\xE0ng." : "Ch\u01B0a c\xF3 s\u1ED1 l\u01B0\u1EE3ng c\u1EA7n mua. T\u0103ng s\u1ED1 l\u01B0\u1EE3ng trong Kho \u0111\u1EC3 hi\u1EC7n n\xFAt <b>N\u1EA5u & nh\u1EADp</b>. N\xFAt \u0111\u1ECF hi\u1EC7n t\u1EA1i d\u1EABn t\u1EDBi nguy\xEAn li\u1EC7u c\xF2n thi\u1EBFu; n\u1EBFu kho \u0111\u1EE7 h\xE0ng, n\xFAt s\u1EBD l\xE0 M\u1EDF c\u1EEDa." },
      { sel: "#cta .cta-btn", ico: "\u{1F3EE}", t: "\u0110i\u1EC1u ki\u1EC7n m\u1EDF c\u1EEDa", d: openingDescription },
      { sel: '.tile[data-tab="crush"]', pre: goNav("them"), ico: "\u{1F3AE}", t: "Th\xEAm \xB7 Tr\xF2 ch\u01A1i", d: "Trong nh\xF3m <b>Th\xEAm</b>, ch\u1ECDn \xF4 <b>Milk Tea Crush</b> \u0111\u1EC3 xem hai tr\xF2 ch\u01A1i ph\u1EE5, ti\u1EBFn \u0111\u1ED9 v\xE0 ph\u1EA7n th\u01B0\u1EDFng. Tr\xF2 ch\u01A1i gi\xFAp b\u1ED5 sung ti\u1EC1n, nguy\xEAn li\u1EC7u ho\u1EB7c th\u01B0\u1EDFng doanh thu cho qu\xE1n." },
      { sel: '.panel-in [data-act="crush"]', pre: goGames, ico: "\u{1F36C}", t: "Milk Tea Crush", d: "\u0110\u1ED5i ch\u1ED7 c\xE1c \xF4 k\u1EC1 nhau \u0111\u1EC3 gh\xE9p \xEDt nh\u1EA5t <b>3 icon gi\u1ED1ng nhau</b>. Ho\xE0n th\xE0nh m\u1EE5c ti\xEAu trong s\u1ED1 l\u01B0\u1EE3t c\u1EE7a m\xE0n. Gh\xE9p \u0111\u1EB7c bi\u1EC7t t\u1EA1o hi\u1EC7u \u1EE9ng h\xE0ng/c\u1ED9t, bom ho\u1EB7c c\u1EA7u v\u1ED3ng. M\u1ED7i m\xE0n v\u01B0\u1EE3t qua c\u1ED9ng <b>1% doanh thu v\u0129nh vi\u1EC5n</b>, t\u1ED1i \u0111a 50%." },
      { sel: '.panel-in [data-act="pearl"]', pre: goGames, ico: "\u{1F9CB}", t: "Tr\xE2n Ch\xE2u N\u1ED5", d: "Ch\u1EA1m nh\xF3m <b>\xEDt nh\u1EA5t 2 vi\xEAn c\xF9ng m\xE0u k\u1EC1 nhau</b>. M\u1EE5c ti\xEAu 120 \u0111i\u1EC3m trong 30 gi\xE2y; n\u1ED5 li\xEAn ti\u1EBFp trong 1,2 gi\xE2y t\u0103ng combo. Cu\u1ED1i v\xE1n nh\u1EADn ti\u1EC1n v\xE0 tr\xE2n ch\xE2u theo k\u1EBFt qu\u1EA3. T\u1ED1i \u0111a <b>3 l\u01B0\u1EE3t m\u1ED7i ng\xE0y</b>; l\u01B0\u1EE3t ch\u1EC9 b\u1ECB t\xEDnh khi b\u1EA5m B\u1EAFt \u0111\u1EA7u." }
    ],
    sell: [
      { sel: "#qrow", ico: "\u{1F465}", t: "H\xE0ng \u0111\u1EE3i kh\xE1ch", d: "Kh\xE1ch x\u1EBFp h\xE0ng \u1EDF \u0111\xE2y. Ch\u1EA1m avatar \u0111\u1EC3 ph\u1EE5c v\u1EE5 ng\u01B0\u1EDDi kh\xE1c tr\u01B0\u1EDBc, \u01B0u ti\xEAn ai s\u1EAFp h\u1EBFt <b>ki\xEAn nh\u1EABn</b>." },
      { sel: ".cust-zone", ico: "\u{1F464}", t: "Bong b\xF3ng order", d: "Bong b\xF3ng ghi <b>size, lo\u1EA1i tr\xE0, h\u01B0\u01A1ng, topping</b>. V\xF2ng quanh avatar l\xE0 ki\xEAn nh\u1EABn; c\u1EA1n l\xE0 kh\xE1ch b\u1ECF \u0111i." },
      { sel: ".stacks", ico: "\u{1F964}", t: "L\u1EA5y ly", d: "Ch\u1EA1m \u0111\xFAng ch\u1ED3ng ly <b>M</b> ho\u1EB7c <b>L</b> kh\xE1ch g\u1ECDi. M\u1ED7i size c\xF3 s\u1ED1 l\u01B0\u1EE3ng ri\xEAng, h\u1EBFt ly ph\u1EA3i nh\u1EADp th\xEAm." },
      { sel: "#disps", ico: "\u{1FAD6}", t: "R\xF3t tr\xE0", d: "Ch\u1EA1m <b>b\xECnh tr\xE0</b> \u0111\xFAng lo\u1EA1i \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u r\xF3t, ch\u1EA1m l\u1EA1i \u0111\u1EC3 d\u1EEBng khi thanh ch\u1EA1y t\u1EDBi <b>v\xF9ng v\xE0ng</b>." },
      { sel: "#trays", ico: "\u{1F9CB}", t: "Topping & h\u01B0\u01A1ng", d: "Ch\u1EA1m c\xE1c <b>khay topping</b> kh\xE1ch mu\u1ED1n; n\u1EBFu c\xF3 h\u01B0\u01A1ng, ch\u1EA1m n\xFAt \u1EDF h\xE0ng <b>H\u01AF\u01A0NG</b> d\u01B0\u1EDBi khu PHA LY, ph\xEDa tr\xEAn khay topping. \u0110\u1EEBng th\xEAm th\u1EEBa." },
      { sel: "#sealer", ico: "\u{1F512}", t: "\u0110\xF3ng n\u1EAFp", d: "Khi ly \u0111\xE3 c\xF3 tr\xE0, ch\u1EA1m <b>m\xE1y \u0111\xF3ng n\u1EAFp</b> \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u \xE9p n\u1EAFp. Ch\u1EDD qu\xE1 tr\xECnh ho\xE0n t\u1EA5t, r\u1ED3i ch\u1EA1m <b>ly \u0111\xE3 c\xF3 n\u1EAFp</b> \u0111\u1EC3 giao kh\xE1ch." },
      { sel: "#wboard", ico: "\u{1F91D}", t: "Giao kh\xE1ch", d: "Ly \u0111\xE3 c\xF3 n\u1EAFp n\u1EB1m tr\xEAn th\u1EDBt <b>PHA LY</b>: ch\u1EA1m \u0111\u1EC3 giao cho kh\xE1ch. \u0110\xFAng \u0111\u01A1n v\xE0 nhanh th\xEC 5 sao, c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c boa." },
      { sel: ".trash", ico: "\u{1F5D1}\uFE0F", t: "Th\xF9ng r\xE1c", d: "Pha nh\u1EA7m th\xEC ch\u1EA1m <b>th\xF9ng r\xE1c</b> \u0111\u1EC3 \u0111\u1ED5 ly r\u1ED3i l\xE0m l\u1EA1i." },
      { sel: ".phone", ico: "\u{1F4F1}", t: "\u0110\u01A1n online", d: "S\u1ED1 \u0111\u1ECF tr\xEAn <b>\u0111i\u1EC7n tho\u1EA1i</b> l\xE0 s\u1ED1 \u0111\u01A1n online \u0111ang ch\u1EDD. Ch\u1EA1m \u0111\u1EC3 xem v\xE0 nh\u1EADn \u0111\u01A1n." },
      { sel: "#lobbyGo", ico: "\u{1FA91}", t: "Ra s\u1EA3nh", d: "S\u1EA3nh c\xF3 b\xE0n gh\u1EBF: d\u1ECDn b\xE0n b\u1EA9n \u0111\u1EC3 kh\xE1ch ng\u1ED3i t\u1EA1i qu\xE1n v\xE0 boa th\xEAm." },
      { sel: "#hud .hbtn.pause", ico: "\u23F8\uFE0F", t: "T\u1EA1m d\u1EEBng & c\xE0i \u0111\u1EB7t", d: "N\xFAt <b>\u23F8</b> t\u1EA1m d\u1EEBng ca; b\xE1nh r\u0103ng b\xEAn ph\u1EA3i m\u1EDF C\xE0i \u0111\u1EB7t (m\xE0u, rung, nh\u1EA1c). Ch\xFAc b\u1EA1n b\xE1n \u0111\u1EAFt h\xE0ng! \u{1F389}" }
    ]
  };
  var cur = null;
  function ensureUi() {
    let el = $("#coach");
    if (el) return el;
    el = h('<div id="coach" class="coach" hidden><div class="coach-ring"></div><div class="coach-card"></div></div>');
    document.body.appendChild(el);
    return el;
  }
  function targetOf(step) {
    return step.sel.split(",").map((q) => document.querySelector(q.trim())).find((n) => n && n.offsetParent !== null) || null;
  }
  function place() {
    var _a;
    if (!cur) return;
    const el = $("#coach"), ring = el.querySelector(".coach-ring"), card = el.querySelector(".coach-card");
    el.style.visibility = document.querySelector("#modal .modal-back") ? "hidden" : "visible";
    const st = STEPS[cur.phase][cur.i];
    const t = targetOf(st);
    const vp = window.visualViewport;
    const topEdge = ((vp == null ? void 0 : vp.offsetTop) || 0) + 8;
    const bottomEdge = ((vp == null ? void 0 : vp.offsetTop) || 0) + ((vp == null ? void 0 : vp.height) || innerHeight) - 8;
    const app = (_a = document.querySelector(".app")) == null ? void 0 : _a.getBoundingClientRect();
    card.style.left = `${app ? app.left + app.width / 2 : innerWidth / 2}px`;
    card.style.width = `${Math.min(440, ((app == null ? void 0 : app.width) || innerWidth) - 20)}px`;
    card.style.maxHeight = `${bottomEdge - topEdge}px`;
    if (t) {
      const view = document.querySelector("#view");
      if ((view == null ? void 0 : view.contains(t)) && cur.positioned !== cur.i) {
        const vr = view.getBoundingClientRect(), tr = t.getBoundingClientRect();
        const desired = vr.top + Math.min(24, Math.max(8, (vr.height - tr.height) / 2));
        view.scrollTop += tr.top - desired;
        cur.positioned = cur.i;
      }
      const r = t.getBoundingClientRect();
      ring.style.cssText = `display:block;left:${r.left - 5}px;top:${r.top - 5}px;width:${r.width + 10}px;height:${r.height + 10}px`;
      const above = Math.max(0, r.top - 12 - topEdge);
      const below = Math.max(0, bottomEdge - r.bottom - 12);
      const ch = card.offsetHeight || 160;
      const useBelow = below >= ch || below >= above;
      card.style.maxHeight = `${Math.max(1, useBelow ? below : above)}px`;
      card.style.top = `${useBelow ? r.bottom + 12 : Math.max(topEdge, r.top - 12 - card.offsetHeight)}px`;
    } else {
      ring.style.display = "none";
      card.style.top = `${topEdge + Math.max(0, (bottomEdge - topEdge - card.offsetHeight) / 2)}px`;
    }
    cur.raf = requestAnimationFrame(place);
  }
  function show() {
    const el = ensureUi(), card = el.querySelector(".coach-card");
    const steps = STEPS[cur.phase], st = steps[cur.i], last2 = cur.i === steps.length - 1;
    el.hidden = false;
    if (st.pre && cur.pre !== cur.i) {
      cur.pre = cur.i;
      try {
        st.pre();
      } catch (e) {
      }
    }
    card.innerHTML = `<div class="coach-h"><span class="coach-ico">${st.ico}</span><div><small>B\u01B0\u1EDBc ${cur.i + 1}/${steps.length}</small><b>${esc(st.t)}</b></div></div>
    <p>${typeof st.d === "function" ? st.d() : st.d}</p>
    <div class="coach-dots">${steps.map((_, k) => `<i class="${k === cur.i ? "on" : k < cur.i ? "done" : ""}"></i>`).join("")}</div>
    <div class="coach-btns"><button class="btn ghost sm" data-c="skip">B\u1ECF qua h\u01B0\u1EDBng d\u1EABn</button><button class="btn pri sm" data-c="next">${last2 ? "Xong \u2713" : "Ti\u1EBFp \u2192"}</button></div>`;
    card.querySelector('[data-c="skip"]').onclick = () => {
      sfx("click");
      end(true);
    };
    card.querySelector('[data-c="next"]').onclick = () => {
      sfx("click");
      if (last2) end(false);
      else {
        cur.i++;
        show();
      }
    };
    cancelAnimationFrame(cur.raf);
    place();
  }
  function end(skipped) {
    if (!cur) return;
    cancelAnimationFrame(cur.raf);
    const phase = cur.phase;
    if (phase === "sell") setPaused(false);
    cur = null;
    const el = $("#coach");
    if (el) el.hidden = true;
    S.settings.tut = S.settings.tut || {};
    S.settings.tut[phase] = true;
    if (skipped) {
      S.settings.tut.home = true;
      S.settings.tut.sell = true;
    }
    requestSave();
  }
  function startTutorial(phase) {
    if (cur) end(false);
    document.querySelectorAll("#modal [data-modal-x]").forEach((b) => b.click());
    cur = { phase, i: 0, raf: 0 };
    if (phase === "sell") setPaused(true);
    show();
  }
  function armTutorial() {
    S.settings.tut = { home: false, sell: false };
    requestSave();
  }
  function replayTutorial() {
    S.settings.tut = { home: false, sell: false };
    requestSave();
    startTutorial(S.phase === "sell" ? "sell" : "home");
  }
  function maybeTutorial(phase) {
    const t = S.settings.tut;
    if (!t || t[phase] || cur) return;
    startTutorial(phase);
  }

  // js/main.js
  function renderView() {
    const app = $("#app");
    if (app) app.dataset.phase = S.phase;
    if (S.phase === "sell") {
      renderSell();
      return;
    }
    renderHome();
  }
  var clockT = 0;
  function frame(dt) {
    if (S.phase === "sell") frameSell(dt);
    clockT += dt;
    if (clockT >= 1) {
      clockT = 0;
      tickCountdown();
    }
  }
  function wire() {
    registerRenderer("hud", renderHud);
    registerRenderer("view", () => {
      renderView();
      renderCta();
      renderNav();
    });
    registerRenderer("panel", () => {
      if (S.phase !== "sell") renderPanel();
    });
    registerRenderer("tiles", renderTiles);
    registerRenderer("board", renderBoard);
    registerRenderer("cta", renderCta);
    registerUpdate(updateShift);
    registerFrame(frame);
    setHudActions({
      pause: openPause,
      settings: openSettings,
      guide: openGuide,
      forecast: openForecast,
      branchTop: () => S.phase === "sell" ? openPanelModal("chinhanh") : goTab("chinhanh"),
      collectTop: () => S.phase === "sell" ? openPanelModal("suutam") : goTab("suutam")
    });
    initHud();
    bindCta();
    on("goto", (tab) => goTab(tab));
    on("shift:end", () => {
      markDirty("view", "hud", "cta");
      setTimeout(openDaySummary, 350);
    });
    on("day:next", () => {
      applyTheme();
      markDirty("view", "hud", "panel", "cta", "board");
    });
    on("reset", () => {
      resetShiftRuntime();
      ensureForecast();
      applyTheme();
      restartMusic();
      markDirty("view", "hud", "cta");
    });
    on("shift:start", () => setTimeout(() => maybeTutorial("sell"), 700));
    on("tutorial:replay", () => replayTutorial());
    on("kpi:cycle", () => toast("\u{1F4CA} H\u1EBFt chu k\u1EF3 KPI 7 ca: nh\xE2n vi\xEAn nh\u1EADn th\u01B0\u1EDFng \u0111\u1ECBnh k\u1EF3!", "gold", 3e3));
    on("unlock", () => markDirty("board"));
    on("purchase", () => markDirty("hud"));
    const background = () => {
      saveGame();
      if (S.phase === "sell" && SH.on && !isModalOpen("pause")) openPause();
    };
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) background();
    });
    window.addEventListener("pagehide", background);
    document.addEventListener("pause", background);
    window.addEventListener("beforeunload", saveGame);
    on("save:error", () => toast("Kh\xF4ng l\u01B0u \u0111\u01B0\u1EE3c ti\u1EBFn tr\xECnh. H\xE3y xu\u1EA5t m\xE3 sao l\u01B0u trong C\xE0i \u0111\u1EB7t.", "err", 6500));
    setInterval(() => {
      if (S.phase === "sell" && SH.on && !document.hidden) saveGame();
    }, 1e4);
    window.addEventListener("error", (e) => console.error("[game]", e.error || e.message));
    window.addEventListener("unhandledrejection", (e) => console.error("[game]", e.reason));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const m = $("#modal .modal-back:last-child .modal-x");
        m == null ? void 0 : m.click();
      }
    });
  }
  function exposeDebug() {
    if (!DEBUG) return;
    window.debugGame = {
      S,
      E: econ_exports,
      G: sell_exports,
      SH,
      flush: flushRender,
      counterFrame: () => frameSell(0, true),
      addMoney: (n = 1e6) => {
        S.money += n;
        markDirty("hud", "cta");
      },
      fillStock: (q = 30) => {
        for (const id of Object.keys(S.stock)) if (S.unlocked[id]) addStock(id, q);
        markDirty("panel", "cta");
      },
      unlockAll: () => {
        for (const id of Object.keys(S.unlocked)) {
          S.unlocked[id] = true;
          S.onMenu[id] = !["lyM", "lyL", "da", "duong"].includes(id);
        }
        markDirty("view", "panel", "board");
      },
      setDay: (d) => {
        S.day = d;
        ensureForecast();
        markDirty("hud", "view");
      },
      skipTime: (sec) => {
        if (SH.on) SH.t = Math.min(SH.total, SH.t + sec);
      },
      speed: (v) => setSpeed(v),
      closeShop: () => closeNow(),
      nextDay: () => {
        nextDay();
      },
      reset: () => {
        wipeSave();
        emit("reset");
      },
      save: saveGame,
      events: debugEvents,
      crush: crushDebug,
      pearl: pearlDebug
    };
    console.info("%c\u{1F9CB} debugGame s\u1EB5n s\xE0ng", "color:#e8416a;font-weight:bold");
  }
  function boot() {
    initAudio();
    const loaded = loadGame();
    const resumed = restoreShiftRuntime();
    if (resumed) setPaused(true);
    ensureForecast();
    if (!S.eventId || !loaded) S.eventId = pickEvent();
    applyTheme();
    wire();
    exposeDebug();
    flushRender();
    startLoop();
    markDirty("hud", "view", "cta");
    flushRender();
    showIntro(() => {
      sfx("click");
      restartMusic();
      if (S.firstRun) {
        S.firstRun = false;
        S.started = true;
        armTutorial();
        requestSave();
      }
      markDirty("hud", "view", "cta");
      if (S.phase === "end") setTimeout(openDaySummary, 350);
      else if (resumed) openPause();
      else if (S.phase === "home") setTimeout(() => maybeTutorial("home"), 600);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
