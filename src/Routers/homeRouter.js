import React from 'react';
import Header from '../Home/header';
import News from '../Home/newsBox';
import Quote from '../Home/quotation';
import SuggestionBox from '../Home/suggestionBox';
import Footer from '../Home/footer';
import data from '../Home/body.json';
import newsData from "../Home/home.json";
import data1 from '../Home/home.json';
import blogdata from "../Home/blogs.json";
import Books from '../Home/Books';
// import data from '../Home/home.json';
import routing from '../Home/routing';
import Blogs from '../Home/blogs';
// import Hello from '../Components/hello';
import Vision from '../Home/Vision';
import visiondata from '../Home/Vision.json';
import Volunteer from '../Home/Volunteer';
import volunteerdata from '../Home/Volunteer.json';
import Contactus from '../ContactUs/CForm';
import Donate from '../Home/Donate';
import signin from '../Login/LForm';
import signup from '../Signup/Form';
import userhome from '../UserHome/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Edit from '../UserHome/Edit';
import Profile from '../UserHome/Profile';
import History from '../UserHome/History';
import UpdateBooks from '../AdminHome/UpdateBooks';
import PendingBooks from '../AdminHome/PendingBooks';
import AddBooks from '../AdminHome/AddBooks';
import DeleteBooks from '../AdminHome/DeleteBooks';
import UpdatingBooks from '../AdminHome/UpdatingBooks';

const footerData = data1.footer;

const news = newsData.newsBox;
function homeRouter() {

  return (
    <Router>
      <Switch>
        {/* {
          routing.map(title => {
            if (title.name === "Home") { return false; }
            console.log(title)
            return (<Route exact path={"/" + title.name} component={() =><Blogs data={title.data}/> }  />)
          })
        } */}
        <Route exact path="/" component={home} />
        <Route exact path="/Home" component={home} />
        <Route exact path="/Vision" render={() => (<Vision data={visiondata} />)} />
        <Route exact path="/Volunteer" render={() => (<Volunteer data={volunteerdata} />)} />
        <Route exact path="/Blogs" render={() => (<Blogs data={blogdata} />)} />
        <Route exact path="/Careers" render={() => (<Blogs data={blogdata} />)} />
        <Route exact path="/Books" component={Books} />
        <Route exact path="/Contact Us" component={Contactus} />
        <Route exact path="/Contactus" component={Contactus} />
        <Route exact path="/Donate" component={Donate} />
        <Route exact path="/signin" component={signin} />
        <Route exact path="/Membership" component={signup} />
        <Route exact path="/signin/userhome" component={userhome} />
        
        
      </Switch>
    </Router>
  )
}
const content = data.Content;
let obj;
const home = () => (
  <div>
    
    <br/>
    <UpdatingBooks />
    {/* <Quote />
    <News news={news} />
    {
      content
        .map(childObj => {
          obj = childObj[Object.keys(childObj)]
          return <SuggestionBox genre={obj} />
        }
        ) */}
    
   
    {/* {
      footerData.map(obj => {
        console.log(obj.title);
        return <Footer data={obj} />
      })

    } */} 
<br />

  </div>
);

export default homeRouter