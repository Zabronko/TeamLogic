-- status
insert into Status (status) values ('Idle');
insert into Status (status) values ('Driving');

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

