DROP DATABASE IF EXISTS `logistics`;
CREATE DATABASE `logistics`;
USE `logistics`;


create table Status (
	statusId INT AUTO_INCREMENT Primary Key,
	status VARCHAR(50)
);

create table Customers (
	customerId INT AUTO_INCREMENT Primary Key,
	name VARCHAR(50) not null,
   	address VARCHAR(100) not null,
   	city VARCHAR(50) not null,
   	state VARCHAR(50) not null
);

create table Warehouses (
	warehouseId INT AUTO_INCREMENT Primary Key,
	city VARCHAR(50) not null,
    state VARCHAR(50) not null
);

create table Trucks (
	truckId INT AUTO_INCREMENT Primary Key,
	type VARCHAR(50) not null DEFAULT 'Delivery',
	capacity INT not null DEFAULT 50,
    warehouseId INT,
    statusId INT not null DEFAULT 1,
    
    foreign key (warehouseId) references Warehouses(warehouseId),
    foreign key (statusId) references Status(statusId)
);


create table Packages (
	packageId INT AUTO_INCREMENT Primary Key,
	description VarChar(100) not null Default('none'),
	warehouseId INT,
    truckId INT,
    customerId INT,
    statusId INT not null DEFAULT(1),
    LastCheckIn VarChar(200),
    
    foreign key (warehouseId) references Warehouses(warehouseId),
    foreign key (truckId) references Trucks(truckId),
    foreign key (customerId) references Customers(customerId)
);

-- users table
create table Users (
	username VARCHAR(50) Primary Key,
	password VARCHAR(100) not null,
	enabled boolean not null,
	customerId INT,
	truckId INT,
	
	foreign key (customerId) references Customers(customerId)
);

create table authorities (
	username VARCHAR(50) not null,
	authority VARCHAR(50) not null,
	foreign key (username) references users(username)
);


-- status
insert into Status (status) values ('Idle');
insert into Status (status) values ('Driving');
insert into Status (status) values ('On Truck');
insert into Status (status) values ('In Route');
insert into Status (status) values ('Delivered');

-- customers
insert into Customers (name, address, city, state) values ('Eddy Wooding', '32410 Bay Plaza', 'Dallas', 'TX');
insert into Customers (name, address, city, state) values ('Nataline Petrillo', '44251 Fulton Road', 'San Antonio', 'TX');
insert into Customers (name, address, city, state) values ('Larry Southerton', '00943 Buena Vista Parkway', 'Tulsa', 'OK');
insert into Customers (name, address, city, state) values ('Obed Gunthorpe', '3532 Fairview Center', 'Oklahoma City', 'OK');
insert into Customers (name, address, city, state) values ('Brandy O''Carmody', '38 Dwight Junction', 'Little Rock', 'AR');
insert into Customers (name, address, city, state) values ('Davy Goodby', '19 High Crossing Crossing', 'Albuquerque', 'NM');
insert into Customers (name, address, city, state) values ('Benyamin Tolhurst', '053 Morningstar Road', 'New Orleans', 'LA');
insert into Customers (name, address, city, state) values ('Lindy Mettricke', '2 Prentice Pass', 'Shreveport', 'LA');
insert into Customers (name, address, city, state) values ('Giacobo Choke', '144 Sutherland Alley', 'Phoenix', 'AZ');
insert into Customers (name, address, city, state) values ('Tallie Kobpa', '7294 Melby Court', 'Dallas', 'TX');
insert into Customers (name, address, city, state) values ('Drud Allpress', '905 North Hill', 'San Antonio', 'TX');
insert into Customers (name, address, city, state) values ('Rheba Aymerich', '65 Moulton Plaza', 'Tulsa', 'OK');
insert into Customers (name, address, city, state) values ('Dunstan Sealey', '88162 Chinook Junction', 'Oklahoma City', 'OK');
insert into Customers (name, address, city, state) values ('Marlane Kruger', '7 Monica Avenue', 'Little Rock', 'AR');
insert into Customers (name, address, city, state) values ('Farris Tweed', '5695 Service Lane', 'Albuquerque', 'NM');
insert into Customers (name, address, city, state) values ('Leighton Neagle', '4742 Oxford Court', 'New Orleans', 'LA');
insert into Customers (name, address, city, state) values ('Nobe Duffet', '1 Lakewood Court', 'Shreveport', 'LA');
insert into Customers (name, address, city, state) values ('Ranee Godfrey', '8 Sloan Plaza', 'Phoenix', 'AZ');
insert into Customers (name, address, city, state) values ('Zeke Brackstone', '482 Graceland Parkway', 'Dallas', 'TX');
insert into Customers (name, address, city, state) values ('Marlowe Baigent', '7834 Aberg Parkway', 'San Antonio', 'TX');


-- headquarters

insert into Warehouses (city, state) values ('Dallas', 'TX');
insert into Warehouses (city, state) values ('San Antonio', 'TX');
insert into Warehouses (city, state) values ('Tulsa', 'OK');
insert into Warehouses (city, state) values ('Oklahoma City', 'OK');
insert into Warehouses (city, state) values ('Little Rock', 'AR');
insert into Warehouses (city, state) values ('Albuquerque', 'NM');
insert into Warehouses (city, state) values ('New Orleans', 'LA');
insert into Warehouses (city, state) values ('Shreveport', 'LA');
insert into Warehouses (city, state) values ('Phoenix', 'AZ');


-- trucks
insert into Trucks (statusId, warehouseId) values (1, 1);
insert into Trucks (statusId, warehouseId) values (1, 1);
insert into Trucks (statusId, warehouseId) values (1, 2);
insert into Trucks (statusId, warehouseId) values (1, 2);
insert into Trucks (statusId, warehouseId) values (1, 3);
insert into Trucks (statusId, warehouseId) values (1, 3);
insert into Trucks (statusId, warehouseId) values (1, 4);
insert into Trucks (statusId, warehouseId) values (1, 4);
insert into Trucks (statusId, warehouseId) values (1, 5);
insert into Trucks (statusId, warehouseId) values (1, 5);
insert into Trucks (statusId, warehouseId) values (1, 6);
insert into Trucks (statusId, warehouseId) values (1, 6);
insert into Trucks (statusId, warehouseId) values (1, 7);
insert into Trucks (statusId, warehouseId) values (1, 7);
insert into Trucks (statusId, warehouseId) values (1, 8);
insert into Trucks (statusId, warehouseId) values (1, 8);
insert into Trucks (statusId, warehouseId) values (1, 9);
insert into Trucks (statusId, warehouseId) values (1, 9);


-- packages
insert into Packages (warehouseId, customerId) values (1, 1);
insert into Packages (warehouseId, customerId) values (2, 2);
insert into Packages (warehouseId, customerId) values (3, 3);
insert into Packages (warehouseId, customerId) values (4, 4);
insert into Packages (warehouseId, customerId) values (5, 5);
insert into Packages (warehouseId, customerId) values (6, 6);
insert into Packages (warehouseId, customerId) values (7, 7);
insert into Packages (warehouseId, customerId) values (8, 8);
insert into Packages (warehouseId, customerId) values (9, 9);
insert into Packages (warehouseId, customerId) values (1, 10);
insert into Packages (warehouseId, customerId) values (2, 11);
insert into Packages (warehouseId, customerId) values (3, 12);
insert into Packages (warehouseId, customerId) values (4, 13);
insert into Packages (warehouseId, customerId) values (5, 14);
insert into Packages (warehouseId, customerId) values (6, 15);
insert into Packages (warehouseId, customerId) values (7, 16);
insert into Packages (warehouseId, customerId) values (8, 17);
insert into Packages (warehouseId, customerId) values (9, 18);
insert into Packages (warehouseId, customerId) values (1, 19);
insert into Packages (warehouseId, customerId) values (2, 20);

-- users
insert into Users(username,password,enabled) values('employee','$2a$04$dGNVCgMxXW4WssgC3W1sy.n9fAJAe2DKfQWKcsfNZgeuF0KJKZ7kq', true);
insert into Users(username,password,enabled,customerId) values('EddyW','$2a$04$hTNib9WfCjpZkWrUE8X0ceBlwyNen.C1MUtS0iowTozo3M1uLtZ06',true,1);
insert into Users(username,password,enabled) values('Dan','$2a$04$yTlvhLvN/bB3FeG3LF1LKOd38.lPsXOux8yD7tedJ.S9mQF2Nh4sC',true);

-- authorities
insert into authorities values('employee', 'ROLE_ADMIN');
insert into authorities values('EddyW', 'ROLE_USER');
insert into authorities values('Dan', 'ROLE_DRIVER');










