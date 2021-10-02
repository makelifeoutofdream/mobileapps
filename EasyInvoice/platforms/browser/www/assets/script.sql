CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name varchar(200), 
    email varchar(200),
    mobile_number varchar(200),   
    user_password varchar(200)
);

CREATE TABLE IF NOT EXISTS customer(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name varchar(200), 
    customer_location varchar(200),
    vat float,
    contact_person varchar(200),   
    mobile_number varchar(200) 
);


CREATE TABLE IF NOT EXISTS invoice(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoice_number varchar(200), 
    item varchar(200),
    invoice_date date,
    quantity integer,
    unit_price double,
    total_proce double,   
    customer_id integer,
    foreign key (customer_id) references customer(id) 
);


CREATE TABLE IF NOT EXISTS inventory(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name varchar(200), 
    quantity integer,
    unit_price double
);

insert into user (    first_name , 
    email,
    mobile_number ,   
    user_password ) values ('test','test@test.com','123456','test');