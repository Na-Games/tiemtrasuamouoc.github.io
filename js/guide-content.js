/** Help content follows the visible controls; mapping stays out of player-facing copy. */
import { ITEMS, FLAVOR_BOTTLE, BANK, TAX } from './config.js';
import { esc } from './core.js';
import { icon } from './icons.js';
import { customerArt, stackArt, teaArt, toppingArt, sealerArt, cupSvg, staffArt } from './sell-art.js';

const cup = () => cupSvg({ fill: .95, tea: ITEMS.traSua.color, tops: [ITEMS.tcDen.color], lid: 'on', straw: true });
export function guideSections() {
  return [
    { id: 'prepare', ico: '🏪', title: 'Màn chuẩn bị', open: true, rows: [
      ['🪧', '<b>Biển hiệu</b>: chạm logo để đổi hình, chạm tên để sửa tên tiệm. Nhãn địa điểm mở <b>Khởi nghiệp</b>; nhãn <b>🏮 Sảnh Trà</b> mở quản lý bàn ghế.', '.shopcard'],
      ['🥤', '<b>Menu hôm nay</b>: hiển thị trà và topping đã mở khóa, đang bật trong menu, kèm giá và phụ thu size L. Sự kiện và lượng khách dự kiến nằm dưới các ô chức năng.', '#board'],
      ['🧭', '<b>Thanh nhóm</b>: 🏪 Tiệm · 📦 Kho · 📈 Phát triển · 👥 Xã hội · 🎀 Thêm. Chọn nhóm rồi chọn ô chức năng; thanh này hiện khi chuẩn bị và sau ca.', '#nav'],
      [icon('menu', 24), '<b>Cài đặt</b>: nút ba gạch ở góc trái khi chuẩn bị. Trong ca bán, vị trí này đổi thành nút <b>Tạm dừng</b>.', '#hud [data-act="settings"], #hud [data-act="pause"]'],
      [icon('book', 24), '<b>Hướng dẫn</b>: nút sách ở bên phải khi chuẩn bị. Trong ca bán, nút này đổi thành bánh răng để mở Cài đặt; vào Cài đặt → Hướng dẫn để đọc lại.', '#hud [data-act="guide"]'],
      ['🌦️', '<b>Dự báo</b>: chạm nhãn thời tiết, mùa và nhiệt độ ngay dưới Ngày để xem dự báo các ngày tới cùng sự kiện hôm nay.', '#hud .wx'],
      [icon('branch', 24), '<b>Chi nhánh</b>: nút hình ngôi nhà ở bên phải mở quản lý chi nhánh. Nút hình bộ thẻ bên cạnh mở <b>Sưu tầm</b>.', '#hud [data-act="branchTop"]'],
      ['🏮', '<b>Nút dưới cùng</b>: có kế hoạch mua thì hiện <b>Nấu & nhập</b>; chưa đủ kho thì hiện <b>⚠️ Chưa nấu…</b> và dẫn về Kho; đủ điều kiện thì hiện <b>Mở cửa ngày…</b>. Đây là các trạng thái theo kho và kế hoạch, không phải thứ tự bắt buộc.', '#cta'],
    ] },
    { id: 'stock', ico: '📦', title: 'Kho & nhập hàng', rows: [
      ['🫖', '<b>Kho</b> có tab 🫖 Trà, 🧋 Topping, 🥤 Dụng cụ và 🍓 Hương khi có hương được mở khóa. Các dòng hàng hiển thị tên, tồn kho, giá nhập và hạn dùng.', '.panel-in[data-tab="kho"]'],
      ['🔢', '<b>Ô số 0–999</b> là lượng muốn mua thêm, không phải tồn kho. Gõ số hoặc bấm −/+ để thay đổi 1 đơn vị; số 0 bỏ món khỏi kế hoạch. Dòng +N và chi phí là phần dự định nhập.', '.krow .stepper'],
      ['⏳', `<b>Hạn dùng</b>: dòng hàng ghi hạn còn lại của lô gần hết hạn nhất; mở <b>Hạn dùng từng lô</b> để xem chi tiết. Tồn từ hôm trước và phần nhập hôm nay được tách riêng. Hương: <b>1 chai pha ${FLAVOR_BOTTLE} ly</b>; tủ lạnh kéo dài hạn cho lô nhập mới.`, '.krow .life'],
      ['🛒', '<b>Nấu & nhập</b> xác nhận toàn bộ kế hoạch, trừ tổng tiền và thêm hàng vào kho. Nếu thiếu tiền, giao dịch không thực hiện. Đổi số lượng trước khi xác nhận chưa tiêu tiền.', '#cta [data-act="plan"]'],
      ['✅', '<b>Điều kiện mở cửa</b>: có ít nhất một loại trà đang bật trong menu, ly M hoặc ly L, đá và đường. <b>Topping không bắt buộc</b>; muốn bán topping thì cần có hàng và bật trong menu.', '#cta [data-act="open"]'],
      ['🪴', '<b>Vườn cây</b>: mở ô đất, chọn cây, tưới và thu hoạch khi đủ tiến độ. <b>Thú cưng</b>: nhận nuôi và chăm sóc bằng các nút trong panel.', '.tile[data-tab="vuon"], .tile[data-tab="thucung"]'],
    ] },
    { id: 'brew', ico: '🧋', title: 'Bán hàng · từ đọc đơn đến giao ly', open: true, rows: [
      [customerArt('vanPhong'), '<b>1. Đọc đơn</b>: chọn khách trong hàng chờ. Khung order ghi yêu cầu cỡ ly, trà, hương và topping. Vòng avatar và thanh KIÊN NHẪN giảm khi chờ; cạn thì khách bỏ đi. Nội dung dài có thể cuộn đọc.', '#qrow, #cbub'],
      ['✖', '<b>Từ chối</b>: nút đỏ trong khung order bỏ đơn của khách đang chọn. Đây là từ chối phục vụ, không phải nút sửa hoặc đóng khung order.', '#cbub [data-act="reject"]'],
      [stackArt('M'), '<b>2. Lấy ly</b>: chạm chồng M hoặc L ở QUẦY TRÀ đúng yêu cầu. Trừ một ly khỏi kho và đặt lên bàn PHA LY; chỉ có một ly trên bàn tại một thời điểm.', '.stacks'],
      [teaArt('traSua'), '<b>3. Chọn trà và rót</b>: chạm bình để bắt đầu, chạm lại khi đang rót để dừng. Ly đi dưới vòi; dòng trà và mức nước tăng theo thao tác. Canh thanh rót tới vùng vàng, tránh thiếu hoặc tràn.', '#disps, #stream, #pourbar'],
      ['🍓', '<b>4. Thêm hương</b>: nếu đơn có yêu cầu, chạm nút hương trong hàng HƯƠNG <b>dưới khu PHA LY, phía trên các khay topping</b>. Mỗi ly chọn một hương và tiêu hao một phần nguyên liệu.', '#flavs'],
      [toppingArt('tcDen'), '<b>5. Thêm topping</b>: chạm khay đúng món; hạt bay vào ly và kho giảm một phần. Không thêm trùng một loại, tối đa <b>4 loại topping</b> mỗi ly. Món khóa hoặc tắt menu không dùng được.', '#trays'],
      [sealerArt(), '<b>6. Đóng nắp</b>: mỗi ly dùng một phần đá và một phần đường. Có thể chạm nút Đá/Đường dưới PHA LY; khi đóng nắp tự thêm phần còn thiếu, không trừ lại phần đã thêm. Thiếu kho thì chưa đóng được. Khi đã có trà, chạm máy để ép nắp; chờ hoàn tất.', '#sealer'],
      [cup(), '<b>7. Giao khách</b>: ly hoàn thành có nắp và ống hút; <b>chạm ly</b> trên PHA LY để giao khách đang chọn. Ly bay tới khách, tiền và đánh giá cập nhật theo kết quả. Ly sai có thể bị từ chối hoặc mua giá thấp.', '#cupslot[data-act="boardTap"]'],
      ['🗑️', '<b>Pha sai</b>: chạm thùng rác để bỏ ly rồi lấy ly mới. Nguyên liệu đã dùng không được hoàn lại; thao tác được ghi vào hao phí.', '[data-act="trash"]'],
      ['📱', '<b>Online</b>: số trên điện thoại là số đơn chờ. Chạm để xem và nhận đơn. Khả năng nhận đơn phụ thuộc mở khóa ứng dụng, đánh giá và địa điểm; nhân viên online chỉ xử lý đơn online.', '[data-act="phone"]'],
      ['⭐', '<b>Chấm sao</b>: sai trà −3, sai size −2, sai/thiếu/thừa hương −1; thiếu hoặc thừa topping trừ tối đa 2. Rót dưới 75%, có trà tràn hoặc kiên nhẫn còn dưới 20%: mỗi lỗi −1. Khách khó tính có thể trừ thêm; kết quả giới hạn 1–5 sao.', '#patBar, #pbFill'],
      [icon('pause', 24), '<b>Tạm dừng</b>: nút hai vạch ở góc trái tạm dừng ca. Chơi tiếp để quay lại, hoặc chọn Đóng cửa hôm nay để kết thúc sớm; khách đang chờ sẽ ra về.', '#hud [data-act="pause"]'],
    ] },
    { id: 'lobby', ico: '🏮', title: 'Sảnh & tổng kết', rows: [
      ['🪑', '<b>Ra sảnh →</b>: nút cuối quầy chuyển sang sảnh, kèm số bàn đang có khách/tổng số bàn. Chọn quay lại quầy để tiếp tục pha.', '#lobbyGo'],
      ['🧹', '<b>Dọn bàn</b>: bàn bẩn cần dọn để tiếp khách mới. Số bàn phụ thuộc trang bị sảnh; khách dùng tại quán có thể boa thêm.', '.tile[data-tab="sanh"]'],
      ['📊', '<b>Cuối ca</b>: xem Tổng kết ngày để biết doanh thu, boa, khách và chi phí. Trong nhóm Tiệm, Tổng kết xem lịch sử; Đánh giá xem các nhận xét đã ghi nhận.', '.tile[data-tab="tongket"], .tile[data-tab="danhgia"]'],
    ] },
    { id: 'development', ico: '📈', title: 'Phát triển', rows: [
      ['🛠️', '<b>Nâng cấp</b>: mở khóa nguyên liệu, nâng trang bị và decor. Mỗi mục ghi giá, cấp hiện tại và tác dụng; đạt cấp tối đa thì không thể mua thêm.', '.tile[data-tab="nangcap"]'],
      ['🔌', '<b>Trang bị trên quầy</b>: kéo hàng icon dưới Đá/Đường và chạm để xem tác dụng cấp hiện tại. Khi mất điện, xác nhận bật máy phát: C1 chạy đèn và máy đóng nắp; C2 chạy cả bình trà. Khi đoàn kiểm tra đến, xác nhận xuất trình giấy phép hoặc kiểm tra vệ sinh.', '.equip-strip'],
      [staffArt('thuViec'), '<b>Nhân sự hỗ trợ</b>: Lâm Phước rót trà, thêm hương/đường/đá; bạn lấy ly, thêm topping và đóng nắp. Đinh Nhân thêm cả topping; bạn lấy ly và đóng nắp. Hãy đợi nhân viên pha xong rồi thao tác.', '.tile[data-tab="nhansu"]'],
      [staffArt('online'), '<b>Nhân sự tự phục vụ</b>: nhân viên pha chế, Gen Z và ca đêm xử lý trọn đơn theo điều kiện riêng; nhân viên online chỉ làm đơn online. Điều kiện thuê, lương và các giới hạn được ghi tại từng thẻ.', '.panel-in[data-tab="nhansu"]'],
      ['🏢', '<b>Chi nhánh</b>: thuê mở chi nhánh, điều chỉnh nhân viên và xem báo cáo. Nhượng quyền có điều kiện đánh giá/followers riêng. Thu nhập và chi phí chuỗi cập nhật theo ngày.', '.tile[data-tab="chinhanh"]'],
      ['🗺️', '<b>Khởi nghiệp</b>: đổi địa điểm khi chưa trong ca bán. Mỗi nơi có giá mở, lượng khách, chi phí và tác động khác nhau; xem mô tả trước khi xác nhận.', '.tile[data-tab="khoinghiep"]'],
      ['💵', '<b>Giá bán</b> ở nhóm Tiệm: chỉnh trà, hương, topping và phụ thu L. Giá cao có thể giảm lượng khách; ngưỡng và giới hạn phụ thuộc loại món và nhân viên hỗ trợ giá.', '.tile[data-tab="giaban"]'],
    ] },
    { id: 'social', ico: '👥', title: 'Xã hội & Thêm', rows: [
      ['📱', '<b>Mạng Xã Hội</b>: chạy tối đa một chiến dịch quảng cáo; quay video theo số lượt chiến dịch cho phép. Theo dõi followers, bài đăng và thưởng lượng khách trong panel.', '.tile[data-tab="mxh"]'],
      ['👥', '<b>Bạn bè</b>: nhập mã mời, thăm quán nhận quà một lần/ngày cho mỗi bạn và xem bảng tài sản. Danh sách, tên và số liệu bạn bè hiện được lưu/mô phỏng trong game, chưa đồng bộ tài khoản trực tuyến.', '.tile[data-tab="banbe"]'],
      ['📜', `<b>Thuế & Bank</b> trong Thêm: đóng thuế để kích hoạt thưởng ${TAX.hours} giờ, gửi tiết kiệm và rút tiền. Rút sớm chỉ nhận gốc; đủ ${BANK.lockShifts} ca bán theo tiến độ kỳ hạn mới được nhận cả lãi.`, '.tile[data-tab="thue"]'],
      [icon('collect', 24), '<b>Sưu tầm</b> trong Thêm hoặc nút bộ thẻ trên thanh đầu màn hình: xem bộ sưu tập và thực hiện các thao tác đang được mở trong panel.', '.tile[data-tab="suutam"], #hud [data-act="collectTop"]'],
    ] },
    { id: 'games', ico: '🍬', title: 'Thêm · Trò chơi', rows: [
      ['🍬', '<b>Milk Tea Crush</b>: vào Thêm → Milk Tea Crush, đổi chỗ hai ô kề nhau để ghép ít nhất 3 icon. Hoàn thành mục tiêu trong số lượt cho phép; ghép đặc biệt tạo hàng/cột, cá, bom hoặc cầu vồng. Qua màn cộng 1% doanh thu vĩnh viễn, tối đa 50%.', '.panel-in [data-act="crush"]'],
      [toppingArt('tcNo'), '<b>Trân Châu Nổ</b>: cùng panel trò chơi, chạm nhóm từ 2 viên cùng màu kề nhau. Mục tiêu 120 điểm trong 30 giây; nổ tiếp trong 1,2 giây tăng combo. Điểm = số viên² × combo; thưởng tiền và nguyên liệu theo kết quả.', '.panel-in [data-act="pearl"]'],
      ['⏱️', '<b>Lượt Trân Châu Nổ</b>: tối đa 3 lượt/ngày, tính khi bấm Bắt đầu. Mở màn giới thiệu chưa tiêu lượt. Xem điểm, kỷ lục, combo và tiến độ mục tiêu ngay trong ván.', '#pBody [data-act="start"]'],
    ] },
    { id: 'settings', ico: icon('settings', 24), title: 'Cài đặt & lưu tiến trình', rows: [
      ['🎨', '<b>Màu giao diện và rung</b>: chọn trong Cài đặt. Rung phụ thuộc thiết bị và quyền rung của ứng dụng bọc APK.', '[data-act="theme"], [data-act="haptic"]'],
      ['🎵', '<b>Nhạc và SFX</b>: chỉnh âm lượng riêng; nút loa tắt/bật từng kênh. Nhạc nền & Mùa có 🎧 Lofi, 🎉 Vui nhộn, 🌸 Xuân, ☀️ Hạ, 🍂 Thu, ❄️ Đông hoặc Tắt nhạc.', '[data-act="style"]'],
      ['🧭', '<b>Chỉ dẫn từng bước</b> bật/tắt dòng nhắc thao tác trên quầy. Hướng dẫn lần đầu làm sáng từng vùng là phần riêng, gồm 15 bước chuẩn bị và các bước trong ca bán.', '[data-act="hints"], #coach'],
      ['⏱️', '<b>Thời gian bán mỗi ngày</b>: chọn thời lượng ca trong Cài đặt; thay đổi áp dụng khi mở ca tiếp theo.', '[data-act="shiftMin"]'],
      ['💾', '<b>Lưu tiến trình</b>: game tự lưu trên thiết bị. Dùng xuất/nhập mã sao lưu hoặc khôi phục trong Cài đặt để giữ tiến trình khi đổi trình duyệt hay cài lại ứng dụng.', '[data-act="export"], [data-act="import"]'],
    ] },
  ];
}

export function guideHTML() {
  return guideSections().map((s) => `<details class="g-det" data-guide-section="${s.id}"${s.open ? ' open' : ''}><summary>${s.ico} ${esc(s.title)}</summary><ul class="g-list">${s.rows.map(([ico, body, target]) => `<li data-guide-target="${esc(target)}"><span class="g-art" aria-hidden="true">${ico}</span><div>${body}</div></li>`).join('')}</ul></details>`).join('');
}
