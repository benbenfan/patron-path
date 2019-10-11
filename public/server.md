## Database Header
C:\Data> mysql –u <username> -p
create database eatstreet

## Create Table
mysql -u root -p --local-infile eatstreet
SET GLOBAL local_infile = 1;

CREATE TABLE zip( zipcode INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, city VARCHAR(45) , mixedcity VARCHAR(45) , statecode VARCHAR(45), stateFIPS TINYINT DEFAULT 0, county VARCHAR(45), mixedcounty VARCHAR(45), countyFIPS VARCHAR(45), latitude DECIMAL(10,6) , longitude DECIMAL(10,6), gmt TINYINT DEFAULT 0, dst CHAR); 

select * from zip where zipcode = (select max(zipcode) from zip);

## Load Data
load data local infile './ZIP.csv' into table zip fields terminated by ',' lines terminated by '\r\n';

## Test Queries
INSERT INTO `users` (`user_id`, `username`, `password`, `isAdmin`, `email`, `handle`,`created_at`) VALUES('291582651', 'John Cena', 'kJFDLci81lzldeuigkja', '1', 'john.cena[at]fanfamily.org', 'johnCena', NOW());

INSERT INTO `logs`(`time`,`user_id`,`line_text`,`room_id`,`chat_id`) VALUES (NOW(),"242518965","where is everyone?","0000","9999");