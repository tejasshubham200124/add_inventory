import React, { Children } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Masteradmin',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text pcoded-hasmenu',
    child: 1,
    submenu: [
      {
        title: 'Vendor',
        path: '/admin/vendor',
      },
      {
        title: 'User',
        path: '/admin/user',
      }
    ]
  },
  // {
  //   title: 'Home',
  //   path: '/',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text',
  //   submenu : []
  // },
  // {
  //   title: 'Users',
  //   path: '/users',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text',
  //   submenu : []
  // },
  // {
  //   title: 'Vendor',
  //   path: '/vendor',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text',
  //   submenu : []
  // },
  {
    title: 'Create Vendor',
    path: '/create_vendor',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    child: 0,
    submenu: []
  },
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: 'nav-text',
  //   
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text',
  //   
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text',
  //   
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text',
  //   
  // },
  {
    title: 'Add Material',
    path: '/add_material',
    icon: <AiIcons.AiFillUnlock />,
    cName: 'nav-text',
    child: 0,
    submenu: []
  },
  {
    title: 'Show Material',
    path: '/show_material',
    icon: <AiIcons.AiFillUnlock />,
    cName: 'nav-text',
    child: 0,
    submenu: []
  },




  {
    title: 'Example',
    path: '/example',
    icon: <AiIcons.AiFillUnlock />,
    cName: 'nav-text',
    child: 1,
    submenu: [
      {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiFillUnlock />,
        cName: 'nav-text',
      },
      {
        title: 'Sign Up',
        path: '/sign_up',
        icon: <AiIcons.AiFillUnlock />,
        cName: 'nav-text',
      },

      {
        title: 'Modal',
        path: '/modal',
        icon: <AiIcons.AiFillUnlock />,
        cName: 'nav-text',

      },
      {
        title: 'Demo',
        path: '/demo',
        icon: <AiIcons.AiFillUnlock />,
        cName: 'nav-text',
      },
      {
        title: 'Datatable',
        path: '/dataTable',
        icon: <AiIcons.AiFillUnlock />,
        cName: 'nav-text',
      },
      {
        title: 'Add Inventory',
        path: '/add_inventory',
        icon: <AiIcons.AiFillUnlock />,
        cName: 'nav-text',
      },
    ]
  }

];
