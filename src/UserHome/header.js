import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import HomeIcon from "@material-ui/icons/Home";
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import * as AiIcons from 'react-icons/ai';
// npm install react-icons --save 


function Header(props) {

  let name = props.name

  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState("");

  const searchOnChange = (event) => setSearch(event.target.value);
  const showSidebar = () => setSidebar(!sidebar);
  const searchSubmit = () => console.log("searching for "+search);

  return (
    <>
      <div className="header">
        <div className="header_left" >

          <h1 className="navbar-logo" >
            <div className="icon"><LocalLibraryIcon /></div>
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
        <Link to="/signin/userhome/Home">
          <HeaderOption Icon={HomeIcon} title="Home" /></Link>
          <Link to="/signin/userhome/ContactUs">
          <HeaderOption Icon={ContactsIcon} title="Contact Us" /></Link>
          <Link to="/signin/userhome/Donate">
          <HeaderOption Icon={AccountBalanceIcon} title="Donate" /></Link>
          <Link to="/signin/userhome/profile">
          <HeaderOption Icon={PermIdentityIcon} title={name} /></Link>

        </div>
        {//the side menu 
        }
        <IconContext.Provider value={{ color: '#fff' }}  >
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose className="closeIcon"/>
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

        </IconContext.Provider>
      </div>

    </>
  );
}

export default Header
