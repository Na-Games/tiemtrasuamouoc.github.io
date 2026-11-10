/**
 * Cầu nối quảng cáo. window.TTAds chỉ có trong bản APK (do apk/apk-shell.js tạo);
 * trên web/file:// mọi hàm đều "không khả dụng" nên game chạy bình thường, không hiện nút quảng cáo.
 */
const INTERSTITIAL_GAP_MS = 3 * 60 * 1000;   // tối thiểu giữa 2 lần interstitial
const AFTER_REWARDED_MS = 2 * 60 * 1000;     // không chèn interstitial ngay sau khi người chơi vừa xem rewarded
const EVERY = { day: 2, game: 3 };           // day: cứ 2 lần sang ngày mới; game: cứ 3 ván mini game thì thử hiện 1 lần

let lastInterstitial = 0, lastRewarded = 0;
const counts = {};

const bridge = () => (typeof window !== 'undefined' ? window.TTAds : null);

/** Quảng cáo thưởng đã tải xong và sẵn sàng hiện. */
export const rewardedReady = () => { const b = bridge(); return !!(b && b.rewardedReady()); };

/** Hiện quảng cáo thưởng; chỉ gọi onReward khi người chơi xem đủ để nhận thưởng. */
export function showRewarded(onReward, onFail) {
  const b = bridge();
  if (!b || !b.rewardedReady()) { if (onFail) onFail(); return; }
  b.showRewarded((earned) => {
    if (earned) { lastRewarded = Date.now(); onReward(); } else if (onFail) onFail();
  });
}

/** Gọi khi sang ngày mới (kind 'day') hoặc hết một ván mini game (kind 'game'): thỉnh thoảng hiện interstitial, có giới hạn tần suất. */
export function maybeInterstitial(kind = 'day') {
  const b = bridge();
  if (!b) return;
  counts[kind] = (counts[kind] || 0) + 1;
  if (counts[kind] % (EVERY[kind] || 2)) return;
  const now = Date.now();
  if (now - lastInterstitial < INTERSTITIAL_GAP_MS || now - lastRewarded < AFTER_REWARDED_MS) return;
  if (b.showInterstitial()) lastInterstitial = now;
}
