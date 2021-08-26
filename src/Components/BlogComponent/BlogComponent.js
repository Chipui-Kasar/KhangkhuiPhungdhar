import React from "react";
import blogdata from "../../AllData.json";
import { Link } from "react-router-dom";
import "./BlogComponent.css";
//import { Blog } from "../../Data/AllData";
function BlogComponent() {
  console.log(blogdata);
  return (
    <>
      <div className="container blog-container">
        <div className="p-4 p-md-5">
          <div className=" px-0">
            <div className="display-4 font-italic">
              Welcome to the Blog Page
            </div>

            <p className="lead my-3">Submit a new blog and get ₹10 per post</p>
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
          {blogdata.Blog.map(data => {
            return (
              <div className="col-md-6">
                <div className="card border rounded mb-4 shadow-sm">
                  <img
                    src={data.src}
                    alt={data.alt}
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
                        <a href={`#${data.id}`} className="stretched-link">
                          Continue reading
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <main role="main">
          <div className="row">
            <div className="col-md-8 blog-main">
              <h1 className="pb-4 mb-4 font-italic">Blogs</h1>
              {blogdata.Blog.map(blog => {
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
                        <p className="text-justify description">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}

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
        </main>
      </div>
    </>
  );
}

export default BlogComponent;
