import React from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import index from '../Home/index';
function home(){
    return(
        <Router>
            <Switch>
                <Route path='/home' component={index} />
            </Switch>
        </Router>

    )
}
export default home