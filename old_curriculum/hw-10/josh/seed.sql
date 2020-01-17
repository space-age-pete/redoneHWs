CREATE DATABASE webstore;

CREATE TABLE products (
item_id INT AUTO_INCREMENT,
product_name VARCHAR(256),
department_name VARCHAR(256),
price INT,
stock_quantity INT,
PRIMARY KEY(item_id)
)

item_id INT PRIMARY KEY AUTO INCREMENT,

SELECT * FROM products

DROP TABLE products

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ('chair','furniture',25,100);