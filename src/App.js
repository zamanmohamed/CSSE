import React from "react";
import "./App.css";
import ProjecManager from "./componend/customerRoute";
import Mannagement from "./componend/Mannagement/adminRoute";
import AccountingStaff from "./componend/AccountingStaff/adminRoute";
import Supplier from "./componend/Supplier/adminRoute";

function App() {
  return (
    <React.Fragment>
      <Mannagement />
      <ProjecManager />
      <AccountingStaff />
      <Supplier />
    </React.Fragment>
  );
}

export default App;
