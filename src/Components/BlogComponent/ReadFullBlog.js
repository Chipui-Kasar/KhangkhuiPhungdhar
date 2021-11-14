// import axios from "axios";
import React, { useEffect } from "react";
import "./BlogComponent.css";
import { PropagateLoader } from "react-spinners";
import { Blog } from "../../Data/AllData";
import { Link, useParams, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { RWebShare } from "react-web-share";

function ReadFullBlog() {
  //   const [Blog, setBblog] = useState("");
  //console.log(props);

  // useEffect(() => {

  //     axios
  //       .get(`https://sheetdb.io/api/v1/7ehz82f9q7n6p?sheet=Blog`)
  //       .then(response => {
  //         setBblog(response.data.reverse());
  //         //console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const history = useHistory();
  const id = useParams();
  var newUrl = id.id.replace(/ /g, "-");

  useEffect(() => {
    history.replace(`/read/${newUrl}`);
  }, [newUrl, history]);

  const seo = Blog.filter(item => {
    if (item.title.replace(/ /g, "-") === newUrl) {
      return item;
    } else {
      return null;
    }
  }).map(item => {
    return (
      <>
        <Helmet>
          <base />
          <title>{item.title}</title>
          <meta name="description" content={item.displaytext} />
          <meta name="title" content={item.title} />
          <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />

          <meta property="og:title" content="Blog" />
          <meta property="og:description" content={item.displaytext} />
          <meta property="og:image" content={item.src} />
          <meta
            property="og:url"
            content="//khangkhuiphungdhar.netlify.app/Blog"
          />
          <meta name="twitter:title" content={item.title} />
          <meta name="twitter:description" content={item.displaytext} />
          <meta name="twitter:image" content={item.src} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@chipui" />
        </Helmet>
      </>
    );
  });
  return (
    <>
      {seo}
      <div className="read-container" style={{ padding: "1px" }}>
        <div className="col-md-12 blog-main">
          {Blog ? (
            Blog.filter(clickedBlog => {
              if (clickedBlog.title.replace(/ /g, "-") === newUrl) {
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
                    <div className="blog-post mt-5">
                      <h2 className="blog-post-title">{blog.title}</h2>
                      <p className="blog-post-meta">
                        {blog.date} by{" "}
                        <a href={blog.socialsite} target="_child">
                          {blog.author}
                        </a>
                        &nbsp; &nbsp; &nbsp;
                        <RWebShare
                          data={{
                            text: blog.title,
                            url: `https://khangkhuiphungdhar.netlify.app/read/${blog.title.replace(
                              / /g,
                              "-"
                            )}`,
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
                            className="fa fa-share-alt text-white btn btn-outline-warning"
                            aria-hidden="true"
                          >
                            &nbsp; Share
                          </i>
                        </RWebShare>
                      </p>
                      <p
                        className="text-justify description"
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
          <div className="text-center">
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
