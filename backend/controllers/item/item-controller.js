const Item = require("../../model/item/item");

const createItem = async (req, res) => {
  if (req.body) {
    const { name, price, quantity } = req.body;

    const item = new Item({
      name,
      price,
      quantity,
    });
    await item
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

exports.createItem = createItem;
