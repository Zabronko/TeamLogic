-- headquarters

insert into Headquarters (city, state) values ('Dallas', 'TX');
insert into Headquarters (city, state) values ('San Antonio', 'TX');
insert into Headquarters (city, state) values ('Tulsa', 'OK');
insert into Headquarters (city, state) values ('Oklahoma City', 'OK');
insert into Headquarters (city, state) values ('Little Rock', 'AR');
insert into Headquarters (city, state) values ('Albuquerque', 'NM');
insert into Headquarters (city, state) values ('New Orleans', 'LA');
insert into Headquarters (city, state) values ('Shreveport', 'LA');
insert into Headquarters (city, state) values ('Phoenix', 'AZ');

-- freit trucks
-- unpopulated for now

-- delivery trucks
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (null, 1, 1);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (1, 2, 1);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (6, 2, 2);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (7, 2, 2);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (9, 2, 3);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (10, 2, 3);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (13, 2, 4);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (14, 2, 4);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (15, 2, 5);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (16, 2, 5);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (null, 1, 6);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (23, 2, 6);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (24, 2, 7);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (25, 2, 7);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (null, 1, 8);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (29, 2, 8);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (null, 1, 9);
insert into DeliveryTrucks (routeId, statusId, headquarterId) values (null, 1, 9);

-- routes
insert into Routes (truckId) values (2);
insert into Routes (truckId) values (3);
insert into Routes (truckId) values (4);
insert into Routes (truckId) values (5);
insert into Routes (truckId) values (6);
insert into Routes (truckId) values (7);
insert into Routes (truckId) values (8);
insert into Routes (truckId) values (9);
insert into Routes (truckId) values (10);
insert into Routes (truckId) values (12);
insert into Routes (truckId) values (13);
insert into Routes (truckId) values (14);
insert into Routes (truckId) values (16);

-- packages
insert into Packages (routeId, customerId) values (1, 6);
insert into Packages (routeId, customerId) values (2, 22);
insert into Packages (routeId, customerId) values (3, 10);
insert into Packages (routeId, customerId) values (4, 21);
insert into Packages (routeId, customerId) values (5, 2);
insert into Packages (routeId, customerId) values (6, 16);
insert into Packages (routeId, customerId) values (7, 23);
insert into Packages (routeId, customerId) values (8, 20);
insert into Packages (routeId, customerId) values (9, 9);
insert into Packages (routeId, customerId) values (10, 7);
insert into Packages (routeId, customerId) values (11, 12);
insert into Packages (routeId, customerId) values (12, 17);
insert into Packages (routeId, customerId) values (13, 18);
insert into Packages (routeId, customerId) values (1, 16);
insert into Packages (routeId, customerId) values (2, 22);
insert into Packages (routeId, customerId) values (3, 5);
insert into Packages (routeId, customerId) values (4, 12);
insert into Packages (routeId, customerId) values (5, 7);
insert into Packages (routeId, customerId) values (6, 18);
insert into Packages (routeId, customerId) values (7, 19);
insert into Packages (routeId, customerId) values (8, 10);
insert into Packages (routeId, customerId) values (9, 6);
insert into Packages (routeId, customerId) values (10, 9);
insert into Packages (routeId, customerId) values (11, 3);
insert into Packages (routeId, customerId) values (12, 1);
insert into Packages (routeId, customerId) values (13, 18);
insert into Packages (routeId, customerId) values (1, 3);
insert into Packages (routeId, customerId) values (2, 12);
insert into Packages (routeId, customerId) values (3, 21);
insert into Packages (routeId, customerId) values (4, 8);
insert into Packages (routeId, customerId) values (5, 13);
insert into Packages (routeId, customerId) values (6, 13);
insert into Packages (routeId, customerId) values (7, 11);
insert into Packages (routeId, customerId) values (8, 11);
insert into Packages (routeId, customerId) values (9, 3);
insert into Packages (routeId, customerId) values (10, 3);
insert into Packages (routeId, customerId) values (11, 6);
insert into Packages (routeId, customerId) values (12, 14);
insert into Packages (routeId, customerId) values (13, 25);
insert into Packages (routeId, customerId) values (1, 6);
insert into Packages (routeId, customerId) values (2, 14);
insert into Packages (routeId, customerId) values (3, 10);
insert into Packages (routeId, customerId) values (4, 20);
insert into Packages (routeId, customerId) values (5, 16);
insert into Packages (routeId, customerId) values (6, 25);
insert into Packages (routeId, customerId) values (7, 5);
insert into Packages (routeId, customerId) values (8, 7);
insert into Packages (routeId, customerId) values (9, 8);
insert into Packages (routeId, customerId) values (10, 18);
insert into Packages (routeId, customerId) values (11, 14);
insert into Packages (routeId, customerId) values (12, 9);
insert into Packages (routeId, customerId) values (13, 6);

-- customers
insert into Customers (name, addressId) values ('Eddy Wooding', 1);
insert into Customers (name, addressId) values ('Nataline Petrillo', 2);
insert into Customers (name, addressId) values ('Larry Southerton', 3);
insert into Customers (name, addressId) values ('Obed Gunthorpe', 4);
insert into Customers (name, addressId) values ('Brandy O''Carmody', 5);
insert into Customers (name, addressId) values ('Davy Goodby', 6);
insert into Customers (name, addressId) values ('Benyamin Tolhurst', 7);
insert into Customers (name, addressId) values ('Lindy Mettricke', 8);
insert into Customers (name, addressId) values ('Giacobo Choke', 9);
insert into Customers (name, addressId) values ('Tallie Kobpa', 10);
insert into Customers (name, addressId) values ('Drud Allpress', 11);
insert into Customers (name, addressId) values ('Rheba Aymerich', 12);
insert into Customers (name, addressId) values ('Dunstan Sealey', 13);
insert into Customers (name, addressId) values ('Marlane Kruger', 14);
insert into Customers (name, addressId) values ('Farris Tweed', 15);
insert into Customers (name, addressId) values ('Leighton Neagle', 16);
insert into Customers (name, addressId) values ('Nobe Duffet', 17);
insert into Customers (name, addressId) values ('Ranee Godfrey', 18);
insert into Customers (name, addressId) values ('Zeke Brackstone', 19);
insert into Customers (name, addressId) values ('Marlowe Baigent', 20);
insert into Customers (name, addressId) values ('Evangelia Willshire', 21);
insert into Customers (name, addressId) values ('Britney Abell', 22);
insert into Customers (name, addressId) values ('Janek Radish', 23);
insert into Customers (name, addressId) values ('Falkner Soigne', 24);
insert into Customers (name, addressId) values ('Junina Gobert', 25);

-- status
insert into Status (status) values ('Idle');
insert into Status (status) values ('driving');

-- addresses
insert into Addresses (address) values ('32410 Bay Plaza');
insert into Addresses (address) values ('44251 Fulton Road');
insert into Addresses (address) values ('00943 Buena Vista Parkway');
insert into Addresses (address) values ('3532 Fairview Center');
insert into Addresses (address) values ('38 Dwight Junction');
insert into Addresses (address) values ('19 High Crossing Crossing');
insert into Addresses (address) values ('053 Morningstar Road');
insert into Addresses (address) values ('2 Prentice Pass');
insert into Addresses (address) values ('144 Sutherland Alley');
insert into Addresses (address) values ('7294 Melby Court');
insert into Addresses (address) values ('905 North Hill');
insert into Addresses (address) values ('65 Moulton Plaza');
insert into Addresses (address) values ('88162 Chinook Junction');
insert into Addresses (address) values ('7 Monica Avenue');
insert into Addresses (address) values ('5695 Service Lane');
insert into Addresses (address) values ('4742 Oxford Court');
insert into Addresses (address) values ('1 Lakewood Court');
insert into Addresses (address) values ('8 Sloan Plaza');
insert into Addresses (address) values ('482 Graceland Parkway');
insert into Addresses (address) values ('7834 Aberg Parkway');
insert into Addresses (address) values ('459 Grayhawk Junction');
insert into Addresses (address) values ('693 Little Fleur Center');
insert into Addresses (address) values ('051 Hauk Park');
insert into Addresses (address) values ('6603 Anthes Circle');
insert into Addresses (address) values ('75 Logan Place');