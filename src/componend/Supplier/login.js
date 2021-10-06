import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [login, setlogin] = useState();

  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    Login();
  }

  function Login() {
    axios
      .post("http://localhost:5000/api/supplier/login/", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          setlogin(res);
          localStorage.setItem("CustomerIsLoggedIn", true);
          localStorage.setItem("CustomerID", res.data._id);
          localStorage.setItem("CustomerEmail", res.data.email);

          history.push(`/customerProfile`);
          window.location.reload();
        } else {
          alert("Login failed please try again");
        }

        setlogin(res);
      });
  }

  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <div class="card">
                <div class="card-header">
                  <h4>Customer Login</h4>
                </div>
                <div class="card-body">
                  <form onSubmit={submitHandler}>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter name"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter password"
                        ref={passwordRef}
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      class="btn btn-primary btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
