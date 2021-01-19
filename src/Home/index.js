import React from 'react';
import Footer from './footer';
 import Header from './header';
import SuggestionBox from './suggestionBox';
import News from './newsBox';
// import Deleteit from './deleteIt';
import data from './body.json';
import Quotation from './quotation';

function getData() {
    return data.Content;
  }
function index(){
    const kids=getData()[0].kidsbooks;
  const Thrillers=getData()[1].Thrillers;
  const Study=getData()[2].Study;
  const Romance=getData()[3].Romance;
  const ClassicBooks=getData()[4].ClassicBooks;
    return(
        <div>
        {/* <Header />
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br> */}
       <Header />
       <Quotation />
       <News />
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br>
       
       <SuggestionBox title="Thrillers" data= {Thrillers}/><br></br><br></br>
       <SuggestionBox title="Study" data= {Study}/><br></br><br></br>
       <SuggestionBox title="Romance" data= {Romance}/><br></br><br></br>
       <SuggestionBox title="ClassicBooks" data= {ClassicBooks}/><br></br><br></br>
       <Footer />
        
     
       </div>
    )
}

export default index
