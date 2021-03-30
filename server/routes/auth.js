const express = require('express');
const path = require('path');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt')

const authController = require('../controllers/authController')

router.post('/register', authController.register, (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    console.log('user', user)
    if (err) { 
      return next(err); 
    }
    if (!user) { 
      return res.redirect('/login'); 
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      return res.redirect('/profile/');
    });
  })(req, res, next);
});

/*
  TODO: Redirect or flash -> login error, or user email or pwd doesn't match ect..
*/
router.post('/login', function(req, res, next) {
  console.log('req.bodyr', req.body)
  passport.authenticate('local', function(err, user, info) {
    console.log('info', info)
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/home');
    });
  })(req, res, next);
});

module.exports = router;