import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Getitem = () => {
  const [pay, setpay] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get("http://localhost:5000/api/item/get");
      setpay(data);
    };
    sendRequest();
  }, []);

  console.log(pay);

  return (
    <React.Fragment>
      <h1 class="text-center"> item Details </h1>
      <br></br>

      <div className="col-md-11">
        <br></br>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
            </tr>
          </thead>
          {pay.map((pay) => (
            <tbody>
              <tr>
                <th>{pay._id}</th>
                <td>{pay.name}</td>
                <td>{pay.price} K</td>
                <td>{pay.quantity}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default Getitem;
