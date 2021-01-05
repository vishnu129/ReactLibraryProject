import React from 'react'
import { IconButton } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './Header.css';

export default function Header() {
    return (
        <div>
             <div className="header">
            
            <img
            className="body"
            src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/88-london-england-skyline-michael-tompsett.jpg?&targetx=-25&targety=0&imagewidth=750&imageheight=500&modelwidth=700&modelheight=500&backgroundcolor=A25438&orientation=0"
            /></div> 
            <div className="font">THE <br/>Library</div>
            <div className="donation">Donate</div>
            <div className="log">Log-In</div>
            <div className="donateicon">
            <IconButton>
                <AccountBalanceIcon></AccountBalanceIcon>
                </IconButton>
                
                </div>
                <div className="quote">"WHEN IN DOUBT GO TO THE LIBRARY." <br/><br/> J.K. Rowling</div>
                <div className="news">
                    <div className="scroll">
                    News and related things scroll here
                    </div>
                </div>
                </div>
                
    )
}

