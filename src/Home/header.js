import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from '@material-ui/icons/Contacts';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
 
function Header() {
  return (
    <div className="header">
      <div className="header_left" >
     
     <h1  className="navbar-logo" >
     <div className="icon"><LocalLibraryIcon/></div>
      BOOKS WORLD
     </h1> 
      
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
 
      <div className="header__right">
        <HeaderOption Icon={ContactsIcon} title="Contact Us" />
        <HeaderOption Icon={LoyaltyIcon} title="Membership" />
        <HeaderOption Icon={AccountBalanceIcon} title="Donate" />
        <HeaderOption Icon={PermIdentityIcon} title="Profile" />

      </div>
    </div>
  );
}
export default Header