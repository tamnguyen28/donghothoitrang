-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th5 21, 2021 lúc 06:59 PM
-- Phiên bản máy phục vụ: 8.0.24
-- Phiên bản PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `donghothoitrang`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

DROP TABLE IF EXISTS `binhluan`;
CREATE TABLE `binhluan` (
  `mabl` int NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_manv` int NOT NULL,
  `id_masp` int NOT NULL,
  `id_makh` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitiethoadon`
--

DROP TABLE IF EXISTS `chitiethoadon`;
CREATE TABLE `chitiethoadon` (
  `masp` int NOT NULL,
  `mahd` int NOT NULL,
  `giatien` int NOT NULL,
  `soluong` int NOT NULL,
  `thanhtien` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
CREATE TABLE `hoadon` (
  `mahd` int NOT NULL,
  `tennguoinhan` varchar(200) NOT NULL,
  `sdtnguoinhan` varchar(50) NOT NULL,
  `tonghoadon` int NOT NULL,
  `phuongthucthanhtoan` tinyint(1) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_makh` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE `khachhang` (
  `makh` int NOT NULL,
  `tenkh` varchar(200) NOT NULL,
  `diachi` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `tendangnhap` varchar(200) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lienhe`
--

DROP TABLE IF EXISTS `lienhe`;
CREATE TABLE `lienhe` (
  `malh` int NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_manv` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loainhanvien`
--

DROP TABLE IF EXISTS `loainhanvien`;
CREATE TABLE `loainhanvien` (
  `maloainv` int NOT NULL,
  `tenloainv` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaisanpham`
--

DROP TABLE IF EXISTS `loaisanpham`;
CREATE TABLE `loaisanpham` (
  `maloai` int NOT NULL,
  `tenloai` varchar(200) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `loaisanpham`
--

INSERT INTO `loaisanpham` (`maloai`, `tenloai`, `trangthai`, `tgtao`) VALUES
(1, 'Đồng hồ nam', 1, '2021-05-15 16:19:30'),
(2, 'Đồng hồ nữ', 0, '2021-05-15 16:18:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
CREATE TABLE `nhanvien` (
  `manv` int NOT NULL,
  `tennv` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_maloainv` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham` (
  `masp` int NOT NULL,
  `tensp` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `mota` varchar(1000) NOT NULL,
  `giatien` int NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_math` int NOT NULL,
  `id_maloai` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `hinhanh`, `mota`, `giatien`, `trangthai`, `tgtao`, `id_math`, `id_maloai`) VALUES
(1, 'Đồng Hồ Nam Henry London HL41-JS-0188 Chiswick', '1.jpg', 'Vỏ đồng hồ: Thép không gỉ.\r\nMàu viền: Công nghệ mạ vàng IPG Pale Hamiton chân không, màu vàng sáng khác biệt, được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 41mm.\r\nĐộ dày mặt: 10mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị: Kim, Analogue.', 2929000, 1, '2021-05-16 02:21:38', 1, 1),
(2, 'ĐỒNG HỒ HENRY LONDON HL39-M-0097 CHANCERY', '2.jpg', 'Màu viền: Công nghệ mạ bạc sáng IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4025000, 1, '2021-05-15 16:58:28', 1, 1),
(3, 'ĐỒNG HỒ HENRY LONDON HL39-CS-0092 HAMPSTEAD', '3.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ vàng đồng IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Chronograph.', 5405000, 1, '2021-05-15 17:00:07', 1, 1),
(4, 'ĐỒNG HỒ NAM HENRY LONDON HL39-M-0029 KNIGHTSBRIDGE', '4.jpg', 'Màu viền: Công nghệ mạ bạc IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4025000, 1, '2021-05-15 17:02:04', 1, 1),
(5, 'ĐỒNG HỒ HENRY LONDON HL39-M-0136 STRATFORD', '5.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ vàng đồngIPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4485000, 1, '2021-05-15 17:03:39', 1, 1),
(6, 'ĐỒNG HỒ HENRY LONDON HL41-CS-0099 CHANCERY', '6.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ bạc IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Chronograph.', 4945000, 1, '2021-05-16 02:20:18', 1, 1),
(7, 'Đồng hồ nữ SENARO Crystal 66011L.AWA thương hiệu Nhật Bản', '7.jpg', 'Mã sản phẩm: 66011L.AWA\r\nDây đeo bằng hợp kim \r\nĐộ dày mặt: 8mm\r\nĐộ dài có thể điều chỉnh: 150-205mm\r\nVỏ thép không gỉ \r\nChiếc đồng hồ sử dụng mặt kính saphia và bộ máy MIYOTA của Nhật Bản\r\nĐường kính mặt: 32mm\r\nKhả năng chịu nước đến 30 mét', 1224000, 1, '2021-05-19 06:19:55', 4, 2),
(8, 'Đồng hồ nữ Freelook Empire Greca Watch FL6006 - Lamy watch', '8.jpg', 'Thiết kế tại Paris nước Pháp\r\nThương hiệu: FREELOOK\r\nĐường kính mặt: 34mm\r\nMàu mặt: Màu đỏ\r\nChất liệu mặt kính: Mineral\r\nChất liệu vỏ: Hợp kim 316L\r\nChất liệu dây đeo: Dây da\r\nChống nước: 5 ATM', 1599000, 1, '2021-05-18 05:08:28', 3, 2),
(9, 'Đồng hồ nữ Freelook Grande Classique watch FL5902 - Lamy watch', '9.jpg', 'Thiết kế tại Paris nước Pháp\r\nThương hiệu: FREELOOK\r\nĐường kính mặt: 34mm\r\nMàu mặt: Màu trắng bạc \r\nChất liệu mặt kính: Mineral\r\nChất liệu vỏ: Hợp kim 316L\r\nChất liệu dây đeo: Hợp kim đan\r\nChống nước: 5 ATM', 1599000, 1, '2021-05-18 05:19:14', 3, 2),
(10, 'Đồng hồ nữ SENARO Petite Pavé Gold Tone thương hiệu Nhật Bản', '10.jpg', 'Mã sản phẩm: 5003L - 3073L\r\nDây đeo bằng hợp kim \r\nChiều rộng dây: 12mm\r\nĐộ dài có thể điều chỉnh: 150-205mm\r\nChất liệu Vỏ máy và dây: Hợp kim thép không rỉ 316L, mạ vàng theo công nghệ hiện đại nhất hiện nay công nghệ mạ PVD\r\nChiếc đồng hồ sử dụng mặt kính saphia và bộ máy MIYOTA của Nhật Bản\r\nĐường kính mặt: 28mm\r\nKhả năng chịu nước đến 3ATM', 2255000, 1, '2021-05-19 06:20:52', 4, 2),
(11, 'Đồng hồ nữ Freelook Magical Labyrinth Watch FL4906 - LAMY WATCH', '11.jpg', 'Thiết kế tại Paris nước Pháp\r\nThương hiệu: FREELOOK\r\nĐường kính mặt: 33mm\r\nMàu mặt: Trắng\r\nChất liệu mặt kính: Kính cứng\r\nChất liệu vỏ: Hợp kim 316L\r\nChất liệu dây đeo: Hợp kim 316L\r\nChống nước: 5 ATM', 2032000, 1, '2021-05-18 06:47:46', 3, 2),
(12, 'Đồng hồ nữ SUNRISE 9950SA SIÊU MỎNG Kính Sapphire chống xước ', '12.jpg', 'Tên sản phẩm : SUNRISE \r\nMã SP: 9950SA\r\nĐồng hồ Sunrise dạng lắc tay vừa có thể xem giờ vừa là trang sức cho bạn nữ\r\nKích thước mặt: 28mm\r\nCó thể thâu cắt dây theo chiều rộng của tay \r\nChất liệu kính: Kính Sapphire hạn chế trầy xước.\r\nKích thước dây: 16cm, vòng 21cm\r\nHoạt động 3 kim (giờ, phút, giây)\r\nChất liệu dây: dây thép không gỉ sáng và bền màu,14cm đến 21cm\r\nChống nước 30m', 1068000, 1, '2021-05-19 04:25:12', 5, 2),
(13, 'Đồng Hồ Nam CRNAIRA CR491 Chạy 5 Kim Doanh NHân 2020 Dây thép mành cao cấp', '13.jpg', 'Thương hiệu: CRNAIRA\r\nKiểu máy: Quartz (máy Nhật)\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu dây: Dây thép không gỉ\r\nChất liệu mặt trước: Kính cứng pha khoáng, \r\nKích thước mặt:40 x 11 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nSố Kim: Chạy 4 kim (LỊCH XEM NGÀY, Lịch thứ ) \r\nKhả năng chịu nước: 3 ATM (rửa tay, đi mưa, ok... Nên tránh tiếp xúc với hóa chất như xà phòng, nước tẩy rửa, không mang khi bơi lội... Của bền tại người nâng niu giữ gìn)\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1235000, 1, '2021-05-19 02:13:13', 6, 1),
(14, 'Đồng Hồ Nam Crnaira Japan C3079 Siêu Mỏng Dây Thép Lụa Cao Cấp_full box', '14.jpg', 'Kiểu máy: Quartz\r\nChất liệu vỏ: Thép không gỉ\r\nChất liệu dây: Thép không gỉ\r\nChất liệu mặt trước: Kính cứng pha khoáng, tráng shaphire\r\nKích thước mặt: 40 x 6 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nĐộ chịu nước: 3ATM – Rửa tay, đi mưa, rửa xe\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1125000, 1, '2021-05-19 02:16:10', 6, 1),
(15, 'Đồng Hồ Nam FNGEEN FN011 Doanh Nhân 2019 Dây Thép Không Gỉ Cao Cấp_FULL BOX', '15.jpg', 'Thương hiệu: FNGEEN\r\nKiểu máy: Quartz\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu dây: Dây thép không gỉ\r\nChất liệu mặt trước: Kính cứng pha khoáng, \r\nKích thước mặt: 41 x 10 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nSố Kim: Chạy 3 kim ( LỊCH XEM NGÀY) “ Lưu Ý:Sản phẩm chạy 3 kim các kim nhỏ trang trí”\r\nKim đồng hồ  có dạ quang trong điều kiện ánh sáng yếu\r\nKhả năng chịu nước: 3 ATM (rửa tay, đi mưa, ok... Nên tránh tiếp xúc với hóa chất như xà phòng, nước tẩy rửa, không mang khi bơi lội... Của bền tại người nâng niu giữ gìn)\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1221000, 1, '2021-05-19 02:20:07', 7, 1),
(16, 'Đồng Hồ Nam FOURRON F666 Doanh Nhân CHạy 2 Lịch Sang Trọng Dây Da Cao Cấp', '16.jpg', 'Thương hiệu: FOURRON\r\nKiểu máy: Quartz (máy Nhật)\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu dây: DA DA PU\r\nChất liệu mặt trước: Kính cứng pha khoáng, \r\nKích thước mặt: 39 x 9 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nSố Kim: Chạy 3 kim (LỊCH XEM NGÀY VÀ LỊCH THỨ) “ Lưu Ý: Lịch thứ có 2 ngôn ngữ anh và trung nên các bạn tùy chỉnh thoải mãi ngôn ngữ m thích”\r\nKhả năng chịu nước: 3 ATM (rửa tay, đi mưa, ok... Nên tránh tiếp xúc với hóa chất như xà phòng, nước tẩy rửa, không mang khi bơi lội... Của bền tại người nâng niu giữ gìn)\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1150000, 1, '2021-05-19 02:25:25', 8, 1),
(17, 'Đồng Hồ Nam FNGEEN FE2081 Doanh Nhân 2019 Mặt Đính Đá Dây Thép Không Gỉ Cao Cấp', '17.jpg', 'Thương hiệu: FNGEEN\r\nSản xuất tại: Hồng Kông\r\nKiểu máy: Quartz, \r\nDành cho: Nam\r\nKích thước mặt: 40 mm x 10 mm\r\nKích thước dây: Dài x rộng: 24 x 2.0 cm\r\nSố kim: 3 kim chạy,  (có Lịch xem ngày)\r\nChịu nước: 3ATM đi mưa rửa tay', 1115000, 1, '2021-05-19 02:30:04', 7, 1),
(18, 'Đồng hồ nam dây kim loại Casio Standard chính hãng Anh Khuê MTP-VT01D-1BUDF', '18.jpg', 'Kích thước vỏ: 46mm x 40mm x 8,2mm\r\nTổng trọng lượng: 88g\r\nChốt gập ba\r\nDây đeo bằng thép không gỉ\r\nMặt kính khoáng\r\nChống nước\r\nGiờ hiện hành thông thường\r\nĐồng hồ kim: 3 kim (giờ, phút, giây)\r\nĐộ chính xác: ±20 giây một tháng\r\nTuổi thọ pin xấp xỉ: 3 năm với pin SR626SW', 1846000, 1, '2021-05-19 02:36:24', 13, 1),
(19, 'Đồng hồ kim dây da giản dị thời trang cho nữ', '19.jpg', 'Dành cho: Phụ nữ\r\nPhong cách hợp thời trang\r\nMáy đồng hồ: Quartz\r\nHình dạng mặt đồng hồ: Tròn\r\nĐường kính mặt đồng hồ: 3.5CM\r\nChiều dài dây đeo: 24cm\r\nChiều rộng dây: 1.6 cm\r\nĐộ dày vỏ: 8 mm\r\nChất liệu dây đeo: da\r\nChất liệu vỏ: Inox\r\nKhông thấm nước: Không thấm nước\r\nGói hàng bao gồm: 1 Chiếc Đồng hồ đeo tay nữ', 2900000, 1, '2021-05-19 03:07:55', 9, 2),
(20, 'Dồng hồ kim dây da DI5698H giản dị thời trang cho nữ', '20.jpg', 'Dành cho: Phụ nữ\r\nPhong cách hợp thời trang\r\nMáy đồng hồ: Quartz\r\nHình dạng mặt đồng hồ: Tròn\r\nĐường kính mặt đồng hồ: 3.5CM\r\nChiều dài dây đeo: 24cm\r\nChiều rộng dây: 1.6 cm\r\nĐộ dày vỏ: 8 mm\r\nChất liệu dây đeo: da\r\nChất liệu vỏ: Inox\r\nKhông thấm nước: Không thấm nước\r\nGói hàng bao gồm: 1 Chiếc Đồng hồ đeo tay nữ', 1600000, 1, '2021-05-19 03:11:20', 9, 2),
(21, 'Dồng hồ kim dây da DI58942 giản dị thời trang cho nữ', '21.jpg', 'Dành cho: Phụ nữ\r\nPhong cách hợp thời trang\r\nMáy đồng hồ: Quartz\r\nHình dạng mặt đồng hồ: Tròn\r\nĐường kính mặt đồng hồ: 3.5CM\r\nChiều dài dây đeo: 24cm\r\nChiều rộng dây: 1.6 cm\r\nĐộ dày vỏ: 8 mm\r\nChất liệu dây đeo: da\r\nChất liệu vỏ: Inox\r\nKhông thấm nước: Không thấm nước\r\nGói hàng bao gồm: 1 Chiếc Đồng hồ đeo tay nữ', 1890000, 1, '2021-05-19 03:12:16', 9, 2),
(22, 'Đồng hồ mặt kim loại nhã nhặn dành cho nữ DIMINI', '22.jpg', 'Kiểu chuyển động: thạch anh\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu mặt kính: Thủy tinh cứng \r\nĐường kính mặt số: 33mm \r\nĐộ dày mặt số: 8mm \r\nChất liệu dây đeo: Thép không gỉ \r\nLoại khóa cài: Nam châm \r\nĐộ dài dây đeo: 230mm \r\nĐộ rộng dây đeo: 14mm \r\nChống nước: Đi mưa, Rửa tay ', 1599000, 1, '2021-05-19 04:54:25', 10, 2),
(23, 'Đồng hồ nam cao cấp Citizen dây thép lưới đen cao cấp', '23.jpg', 'Đồng Hồ Nam: Citizen\r\nĐộ chống nước:  cơ bản: đi mưa nhỏ, rửa tay ok\r\nDây thép mành đen\r\nKhoá bấm cao cấp\r\nKích thước mặt: đường kính 40mm\r\nChiều dày: ~10mm\r\nKích thước dây: dài 24 cm \r\nĐộ rộng dây: 2 cm\r\nSố Kim: Chạy 3 kim (giờ, phút, giầy) và lịch ngày\r\nMáy: Quartz\r\nMặt kính: cường lực cao cấp', 1690000, 1, '2021-05-19 04:55:23', 11, 1),
(24, 'Đồng hồ mặt kim loại nhã nhặn dành cho nữ DIMINI', '24.jpg', 'Kiểu chuyển động: thạch anh\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu mặt kính: Thủy tinh cứng \r\nĐường kính mặt số: 33mm \r\nĐộ dày mặt số: 8mm \r\nChất liệu dây đeo: Thép không gỉ \r\nLoại khóa cài: Nam châm \r\nĐộ dài dây đeo: 230mm \r\nĐộ rộng dây đeo: 14mm \r\nChống nước: Đi mưa, Rửa tay ', 2590000, 1, '2021-05-19 04:56:44', 12, 2),
(25, 'Đồng hồ LONGINES L2.128.4.57.6', '25.jpg', 'Nhãn hiệu : Longines\r\nXuất xứ : Thụy Sĩ\r\nDòng sản phẩm :  Master Collection\r\nKiểu máy : Automatic (Tự động)\r\nĐồng hồ dành cho : Nữ\r\nKích cỡ : 25.5 mm\r\nChất liệu vỏ : Thép không gỉ\r\nChất liệu dây : Thép không gỉ\r\nChất liệu kính : Sapphire\r\nĐộ chịu nước : 30 m', 4500000, 1, '2021-05-19 07:18:19', 14, 2),
(26, 'Đồng hồ LONGINES L2.128.0.87.6', '26.jpg', 'Nhãn hiệu : Longines\r\nXuất xứ : Thụy Sĩ\r\nDòng sản phẩm :  Master Collection\r\nKiểu máy : Automatic (Tự động)\r\nĐồng hồ dành cho : Nữ\r\nKích cỡ : 25.5 mm\r\nChất liệu vỏ : Thép không gỉ\r\nChất liệu dây : Thép không gỉ\r\nChất liệu kính : Sapphire\r\nĐộ chịu nước : 30 m', 8000000, 1, '2021-05-19 07:24:35', 14, 2),
(27, 'Đồng hồ LONGINES L2.128.0.87.8', '27.jpg', 'Nhãn hiệu : Longines\r\nXuất xứ : Thụy Sĩ\r\nDòng sản phẩm :  Master Collection\r\nKiểu máy : Automatic (Tự động)\r\nĐồng hồ dành cho : Nữ\r\nKích cỡ : 25.5 mm\r\nChất liệu vỏ : Thép không gỉ\r\nChất liệu dây : Thép không gỉ\r\nChất liệu kính : Sapphire\r\nĐộ chịu nước : 30 m', 5000000, 1, '2021-05-19 07:31:48', 14, 2),
(28, 'Đồng hồ TISSOT T109.210.11.031.00', '28.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 4000000, 1, '2021-05-19 07:33:20', 15, 2),
(29, 'Đồng hồ LONGINES L2.128.0.87.7', '29.jpg', 'Nhãn hiệu : Longines\r\nXuất xứ : Thụy Sĩ\r\nDòng sản phẩm :  Master Collection\r\nKiểu máy : Automatic (Tự động)\r\nĐồng hồ dành cho : Nữ\r\nKích cỡ : 25.5 mm\r\nChất liệu vỏ : Thép không gỉ\r\nChất liệu dây : Thép không gỉ\r\nChất liệu kính : Sapphire\r\nĐộ chịu nước : 30 m', 5600000, 1, '2021-05-19 07:36:23', 14, 2),
(30, 'Đồng hồ TISSOT T109.210.11.031.01', '30.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 2000000, 1, '2021-05-19 07:39:43', 15, 2),
(31, 'Đồng hồ TISSOT T109.210.11.031.02', '31.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 2500000, 1, '2021-05-19 07:40:31', 15, 2),
(32, 'Đồng hồ LONGINES L2.128.0.87.10', '32.jpg', 'Nhãn hiệu : Longines \r\nXuất xứ : Thụy Sĩ \r\nDòng sản phẩm :  Master \r\nCollection Kiểu máy : Automatic (Tự động) \r\nĐồng hồ dành cho : Nữ \r\nKích cỡ : 25.5 mm \r\nChất liệu vỏ : Thép không gỉ \r\nChất liệu dây : Thép không gỉ \r\nChất liệu kính : Sapphire \r\nĐộ chịu nước : 30 m', 3000000, 1, '2021-05-19 07:41:32', 14, 2),
(33, 'Đồng hồ LONGINES L2.128.0.87.11', '33.jpg', 'Nhãn hiệu : Longines \r\nXuất xứ : Thụy Sĩ \r\nDòng sản phẩm :  Master \r\nCollection Kiểu máy : Automatic (Tự động) \r\nĐồng hồ dành cho : Nữ \r\nKích cỡ : 25.5 mm \r\nChất liệu vỏ : Thép không gỉ \r\nChất liệu dây : Thép không gỉ \r\nChất liệu kính : Sapphire \r\nĐộ chịu nước : 30 m', 3500000, 1, '2021-05-19 07:43:16', 14, 2),
(34, 'Đồng hồ TISSOT T109.210.11.031.03', '34.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 4600000, 1, '2021-05-19 07:44:08', 15, 2),
(35, '\r\nĐồng hồ LONGINES L2.128.0.87.12', '35.jpg', 'Nhãn hiệu : Longines \r\nXuất xứ : Thụy Sĩ \r\nDòng sản phẩm :  Master \r\nCollection Kiểu máy : Automatic (Tự động) \r\nĐồng hồ dành cho : Nữ \r\nKích cỡ : 25.5 mm \r\nChất liệu vỏ : Thép không gỉ \r\nChất liệu dây : Thép không gỉ \r\nChất liệu kính : Sapphire \r\nĐộ chịu nước : 30 m', 2950000, 1, '2021-05-19 07:45:14', 14, 2),
(36, 'Đồng hồ LONGINES L2.128.0.87.13', '36.jpg', 'Nhãn hiệu : Longines \r\nXuất xứ : Thụy Sĩ \r\nDòng sản phẩm :  Master \r\nCollection Kiểu máy : Automatic (Tự động) \r\nĐồng hồ dành cho : Nữ \r\nKích cỡ : 25.5 mm \r\nChất liệu vỏ : Thép không gỉ \r\nChất liệu dây : Thép không gỉ \r\nChất liệu kính : Sapphire \r\nĐộ chịu nước : 30 m', 2990000, 1, '2021-05-19 07:46:07', 14, 2),
(37, 'Đồng hồ TISSOT T109.210.11.031.04', '37.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 2369000, 1, '2021-05-19 16:22:09', 15, 1),
(38, 'Đồng hồ TISSOT T109.210.11.031.05', '38.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 1590000, 1, '2021-05-19 16:22:52', 15, 1),
(39, 'Đồng hồ TISSOT T109.210.11.031.06', '39.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 3560000, 1, '2021-05-19 16:23:54', 15, 1),
(40, 'Đồng hồ TISSOT T109.210.11.031.07', '40.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 4000000, 1, '2021-05-19 16:24:36', 15, 1),
(41, 'bbbb', '', 'ABC', 5000000, 1, '2021-05-19 17:40:36', 1, 1),
(42, 'bbbbcccccc', '', 'ABC', 50000000, 1, '2021-05-19 17:41:39', 1, 1),
(43, 'bbbbcccccc', '', 'ABC', 50000000, 1, '2021-05-19 17:45:51', 1, 1),
(44, 'Tin ka', '', 'ABC', 800, 1, '2021-05-19 18:06:58', 1, 1),
(45, 'Tin ka', '', 'ABC', 800, 1, '2021-05-19 18:09:42', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thuonghieu`
--

DROP TABLE IF EXISTS `thuonghieu`;
CREATE TABLE `thuonghieu` (
  `math` int NOT NULL,
  `tenth` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `chitiet` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Đang đổ dữ liệu cho bảng `thuonghieu`
--

INSERT INTO `thuonghieu` (`math`, `tenth`, `hinhanh`, `chitiet`) VALUES
(1, 'Hãng đồng hồ Henry London', '1.jpg', 'Henry London là thương hiệu đồng hồ nổi tiếng đến từ Anh Quốc với phong cách vintage độc đáo, sang trọng, có thể khắc thông điệp yêu thương lên mặt sau, có kiểu dáng đơn giản nhưng vô cùng tinh tế, mang lại vẻ sang trọng và lịch lãm cho quý ông. Mặt đồng hồ có thiết kế hài hòa tạo nên vẻ thanh lịch.'),
(2, 'Hãng đồng hồ DANIEL KLEIN', '2.jpg', 'Với phương châm Fashion for everyone – thời trang dành cho mọi người, thương hiệu Daniel Klein hiện đã trở nên nổi tiếng và có mặt ở hơn 60 quốc gia. Mẫu đồng hồ nữ Daniel Klein Galaxy Ladies sở hữu kỹ nghệ chế tác tinh xảo với mặt kính đồng hồ được tạo khối nhiều mặt cắt tại các cọc số tô điểm từ pha lê mang đến nét đẹp sang trọng quý phái cho các quý cô.'),
(3, 'Hãng đồng hồ FreeLook', '3.jpg', 'Freelook một trong những thương hiệu đồng hồ thời trang mới đang biểu trưng cho thời trang của nước Pháp đầy hoa lệ,lãng mạn. Mẫu đồng hồ nữ Freelook  Empire Greca Watch FL6006 mang vẻ đẹp phá cách với mặt số đỏ đô nồng nàn, cọc số đính pha lê tối giản tương phản với đường vân vàng hồng hầm hố.  Dây đeo màu đỏ đô được làm từ da thật thanh mảnh gợi lên vẻ đẹp phá cách, năng động của phụ nữ hiện đại nhưng cũng không kém phần quyến rũ.'),
(4, 'Hãng đồng hồ Senaro', '4.jpg', 'Thương hiệu SENARO ra đời vào cuối thế kỉ 20 tại Tokyo. Trải qua hơn hai thập niên hình thành và phát triển. SENARO đã nỗ lực không ngừng để mang thương hiệu ra biển lớn, trở nên phổ biến trên toàn thế giới. Khác với hướng phát triển dựa vào công nghệ như Seiko và Citizen, SENARO tập trung nâng cao chất lượng cho bộ máy là trái tim của chiếc đồng hồ. Chính vì việc coi trọng phát triển chất lượng bộ máy, SENARO đã làm thay đổi quan niệm của nhiều khách hàng khó tính nhất thế giới với những chiếc đồng hồ vô cùng tinh xảo, chất lượng vượt mong đợi của khách hàng mà giá sản phẩm lại luôn ở mức cạnh tranh chưa từng thương hiệu nào có được.'),
(5, 'Hãng đồng hồ SUNRISE', '5.jpg', 'Là thương hiệu đồng hồ có nguồn gốc tại Thụy Sỹ nhưng đa phần đồng hồ Sunrise chính hãng sẽ sử dụng bộ máy của Nhật Bản để lắp ráp. Đây cũng là dòng máy phổ biến, được nhiều thương hiệu thời trang áp dụng lên các sản phẩm của mình.'),
(6, 'Hãng đồng hồ Crnaira', '6.jpg', 'Thiết kế 6 kim, mặt đính đá cao cấp Đồng Hồ Nam Crnaira Japan Chạy 6 Kim Mặt Đính Đá Dây Thép Mành là món phụ kiện không thể thiếu của cả nam lẫn nữ, chiếc đồng hồ giúp bạn khẳng định cá tính thời...\r\nBên cạnh đó, phần kim dạng quang phát sáng ban đêm và số được đính đá thể hiện rõ ràng nhưng cũng không kém phần tinh tế, vừa đáp ứng nhu cầu quản lý thời gian vừa tô điểm thêm cho set trang phục của bạn. Với chiếc đồng hồ Crnaira, các bạn nam có thể sử dụng trong mọi dịp, từ đi làm, đi chơi hay tham dự những buổi tiệc.'),
(7, 'Hãng đồng hồ FNGEEN', '7.jpg', 'Đồng Hồ Nam FNGEEN Là món phụ kiện không thể thiếu của các bạn nam, chiếc đồng hồ giúp bạn khẳng định cá tính thời trang của chính mình. \r\nĐồng Hồ Nam FNGEEN sở hữu thiết kế sang trọng với các chi tiết được chế tác tinh xảo, góp phần nâng tầm phong cách của người đeo. \r\nBên cạnh đó, phần kim và số được thể hiện rõ ràng nhưng cũng không kém phần tinh tế, vừa đáp ứng nhu cầu quản lý thời gian vừa tô điểm thêm cho set trang phục của bạn. \r\nVới chiếc Đồng Hồ Nam FNGEEN, các bạn nam có thể sử dụng trong mọi dịp, từ đi làm, đi chơi hay tham dự những buổi tiệc.'),
(8, 'Hãng đồng hồ FOURRON', '8.jpg', 'Đồng Hồ Nam FOURRON  Là món phụ kiện không thể thiếu của các bạn nam, chiếc đồng hồ giúp bạn khẳng định cá tính thời trang của chính mình. \r\nĐồng Hồ Nam FOURRON sở hữu thiết kế sang trọng với các chi tiết được chế tác tinh xảo, góp phần nâng tầm phong cách của người đeo. \r\nBên cạnh đó, phần kim và số được thể hiện rõ ràng nhưng cũng không kém phần tinh tế, vừa đáp ứng nhu cầu quản lý thời gian vừa tô điểm thêm cho set trang phục của bạn. \r\nVới chiếc Đồng Hồ Nam FOURRON, các bạn nam có thể sử dụng trong mọi dịp, từ đi làm, đi chơi hay tham dự những buổi tiệc.'),
(9, 'Hãng đồng hồ Movado', '9.jpg', 'Nếu bạn yêu thích phong cách tối giản (minimalism) từ một chiếc đồng hồ thì Movado là hãng dđồng hồ dành cho bạn. Thiết kế mặt đồng hồ không nặng nề “phô trương” bộ máy phức tạp mà chỉ đơn thuần với kim chỉ giờ và những đường nét vát cong tinh tế cùng cách phối màu thời thượng. Tự hào nhận được hơn 200 giải thưởng quốc tế cho những thiết kế của mình, Movado xứng đáng là hãng đồng hồ Thụy Sỹ để bạnd đặt niềm tin về tính thời trang của nó.'),
(10, 'Hãng đồng hồ SEIKO', '10.jpg', 'Nam giới tìm kiếm một chiếc đồng hồ Nhật Bản cao cấp với thiết kế “chất phát ngất” thật chẳng khó nếu bạn biết đến SEIKO. Đứng đầu trong top 4 đồng hồ Nhật Bản Seiko, Citizen, Orient, Casio với điểm mạnh kết hợp linh hoạt giữa công nghệ mới mang tính năng hiện đại và thiết kế cơ khí truyền thống. Ưu thế được nhập khẩu chính thức về Việt Nam, bạn chẳng lo ngại mua phải đồng hồ Seiko giả nhái. Thiết kế mang đậm sự nam tính mạnh mẽ, đây là chiếc đồng hồ các chàng cần có ngay để “tạo nét” cùng đối phương.'),
(11, 'Hãng đồng hồ Citizen', '11.jpg', 'Citizen với tên gọi mang ý nghĩa toàn cầu, hãng đồng hồ đứng thứ 2 Nhật Bản có tham vọng mang sản phẩm của mình đến mọi ngóc ngách trên địa cầu. Citizen mở rộng thế mạnh sản xuất của mình từ đồng hồ máy cơ, đồng hồ pin, đồng hồ năng lượng mặt trời, phân khúc cao cấp đến bình dân đều được Citizen “phủ sóng”. Đặc biệt dòng máy Eco-Drive sử dụng năng lượng ánh sáng mặt trời ưu việt ghi dấu ấn mạnh mẽ với người dùng.'),
(12, 'Hãng đồng hồ Orient', '12.jpg', 'Nếu bạn yêu thích dòng đồng hồ máy cơ automatic với mức giá bình dân hơn so với đồng hồ Thụy Sỹ đắt đỏ thì Orient là lựa chọn sáng giá. Xu hướng thiết kế đơn giản, dễ dàng kết hợp với mọi loại trang phục từ công sở đến dạo phố, Orient dành được sự quan tâm của giới yêu đồng hồ tại Việt Nam.'),
(13, 'Hãng đồng hồ Casio', '13.jpg', 'Nói về độ bền và rẻ thì khó có hãng đồng hồ thế giới nào vượt qua được Casio. Casio Việt Nam gắn liền với nhiều thế hệ với chiếc đồng hồ điện tử chính xác từng giây. Không để bản thân bị tuột lại phía sau, Casio có riêng cho mình những dòng đồng hồ thể thao siêu ấn tượng với nhiều tính năng như G-Shock, Baby G, Casio Edifice, Sheen, Pro Treck.'),
(14, 'Hãng đồng hồ Longines', '14.jpg', 'Tự hào với khả năng cho ra đời những sáng chế mang tính ứng dụng cao, bộ máy đo thời gian chính xác đếLongines là gương mặt thân quen trong những chương trình thể thao và mạo hiểm. Luôn nằm trong top đồng hồ Thụy Sỹ danh tiếng và lâu đời, thiết kế Longines mang đến sự sang trọng đẳng cấp đồng thời đậm nét tinh hoa Thụy Sỹ lâu năm. Sở hữu đồng hồ Longines Thụy Sỹ là sự đầu tư hợp lý với mức giá không hề đắt đỏ.'),
(15, 'Hãng đồng hồ Tissot', '15.jpg', 'Dân chơi có thú vui sưu tập đồng hồ không thể không biết đến Tissot với 164 năm tuổi đến từ Thụy Sỹ. Bề dày lịch sử đi cùng chất lượng tuyệt hảo, những cải tiến công nghệ và thiết kế đẳng cấp, Tissot nghiễm nhiên giữ vững vị trí trong lòng người mộ điệu. 2 bộ sưu tập được yêu thích từ Tissot là T-Classic mang dáng dấp cổ điển thanh lịch và T-Sport mang đến sự mạnh mẽ, thể thao.'),
(16, 'Hãng đồng hồ Ogival', '16.jpg', 'Được ưu ái với tên gọi “đồng hồ Thụy Sỹ dành cho người châu Á”. Mang cho mình cỗ máy Thụy Sỹ, Ogival nghiễm nhiên khẳng định chất lượng của mình. Đánh trúng tâm lý yêu thích những biểu tượng mang đậm nét văn hóa như linh vật phương Đông Lucky Fish, hãng đã đưa đến bộ sưu tập Skeleton chạm khắc lên mặt số được giới doanh nhân đặc biệt yêu thích. Ngoài ra, Ogival vẫn có nhiều mẫu đồng hồ Thụy Sỹ giá tương đồng đồng hồ Nhật Bản chỉ dưới 10 triệu đồng.'),
(17, 'Hãng đồng hồ OP: Olympia Star, Olym Pianus', '17.jpg', 'Đồng hồ OP là một trong những thương hiệu đồng hồ Thụy Sỹ giá rẻ hướng đến phân khúc thị trường đồng hồ giá rẻ Trung Quốc đầy cạnh tranh. Thương hiệu đồng hồ OP được chia thành 2 dòng là Olympia Star và Olym Pianus. Sự khác nhau cơ bản là Olympia Star lắp máy quartz của Thụy Sỹ, còn Olym Pianus lắp máy cơ của Nhật. Sở hữu phân khúc giá khá lý tưởng chỉ tầm 2 đến 6 triệu cùng thiết kế đồng hồ lịch lãm sang trọng, OP luôn nằm trong danh sách những chiếc đồng hồ nam được dùng làm quà tặng sinh nhật bạn trai, người yêu hay bạn gái.'),
(18, 'Hãng đồng hồ DW (Daniel Wellington)', '18.jpg', 'Daniel Wellington là hãng đồng hồ non trẻ của Thụy Điển nhưng đây gây được tiếng vang lớn trong ngành. Hãng đồng hồ DW được thành lập năm 2011, tên Daniel Wellington đặt teo tên của một du khách người Anh với phong cách du lịch bụi bặm. Chỉ sau hơn 4 năm hãng đã bán được hơn 1 triệu chiếc đồng hồ dù giá thành không phải quá rẻ. Đồng hồ DW trên thị trường hiện nay có mức giá từ gần 2 triệu đến 6 triệu đồng. Đây được xem là mức giá tầm trung bình tại thị trường Việt Nam.'),
(19, 'Hãng đồng hồ Anne Klein', '19.jpg', 'Đồng hồ Anne Klein thành lập năm 1968, bởi một người phụ nữ cùng tên rất nổi tiếng trong lịch sử ngành thời trang tại Mỹ. Với xuất phát điểm như vậy nên đồng hồ Anne Klein có thiết kế thời trang hơn là chú trọng vào tính năng hay công nghệ (nhưng cũng có khá ít phàn nàn về độ bền của đồng hồ Anne Klein). Vì vậy thương hiệu này được xếp vào nhóm đồng hồ thời trang. Khác với nhiều thương hiệu nêu trên, đồng hồ Anne Klein có mức giá chỉ vài triệu đồng. Rõ ràng mức giá này sẽ giúp nó dễ phổ biến ở thị trường Việt Nam hơn.'),
(20, 'Hãng đồng hồ Guess', '20.jpg', 'Guess là thương hiệu đồng hồ của Mỹ, có khả năng cạnh tranh tốt tại thị trường Việt Nam nhờ nằm ở phân khúc giá trung bình. Nhãn hiệu thời trang Guess thành lập năm 1981 tại California, Mỹ bởi 4 anh em người nhập cư từ Maroc là Georges, Armand, Paul, và Maurice Marciano. Ban đầu hãng chỉ sản xuất các mặt hàng thời trang, đến năm 1984 hãng mới cung cấp các mẫu mã đồng hồ. Các mẫu đồng hồ Guess được đánh giá là có thiết kế trẻ trung, năng động, chịu khó cập nhật theo các xu hướng thời trang mới.');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

DROP TABLE IF EXISTS `tintuc`;
CREATE TABLE `tintuc` (
  `matt` int NOT NULL,
  `tieude` varchar(100) NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_manv` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`mabl`),
  ADD KEY `binhluan_ibfk_1` (`id_manv`),
  ADD KEY `binhluan_ibfk_2` (`id_masp`),
  ADD KEY `binhluan_ibfk_3` (`id_makh`);

--
-- Chỉ mục cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`masp`,`mahd`),
  ADD KEY `mahd` (`mahd`),
  ADD KEY `masp` (`masp`);

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`mahd`),
  ADD KEY `hoadon_ibfk_1` (`id_makh`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh`);

--
-- Chỉ mục cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  ADD PRIMARY KEY (`malh`),
  ADD KEY `lienhe_ibfk_1` (`id_manv`);

--
-- Chỉ mục cho bảng `loainhanvien`
--
ALTER TABLE `loainhanvien`
  ADD PRIMARY KEY (`maloainv`);

--
-- Chỉ mục cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`maloai`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`manv`),
  ADD KEY `nhanvien_ibfk_1` (`id_maloainv`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`),
  ADD KEY `sanpham_ibfk_1` (`id_math`),
  ADD KEY `sanpham_ibfk_2` (`id_maloai`);

--
-- Chỉ mục cho bảng `thuonghieu`
--
ALTER TABLE `thuonghieu`
  ADD PRIMARY KEY (`math`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`matt`),
  ADD KEY `tintuc_ibfk_1` (`id_manv`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `mabl` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `mahd` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `makh` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  MODIFY `malh` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `loainhanvien`
--
ALTER TABLE `loainhanvien`
  MODIFY `maloainv` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `maloai` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `manv` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masp` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `thuonghieu`
--
ALTER TABLE `thuonghieu`
  MODIFY `math` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `matt` int NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `nhanvien` (`manv`),
  ADD CONSTRAINT `binhluan_ibfk_2` FOREIGN KEY (`id_masp`) REFERENCES `sanpham` (`masp`),
  ADD CONSTRAINT `binhluan_ibfk_3` FOREIGN KEY (`id_makh`) REFERENCES `khachhang` (`makh`);

--
-- Các ràng buộc cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`);

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`id_makh`) REFERENCES `khachhang` (`makh`);

--
-- Các ràng buộc cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  ADD CONSTRAINT `lienhe_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `nhanvien` (`manv`);

--
-- Các ràng buộc cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `nhanvien_ibfk_1` FOREIGN KEY (`id_maloainv`) REFERENCES `loainhanvien` (`maloainv`);

--
-- Các ràng buộc cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_math`) REFERENCES `thuonghieu` (`math`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`id_maloai`) REFERENCES `loaisanpham` (`maloai`);

--
-- Các ràng buộc cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `tintuc_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `nhanvien` (`manv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
