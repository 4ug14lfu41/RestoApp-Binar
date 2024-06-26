const Order = require("../models/order");

exports.getOrders = (req, res) => {
  const orders = Order.getAllOrders();
  res.render("order", { orders });
};
