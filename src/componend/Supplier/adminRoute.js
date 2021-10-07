import React from "react";
import { Route } from "react-router-dom";
import Admin from "./admin";
import Start from "../start";
import Additem from "./additem";
import Getitem from "./getitem";

const adminRoute = () => {
  return (
    <div>
      <Route path="/Supplier">
        <Admin />
      </Route>
      <Route path="/Supplier/additem" exact>
        <Additem />
      </Route>
    </div>
  );
};

export default adminRoute;
