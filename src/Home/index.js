import React from 'react';
import Footer from './footer';
 import Header1 from './Header1';
 import Header from './header';
 import News from './newsBox';
import SuggestionBox from './suggestionBox';
// import Deleteit from './deleteIt';
import data from './body.json';
import Quotation from './Quotation';
import HomeRouter from '../Router/homeRouter';
import Navbar from './Navbar';

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
       {/* <Header1 /> */}
      
       <Navbar />
       <Quotation /><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <News /><br></br><br></br>
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br>
       
       <SuggestionBox title="Thrillers" data= {Thrillers}/><br></br><br></br>
       <SuggestionBox title="Study" data= {Study}/><br></br><br></br>
       <SuggestionBox title="Romance" data= {Romance}/><br></br><br></br>
       <SuggestionBox title="ClassicBooks" data= {ClassicBooks}/><br></br><br></br>
       <HomeRouter/>
        
     
       </div>
    )
}
 
export default index