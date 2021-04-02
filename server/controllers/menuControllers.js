const db = require("../model/db_connection");

const menuController = {};

menuController.getAllMenus = (req, res, next) => {
  console.log("Get all menus");

  const { email } = req.body;
  console.log("body.email: ", req.body.email);

  // const queryStr = `select menuName, _id from users inner join menu on emailFK = email where email=$1`;
  const queryStr = `select * from menu where emailFK=$1`
  db.query(queryStr, [email])
    .then((data) => {
      console.log('data back from menu')
      res.locals.data = data.rows;
      console.log('getall data: ', data.rows)
      return next();
    })
    .catch((error) => {
      console.log(error);
      return next(error);
    });
};

/**
 * Get a single menu by providing the menu _id
 */
menuController.getMenu = (req, res, next) => {
  // console.log("Get a specific menu");
  const { id } = req.params;
  // console.log('what is the id', _id)
  const queryStr = `select * from menu where _id = $1`;

  db.query(queryStr, [id])
    .then((data) => {
      console.log('rows from data: ', data.rows)
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
  const body = req.body;
  const email = body.email;
  
  const queryStr = `insert into menu (_id, menuData, emailFK)
                    values (DEFAULT, $1 , $2)`;

  db.query(queryStr, [body, email])
    .then((data) => {
      console.log('after menu insert', data)
      return next();
    })
    .catch((error) => {
      console.log('error inserting new menu', error);
      return next(error);
    });

};

module.exports = menuController;