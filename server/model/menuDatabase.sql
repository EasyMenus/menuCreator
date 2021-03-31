/*
  Postgres table definitions for user authenticationa and validation
  Notes: localUsers, oauthUsers, userIp are modeled as weak entities
*/

/*************************************************/
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



/*************************************************/

/*
  Sample queries
*/

insert into users (firstName, lastName, email, pwd) values ('Lan', 'Bal','myemail@gmail.com');


insert into users (firstName, lastName, email, pwd) values ('user1', 'user1','user1@user1', 'hashfrombcrypt');

insert into menu (_id, menuName, emailFK) values (DEFAULT, 'First Menu', 'user1@user1');
insert into menu (_id, menuName, emailFK) values (DEFAULT, 'Second Menu', 'user1@user1');
insert into menu (_id, menuName, emailFK) values (DEFAULT, 'Third Menu', 'user1@user1');

select * from users inner join menu on emailFK = email;

select menuName, _id from users inner join menu on emailFK = email where email='user1@user1';