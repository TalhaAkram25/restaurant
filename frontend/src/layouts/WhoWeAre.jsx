import React from "react";
import { data } from "../restApi.json";

const WhoWeAre = () => {
  return (
    <>
      <div
        style={{ justifyContent: "space-evenly", marginTop: "90px" }}
        className="d-flex container">
        <div style={{ marginTop: "45px" }}>
          {/* GET DATA FROM (restApi.json) file */}
          {data[0].who_we_are.slice(0, 2).map((element, index) => (
            <div
              key={element.id}
              style={{ marginBottom: index === 1 ? "0" : "75px" }}>
              <h1 style={{ fontWeight: "300", marginLeft: "14px" }}>
                {element.number}
              </h1>
              <p className="text-muted">{element.title}</p>
            </div>
          ))}
        </div>

        <div>
          <img className="whoimg" style={{ height: "400px" }} src="whoweare.png" alt="food" />
        </div>
        <div style={{ marginTop: "45px" }}>
          {/* GET DATA FROM (resrApi.json) file */}
          {data[0].who_we_are.slice(2).map((element, index) => (
            <div
              key={element.id}
              style={{ marginBottom: index === 1 ? "0" : "75px" }}>
              <h1 style={{ fontWeight: "300", marginLeft: "20px" }}>
                {element.number}
              </h1>
              <p className="text-muted">{element.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default WhoWeAre;
