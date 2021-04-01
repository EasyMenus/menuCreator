const db = require("../model/db_connection");

const menuController = {};

menuController.getAllMenus = (req, res, next) => {
  console.log("Get all menus");

  const { email } = req.body;
  console.log("body.email: ", req.body.email);

  const queryStr = `select menuName, _id from users inner join menu on emailFK = email where email=$1`;
  db.query(queryStr, [email])
    .then((data) => {
      res.locals.data = data.rows;
      // console.log('getall data: ', data.rows)
      return next();
    })
    .catch((error) => {
      console.log(error);
      return next(error);
    });
};

menuController.getMenu = (req, res, next) => {
  // console.log("Get a specific menu");
  const { _id } = req.body;

  const queryStr = `  
    select 
      menu.emailFK,
      menu.menuName, 
      ms.sectionName, 
      fi.*
    from menu 
    inner join menusections ms on ms.menuID = menu._id
    inner join fooditem fi on fi.sectionID = ms._id
    where menu._id = $1`;

  db.query(queryStr, [_id])
    .then((data) => {
      res.locals.data = data.rows;
      // console.log('get menu data: ', data.rows)
      return next();
    })
    .catch((error) => {
      console.log(error);
      return next(error);
    });
};

menuController.saveMenu = (req, res, next) => {
  console.log(req.body)
  res.locals.menus = req.body;
  return next();
};

module.exports = menuController;
