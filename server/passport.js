const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");
const path = require("path");
const db = require("./model/db_connection");

const customFields = {
  usernameField: "email",
  passwordField: "pwd",
};

/**
 * @param {*} username
 * @param {*} password
 * @param {*} done
 */
const verifyCallBackLocal = async (username, password, done) => {
  // console.log("START OF CALLBACK");
  const queryStrselect = `select * from users where email = $1`;
  db.query(queryStrselect, [username])
    .then((user) => {
      bcrypt
        .compare(password, user.rows[0].pwd)
        .then((result) => {
          if (result) {
            return done(null, user.rows[0]);
          } else {
            return done(null, false, { message: "Password incorrect" });
          }
        })
        .catch((error) => {
          done(error);
        });
    })
    .catch((error) => {
      done(error);
    });
};

/*
  Strategies
*/
const localStrategy = new LocalStrategy(customFields, verifyCallBackLocal);
passport.use(localStrategy);
/*
  Serialize - Deserialize
*/
passport.serializeUser((user, done) => {
  // console.log("SERIALIZE");
  return done(null, user.email);
});

passport.deserializeUser((email, done) => {
  // console.log("deSERIALIZE");
  const queryStr = `select * from users where email = $1`;
  //if user doesn't exist -> return done(null, false)
  db.query(queryStr, [email])
    .then((user) => {
      done(null, user.rows[0].email);
    })
    .catch((error) => {
      console.log("at getUserByEmail error: ", error);
    });
});
