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
          content="https://khangkhuiphungdhar.netlify.app/static/media/ayahkhudai.4ddfbbb3.jpg"
          data-rh="true"
        />
        <meta
          property="og:url"
          content="//khangkhuiphungdhar.netlify.app/gallery"
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
          content="https://khangkhuiphungdhar.netlify.app/static/media/ayahkhudai.4ddfbbb3.jpg"
          data-rh="true"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
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

export default React.memo(GalleryPage);
