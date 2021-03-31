const express = require("express");
const path = require("path");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

const authController = require("../controllers/authController");

router.post("/register", authController.register, (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      res.locals.newUser = user;
      return res.status(200).json({ user: res.locals.newUser });
    });
  })(req, res, next);
});

/*
  TODO: Redirect or flash -> login error, or user email or pwd doesn't match ect..
*/
router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      res.locals.newUser = user;
      return res.status(200).json({ user: res.locals.newUser });
    });
  })(req, res, next);
});

module.exports = router;
