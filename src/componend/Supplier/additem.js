import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Additem = () => {
  const nameRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");

  const history = useHistory();

  async function add() {
    axios
      .post("http://localhost:5000/api/item/", {
        name: nameRef.current.value,
        price: priceRef.current.value,
        quantity: quantityRef.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push(`/`);
          window.location.reload();
        } else {
          alert("Registation failed please try again");
        }
      });
  }

  return (
    <div>
      <br></br>
      <br></br> <br></br>
      <section id="login">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="card">
                <div class="card-header">
                  <h1>Supplier Add Item</h1>
                </div>
                <div class="card-body">
                  <form onSubmit={add}>
                    <div class="form-group">
                      <label for="email">Item Name</label>
                      <input type="text" class="form-control" ref={nameRef} />
                    </div>
                    <div class="form-group">
                      <label for="password">quantity</label>
                      <input
                        type="text"
                        class="form-control"
                        ref={quantityRef}
                      />
                    </div>

                    <div class="form-group">
                      <label for="text">Price</label>
                      <input type="text" class="form-control" ref={priceRef} />
                    </div>
                    <input
                      type="submit"
                      value="ADD"
                      class="btn btn-primary btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Additem;
