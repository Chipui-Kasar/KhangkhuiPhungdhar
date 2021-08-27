import React, { useEffect } from "react";
import "./MYCPage.css";
import { Helmet } from "react-helmet";
import Ura from "../../AllData.json";

function MYCPage() {
  useEffect(() => {
    // You can change global variables here:
    var radius = 240; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = -60; // unit: seconds/360 degrees
    var imgWidth = 120; // width of images (unit: px)
    var imgHeight = 170; // height of images (unit: px)

    // ===================== start =======================
    // animation start after 1000 miliseconds
    setTimeout(init, 1000);

    var odrag = document.getElementById("drag-container");
    var ospin = document.getElementById("spin-container");
    var aImg = ospin.getElementsByTagName("img");
    var aVid = ospin.getElementsByTagName("video");
    var aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    function applyTranform(obj) {
      // Constrain the angle of camera (between 0 and 180)
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }

    var desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    // auto spin
    if (autoRotate) {
      var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // setup events
    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      var d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1);
    };
  }, []);

  return (
    <div className="MYCcontainer">
      <Helmet>
        <base />
        <title>Ura Yarnao</title>
        <meta
          name="title"
          content="Coming together is a beginning. Keeping together is progress. Working together is success."
        />
        <meta
          name="description"
          content="Coming together is a beginning. Keeping together is progress. Working together is success."
        />
        <link rel="canonical" href="//khangkhuiphungdhar.netlify.app" />

        <meta property="og:title" content="Ura Yarnao" />
        <meta
          property="og:description"
          content="Coming together is a beginning. Keeping together is progress. Working together is success."
        />
        <meta
          property="og:image"
          content="https://khangkhuiphungdhar.netlify.app/static/media/nightViewHarva.2289ef58.jpg"
        />
        <meta
          property="og:url"
          content="//khangkhuiphungdhar.netlify.app/ura"
        />
        <meta name="twitter:title" content="Ura Yarnao " />
        <meta
          name="twitter:description"
          content="Coming together is a beginning. Keeping together is progress. Working together is success."
        />
        <meta
          name="twitter:image"
          content="https://khangkhuiphungdhar.netlify.app/static/media/nightViewHarva.2289ef58.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
      </Helmet>
      <div className="destination">Ura Yarnao</div>
      <div id="drag-container">
        <div id="spin-container">
          {Ura.Ura.map(person => {
            return (
              <>
                <a href={person.socialsite} target="_child" rel="noreferrer">
                  <img src={person.img} alt={person.alt} loading="lazy" />
                </a>
                <div className="name"></div>
              </>
            );
          })}
          <div className="text">We are one</div>
          <p>Ura Yarnao</p>
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
}

export default MYCPage;
