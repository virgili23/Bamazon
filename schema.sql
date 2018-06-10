CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER(3) NOT NULL,
    product_name VARCHAR(20)  NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "snickers", "candy", 3, 235);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "milky way", "candy", 2, 107);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "crunch", "candy", 2, 560);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "m&ms", "candy", 2, 670);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Kit Kat", "candy", 2, 340);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "milk duds", "candy", 2, 440);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "whoppers", "candy", 3, 750);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "sour patch", "candy", 1, 365);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "skittles", "candy", 2, 846);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Twix", "candy", 1, 235);

SELECT*FROM products;
