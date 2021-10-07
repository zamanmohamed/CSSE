import React, { useState, useEffect, useRef } from "react";
import CustomerNavigation from "../customerNavigation";
import detalis from "../../details.jpg";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const RejectOrder = () => {
  const [pay, setpay] = useState([]);
  let x = 0;

  useEffect(() => {
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/api/payments/approve", {
          email: localStorage.getItem("CustomerEmail"),
          state: "Reject",
        })
        .then((res) => {
          setpay(res.data.paymentemail);
        });
    };
    sendRequest();
  }, []);

  console.log(pay);

  return (
    <React.Fragment>
      <CustomerNavigation />
      <div class="card text-white">
        <img width="500" height="150" class="card-img" src={detalis} alt="" />
        <div class="card-img-overlay">
          <h1 class="card-title text-center">ORDER REQUEST HISTORY</h1>
        </div>
      </div>

      <section id="actions" class="py-4 mb-4 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <Link to="/paymentHistory" class="btn btn-success btn-block">
                All
              </Link>
            </div>
            <div class="col-md-3">
              <Link to="/pendingOrder" class="btn btn-success btn-block">
                Pending
              </Link>
            </div>
            <div class="col-md-3">
              <Link to="/approvedOrder" class="btn btn-success btn-block">
                Approved
              </Link>
            </div>
            <div class="col-md-3">
              <Link to="/rejectOrder" class="btn btn-success btn-block">
                Rejected
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Order request ID</th>
              <th>Addreass</th>
              <th>Description</th>
              <th>TotalPrice</th>
              <th>State</th>
            </tr>
          </thead>
          {pay.map((pay) => (
            <tbody>
              <tr>
                <th>{++x}</th>
                <th>{pay._id}</th>
                <td>{pay.address}</td>
                <td>
                  {pay.description.split(",").map((des) => (
                    <tr>{des}</tr>
                  ))}
                </td>
                <td>{pay.totalPrice} K</td>
                <td>{pay.state}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default RejectOrder;
