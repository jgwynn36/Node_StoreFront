DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR (50) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES
    ("Echo Dot", "Electronic", 49.99, 1000);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Iphone Case", "Cell Phone & Accessorires", 7.99, 100);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("The Lion King DVD", "Video - Movie", 19.99, 500);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Lap Desk", "Office & School Supplies", 25.00, 50);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Echo Dot", "Electronic", 49.99, 1000);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Echo Dot", "Electronic", 49.99, 1000);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Echo Dot", "Electronic", 49.99, 1000);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Echo Dot", "Electronic", 49.99, 1000);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Echo Dot", "Electronic", 49.99, 1000);

INSERT INTO products
    (product_name, department_name, price,stock_quantity)
VALUES("Echo Dot", "Electronic", 49.99, 1000)