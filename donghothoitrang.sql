-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2021 at 06:02 PM
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
-- Database: `donghothoitrang`
--

-- --------------------------------------------------------

--
-- Table structure for table `binhluan`
--

CREATE TABLE `binhluan` (
  `mabl` int(11) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `noidung` varchar(200) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_manv` int(11) NOT NULL,
  `id_masp` int(11) NOT NULL,
  `id_makh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bohinhanh`
--

CREATE TABLE `bohinhanh` (
  `maha` int(10) NOT NULL,
  `tenha` varchar(200) NOT NULL,
  `id_masp` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bohinhanh`
--

INSERT INTO `bohinhanh` (`maha`, `tenha`, `id_masp`) VALUES
(1, '1phu1.jpg', 1),
(2, '1phu2.jpg', 1),
(3, '1phu3.jpg', 1),
(4, '2phu1.jpg', 2),
(5, '2phu2.jpg', 2),
(6, '2phu3.jpg', 2),
(7, '3phu1.jpg', 3),
(8, '3phu2.jpg', 3),
(9, '3phu3.jpg', 3),
(10, '4phu1.jpg', 4),
(11, '4phu2.jpg', 4),
(12, '4phu3.jpg', 4),
(13, '5phu1.jpg', 5),
(14, '5phu2.jpg', 5),
(15, '5phu3.jpg', 5),
(16, '6phu1.jpg', 6),
(17, '6phu2.jpg', 6),
(18, '6phu3.jpg', 6),
(19, '7phu1.jpg', 7),
(20, '7phu2.jpg', 7),
(21, '7phu3.jpg', 7),
(22, '8phu1.jpg', 8),
(23, '8phu2.jpg', 8),
(24, '8phu3.jpg', 8),
(25, '9phu1.jpg', 9),
(26, '9phu2.jpg', 9),
(27, '9phu3.jpg', 9),
(28, '10phu1.jpg', 10),
(29, '10phu2.jpg', 10),
(30, '10phu3.jpg', 10),
(31, '11phu1.jpg', 11),
(32, '11phu2.jpg', 11),
(33, '11phu3.jpg', 11),
(34, '12phu1.jpg', 12),
(35, '12phu2.jpg', 12),
(36, '12phu3.jpg', 12),
(37, '13phu1.jpg', 13),
(38, '13phu2.jpg', 13),
(39, '13phu3.jpg', 13),
(40, '14phu1.jpg', 14),
(41, '14phu2.jpg', 14),
(42, '14phu3.jpg', 14),
(43, '15phu1.jpg', 15),
(44, '15phu2.jpg', 15),
(45, '15phu3.jpg', 15),
(46, '16phu1.jpg', 16),
(47, '16phu2.jpg', 16),
(48, '16phu3.jpg', 16),
(49, '17phu1.jpg', 17),
(50, '17phu2.jpg', 17),
(51, '17phu3.jpg', 17),
(52, '18phu1.jpg', 18),
(53, '18phu2.jpg', 18),
(54, '18phu3.jpg', 18),
(55, '19phu1.jpg', 19),
(56, '19phu2.jpg', 19),
(57, '19phu3.jpg', 19),
(58, '21phu1.jpg', 21),
(59, '21phu2.jpg', 21),
(60, '21phu3.jpg', 21),
(61, '22phu1.jpg', 22),
(62, '22phu2.jpg', 22),
(63, '22phu3.jpg', 22),
(64, '23phu1.jpg', 23),
(65, '23phu2.jpg', 23),
(66, '23phu3.jpg', 23),
(67, '24phu1.jpg', 24),
(68, '24phu2.jpg', 24),
(69, '24phu3.jpg', 24),
(70, '25phu1.jpg', 25),
(71, '25phu2.jpg', 25),
(72, '25phu3.jpg', 25),
(73, '26phu1.jpg', 26),
(74, '26phu2.jpg', 26),
(75, '26phu3.jpg', 26),
(76, '27phu1.jpg', 27),
(77, '27phu2.jpg', 27),
(78, '27phu3.jpg', 27),
(79, '38phu1.jpg', 38),
(80, '38phu2.jpg', 38),
(81, '38phu3.jpg', 38),
(82, '37phu1.jpg', 37),
(83, '37phu2.jpg', 37),
(84, '37phu3.jpg', 37),
(85, '20phu1.jpg', 20),
(86, '20phu2.jpg', 20),
(87, '20phu3.jpg', 20),
(88, '28phu1.jpg', 28),
(89, '28phu2.jpg', 28),
(90, '28phu3.jpg', 28),
(91, '29phu1.jpg', 29),
(92, '29phu2.jpg', 29),
(93, '29phu3.jpg', 29),
(94, '30phu1.jpg', 30),
(95, '30phu2.jpg', 30),
(96, '30phu3.jpg', 30),
(97, '31phu1.jpg', 31),
(98, '31phu2.jpg', 31),
(99, '31phu3.jpg', 31),
(100, '32phu1.jpg', 32),
(101, '32phu2.jpg', 32),
(102, '32phu3.jpg', 32),
(103, '33phu1.jpg', 33),
(104, '33phu2.jpg', 33),
(105, '33phu3.jpg', 33),
(106, '34phu1.jpg', 34),
(107, '34phu2.jpg', 34),
(108, '34phu3.jpg', 34),
(109, '35phu1.jpg', 35),
(110, '35phu2.jpg', 35),
(111, '35phu3.jpg', 35),
(112, '36phu1.jpg', 36),
(113, '36phu2.jpg', 36),
(114, '36phu3.jpg', 36),
(115, '39phu1.jpg', 39),
(116, '39phu2.jpg', 39),
(117, '39phu3.jpg', 39),
(118, '40phu1.jpg', 40),
(119, '40phu2.jpg', 40),
(120, '40phu3.jpg', 40),
(121, '53phu1.jpg', 58),
(122, '53phu2.jpg', 58),
(123, '53phu3.jpg', 58),
(124, '54phu1.jpg', 59),
(125, '54phu2.jpg', 59),
(126, '54phu3.jpg', 59),
(127, '55phu1.jpg', 60),
(128, '55phu2.jpg', 60),
(129, '55phu3.jpg', 60),
(130, '56phu1.jpg', 61),
(131, '56phu2.jpg', 61),
(132, '56phu3.jpg', 61),
(133, '57phu1.jpg', 62),
(134, '57phu2.jpg', 62),
(135, '57phu3.jpg', 62),
(136, '58phu1.jpg', 63),
(137, '58phu2.jpg', 63),
(138, '58phu3.jpg', 63),
(139, '59phu1.jpg', 64),
(140, '59phu2.jpg', 64),
(141, '59phu3.jpg', 64),
(142, '60phu1.jpg', 65),
(143, '60phu2.jpg', 65),
(144, '60phu3.jpg', 65),
(145, '61phu1.jpg', 66),
(146, '61phu2.jpg', 66),
(147, '61phu3.jpg', 66),
(148, '62phu1.jpg', 67),
(149, '62phu2.jpg', 67),
(150, '62phu3.jpg', 67),
(151, '63phu1.jpg', 68),
(152, '63phu2.jpg', 68),
(153, '63phu3.jpg', 68),
(154, '64phu1.jpg\r\n', 69),
(155, '64phu2.jpg', 69),
(156, '64phu3.jpg', 69),
(157, '65phu1.jpg', 70),
(158, '65phu2.jpg', 70),
(159, '65phu3.jpg', 70),
(160, '66phu1.jpg', 71),
(161, '66phu2.jpg', 71),
(162, '66phu3.jpg', 71),
(163, '67phu1.jpg', 72),
(164, '67phu2.jpg', 72),
(165, '67phu3.jpg', 72),
(166, '68phu1.jpg', 73),
(167, '68phu2.jpg', 73),
(168, '68phu3.jpg', 73),
(169, '69phu1.jpg', 74),
(170, '69phu2.jpg', 74),
(171, '69phu3.jpg', 74),
(172, '70phu1.jpg', 75),
(173, '70phu2.jpg', 75),
(174, '70phu3.jpg', 75),
(175, '71phu1.jpg', 76),
(176, '71phu2.jpg', 76),
(177, '71phu3.jpg', 76),
(178, '72phu1.jpg', 77),
(179, '72phu2.jpg', 77),
(180, '72phu3.jpg', 77),
(181, '73phu1.jpg', 78),
(182, '73phu2.jpg', 78),
(183, '73phu3.jpg', 78),
(184, '74phu1.jpg', 79),
(185, '74phu2.jpg', 79),
(186, '74phu3.jpg', 79),
(187, '75phu1.jpg', 80),
(188, '75phu2.jpg', 80),
(189, '75phu3.jpg', 80),
(190, '76phu1.jpg', 81),
(191, '76phu2.jpg', 81),
(192, '76phu3.jpg', 81);

-- --------------------------------------------------------

--
-- Table structure for table `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `macthd` int(10) NOT NULL,
  `masp` int(10) NOT NULL,
  `mahd` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `mahd` int(11) NOT NULL,
  `tennguoinhan` varchar(200) NOT NULL,
  `sdtnguoinhan` varchar(50) NOT NULL,
  `diachinguoinhan` varchar(200) NOT NULL,
  `tonghoadon` int(11) NOT NULL,
  `ghichu` varchar(500) NOT NULL,
  `phuongthucthanhtoan` tinyint(1) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_makh` int(11) NOT NULL,
  `isDelete` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`mahd`, `tennguoinhan`, `sdtnguoinhan`, `diachinguoinhan`, `tonghoadon`, `ghichu`, `phuongthucthanhtoan`, `trangthai`, `tgtao`, `id_makh`, `isDelete`) VALUES
(1, 'Minh Tâm', '0898391560', 'TP HCM', 2000000, 'Giao hàng thứ 7', 1, 1, '2021-06-05 14:11:14', 2, 0),
(2, 'dasd', '', 'Ha noi', 2929000, 'dsadsad', 0, 1, '2021-06-05 16:20:50', 2, 0),
(3, 'dsadds', '1234567123', 'TP-HCM', 8334000, 'sdsad', 0, 1, '2021-06-05 16:22:07', 2, 0),
(4, 'hello', '1234567123', 'TP-HCM', 4025000, 'llllllllllllll', 1, 1, '2021-06-05 17:00:39', 2, 0),
(5, 'dadsadssda', '1234567123', 'dsadsad', 4025000, 'dsadas', 1, 1, '2021-06-05 17:29:25', 2, 0),
(6, 'hello', '1234567123', 'TP-HCM', 4025000, 'aaaaa', 0, 1, '2021-06-08 13:18:25', 2, 0),
(7, 'Nguyễn Van A', '1234567123', 'TP-HCM', 5405000, '1111111111111', 0, 1, '2021-06-08 13:25:50', 2, 0),
(8, 'Nguyễn Van A', '1234567123', 'TP-HCM', 1600000, '11112', 0, 1, '2021-06-08 13:41:35', 2, 0),
(9, 'TamNguyen', '1234567123', 'TP-HCM', 4025000, 'rrrrrr', 0, 1, '2021-06-08 13:43:39', 2, 0),
(10, 'Tamtam', '0898391560', 'TP-HCM', 2929000, 'ddddddđ', 0, 1, '2021-06-08 13:45:04', 2, 0),
(11, 'Nguyễn Huỳnh Minh Thơ', '1234567123', 'TP-HCM', 2929000, '1111111111111', 0, 1, '2021-06-08 15:18:34', 2, 0),
(12, 'ád', '1234567123', 'fdsfdsdfs', 4025000, 'aaaaaaaaaa', 1, 1, '2021-06-08 15:23:26', 2, 0),
(13, 'hello', '1234567123000', 'Ha noi', 2929000, 'qqqqqqqqq', 0, 1, '2021-06-08 15:23:49', 2, 0),
(14, 'TamNguyen', '0898391560', 'TP-HCM', 4025000, 'aaaaaaaaaaa', 1, 1, '2021-06-08 15:28:03', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` int(11) NOT NULL,
  `tenkh` varchar(200) NOT NULL,
  `diachi` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `tendangnhap` varchar(200) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
  `ptdangnhap` varchar(10) DEFAULT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`makh`, `tenkh`, `diachi`, `email`, `sodienthoai`, `tendangnhap`, `matkhau`, `ptdangnhap`, `trangthai`, `tgtao`) VALUES
(2, 'Nguyễn Huỳnh Minh Tâm', 'TP-HCM', 'nhmtam.c3tqcap.a3@gmail.com', '1234567123', 'tamnguyen', 'b59c67bf196a4758191e42f76670ceba', '', 1, '2021-05-22 17:10:53'),
(3, 'Nguyễn Huỳnh Minh Tâm', 'Ha noi', 'tamthokha99@gmail.com', '0898391560', 'nguyenhuynhminhtam', 'b59c67bf196a4758191e42f76670ceba', '', 1, '2021-05-24 06:07:32'),
(4, 'Nguyễn Van A', 'Ha noi', 'admin@gmail.com', '0789231567', 'tamnguyen28', 'b0baee9d279d34fa1dfd71aadb908c3f', '', 1, '2021-05-24 06:14:13'),
(5, 'TamNguyen', 'TP-HCM', 'tamthokha99@gmail.com', '1234567123', 'kha', 'b59c67bf196a4758191e42f76670ceba', '', 1, '2021-05-26 08:57:48'),
(7, 'Tam Nguyen Huynh Minh', '', 'dh51701611@student.stu.edu.vn', '', 'dh51701611@student.stu.edu.vn', '', 'google', 1, '2021-06-07 09:59:16'),
(8, 'Tho Nguyen', '', 'nguyenhuynhminhtho216@gmail.com', '', 'nguyenhuynhminhtho216@gmail.com', '', 'google', 1, '2021-06-07 15:15:36'),
(9, 'Tâm Nguyễn', '', '', '', '1457181187962439', '', 'facebook', 1, '2021-06-07 15:37:03'),
(10, 'thơ minh', '', 'nhmtho.c3tqcap.a3@gmail.com', '', 'nhmtho.c3tqcap.a3@gmail.com', '', 'google', 1, '2021-06-08 13:59:08'),
(11, 'hello', 'TP-HCM', 'tamthokha99@gmail.com', '0898391560', 'minhtam', 'b59c67bf196a4758191e42f76670ceba', NULL, 1, '2021-06-08 15:09:20'),
(12, 'TamNguyen', 'Ha noi', 'tamthokha99@gmail.com', '0898391560', 'tamnguyen', 'b59c67bf196a4758191e42f76670ceba', NULL, 1, '2021-06-08 15:14:48');

-- --------------------------------------------------------

--
-- Table structure for table `lienhe`
--

CREATE TABLE `lienhe` (
  `malh` int(11) NOT NULL,
  `tennguoilh` varchar(200) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `tieude` varchar(100) NOT NULL,
  `noidung` mediumtext NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_manv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lienhe`
--

INSERT INTO `lienhe` (`malh`, `tennguoilh`, `sodienthoai`, `email`, `tieude`, `noidung`, `trangthai`, `tgtao`, `id_manv`) VALUES
(1, 'Tâm', '0898391560', 'a@gmai.com', 'Sản phẩm tồn tại', 'Nhiều', 1, '2021-05-26 05:05:18', 2),
(2, 'Nguyễn Van A', '0898391560', 'nhmtam.c3tqcap.a3@gmail.com', 'Đơn hàng', 'aaaaaa', 1, '2021-05-26 16:13:44', 2),
(3, 'Nguyễn Huỳnh Minh Thơ', '+84123456789', 'abc@gmail.com', 'Đơn hàng', 'eeeeee', 1, '2021-05-26 16:28:25', 2),
(4, 'Nguyễn Huỳnh Minh Thơ', '+84123456789', 'abc@gmail.com', 'Đơn hàng', 'eeeeee', 1, '2021-05-26 16:29:27', 2),
(5, 'hello', '+84123456789', 'quangtin131299@gmail.com', 'Đơn hàng', 'tttttt', 1, '2021-05-26 16:30:00', 2),
(6, 'hello', '1234567123000', 'tamthokha99@gmail.com', 'Đơn hàng', 'Hết hà', 1, '2021-06-01 08:13:44', 2),
(7, 'Nguyễn Van A', '1234567123', 'tamthokha99@gmail.com', 'Đơn hàng', '11111111111111111111111', 1, '2021-06-08 13:49:42', 2),
(8, 'Nguyễn Van A', '1234567123', 'tamthokha99@gmail.com', 'Đơn hàng', '11111111111111111111111', 1, '2021-06-08 13:50:20', 2);

-- --------------------------------------------------------

--
-- Table structure for table `loainhanvien`
--

CREATE TABLE `loainhanvien` (
  `maloainv` int(11) NOT NULL,
  `tenloainv` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `loainhanvien`
--

INSERT INTO `loainhanvien` (`maloainv`, `tenloainv`) VALUES
(1, 'Quản trị viên'),
(2, 'Nhân viên');

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `maloai` int(11) NOT NULL,
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
  `manv` int(11) NOT NULL,
  `tennv` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
  `sodienthoai` varchar(50) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_maloainv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL,
  `tensp` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `mota` mediumtext NOT NULL,
  `giatien` int(11) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_math` int(11) NOT NULL,
  `id_maloai` int(11) NOT NULL,
  `isDelete` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `hinhanh`, `mota`, `giatien`, `trangthai`, `tgtao`, `id_math`, `id_maloai`, `isDelete`) VALUES
(1, 'Đồng Hồ Nam Henry London HL41-JS-0188 Chiswick', '1.jpg', 'Vỏ đồng hồ: Thép không gỉ.\r\nMàu viền: Công nghệ mạ vàng IPG Pale Hamiton chân không, màu vàng sáng khác biệt, được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 41mm.\r\nĐộ dày mặt: 10mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị: Kim, Analogue.', 2929000, 1, '2021-05-16 02:21:38', 1, 1, 0),
(2, 'ĐỒNG HỒ HENRY LONDON HL39-M-0097 CHANCERY', '2.jpg', 'Màu viền: Công nghệ mạ bạc sáng IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4025000, 1, '2021-05-15 16:58:28', 1, 1, 0),
(3, 'ĐỒNG HỒ HENRY LONDON HL39-CS-0092 HAMPSTEAD', '3.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ vàng đồng IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Chronograph.', 5405000, 1, '2021-05-15 17:00:07', 1, 1, 0),
(4, 'ĐỒNG HỒ NAM HENRY LONDON HL39-M-0029 KNIGHTSBRIDGE', '4.jpg', 'Màu viền: Công nghệ mạ bạc IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4025000, 1, '2021-05-15 17:02:04', 1, 1, 0),
(5, 'ĐỒNG HỒ HENRY LONDON HL39-M-0136 STRATFORD', '5.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ vàng đồngIPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Analogue.', 4485000, 1, '2021-05-15 17:03:39', 1, 1, 0),
(6, 'ĐỒNG HỒ HENRY LONDON HL41-CS-0099 CHANCERY', '6.jpg', 'Vỏ đồng hồ: Thép không gỉ\r\nMàu viền: Công nghệ mạ bạc IPG Pale Hamiton chân không được nhiều khách hàng yêu thích.\r\nLoại mặt: Tròn.\r\nĐường kính mặt: 38.5mm.\r\nĐộ dày mặt: 8mm.\r\nLoại mặt kính: Kính Acrylic lồi chuyên dụng trong dòng đồng hồ thời đầu cổ Omega, rolex , công dụng nhẹ, rõ, kháng va đập tốt, trầy xước có thể lau chùi hết.\r\nKiểu hiển thị:  Kim, Chronograph.', 4945000, 1, '2021-05-16 02:20:18', 1, 1, 0),
(7, 'Đồng hồ nữ SENARO Crystal 66011L.AWA Nhật Bản', '7.jpg', 'Mã sản phẩm: 66011L.AWA\r\nDây đeo bằng hợp kim \r\nĐộ dày mặt: 8mm\r\nĐộ dài có thể điều chỉnh: 150-205mm\r\nVỏ thép không gỉ \r\nChiếc đồng hồ sử dụng mặt kính saphia và bộ máy MIYOTA của Nhật Bản\r\nĐường kính mặt: 32mm\r\nKhả năng chịu nước đến 30 mét', 1224000, 1, '2021-06-02 16:30:31', 4, 2, 0),
(8, 'Đồng hồ nữ Freelook Empire Greca Watch FL6006', '8.jpg', 'Thiết kế tại Paris nước Pháp\r\nThương hiệu: FREELOOK\r\nĐường kính mặt: 34mm\r\nMàu mặt: Màu đỏ\r\nChất liệu mặt kính: Mineral\r\nChất liệu vỏ: Hợp kim 316L\r\nChất liệu dây đeo: Dây da\r\nChống nước: 5 ATM', 1599000, 1, '2021-05-28 03:14:12', 3, 2, 0),
(9, 'Đồng hồ nữ Freelook Grande Classique watch FL5902 - Lamy watch', '9.jpg', 'Thiết kế tại Paris nước Pháp\r\nThương hiệu: FREELOOK\r\nĐường kính mặt: 34mm\r\nMàu mặt: Màu trắng bạc \r\nChất liệu mặt kính: Mineral\r\nChất liệu vỏ: Hợp kim 316L\r\nChất liệu dây đeo: Hợp kim đan\r\nChống nước: 5 ATM', 1599000, 1, '2021-05-18 05:19:14', 3, 2, 0),
(10, 'Đồng hồ nữ SENARO Petite Pavé Gold Tone thương hiệu Nhật Bản', '10.jpg', 'Mã sản phẩm: 5003L - 3073L\r\nDây đeo bằng hợp kim \r\nChiều rộng dây: 12mm\r\nĐộ dài có thể điều chỉnh: 150-205mm\r\nChất liệu Vỏ máy và dây: Hợp kim thép không rỉ 316L, mạ vàng theo công nghệ hiện đại nhất hiện nay công nghệ mạ PVD\r\nChiếc đồng hồ sử dụng mặt kính saphia và bộ máy MIYOTA của Nhật Bản\r\nĐường kính mặt: 28mm\r\nKhả năng chịu nước đến 3ATM', 2255000, 1, '2021-05-19 06:20:52', 4, 2, 0),
(11, 'Đồng hồ nữ Freelook Magical Labyrinth Watch FL4906', '11.jpg', 'Thiết kế tại Paris nước Pháp\r\nThương hiệu: FREELOOK\r\nĐường kính mặt: 33mm\r\nMàu mặt: Trắng\r\nChất liệu mặt kính: Kính cứng\r\nChất liệu vỏ: Hợp kim 316L\r\nChất liệu dây đeo: Hợp kim 316L\r\nChống nước: 5 ATM', 2032000, 1, '2021-05-28 03:11:05', 3, 2, 0),
(12, 'Đồng hồ nữ SUNRISE 9950SA SIÊU MỎNG Kính Sapphire', '12.jpg', 'Tên sản phẩm : SUNRISE \r\nMã SP: 9950SA\r\nĐồng hồ Sunrise dạng lắc tay vừa có thể xem giờ vừa là trang sức cho bạn nữ\r\nKích thước mặt: 28mm\r\nCó thể thâu cắt dây theo chiều rộng của tay \r\nChất liệu kính: Kính Sapphire hạn chế trầy xước.\r\nKích thước dây: 16cm, vòng 21cm\r\nHoạt động 3 kim (giờ, phút, giây)\r\nChất liệu dây: dây thép không gỉ sáng và bền màu,14cm đến 21cm\r\nChống nước 30m', 1068000, 1, '2021-05-28 03:11:15', 5, 2, 0),
(13, 'Đồng Hồ Nam CRNAIRA CR491 Chạy 5 Kim Doanh NHân 2020', '13.jpg', 'Thương hiệu: CRNAIRA\r\nKiểu máy: Quartz (máy Nhật)\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu dây: Dây thép không gỉ\r\nChất liệu mặt trước: Kính cứng pha khoáng, \r\nKích thước mặt:40 x 11 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nSố Kim: Chạy 4 kim (LỊCH XEM NGÀY, Lịch thứ ) \r\nKhả năng chịu nước: 3 ATM (rửa tay, đi mưa, ok... Nên tránh tiếp xúc với hóa chất như xà phòng, nước tẩy rửa, không mang khi bơi lội... Của bền tại người nâng niu giữ gìn)\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1235000, 1, '2021-05-28 03:11:28', 6, 1, 0),
(14, 'Đồng Hồ Nam Crnaira Japan C3079 Siêu Mỏng Cao Cấp', '14.jpg', 'Kiểu máy: Quartz\r\nChất liệu vỏ: Thép không gỉ\r\nChất liệu dây: Thép không gỉ\r\nChất liệu mặt trước: Kính cứng pha khoáng, tráng shaphire\r\nKích thước mặt: 40 x 6 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nĐộ chịu nước: 3ATM – Rửa tay, đi mưa, rửa xe\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1125000, 1, '2021-05-28 03:12:15', 6, 1, 0),
(15, 'Đồng Hồ Nam FNGEEN FN011 Doanh Nhân 2019 Cao Cấp', '15.jpg', 'Thương hiệu: FNGEEN\r\nKiểu máy: Quartz\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu dây: Dây thép không gỉ\r\nChất liệu mặt trước: Kính cứng pha khoáng, \r\nKích thước mặt: 41 x 10 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nSố Kim: Chạy 3 kim ( LỊCH XEM NGÀY) “ Lưu Ý:Sản phẩm chạy 3 kim các kim nhỏ trang trí”\r\nKim đồng hồ  có dạ quang trong điều kiện ánh sáng yếu\r\nKhả năng chịu nước: 3 ATM (rửa tay, đi mưa, ok... Nên tránh tiếp xúc với hóa chất như xà phòng, nước tẩy rửa, không mang khi bơi lội... Của bền tại người nâng niu giữ gìn)\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1221000, 1, '2021-05-28 03:12:34', 7, 1, 0),
(16, 'Đồng Hồ Nam FOURRON F666 Doanh Nhân Dây Da Cao Cấp', '16.jpg', 'Thương hiệu: FOURRON\r\nKiểu máy: Quartz (máy Nhật)\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu dây: DA DA PU\r\nChất liệu mặt trước: Kính cứng pha khoáng, \r\nKích thước mặt: 39 x 9 mm (Rộng x dày)\r\nKích thước dây: 20 x 230mm (Rộng x dài)\r\nSố Kim: Chạy 3 kim (LỊCH XEM NGÀY VÀ LỊCH THỨ) “ Lưu Ý: Lịch thứ có 2 ngôn ngữ anh và trung nên các bạn tùy chỉnh thoải mãi ngôn ngữ m thích”\r\nKhả năng chịu nước: 3 ATM (rửa tay, đi mưa, ok... Nên tránh tiếp xúc với hóa chất như xà phòng, nước tẩy rửa, không mang khi bơi lội... Của bền tại người nâng niu giữ gìn)\r\nPhù hợp đeo đi làm, đi học, dạo phố, xem phim, dự tiệc', 1150000, 1, '2021-05-28 03:12:51', 8, 1, 0),
(17, 'Đồng Hồ Nam FNGEEN FE2081 Doanh Nhân 2019 Cao Cấp', '17.jpg', 'Thương hiệu: FNGEEN\r\nSản xuất tại: Hồng Kông\r\nKiểu máy: Quartz, \r\nDành cho: Nam\r\nKích thước mặt: 40 mm x 10 mm\r\nKích thước dây: Dài x rộng: 24 x 2.0 cm\r\nSố kim: 3 kim chạy,  (có Lịch xem ngày)\r\nChịu nước: 3ATM đi mưa rửa tay', 1115000, 1, '2021-05-28 03:13:21', 7, 1, 0),
(18, 'Đồng hồ nam dây kim loại Casio Standard MTP-VT01D-1BUDF', '18.jpg', 'Kích thước vỏ: 46mm x 40mm x 8,2mm\r\nTổng trọng lượng: 88g\r\nChốt gập ba\r\nDây đeo bằng thép không gỉ\r\nMặt kính khoáng\r\nChống nước\r\nGiờ hiện hành thông thường\r\nĐồng hồ kim: 3 kim (giờ, phút, giây)\r\nĐộ chính xác: ±20 giây một tháng\r\nTuổi thọ pin xấp xỉ: 3 năm với pin SR626SW', 1846000, 1, '2021-05-28 03:13:41', 13, 1, 0),
(19, 'Đồng hồ kim dây da giản dị thời trang cho nữ', '19.jpg', 'Dành cho: Phụ nữ\r\nPhong cách hợp thời trang\r\nMáy đồng hồ: Quartz\r\nHình dạng mặt đồng hồ: Tròn\r\nĐường kính mặt đồng hồ: 3.5CM\r\nChiều dài dây đeo: 24cm\r\nChiều rộng dây: 1.6 cm\r\nĐộ dày vỏ: 8 mm\r\nChất liệu dây đeo: da\r\nChất liệu vỏ: Inox\r\nKhông thấm nước: Không thấm nước\r\nGói hàng bao gồm: 1 Chiếc Đồng hồ đeo tay nữ', 2900000, 1, '2021-05-19 03:07:55', 9, 2, 0),
(20, 'Dồng hồ kim dây da DI5698H giản dị thời trang cho nữ', '20.jpg', 'Dành cho: Phụ nữ\r\nPhong cách hợp thời trang\r\nMáy đồng hồ: Quartz\r\nHình dạng mặt đồng hồ: Tròn\r\nĐường kính mặt đồng hồ: 3.5CM\r\nChiều dài dây đeo: 24cm\r\nChiều rộng dây: 1.6 cm\r\nĐộ dày vỏ: 8 mm\r\nChất liệu dây đeo: da\r\nChất liệu vỏ: Inox\r\nKhông thấm nước: Không thấm nước\r\nGói hàng bao gồm: 1 Chiếc Đồng hồ đeo tay nữ', 1600000, 1, '2021-05-19 03:11:20', 9, 2, 0),
(21, 'Dồng hồ kim dây da DI58942 giản dị thời trang cho nữ', '21.jpg', 'Dành cho: Phụ nữ\r\nPhong cách hợp thời trang\r\nMáy đồng hồ: Quartz\r\nHình dạng mặt đồng hồ: Tròn\r\nĐường kính mặt đồng hồ: 3.5CM\r\nChiều dài dây đeo: 24cm\r\nChiều rộng dây: 1.6 cm\r\nĐộ dày vỏ: 8 mm\r\nChất liệu dây đeo: da\r\nChất liệu vỏ: Inox\r\nKhông thấm nước: Không thấm nước\r\nGói hàng bao gồm: 1 Chiếc Đồng hồ đeo tay nữ', 1890000, 1, '2021-05-19 03:12:16', 9, 2, 0),
(22, 'Đồng hồ thạch anh V329 có dây đeo thép siêu mỏng cho nữ', '22.jpg', 'Kiểu chuyển động: thạch anh\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu mặt kính: Thủy tinh cứng \r\nĐường kính mặt số: 33mm \r\nĐộ dày mặt số: 8mm \r\nChất liệu dây đeo: Thép không gỉ \r\nLoại khóa cài: Nam châm \r\nĐộ dài dây đeo: 230mm \r\nĐộ rộng dây đeo: 14mm \r\nChống nước: Đi mưa, Rửa tay ', 1599000, 1, '2021-06-03 04:22:52', 10, 2, 0),
(23, 'Đồng hồ nam cao cấp Citizen dây thép lưới đen cao cấp', '23.jpg', 'Đồng Hồ Nam: Citizen\r\nĐộ chống nước:  cơ bản: đi mưa nhỏ, rửa tay ok\r\nDây thép mành đen\r\nKhoá bấm cao cấp\r\nKích thước mặt: đường kính 40mm\r\nChiều dày: ~10mm\r\nKích thước dây: dài 24 cm \r\nĐộ rộng dây: 2 cm\r\nSố Kim: Chạy 3 kim (giờ, phút, giầy) và lịch ngày\r\nMáy: Quartz\r\nMặt kính: cường lực cao cấp', 1690000, 1, '2021-05-19 04:55:23', 11, 1, 0),
(24, 'Đồng hồ mặt kim loại nhã nhặn dành cho nữ DIMINI', '24.jpg', 'Kiểu chuyển động: thạch anh\r\nChất liệu vỏ: Thép không gỉ \r\nChất liệu mặt kính: Thủy tinh cứng \r\nĐường kính mặt số: 33mm \r\nĐộ dày mặt số: 8mm \r\nChất liệu dây đeo: Thép không gỉ \r\nLoại khóa cài: Nam châm \r\nĐộ dài dây đeo: 230mm \r\nĐộ rộng dây đeo: 14mm \r\nChống nước: Đi mưa, Rửa tay ', 2590000, 1, '2021-05-24 08:47:52', 4, 2, 0),
(25, 'Đồng hồ TISSOT T109.210.11.031.20', '25.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại dây: Thép không gỉ 316L\r\nKiểu dáng:Mặt tròn\r\nLoại máy:Automatic (Máy cơ tự động)\r\nPhong cách:Sang trọng\r\nMặt kính:Sapphire\r\nĐường kính:30mm\r\nChất liệu vỏ:Thép không gỉ mạ vàng công nghệ PVD\r\nĐộ dày:9.5mm\r\nChất liệu dây:Dây da\r\nĐộ chịu nước:50m\r\nTính năng khác:Lịch ngày, Lên cót tay. Máy ETA 2671\r\nXuất xứ thương hiệu:Thụy Sĩ', 4500000, 1, '2021-06-06 15:53:18', 15, 2, 0),
(26, 'Đồng hồ TISSOT T109.210.11.031.21', '26.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại dây: Thép không gỉ 316L\r\nKiểu dáng:Mặt tròn\r\nLoại máy:Automatic (Máy cơ tự động)\r\nPhong cách:Sang trọng\r\nMặt kính:Sapphire\r\nĐường kính:30mm\r\nChất liệu vỏ:Thép không gỉ mạ vàng công nghệ PVD\r\nĐộ dày:9.5mm\r\nChất liệu dây:Dây da\r\nĐộ chịu nước:50m\r\nTính năng khác:Lịch ngày, Lên cót tay. Máy ETA 2671\r\nXuất xứ thương hiệu:Thụy Sĩ', 8000000, 1, '2021-06-06 15:54:38', 15, 2, 0),
(27, 'Đồng hồ TISSOT T109.210.11.031.22', '27.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại dây: Thép không gỉ 316L\r\nKiểu dáng:Mặt tròn\r\nLoại máy:Automatic (Máy cơ tự động)\r\nPhong cách:Sang trọng\r\nMặt kính:Sapphire\r\nĐường kính:30mm\r\nChất liệu vỏ:Thép không gỉ mạ vàng công nghệ PVD\r\nĐộ dày:9.5mm\r\nChất liệu dây:Dây da\r\nĐộ chịu nước:50m\r\nTính năng khác:Lịch ngày, Lên cót tay. Máy ETA 2671\r\nXuất xứ thương hiệu:Thụy Sĩ', 5000000, 1, '2021-06-06 15:54:24', 15, 2, 0),
(28, 'Đồng hồ LONGINES L2.128.0.87.20', '28.jpg', 'Nhãn hiệu : Longines\r\nXuất xứ : Thụy Sĩ\r\nDòng sản phẩm :  Master Collection\r\nKiểu máy : Automatic (Tự động)\r\nĐồng hồ dành cho : Nữ\r\nKích cỡ : 25.5 mm\r\nChất liệu vỏ : Thép không gỉ\r\nChất liệu dây : Thép không gỉ\r\nChất liệu kính : Sapphire\r\nĐộ chịu nước : 30 m', 4000000, 1, '2021-06-06 15:56:28', 14, 2, 0),
(29, 'Đồng hồ LONGINES L2.128.0.87.7', '29.jpg', 'Nhãn hiệu : Longines\r\nXuất xứ : Thụy Sĩ\r\nDòng sản phẩm :  Master Collection\r\nKiểu máy : Automatic (Tự động)\r\nĐồng hồ dành cho : Nữ\r\nKích cỡ : 25.5 mm\r\nChất liệu vỏ : Thép không gỉ\r\nChất liệu dây : Thép không gỉ\r\nChất liệu kính : Sapphire\r\nĐộ chịu nước : 30 m', 5600000, 1, '2021-05-19 07:36:23', 14, 2, 0),
(30, 'Đồng hồ TISSOT T109.210.11.031.01', '30.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 2000000, 1, '2021-05-19 07:39:43', 15, 2, 0),
(31, 'Đồng hồ TISSOT T109.210.11.031.02', '31.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 2500000, 1, '2021-05-19 07:40:31', 15, 2, 0),
(32, 'Đồng hồ LONGINES L2.128.0.87.10', '32.jpg', 'Nhãn hiệu : Longines \r\nXuất xứ : Thụy Sĩ \r\nDòng sản phẩm :  Master \r\nCollection Kiểu máy : Automatic (Tự động) \r\nĐồng hồ dành cho : Nữ \r\nKích cỡ : 25.5 mm \r\nChất liệu vỏ : Thép không gỉ \r\nChất liệu dây : Thép không gỉ \r\nChất liệu kính : Sapphire \r\nĐộ chịu nước : 30 m', 3000000, 1, '2021-05-19 07:41:32', 14, 2, 0),
(33, 'Đồng hồ TISSOT T109.210.11.031.23', '33.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại dây: Thép không gỉ 316L\r\nKiểu dáng:Mặt tròn\r\nLoại máy:Automatic (Máy cơ tự động)\r\nPhong cách:Sang trọng\r\nMặt kính:Sapphire\r\nĐường kính:30mm\r\nChất liệu vỏ:Thép không gỉ mạ vàng công nghệ PVD\r\nĐộ dày:9.5mm\r\nChất liệu dây:Dây da\r\nĐộ chịu nước:50m\r\nTính năng khác:Lịch ngày, Lên cót tay. Máy ETA 2671\r\nXuất xứ thương hiệu:Thụy Sĩ', 3500000, 1, '2021-06-06 15:55:19', 15, 2, 0),
(34, 'Đồng hồ TISSOT T109.210.11.031.03', '34.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 4600000, 1, '2021-05-19 07:44:08', 15, 2, 0),
(35, '\r\nĐồng hồ LONGINES L2.128.0.87.12', '35.jpg', 'Nhãn hiệu : Longines \r\nXuất xứ : Thụy Sĩ \r\nDòng sản phẩm :  Master \r\nCollection Kiểu máy : Automatic (Tự động) \r\nĐồng hồ dành cho : Nữ \r\nKích cỡ : 25.5 mm \r\nChất liệu vỏ : Thép không gỉ \r\nChất liệu dây : Thép không gỉ \r\nChất liệu kính : Sapphire \r\nĐộ chịu nước : 30 m', 2950000, 1, '2021-05-19 07:45:14', 14, 2, 0),
(36, 'Đồng hồ TISSOT T109.210.11.031.24', '36.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nữ\r\nThương hiệu: Thụy Sĩ\r\nLoại dây: Thép không gỉ 316L\r\nKiểu dáng:Mặt tròn\r\nLoại máy:Automatic (Máy cơ tự động)\r\nPhong cách:Sang trọng\r\nMặt kính:Sapphire\r\nĐường kính:30mm\r\nChất liệu vỏ:Thép không gỉ mạ vàng công nghệ PVD\r\nĐộ dày:9.5mm\r\nChất liệu dây:Dây da\r\nĐộ chịu nước:50m\r\nTính năng khác:Lịch ngày, Lên cót tay. Máy ETA 2671\r\nXuất xứ thương hiệu:Thụy Sĩ', 2990000, 1, '2021-06-06 15:55:49', 15, 2, 0),
(37, 'Đồng hồ TISSOT T109.210.11.031.04', '37.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 2369000, 1, '2021-05-19 16:22:09', 15, 1, 0),
(38, 'Đồng hồ TISSOT T109.210.11.031.05', '38.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 1590000, 1, '2021-05-19 16:22:52', 15, 1, 0),
(39, 'Đồng hồ TISSOT T109.210.11.031.06', '39.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 3560000, 1, '2021-05-19 16:23:54', 15, 1, 0),
(40, 'Đồng hồ TISSOT T109.210.11.031.07', '40.jpg', 'Tình trạng: Còn hàng\r\nGiới tính: Nam\r\nThương hiệu: Thụy Sĩ\r\nLoại đồng hồ: Đồng hồ điện tử\r\nLoại dây: Thép không gỉ 316L', 4000000, 1, '2021-05-19 16:24:36', 15, 1, 0),
(58, 'Oris Big Crown, 41mm 01 798 7768 4253-Set', '53.jpg', 'Mã Sản Phẩm: 01 798 7768 4253-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 5690000, 1, '2021-05-24 08:38:14', 12, 1, 0),
(59, 'Oris Big Crown, 41mm 01 798 7768 4254-Set\r\n', '54.jpg', 'Mã Sản Phẩm: 01 798 7768 4254-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 3690000, 1, '2021-05-24 08:39:03', 12, 1, 0),
(60, 'Oris Big Crown, 41mm 01 798 7768 4255-Set\r\n', '55.jpg', 'Mã Sản Phẩm: 01 798 7768 4255-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 6500000, 1, '2021-05-24 08:39:53', 12, 1, 0),
(61, 'Oris Big Crown, 41mm 01 798 7768 4256-Set', '56.jpg', 'Mã Sản Phẩm: 01 798 7768 4256-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 7500000, 1, '2021-05-24 08:40:39', 12, 1, 0),
(62, 'Oris Big Crown, 41mm 01 798 7768 4257-Set', '57.jpg', 'Mã Sản Phẩm: 01 798 7768 4257-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 3900000, 1, '2021-05-24 08:41:18', 12, 1, 0),
(63, 'Oris Big Crown, 41mm 01 798 7768 4258-Set', '58.jpg', 'Mã Sản Phẩm: 01 798 7768 4258-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 4900000, 1, '2021-05-24 08:42:22', 12, 1, 0),
(64, 'Oris Big Crown, 41mm 01 798 7768 4259-Set', '59.jpg', 'Mã Sản Phẩm: 01 798 7768 4259-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 1690000, 1, '2021-05-24 08:43:07', 12, 1, 0),
(65, 'Oris Big Crown, 41mm 01 798 7768 4260-Set\r\n', '60.jpg', 'Mã Sản Phẩm: 01 798 7768 4253-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 5800000, 1, '2021-05-24 08:43:44', 12, 1, 0),
(66, 'Oris Big Crown, 41mm 01 798 7768 4261-Set\r\n', '61.jpg', 'Mã Sản Phẩm: 01 798 7768 4261-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 2900000, 1, '2021-05-24 08:45:04', 12, 1, 0),
(67, 'Oris Big Crown, 41mm 01 798 7768 4262-Set', '62.jpg', 'Mã Sản Phẩm: 01 798 7768 4262-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 6900000, 1, '2021-05-24 08:45:47', 12, 1, 0),
(68, 'Oris Big Crown, 41mm 01 798 7768 4263-Set', '63.jpg', 'Mã Sản Phẩm: 01 798 7768 4263-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 5690000, 1, '2021-05-24 08:46:52', 12, 1, 0),
(69, 'Oris Big Crown, 41mm 01 798 7768 4264-Set', '64.jpg', 'Mã Sản Phẩm: 01 798 7768 4264-Set\r\nBộ Sưu Tập: Big Crown\r\nHình Dáng Mặt: Round\r\nLoại khoá: Buckle\r\nBộ chuyển động: Caliber 798 base SW 330-1\r\nPhiên Bản Giới Hạn: Limited Edition\r\nChức Năng: Date, hours, minutes and seconds\r\nChất Liệu Bộ Vỏ: Grey PVD coated stainless steel\r\nĐường Kính Vỏ: 41\r\nNắp Lưng: Solid\r\nChất liệu vành đồng hồ: Grey PVD coated stainless steel\r\nChức năng vành đồng hồ: Fixed\r\nLoại Bộ Số: Arabic numeral\r\nChất Liệu Dây: Leather\r\nMàu Sắc Dây: Brown\r\nĐộ Rộng Dây: 20\r\nMàu Sắc Mặt Số: Black\r\nBộ Máy: Automatic\r\nĐộ Chịu Nước: 100\r\nChất Liệu Mặt Kính: Sapphire\r\nNhãn hiệu: Swiss Made\r\nThời Gian Trữ Cót: 42', 4025000, 1, '2021-05-24 08:47:25', 12, 1, 0),
(70, 'Đồng hồ Diamond D DM6305B565', '65.jpg', 'Thương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 2560000, 1, '2021-05-24 09:07:39', 5, 2, 0),
(71, 'Đồng hồ Diamond D DM6305B566', '66.jpg', 'Mã Sản Phẩm: DM6305B566\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 4590000, 1, '2021-05-24 15:44:18', 5, 2, 0),
(72, 'Đồng hồ Diamond D DM6305B567', '67.jpg', 'Mã Sản Phẩm: DM6305B567\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 3400000, 1, '2021-05-24 09:10:06', 5, 2, 0),
(73, 'Đồng hồ Diamond D DM6305B5', '68.jpg', 'Mã Sản Phẩm: DM6305B568\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 5900000, 1, '2021-05-24 09:11:17', 5, 2, 0),
(74, 'Đồng hồ Diamond D DM6305B569', '69.jpg', 'Mã Sản Phẩm: DM6305B5\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 8900000, 1, '2021-05-24 09:12:11', 5, 2, 0),
(75, 'Đồng hồ Diamond D DM6305B570', '70.jpg', 'Mã Sản Phẩm: DM6305B570\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 3800000, 1, '2021-05-24 09:12:52', 5, 2, 0),
(76, 'Đồng hồ Diamond D DM6305B571', '71.jpg', 'Mã Sản Phẩm: DM6305B571\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 5600000, 1, '2021-05-24 09:13:28', 5, 2, 0),
(77, 'Đồng hồ Diamond D DM6305B572', '72.jpg', 'Mã Sản Phẩm: DM6305B572\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 6500000, 1, '2021-05-24 09:14:01', 5, 2, 0),
(78, 'Đồng hồ Diamond D DM6305B573', '73.jpg', 'Mã Sản Phẩm: DM6305B573\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 5690000, 1, '2021-05-24 09:14:43', 5, 2, 0),
(79, 'Đồng hồ Diamond D DM6305B574', '74.jpg', 'Mã Sản Phẩm: DM6305B574\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 4590000, 1, '2021-05-24 09:15:28', 5, 2, 0),
(80, 'Đồng hồ Diamond D DM6305B575', '75.jpg', 'Mã Sản Phẩm: DM6305B575\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 3600000, 1, '2021-05-24 09:16:10', 5, 2, 0),
(81, 'Đồng hồ Diamond D DM6305B576', '76.jpg', 'Mã Sản Phẩm: DM6305B576\r\nThương hiệu: Đồng hồ nữ Diamond D\r\nKiểu dáng: Đồng hồ nữ\r\nMáy: Quartz\r\nChất liệu vỏ: Hợp kim , đính đá swarovsky\r\nChất liệu dây:Hợp kim , đính đá swarovsky\r\nMặt kính: Sapphire ( Kính chống trầy ) \r\nKích thước : 30mm\r\nChống nước : 3 ATM\r\nBảo hành: 10 năm về máy và đá , 2 năm về pin\r\nThương hiệu: Anh \r\nMáy: Japan Myota citizen Quartz', 2900000, 1, '2021-05-24 09:16:40', 5, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `thuonghieu`
--

CREATE TABLE `thuonghieu` (
  `math` int(11) NOT NULL,
  `tenth` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `chitiet` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thuonghieu`
--

INSERT INTO `thuonghieu` (`math`, `tenth`, `hinhanh`, `chitiet`) VALUES
(1, 'Hãng đồng hồ HENRY LONDON', '1.jpg', 'Henry London là thương hiệu đồng hồ nổi tiếng đến từ Anh Quốc với phong cách vintage độc đáo, sang trọng, có thể khắc thông điệp yêu thương lên mặt sau, có kiểu dáng đơn giản nhưng vô cùng tinh tế, mang lại vẻ sang trọng và lịch lãm cho quý ông. Mặt đồng hồ có thiết kế hài hòa tạo nên vẻ thanh lịch.'),
(3, 'Hãng đồng hồ FREELOOK', '3.jpg', 'Freelook một trong những thương hiệu đồng hồ thời trang mới đang biểu trưng cho thời trang của nước Pháp đầy hoa lệ,lãng mạn. Mẫu đồng hồ nữ Freelook  Empire Greca Watch FL6006 mang vẻ đẹp phá cách với mặt số đỏ đô nồng nàn, cọc số đính pha lê tối giản tương phản với đường vân vàng hồng hầm hố.  Dây đeo màu đỏ đô được làm từ da thật thanh mảnh gợi lên vẻ đẹp phá cách, năng động của phụ nữ hiện đại nhưng cũng không kém phần quyến rũ.'),
(4, 'Hãng đồng hồ SENARO', '4.jpg', 'Thương hiệu SENARO ra đời vào cuối thế kỉ 20 tại Tokyo. Trải qua hơn hai thập niên hình thành và phát triển. SENARO đã nỗ lực không ngừng để mang thương hiệu ra biển lớn, trở nên phổ biến trên toàn thế giới. Khác với hướng phát triển dựa vào công nghệ như Seiko và Citizen, SENARO tập trung nâng cao chất lượng cho bộ máy là trái tim của chiếc đồng hồ. Chính vì việc coi trọng phát triển chất lượng bộ máy, SENARO đã làm thay đổi quan niệm của nhiều khách hàng khó tính nhất thế giới với những chiếc đồng hồ vô cùng tinh xảo, chất lượng vượt mong đợi của khách hàng mà giá sản phẩm lại luôn ở mức cạnh tranh chưa từng thương hiệu nào có được.'),
(5, 'Hãng đồng hồ DIAMOND D', '5.jpg', 'Diamond D của Anh là một thương hiệu nổi tiếng thế giới với các thiết kế đồng hồ và kính mắt nữ vô cùng tinh tế và thời trang. Nếu trước đây, các thiết kế của hãng chủ yếu sử dụng chất liệu Hợp kim thép thì mới đây Diamond D đã cho ra mắt dòng sản phẩm cao cấp sử dụng hoàn toàn chất liệu vỏ và dây đều từ thép không gỉ 316L kết hợp với đá Swarovski sang trọng.\r\nBộ sưu tập mới này chủ yếu thiên về phong cách đơn giản và sang trọng, mặt đồng hồ có kích thước trung bình 30mm, độ dày vỏ khoảng 5mm. Có cả 2 phiên bản dây da và dây kim loại để người dùng thoải mái lựa chọn.\r\n'),
(6, 'Hãng đồng hồ CRNAIRA', '6.jpg', 'Thiết kế 6 kim, mặt đính đá cao cấp Đồng Hồ Nam Crnaira Japan Chạy 6 Kim Mặt Đính Đá Dây Thép Mành là món phụ kiện không thể thiếu của cả nam lẫn nữ, chiếc đồng hồ giúp bạn khẳng định cá tính thời...\r\nBên cạnh đó, phần kim dạng quang phát sáng ban đêm và số được đính đá thể hiện rõ ràng nhưng cũng không kém phần tinh tế, vừa đáp ứng nhu cầu quản lý thời gian vừa tô điểm thêm cho set trang phục của bạn. Với chiếc đồng hồ Crnaira, các bạn nam có thể sử dụng trong mọi dịp, từ đi làm, đi chơi hay tham dự những buổi tiệc.'),
(7, 'Hãng đồng hồ FNGEEN', '7.jpg', 'Đồng Hồ Nam FNGEEN Là món phụ kiện không thể thiếu của các bạn nam, chiếc đồng hồ giúp bạn khẳng định cá tính thời trang của chính mình. \r\nĐồng Hồ Nam FNGEEN sở hữu thiết kế sang trọng với các chi tiết được chế tác tinh xảo, góp phần nâng tầm phong cách của người đeo. \r\nBên cạnh đó, phần kim và số được thể hiện rõ ràng nhưng cũng không kém phần tinh tế, vừa đáp ứng nhu cầu quản lý thời gian vừa tô điểm thêm cho set trang phục của bạn. \r\nVới chiếc Đồng Hồ Nam FNGEEN, các bạn nam có thể sử dụng trong mọi dịp, từ đi làm, đi chơi hay tham dự những buổi tiệc.'),
(8, 'Hãng đồng hồ FOURRON', '8.jpg', 'Đồng Hồ Nam FOURRON  Là món phụ kiện không thể thiếu của các bạn nam, chiếc đồng hồ giúp bạn khẳng định cá tính thời trang của chính mình. \r\nĐồng Hồ Nam FOURRON sở hữu thiết kế sang trọng với các chi tiết được chế tác tinh xảo, góp phần nâng tầm phong cách của người đeo. \r\nBên cạnh đó, phần kim và số được thể hiện rõ ràng nhưng cũng không kém phần tinh tế, vừa đáp ứng nhu cầu quản lý thời gian vừa tô điểm thêm cho set trang phục của bạn. \r\nVới chiếc Đồng Hồ Nam FOURRON, các bạn nam có thể sử dụng trong mọi dịp, từ đi làm, đi chơi hay tham dự những buổi tiệc.'),
(9, 'Hãng đồng hồ MOVADO', '9.jpg', 'Nếu bạn yêu thích phong cách tối giản (minimalism) từ một chiếc đồng hồ thì Movado là hãng dđồng hồ dành cho bạn. Thiết kế mặt đồng hồ không nặng nề “phô trương” bộ máy phức tạp mà chỉ đơn thuần với kim chỉ giờ và những đường nét vát cong tinh tế cùng cách phối màu thời thượng. Tự hào nhận được hơn 200 giải thưởng quốc tế cho những thiết kế của mình, Movado xứng đáng là hãng đồng hồ Thụy Sỹ để bạnd đặt niềm tin về tính thời trang của nó.'),
(10, 'Hãng đồng hồ SEIKO', '10.jpg', 'Nam giới tìm kiếm một chiếc đồng hồ Nhật Bản cao cấp với thiết kế “chất phát ngất” thật chẳng khó nếu bạn biết đến SEIKO. Đứng đầu trong top 4 đồng hồ Nhật Bản Seiko, Citizen, Orient, Casio với điểm mạnh kết hợp linh hoạt giữa công nghệ mới mang tính năng hiện đại và thiết kế cơ khí truyền thống. Ưu thế được nhập khẩu chính thức về Việt Nam, bạn chẳng lo ngại mua phải đồng hồ Seiko giả nhái. Thiết kế mang đậm sự nam tính mạnh mẽ, đây là chiếc đồng hồ các chàng cần có ngay để “tạo nét” cùng đối phương.'),
(11, 'Hãng đồng hồ CITIZEN', '11.jpg', 'Citizen với tên gọi mang ý nghĩa toàn cầu, hãng đồng hồ đứng thứ 2 Nhật Bản có tham vọng mang sản phẩm của mình đến mọi ngóc ngách trên địa cầu. Citizen mở rộng thế mạnh sản xuất của mình từ đồng hồ máy cơ, đồng hồ pin, đồng hồ năng lượng mặt trời, phân khúc cao cấp đến bình dân đều được Citizen “phủ sóng”. Đặc biệt dòng máy Eco-Drive sử dụng năng lượng ánh sáng mặt trời ưu việt ghi dấu ấn mạnh mẽ với người dùng.'),
(12, 'Hãng đồng hồ ORIS', '12.jpg', 'Đồng hồ chính hãng ORIS được chế tác từ những vật liệu cao cấp nhất như mặt kính đồng hồ đều là kính Sapphire chống trầy xước cao, vỏ đồng hồ có thể bằng thép không gỉ hoặc bằng đồng được mạ crom, dây đeo có thể bằng dây Nato, dây kim loại chất liệu thép không gỉ, dây cao su hoặc dây da cao cấp,... Với những vật liệu cao cấp như này chắc chắn nhưngc chiếc đồng hồ ORIS sẽ không làm bạn thất vọng về độ bền bỉ của nó theo thời gian.\r\nNổi tiếng thương hiệu chỉ sản xuất những chiếc đồng hồ cơ nên chắc chắn những chiếc đồng hồ ORIS rất đặc biệt và có độ chính xác rất cao. Với mỗi dòng khác nhau thì ORIS lại sử dụng một bộ máy khác nhau có thể là Caliber 733, Caliber 735, Caliber 748,... với khả năng dự trữ năng lượng lến đến 48 giờ. Đặc biệt, năm 2014, ORIS đã tung ra bộ máy “in-house” độc đáo: Caliber 110 có khả năng dự trữ năng lượng tuyệt vời lên tới 10 ngày chỉ với một hộp cót. Sau nhiều cải tiến lên Caliber 111, Caliber 112.'),
(13, 'Hãng đồng hồ CASIO', '13.jpg', 'Nói về độ bền và rẻ thì khó có hãng đồng hồ thế giới nào vượt qua được Casio. Casio Việt Nam gắn liền với nhiều thế hệ với chiếc đồng hồ điện tử chính xác từng giây. Không để bản thân bị tuột lại phía sau, Casio có riêng cho mình những dòng đồng hồ thể thao siêu ấn tượng với nhiều tính năng như G-Shock, Baby G, Casio Edifice, Sheen, Pro Treck.'),
(14, 'Hãng đồng hồ LONGINES', '14.jpg', 'Tự hào với khả năng cho ra đời những sáng chế mang tính ứng dụng cao, bộ máy đo thời gian chính xác đếLongines là gương mặt thân quen trong những chương trình thể thao và mạo hiểm. Luôn nằm trong top đồng hồ Thụy Sỹ danh tiếng và lâu đời, thiết kế Longines mang đến sự sang trọng đẳng cấp đồng thời đậm nét tinh hoa Thụy Sỹ lâu năm. Sở hữu đồng hồ Longines Thụy Sỹ là sự đầu tư hợp lý với mức giá không hề đắt đỏ.'),
(15, 'Hãng đồng hồ TISSOT', '15.jpg', 'Dân chơi có thú vui sưu tập đồng hồ không thể không biết đến Tissot với 164 năm tuổi đến từ Thụy Sỹ. Bề dày lịch sử đi cùng chất lượng tuyệt hảo, những cải tiến công nghệ và thiết kế đẳng cấp, Tissot nghiễm nhiên giữ vững vị trí trong lòng người mộ điệu. 2 bộ sưu tập được yêu thích từ Tissot là T-Classic mang dáng dấp cổ điển thanh lịch và T-Sport mang đến sự mạnh mẽ, thể thao.');

-- --------------------------------------------------------

--
-- Table structure for table `tintuc`
--

CREATE TABLE `tintuc` (
  `matt` int(11) NOT NULL,
  `tieude` varchar(100) NOT NULL,
  `noidung` mediumtext NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_manv` int(11) DEFAULT NULL,
  `isDelete` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tintuc`
--

INSERT INTO `tintuc` (`matt`, `tieude`, `noidung`, `hinhanh`, `trangthai`, `tgtao`, `id_manv`, `isDelete`) VALUES
(1, 'Đồng hồ cho phái đẹp', 'Ngày nay, chọn một chiếc đồng hồ hoàn hảo cho phụ nữ sẽ giúp bạn hoàn thiện trang phục của mình và phản ánh rằng bạn có gu thời trang hay phong cách tuyệt vời. Có hàng trăm loại đồng hồ để bạn lựa chọn và có thể khá khó khăn để chọn chúng nên đeo trong những dịp và bữa tiệc nào.\r\nNgày nay, có rất nhiều kiểu dáng đồng hồ trên mạng. Đồng hồ của họ thường sẽ đắt hơn. Để mua những chiếc đồng hồ thời trang này, hầu hết phụ nữ chọn phương án tốt nhất và đó là mua sắm trực tuyến. Bạn có thể tìm thấy có rất nhiều bộ sưu tập đồng hồ dành cho phụ nữ. Phụ nữ hãy thử một chiếc đồng hồ sang trọng có kiểu dáng rất đơn giản nhưng truyền thống.\r\nĐối với những phụ nữ yêu thích xu hướng về phong cách táo bạo, những chiếc đồng hồ thời trang và phong cách là lựa chọn tốt cho họ. Những chiếc đồng hồ này có thể có vỏ và mặt có hình dạng độc đáo cũng như nhiều màu sắc đang thịnh hành.\r\nNếu bạn quyết định mua đồng hồ nữ thì trước khi mua đồng hồ, hãy nghĩ xem bạn sẽ đeo đồng hồ ở đâu và bạn sẽ kết hợp với trang phục nào. Và điều thứ hai, bạn chọn đúng trang web trực tuyến để mua được những chiếc đồng hồ nữ đẹp chất lượng và sành điệu.\r\nBạn có thể chọn trang web trực tuyến tốt nhất fulltime, nơi cung cấp đồng hồ thời trang và thiết kế cho phụ nữ với giá cả hợp lý . Tại đây bạn có thể tìm thấy những chiếc đồng hồ sang trọng với đủ kiểu dáng và nhiều thương hiệu.\r\nNếu như phụ nữ làm đẹp cần phải lỉnh kỉnh đủ thứ phụ kiện, trang sức, mỹ phẩm thì đàn ông chỉ cần một chiếc đồng hồ đeo tay là đủ. Với dân sành đồng hồ, đặc biệt là phái nam, họ coi những chiếc đồng hồ đeo tay không chỉ là một công cụ xem giờ thông thường mà còn là những món trang sức cao cấp, bao hàm nghệ thuật cơ khí bậc thầy, sự tỉ mỉ, niềm đam mê và sức sáng tạo kì khôi ẩn chứa trong những cỗ máy bé nhỏ.', '1.jpg', 1, '2021-05-26 04:17:59', 2, 0),
(2, '10 MÓN QUÀ TẶNG CHA, TẶNG BỐ Ý NGHĨA NGÀY FATHER’S DAY', '“Cha là người yêu lý tưởng đầu tiên với con gái, và là người anh hùng đầu tiên đối với con trai” đó là hình tượng người cha trong mắt trẻ thơ. Còn đối với mỗi một người con đã trưởng thành, Cha là người đã dành tặng cả cuộc đời để hi sinh trong âm thầm lặng lẽ dõi theo từng bước chân của chúng ta. Vậy hãy dành cho người yêu lý tưởng đó, người anh hùng đó một ngày Father’s Day thật sự ý nghĩa.\r\nAi cũng đã từng trải qua cái thời trẻ con ham chơi đến nổi bị mắng, bị đánh đòn, còn nhớ ánh mắt tức giận của cha ôi sao cảm giác nó sợ hãi. Cái cảm giác lúc bé khi bị đánh đòn nó đau rần rần..nhiều lúc còn xưng tấy, ửng đỏ cả lên… Thế rồi thời gian trôi, sau bao nhiêu năm tháng khó nhọc vất vả nuôi con giờ đây Cha đã già hơn trước.\r\nCó bao giờ bạn tự hỏi bản thân đã làm được gì để đáp lại những hi sinh khó nhọc của Cha trong suốt nhiều năm tháng qua chưa? \r\nÔm và hôn lên má của Cha là hành động rất thiết thực, rất đơn giản để thể hiện tình cảm của một đứa trẻ thơ. Và chắc chắn là tất cả chúng ta đã từng làm một cách rất thành thục, thế nhưng chắc hẳn rằng có rất ít người còn giữ lại thói quen đó. Vậy món quà tặng Cha, quà tặng Bố đơn giản nhất mà ai cũng có thể làm được đó chính là “một cái ôm, một nụ hôn”.\r\nCó những điều tự nhiên thật sự rất khó nói ra bằng lời, “con yêu bố” đơn giản là thế đấy nhưng mấy ai đủ can đảm và đã từng nói điều này với người Cha của mình. Vậy những lời khó nói hãy dành để viết thành một bức thư để bày tỏ tình yêu với người anh hùng đó, người yêu lý tưỡng đó. Bức thư bày tỏ tình yêu là món quà tặng Cha, quà tặng Bố đơn giản nhưng hết sức ý nghĩa.\r\nNhư lúc bé Cha vẫn thường đưa ta đi đến nơi này nơi kia ăn những món này món kia, vậy hãy dành thời gian để đưa Cha đến những nơi mà ngày xưa ông thường đưa ta tới và cùng ông điểm danh lại sự thay đổi theo thời gian của nơi đã đi qua. Đó sẽ là những khoảnh khắc thật sự đáng nhớ mà bạn có thể xem đó là món quà tặng Cha, quà tặng Bố mang ý nghĩa tinh thần sâu sắc.\r\nNếu như bạn không thể tự tay nấu một bữa ăn với các món ngon mà Bố/ Cha yêu thích thì hãy dẫn ông đến một nhà hàng nơi mà cả gia đình có thể cùng nhau trải qua những giây phút tuyệt vời, vừa ăn vừa ôn lại chuyện khi còn trẻ con đó sẽ là một món quà tặng cha, quà tặng bố hết sức ý nghĩa cho ngày Father’s Day săp tới.\r\nMột chiếc đồng hồ đeo tay dành tặng bố trong ngày Father’s Day chắc chắn sẽ mang đến cho ông những giây phút thật sự đặc biệt. Thật vậy một chiếc đồng hồ đeo tay không chỉ là món quà tặng Cha, quà tặng Bố ý nghĩa mà nó còn mang đến sự trẻ trung, sang trọng cho ông. ', '2.jpg', 1, '2021-05-26 04:18:17', 2, 0);

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
-- Indexes for table `bohinhanh`
--
ALTER TABLE `bohinhanh`
  ADD PRIMARY KEY (`maha`),
  ADD KEY `id_masp` (`id_masp`);

--
-- Indexes for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`macthd`,`masp`,`mahd`),
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
-- Indexes for table `thuonghieu`
--
ALTER TABLE `thuonghieu`
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
  MODIFY `mabl` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bohinhanh`
--
ALTER TABLE `bohinhanh`
  MODIFY `maha` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  MODIFY `macthd` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `mahd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `makh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `lienhe`
--
ALTER TABLE `lienhe`
  MODIFY `malh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `loainhanvien`
--
ALTER TABLE `loainhanvien`
  MODIFY `maloainv` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `maloai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `manv` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `thuonghieu`
--
ALTER TABLE `thuonghieu`
  MODIFY `math` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `matt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
-- Constraints for table `bohinhanh`
--
ALTER TABLE `bohinhanh`
  ADD CONSTRAINT `bohinhanh_ibfk_1` FOREIGN KEY (`id_masp`) REFERENCES `sanpham` (`masp`);

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
  ADD CONSTRAINT `lienhe_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `loainhanvien` (`maloainv`);

--
-- Constraints for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `nhanvien_ibfk_1` FOREIGN KEY (`id_maloainv`) REFERENCES `loainhanvien` (`maloainv`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`id_math`) REFERENCES `thuonghieu` (`math`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`id_maloai`) REFERENCES `loaisanpham` (`maloai`);

--
-- Constraints for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `tintuc_ibfk_1` FOREIGN KEY (`id_manv`) REFERENCES `loainhanvien` (`maloainv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
