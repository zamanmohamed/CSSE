const AccountingStaff = require("../../model/accountingStaff/accountingStaff");

const signupcustomer = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const exisitingAdmin = await AccountingStaff.findOne({ email: email });

  if (exisitingAdmin) {
    console.error("Email used in already");
    res.status(201).json({ massage: "Error" });
  } else {
    const createCustomer = new AccountingStaff({
      firstname,
      lastname,
      email,
      password,
    });
    await createCustomer.save();
    res.status(200).json(createCustomer);
  }
};

const logincustomer = async (req, res) => {
  const { email, password } = req.body;

  let existingUser = await AccountingStaff.findOne({ email: email });

  if (!existingUser || existingUser.password !== password) {
    console.log("Error");
    res.status(201).json({ massage: "Error" });
  } else {
    res.status(200).json(existingUser);
  }
};

exports.logincustomer = logincustomer;
exports.signupcustomer = signupcustomer;
