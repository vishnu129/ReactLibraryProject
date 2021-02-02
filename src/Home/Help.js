import React from "react";
import data from "./Help.json"
import "./Help.css";
import Header from "./header";

function Help() {
  const faq=data.FAQ
  const link=data.links
  const end=data.Bottom
  return (
    <>
    <Header/>
    <div className="help">
      <h1>Help</h1>
      <div className="content__body">
      
      { faq.map((data)=>{return(
         <>
         <h2 >{data.heading} </h2>
         <p>{data.summary}
          </p>
         </>
       )
       })}
        
      { link.map((data)=>{return(
         <>
         <h3>
          <a href={data.url} rel="nofollow">
           {data.heading}
          </a>
        </h3>
         </>
       )
      })}
       

      { end.map((data)=>{return(
         <>
        <h2>{data.heading}</h2>
        <p>{data.summary}</p>
        <ol>
          <li>
            <a href={data.url} rel="nofollow">
             {data.heading1}
            </a>
          </li>
          <li>
         {data.summary1}
          <a href={data.url1} rel="nofollow">
         {data.summary2}
            </a>
          </li>
          <li>
          {data.heading2}<a href={data.url2} rel="nofollow">
         {data.summary3}
            </a>
          </li>
        </ol>
        </>
       )
      })}
      </div>
    </div>
    </>
  );
}

export default Help;
