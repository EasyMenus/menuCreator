const bcrypt = require("bcrypt");
const db = require("../model/db_connection");

/**
 * Controller that inserts a new user into the user and localUsers tables.
 *
 */
const userController = {};

userController.register = (req, res, next) => {
  console.log("at the authController....");
  const { firstname, lastname, email, pwd } = req.body;
  console.log("req.body", req.body);
  const queryStrUser = `insert into users (firstname, lastname, email, pwd) values 
                          ($1, $2, $3, $4);`;

  const saltRounds = 10;
  bcrypt.hash(pwd, saltRounds).then((hashedPassword) => {
    db.query(queryStrUser, [firstname, lastname, email, hashedPassword])
      .then((queryResult) => {
        console.log(queryResult.rows);
        console.log("before NEXT of db register");
        return next();
      })
      .catch((error) => {
        console.log("error during signup query: ", error);
        res.send("<h1>Error during signup</h1>");
      })
      .catch((error) => {
        console.log("error during hashing: ", error);
        return next(error);
      });
  });
};

module.exports = userController;
