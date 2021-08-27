import React from "react";
import { Helmet } from "react-helmet";
import BlogComponent from "../../Components/BlogComponent/BlogComponent";
import "./BlogPage.css";
function BlogPage() {
  return (
    <>
      <Helmet>
        <base />
        <title>Blog</title>
        <meta name="description" content="Keep Writing and Keep Reading" />
        <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />
      </Helmet>
      <div className="container-fluid blog-container">
        <BlogComponent />
      </div>
    </>
  );
}

export default BlogPage;
