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
	type VARCHAR(50),
    warehouseId INT not null,
    statusId INT not null,
    
    foreign key (warehouseId) references Warehouses(warehouseId),
    foreign key (statusId) references Status(statusId)
);


create table Packages (
	packageId INT AUTO_INCREMENT Primary Key,
	description VARCHAR(50),
	warehouseId INT,
    truckId INT,
    customerId INT not null,
    
    foreign key (warehouseId) references Warehouses(warehouseId),
    foreign key (truckId) references Trucks(truckId),
    foreign key (customerId) references Customers(customerId)
);


