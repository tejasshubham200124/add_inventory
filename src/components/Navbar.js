import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Dropdown from 'rsuite/Dropdown';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
// console.log(window.location.pathname);
  // const user = JSON.parse(sessionStorage.user);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' style={{display: 'flex',justifyContent: 'space-between'}}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* Comfort */}
          <p style={{color:'#fff',marginRight: '2rem'}}>Hi, 
          { sessionStorage.user ? ' '+ sessionStorage.username : 'User'} 
          
          </p>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
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
    </>
  );
}


export default Navbar;
