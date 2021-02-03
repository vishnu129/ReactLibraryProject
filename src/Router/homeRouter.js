import React from 'react';
import Footer from '../Home/footer';
import data from '../Home/home.json';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function getData() {
    console.log("This is get data");
    return data.footer;
  }
function homeRouter(){
    const data1 = getData();
   return(
      <Router>
      <Footer />
        <Switch>
          <Route path='/' exact component ={ home } />
          <Route path='/{data1.discover.content[0]}'   component={ Hello } fetchInitialData={data1.discover.content[0]}/>
          <Route path='/{data1.discover.content[1]}'   component={ Hello } fetchInitialData={data1.discover.content[1]}/>
          
        </Switch>
      </Router>
    )
}
const home= ()=> (
  <div>
    
      <h1>Home</h1>
  </div>
);
 
export default homeRouter