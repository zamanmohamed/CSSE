import React, { useState, useEffect, useRef } from "react";
import CustomerNavigation from "../customerNavigation";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import CustomerFooter from "../customerFooter";
import detalis from "../../details.jpg";
import aveter from "../../avatar.png";

const CustomerPayment = () => {
  const [profile, setprofile] = useState({});
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const Budget = useRef("");
  const Description = useRef("");

  const history = useHistory();

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/customers/${localStorage.getItem(
          "CustomerID"
        )}`
      );
      setprofile(data);
      console.log(data);
    };
    sendRequest();
  }, []);

  function submitHandler(event) {
    event.preventDefault();
    add();
  }

  async function add() {
    axios
      .post("http://localhost:5000/api/payments/post", {
        firstname: profile.firstname,
        lastname: profile.lastname,
        address: address || profile.address,
        city: city || profile.city,
        phone: profile.phone,
        email: profile.email,
        totalPrice: Budget.current.value,
        description: Description.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Order is going to pending state");
          history.push("/paymentHistory");
        } else {
          alert("Orderd failed please try again");
        }
      });
  }

  return (
    <React.Fragment>
      <CustomerNavigation />

      <div class="card text-white">
        <img width="500" height="150" class="card-img" src={detalis} alt="" />
        <div class="card-img-overlay">
          <h1 class="card-title text-center">REQUEST ITEM</h1>
        </div>
      </div>

      <div className="my-5">
        <section id="profile">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Request item..</h4>
                  </div>
                  <div class="card-body">
                    <form onSubmit={submitHandler}>
                      <div class="form-row">
                        <div class="col">
                          <label for="email">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name"
                            value={profile.firstname}
                            readOnly
                          />
                        </div>
                        <div class="col">
                          <label for="email">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                            value={profile.lastname}
                            readOnly
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="Addresss">Site Addresss</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Address"
                          value={profile.address}
                          onChange={(e) => {
                            profile.address = setaddress(e.target.value);
                          }}
                          readOnly
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="city">Site located City</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="City"
                          value={profile.city}
                          onChange={(e) => {
                            profile.city = setcity(e.target.value);
                          }}
                          readOnly
                          required
                        />
                      </div>

                      <div class="form-group">
                        <label for="Credit">description about Buddjet</label>
                        <textarea
                          class="form-control"
                          ref={Description}
                          required
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label for="CVS">Buddjet (K)</label>
                        <input
                          type="number"
                          ref={Budget}
                          class="form-control"
                          required
                        />
                      </div>
                      <button class="btn btn-primary btn-block" type="submit">
                        Order
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CustomerFooter />
    </React.Fragment>
  );
};

export default CustomerPayment;
