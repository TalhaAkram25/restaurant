import React ,{useState} from "react";
import './../App.css'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-2" style={{
    fontSize:"20px",marginLeft:"10px"
  }} to="#">Foody</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul 
    style={{marginLeft:"330px"}}
    className="navbar-nav mr-auto nav-ul">
      <li className="nav-item active">
        <Link className="nav-link active fs-4" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4" to="/about">About us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4" to="/services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4" to="/team">Team</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4" to="/contact">Contact us</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link active fs-4" to="/reservation">Reservation</Link>
      </li>
      <Link to="/menu">
      <button className="fs-5 nav-btn" 
      style={{background:"none",border:"1px dashed white",color:"white",borderRadius:"20px",padding:"8px",marginLeft:"310px"}}>
      Our Menu</button></Link>
      
    </ul>
  </div>
</nav>
    </>
  )
};
    
export default Navbar;
