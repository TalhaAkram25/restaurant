import React  from "react";
import { data } from "../restApi.json";

const OurMenu = () => {
  

  return (
    <>
      <div>
        <center>
        <button
          style={{
            border: "2px dashed grey",
            borderRadius: "45px",
            background: "transparent",
            cursor: "default"}}
            className="mt-3 mb-4 fs-1 p-2">
          MENU
        </button>
        </center>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"}}>
           {/* GET DATA FROM (restApi.json) file */} 
        {data[0].dishes.map((element) => (
          <div
            style={{
              position: "relative",
              height: "380px",
              boxShadow: "0 8px 16px rgba(93, 194, 175, 0.5)",
              width: "calc('50% - 10px')",
              marginBottom: "20px"}}
            className="card"
            key={element.id}>
            <img
              style={{
                position: "relative",
                width: "350px",
                height: "330px",
                objectFit: "cover"}}
              src={element.image}
              alt={element.title}/>
            <h3
              style={{
                marginLeft: "50px",
                marginTop: "10px",
                marginBottom: "10px"}}>
              {element.title}
            </h3>
            {/* CATTEGORY NAME*/}
            <button
              className="btn btn-outline-dark text-white"
              style={{
                position: "absolute",
                top: "8%",
                left: "15%",
                transform: "translate(-50%, -50%)",
                background: "transparent",
                backdropFilter: "brightness(0.5) blur(5px)",
                borderRadius: "20px"}}>
              {element.category}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default OurMenu;
