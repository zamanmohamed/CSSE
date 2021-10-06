const express = require("express");
const router = express.Router();
const accountingStaffControllers = require("../../controllers/accountingStaff/accountingStaff-controller");

router.post("/signup", accountingStaffControllers.signupcustomer);
router.post("/login", accountingStaffControllers.logincustomer);

module.exports = router;
