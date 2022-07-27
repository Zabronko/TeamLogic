DROP DATABASE IF EXISTS `logistics`;
CREATE DATABASE `logistics`;
USE `logistics`;


create table Customers (
	customerId INT Primary Key AUTO_INCREMENT,
	name VARCHAR(50),
    address VARCHAR(50)
);

create table Status (
	statusId INT Primary Key AUTO_INCREMENT,
	status VARCHAR(50)
);

create table Headquarters (
	headquarterId INT Primary Key AUTO_INCREMENT,
	city VARCHAR(50),
    state VARCHAR(50)
);

create table Routes (
	routeId INT Primary Key AUTO_INCREMENT
);

create table Packages (
	packageId INT Primary Key AUTO_INCREMENT,
	description VARCHAR(50),
    routeId INT,
    customerId INT,
    foreign key (routeId) references Routes(routeId),
    foreign key (customerId) references Customers(customerId)
);

create table DeliveryTrucks (
	truckId INT Primary Key AUTO_INCREMENT,
    headquarterId INT,
	routeId INT,
    statusId INT,
    foreign key (headquarterId) references Headquarters(headquarterId),
    foreign key (routeId) references Routes(routeId),
    foreign key (statusId) references Status(statusId)
);







