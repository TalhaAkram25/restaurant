import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken')

    navigate("/")
  }
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-success">
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
      </nav> */}

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
          {(!localStorage.getItem("authToken")) ?
            <Link style={{ marginTop: "8px" }} className="nav-link active fs-5 text-white mt-2" to="/">Home</Link>
            :
            <ul
              style={{ marginLeft: "260px" }}
              className="navbar-nav mr-auto navmargin ">
              <li className=" active">
                <Link style={{ marginTop: "8px" }} className="nav-link active fs-5" to="/">
                  Home
                </Link>
              </li>
            </ul>}
          {(!localStorage.getItem("authToken")) ?
            <div style={{ marginTop: "8px", marginLeft: "80%", justifyContent: "" }} className='d-flex nav-ls'>
              <Link className="btn fs-5 text-white ls-btn btn1" to="/login">Login</Link>
              <Link className="btn fs-5 text-white ls-btn" to="/signup">Sign up</Link>
            </div> :
            <div className='d-flex nav-block'>
              <Link className="nav-link active fs-5 text-white mt-2 " to="/about">About US</Link>
              <Link className="nav-link active fs-5 text-white mt-2 " to="/services">Services</Link>
              <Link className="nav-link active fs-5 text-white mt-2 " to="/team">Team</Link>
              <Link className="nav-link active fs-5 text-white mt-2 " to="/contact">Contact US</Link>
              <Link className="nav-link active fs-5 text-white mt-2 " to="/reservation">Reservation</Link>
              <Link className="nav-link active fs-5 text-white mt-2 " to="/menu">Our Menu</Link>
              <button style={{ marginTop: "8px", marginLeft: "250px" }} onClick={handleLogout} className="btn fs-5 text-white  ls-btn nav-lo" >Logout</button>
            </div>}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
