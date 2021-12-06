import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./ChristmasWish.css";
import audio from "./wish.mp3";

function ChristmasWish() {
  // const [name, setName] = React.useState("");

  // const nameChange = e => {
  //   setName(e.target.value);
  // };
  //play audio on page load

  const bubbles = () => {
    var count = 100;
    var section = document.querySelector("section");
    var i = 0;
    while (i < count) {
      var bubble = document.createElement("i");
      var x = Math.floor(Math.random() * window.innerWidth);
      var y = Math.floor(Math.random() * window.innerHeight);
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

  useEffect(() => {
    bubbles();
  }, []);

  return (
    <div>
      <Helmet>
        <base />
        <title>Merry Christmas & Happy New Year</title>
        <meta name="description" content="Merry Christmas & Happy New Year" />
        <meta name="title" content="Merry Christmas and happy New Year " />
        <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />

        <meta property="og:title" content="Wish" />
        <meta
          property="og:description"
          content="Merry Christmas and happy New Year "
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2FSANTA%20CLAUS.jpg%20on%206-Dec-2021%2C%2014%3A26%3A28?alt=media&token=937cb209-f0b0-4ecb-aa64-834920d30ace"
        />
        <meta
          property="og:url"
          content="//khangkhuiphungdhar.netlify.app/wish"
        />
        <meta name="twitter:title" content="History of Khangkhui Phungdhar " />
        <meta
          name="twitter:description"
          content="Merry Christmas and Happy New Year"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/file%2FSANTA%20CLAUS.jpg%20on%206-Dec-2021%2C%2014%3A26%3A28?alt=media&token=937cb209-f0b0-4ecb-aa64-834920d30ace"
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
      <section className="wishContainer">
        <div className="box">
          <div className="circle">
            <p>
              <span> Khangkhui Phungdhar </span>
              <br /> wishes you a
              <br />
              Merry Christmas
              <br />
              & <br />
              Happy New Year
            </p>
          </div>
          <audio src={audio} autoPlay={true} controls>
            Sorry your browser does not support the audio element.
          </audio>
        </div>
      </section>
    </div>
  );
}

export default ChristmasWish;
