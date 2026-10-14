# 🧋 Tiệm Trà Mơ Ước – Game 3

Game quản lý + pha chế tiệm trà sữa (HTML5/CSS/JS thuần), làm theo tài liệu thiết kế và `KICH-BAN.md`.

**Chơi:** mở `index.html` (không cần server). **Sửa code:** chỉnh `js/*.js` rồi chạy `build.bat` (cần Node.js) để gộp `js/bundle.js`.

- `KICH-BAN.md`: kịch bản chi tiết toàn bộ màn hình, luật chơi, số liệu.
- `js/config.js` dữ liệu · `core.js` hạ tầng/lưu/âm thanh · `econ.js` kho/giá/bonus · `sell.js` engine ca bán · `brewui.js` màn pha chế · `ui.js` vỏ giao diện · `home.js` + `panels1-3.js` 15 menu · `avatar.js` logo/tem · `minigames.js` Milk Tea Crush + Trân Châu Nổ.
- Debug (console): `debugGame.addMoney()`, `fillStock()`, `unlockAll()`, `setDay(n)`, `skipTime(s)`, `speed(n)`, `closeShop()`, `nextDay()`, `reset()`.
