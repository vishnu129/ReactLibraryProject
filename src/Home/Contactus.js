import { IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import Header from "./Header";
import './Contactus.css';
 
function Contactus() {
    return (
        <div>            
           <div >
            <Header/>
            {/* <img
            className="body"
            src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/88-london-england-skyline-michael-tompsett.jpg?&targetx=-25&targety=0&imagewidth=750&imageheight=500&modelwidth=700&modelheight=500&backgroundcolor=A25438&orientation=0"
            /> */}
            </div> 
            <div className="prompt"></div>
            <div><input type="text"  className="mail" placeholder="E-mail" ></input></div>  
            <div><input type="text"  className="namefield" placeholder="Name" ></input></div>
            <div><input type="text"  className="comments" placeholder="Comments" ></input></div>
            {/* <div classname="searchicon">
          
            <SearchOutlined />
         
 
                
                </div> */}
           </div>
        
    )
}
 
export default Contactus