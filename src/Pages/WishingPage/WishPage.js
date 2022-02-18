import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./WishPage.css";
import audio from "./wish.mp3";
import GoogleAds from "../GoogleAds/GoogleAds";

function WishPage() {
  const bubbles = () => {
    var count = 100;
    var section = document.querySelector("section");
    var i = 0;
    while (i < count) {
      var bubble = document.createElement("i");
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;
      var size = Math.random() * 10;
      bubble.style.left = x + "px";
      bubble.style.top = y + "px";
      bubble.style.width = 1 + size + "px";
      bubble.style.height = 1 + size + "px";
      bubble.style.animationDuration = 0.8 + size + "s";
      bubble.style.animationDelay = -size + "s";
      section.appendChild(bubble);
      i++;
    }
  };

  //show hide text on click
  const showHide = () => {
    document.getElementById("text").style.display = "block";
    //add background image
    document.getElementById("secondary").style.display = "none";
  };

  useEffect(() => {
    bubbles();
    document.getElementById("secondary").style.display = "block";
    document.getElementById("text").style.display = "none";
  }, []);

  const play = () => {
    var audio = document.getElementById("myAudio");
    audio.play();
  };
  useEffect(() => {
    <GoogleAds />
  }, []);
  //splash screen before loading the page
  return (
    <div>
      <GoogleAds />
      <Helmet>
        <title>Merry Christmas and a Happy New Year</title>
        <meta
          name="description"
          content="Khangkhui Phungdhar Wishes you a Merry Christmas & Happy New Year"
        />
        <meta name="title" content="Merry Christmas and Happy New Year" />
        <link
          rel="canonical"
          href="https://khangkhuiphungdhar.netlify.app/palm"
        />

        <meta property="og:title" content="Merry Christmas & Happy New Year" />
        <meta
          property="og:description"
          content="Khangkhui Phungdhar wishes you a Merry Christmas and happy New Year "
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2FSANTA%20CLAUS.jpg%20on%2010-Dec-2021%2C%2021%3A25%3A12?alt=media&token=bfeda4b2-ef38-4345-a5b8-c4b425c06b3a"
        />
        <meta
          property="og:url"
          content="https://khangkhuiphungdhar.netlify.app/palm"
        />
        <meta
          name="twitter:title"
          content="Merry Christmas and Happy New Year"
        />
        <meta
          name="twitter:description"
          content="Khangkhui Phungdhar wishes you a Merry Christmas and Happy New Year"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2FSANTA%20CLAUS.jpg%20on%2010-Dec-2021%2C%2021%3A25%3A12?alt=media&token=bfeda4b2-ef38-4345-a5b8-c4b425c06b3a"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
      </Helmet>

      {/* <form className="form">
        <label
          style={{
            fontWeight: 600,
            backgroundColor: "rgba(0, 0, 0, 0.315)",
            padding: "5px",
            borderRadius: "5px",
          }}
          className="text-warning"
        >
          Create Your Wish Now
        </label>
        <br />
        <input
          type="text"
          className="input"
          placeholder="Enter your name"
          value={name}
          onChange={nameChange}
        />
      </form> */}

      <section className="palmContainer">
        <div className="box">
          <div className="circle" id="background" onClick={play}>
            <p id="secondary" onClick={showHide}>
              Click here to get a Wish
              <br />
              <span id="demo"></span>
            </p>
            <p id="text">
              <span> Khangkhui Phungdhar </span>
              <br /> wishes you a
              <br />
              Merry Christmas
              <br />
              & <br />a Happy New Year
            </p>
          </div>
          {/* <audio src={audio} autoPlay={true} controls loop>
            Sorry your browser does not support the audio element.
          </audio> */}

          <audio id="myAudio" src={audio} autoPlay loop></audio>
        </div>
      </section>
    </div>
  );
}

export default WishPage;
