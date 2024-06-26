class Order {
  constructor() {
    this.orders = [];
    this.nextId = 1;
  }

  addOrder(items) {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const order = {
      id: this.nextId,
      items,
      totalPrice,
    };
    this.orders.push(order);
    this.nextId += 1;
  }

  getAllOrders() {
    return this.orders;
  }
}

module.exports = new Order();
