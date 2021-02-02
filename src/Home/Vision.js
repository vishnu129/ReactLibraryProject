import React from "react";
import "./Vision.css";
import Header from "./header.js";
import data from "./Vision.json";

function Vision() {
  const body = data.vision
  return (
      <>
      <Header/>
    <div className="vision">
    { body.map((data)=>{return(
         <>
         <h1 >{data.heading} </h1>
         <p>{data.summary}</p>
         </>
       )
       })}

    </div>
    </>
  );
}

export default Vision;
