import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { db } from "../../Pages/Admin/firebase";
import { Helmet } from "react-helmet";

function ImageView() {
  const [image, setImage] = useState([]);
  const history = useHistory();
  const id = useParams();
  var newUrl = id[0].replace(/ /g, "-").toLowerCase();

  useEffect(() => {
    history.replace(`/khipiko/${newUrl}${history.location.search}`);
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Gallery"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setImage(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      // cleanup
    };
  }, [history, newUrl]);

  return (
    <>
      {image
        .filter((id) => id.id === history.location.search.split("=")[1])
        .map((item, key) => {
          return (
            <Helmet key={key}>
              <title>{item.title}</title>
              <meta
                name="description"
                content="Village imparts a harmonious and peaceful lifestyle. Staying in a village gives you a recluse from the busy city life"
              />
              <meta name="title" content={item.title} />
              <link
                rel="canonical"
                href={`//khangkhuiphungdhar.netlify.app/khipiko/${item.title
                  .replace(/ /g, "-")
                  .toLowerCase()}?id=${item.id}`}
              />

              <meta property="og:title" content={item.title} />
              <meta
                property="og:description"
                content="Village imparts a harmonious and peaceful lifestyle. Staying in a village gives you a recluse from the busy city life"
              />
              <meta property="og:image" content={item.imageURL} />
              <meta
                property="og:url"
                content={`//khangkhuiphungdhar.netlify.app/khipiko/${item.title
                  .replace(/ /g, "-")
                  .toLowerCase()}?id=${item.id}`}
              />
              <meta name="twitter:title" content={item.title} />
              <meta
                name="twitter:description"
                content="Village imparts a harmonious and peaceful lifestyle. Staying in a village gives you a recluse from the busy city life"
              />
              <meta name="twitter:image" content={item.imageURL} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@chipui" />
            </Helmet>
          );
        })}
      <div className="container-fluid">
        {/* //show single image */}
        <Link to={`/gallery${history.location.search}`}>
          <button className="btn btn-outline-info mt-3">Back to gallery</button>
        </Link>
        <div className="row">
          <div className="col-md-8">
            {image
              .filter((id) => id.id === history.location.search.split("=")[1])
              .map((res, key) => {
                return (
                  <div className="card mt-3 mb-5" key={key}>
                    <LazyLoadImage
                      alt={res.title}
                      src={res.imageURL}
                      width="100%"
                      loading="lazy"
                      effect="blur"
                      style={{
                        backgroundColor: "#000",
                        objectFit: "cover",
                        minHeight: "250px",
                        // maxHeight: "700px",
                      }}
                    />
                    <div className="card-body text-center">
                      <h1 className="card-text">{res.title.toUpperCase()}</h1>

                      <div style={{ position: "absolute" }}>
                        <label className="blockquote-footer mb-0">
                          <cite title="Source Title">
                            {moment(res.timeStamp.toDate()).format(
                              "MMMM Do YY"
                            )}
                          </cite>
                        </label>
                      </div>

                      <div style={{ position: "absolute", right: "10px" }}>
                        <label className="blockquote-footer mb-0">
                          <cite title="Source Title">
                            <i className="fa fa-user-circle"></i>
                            {res.source}
                          </cite>
                        </label>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-md-4">
            <div className="row">
              {image
                .filter(
                  (current) =>
                    current.id !== history.location.search.split("=")[1]
                )
                //get random image from the list
                .sort(() => Math.random() - 0.5)
                .slice(0, 4)
                .map((item, key) => {
                  return (
                    <div className="col-md-3" key={key}>
                      <div className="card mt-3 mb-5">
                        <Link to={`/khipiko/${item.title}?id=${item.id}`}>
                          <LazyLoadImage
                            alt="image"
                            src={item.imageURL}
                            width="100%"
                            loading="lazy"
                            effect="blur"
                            style={{
                              backgroundColor: "#000",
                              objectFit: "cover",
                              minHeight: "50px",
                              maxHeight: "50px",
                              borderRadius: "5%",
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageView;
