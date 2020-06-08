/*
 Navicat Premium Data Transfer

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 100136
 Source Host           : localhost:3306
 Source Schema         : ecommerce

 Target Server Type    : MySQL
 Target Server Version : 100136
 File Encoding         : 65001

 Date: 08/06/2020 10:38:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `nama_product` varchar(60) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `gambar_product` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `harga_product` int(13) NOT NULL,
  `des_product` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `createdate` date NOT NULL,
  PRIMARY KEY (`id_product`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'Sepatu Sneaker', 'sneaker.jpg', 200000, 'kami menjual sepatu berkualitas semua ukuran', '2020-01-17');
INSERT INTO `product` VALUES (2, 'Sepatu Pantofel', 'pantofel.jpg', 500000, 'kami menjual sepatu pantofel 2020', '2020-01-30');

SET FOREIGN_KEY_CHECKS = 1;
