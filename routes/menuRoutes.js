const express = require("express");
const router = express.Router();
const MenuController = require("../controllers/menuController");

router.get("/", MenuController.getMenuPage);
router.post("/order", MenuController.orderMenu);

module.exports = router;
