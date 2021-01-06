import React from 'react';
import Footer from './footer';
 import Header from './header';
import SuggestionBox from './suggestionBox';
// import Deleteit from './deleteIt';
import data from './body.json'

function getData() {
    return data.Content;
  }
function index(){
    const kids=getData().kidsbooks;
    return(
        <div>
        {/* <Header />
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br> */}
       <Header />
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br>
        <Footer />
     
       </div>
    )
}

export default index