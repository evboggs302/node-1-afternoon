const products = require("../products.json");

const getProd = (req, res, next) => {
  const { id } = req.params;
  const found = products.find(prod => {
    console.log(id);
    return prod.id === parseInt(id);
  });
  console.log(found);
  if (found) {
    res.status(200).send(found);
  }
  res.status(500).send("Item not found, try again");
};

module.exports = getProd;
