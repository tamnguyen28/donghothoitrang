-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2021 at 05:02 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quanlydongho`
--

-- --------------------------------------------------------

--
-- Table structure for table `binhluan`
--

CREATE TABLE `binhluan` (
  `mabl` int(10) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_manv` int(10) NOT NULL,
  `id_masp` int(10) NOT NULL,
  `id_makh` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `masp` int(10) NOT NULL,
  `mahd` int(10) NOT NULL,
  `giatien` int(50) NOT NULL,
  `soluong` int(50) NOT NULL,
  `thanhtien` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `mahd` int(10) NOT NULL,
  `tennguoinhan` varchar(200) NOT NULL,
  `sdtnguoinhan` varchar(50) NOT NULL,
  `diachinguoinhan` varchar(200) NOT NULL,
  `tonghoadon` int(50) NOT NULL,
  `phuongthucthanhtoan` tinyint(1) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_makh` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` int(10) NOT NULL,
  `tenkh` varchar(200) NOT NULL,
  `diachi` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `tendangnhap` varchar(200) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lienhe`
--

CREATE TABLE `lienhe` (
  `malh` int(10) NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_manv` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `loainhanvien`
--

CREATE TABLE `loainhanvien` (
  `maloainv` int(10) NOT NULL,
  `tenloainv` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `maloai` int(10) NOT NULL,
  `tenloai` varchar(200) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`maloai`, `tenloai`, `trangthai`, `tgtao`) VALUES
(1, 'Đồng hồ nam', 1, '2021-05-15 16:19:30'),
(2, 'Đồng hồ nữ', 0, '2021-05-15 16:18:11');

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

CREATE TABLE `nhanvien` (
  `manv` int(10) NOT NULL,
  `tennv` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_maloainv` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` int(10) NOT NULL,
  `tensp` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `mota` varchar(1000) NOT NULL,
  `giatien` int(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_math` int(10) NOT NULL,
  `id_maloai` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `hinhanh`, `mota`, `giatien`, `trangthai`, `tgtao`, `id_math`, `id_maloai`) VALUES
(1, 'Đồng Hồ Nam Henry London HL41-JS-0188 Chiswick', '1.jpg', 'Vỏ đồng hồ: Thép không gỉ.\r\nMàu viền: Công nghệ mạ vàng IPG Pale Hamiton chân không, màu vàng sáng khác biệt, được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 41mm.\r\nĐộ dày mặt: 10mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị: Kim, Analogue.', 2929000, 1, '2021-05-16 02:21:38', 1, 1),
(2, 'ĐỒNG HỒ HENRY LONDON HL39-M-0097 CHANCERY', '2.jpg', 'Màu viền: Công nghệ mạ bạc sáng IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4025000, 1, '2021-05-15 16:58:28', 1, 1),
(3, 'ĐỒNG HỒ HENRY LONDON HL39-CS-0092 HAMPSTEAD', '3.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ vàng đồng IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Chronograph.', 5405000, 1, '2021-05-15 17:00:07', 1, 1),
(4, 'ĐỒNG HỒ NAM HENRY LONDON HL39-M-0029 KNIGHTSBRIDGE', '4.jpg', 'Màu viền: Công nghệ mạ bạc IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4025000, 1, '2021-05-15 17:02:04', 1, 1),
(5, 'ĐỒNG HỒ HENRY LONDON HL39-M-0136 STRATFORD', '5.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ vàng đồngIPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4485000, 1, '2021-05-15 17:03:39', 1, 1),
(6, 'ĐỒNG HỒ HENRY LONDON HL41-CS-0099 CHANCERY', '6.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ bạc IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Chronograph.', 4945000, 1, '2021-05-16 02:20:18', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `thuoghieu`
--

CREATE TABLE `thuoghieu` (
  `math` int(10) NOT NULL,
  `tenth` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `chitiet` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thuoghieu`
--

INSERT INTO `thuoghieu` (`math`, `tenth`, `hinhanh`, `chitiet`) VALUES
(1, 'Hãng đồng hồ Henry London', '1.jpg', 'Henry London là thương hiệu đồng hồ nổi tiếng đến từ Anh Quốc với phong cách vintage độc đáo, sang trọng, có thể khắc thông điệp yêu thương lên mặt sau, có kiểu dáng đơn giản nhưng vô cùng tinh tế, mang lại vẻ sang trọng và lịch lãm cho quý ông. Mặt đồng hồ có thiết kế hài hòa tạo nên vẻ thanh lịch.'),
(2, 'Hãng đồng hồ Thụy Sỹ Tag Heuer', '2.jpg', 'Một trong những thương hiệu đồng hồ Thụy Sỹ danh giá, Tag Heuer nổi tiếng với công nghệ chế tác đồng hồ thể thao cực đỉnh. Thương hiệu nhanh chóng đẩy tên tuổi của mình khi kết hợp với các giải thể thao uy tín, đua xe và nhà sản xuất đua xe. Không chỉ dừng lại với đồng hồ đeo tay cổ điển, đồng hồ thông minh (smartwatch) Tag Heuer cũng dần chiếm được thị phần của riêng mình. Nam giới yêu thích đồng hồ nam với thiết kế khỏe khoắn không thể bỏ qua dòng Formula One, Aquaracer hay Grand Carrera từ Tag Heuer.'),
(3, 'Hãng đồng hồ Rolex Swiss Made', '3.jpg', 'Một trong những thương hiệu đồng hồ cao cấp hay có thể nói là duy nhất trên thế giới được biến đến rộng rãi về mặt hình ảnh cũng như được yêu chuộng đó chính là Rolex. Đồng hồ Rolex được đánh giá cao về thiết kế cũng như chất lượng vượt thời gian. Đầu tư mua đồng hồ Rolex chính hãng được xem như một phi vụ đầu tư không sợ lỗ nếu bạn muốn bán và thay đổi mẫu mới. Sức sản xuất siêu mạnh với hơn 2000 chiếc đồng hồ mỗi ngày đã giúp Rolex trở thành thương hiệu đồng hồ cao cấp lớn nhất thế giới.'),
(4, 'Hãng đồng hồ Omega', '4.jpg', 'Luôn nằm trong bảng xếp hạng đồng hồ Thụy Sỹ nổi tiếng, Omega là cái tên không thể bỏ quên. Trải qua nhiều thăng trầm trong ngành công nghiệp chế tác đồng hồ, Omega ghi dấu danh tiếng của mình với chiếc đồng hồ du hành vũ trụ siêu cool. Những cỗ máy thời gian Omega cổ điển mạ vàng được giới sành điệu Việt Nam yêu chuộng hơn cả.'),
(5, 'Hãng đồng hồ Longines', '5.jpg', 'Tự hào với khả năng cho ra đời những sáng chế mang tính ứng dụng cao, bộ máy đo thời gian chính xác đếLongines là gương mặt thân quen trong những chương trình thể thao và mạo hiểm. Luôn nằm trong top đồng hồ Thụy Sỹ danh tiếng và lâu đời, thiết kế Longines mang đến sự sang trọng đẳng cấp đồng thời đậm nét tinh hoa Thụy Sỹ lâu năm. Sở hữu đồng hồ Longines Thụy Sỹ là sự đầu tư hợp lý với mức giá không hề đắt đỏ.'),
(6, 'Hãng đồng hồ Tissot', '6.jpg', 'Dân chơi có thú vui sưu tập đồng hồ không thể không biết đến Tissot với 164 năm tuổi đến từ Thụy Sỹ. Bề dày lịch sử đi cùng chất lượng tuyệt hảo, những cải tiến công nghệ và thiết kế đẳng cấp, Tissot nghiễm nhiên giữ vững vị trí trong lòng người mộ điệu. 2 bộ sưu tập được yêu thích từ Tissot là T-Classic mang dáng dấp cổ điển thanh lịch và T-Sport mang đến sự mạnh mẽ, thể thao.'),
(7, 'Hãng đồng hồ Timex', '7.jpg', 'Xen lẫn giữa các hãng đồng hồ nổi tiếng Thụy Sỹ, Nhật Bản thì thương hiễu đồng hồ Timex của Mỹ cũng tìm được cho mình vị trí riêng, khó nhầm lẫn. Thiết kế Timex mang đậm chất “Mỹ” bởi sự trẻ trung, pha chút bụi bặm cá tính phù hợp với các bạn nam, nữ trong độ tuổi 20+. Tính về độ bền và thiết kế, thương hiệu đồng hồ Mỹ Timex không hề thua kém thương hiệu lớn nào. Cùng với giá cả cạnh tranh thì Timex xứng đáng nằm trong bộ sưu tập đồng hồ công sở của bạn.'),
(8, 'Đồng hồ Calvin Klein', '8.jpg', 'Nhắc đến Calvin Klein thì không thể bỏ qua danh mục đồng hồ nữ cK danh giá. Thiết kế sang trọng, bộ máy đạt chuẩn Swiss made, đi cùng mức giá hợp lý là cách Calvin Klein tiếp cận khách hàng tiềm năng của mình. Chỉ từ 5 đến 10 triệu đồng bạn có thể sở hữu cho mình chiếc đồng hồ Calvin Klein sang chảnh, đẹp ngất ngây!'),
(9, 'Hãng đồng hồ Movado', '9.jpg', 'Nếu bạn yêu thích phong cách tối giản (minimalism) từ một chiếc đồng hồ thì Movado là hãng dđồng hồ dành cho bạn. Thiết kế mặt đồng hồ không nặng nề “phô trương” bộ máy phức tạp mà chỉ đơn thuần với kim chỉ giờ và những đường nét vát cong tinh tế cùng cách phối màu thời thượng. Tự hào nhận được hơn 200 giải thưởng quốc tế cho những thiết kế của mình, Movado xứng đáng là hãng đồng hồ Thụy Sỹ để bạnd đặt niềm tin về tính thời trang của nó.'),
(10, 'Hãng đồng hồ SEIKO', '10.jpg', 'Nam giới tìm kiếm một chiếc đồng hồ Nhật Bản cao cấp với thiết kế “chất phát ngất” thật chẳng khó nếu bạn biết đến SEIKO. Đứng đầu trong top 4 đồng hồ Nhật Bản Seiko, Citizen, Orient, Casio với điểm mạnh kết hợp linh hoạt giữa công nghệ mới mang tính năng hiện đại và thiết kế cơ khí truyền thống. Ưu thế được nhập khẩu chính thức về Việt Nam, bạn chẳng lo ngại mua phải đồng hồ Seiko giả nhái. Thiết kế mang đậm sự nam tính mạnh mẽ, đây là chiếc đồng hồ các chàng cần có ngay để “tạo nét” cùng đối phương.'),
(11, 'Hãng đồng hồ Citizen', '11.jpg', 'Citizen với tên gọi mang ý nghĩa toàn cầu, hãng đồng hồ đứng thứ 2 Nhật Bản có tham vọng mang sản phẩm của mình đến mọi ngóc ngách trên địa cầu. Citizen mở rộng thế mạnh sản xuất của mình từ đồng hồ máy cơ, đồng hồ pin, đồng hồ năng lượng mặt trời, phân khúc cao cấp đến bình dân đều được Citizen “phủ sóng”. Đặc biệt dòng máy Eco-Drive sử dụng năng lượng ánh sáng mặt trời ưu việt ghi dấu ấn mạnh mẽ với người dùng.'),
(12, 'Hãng đồng hồ Orient', '12.jpg', 'Nếu bạn yêu thích dòng đồng hồ máy cơ automatic với mức giá bình dân hơn so với đồng hồ Thụy Sỹ đắt đỏ thì Orient là lựa chọn sáng giá. Xu hướng thiết kế đơn giản, dễ dàng kết hợp với mọi loại trang phục từ công sở đến dạo phố, Orient dành được sự quan tâm của giới yêu đồng hồ tại Việt Nam.'),
(13, 'Hãng đồng hồ Casio', '13.jpg', 'Nói về độ bền và rẻ thì khó có hãng đồng hồ thế giới nào vượt qua được Casio. Casio Việt Nam gắn liền với nhiều thế hệ với chiếc đồng hồ điện tử chính xác từng giây. Không để bản thân bị tuột lại phía sau, Casio có riêng cho mình những dòng đồng hồ thể thao siêu ấn tượng với nhiều tính năng như G-Shock, Baby G, Casio Edifice, Sheen, Pro Treck.'),
(14, 'Hãng đồng hồ Fossil', '14.jpg', 'Fossil nổi tiếng với thế mạnh sản xuất quần áo và phụ kiện thời trang lớn nhất tại Mỹ. Mảng chính của Fossil đó là sản xuất các loại đồng hồ hiệu với mẫu mã đa dạng và thời trang. Phong cách đồng hồ Fossil chính hãng là sự tiếp thu từ truyền thống cổ điển kết hợp với công nghệ hiện đại ngày nay. Nếu như đồng hồ Fossil nam thu hút khách hàng với sự tinh tế và nổi bật từ những mẫu đồng hồ dây da sang trọng. Thì đồng hồ Fossil nữ lại quyến rủ với những mẫu đồng hồ bằng kim loại mạ vàng đầy quý phái.'),
(15, 'Hãng đồng hồ Michael Kors', '15.jpg', 'Michael Kors được biết đến như thương hiệu thời trang Mỹ chuyên về quần áo, thế nhưng ít người biết rằng mới đây, hãng đã mạnh dạng tấn công vào thị trường đồng hồ thông minh với Michael Kors Access. Đồng hồ thông minh Michael Kors được trang bị Android Wear với hai phiên bản là Michael Kors Access Dylan cho nam mang phong cách thể thao và Michael Kors Access Brashaw cho nữ quyến rũ.'),
(16, 'Hãng đồng hồ Ogival', '16.jpg', 'Được ưu ái với tên gọi “đồng hồ Thụy Sỹ dành cho người châu Á”. Mang cho mình cỗ máy Thụy Sỹ, Ogival nghiễm nhiên khẳng định chất lượng của mình. Đánh trúng tâm lý yêu thích những biểu tượng mang đậm nét văn hóa như linh vật phương Đông Lucky Fish, hãng đã đưa đến bộ sưu tập Skeleton chạm khắc lên mặt số được giới doanh nhân đặc biệt yêu thích. Ngoài ra, Ogival vẫn có nhiều mẫu đồng hồ Thụy Sỹ giá tương đồng đồng hồ Nhật Bản chỉ dưới 10 triệu đồng.'),
(17, 'Hãng đồng hồ OP: Olympia Star, Olym Pianus', '17.jpg', 'Đồng hồ OP là một trong những thương hiệu đồng hồ Thụy Sỹ giá rẻ hướng đến phân khúc thị trường đồng hồ giá rẻ Trung Quốc đầy cạnh tranh. Thương hiệu đồng hồ OP được chia thành 2 dòng là Olympia Star và Olym Pianus. Sự khác nhau cơ bản là Olympia Star lắp máy quartz của Thụy Sỹ, còn Olym Pianus lắp máy cơ của Nhật. Sở hữu phân khúc giá khá lý tưởng chỉ tầm 2 đến 6 triệu cùng thiết kế đồng hồ lịch lãm sang trọng, OP luôn nằm trong danh sách những chiếc đồng hồ nam được dùng làm quà tặng sinh nhật bạn trai, người yêu hay bạn gái.'),
(18, 'Hãng đồng hồ DW (Daniel Wellington)', '18.jpg', 'Daniel Wellington là hãng đồng hồ non trẻ của Thụy Điển nhưng đây gây được tiếng vang lớn trong ngành. Hãng đồng hồ DW được thành lập năm 2011, tên Daniel Wellington đặt teo tên của một du khách người Anh với phong cách du lịch bụi bặm. Chỉ sau hơn 4 năm hãng đã bán được hơn 1 triệu chiếc đồng hồ dù giá thành không phải quá rẻ. Đồng hồ DW trên thị trường hiện nay có mức giá từ gần 2 triệu đến 6 triệu đồng. Đây được xem là mức giá tầm trung bình tại thị trường Việt Nam.'),
(19, 'Hãng đồng hồ Anne Klein', '19.jpg', 'Đồng hồ Anne Klein thành lập năm 1968, bởi một người phụ nữ cùng tên rất nổi tiếng trong lịch sử ngành thời trang tại Mỹ. Với xuất phát điểm như vậy nên đồng hồ Anne Klein có thiết kế thời trang hơn là chú trọng vào tính năng hay công nghệ (nhưng cũng có khá ít phàn nàn về độ bền của đồng hồ Anne Klein). Vì vậy thương hiệu này được xếp vào nhóm đồng hồ thời trang. Khác với nhiều thương hiệu nêu trên, đồng hồ Anne Klein có mức giá chỉ vài triệu đồng. Rõ ràng mức giá này sẽ giúp nó dễ phổ biến ở thị trường Việt Nam hơn.'),
(20, 'Hãng đồng hồ Guess', '20.jpg', 'Guess là thương hiệu đồng hồ của Mỹ, có khả năng cạnh tranh tốt tại thị trường Việt Nam nhờ nằm ở phân khúc giá trung bình. Nhãn hiệu thời trang Guess thành lập năm 1981 tại California, Mỹ bởi 4 anh em người nhập cư từ Maroc là Georges, Armand, Paul, và Maurice Marciano. Ban đầu hãng chỉ sản xuất các mặt hàng thời trang, đến năm 1984 hãng mới cung cấp các mẫu mã đồng hồ. Các mẫu đồng hồ Guess được đánh giá là có thiết kế trẻ trung, năng động, chịu khó cập nhật theo các xu hướng thời trang mới.');

-- --------------------------------------------------------

--
-- Table structure for table `tintuc`
--

CREATE TABLE `tintuc` (
  `matt` int(10) NOT NULL,
  `tieude` varchar(100) NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_manv` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`mabl`),
  ADD KEY `binhluan_ibfk_1` (`id_manv`),
  ADD KEY `binhluan_ibfk_2` (`id_masp`),
  ADD KEY `binhluan_ibfk_3` (`id_makh`);

--
-- Indexes for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`masp`,`mahd`),
  ADD KEY `mahd` (`mahd`),
  ADD KEY `masp` (`masp`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`mahd`),
  ADD KEY `hoadon_ibfk_1` (`id_makh`);

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh`);

--
-- Indexes for table `lienhe`
--
ALTER TABLE `lienhe`
  ADD PRIMARY KEY (`malh`),
  ADD KEY `lienhe_ibfk_1` (`id_manv`);

--
-- Indexes for table `loainhanvien`
--
ALTER TABLE `loainhanvien`
  ADD PRIMARY KEY (`maloainv`);

--
-- Indexes for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`maloai`);

--
-- Indexes for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`manv`),
  ADD KEY `nhanvien_ibfk_1` (`id_maloainv`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`),
  ADD KEY `sanpham_ibfk_1` (`id_math`),
  ADD KEY `sanpham_ibfk_2` (`id_maloai`);

--
-- Indexes for table `thuoghieu`
--
ALTER TABLE `thuoghieu`
  ADD PRIMARY KEY (`math`);

--
-- Indexes for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`matt`),
  ADD KEY `tintuc_ibfk_1` (`id_manv`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `mabl` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `mahd` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `makh` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lienhe`
--
ALTER TABLE `lienhe`
  MODIFY `malh` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loainhanvien`
--
ALTER TABLE `loainhanvien`
  MODIFY `maloainv` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `maloai` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `manv` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masp` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `thuoghieu`
--
ALTER TABLE `thuoghieu`
  MODIFY `math` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `matt` int(10) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `binhluan`
--
ALTER TABLE `binhluan`
  ADD CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `nhanvien` (`manv`),
  ADD CONSTRAINT `binhluan_ibfk_2` FOREIGN KEY (`id_masp`) REFERENCES `sanpham` (`masp`),
  ADD CONSTRAINT `binhluan_ibfk_3` FOREIGN KEY (`id_makh`) REFERENCES `khachhang` (`makh`);

--
-- Constraints for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`id_makh`) REFERENCES `khachhang` (`makh`);

--
-- Constraints for table `lienhe`
--
ALTER TABLE `lienhe`
  ADD CONSTRAINT `lienhe_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `nhanvien` (`manv`);

--
-- Constraints for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `nhanvien_ibfk_1` FOREIGN KEY (`id_maloainv`) REFERENCES `loainhanvien` (`maloainv`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_math`) REFERENCES `thuoghieu` (`math`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`id_maloai`) REFERENCES `loaisanpham` (`maloai`);

--
-- Constraints for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `tintuc_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `nhanvien` (`manv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
