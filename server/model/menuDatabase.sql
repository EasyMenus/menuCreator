/*
  Postgres table definitions for user authenticationa and validation
  Notes: localUsers, oauthUsers, userIp are modeled as weak entities
*/

/*************************************************/
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    firstname varchar NOT NULL,
    lastname varchar NOT NULL,
    email varchar PRIMARY KEY,
    pwd varchar NOT NULL
);

CREATE TABLE menu(
  _id serial PRIMARY KEY,
  email_fk varchar NOT NULL,
  FOREIGN KEY (email_fk) 
    REFERENCES users(email)
);



/*************************************************/

/*
  Sample queries
*/

insert into users (firstName, lastName, email, pwd) values ('Lan', 'Bal','myemail@gmail.com');


insert into users (firstName, lastName, email, pwd) values ('user1', 'user1','user1@user1', 'hashfrombcrypt');
