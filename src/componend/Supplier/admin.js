import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import CustomerNavigation from "../customerNavigation";
import AdminNavigation from "./adminNavigation";
import Start from "../start";
import Home from "../home";
import AdminPayment from "../Mannagement/admin/adminPayment";
import Login from "./login";
import Additem from "./additem";
import Getitem from "./getitem";
const admin = () => {
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "100%",
          }}
        >
          <AdminNavigation />
          <div id="accordion">
            <div class="row">
              <div class="col-md-3">
                <div id="accordion">
                  <div class="card bg-dark">
                    <div class="card-header ">
                      <h5>
                        <a
                          href="#collapse5"
                          data-parent="#accordion"
                          data-toggle="collapse"
                          style={{ color: "#FFF" }}
                        >
                          Supplier Management
                        </a>
                      </h5>
                    </div>

                    <div id="collapse5" class="collapse">
                      <div class="card-body">
                        <a href="/Supplier/additem" class="dropdown-item">
                          Add Item
                        </a>
                      </div>
                      <div class="card-body">
                        <a href="/Supplier/getitem" class="dropdown-item">
                          Get Item
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-9"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "1000px",
                }}
              >
                <Route path="/admin/payment" exact>
                  <AdminPayment />
                </Route>
                <Route path="/Supplier/additem" exact>
                  <Additem />
                </Route>
                <Route path="/Supplier/getitem" exact>
                  <Getitem />
                </Route>
                <Route path="/Supplier" exact>
                  <Login />
                </Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default admin;
