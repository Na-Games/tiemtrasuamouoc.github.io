package com.tiemtramouoc.app;

import android.os.Handler;
import android.os.Looper;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.unity3d.mediation.LevelPlay;
import com.unity3d.mediation.LevelPlayAdError;
import com.unity3d.mediation.LevelPlayAdInfo;
import com.unity3d.mediation.LevelPlayConfiguration;
import com.unity3d.mediation.LevelPlayInitError;
import com.unity3d.mediation.LevelPlayInitListener;
import com.unity3d.mediation.LevelPlayInitRequest;
import com.unity3d.mediation.interstitial.LevelPlayInterstitialAd;
import com.unity3d.mediation.interstitial.LevelPlayInterstitialAdListener;
import com.unity3d.mediation.rewarded.LevelPlayReward;
import com.unity3d.mediation.rewarded.LevelPlayRewardedAd;
import com.unity3d.mediation.rewarded.LevelPlayRewardedAdListener;

/**
 * Cau noi Unity LevelPlay (ironSource) cho Capacitor. File nay nam trong apk\native\ va duoc build-apk.ps1 chep vao project.
 * JS goi qua Capacitor.Plugins.LevelPlay (xem apk-shell.js): init, showRewarded, showInterstitial.
 * Su kien gui nguoc ve JS: rewardedLoaded, rewardedLoadFailed, rewardedDone {earned}, interstitialLoaded.
 */
@CapacitorPlugin(name = "LevelPlay")
public class LevelPlayPlugin extends Plugin {
    private static final long RETRY_MS = 30000;
    private static final long REWARD_GRACE_MS = 1500;   // onAdRewarded va onAdClosed co the den lech thu tu

    private final Handler main = new Handler(Looper.getMainLooper());
    private LevelPlayRewardedAd rewarded;
    private LevelPlayInterstitialAd interstitial;
    private boolean inited = false, earned = false, closed = false, doneSent = true;
    private final Runnable giveUp = () -> sendDone();

    @PluginMethod
    public void init(PluginCall call) {
        final String appKey = call.getString("appKey", "");
        final String rewardedId = call.getString("rewardedId", "");
        final String interstitialId = call.getString("interstitialId", "");
        if (appKey.isEmpty()) { call.reject("Thieu appKey"); return; }
        if (inited) { call.resolve(); return; }
        getActivity().runOnUiThread(() -> {
            LevelPlayInitRequest req = new LevelPlayInitRequest.Builder(appKey).build();
            LevelPlay.init(getContext(), req, new LevelPlayInitListener() {
                @Override public void onInitSuccess(LevelPlayConfiguration config) {
                    inited = true;
                    setupRewarded(rewardedId);
                    setupInterstitial(interstitialId);
                    call.resolve();
                }
                @Override public void onInitFailed(LevelPlayInitError error) {
                    call.reject(error.getErrorMessage());
                }
            });
        });
    }

    private void setupRewarded(String id) {
        if (id.isEmpty()) return;
        rewarded = new LevelPlayRewardedAd(id);
        rewarded.setListener(new LevelPlayRewardedAdListener() {
            @Override public void onAdLoaded(LevelPlayAdInfo info) { notifyListeners("rewardedLoaded", new JSObject()); }
            @Override public void onAdLoadFailed(LevelPlayAdError error) { retryRewarded(); }
            @Override public void onAdDisplayed(LevelPlayAdInfo info) { }
            @Override public void onAdRewarded(LevelPlayReward reward, LevelPlayAdInfo info) {
                earned = true;
                if (closed) { main.removeCallbacks(giveUp); sendDone(); }
            }
            @Override public void onAdDisplayFailed(LevelPlayAdError error, LevelPlayAdInfo info) { closed = true; earned = false; sendDone(); }
            @Override public void onAdClosed(LevelPlayAdInfo info) {
                closed = true;
                if (earned) sendDone(); else main.postDelayed(giveUp, REWARD_GRACE_MS);
            }
        });
        rewarded.loadAd();
    }

    private void retryRewarded() {
        main.postDelayed(() -> { if (rewarded != null) rewarded.loadAd(); }, RETRY_MS);
    }

    private void sendDone() {
        if (doneSent) return;
        doneSent = true;
        JSObject o = new JSObject();
        o.put("earned", earned);
        notifyListeners("rewardedDone", o);
        if (rewarded != null) rewarded.loadAd();   // nap san quang cao tiep theo
    }

    private void setupInterstitial(String id) {
        if (id.isEmpty()) return;
        interstitial = new LevelPlayInterstitialAd(id);
        interstitial.setListener(new LevelPlayInterstitialAdListener() {
            @Override public void onAdLoaded(LevelPlayAdInfo info) { notifyListeners("interstitialLoaded", new JSObject()); }
            @Override public void onAdLoadFailed(LevelPlayAdError error) { main.postDelayed(() -> interstitial.loadAd(), RETRY_MS); }
            @Override public void onAdDisplayed(LevelPlayAdInfo info) { }
            @Override public void onAdDisplayFailed(LevelPlayAdError error, LevelPlayAdInfo info) { interstitial.loadAd(); }
            @Override public void onAdClosed(LevelPlayAdInfo info) { interstitial.loadAd(); }
        });
        interstitial.loadAd();
    }

    @PluginMethod
    public void isRewardedReady(PluginCall call) {
        JSObject o = new JSObject();
        o.put("ready", rewarded != null && rewarded.isAdReady());
        call.resolve(o);
    }

    @PluginMethod
    public void showRewarded(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            if (rewarded == null || !rewarded.isAdReady()) { call.reject("Chua co quang cao"); return; }
            earned = false; closed = false; doneSent = false;
            rewarded.showAd(getActivity());
            call.resolve();
        });
    }

    @PluginMethod
    public void showInterstitial(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            boolean ok = interstitial != null && interstitial.isAdReady();
            if (ok) interstitial.showAd(getActivity());
            JSObject o = new JSObject();
            o.put("shown", ok);
            call.resolve(o);
        });
    }
}
