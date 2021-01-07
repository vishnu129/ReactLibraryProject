import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './Header.css';
import { Input } from 'antd';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    const { Search } = Input;
    const onSearch = value => console.log(value);
    return (
        <div className="header">
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
            {/* <div>
            <Search className="search"
                 placeholder="search for the book"
                 onSearch={onSearch}/>
            </div> */}
            <div><input type="text"  className="ujwala" placeholder="search for the book" ></input></div>
            <div className="searchicon">
                <IconButton>
                    <SearchIcon/>
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

export default Header
