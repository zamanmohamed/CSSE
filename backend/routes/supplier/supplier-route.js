const express = require("express");
const router = express.Router();
const supplierControllers = require("../../controllers/supplier/supplier-controller");

router.post("/signup", supplierControllers.signupcustomer);
router.post("/login", supplierControllers.logincustomer);

module.exports = router;
