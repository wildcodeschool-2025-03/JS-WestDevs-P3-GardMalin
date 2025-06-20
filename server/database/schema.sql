CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(150) UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE parent (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  address VARCHAR(250),
  phone_number VARCHAR(15),
  user_id INT UNSIGNED,
  FOREIGN KEY(user_id)
  REFERENCES user(id)
);

CREATE TABLE kid (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  age INT NOT NULL,
  walker BOOLEAN,
  allergy VARCHAR(250),
  handicap BOOLEAN,
  parent_id INT UNSIGNED,
  FOREIGN KEY(parent_id)
  REFERENCES parent(id)
);

CREATE TABLE nursery (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(150),
  address VARCHAR(250),
  phone_number VARCHAR(15),
  descripton VARCHAR(300),
  capacity INT,
  user_id INT UNSIGNED,
  FOREIGN KEY(user_id)
  REFERENCES user(id)
);

CREATE TABLE reservation (
  PRIMARY KEY (kid_id, nursery_id),
  date DATE,
  is_validated BOOLEAN,
  kid_id INT UNSIGNED,
  nursery_id INT UNSIGNED,
  FOREIGN KEY (nursery_id)
  REFERENCES nursery(id),
  FOREIGN KEY (kid_id)
  REFERENCES kid(id)
);

INSERT INTO user (email, password)
VALUES
  ("john@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$NkVScVltZmFJaXBFTlhaYQ$XvoBBLr+0DEPuB7W/4BfWQ"),
  ("nina@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$V0pPYXdXeFFzWGdUbjZ1SA$SuoHm8nIke7Q3Adt4qfefA"),
  ("axel@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$a3NyTTVCMlFkR2Z3OXZWdQ$QXb8VjSH8aXAcBBmODOv5Q");

INSERT INTO parent (firstname, lastname, address, phone_number)
VALUES
  ("John", "Wick", "2 rue des favelas, 98500 Juven", "06 55 99 99 99"),
  ("Nina", "Williams", "98 rue du fightclub, 53999 Aren", "06 54 99 99 99"),
  ("Axel", "Okalm", "55 rue de la zenitude, 25599", "06 53 99 99 99" );

INSERT INTO kid (firstname, lastname, age, walker, allergy, handicap)
VALUES
  ("Flora", "Wick", "8", 1, "aucune", 0),
  ("Shana", "Williams", "1", 0, "asthme", 0),
  ("Louis", "Okalm", "5", 1, "aucune", 1);

INSERT INTO nursery (name, address, phone_number, capacity)
VALUES
  ("Les Petits Explorateurs", "12 rue des érables, 75000 Paris" , "01 23 45 67 89", 50),
  ("Les Coccinelles Joyeuses", "5 allée des Acacias, 69000 Lyon", "04 78 12 34 56", 25),
  ("Puzzle & Petits Pas", "22 rue des Tisserands 31000 Toulouse", "05 61 23 45 67", 128);