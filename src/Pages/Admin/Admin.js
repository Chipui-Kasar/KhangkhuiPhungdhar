import React from "react";

function Admin() {
  return (
    <div>
      <div className="container">
        <div className="row">
          Gallery Section
          <div className="col-12">
            <div class="container">
              <form>
                <div class="form-group row">
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="inputName"
                      id="inputName"
                      placeholder="Image Title"
                    />
                  </div>
                  <div class="col-sm-1-12">
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Image Title"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class=" col-sm-10">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          Blog
          <div className="col-12"></div>
        </div>
        <div className="row">
          Ura
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
