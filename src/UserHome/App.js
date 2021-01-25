import React, { Fragment } from 'react';
import SuggestionBox from '../Home/suggestionBox';
import Header from '../UserHome/header'
import homeRouter from '../Router/homeRouter'
import data from "./body.json";

function App() {
    const content = data.Content;
    let obj
    return(
        <div>
            <Header name="User Name"/>
            
            {
        content
          .map(childObj => {
            obj = childObj[Object.keys(childObj)]
            return <SuggestionBox genre={obj}  />
          }
          )
      } 
            <homeRouter/>
        </div>
    )
}

export default App
