import React, { useEffect } from "react";
import "./MYCPage.css";
import { Helmet } from "react-helmet";

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
          <a
            href="https://www.facebook.com/profile.php?id=100006859965748"
            target="_child"
            rel="noreferrer"
          >
            <img
              src="https://scontent.fgau3-1.fna.fbcdn.net/v/t1.6435-9/36744876_2116865928552052_2440001823147294720_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=2gX7q5kfBYsAX8NBFoy&tn=RHRdgxsE3c_JskQB&_nc_ht=scontent.fgau3-1.fna&oh=2aaf032807fc7ff7e41f7b6a5674d356&oe=614C9CB3"
              alt="Aimson"
            />
          </a>
          <a
            href="https://chipuikasarpage.netlify.app/"
            target="_child"
            rel="noreferrer"
          >
            <img
              src="https://chipuikasarpage.netlify.app/static/media/about.29ccae07.png"
              alt="Chipui"
            />
          </a>
          <a
            href="https://www.facebook.com/soreipam.khudai.9"
            target="_child"
            rel="noreferrer"
          >
            <img src="" alt="Soreipam" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100007363122239"
            target="_child"
            rel="noreferrer"
          >
            <img
              src="https://scontent.fgau3-1.fna.fbcdn.net/v/t1.18169-9/12066055_1550069841915105_3593860267440417747_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=oiXNLkb5wi4AX_ngYU2&_nc_ht=scontent.fgau3-1.fna&oh=2f37e6e12e212c50de0c575d4ccdec18&oe=614F51BF"
              alt="Hormipam"
              target="#hormipam"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100006166546912"
            target="_child"
            rel="noreferrer"
          >
            <img
              src="https://scontent.fgau3-1.fna.fbcdn.net/v/t1.6435-9/221714598_2936427096572813_1847925721466239211_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DCSUyFYF1lQAX8roNvG&_nc_ht=scontent.fgau3-1.fna&oh=bb34acd87d1cdd6c3a6de76e3598ea65&oe=614DE6AE"
              alt="Atim"
            />
          </a>
          <a
            href="https://www.instagram.com/khitolae/"
            target="_child"
            rel="noreferrer"
          >
            <img src="" alt="Khanchuila" />
          </a>

          <img src="" alt="Sochuichon" />

          <img src="" alt="Pamyophi" />

          <a
            href="https://www.instagram.com/ayam_khudai/"
            target="_child"
            rel="noreferrer"
          >
            <img
              src="https://scontent.fgau3-1.fna.fbcdn.net/v/t1.6435-9/38446581_114064682862827_7718860407703601152_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=o7epE2Ap380AX8jKupe&_nc_ht=scontent.fgau3-1.fna&oh=e4c0a34c213573eaf77c553fdf3868f2&oe=614E470E"
              alt="Ayam"
            />
          </a>
          <div className="text">We are one</div>
          <p>Ura Yarnao</p>
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
}

export default MYCPage;
