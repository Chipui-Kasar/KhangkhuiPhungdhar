import axios from "axios";
import React, { useEffect, useState } from "react";
import "./BlogComponent.css";
import { PropagateLoader } from "react-spinners";
//import { Blog } from "../../Data/AllData";
import { Link, useParams, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { RWebShare } from "react-web-share";
import GoogleAds from "../../Pages/GoogleAds/GoogleAds";

function ReadFullBlog() {
  const [Blog, setBblog] = useState("");
  useEffect(() => {
    axios
      .get(`https://sheetdb.io/api/v1/7ehz82f9q7n6p?sheet=Blog`)
      .then(response => {
        setBblog(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const history = useHistory();
  const id = useParams();
  var newUrl = id.id.replace(/ /g, "-").toLowerCase();

  useEffect(() => {
    history.replace(`/read/${newUrl}`);
  }, [newUrl, history]);

  return (
    <>
      <GoogleAds />
      {Blog
        ? Blog.filter(item => {
          if (item.title.replace(/ /g, "-").toLowerCase() === newUrl) {
            return item;
          } else {
            return null;
          }
        }).map(item => {
          return (
            <>
              <Helmet>
                <title>{item.title}</title>
                <meta name="description" content={item.displaytext} />
                <meta name="title" content={item.title} />
                <link
                  rel="canonical"
                  href={`//khangkhuiphungdhar.netlify.app/read/${item.title
                    .replace(/ /g, "-")
                    .toLowerCase()}`}
                />

                <meta property="og:title" content={item.title} />
                <meta property="og:description" content={item.displaytext} />
                <meta property="og:image" content={item.src} />
                <meta
                  property="og:url"
                  content={`//khangkhuiphungdhar.netlify.app/read/${item.title
                    .replace(/ /g, "-")
                    .toLowerCase()}`}
                />
                <meta name="twitter:title" content={item.title} />
                <meta name="twitter:description" content={item.displaytext} />
                <meta name="twitter:image" content={item.src} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@chipui" />
              </Helmet>
            </>
          );
        })
        : ""}
      <div
        className="fullblogContainer"
        style={{
          padding: "1px",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <div className="col-md-12">
          {Blog ? (
            Blog.filter(clickedBlog => {
              if (
                clickedBlog.title.replace(/ /g, "-").toLowerCase() === newUrl
              ) {
                return clickedBlog;
              } else {
                return null;
              }
            }).map(blog => {
              //convert html string to Dom
              const dom = new DOMParser().parseFromString(
                blog.description,
                "text/html"
              );
              return (
                <>
                  <div id={blog.id} className="container">
                    <div className="blog-post mt-5 mb-0">
                      <h2 className="blog-post-title readFullTitle">
                        <label>{blog.title}</label>
                      </h2>
                      <p className="blog-post-meta">
                        {blog.date} by{" "}
                        <a href={blog.socialsite} target="_child">
                          {blog.author}
                        </a>
                        &nbsp; &nbsp; &nbsp;
                        <RWebShare
                          data={{
                            text: blog.title,
                            url: `https://khangkhuiphungdhar.netlify.app/read/${blog.title
                              .replace(/ /g, "-")
                              .toLowerCase()}`,
                            title: "Share this content",
                          }}
                          sites={[
                            "facebook",
                            "twitter",
                            "reddit",
                            "whatsapp",
                            "telegram",
                            "linkedin",
                            "mail",
                          ]}
                          onClick={() => console.log("shared successfully!")}
                        >
                          <i
                            style={{ cursor: "pointer" }}
                            className="fa fa-share-alt btn btn-outline-warning"
                            aria-hidden="true"
                          >
                            &nbsp; Share
                          </i>
                        </RWebShare>
                      </p>
                      <img
                        src={blog.src}
                        alt="blog"
                        className="img-fluid mb-3"
                      />
                      <p
                        className="text-justify description blog-post-title"
                        dangerouslySetInnerHTML={{
                          __html: dom.body.innerHTML,
                        }}
                      ></p>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="text-center">
              <PropagateLoader color="white" />
            </div>
          )}
          <div className="text-center" style={{ marginTop: "4rem" }}>
            <Link to="/blog">
              <button
                className="btn btn-outline-primary mb-5"
                onClick={scrollToTop}
              >
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ReadFullBlog);
