import React from "react";
import { Layout } from "antd";
import { IconButton } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import data from "./home.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function header() {
  const { Header } = Layout;
  return (
    <div>
      <Layout>
        <Header className="background">
          <div className="font">
            THE <br />
            Library
          </div>
          <div className="donate">Donate</div>
          <AccountBalanceIcon className="account" />
          <div className="login">Log-in</div>
          <div>
            <SearchIcon className="search" />
            <input
              type="text"
              className="text"
              placeholder="Search for Book/Author"
            ></input>
          </div>
        </Header>
      </Layout>
    </div>
  );
}

export default header;
