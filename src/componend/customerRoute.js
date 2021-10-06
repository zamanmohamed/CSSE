import React from "react";
import { Route } from "react-router-dom";
import Home from "./home";
import UpdateProfile from "./projecManager/updateProfile";
import CustomerProfile from "./projecManager/profile";
import CustomerLogin from "./projecManager/customerLogin";
import CustomerRegister from "./projecManager/customerRegister";
import CustomerPayment from "./projecManager/customerPayment";
import CutomerPaymentHistory from "./projecManager/cutomerPaymentHistory";

const customerRoute = () => {
  return (
    <React.Fragment>
      <Route path="/customer" exact>
        <Home />
      </Route>

      <Route path="/customerLogin" exact>
        <CustomerLogin />
      </Route>

      <Route path="/customerProfile" exact>
        <CustomerProfile />
      </Route>

      <Route path="/customerRegister" exact>
        <CustomerRegister />
      </Route>

      <Route path="/updateProfile" exact>
        <UpdateProfile />
      </Route>

      <Route path="/payment" exact>
        <CustomerPayment />
      </Route>

      <Route path="/paymentHistory" exact>
        <CutomerPaymentHistory />
      </Route>
    </React.Fragment>
  );
};

export default customerRoute;
