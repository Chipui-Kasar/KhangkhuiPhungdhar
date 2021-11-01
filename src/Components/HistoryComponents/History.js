import React from "react";
import "./History.css";
import button from "../../images/button.png";

function History() {
  return (
    <div>
      <section className="mt-4 text-center">
        <div>
          <h1 className="title">History of Khangkhui Khunou Kasar Shang</h1>
        </div>
      </section>

      <div>
        <div className="col-md-3"></div>
        <div className="col-md-6 video-align">
          <div className="card mb-4 shadow-lg">
            <iframe
              width="100%"
              height="347px"
              id="videoframe"
              title="Khangkhui"
              src={`https://www.youtube-nocookie.com/embed/YVb2CTHFdLM?autoplay=1&modestbranding=1&iv_load_policy=3&theme=light&playsinline=1`}
              srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{background:#000;height:100%}img{position:absolute;width:100%;top:0;bottom:0;margin:auto}</style>
  <a href=https://www.youtube-nocookie.com/embed/YVb2CTHFdLM?autoplay=1&modestbranding=1&iv_load_policy=3&theme=light&playsinline=1>
  <img src=https://img.youtube.com/vi/YVb2CTHFdLM/hqdefault.jpg>
  <img id='playbutton' src=${button} style='width: 88px; position: absolute; left: 41.5%;'></a>`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{
                border: "7px solid #424242",
                borderRadius: "7px",
              }}
            ></iframe>
            <div className="card-body">
              <p className="card-text lead">
                History of Kasar Narrated by Shangmahing Kasar
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default React.memo(History);
