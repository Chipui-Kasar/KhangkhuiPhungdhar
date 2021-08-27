import React from "react";
import { Helmet } from "react-helmet";
import GalleryBanner from "../../Components/GalleryBanner/GalleryBanner";
import GalleryPictures from "../../Components/GalleryPictures/GalleryPictures";
import GalleryVideos from "../../Components/GalleryVideos/GalleryVideos";

function GalleryPage() {
  return (
    <>
      <Helmet>
        <base />
        <title>Khangkhui Phungdar Gallery</title>
        <meta
          name="description"
          content="Check out some of the Videos and Pictures of Khangkhui Khunou"
        />
        <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />
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

export default GalleryPage;
