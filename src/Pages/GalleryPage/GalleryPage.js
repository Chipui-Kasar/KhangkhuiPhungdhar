import React from "react";
import GalleryBanner from "../../Components/GalleryBanner/GalleryBanner";
import GalleryPictures from "../../Components/GalleryPictures/GalleryPictures";
import GalleryVideos from "../../Components/GalleryVideos/GalleryVideos";

function GalleryPage() {
  return (
    <>
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
