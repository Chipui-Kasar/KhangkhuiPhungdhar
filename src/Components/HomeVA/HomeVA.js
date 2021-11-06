import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import "./HomeVA.css";
import { VillageAuthority } from "../../AllData.json";
import icon from "../../images/icon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HomeVA() {
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   axios
  //     .get(`https://sheetdb.io/api/v1/7ehz82f9q7n6p`)
  //     .then(response => {
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, [setData]);
  // console.log(data);

  return (
    <>
      <h2 className="pb-5 text-center">
        <i>Current Village Authority (Hangva̲)</i>
      </h2>

      <div className="row ">
        {VillageAuthority
          ? VillageAuthority.map((va, key) => {
              return (
                <div
                  className="col-lg-4 col-md-4 col-sm-6 col-6 pt-3 align-center"
                  key={key}
                >
                  <div className="image">
                    <LazyLoadImage
                      className="bd-placeholder-img rounded-circle"
                      src={va.img ? va.img : icon}
                      loading="lazy"
                      width="140"
                      height="140"
                      alt={`${va.name}`}
                    />
                  </div>
                  <div className="vaDetails">
                    <h4>{va.title}</h4>

                    <h6>Name: {va.name}</h6>
                    <h6>DOB:{va.dob}</h6>
                    <h6>Duration: {va.duration}</h6>
                  </div>
                  <p>
                    <div
                      className="btn btn-dark"
                      role="button"
                      onClick={() => {
                        alert(
                          `Sorry! You can't view the details of ${va.name}`
                        );
                      }}
                    >
                      View details &raquo;
                    </div>
                  </p>
                </div>
              );
            })
          : "Loading......."}
      </div>
    </>
  );
}

export default React.memo(HomeVA);
