import React from 'react';
import SuggestionBox from '../Home/suggestionBox';
import Footer from '../Home/footer';
import data from '../UserHome/body.json';
import Contactus from '../ContactUs/CForm';
import Donate from '../Home/Donate';    
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../UserHome/header';
import Profile from '../UserHome/Profile';
import History from '../UserHome/History';
import Returns from '../UserHome/Returns';

function UserRouting() {
    return (
        
        <Router>
           <Header name="User Name" />
            <Switch>
                <Route exact path="/signin/userhome" component={home} />
                <Route exact path="/signin/userhome/history" component={History} />
                <Route exact path="/signin/userhome/Donate" component={Donate} />
                <Route exact path="/signin/userhome/Returns" component={Returns} />
                <Route exact path="/signin/userhome/ContactUs" component={Contactus} />
                <Route exact path="/signin/userhome/profile" component={Profile} />
            </Switch>
            <Footer />
        </Router>
    )

}
const content = data.Content;
let obj;
const home = () => (
    <div>
     
        {
            content
                .map(childObj => {
                    obj = childObj[Object.keys(childObj)]
                    return <SuggestionBox genre={obj} />
                }
                )
        }
       
    </div>
);

export default UserRouting