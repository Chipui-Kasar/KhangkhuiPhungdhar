import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import GalleryBanner from "../../Components/GalleryBanner/GalleryBanner";
import GalleryPictures from "../../Components/GalleryPictures/GalleryPictures";
import GalleryVideos from "../../Components/GalleryVideos/GalleryVideos";
import GoogleAds from "../GoogleAds/GoogleAds";

function GalleryPage() {
  useEffect(() => {
    <GoogleAds />
  }, []);
  return (
    <>

      <Helmet>
        <base />
        <title>Khangkhui Phungdar Gallery</title>
        <meta
          name="description"
          content="Check out some of the Videos and Pictures of Khangkhui Khunou"
        />
        <meta
          name="title"
          content="Check out some of the Videos and Pictures of Khangkhui Khunou"
        />
        <meta property="og:title" content="Khangkhui Phungdhar's Gallery" />
        <meta
          property="og:description"
          content="Check out some of the Videos and Pictures of Khangkhui Khunou"
          data-rh="true"
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/p/AF1QipNjXA4qOoUzkiX8tx1X4GdgZnd3Kho3F6Rl6R1P=s1600-w400"
          data-rh="true"
        />
        <meta
          property="og:url"
          content="https://khangkhuiphungdhar.netlify.app/gallery"
          data-rh="true"
        />
        <meta
          name="twitter:title"
          content="Gallery of Khangkhui Phungdhar "
          data-rh="true"
        />
        <meta
          name="twitter:description"
          content="Check out some of the Videos and Pictures of Khangkhui Khunou"
          data-rh="true"
        />
        <meta
          name="twitter:image"
          content="https://lh3.googleusercontent.com/p/AF1QipNjXA4qOoUzkiX8tx1X4GdgZnd3Kho3F6Rl6R1P=s1600-w400"
          data-rh="true"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
        <link
          rel="canonical"
          href="https://khangkhuiphungdhar.netlify.app/gallery"
        />
        <GoogleAds />
      </Helmet>
      <GalleryBanner />
      <div className="album py-2">
        <div className="container">
          <GalleryVideos />
          <GalleryPictures />
        </div>
      </div>
    </>
  );
}

export default React.memo(GalleryPage);
