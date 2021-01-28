import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import News from "./newsBox";
import Quote from "./quotation";
import SuggestionBox from "./suggestionBox";
import data from "./body.json";
import newsData from "./home.json";
import homeRouter from "../Router/homeRouter";
import blogdata from "./blogs.json";
import Blog from './blogs';
import Careers from './Careers';



function index() {
  const content = data.Content;
  const news = newsData.newsBox;
  let obj;
  return (
    <div>
      {/* <Header />
      {/* <Navbar/> */}
      {/* <Quote />
      <News news = {news}/>
      
      {
        content
          .map(childObj => {
            obj = childObj[Object.keys(childObj)]
            return <SuggestionBox genre={obj}  />
          }
          )
      } 
      
      <homeRouter/>  */}
{/* <Blog data=
{blogdata}/> */}
<Careers />
    </div>
  );
}

export default index;


