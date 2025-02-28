CREATE TABLE cameras (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
brand varchar(30) NOT NULL,
title varchar(30) NOT NULL,
technology varchar(30) NOT NULL,
condition varchar(30) NOT NULL,
production_year date NOT NULL,
price integer NOT NULL)
;

INSERT INTO cameras (brand, title, technology, condition, production_year, price) VALUES ('Nikon','F-301','analog','used','1985-01-01','300');
INSERT INTO cameras (brand, title, technology, condition, production_year, price) VALUES ('Pentax','Asahi SV','analog','used','1962-01-01','230');
INSERT INTO cameras (brand, title, technology, condition, production_year, price) VALUES ('Canon','AF-7','analog','used','1994-01-01','40');
INSERT INTO cameras (brand, title, technology, condition, production_year, price) VALUES ('Leica','R5','analog','used','1986-01-01','330');
INSERT INTO cameras (brand, title, technology, condition, production_year, price) VALUES ('Kodak','Brownie Hawkeye','analog','used','1985-01-01','1000');
