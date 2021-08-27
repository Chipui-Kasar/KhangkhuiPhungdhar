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
        <meta
          name="description"
          content="Keep Writing and Keep Reading || Write a blog and get paid instantly"
        />
        <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />

        <meta property="og:title" content="Blog" />
        <meta
          property="og:description"
          content="Keep Writing and Keep Reading || Write a blog and get paid instantly"
        />
        <meta property="og:image" content="https://picsum.photos/536/354" />
        <meta
          property="og:url"
          content="//khangkhuiphungdhar.netlify.app/Blog"
        />
        <meta name="twitter:title" content="History of Khangkhui Phungdhar " />
        <meta
          name="twitter:description"
          content="Keep Writing and Keep Reading || Write a blog and get paid instantly"
        />
        <meta name="twitter:image" content="https://picsum.photos/536/354" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
      </Helmet>
      <div className="container-fluid blog-container">
        <BlogComponent />
      </div>
    </>
  );
}

export default BlogPage;
