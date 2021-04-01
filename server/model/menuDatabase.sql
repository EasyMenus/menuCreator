/*
  Postgres table definitions for user authenticationa and validation
  Notes: localUsers, oauthUsers, userIp are modeled as weak entities
*/


DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    firstName varchar NOT NULL,
    lastName varchar NOT NULL,
    email varchar PRIMARY KEY,
    pwd varchar NOT NULL
);

CREATE TABLE menu(
  _id serial PRIMARY KEY,
  menuData jsonb,
  emailFK varchar NOT NULL,
  FOREIGN KEY (emailFK) 
    REFERENCES users(email)
);



DROP TABLE IF EXISTS menu;







/*************************************************/
DROP TABLE IF EXISTS fooditem;
DROP TABLE IF EXISTS menusections;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS users;


CREATE TABLE users(
    firstName varchar NOT NULL,
    lastName varchar NOT NULL,
    email varchar PRIMARY KEY,
    pwd varchar NOT NULL
);

CREATE TABLE menu(
  _id serial PRIMARY KEY,
  menuName varchar NOT NULL,
  emailFK varchar NOT NULL,
  FOREIGN KEY (emailFK) 
    REFERENCES users(email)
);


CREATE TABLE menusections(
  _id serial PRIMARY KEY,
  menuID integer NOT NULL,
  sectionName varchar NOT NULL,
  FOREIGN KEY (menuID) 
    REFERENCES menu(_id)
);


CREATE TABLE fooditem(
  _id serial PRIMARY KEY,
  itemName varchar NOT NULL,
  sectionID integer NOT NULL,
  imageText text NOT NULL,
  price varchar NOT NULL,
  description varchar NOT NULL,
  FOREIGN KEY (sectionID) 
    REFERENCES menusections(_id)
);



/*************************************************/

/*
  Sample queries
*/

insert into menu (_id, menuName, emailFK) values (DEFAULT, 'First Menu', 'user1');

insert into menu (_id, menuName, emailFK) values (DEFAULT, 'Second Menu', 'user1');

insert into menusections(_id, menuID, sectionName) values (DEFAULT, 1, 'Bfast');
insert into menusections(_id, menuID, sectionName) values (DEFAULT, 1, 'Wings');
insert into menusections(_id, menuID, sectionName) values (DEFAULT, 1, 'Lunch');
insert into menusections(_id, menuID, sectionName) values (DEFAULT, 1, 'Smacked Snacks!');

insert 
  into fooditem(_id, itemName, sectionID, imageText, price, description) 
  values (DEFAULT, 'Eggs' , 1, '.base64_image', '4.99', 'Two eggs');

insert 
  into fooditem(_id, itemName, sectionID, imageText, price, description) 
  values (DEFAULT, 'Water' , 1, '.base64_image', '.99', 'Money for water here.');

insert 
  into fooditem(_id, itemName, sectionID, imageText, price, description) 
  values (DEFAULT, 'Classic Hot Wings' , 2, '.base64_image', '11.99', 'Awesome');

insert 
  into fooditem(_id, itemName, sectionID, imageText, price, description) 
  values (DEFAULT, 'Wing-in Hot Wings' , 2, '.base64_image', '11.99', '10 wings bone in.');


 select 
      menu.menuName, 
      ms.sectionName, 
      fi.*
    from menu 
    inner join menusections ms on ms.menuID = menu._id
    inner join fooditem fi on fi.sectionID = ms._id
    where menu._id = 1


insert into users (firstName, lastName, email, pwd) values ('Lan', 'Bal','myemail@gmail.com');


insert into users (firstName, lastName, email, pwd) values ('user1', 'user1','user1@user1', 'hashfrombcrypt');

insert into menu (_id, menuName, emailFK) values (DEFAULT, 'First Menu', 'user1@user1');
insert into menu (_id, menuName, emailFK) values (DEFAULT, 'Second Menu', 'user1@user1');
insert into menu (_id, menuName, emailFK) values (DEFAULT, 'Third Menu', 'user1@user1');

select * from users inner join menu on emailFK = email;

select menuName, _id from users inner join menu on emailFK = email where email='user1@user1';