const OrderService = require("../models/order");

class OrderController {
  static getOrderPage(req, res) {
    const orders = OrderService.getAllOrders();
    res.render("order", { orders });
  }
}

module.exports = OrderController;
