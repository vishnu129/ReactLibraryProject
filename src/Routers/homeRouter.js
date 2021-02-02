import React,{useState}from 'react';
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
import Signin from '../Login/loginForm';
import signup from '../Signup/Form';

import Userhome from '../UserHome/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Edit from '../Home/Edit';
import Profile from '../Home/Profile';
import History from '../Home/History';
const footerData = data1.footer;

const news = newsData.newsBox;


function HomeRouter() {
  const[logged,setLogged]=useState(false);
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
        <Route exact path="/signin" render={() => (<Signin logged={setLogged} data={true}/>)}/>

        <Route exact path="/Membership" component={signup} />
        <Route exact path="/signin/userhome" render={() => logged ? <Userhome />:(<Signin logged={setLogged} data={false} />)}/>
        
        
      </Switch>
    </Router>
  )
  
}
const content = data.Content;
let obj;
const home = () => (
  <div>
    <Header />
    {/* <Edit /> */}
    <Quote />
    <News news={news} />
    {
      content
        .map(childObj => {
          obj = childObj[Object.keys(childObj)]
          return <SuggestionBox genre={obj} />
        }
        )
    
    }
<Footer />
  </div>
);

export default HomeRouter