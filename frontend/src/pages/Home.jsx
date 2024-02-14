import React from "react";
import { Link } from "react-router-dom";
import WhoWeAre from "../layouts/WhoWeAre";
import Qualities from "../layouts/Qualities";
import Reviews from "../layouts/Reviews";

export const Home = () => {
  return (
    <>
      <div
      className="home-text"
        style={{
          position: "absolute",
          marginLeft: "130px",
          marginTop: "120px",
          marginRight: "540px"}}>
        <div className="home-heading" style={{ fontSize: "55px" }}>Food Made With Love</div>
        <p className="fs-4 text-muted">
          Experience the epitome of culinary delight at Foody, where gastronomic
          excellence meets unparalleled hospitality. Indulge in a symphony of
          flavors meticulously crafted by our master chefs, each dish telling a
          story of passion and creativity.
        </p>
        {/* MENU BUTTON */}
        <Link to="/menu">
          <button className="p-2 rounded btn btn-outline-success">
            Explore Menu
          </button>
        </Link>
      </div>
      <img
      className="imge1"
        style={{ marginLeft: "680px", height: "500px" }}
        src="./burgerhome.webp"
        alt=""/>

      {/* qualities section */}
      <Qualities />
      {/* whoWeAre section */}
      <WhoWeAre />
      {/* reviews section */}
      <Reviews />
    </>
  );
};
export default Home;
