import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./Header";
import News from "./newsBox";
import Quote from "./quotation";
import SuggestionBox from "./suggestionBox";
import data from "./body.json";
import newsData from "./home.json";
import homeRouter from "../Router/homeRouter";
import blogdata from "./blogs.json";
import Blog from './blogs';


function index() {
  const content = data.Content;
  const news = newsData.newsBox;
  let obj;
  return (
    <div>
      <Header />
      
      <Quote />
      <News news = {news}/>
      
      {
        content
          .map(childObj => {
            obj = childObj[Object.keys(childObj)]
            return <SuggestionBox genre={obj}  />
          }
          )
      } 
      
      <homeRouter/> 
{/* <Blog data={blogdata}/> */}
    </div>
  );
}

export default index;


