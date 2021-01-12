import React from 'react';
// import Footer from './footer';
 import Header from './header';
 import News from './newsBox';
import Quote from './quotation';
// import Action from './action'
import SuggestionBox from './suggestionBox';
// import Deleteit from './deleteIt';
import data from './body.json'
import HomeRouter from '../Routers/homeRouter';
// import suggestionBox from './action';

// function getData() {
//     return data.Content;
//   }
function index(){
   
    // const thrillers = getData().Thrillers;
    return(
        <div>
        {/* <Header />
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br> */}
       <Header />
       <Quote />
       <News/>
       {
         data.Content.map(arr=>arr[Object.keys(arr)].map(obj=>(
           <div>
           <SuggestionBox data={obj.image-URL}/>
             {/* {obj.link}
             {obj.image-URL} */}
           </div>
           
         ))
         )
        
       }
       {/* <SuggestionBox title="Thrillers" data= {thrillers}/><br></br><br></br> */}
       <HomeRouter />
     
       </div>
    )
}

export default index
