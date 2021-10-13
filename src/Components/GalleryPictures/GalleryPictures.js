import React from "react";
import "./GalleryPictures.css";
import { Pictures } from "../../Data/Pictures";
function GalleryPictures() {
  return (
    <>
      <hr className="featurette-divider" id="pictures" />
      <h1 className="text-center pb-3 title">PHOTOS OF KHANGKHUI PHUNGDHAR</h1>
      <div className="row">
        {Pictures.map(pic => {
          return (
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  alt={pic.alt}
                  src={pic.src}
                  width="100%"
                  loading="lazy"
                  style={{ objectFit: "cover", maxHeight: "350px" }}
                />
                <div className="card-body text-center">
                  <p className="card-text">{pic.title}</p>
                  <p className="source">Source: {pic.source}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <a
                        href={pic.src}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary "
                        >
                          Download Image
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GalleryPictures;
