import React from "react";
import { Helmet } from "react-helmet";
import BlogComponent from "../../Components/BlogComponent/BlogComponent";
import ReachUs from "../../Components/ReachUs/ReachUs";
import GoogleAds from "../GoogleAds/GoogleAds";
import "./BlogPage.css";
function BlogPage() {
  var title = "Blog";
  return (
    <>
      <GoogleAds />
      <Helmet>
        <base />
        <title>{title}</title>
        <meta
          name="description"
          content="Keep Writing and Keep Reading || Write a blog and get paid instantly"
        />
        <meta
          name="title"
          content="Keep Writing and Keep Reading || Write a blog and get paid instantly"
        />
        <link
          rel="canonical"
          href="https://khangkhuiphungdhar.netlify.app/blog"
        />

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
      <ReachUs />
    </>
  );
}

export default React.memo(BlogPage);
