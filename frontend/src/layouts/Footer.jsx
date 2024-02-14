import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer className="container mt-5">
        <div className="d-flex ftflex">
          <div className="ftl">FOODY</div>
          <div style={{ marginLeft: "890px" }} className="d-block ftr">
            <div>F5 Model-Town ,Lahore</div>
            <div>Open: 05:00 PM - 12:00 AM</div>
          </div>
        </div>
        <div
          className="mb-2"
          style={{ height: 3, backgroundColor: "black" }}
        ></div>
        <div className="d-flex fbflex">
          <div className="fbl">
            <p>Developed By TALHA-AKRAM</p>
          </div>
          <div className="fbr" style={{ marginLeft: "764px" }}>
            <p>All Rights Reserved By FOODY.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
