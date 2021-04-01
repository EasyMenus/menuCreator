const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers");

router.post("/menuID", menuController.getMenu, (req, res) => {
  // console.log(res.locals.data)
  let menu = res.locals.data
  return res.json({menu})
});

router.post("/", menuController.getAllMenus, (req, res) => {
  console.log(res.locals.data)
  let menus = res.locals.data
  return res.json({menus})
});

router.post("/saveMenu", menuController.saveMenu, (req, res) => {
  return res.json({ menus });
});



module.exports = router;
