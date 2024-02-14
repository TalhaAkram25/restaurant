import React from "react";
import { data } from "../restApi.json";

const Reviews = () => {
  return (
    <>
      <center>
        <div style={{ marginTop: "70px" }} className="fs-1">
          Reviews & Testimonials
        </div>
      </center>
      <div style={{ justifyContent: "space-evenly" }} className="d-flex review">
        {/* GET DATA FROM (restApi.json) file */}
        {data[0].testimonials.map((element) => {
          return (
            <div
              style={{
                width: "280px",
                marginTop: "30px",
                marginBottom: "40px",}}
              key={element.id}>
              <div style={{ marginLeft: "65px" }}>
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={element.image}
                  alt={element.userName}/>
                <h3 style={{ marginLeft: "7px" }}>{element.userName}</h3>
              </div>
              <p style={{ marginLeft: "10px" }}>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Reviews;
