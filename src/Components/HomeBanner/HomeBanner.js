import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
import harvakhangai from "../../images/harva.jpeg";
function HomeBanner() {
  return (
    <>
    
      <div className="news text-center">
        <div className="col-md-3 col-12 pl-1 pt-1" id="leftnews">
          News & Updates
        </div>

        <div id="latestnews" className="col-md-9 col-12 pt-1">
          <div className="marquee">
            <p>
              ** We have re-define our site & New Blog Page has been Added **
            </p>
          </div>
        </div>
      </div>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt="Khangkhui Village"
              src="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/116599134_2964280263826441_1308995543305041698_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=wxDamgiQEJQAX9R4mWI&_nc_ht=scontent.fgau1-2.fna&oh=9be33ead969b86a08a1c1446ca95c82b&oe=613CBDD1"
              focusable="false"
            />

            <div className="container">
              <div className="carousel-caption text-left">
                <h1 className="carouseltitle">
                  Welcome to Khangkhui Phungdhar official Website
                </h1>
                <p>A beautiful village with lots of memories</p>
                <p>
                  <a
                    className="btn btn-lg btn-primary"
                    href="#aboutkhangkhui"
                    role="button"
                  >
                    Learn More about Khangkhui
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              alt="Harva Khangai"
              src={harvakhangai}
              focusable="false"
            />

            <div className="container">
              <div className="carousel-caption">
                <h1 className="carouseltitle text-dark">
                  Khangkhui Phungdhar Harva Khangai
                </h1>
                <p className="text-warning">
                  Harva Khangai is the battle spot that was fought during the
                  2nd World War
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-primary"
                    href="#harvakhangai"
                    role="button"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              src="https://lh3.googleusercontent.com/QfGWlQ53Gk6aTKn9l7bi_-EzNoyNqUau7rW0f6n3UGsQ_EA57uZv-hq6bY7amTIKHUdPQUnjZB_15QSQ=w1080-h608-p-no-v0"
              alt="harva khangai"
              focusable="false"
            />

            <div className="container">
              <div className="carousel-caption text-right">
                <h1 className="carouseltitle">Night View from Harva Khangai</h1>
                <p></p>
                <p>
                  <Link
                    className="btn btn-lg btn-primary"
                    to="/gallery#pictures"
                    role="button"
                  >
                    Browse Pictures
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default HomeBanner;
