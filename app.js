const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
