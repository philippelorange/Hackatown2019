SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS PurchaseEntry CASCADE;
SET FOREIGN_KEY_CHECKS=1;

CREATE TABLE PurchaseEntry
(
  id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  purchaseName VARCHAR(30) NOT NULL,
  date DATE NOT NULL,
  amount DOUBLE(10,2) NOT NULL,
  metadata VARCHAR(30) NOT NULL
);

INSERT INTO PurchaseEntry (purchaseName, date, amount, metadata) VALUES ('BigMac','2017-1-05', 5.45, '');
INSERT INTO PurchaseEntry (purchaseName, date, amount, metadata) VALUES ('Hooker','2018-9-27', 420.99, '');
INSERT INTO PurchaseEntry (purchaseName, date, amount, metadata) VALUES ('Rakia','2018-10-22', 69, '');
INSERT INTO PurchaseEntry (purchaseName, date, amount, metadata) VALUES ('STD treatment','2018-12-25', 20.45, '');