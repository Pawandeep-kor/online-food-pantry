DROP DATABASE IF EXISTS food;
CREATE DATABASE food;
USE food;
CREATE TABLE food_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  count INT NOT NULL
);
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
INSERT INTO food_items (name, count) VALUES
('Apple', 10),
('Banana', 5),
('Orange', 15),
('5 kg of flour', 20);
SELECT * FROM food_items;

