import React, { useEffect } from "react";
import "./ChristmasWish.css";

function ChristmasWish() {
  // const [name, setName] = React.useState("");

  // const nameChange = e => {
  //   setName(e.target.value);
  // };

  const bubbles = () => {
    var count = 200;
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
          <audio
            src="https://firebasestorage.googleapis.com/v0/b/khangkhuiphungdhar.appspot.com/o/wish%2Fwish.mp3?alt=media&token=8b62735b-ae28-4bd3-b7c7-736dc068f547"
            autoPlay
            loop
          ></audio>
        </div>
      </section>
    </div>
  );
}

export default ChristmasWish;
