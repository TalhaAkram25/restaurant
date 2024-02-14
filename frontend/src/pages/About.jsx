import React from "react";
import '../App.css'

const About = () => {
 
  return (
    <>
      <div><center>

        <h1 className="mt-2">
          ABOUT US
        </h1>
        <p style={{ marginBottom: "50px" }}>
          The only thing we're serious about is food.
        </p>
      </center>
      </div>

      <div className="d-flex">
        {/* ABOUT PARAGRAPH */}
        <p
          style={{ marginLeft: "40px", marginRight: "40px", marginTop: "50px" }}
          className="fs-3">
          Discover Foody, an oasis of culinary delight in the heart of Lahore.
          With a dedication to excellence, we blend local flavors with global
          inspirations to create a dining experience like no other. Our
          commitment to quality ingredients and exceptional service ensures each
          visit is a memorable one. Come savor the flavors and ambiance that
          make Foody a favorite among discerning diners.Experience Foody, where
          culinary mastery meets unparalleled hospitality and ambiance. Join us
          and indulge in the essence of Foody, where every meal is an
          unforgettable experience in culinary artistry and warmth.
        </p>

        <img
        className="imge"
          style={{maxWidth:"100%",
          height: "500px",
           width: "3800px"}}
          src="about.png"
          alt="about"/>
      </div>
    </>
  );
};
export default About;
