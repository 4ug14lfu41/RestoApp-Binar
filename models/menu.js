const menu = [
  { id: 1, name: "Nasi Goreng", price: 20000, img: "/img/nasi-goreng.jpg" },
  { id: 2, name: "Mie Goreng", price: 18000, img: "/img/mie-goreng.jpg" },
  // tambahkan menu lain sesuai kebutuhan
];

let orders = [];

exports.getAllMenu = () => menu;

exports.orderMenu = (order) => {
  orders.push(order);
};

exports.getAllOrders = () => orders;
