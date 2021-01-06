import React, { Component } from 'react'
import Header from './Home/components/Header';
//import Scrolling from './Home/components/Scrolling';
import Content from './Home/components/Content';
export class App extends Component {
  render() {
    return (
      <div>
       <Header/>  
       <Content/>
          
           {/* <Scrolling/> */}
      </div>
    )
  }
}

export default App
