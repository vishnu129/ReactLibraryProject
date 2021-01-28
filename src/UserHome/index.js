import React, { Fragment } from 'react';
import SuggestionBox from '../Home/suggestionBox';
import Header from '../UserHome/header'
import homeRouter from '../Router/homeRouter'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import data from "./body.json";

function index() {
    const content = data.Content;
    let obj
    return (
        <div>
            <Router>
                <Header name="User Name" />
                <Switch>
                    
                </Switch>
            </Router>

            {
                content
                    .map(childObj => {
                        obj = childObj[Object.keys(childObj)]
                        return <SuggestionBox genre={obj} />
                    }
                    )
            }
            <homeRouter />
        </div>
    )
}

export default index
