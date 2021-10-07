const express = require("express");
const router = express.Router();
const ItemControllers = require("../../controllers/item/item-controller");

router.post("/", ItemControllers.createItem);
router.get("/get", ItemControllers.getAllitem);

module.exports = router;
