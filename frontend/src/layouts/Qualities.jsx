import React from "react";
import { data } from "../restApi.json";

const Qualities = () => {
  return (
    <>
      <div className="quality">
        <div style={{ justifyContent: "space-evenly" }} className="d-flex quality-block">
          {/* GET DATA FROM (restApi.json) file */}
          {data[0].ourQualities.map((element) => {
            return (
              <div
                style={{
                  maxHeight: "400px",
                  maxWidth: "250px",
                  marginTop: "30px",}}
                key={element.id}>
                <img
                  style={{ height: "70px", marginLeft: "85px" }}
                  src={element.image}
                  alt={element.title}/>
                <p
                  style={{ marginLeft: "65px", marginTop: "20px" }}
                  className="fw-bold fs-5">
                  {element.title}
                </p>
                <p className="description">{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Qualities;
