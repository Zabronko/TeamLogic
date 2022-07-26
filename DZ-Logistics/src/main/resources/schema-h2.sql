
create table Headquarters (
	headquarterId INT AUTO_INCREMENT,
	city VARCHAR(50),
    state VARCHAR(50),
    addressId INT
);

create table FreitTrucks (
	truckId INT AUTO_INCREMENT,
	routeId INT,
    statusId INT NOT_NULL
);

create table DeliveryTrucks (
	truckId INT AUTO_INCREMENT,
    headquarterId INT,
	routeId INT,
    statusId INT
);

create table Routes (
	routeId INT AUTO_INCREMENT,
    truckId Int
);

create table Packages (
	packageId INT AUTO_INCREMENT,
	description VARCHAR(50),
    routeId INT,
    customerId INT
);

create table Customers (
	customerId INT AUTO_INCREMENT,
	name VARCHAR(50),
    addressId INT
);

create table Status (
	statusId INT AUTO_INCREMENT,
	status VARCHAR(50)
);

create table Addresses (
	addressId INT AUTO_INCREMENT,
	address VARCHAR(50)
);