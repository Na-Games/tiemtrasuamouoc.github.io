/* Loaded before the bundle; keep this file compatible with older WebViews. */
(function () {
  'use strict';
  if (!Object.fromEntries) {
    Object.fromEntries = function (entries) {
      var result = {};
      entries.forEach(function (entry) {
        Object.defineProperty(result, entry[0], { value: entry[1], enumerable: true, configurable: true, writable: true });
      });
      return result;
    };
  }
  // Decorative animations must never prevent serving a cup or completing a game.
  if (!Element.prototype.animate) {
    Element.prototype.animate = function (frames, options) {
      var animation = { onfinish: null, cancel: function () { clearTimeout(timer); } };
      var duration = typeof options === 'number' ? options : (options && options.duration) || 0;
      var delay = (options && options.delay) || 0;
      var timer = setTimeout(function () {
        if (animation.onfinish) animation.onfinish();
      }, duration + delay);
      return animation;
    };
  }
  // A fixed app height also works when dvh is unsupported or the keyboard opens.
  function resize() {
    var viewport = window.visualViewport;
    var height = viewport ? Math.min(window.innerHeight, viewport.height) : window.innerHeight;
    document.documentElement.style.setProperty('--app-height', height + 'px');
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', resize);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
}());
