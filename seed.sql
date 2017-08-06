# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.15)
# Database: bamazondb
# Generation Time: 2017-08-02 20:10:41 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `item_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `department_name` varchar(255) DEFAULT NULL,
  `price` decimal(11,2) DEFAULT NULL,
  `stock_qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`item_id`, `product_name`, `department_name`, `price`, `stock_qty`)
VALUES
	(1,'A Frame for Life: The Designs of StudioIlse','Home Improvement',36.92,69),
	(2,'The Anatomy of Type: A Graphic Guide to 100 Typefaces','Graphic Design',19.81,33),
	(3,'The Art Museum','History and Criticism',93.00,68),
	(4,'Do One Thing Every Day That Inspires You: A Creativity Journal ','Crafts',93.45,25),
	(5,'Visual Grammar','Architecture',13.82,43),
	(6,'The Open Daybook','History and Criticism',35.76,7),
	(7,'The Form of the Book: Essays on the Morality of Good Design ','Graphic Design',94.99,3),
	(8,'The ABC\'s of Bauhaus, The Bauhaus and Design Theory','History and Criticism',108.35,15),
	(9,'The Art of Looking Sideways','Graphic Design',34.96,78),
	(11,'Stop Stealing Sheep & Find Out How Type Works','Graphic Design',36.08,14),
	(12,'Specimens of Chromatic Wood Type','typography',28.44,13),
	(13,'Sagmeister: Made You Look','Graphic Design',93.45,32);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
