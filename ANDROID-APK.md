# Đóng gói Tiệm Trà Mơ Ước cho Android

## Build APK trực tiếp trên Windows

Project có kịch bản `build-apk.bat` và `apk/build-apk.ps1` để tạo ứng dụng Android bằng Capacitor. Chạy từ thư mục game:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\apk\build-apk.ps1 -ApkDir .. -NoReveal
```

File cài nhận được là `TiemTraMoUoc-debug.apk` ở thư mục cha của game. APK debug đã ký và cài trực tiếp được, yêu cầu Android 7.0 trở lên. Project Android và các công cụ build nằm riêng với tài nguyên web. Lần đầu cần tải Node.js, JDK 21, Android SDK và Gradle; các lần sau dùng lại bộ công cụ/cache có sẵn.

`-OutDir` chọn thư mục project Android; nên dùng đường dẫn không dấu trên Windows. `-ApkDir` chọn nơi nhận APK và hỗ trợ đường dẫn tiếng Việt. `-Portable` bỏ ghi ANDROID_HOME vào cấu hình người dùng (cần cung cấp sẵn công cụ và các biến môi trường trong phiên build). `-NoReveal` bỏ mở Explorer khi hoàn tất. `-Release` tạo bản release với khóa ký riêng theo hướng dẫn của script.

## ZIP đầu vào

Nén **nội dung** thư mục game để `index.html` nằm ngay ở gốc ZIP.
Giữ nguyên `js/`, `css/`, `assets/`, `manifest.json` và toàn bộ tài nguyên được tham chiếu.
Không chỉ nén riêng `index.html`. File chạy là `js/bundle.js`, đã build sẵn;
`js/compat.js` phải được nạp trước bundle. Sửa module JS thì chạy `build.bat` lại.

Game chơi được khi không có mạng; Google Fonts chỉ là phông chữ bổ sung,
không có mạng sẽ dùng phông hệ thống.

## Cấu hình trong công cụ tạo APK

- Bật JavaScript và DOM Storage/localStorage. Không xóa dữ liệu WebView khi đóng app.
- Dùng Android System WebView/Chrome 70 trở lên; nên cập nhật bản đang được hỗ trợ.
- Giữ cùng application ID, khóa ký và địa chỉ trang khi cập nhật APK để giữ tiến trình.
- Bật hỗ trợ chọn file ảnh (`WebChromeClient.onShowFileChooser`). HTML không tự
  mở thư viện ảnh được nếu wrapper không triển khai chức năng này.
- Cho phép âm thanh sau tương tác người dùng. Không cần tự động phát khi vừa mở app.
- Nút Back Android nên đóng hộp thoại hoặc tạm dừng ca trước khi thoát.

Nếu có mã Android, ưu tiên phục vụ tài nguyên bằng `WebViewAssetLoader` tại
`https://appassets.androidplatform.net/assets/www/index.html`, cùng cấu hình:

```kotlin
webView.settings.javaScriptEnabled = true
webView.settings.domStorageEnabled = true
webView.settings.mediaPlaybackRequiresUserGesture = true
```

Đặt game trong `assets/www/` và cấu hình `AssetsPathHandler` cùng `WebViewClient`
theo tài liệu bên dưới. Đây là hướng dẫn tích hợp, không phải một dự án Android
có thể build độc lập. Không cần bật truy cập toàn bộ file hoặc truy cập mạng từ file URL.

Nguồn Android chính thức:
- https://developer.android.com/develop/ui/views/layout/webapps/load-local-content
- https://developer.android.com/reference/android/webkit/WebSettings#setDomStorageEnabled(boolean)
- https://developer.android.com/reference/android/webkit/WebChromeClient#onShowFileChooser(android.webkit.WebView,%20android.webkit.ValueCallback,%20android.webkit.WebChromeClient.FileChooserParams)

## Những thay đổi hỗ trợ APK

- Đường dẫn CSS/JS không còn query phiên bản để wrapper tải tài nguyên cục bộ.
- Icon ly, bình trà, máy đóng nắp và topping sử dụng ảnh cục bộ trong `assets/sell/`.
  Không bỏ thư mục ảnh này khi tạo ZIP/APK.
  Bộ hình hiện tại là `kawaii-sheet.png`, được hiển thị theo từng vùng bằng SVG;
  hiệu ứng rót và giọt trà bắn sử dụng cùng sprite sheet. Món thiếu hình riêng dùng
  hình gần giống, tên món và luật tiêu hao nguyên liệu vẫn theo dữ liệu game.
- Bundle nhắm Chrome 70, kèm fallback cho `Object.fromEntries` và hiệu ứng animation.
- Chiều cao theo viewport thực tế, kể cả WebView chưa hỗ trợ `dvh`.
- Milk Tea Crush hỗ trợ Touch khi không có Pointer Events, hủy thao tác khi bị ngắt.
- Trân Châu Nổ có icon SVG riêng, bảng điểm/mục tiêu/combo, hiệu ứng nổ và điểm bay.
  Hiệu ứng nằm trong giao diện mini game và được dọn khi đóng; không cần tải icon từ mạng.
- Âm thanh có thể mở lại sau khi ứng dụng xuống nền và người dùng chạm lại.
- Sao chép có fallback và hướng dẫn sao chép thủ công khi WebView từ chối.
- Lưu ca đang bán, khôi phục khách/ly/thời gian và mở trạng thái tạm dừng khi chơi tiếp.
- Lưu mỗi 10 giây trong ca, khi xuống nền hoặc `pagehide`; báo lỗi nếu không lưu được.

Ca lưu ở phiên bản cũ không có snapshot vẫn trở về màn chuẩn bị như trước.
Android buộc dừng tiến trình có thể làm mất thao tác sau lần lưu gần nhất.

## Kiểm tra trên APK sau khi đóng gói

1. Tắt mạng, mở game, kiểm tra các menu và nhập nguyên liệu.
2. Mở ca, pha/giao ly, vào sảnh, chơi mini game bằng chạm và vuốt.
3. Đang có ly/khách: về màn hình Home Android, quay lại, tiếp tục ca.
4. Sau khi game đã lưu: đóng/mở lại app, kiểm tra tiền, kho, khách, ly và thời gian.
5. Bật âm thanh bằng thao tác chạm, kiểm tra lại sau khi xuống nền.
6. Chọn ảnh logo, sao chép và khôi phục mã tiến trình.
7. Cập nhật APK cùng khóa ký/application ID, kiểm tra tiến trình còn nguyên.

Nếu chỉ chọn ảnh hoặc lưu dữ liệu vẫn không hoạt động, cần sửa cấu hình/mã wrapper.
Không thể bảo đảm các quyền này bằng cách sửa HTML/JS đơn thuần.

## Toàn màn hình, thanh trạng thái tím và rung (cấu hình công cụ tạo APK)

Phần này nằm ở **ứng dụng bọc APK**, game (HTML/JS) không thay đổi được:

- **Viền tím phía trên**: đó là màu thanh trạng thái do công cụ tạo APK đặt (mặc định thường là màu tím).
  Trong công cụ: bật *Fullscreen / Immersive mode* và đặt màu thanh trạng thái thành **trong suốt** hoặc `#FDF3E4`.
  Nếu tự viết mã Android: `WindowCompat.setDecorFitsSystemWindows(window, false)`,
  ẩn `WindowInsetsCompat.Type.systemBars()` bằng `WindowInsetsControllerCompat`, và đặt
  `layoutInDisplayCutoutMode = LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES` để nội dung phủ cả vùng tai thỏ.
  Game đã khai báo `viewport-fit=cover` và dùng `env(safe-area-inset-*)` để chừa chỗ cho tai thỏ.
- **Rung**: WebView chỉ cho `navigator.vibrate()` hoạt động khi ứng dụng có quyền
  `<uses-permission android:name="android.permission.VIBRATE"/>`. Hãy bật quyền *Vibrate* trong công cụ tạo APK.
  Nếu công cụ có cầu nối JavaScript, game tự dùng thêm các hàm `Android.vibrate(ms)`, `AndroidBridge.vibrate(ms)`,
  `NativeBridge.vibrate(ms)` (hoặc Capacitor Haptics / Cordova `navigator.notification.vibrate`) khi có.
  Khi chọn mức rung trong Cài đặt mà thiết bị không rung, game hiện thông báo nhắc kiểm tra quyền này.
