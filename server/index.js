const express = require("express");
const app = express();
const port = 4000;
const products = require("../products.json");
const getProducts = require("./getProducts");
const getProd = require("./getProd");

app.get("/api/products", getProducts);

app.get("/api/products/:id", getProd);

app.listen(port, () => {
  console.log(`Server Port: ${port}`);
});
