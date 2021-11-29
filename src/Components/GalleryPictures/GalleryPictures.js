import React, { useEffect, useState } from "react";
import "./GalleryPictures.css";
import "@fortawesome/fontawesome-free";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Pictures } from "../../Data/Pictures";

function GalleryPictures() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(6);

  const getLast = Pictures => Pictures[Pictures.length - 1];
  const last = getLast(Pictures);

  const searchChange = event => {
    setSearch(event.target.value);
  };

  const onLoadMore = () => {
    setLimit(limit + 6);
  };
  useEffect(() => {
    if (limit >= Pictures.indexOf(last)) {
      let text = document
        .getElementById("btntext")
        .innerHTML.replace("Load More Photos", "You've seen it all");
      document.getElementById("btntext").innerHTML = text;
      document.getElementById("btntext").disabled = true;
    } else {
      let text = document
        .getElementById("btntext")
        .innerHTML.replace("You've seen it all", "Load More Photos");
      document.getElementById("btntext").innerHTML = text;
    }
  }, [limit, last]);
  //---------------------------------------

  //---------------------------------------
  return (
    <>
      <hr className="featurette-divider" id="pictures" />
      <h1 className="text-center title">PHOTOS OF KHANGKHUI PHUNGDHAR</h1>
      <div className="form-group">
        <input
          onChange={searchChange}
          type="text"
          className="form-control border border-warning"
          value={search}
          aria-describedby="helpId"
          placeholder="Search by people or place Eg Khangkhui"
        />
      </div>
      <div className="row">
        {Pictures ? (
          Pictures.filter(searchPic => {
            if (
              searchPic.title.toLowerCase().includes(search.toLowerCase()) ||
              searchPic.alt.toLowerCase().includes(search.toLowerCase()) ||
              searchPic.source.toLowerCase().includes(search.toLowerCase())
            ) {
              return searchPic;
            } else {
              return null;
            }
          })
            .slice(0, limit)
            .map((pic, key) => {
              return (
                <div className="col-md-4" key={key}>
                  <div className="card mb-4 shadow-sm scroller">
                    <LazyLoadImage
                      alt={pic.alt}
                      src={pic.src}
                      width="100%"
                      loading="lazy"
                      effect="blur"
                      style={{
                        backgroundColor: "#000",
                        objectFit: "cover",
                        minHeight: "250px",
                        maxHeight: "350px",
                      }}
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
            })
        ) : (
          <p className="spinner">
            <i className="fas fa-spinner fa-pulse fa-3x"></i>
          </p>
        )}
      </div>

      <div className="text-center" id="loadmore">
        <button
          type="button"
          className="btn btn-outline-warning btn-lg"
          onClick={onLoadMore}
          id="btntext"
        >
          Load More Photos
        </button>
      </div>
    </>
  );
}

export default React.memo(GalleryPictures);
