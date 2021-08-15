import React from "react";
import "./GalleryPictures.css";
function GalleryPictures() {
  return (
    <>
      <hr className="featurette-divider" id="pictures" />
      <h1 className="text-center pb-3 title">PHOTOS OF KHANGKHUI PHUNGDHAR</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img alt="" src="" width="100%" height="225" id="shuwusha" />
            <div className="card-body">
              <p className="card-text">
                Night View of Ukhrul Town From Khangkhui Shuwusha
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="./images/IMG_20171230_190128.jpg" download="picture">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Download Image
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick="onClick(shuwusha)"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              alt=""
              src="./images/IMG_20171231_112357.jpg"
              width="100%"
              height="225"
              id="harvakhangai"
            />
            <div className="card-body">
              <p className="card-text">Harva Khangai Battle Spot</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="./images/IMG_20171231_112357.jpg" download="picture">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Download Image
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick="onClick(harvakhangai)"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              alt=""
              src="./images/IMG_20171231_115945.jpg"
              width="100%"
              height="225"
              id="khangkhui"
            />
            <div className="card-body">
              <p className="card-text">View of Khangkhui Khunou</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="./images/IMG_20171231_115945.jpg" download="picture">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Download Image
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick="onClick(khangkhui)"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              alt=""
              src="./images/bys1.JPG"
              width="100%"
              height="225"
              id="bys1"
            />
            <div className="card-body">
              <p className="card-text">
                BYS Picnic at Harva Khangai on 03/01/2015
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="./images/bys1.jpg" download="picture">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Download Image
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick="onClick(bys1)"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              alt=""
              src="./images/bys2.JPG"
              width="100%"
              height="225"
              id="bys2"
            />
            <div className="card-body">
              <p className="card-text">BYS Picnic</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="./images/bys2.JPG" download="picture">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Download Image
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick="onClick(bys2)"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img
              alt=""
              src="./images/bys3.jpg"
              width="100%"
              height="225"
              id="bys3"
            />
            <div className="card-body">
              <p className="card-text">BYS Group Photo</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href="./images/bys3.jpg" download="picture">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Download Image
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick="onClick(bys3)"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="modal01"
          className="w3-modal"
          onClick="this.style.display='none'"
        >
          <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">
            &times;
          </span>
          <div className="w3-modal-content w3-animate-zoom">
            <img id="img01" alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryPictures;
