-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2021 at 06:49 PM
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
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
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
-- Table structure for table `doituong`
--

CREATE TABLE `doituong` (
  `madt` int(10) NOT NULL,
  `tendt` varchar(200) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tgchinhsua` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `mahd` int(10) NOT NULL,
  `tennguoinhan` varchar(200) NOT NULL,
  `sdtnguoinhan` varchar(50) NOT NULL,
  `tonghoadon` int(50) NOT NULL,
  `phuongthucthanhtoan` tinyint(1) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `makh` int(10) NOT NULL,
  `tenkh` varchar(200) NOT NULL,
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
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
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
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tgchinhsua` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `masp` int(10) NOT NULL,
  `tensp` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `mota` varchar(200) NOT NULL,
  `trangthai` tinyint(1) NOT NULL,
  `tgtao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tgchinhsua` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `thuoghieu`
--

CREATE TABLE `thuoghieu` (
  `math` int(10) NOT NULL,
  `tenth` varchar(200) NOT NULL,
  `hinhanh` varchar(100) NOT NULL,
  `chitiet` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `tgchinhsua` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`mabl`);

--
-- Indexes for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`masp`,`mahd`),
  ADD KEY `mahd` (`mahd`),
  ADD KEY `masp` (`masp`);

--
-- Indexes for table `doituong`
--
ALTER TABLE `doituong`
  ADD PRIMARY KEY (`madt`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`mahd`);

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh`);

--
-- Indexes for table `lienhe`
--
ALTER TABLE `lienhe`
  ADD PRIMARY KEY (`malh`);

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
  ADD PRIMARY KEY (`manv`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`);

--
-- Indexes for table `thuoghieu`
--
ALTER TABLE `thuoghieu`
  ADD PRIMARY KEY (`math`);

--
-- Indexes for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`matt`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `mabl` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doituong`
--
ALTER TABLE `doituong`
  MODIFY `madt` int(10) NOT NULL AUTO_INCREMENT;

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
  MODIFY `maloai` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `manv` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masp` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thuoghieu`
--
ALTER TABLE `thuoghieu`
  MODIFY `math` int(10) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`mabl`) REFERENCES `nhanvien` (`manv`),
  ADD CONSTRAINT `binhluan_ibfk_2` FOREIGN KEY (`mabl`) REFERENCES `sanpham` (`masp`),
  ADD CONSTRAINT `binhluan_ibfk_3` FOREIGN KEY (`mabl`) REFERENCES `khachhang` (`makh`);

--
-- Constraints for table `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`);

--
-- Constraints for table `doituong`
--
ALTER TABLE `doituong`
  ADD CONSTRAINT `doituong_ibfk_1` FOREIGN KEY (`madt`) REFERENCES `sanpham` (`masp`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`mahd`) REFERENCES `khachhang` (`makh`);

--
-- Constraints for table `lienhe`
--
ALTER TABLE `lienhe`
  ADD CONSTRAINT `lienhe_ibfk_1` FOREIGN KEY (`malh`) REFERENCES `nhanvien` (`manv`);

--
-- Constraints for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD CONSTRAINT `nhanvien_ibfk_1` FOREIGN KEY (`manv`) REFERENCES `loainhanvien` (`maloainv`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`masp`) REFERENCES `thuoghieu` (`math`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`masp`) REFERENCES `loaisanpham` (`maloai`);

--
-- Constraints for table `tintuc`
--
ALTER TABLE `tintuc`
  ADD CONSTRAINT `tintuc_ibfk_1` FOREIGN KEY (`matt`) REFERENCES `nhanvien` (`manv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
