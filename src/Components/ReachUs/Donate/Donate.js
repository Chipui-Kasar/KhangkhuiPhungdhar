import React from "react";
import "./Donate.css";
import qrCode from "../../../images/qrcode.png";

function Donate() {
  return (
    <div className="donate-container">
      {/* create a donate page with upi payment, qr code, account number, and a button */}
      <div className="header">
        <label className="headerTitle">Donate Page</label>
      </div>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-6 col-xl-6 col-sm-12 col-12 mb-3">
            <div className="appTitle">
              Donate with GPay, PhonePe, PayTM, UPI etc
            </div>
            <button className="btn btn-md btn-success border donates">
              <a
                href={
                  "upi://pay?pa=chipuikasar@oksbi&pn=Chipuimi Kasar &cu=INR"
                }
                className="upi-pay1"
              >
                Donate
              </a>
            </button>
          </div>

          <div className="col-md-6 col-xl-6 col-sm-12 col-12">
            or
            <div className="card mt-3">
              <h5 className="card-title pt-2">
                <label>Scan to Donate</label>
              </h5>

              <img
                src={qrCode}
                height="auto"
                width="100%"
                alt="chipui upi qr code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
