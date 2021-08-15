import React from "react";
import "./GalleryBanner.css";
function GalleryBanner() {
  return (
    <>
      <div className="container-fluid gallerycontainer">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Album Info</h1>
            <p className="info text-muted">
              All the videos and the images are owned by us. It feels weird to
              call this a great record--it's so slight. But it's perfect and
              full of pleasure; <br /> All of which comes through as humor.
            </p>
            <div>
              <a href="#youtubevideos" className="btn btn-primary my-2 mr-1">
                Watch Youtube Videos
              </a>
              <a href="#pictures" className="btn btn-secondary my-2 ml-1">
                Browse Pictures
              </a>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://www.youtube.com/chipuikasar?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              id="youtubevideos"
              className="btn btn-success my-3 p-4"
            >
              <div className="youtube">
                <i className="fa fa-youtube-play fa-3x"></i>
                <div className="ml-3 youtubetitle">
                  Subcscribe on Our YouTube channel
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default GalleryBanner;
