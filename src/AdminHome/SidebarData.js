import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/AdminHome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Pending Books',
    path: '/AdminHome/pendingbooks',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Return Books',
    path: '/AdminHome/ReturnBooks',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Invoke Membership',
    path: '/AdminHome/InvokeMemberships',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  
  {
    title: 'UpdateBooks',
    path: '/AdminHome/UpdateBooks',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];