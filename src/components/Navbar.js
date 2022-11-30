import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Dropdown from 'rsuite/Dropdown';
import { getUser, removeUserSession } from '../Utils/Common';


function Navbar(props) {

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
          <p style={{color:'#fff',marginRight: '2rem'}}> 
          { sessionStorage.user ? 'Hi, '+ sessionStorage.username : ''} 
          &nbsp;&nbsp;&nbsp;
          <a href="/login"><i className="fa-solid fa-power-off" title="Logout" style={{
                color: 'white',
                background: 'black',
                padding: '10px',
                borderRadius: '22px'
          }}>
          </i></a>
          
          
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
