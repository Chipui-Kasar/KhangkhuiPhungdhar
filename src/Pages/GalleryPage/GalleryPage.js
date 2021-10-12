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
          content="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/s640x640/245161982_4331496073602962_7780340899764369381_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=0debeb&_nc_ohc=KqC2PlF9y9EAX8O7ZUd&tn=5U3BRKsECvtRmyhs&_nc_ht=scontent.fgau1-2.fna&oh=5f2a8fbc4491f083c1609d9514c0ac2f&oe=618A540A"
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
          content="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/s640x640/245161982_4331496073602962_7780340899764369381_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=0debeb&_nc_ohc=KqC2PlF9y9EAX8O7ZUd&tn=5U3BRKsECvtRmyhs&_nc_ht=scontent.fgau1-2.fna&oh=5f2a8fbc4491f083c1609d9514c0ac2f&oe=618A540A"
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
