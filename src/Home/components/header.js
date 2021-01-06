import React from "react";
import { Layout } from "antd";
import { IconButton } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
// import data from "./home.json";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 
function Header() {
  const { Header,Content } = Layout;
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
        <Content>
        
        </Content>
        
      </Layout>
    </div>
  );
}
 
export default Header;