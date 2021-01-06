import React from "react";
import { Layout } from "antd";
import { IconButton } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ReadOutlined from '@ant-design/icons';


 
function Header() {
  const { Header } = Layout;
  return (
    <div>
      <Layout>
        <Header className="background">
        <div className="font">The  <br/>Library</div>
        <div className="libraryicon"></div>
        <IconButton>
        <ReadOutlined />
        </IconButton>
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
        {/* <div>
          <Content/>
        </div> */}
        
        
      </Layout>
    </div>
  );
}
 
export default Header;