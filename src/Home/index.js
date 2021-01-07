import React from 'react';
import Footer from './footer';
 import Header from './header';
 import News from './newsBox';
 import Quote from './quotation';
import SuggestionBox from './suggestionBox';
// import Deleteit from './deleteIt';
import data from './body.json'

function getData() {
    return data.Content;
  }
function index(){
    const kids=getData().kidsbooks;
    // const thrillers = getData().Thrillers;
    return(
        <div>
        {/* <Header />
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br> */}
       <Header />
       <Quote />
       <News/>
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br>
       {/* <SuggestionBox title="Thrillers" data= {thrillers}/><br></br><br></br> */}
        <Footer />
     
       </div>
    )
}

export default index
