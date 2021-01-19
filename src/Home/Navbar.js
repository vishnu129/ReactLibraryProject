
import React, { Component } from 'react'
import {Menuitems} from "./Menuitems"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false}





    render() {
        return (
           <nav className="NavbarItems">
            <h1 className="navbar-logo" >THE LIBRARY<i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>

            </div>
            <ul>
            {Menuitems.map((item,index) => {
                return(
                    <li key={index}>
                    <a className={item.cName} href={item.url}>
                    {item.title}

                    </a>
                    </li>
                )
               })}
            </ul>
           </nav>
        )
    }
}

export default Navbar
