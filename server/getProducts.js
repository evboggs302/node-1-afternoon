const products = require("../products.json");

const getProducts = (req, res, next) => {
  const { id, price, product_name } = req.params;

  if (req.query.price) {
    const foundPrice = products.filter(prod => {
      return prod.price >= req.query.price;
    });
    res.status(200).send(foundPrice);
  } else {
    res
      .status(200)
      .send(
        `Did not find what you are looking for, so please enjoy the whole list; ${products}`
      );
  }
};

module.exports = getProducts;
