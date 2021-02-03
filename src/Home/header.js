import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { Link } from 'react-router-dom';
import ContactsIcon from '@material-ui/icons/Contacts';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
 
function Header() {
  const [search, setSearch] = useState("");
  const searchOnChange = (event) => setSearch(event.target.value);
  const searchSubmit = () => console.log("searching for "+search);
  return (
    <div className="header">
      <div className="header_left" >
     
     <h1  className="navbar-logo" >
     <div className="icon"><LocalLibraryIcon/></div>
      BOOKS WORLD
     </h1> 
      
     <div className="header__search" >
          <SearchIcon />
            
            <input  type="text" placeholder="Search books" 
              value={search} onChange = {searchOnChange}
              onSubmit={searchSubmit}
              />
          </div>
      </div>
 
      <div className="header__right">
      <Link to="/Contactus"> <HeaderOption Icon={ContactsIcon} title="Contact Us" /></Link>
       
       <Link to ="/Membership"> <HeaderOption Icon={LoyaltyIcon} title="Membership" /></Link>
      <Link to="/Donate"><HeaderOption Icon={AccountBalanceIcon} title="Donate" /></Link>   
      <Link to="/signin"> <HeaderOption Icon={PermIdentityIcon} title="Signin" /></Link>

      </div>
    </div>
  );
}
export default Header
