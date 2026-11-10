/* Chỉ dùng trong bản APK: xử lý nút Back Android (không nằm trong repo web). */
(function () {
  var C = window.Capacitor, App = C && C.Plugins && C.Plugins.App;
  if (!App || !C.isNativePlatform || !C.isNativePlatform()) return;
  App.addListener('backButton', function () {
    var top = document.querySelector('#modal .modal-back:last-child');
    if (top) {
      var x = top.querySelector('.modal-x');
      // Hộp thoại đóng được -> đóng; hộp thoại Tạm dừng (không có ✕) -> ẩn app
      if (x) x.click();
      else if (top.querySelector('.modal.pause')) App.minimizeApp();
      return;
    }
    var pause = document.querySelector('.hbtn.pause');
    if (pause && pause.offsetParent !== null) { pause.click(); return; }
    App.minimizeApp();
  });
})();

/* Quảng cáo Unity LevelPlay: tạo window.TTAds cho game (js/ads.js). ID lấy từ apk/ads-config.json qua js/ads-config.js. */
(function () {
  var C = window.Capacitor, L = C && C.Plugins && C.Plugins.LevelPlay;
  if (!L || !C.isNativePlatform || !C.isNativePlatform()) return;
  var cfg = window.TT_ADS_CONFIG || {};
  var rewardedOk = false, interOk = false, busy = false, done = null;

  L.addListener('rewardedLoaded', function () {
    rewardedOk = true;
    window.dispatchEvent(new Event('ttads:ready'));
  });
  L.addListener('rewardedDone', function (e) {   // chỉ trả thưởng khi đã xem đủ
    var cb = done; done = null; busy = false; rewardedOk = false;
    if (cb) cb(!!(e && e.earned));
  });
  L.addListener('interstitialLoaded', function () { interOk = true; });

  window.TTAds = {
    rewardedReady: function () { return rewardedOk && !busy; },
    showRewarded: function (cb) {
      if (!rewardedOk || busy) { cb(false); return; }
      busy = true; done = cb;
      L.showRewarded().catch(function () { busy = false; done = null; rewardedOk = false; cb(false); });
    },
    showInterstitial: function () {
      if (!interOk) return false;
      interOk = false;
      L.showInterstitial().catch(function () {});
      return true;
    },
  };

  L.init({ appKey: cfg.appKey, rewardedId: cfg.rewardedId, interstitialId: cfg.interstitialId }).catch(function () {});
})();
