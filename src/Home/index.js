import React, { Fragment } from 'react';
import Footer from './footer';
import Header from './header';
import News from './newsBox';
import Quote from './quotation';
import SuggestionBox from './suggestionBox';
import data from './body.json'


function index() {
  const content = data.Content;
 let obj 
  return (
    <div>
      <Header />
      <Quote />
      <News />
      {
        content
          .map(childObj => {
            obj = childObj[Object.keys(childObj)]
            return <SuggestionBox genre={obj}  />
          }
          )
      } 
      <Footer />

    </div>
  )
}

export default index
