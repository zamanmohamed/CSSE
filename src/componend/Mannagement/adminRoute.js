import React from "react";
import { Route } from "react-router-dom";
import Admin from "./admin";
import Start from "../start";

const adminRoute = () => {
  return (
    <div>
      <Route path="/" exact>
        <Start />
      </Route>

      <Route path="/mannagement">
        <Admin />
      </Route>
    </div>
  );
};

export default adminRoute;
