CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(150) UNIQUE,
  role ENUM('parent', 'professional', 'admin') NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE parent (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  street VARCHAR(250),
  postal_code VARCHAR(5),
  city VARCHAR(250),
  phone_number VARCHAR(150),
  user_id INT UNSIGNED,
  FOREIGN KEY(user_id)
  REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE kid (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  gender ENUM('F', 'M', 'U') DEFAULT "U",
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  age INT NOT NULL,
  walker BOOLEAN,
  allergy VARCHAR(250),
  handicap BOOLEAN,
  parent_id INT UNSIGNED,
  FOREIGN KEY (parent_id) 
  REFERENCES parent(id) ON DELETE CASCADE
);

CREATE TABLE nursery (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(150),
  siret VARCHAR(17),
  street VARCHAR(250),
  postal_code VARCHAR(5),
  city VARCHAR(250),
  phone_number VARCHAR(15),
  description TEXT,
  capacity INT,
  user_id INT UNSIGNED,
  FOREIGN KEY(user_id)
  REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE reservation (
  kid_id INT UNSIGNED,
  nursery_id INT UNSIGNED,
  date VARCHAR(250),
  is_validated BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (kid_id, nursery_id, date),
  FOREIGN KEY (nursery_id) REFERENCES nursery(id) ON DELETE CASCADE,
  FOREIGN KEY (kid_id) REFERENCES kid(id) ON DELETE CASCADE
);

INSERT INTO user (email, password, role)
VALUES
  ("john@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$R1FUTjk2c0owYjZBamJLTQ$v48LC0PDqRhr7jpy1ifjtQ", "parent"),
  ("nina@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$V0pPYXdXeFFzWGdUbjZ1SA$SuoHm8nIke7Q3Adt4qfefA", "parent"),
  ("axel@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$a3NyTTVCMlFkR2Z3OXZWdQ$QXb8VjSH8aXAcBBmODOv5Q", "parent"),
  ("petitexplo@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$akFocWlhSXp3QXd5dnJ0RQ$Nuf6zLLHB2VNb4lL8S76PQ", "professional"),
  ("joyeuses@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$Q21mQ3ptWm4yZno3NVU4RA$QKtYc/uNvaSOeooFYfPP/A", "professional"),
  ("puzzle@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$S05NN3hGd2duTEVaa0x0dw$u7ld4NZP6s5WVTFU86CYwg", "professional"),
  ("admindu44@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$S1RxSkZwMEJUZGJKaWlXTA$rSnuSO7mEXCbR9oNHumYQA", "admin");

INSERT INTO parent (firstname, lastname, street, postal_code, city, phone_number,user_id)
VALUES
  ("John", "Wick", "2 rue des favelas", "98500", "Juven", "06 55 99 99 99", 1),
  ("Nina", "Williams", "98 rue du fightclub", "53999", "Aren", "06 54 99 99 99", 2),
  ("Axel", "Okalm", "55 rue de la zenitude", "25599", "Rakuen", "06 53 99 99 99", 3);

INSERT INTO kid (gender, firstname, lastname, age, walker, allergy, handicap, parent_id)
VALUES
  ("F", "Flora", "Wick", "8", 1, "aucune", 0, 1),
  ("F", "Shana", "Williams", "1", 0, "asthme", 0, 3),
  ("M", "Louis", "Okalm", "5", 1, "aucune", 1, 1),
  ("F","Floa", "Wick", "8", 1, "aucune", 0, 2),
  ("F","Shanny", "Williams", "1", 0, "asthme", 0, 1),
  ("U","Louison", "Okalm", "5", 1, "aucune", 1, 2),
  ("M","Ethan", "Lamar", "4", 1, "gluten", 0, 3),
  ("F","Maya", "Chen", "3", 0, "aucune", 0, 2),
  ("M","Noah", "Dubreuil", "6", 1, "lactose", 1, 3),
  ("F","Zoe", "Martens", "2", 0, "pollen", 0, 1),
  ("M","Leo", "Nguyen", "7", 1, "aucune", 0, 2);


INSERT INTO nursery (name, siret, street, postal_code, city, phone_number, description, capacity, user_id)
VALUES
  ("Les Petits Explorateurs", "83475219900018", "12 rue des érables", "33600", "Pessac" , "05 56 45 67 89", "Bienvenue dans notre établissement Les Petits Explorateurs, une crèche chaleureuse et innovante située en plein cœur d'un quartier verdoyant et familial. Notre structure accueille les enfants de 3 mois à 3 ans, dans un environnement sécurisé, stimulant et bienveillant, propice à l'éveil et au développement de chacun.", 50, 4),
  ("Les Coccinelles Joyeuses", "89234087100025", "5 allée des Acacias", "33600", "Pessac" , "05 56 45 67 89", "Bienvenue dans notre établissement Les Coccinelles Joyeuses, une crèche chaleureuse et innovante située en plein cœur d'un quartier verdoyant et familial. Notre structure accueille les enfants de 3 mois à 3 ans, dans un environnement sécurisé, stimulant et bienveillant, propice à l'éveil et au développement de chacun.", 5, 5),
  ("Puzzle & Petits Pas", "90176845200037", "22 rue des Tisserands", "33600", "Pessac", "05 56 23 45 67", "Bienvenue dans notre établissement Puzzle & Petits Pas, une crèche chaleureuse et innovante située en plein cœur d'un quartier verdoyant et familial. Notre structure accueille les enfants de 3 mois à 3 ans, dans un environnement sécurisé, stimulant et bienveillant, propice à l'éveil et au développement de chacun.", 128, 6);

INSERT INTO reservation (kid_id, nursery_id, date, is_validated) VALUES 
  (1, 1, "2025-07-03", true),
  (2, 3, "2025-07-04", true),
  (3, 1, "2025-07-05", true),
  (4, 2, "2025-07-04", true),
  (5, 2, "2025-07-04", true),
  (6, 2, "2025-07-04", true),
  (7, 2, "2025-07-04", true),
  (8, 2, "2025-07-04", true),
  (1, 1, "2025-06-05", true),
  (2, 3, "2025-06-14", true),
  (3, 1, "2025-06-15", true),
  (4, 2, "2025-06-14", true),
  (5, 2, "2025-06-04", true),
  (6, 2, "2025-06-24", true),
  (7, 2, "2025-06-14", true),
  (8, 2, "2025-06-04", true);