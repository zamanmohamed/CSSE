import React from "react";
import banner from "../banner.jpg";
import { Link } from "react-router-dom";
import CustomerFooter from "./customerFooter";
import CustomerNavigation from "./customerNavigation";

const home = () => {
  return (
    <React.Fragment>
      <CustomerNavigation></CustomerNavigation>

      <br></br>
      <br></br>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            {" "}
            <div class="card text-center bg-primary text-white mb-3">
              <div class="card-body">
                <h3>Profile</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link
                  to="/customerProfile"
                  class="btn btn-outline-light btn-sm"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            {" "}
            <div class="card text-center bg-warning text-white mb-3">
              <div class="card-body">
                <h3>Request Item</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/payment" class="btn btn-outline-light btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            {" "}
            <div class="card text-center bg-secondary text-white mb-3">
              <div class="card-body">
                <h3>Request History</h3>
                <h4 class="display-4">
                  <i class="fas fa-users"></i>
                </h4>
                <Link to="/paymentHistory" class="btn btn-outline-light btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4"> </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default home;
