class Menu {
  constructor() {
    this.menu = [
      { id: 1, name: "Nasi Goreng", price: 20000, img: "/img/nasi-goreng.jpg" },
      { id: 2, name: "Mie Goreng", price: 18000, img: "/img/mie-goreng.jpg" },
      { id: 3, name: "Burger", price: 25000, img: "/img/burger.jpg" },
      { id: 4, name: "Pizza", price: 30000, img: "/img/pizza.jpg" },
      // add more items as needed
    ];
  }

  getAllMenu() {
    return this.menu;
  }

  getMenuItemById(id) {
    return this.menu.find((item) => item.id === id);
  }
}

module.exports = new Menu();
