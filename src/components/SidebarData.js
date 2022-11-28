import React, { Children } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Users',
    path: '/Users',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Vendor',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Create Vendor',
    path: '/Create_vendor',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text',
  //   child :0,
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text',
  //   child :0,
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text',
  //   child :0,
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text',
  //   child :0,
  // },
  {
    title: 'Login',
    path: '/login',
    icon: <AiIcons.AiFillUnlock />,
    cName: 'nav-text',
    child :0,
  },
  {
    title: 'Sign Up',
    path: '/Sign_up',
    icon: <AiIcons.AiFillUnlock />,
    cName: 'nav-text',
    child :0,
  },
  {
    title: 'Add Material',
    path: '/Add_material',
    icon: <AiIcons.AiFillUnlock />,
    cName: 'nav-text',
    child :0,
  },
  {
    title: 'Demo',
    path: '/demo',
    icon: <AiIcons.AiFillUnlock />,
    cName: 'nav-text',
    child :0,
  }
];
