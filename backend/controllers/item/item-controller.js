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

const getAllitem = async (req, res) => {
  const item = await Item.find({});
  res.json(item);
};

exports.getAllitem = getAllitem;
exports.createItem = createItem;
