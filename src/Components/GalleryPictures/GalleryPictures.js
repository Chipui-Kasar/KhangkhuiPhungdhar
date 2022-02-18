import React, { useEffect, useState } from "react";
import "./GalleryPictures.css";
import "@fortawesome/fontawesome-free";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import { Pictures } from "../../Data/Pictures";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import GoogleAds from "../../Pages/GoogleAds/GoogleAds";

function GalleryPictures() {
  const [search, setSearch] = useState("");
  const [buttonFilter, setButtonFilter] = useState("");
  const [limit, setLimit] = useState(6);
  const [imagename, setImagename] = useState("");

  //write names of images in the array
  var imagenames = ["Khangkhui", "Harva Khangai", "Yarnao"]
  const searchChange = event => {
    setSearch(event.target.value);

  };
  const searchFilter = (image) => {
    setButtonFilter(image.target.value);
  }
  const resetFilter = () => {
    setButtonFilter("");
    setSearch("")
  }

  const onLoadMore = () => {
    setLimit(limit + 6);
  };
  setTimeout(() => {
    const getLast = imagename => imagename[imagename.length - 1];
    const last = getLast(imagename);
    var searchIndex = imagename
      ? imagename.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        item.name.toLowerCase().includes(buttonFilter.toLowerCase())
      ).length

      : "";

    if (limit >= imagename.indexOf(last) || limit >= searchIndex) {
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
      document.getElementById("btntext").disabled = false;
    }
  }, 3000);
  useEffect(() => {
    //disable button if no more pictures
    axios
      .get(
        "https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o"
      )
      .then(res => {
        setImagename(
          res.data.items.sort((a, b) =>
            new Date(a.name.split("on").pop()) <
              new Date(b.name.split("on").pop())
              ? 1
              : -1
          )
        );
      });

    //load more if there are more pictures
  }, [limit]);

  //---------------------------------------

  //---------------------------------------
  return (
    <>
      <GoogleAds />
      <hr className="featurette-divider" id="pictures" />
      <h1 className="text-center title">PHOTOS OF KHANGKHUI PHUNGDHAR</h1>
      <div className="form-group">
        <input
          onChange={searchChange}
          type="text"
          className="form-control border border-warning"
          value={search}
          id="searchBox"
          aria-describedby="helpId"
          placeholder="Search by people or place Eg Khangkhui"
        />
      </div>
      <div className="form-group text-center">
        {imagenames.map((imagename) => {
          return (<button className="btn btn-sm border border-success mr-2" style={{ fontSize: "10px" }} onClick={searchFilter} value={imagename}>{imagename}</button>)
        })}
        <button className="btn btn-sm border border-danger" style={{ fontSize: "10px" }} onClick={resetFilter}>Reset Filter</button>
      </div>

      <div className="row">
        {/* {Pictures ? (
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
        )} */}
        {imagename ? (
          imagename
            .filter(searchPic => {
              if (searchPic.name.toLowerCase().includes(search.toLowerCase()) &&
                searchPic.name.toLowerCase().includes(buttonFilter.toLowerCase())) {
                return searchPic;
              } else {
                return null;
              }
            })
            .slice(0, limit)
            .map((name, key) => {
              //sort by date

              return (
                <div className="col-md-4" key={key}>
                  <div className="card mb-4 shadow-sm scroller">
                    <LazyLoadImage
                      alt={name.name}
                      src={`https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2F${name.name.replace(
                        "file/",
                        ""
                      )}?alt=media&token=d5aac0ce-0878-41c7-a800-3b09d4aeef5e`}
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
                      <h1 className="card-text">
                        {name.name
                          .toUpperCase()
                          .replace("FILE/", "")
                          //remove all image extension
                          .replace(/\.[^/.]+$/, "")}
                      </h1>

                      <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                          <a
                            href={`https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2F${name.name.replace(
                              "file/",
                              ""
                            )}?alt=media&token=d5aac0ce-0878-41c7-a800-3b09d4aeef5e`}
                            download
                            rel="noopener noreferrer"
                            target="_blank"
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
            {/* <i className="fas fa-spinner fa-pulse fa-3x"></i> */}
            <i className="fa fa-3x fa-spinner fa-spin"></i>
          </p>
        )}
      </div>

      <div className="text-center mb-5" id="loadmore">
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
