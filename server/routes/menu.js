const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuControllers");



router.post("/saveMenu", menuController.saveMenu, (req, res) => {
  return res.json(res.locals.menus);
});

router.post("/menuID/:id", menuController.getMenu, (req, res) => {
  // console.log('param id', req.params.id)
  let menu = res.locals.data
  return res.json({menu})
});

router.post("/", menuController.getAllMenus, (req, res) => {
  console.log(res.locals.data)
  let menus = res.locals.data
  return res.json({menus})
});



module.exports = router;
