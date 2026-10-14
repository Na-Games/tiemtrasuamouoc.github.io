/** Điểm vào: khởi tạo, kết nối event, game loop, intro, debug. */
import { DEBUG } from './config.js';
import {
  S, on, emit, markDirty, registerUpdate, registerRenderer, registerFrame, startLoop, flushRender, loadGame, saveGame, initAudio, restartMusic, applyVolumes,
  setPaused, setSpeed, $, sfx, requestSave, fmtK, wipeSave,
} from './core.js';
import * as E from './econ.js';
import * as G from './sell.js';
import { SH } from './sell.js';
import {
  renderHud, initHud, setHudActions, openPause, openSettings, openGuide, openForecast, openDaySummary, applyTheme, showIntro, toast, closeAllModals, isModalOpen, bindActions,
} from './ui.js';
import { renderSell, frameSell } from './brewui.js';
import { renderHome, renderBoard, renderTiles, renderNav, renderPanel, renderCta, bindCta, goTab, openPanelModal } from './home.js';
import { tickCountdown } from './panels2.js';
import { crushDebug, pearlDebug } from './minigames.js';
import { debugEvents } from './events.js';
import { armTutorial, maybeTutorial, replayTutorial } from './tutorial.js';

function renderView() {
  const app = $('#app'); if (app) app.dataset.phase = S.phase;
  if (S.phase === 'sell') { renderSell(); return; }
  renderHome();
}
let clockT = 0;
function frame(dt) {
  if (S.phase === 'sell') frameSell(dt);
  clockT += dt;
  if (clockT >= 1) { clockT = 0; tickCountdown(); }
}

function wire() {
  registerRenderer('hud', renderHud);
  registerRenderer('view', () => { renderView(); renderCta(); renderNav(); });
  registerRenderer('panel', () => { if (S.phase !== 'sell') renderPanel(); });
  registerRenderer('tiles', renderTiles);
  registerRenderer('board', renderBoard);
  registerRenderer('cta', renderCta);
  registerUpdate(G.updateShift);
  registerFrame(frame);
  setHudActions({
    pause: openPause, settings: openSettings, guide: openGuide, forecast: openForecast,
    branchTop: () => (S.phase === 'sell' ? openPanelModal('chinhanh') : goTab('chinhanh')),
    collectTop: () => (S.phase === 'sell' ? openPanelModal('suutam') : goTab('suutam')),
  });
  initHud();
  bindCta();
  on('goto', (tab) => goTab(tab));
  on('shift:end', () => { markDirty('view', 'hud', 'cta'); setTimeout(openDaySummary, 350); });
  on('day:next', () => { applyTheme(); markDirty('view', 'hud', 'panel', 'cta', 'board'); });
  on('reset', () => { G.resetShiftRuntime(); E.ensureForecast(); applyTheme(); restartMusic(); markDirty('view', 'hud', 'cta'); });
  on('shift:start', () => setTimeout(() => maybeTutorial('sell'), 700));
  on('tutorial:replay', () => replayTutorial());
  on('kpi:cycle', () => toast('📊 Hết chu kỳ KPI 7 ca: nhân viên nhận thưởng định kỳ!', 'gold', 3000));
  on('unlock', () => markDirty('board'));
  on('purchase', () => markDirty('hud'));
  const background = () => { saveGame(); if (S.phase === 'sell' && SH.on && !isModalOpen('pause')) openPause(); };
  document.addEventListener('visibilitychange', () => { if (document.hidden) background(); });
  window.addEventListener('pagehide', background);
  document.addEventListener('pause', background); // Cordova-style APK wrappers
  window.addEventListener('beforeunload', saveGame);
  on('save:error', () => toast('Không lưu được tiến trình. Hãy xuất mã sao lưu trong Cài đặt.', 'err', 6500));
  setInterval(() => { if (S.phase === 'sell' && SH.on && !document.hidden) saveGame(); }, 10000);
  window.addEventListener('error', (e) => console.error('[game]', e.error || e.message));
  window.addEventListener('unhandledrejection', (e) => console.error('[game]', e.reason));
  // Giữ trạng thái "đang tạm dừng" khi có modal pause
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const m = $('#modal .modal-back:last-child .modal-x'); m?.click(); } });
}

function exposeDebug() {
  if (!DEBUG) return;
  window.debugGame = {
    S, E, G, SH, flush: flushRender, counterFrame: () => frameSell(0, true),
    addMoney: (n = 1e6) => { S.money += n; markDirty('hud', 'cta'); },
    fillStock: (q = 30) => { for (const id of Object.keys(S.stock)) if (S.unlocked[id]) E.addStock(id, q); markDirty('panel', 'cta'); },
    unlockAll: () => { for (const id of Object.keys(S.unlocked)) { S.unlocked[id] = true; S.onMenu[id] = !['lyM', 'lyL', 'da', 'duong'].includes(id); } markDirty('view', 'panel', 'board'); },
    setDay: (d) => { S.day = d; E.ensureForecast(); markDirty('hud', 'view'); },
    skipTime: (sec) => { if (SH.on) SH.t = Math.min(SH.total, SH.t + sec); },
    speed: (v) => setSpeed(v),
    closeShop: () => G.closeNow(),
    nextDay: () => { G.nextDay(); },
    reset: () => { wipeSave(); emit('reset'); },
    save: saveGame,
    events: debugEvents,
    crush: crushDebug,
    pearl: pearlDebug,
  };
  console.info('%c🧋 debugGame sẵn sàng', 'color:#e8416a;font-weight:bold');
}

function boot() {
  initAudio();
  const loaded = loadGame();
  const resumed = G.restoreShiftRuntime();
  // Do not advance a restored shift while the intro covers the game.
  if (resumed) setPaused(true);
  E.ensureForecast();
  if (!S.eventId || !loaded) S.eventId = E.pickEvent();
  applyTheme();
  wire();
  exposeDebug();
  flushRender();
  startLoop();
  markDirty('hud', 'view', 'cta');
  flushRender();
  showIntro(() => {
    sfx('click');
    restartMusic();
    if (S.firstRun) { S.firstRun = false; S.started = true; armTutorial(); requestSave(); }
    markDirty('hud', 'view', 'cta');
    if (S.phase === 'end') setTimeout(openDaySummary, 350);
    else if (resumed) openPause();
    else if (S.phase === 'home') setTimeout(() => maybeTutorial('home'), 600);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
void applyVolumes; void setPaused; void closeAllModals; void bindActions; void fmtK;
