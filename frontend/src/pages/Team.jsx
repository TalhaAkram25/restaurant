import React from 'react'
import { data } from "../restApi.json";

const Team = () => {
  return (
    <>
    <section className="" >
      <div className="">
        <div className="">
          <h1 style={{marginLeft:"600px"}} className="mt-3">OUR TEAM</h1>
          <center><div className='mb-2' style={{height: 3,backgroundColor: "black",width: "180px"}}></div></center>
          <p>
            
          </p>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}} className="">
          {data[0].team.map((element) => {
            return (
              <div style={{position: "relative",height:"100%",width: "calc('50% - 3px')",marginBottom: "20px"}} className="d-block" key={element.id}>
                <img style={{position: "relative", width: "410px",height: "410px",objectFit: "cover"}} src={element.image} alt={element.name} />
                <h3 className='fs-2' style={{marginLeft: "70px",marginTop: "15px"}}>{element.name}</h3>
                <p className='fs-5' style={{marginLeft: "100px"}}>{element.designation}</p>
              
          </div>
            );
          })}
      </div>
      </div>
      {/* boxShadow: "0 8px 16px rgba(93, 194, 175, 0.5)" */}
    </section>
    </>
  )
}

export default Team