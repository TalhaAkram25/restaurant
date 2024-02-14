import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link
          style={{ marginLeft: "15px" }}
          className="navbar-brand fw-bold fs-2 "
          to="/">
          Foody
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* pages starts */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            style={{ marginLeft: "340px" }}
            className="navbar-nav mr-auto navmargin"
          >
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/about">
                About US{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/services">
                Services{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/team">
                Team{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/contact">
                Contact US{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/reservation">
                Reservation
              </Link>
            </li>
          </ul>

          <Link className="nav-link" to="/menu">
            <button
              className="text-white p-2 navmenu"
              style={{
                marginLeft: "320px",
                background: "transparent",
                border: "1.5px solid white",
                borderRadius: "18px",
              }}
            >
              Our Menu{" "}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
