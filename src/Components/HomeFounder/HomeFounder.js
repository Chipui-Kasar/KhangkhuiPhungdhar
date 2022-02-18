import React from "react";
import kingsmen from "../../AllData.json";
import "./HomeFounder.css";
function HomeFounder() {
  return (
    <>

      <div className="row">
        {kingsmen.FounderKings.map((king, key) => {
          return (
            <div
              className="col-lg-4 col-md-4 col-sm-12 col-12 align-center"
              key={key}
            >
              <div className="image">
                <img
                  className="bd-placeholder-img rounded-circle"
                  src={king.img}
                  width="140"
                  height="140"
                  focusable="false"
                  alt={king.alt}
                  loading="lazy"
                />
              </div>
              <h2>{king.title}</h2>

              <div className="row">
                <div className="col-md-12 col-sm-2"></div>
                <div className="col-md-12 col-sm-8 col-12">
                  <h5>Name: {king.name} </h5>
                  <h5>DOB:{king.dob}</h5>
                  {/* <h5>Duration: {king.duration}</h5> */}
                  <p>
                    <div
                      className="btn btn-success"
                      role="button"
                      onClick={() => {
                        alert(
                          `Sorry! You can't view the details of ${king.name}`
                        );
                      }}
                    >
                      View details
                    </div>
                  </p>
                </div>
                <div className="col-md-12 col-sm-2"></div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </>
  );
}

export default React.memo(HomeFounder);
