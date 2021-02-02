import React from "react";
import "./Careers.css";
import data from './Careers.json';
 
function Careers() {
 const top = data.welcome
 const body = data.openings
 return (
 <div>
 <div className="heading">
 <h1>Careers @ Books World</h1>
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
 </>
 )
 })
 }
 </div>
 <hr />
 <span>
 Open Library is an initiative of the Internet Archive, a 501(c)(3)
 non-profit, building a digital library of Internet sites and other
 cultural artifacts in digital form. Other projects include the Wayback
 Machine, archive.org and archive-it.org
 </span>
 </div>
 );
}
 
export default Careers;