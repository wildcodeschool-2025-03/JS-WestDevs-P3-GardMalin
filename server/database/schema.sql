CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  identifiant VARCHAR(150),
  password VARCHAR(255) NOT NULL
);

CREATE TABLE parent (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  address VARCHAR(250),
  phone_number VARCHAR(15),
  user_id INT,
  FOREIGN KEY(user_id),
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
  parent_id INT,
  FOREIGN KEY(parent_id),
  REFERENCES parent(id)
);

CREATE TABLE reservation (
  PRIMARY KEY (kid_id, nursery_id),
  date DATE
  is_validated BOOLEAN,
  kid_id INT,
  nursery_id INT,
  FOREIGN KEY (nursery_id),
  REFERENCES nursery(id),
  FOREIGN KEY (kid_id),
  REFERENCES kid(id)
);

CREATE TABLE nursery (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(150),
  address VARCHAR(250),
  phone_number VARCHAR(15),
  descripton VARCHAR(300),
  capacity INT,
  user_id INT,
  FOREIGN KEY(user_id),
  REFERENCES user(id)
);

INSERT INTO user (id, identifiant, password)
VALUES
  (1, "john@gmail.com", "1234"),
  (2, "nina@gmail.com", "5678"),
  (3, "axel@gmail.com", "9123");

INSERT INTO parent (id, firstname, lastname, adress, phone_number)
VALUES
  (1, "john", "rambo", "2 rue des favelas, 98500 Juven", "06 55 99 99 99"),
  (2, "nina", "williams", "98 rue du fightclub, 53999 Aren", "06 54 99 99 99"),
  
