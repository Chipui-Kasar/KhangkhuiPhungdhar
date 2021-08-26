import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
import khangkhuiHome from "../../images/Home/Carousel/khangkhui.jpeg";
import harvakhangai from "../../images/Home/Carousel/harva.jpeg";
import nightViewHarva from "../../images/Home/Carousel/nightViewHarva.jpg";
function HomeBanner(props) {
  return (
    <>
      <div className="news text-center">
        <div className="col-md-3 col-12 pl-1 pt-1" id="leftnews">
          News & Updates
        </div>

        <div id="latestnews" className="col-md-9 col-12 pt-1">
          <div className="marquee">
            <p>
              {/* Visit counts */}
              <div className="totalvisit">
                People have visited{" "}
                <img
                  src="https://www.counter12.com/img-C778Dy435yw4x0D0-3.gif"
                  alt="conter12"
                />{" "}
                times
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ** We have re-define our site & New Blog Page has been Added **
              </div>
              <script
                type="text/javascript"
                src="https://www.counter12.com/ad.js?id=C778Dy435yw4x0D0"
              ></script>
              {/* Visit counts */}
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
              src={khangkhuiHome}
              focusable="false"
            />

            <div className="container">
              <div className="carousel-caption text-left">
                <h1 className="carouseltitle text-success">
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
                <p>You have visited our site {props.visit} times</p>
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
              src={nightViewHarva}
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
