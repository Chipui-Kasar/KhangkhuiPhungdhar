import React from "react";
import "./History.css";
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
          <div className="card mb-4 shadow-lg ">
            <iframe
              width="100%"
              height="347"
              src="https://www.youtube.com/embed/YVb2CTHFdLM"
              title="History of Khangkhui Khunou Village Shang"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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

export default History;
