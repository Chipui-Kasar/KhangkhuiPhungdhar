import React from "react";
import "./ReachUs.css";
function ReachUs() {
  const donateClick = () => {
    alert("This is in a beta, Thanks for trying");
  };
  return (
    <div>
      <footer className="container-fluid bg-dark">
        <p className="float-right text-white">
          <a href="#">⬆ Back to top </a>
        </p>
        <h2 className="text-white pl-5">Reach Us</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 form-group text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8880.812464281453!2d94.41890255930534!3d25.068248731375913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374858a895a9ff5f%3A0x73ec9280e243e411!2sKhangkhui%20Khunou%2C%20Manipur%20795142!5e0!3m2!1sen!2sin!4v1597851617666!5m2!1sen!2sin"
              width="80%"
              title="Khangkhui Khunou Map"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
            <div>
              <img
                className="bd-placeholder-img rounded-circle"
                width="170"
                height="170"
                src="https://i.pinimg.com/280x280_RS/6c/e2/e9/6ce2e9d1c9ba5e5ed762c2f2d4eb7f7b.jpg"
                alt="Chipui Kasar"
              ></img>
              <h2 className="text-white">
                <i className="fa fa-tools"></i> Developer
              </h2>
              <h6 className="text-white">
                <i>Chipui Kasar</i>
              </h6>
            </div>
            <br />
            <div>
              <button
                className="btn btn-light btn-outline-info"
                onClick={donateClick}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row text-left">
          <div className="col-sm-12 col-xs-12 col-md-7 py-4 pl-5">
            <h4 className="text-white" id="about">
              About
            </h4>
            <p className="text-muted">
              This webpage is about the History and the current ongoing of
              Khangkhui Phungdhar. Here, you can see the history of how the
              village was founded and by whom. Not only that there lot more
              information about Khangkhui Phungdhar. You can also watch some of
              the pics and videos
            </p>
          </div>
          <div className=" offset-md-1 py-4 pl-5">
            <h4 className="text-white ">Contact</h4>
            <ul className="list-unstyled text-left">
              <li>
                <a
                  href="https://www.instagram.com/chipui_ks/"
                  target="_blank"
                  className="text-white"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram text-danger"></i> Follow on
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/155538131220875/"
                  target="_blank"
                  className="text-white"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook text-primary"></i> Like on
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:chipuikasar@gmail.com"
                  className="text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-envelope text-danger"></i> Email me
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=8264163783"
                  className="text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-whatsapp text-success"></i> Whats App
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="float-right text-white">
          <a href="#">⬆ Back to top </a>
        </p>

        <hr className="featurette-divider" />

        <p className="text-white text-center">
          Copyright &copy; All rights reserved @2021 &middot;
        </p>
      </footer>
    </div>
  );
}

export default ReachUs;