import React  from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <>
    {/* OUR TEAM MEMBERS SECTION STARTS */}
      <div>
        <div>
          <center>
          <h1 style={{  }} className="mt-3">
            OUR TEAM
          </h1>
            <div
              className="mb-2"
              style={{ height: 3, backgroundColor: "black", width: "180px" }}>
              </div>
          </center>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"}}>
              {/* GET DATA FROM (restApi.json) file */}
          {data[0].team.map((element) => {
            return (
              <div
                style={{
                  height: "100%",
                  width: "calc('50% - 3px')",
                  marginBottom: "20px",marginTop:"20px"}}
                className="d-block"
                key={element.id}>
                <img
                className="team-img"
                  style={{
                    width: "347px",
                    height: "347px",
                    objectFit: "cover"}}
                  src={element.image}
                  alt={element.name}/>
                <h3
                  className="fs-2"
                  style={{ marginLeft: "70px", marginTop: "15px" }}>
                  {element.name}
                </h3>
                <p className="fs-5" style={{ marginLeft: "100px" }}>
                  {element.designation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
