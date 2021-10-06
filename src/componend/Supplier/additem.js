import React from "react";

const additem = () => {
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
                  <form action="index.html">
                    <div class="form-group">
                      <label for="email">Item Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="password">quantity</label>
                      <input type="password" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="password">Price</label>
                      <input type="password" class="form-control" />
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

export default additem;
