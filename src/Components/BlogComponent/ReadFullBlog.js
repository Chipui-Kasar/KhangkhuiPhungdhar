import axios from "axios";
import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

function ReadFullBlog(props) {
  const [blog, setBblog] = useState("");
  console.log(props);
  useEffect(() => {
    axios
      .get(`https://sheetdb.io/api/v1/7ehz82f9q7n6p?sheet=Blog`)
      .then(response => {
        setBblog(response.data.reverse());
        //console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div className="col-md-8 blog-main">
        <h1 className="pb-4 mb-4 font-italic">Blogs</h1>
        {blog ? (
          blog
            .filter(clickedBlog => {
              if (clickedBlog.title === "") {
                return clickedBlog;
              } else {
                return null;
              }
            })
            .map(blog => {
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
                        {blog.description2}
                      </p>
                      <p className="text-justify description">
                        {blog.description3}
                      </p>
                      <p className="text-justify description">
                        {blog.description4}
                      </p>
                      <p className="text-justify description">
                        {blog.description5}
                      </p>
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
      ;
    </div>
  );
}

export default ReadFullBlog;
