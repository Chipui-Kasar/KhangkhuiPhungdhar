import React, { useEffect, useState } from "react";
// import blogdata from "../../AllData.json";
import { Link } from "react-router-dom";
import "./BlogComponent.css";
import axios from "axios";
import moment from "moment";
import { PropagateLoader } from "react-spinners";
import { Blog } from "../../Data/AllData";

function BlogComponent() {
  const [data, setData] = useState("");
  // const [blog, setBblog] = useState("");
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    // axios
    //   .get(`https://sheetdb.io/api/v1/7ehz82f9q7n6p?sheet=Blog`)
    //   .then(response => {
    //     setBblog(response.data.reverse());
    //     //console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    //https://newsapi.org/v2/top-headlines?country=in&apiKey=81849c4a33644af7934e6530eedb7195
    //https://gnews.io/api/v4/top-headlines?&token=84ff7f5fda04d367a4b3872c6a60f7b3&lang=en&country=in,us
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?&token=84ff7f5fda04d367a4b3872c6a60f7b3&lang=en&country=in`
      )
      .then(res => {
        setData(res.data.articles);
      })
      .catch(err => {
        console.error(err);
      });
  }, [setData]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container blog-container">
        <div className="p-4 p-md-5">
          <div className=" px-0">
            <div className="display-4 font-italic">
              Welcome to the Blog Page
            </div>

            <p className="lead my-3">Submit a new blog and get rewarded</p>
            <p className="lead mb-0 count">
              <a
                href="https://chipuikasarpage.netlify.app/contact"
                target="_child"
                className="text-white border rounded p-2 "
              >
                Submit Here......
              </a>
              {/* Visit counts */}

              <div className="counter">
                <i className="fa fa-eye"></i>
                <img
                  src="https://www.counter12.com/img-C778Dy435yw4x0D0-3.gif"
                  alt="conter12"
                />
              </div>
              <script
                type="text/javascript"
                src="https://www.counter12.com/ad.js?id=C778Dy435yw4x0D0"
              ></script>
              {/* Visit counts */}
            </p>
          </div>
        </div>
        <hr style={{ border: "1px solid #fff" }} />

        <h1>Recent Blogs</h1>
        <div className="row">
          {Blog
            ? Blog.reverse().map(data => {
                console.log(data);
                return (
                  <div className="col-md-6">
                    <div className="card border rounded mb-4 shadow-sm">
                      <img
                        src={data.src}
                        alt={data.alt}
                        loading="lazy"
                        height="225"
                        className="image-right"
                      />

                      <div>
                        <p className="card-text">
                          <div className="p-3">
                            <h4 className="mb-0">{data.title}</h4>
                            <div className="mb-1 text-success">
                              By : {data.author}
                            </div>
                            <div className="mb-1 text-muted">
                              Posted : {data.date}
                            </div>
                            <p className="card-text text-truncate mb-auto text-white ">
                              {data.displaytext}
                            </p>
                            <Link
                              onClick={scrollToTop}
                              to={`/read/${data.title}`}
                              className="stretched-link"
                            >
                              Continue reading
                            </Link>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Loading........."}
        </div>

        <main role="main">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h1 className="pb-4 mb-4 font-italic">Blogs</h1>
              {Blog ? (
                Blog.reverse().map(blog => {
                  //convert html string to Dom
                  const dom = new DOMParser().parseFromString(
                    blog.description,
                    "text/html"
                  );
                  // const html = { __html: blog.description };

                  //-----------------------------
                  return (
                    <>
                      <div id={blog.id}>
                        <hr style={{ border: "1px solid #fff" }} />
                        <hr style={{ border: "1px solid #fff" }} />
                        <div className="blog-post mt-5">
                          <h2 className="blog-post-title">{blog.title}</h2>
                          <p className="blog-post-meta">
                            {blog.date} by{" "}
                            <a href={blog.socialsite} target="_child">
                              {blog.author}
                            </a>
                          </p>

                          <div
                            className="text-justify description"
                            dangerouslySetInnerHTML={{
                              __html: dom.body.innerHTML,
                            }}
                          ></div>
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
            </div>
            <aside className="col-md-4 blog-sidebar">
              <div className="p-4 mb-3 bg-light rounded mt-5">
                <h4 className="font-italic">Sad Story</h4>
                <p className="mb-0 text-dark description">
                  A girl wanted a ring. But the boy gave a teddy bear instead.
                  <br />
                  In anger, the girl threw the teddy bear on the road. The boy
                  went to take it but unfortunately was hit by a truck and died
                  on the spot.
                  <br />
                  At his funeral, the girl hugged the bear and the machine in it
                  spoke, “Will you marry me?” Guess what she found? A ring
                  inside it.
                  <br />
                  <i>--- Unknown</i>
                </p>
              </div>

              <div className="p-4">
                <h4 className="font-italic text-warning">Quick Links</h4>
                <div className="list-group quicklink mb-0">
                  <Link to="/">Home</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/history">History</Link>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-italic">Social Sites</h4>
                <ol className="list-unstyled">
                  <li>
                    <a
                      href="https://github.com/Chipui-Kasar"
                      target="_child"
                      className="text-warning"
                    >
                      <i className="fa fa-github"></i> GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ChipuiKasar"
                      target="_child"
                      className="text-warning"
                    >
                      <i className="fa fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/chipui.kasar.3/"
                      target="_child"
                      className="text-warning"
                    >
                      <i className="fa fa-facebook"></i> Facebook
                    </a>
                  </li>
                </ol>
              </div>
            </aside>
          </div>

          <div className="row">
            <div className="col-md-12 blog-main">
              <hr style={{ border: "1px solid #fff" }} />
              <div className="blog-post-title text-center text-danger">
                Today's Top Headline News
              </div>
              <hr style={{ border: "1px solid #fff" }} />
              {data
                ? data.map((news, key) => {
                    return (
                      <div className="blog-post" key={key}>
                        <h2 className="blog-post-title text-white">
                          {news.title}
                        </h2>
                        <p className="blog-post-meta">
                          {moment(news.publishedAt).calendar()} by{" "}
                          <b>{news.source.name}</b>
                        </p>
                        <img width="40%" src={news.image} alt={news.title} />
                        <p className="description">{news.description}</p>
                        <p className="description">{news.content}</p>

                        <button
                          onClick={() => settoggle(!toggle)}
                          className="btn btn-primary"
                        >
                          <a href={news.url} target="_child" rel="noreferrer">
                            Read full article
                          </a>
                        </button>
                        <hr style={{ border: "1px solid #fff" }} />
                        <hr style={{ border: "1px solid #fff" }} />
                      </div>
                    );
                  })
                : "Loading......"}

              <div className="blog-post">
                <h2 className="blog-post-title">Adventure</h2>
                <p className="blog-post-meta">
                  December 14, 2020 by <b>Chris</b>
                </p>

                <p className="description">
                  From Tokyo to Mexico, to Rio. Yeah, you take me to utopia. I'm
                  walking on air. We'd make out in your Mustang to Radiohead. I
                  mean the ones, I mean like she's the one. Sun-kissed skin so
                  hot we'll melt your popsicle. Slow cooking pancakes for my
                  boy, still up, still fresh as a Daisy.
                </p>
                <ul className="description">
                  <li>I hope you got a healthy appetite.</li>
                  <li>You're never gonna be unsatisfied.</li>
                  <li>Got a motel and built a fort out of sheets.</li>
                </ul>
                <p className="description">
                  Don't need apologies. Boy, you're an alien your touch so
                  foreign, it's <em>supernatural</em>, extraterrestrial. Talk
                  about our future like we had a clue. I can feel a phoenix
                  inside of me.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default React.memo(BlogComponent);
