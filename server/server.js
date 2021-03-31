if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const authRouter = require('./routes/auth')
const menuRouter = require('./routes/menu')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser())
app.use(express.json());
app.use(cors());
/**
 * handle static files
 */
// app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})
/**
 * TODO: 
 *  -save to a session redis DB
 *  -set expiration
 */
require('./passport');
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false,
  })
);

//intializes passport for all requests
app.use(passport.initialize())
app.use(passport.session())

//Router
app.use('/auth', authRouter);
app.use('/menus', menuRouter)

//Dashboard
app.get("/", 
  checkAuthenticated,  
  (req, res) => {
    console.log('at root /')
    req.session.viewCount +=1;
    res.sendFile(path.resolve(__dirname, "../index.html"));
});

// check to see if a user is authenticated
function checkAuthenticated(req,res,next){
  console.log('are you alive?')
  if (req.isAuthenticated()){
    return next()
  }
  res.redirect('/auth/login')
}
// check to see if a user is NOT authenticated
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { //passport feature
    return res.redirect('/')
  }
 return next();
}

const PORT = 3000;
app.listen(PORT, console.log("listening on port: ", PORT));

module.exports = app;

