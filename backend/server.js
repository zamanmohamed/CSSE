const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customer/customer-route");
const paymentRoutes = require("./routes/payment/payment-route");
const accountingStaffRoutes = require("./routes/accountingStaff/accountingStaff-route");
const managementRoutes = require("./routes/management/management-route");
const supplierRoutes = require("./routes/supplier/supplier-route");
const ItemRouter = require("./routes/item/item-route");

require("dotenv").config();

const app = express();
app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/customers", customerRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/accountingStaff", accountingStaffRoutes);
app.use("/api/management", managementRoutes);
app.use("/api/supplier", supplierRoutes);
app.use("/api/item", ItemRouter);

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("MongoDB database connection established successfully");
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  });

module.exports = app;
