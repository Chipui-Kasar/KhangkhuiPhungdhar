import React, { useEffect, useState } from "react";
import "./GalleryPictures.css";
import "@fortawesome/fontawesome-free";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import { Pictures } from "../../Data/Pictures";
import "react-lazy-load-image-component/src/effects/blur.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Pages/Admin/firebase";

function GalleryPictures() {
  const [search, setSearch] = useState("");
  const [buttonFilter, setButtonFilter] = useState("");
  const [limit, setLimit] = useState(6);
  const [imageData, setImageData] = useState("");

  //write names of images in the array
  var imagenames = ["Khangkhui", "Harva Khangai", "Yarnao"];
  const searchChange = (event) => {
    setSearch(event.target.value);
  };
  const searchFilter = (image) => {
    setButtonFilter(image.target.value);
  };
  const resetFilter = () => {
    setButtonFilter("");
    setSearch("");
  };

  const onLoadMore = () => {
    setLimit(limit + 6);
  };

  setTimeout(() => {
    const getLast = (imageData) => imageData[imageData.length - 1];
    const last = getLast(imageData);
    var searchIndex = imageData
      ? imageData.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            (item.source.toLowerCase().includes(search.toLowerCase()) &&
              item.title.toLowerCase().includes(buttonFilter.toLowerCase()))
        ).length
      : "";

    if (limit >= imageData.indexOf(last) || limit >= searchIndex) {
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
    // axios
    //   .get(
    //     "https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o"
    //   )
    //   .then((res) => {
    //     setImagename(
    //       res.data.items.sort((a, b) =>
    //         new Date(a.name.split("on").pop()) <
    //         new Date(b.name.split("on").pop())
    //           ? 1
    //           : -1
    //       )
    //     );
    //   });

    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Gallery"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setImageData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    //load more if there are more pictures
  }, [limit]);
  //---------------------------------------
  const downloadImage = (url, title) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      const blob = xhr.response;
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = title;
      link.click();
    };
    xhr.open("GET", url);
    xhr.send();
  };
  console.log(imageData);
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
          id="searchBox"
          aria-describedby="helpId"
          placeholder="Search by people or place Eg Khangkhui"
        />
      </div>
      <div className="form-group text-center">
        {imagenames.map((imageData, key) => {
          return (
            <button
              key={key}
              className="btn btn-sm border border-success mr-2"
              style={{ fontSize: "10px" }}
              onClick={searchFilter}
              value={imageData}
            >
              {imageData}
            </button>
          );
        })}
        <button
          className="btn btn-sm border border-danger"
          style={{ fontSize: "10px" }}
          onClick={resetFilter}
        >
          Reset Filter
        </button>
      </div>

      <div className="row">
        {imageData ? (
          imageData
            .sort((a, b) => {
              return b.timeStamp - a.timeStamp;
            })
            .filter((searchPic) => {
              if (
                searchPic.title.toLowerCase().includes(search.toLowerCase()) ||
                (searchPic.source
                  .toLowerCase()
                  .includes(search.toLowerCase()) &&
                  searchPic.title
                    .toLowerCase()
                    .includes(buttonFilter.toLowerCase()))
              ) {
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
                      alt={name.title}
                      // src={`https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2F${name.name.replace(
                      //   "file/",
                      //   ""
                      // )}?alt=media&token=d5aac0ce-0878-41c7-a800-3b09d4aeef5e`}
                      src={name.imageURL}
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
                      <h1 className="card-text">{name.title.toUpperCase()}</h1>

                      <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            onClick={() =>
                              downloadImage(name.imageURL, name.title)
                            }
                            className="btn btn-sm btn-outline-secondary mr-2"
                          >
                            <i className="fa fa-download"></i>
                          </button>
                        </div>
                        <div className="btn-group">
                          <a
                            // href={`https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2F${name.name.replace(
                            //   "file/",
                            //   ""
                            // )}?alt=media&token=d5aac0ce-0878-41c7-a800-3b09d4aeef5e`}
                            href={name.imageURL}
                            download
                            data-interception="off"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary "
                            >
                              View
                            </button>
                          </a>
                        </div>
                      </div>
                      <div style={{ position: "absolute", right: "10px" }}>
                        <label class="blockquote-footer mb-0">
                          <cite title="Source Title">{name.source}</cite>
                        </label>
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
