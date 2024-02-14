import React from "react";

const Services = () => {
  return (
    <>
    

      <div
      className="service"
        style={{
          marginBottom:"",
          position: "absolute",
          marginLeft: "480px",
          marginRight: "40px",
          marginTop: "70px"}}>
        <h1
        className="service-heading"
          style={{
            
            borderLeft: "7px dashed grey",
            borderBottom: "7px dashed grey",
            marginRight: "600px",
            paddingLeft: "10px",
            paddingBottom: "3px"}}>
          Our Services
        </h1>
        {/* SERVICES PARAGRAPH */}
        <p className="fs-3">"Discover the exquisite culinary journey that awaits at Foody.
        Our restaurant prides itself on offering a diverse array of delectable dishes meticulously 
        crafted by our talented chefs. From savory starters to indulgent mains and divine desserts,
        each dish is prepared with the finest ingredients to tantalize your taste buds and elevate 
        your dining experience. Whether you're craving traditional favorites or seeking adventurous 
        flavors, our menu has something for everyone.With impeccable service and a warm, inviting 
        ambiance, Foody is more than just a restaurant – it's a destination where memories are made 
        and culinary dreams come true.</p>
        
      </div>
      
<img className="imgs" style={{ height: "533px" }} src="./chef.webp" alt="" />
    </>
  );
};

export default Services;
