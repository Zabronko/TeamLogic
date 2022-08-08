
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
	description VARCHAR(100) not null DEFAULT('none'),
	warehouseId INT,
    truckId INT,
    customerId INT,
    statusId INT not null DEFAULT(1),
    
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
	
	foreign key (customerId) references Customers(customerId)
);

create table authorities (
	username VARCHAR(50) not null,
	authority VARCHAR(50) not null,
	foreign key (username) references users(username)
);


