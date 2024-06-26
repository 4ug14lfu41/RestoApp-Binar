const MenuService = require("../models/menu");
const OrderService = require("../models/order");

class MenuController {
  static getMenuPage(req, res) {
    const menu = MenuService.getAllMenu();
    res.render("menu", { menu });
  }

  static orderMenu(req, res) {
    const orders = req.body.map((order) => {
      const item = MenuService.getMenuItemById(order.id);
      return {
        id: order.id,
        name: item.name,
        price: item.price,
      };
    });
    OrderService.addOrder(orders);
    res.status(201).send("Order placed successfully!");
  }
}

module.exports = MenuController;
