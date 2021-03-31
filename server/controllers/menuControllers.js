const db = require("../model/db_connection");



const menuController = {};

menuController.getAllMenus = (req,res,next) => {
  console.log("Get all menus"); 
  
  const {email} = req.body;
  console.log('body.email: ', req.body.email);
  
  const queryStr= `select menuName, _id from users inner join menu on emailFK = email where email=$1`;
  // const queryStr = `select * from menu`
  db.query(queryStr, [email])
    .then (data => {
      // console.log("ip result", ip);
      res.locals.data = data.rows;
      console.log('getall data: ', data)
      return next()
    }) 
    .catch(error => {
      console.log(error);
      return next(error); 
    })
};

menuController.saveMenu = (req,res,next) => {
  
};



module.exports = menuController;