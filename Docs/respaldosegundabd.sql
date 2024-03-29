-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: segundabd
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tabla3`
--

DROP TABLE IF EXISTS `tabla3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tabla3` (
  `ID_anotherone` tinyint(4) DEFAULT NULL,
  `col2` tinyint(4) DEFAULT NULL,
  `col4` int(11) DEFAULT NULL,
  `col3` tinyint(1) DEFAULT NULL,
  `col5` char(1) DEFAULT NULL,
  `col6` tinytext DEFAULT NULL,
  `col7` varchar(50) DEFAULT NULL,
  `col8` varchar(50) DEFAULT 'He escrito',
  `ID_noOrdermayb` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID_noOrdermayb`),
  UNIQUE KEY `ID_anotherone` (`ID_anotherone`),
  UNIQUE KEY `col5` (`col5`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla3`
--

LOCK TABLES `tabla3` WRITE;
/*!40000 ALTER TABLE `tabla3` DISABLE KEYS */;
INSERT INTO `tabla3` VALUES (NULL,12,NULL,NULL,NULL,NULL,NULL,'He escrito',1),(NULL,13,NULL,NULL,NULL,NULL,NULL,'He escrito',2),(NULL,17,NULL,NULL,NULL,NULL,NULL,'He escrito',3);
/*!40000 ALTER TABLE `tabla3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabla4`
--

DROP TABLE IF EXISTS `tabla4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tabla4` (
  `ID_tabla` int(11) NOT NULL AUTO_INCREMENT,
  `col2` varchar(50) NOT NULL,
  `col3` tinyint(4) DEFAULT NULL,
  `col4` smallint(6) DEFAULT NULL CHECK (`col4` <= 8000),
  `col5` char(120) DEFAULT 'Hola',
  PRIMARY KEY (`ID_tabla`),
  UNIQUE KEY `col3` (`col3`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla4`
--

LOCK TABLES `tabla4` WRITE;
/*!40000 ALTER TABLE `tabla4` DISABLE KEYS */;
/*!40000 ALTER TABLE `tabla4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablaforanea`
--

DROP TABLE IF EXISTS `tablaforanea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tablaforanea` (
  `ID` tinyint(4) NOT NULL AUTO_INCREMENT,
  `palabra` char(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablaforanea`
--

LOCK TABLES `tablaforanea` WRITE;
/*!40000 ALTER TABLE `tablaforanea` DISABLE KEYS */;
INSERT INTO `tablaforanea` VALUES (1,'Ma├▒ana'),(2,'Hola'),(3,'Agua'),(4,'Arollo'),(5,'Molino'),(6,'Buenas');
/*!40000 ALTER TABLE `tablaforanea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablaprimaria`
--

DROP TABLE IF EXISTS `tablaprimaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tablaprimaria` (
  `ID_Primaria` tinyint(4) NOT NULL AUTO_INCREMENT,
  `ID` tinyint(4) DEFAULT NULL,
  `palabra2` char(50) DEFAULT NULL,
  PRIMARY KEY (`ID_Primaria`),
  KEY `ID` (`ID`),
  CONSTRAINT `tablaprimaria_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `tablaforanea` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablaprimaria`
--

LOCK TABLES `tablaprimaria` WRITE;
/*!40000 ALTER TABLE `tablaprimaria` DISABLE KEYS */;
INSERT INTO `tablaprimaria` VALUES (1,1,'Desayuno'),(2,5,'Energ├¡a'),(3,6,'tardes');
/*!40000 ALTER TABLE `tablaprimaria` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-15  0:36:02
