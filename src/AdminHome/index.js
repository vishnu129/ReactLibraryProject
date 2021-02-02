import React, { Fragment } from 'react';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function index() {
   
    let obj
    return (
        <div>
            <Router>
                <Header name="User Name" />
               
                <Switch>
               
                </Switch>
            </Router>

        </div>
    )
}

export default index
