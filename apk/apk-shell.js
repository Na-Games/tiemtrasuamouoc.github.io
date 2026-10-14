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
