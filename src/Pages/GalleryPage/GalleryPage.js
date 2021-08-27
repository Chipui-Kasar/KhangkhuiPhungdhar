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

        <meta property="og:title" content="Khangkhui Phungdhar's Gallery" />
        <meta
          property="og:description"
          content="Check out some of the Videos and Pictures of Khangkhui Khunou"
        />
        <meta
          property="og:image"
          content="https://scontent.fgau3-1.fna.fbcdn.net/v/t31.18172-8/26171788_2127592207495255_4791033178210349996_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=dDbUiWB7W8QAX9ufN-u&_nc_ht=scontent.fgau3-1.fna&oh=ea208bfd1d67e33065906046b0967794&oe=614CF65B"
        />
        <meta
          property="og:url"
          content="//khangkhuiphungdhar.netlify.app/gallery"
        />
        <meta name="twitter:title" content="Gallery of Khangkhui Phungdhar " />
        <meta
          name="twitter:description"
          content="Check out some of the Videos and Pictures of Khangkhui Khunou"
        />
        <meta
          name="twitter:image"
          content="https://scontent.fgau3-1.fna.fbcdn.net/v/t31.18172-8/26171788_2127592207495255_4791033178210349996_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=dDbUiWB7W8QAX9ufN-u&_nc_ht=scontent.fgau3-1.fna&oh=ea208bfd1d67e33065906046b0967794&oe=614CF65B"
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

export default GalleryPage;
