import React from "react";
import { Layout } from "antd";
import { IconButton } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './Header1.css';
import SearchIcon from '@material-ui/icons/Search';

function Header1() {
  const { Header } = Layout;
  return (
    <div>
      <Layout>
        <Header className="background">
        <div className="font">THE <br/>Library</div>
            <div className="donation">Donate</div>
            <div className="log">Log-In</div>
            <div className="donateicon">
                <IconButton>
                <AccountBalanceIcon></AccountBalanceIcon>
                </IconButton>
                </div>
                <div><input type="text"  className="ujwala" placeholder="search for the book" ></input></div>
            <div className="searchicon">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </div>
        </Header>
        
      </Layout>
    </div>
  );
}

export default Header1;
