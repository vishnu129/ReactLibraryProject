import React, { Fragment } from 'react';
import Footer from './footer';
import Header from './Header';
import News from './newsBox';
import Quote from './quotation';
import SuggestionBox from './suggestionBox';
import data from './body.json'
import newsData from "./home.json";
import Navbar from './Navbar'
import HomeRouter from '../Router/homeRouter';


function index() {
  const content = data.Content;
  const news = newsData.newsBox;
 let obj 
  return (
    <div>
      <Header />
      {/* <Navbar/> */}
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
      <HomeRouter/>

    </div>
  )
}
 
export default index