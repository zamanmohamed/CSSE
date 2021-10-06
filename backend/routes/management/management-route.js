const express = require("express");
const router = express.Router();
const managementControllers = require("../../controllers/management/management-controller");

router.post("/signup", managementControllers.signupcustomer);
router.post("/login", managementControllers.logincustomer);

module.exports = router;
