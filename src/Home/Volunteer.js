
import React from "react";
import Header from "./header";
import "./Volunteer.css";
//import data from './Volunteer.json'

function Volunteer(props) {
  const data = props.data
  const top = data.welcome
  const body = data.openings
  const body2= data.middle
  const foot=data.End
  return (
    <>
    <Header/>
    <div>
      <div className="heading">
        <h1>{data.title} @ Books World</h1>
      </div>
      <div className="content__body">
    
       { top.map((data)=>{return(
         <>
         <h1 >{data.heading} </h1>
         <p>{data.summary}</p>
         </>
       )
       })}

       {
         body.map((data) => {
           return(
             <>
              <h3>
          <a href={data.url} rel="nofollow">
            {data.heading}
          </a>
        </h3>
        <p>
          {data.summary}
        </p>
        <h3>
          <a href={data.url1} rel="nofollow">
            {data.heading1}
          </a>
        </h3>
       
             </>
           )
         })
       }

       { body2.map((data)=>{return(
         <>
         <h1 >{data.heading} </h1>
         <p>{data.summary}</p>
         <h3>
          <a href={data.url1} rel="nofollow">
            {data.heading1}
          </a>
        </h3>
         </>
       )
       })}
      </div>
      <hr />
      
      <span>
      { foot.map((data)=>{return(
         <>
         <p>{data.summary}</p>
         </>
       )
       })}
      </span>
    </div>
  </>
  );
}

export default Volunteer;
