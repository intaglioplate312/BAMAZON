CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (225),
    department_name VARCHAR (255),
    price DECIMAL (10.2) NULL,
    stock_qty INT NULL,
    PRIMARY KEY (item_id)
);