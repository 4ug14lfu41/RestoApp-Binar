const Menu = require("../models/menu");

exports.getMenu = (req, res) => {
  const menu = Menu.getAllMenu();
  res.render("menu", { menu });
};

exports.orderMenu = (req, res) => {
  const order = req.body;
  Menu.orderMenu(order);
  res.redirect("/order");
};
