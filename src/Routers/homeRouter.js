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
// import data from '../Home/home.json';
import routing from '../Home/routing';
import Blogs from '../Home/blogs';
// import Hello from '../Components/hello';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const footerData = data1.footer;
const news = newsData.newsBox;
function homeRouter() {

  return (
    <Router>
      <Switch>
        {
          routing.map(title => {
            if (title.name === "Home") { return false; }
            console.log(title)
            return (<Route exact path={"/" + title.name} component={() =><Blogs data={title.data}/> }  />)
          })
        }
        <Route exact path="/" component={home} />
      </Switch>
    </Router>
  )
}
const content = data.Content;
let obj;
const home = () => (
  <div>
    <Header />
    <Quote />
    <News news = {news}/>
    {
      content
        .map(childObj => {
          obj = childObj[Object.keys(childObj)]
          return <SuggestionBox genre={obj} />
        }
        )
    }
    <Footer />
    {/* {
      footerData.map(obj => {
        console.log(obj.title);
        return <Footer data={obj} />
      })

    } */}
  
  </div>
);

export default homeRouter