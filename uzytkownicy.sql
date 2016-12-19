-- phpMyAdmin SQL Dump
-- version 4.7.0-dev
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.30.23
-- Generation Time: Dec 14, 2016 at 08:25 AM
-- Server version: 5.5.52-0+deb8u1
-- PHP Version: 7.0.14-1+0~20161212122340.19+jessie~1.gbp8dc455

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `OGLOSZENIOWA`
--

-- --------------------------------------------------------

--
-- Table structure for table `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id` int(11) NOT NULL,
  `mail` varchar(80) COLLATE utf8_polish_ci NOT NULL,
  `imie` varchar(80) COLLATE utf8_polish_ci NOT NULL,
  `nazwisko` varchar(80) COLLATE utf8_polish_ci NOT NULL,
  `nick` varchar(80) COLLATE utf8_polish_ci NOT NULL,
  `haslo` varchar(120) COLLATE utf8_polish_ci NOT NULL,
  `datarej` date NOT NULL,
  `punkty` int(11) NOT NULL,
  `ogloszenia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci ROW_FORMAT=COMPACT;

--
-- Dumping data for table `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`mail`, `imie`, `nazwisko`, `nick`, `haslo`, `datarej`, `punkty`, `ogloszenia`) VALUES
('wojtekzom@gmail.com', 'Wojtas', 'Zom', 'pokulan', 'd8578edf8458ce06fbc5bb76a58c5ca4', '2016-12-12', 5, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `uzytkownicy`
--
ALTER TABLE `kategoria`
  ADD PRIMARY KEY (`id`),

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `uzytkownicy`
--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
