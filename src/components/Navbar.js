import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Dropdown from 'rsuite/Dropdown';
import { getUser, removeUserSession } from '../Utils/Common';
import swal from 'sweetalert';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleLogout = () => {
    removeUserSession();
    swal("Logout Succesfull", "", "success");

    props.history.push('/login');
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to='#' className='menu-bars'>
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            <img src={require('../css.png')} style={{ width: '60px', marginLeft: '40px' }} />

          </Link>

          <p style={{ color: '#fff', marginRight: '2rem' }}>
            {sessionStorage.user ? 'Hi, ' + sessionStorage.username : ''}
            &nbsp;&nbsp;&nbsp;

            <a href="" onClick={handleLogout} ><i className="fa-solid fa-power-off" title="Logout" style={{
              color: 'white',
              background: 'black',
              padding: '10px',
              borderRadius: '22px'
            }}>
            </i></a>


          </p>

        </div>
        <nav className={sidebar ? 'nav-item active ' : 'pcoded-navbar menupos-fixed'}>
          <div className="navbar-wrapper ">
            <div className="navbar-brand header-logo">
              <a href="index.html" className="b-brand">
                <img src={require('../css.png')} style={{ width: '60px'}} />
                <span className="b-title">Inventory</span>
              </a>
              <a className="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
            </div>
            <div className="navbar-content scroll-div active pcoded-trigger ps ps--active-y">

              <ul className="nav pcoded-inner-navbar " style={{ display: 'block' }}>

                {SidebarData.map((item, index) => (
                  <li className={item?.child == "1"
                    ? ("nav-item pcoded-hasmenu pcoded-trigger")
                    : "nav-item"
                  }
                  // className="nav-item pcoded-hasmenu pcoded-trigger"
                  >
                    <a href={item.path} className="nav-link">
                    {item.icon}
                      <span className="pcoded-mtext">{item.title}</span>
                    </a>

                    {item.child=='1'? 
                    <ul className="pcoded-submenu" style={{ boxSizing: 'border-box', display: 'block' }}>
                    {item.submenu.map((sub, subindex) => (
                      <li className="active"><a href={sub.path}>{sub.title}</a></li>
                    ))}
                  </ul>
                    : null}
                    
                  </li>
                ))}
              </ul>
              <div className="ps__rail-x" >
                <div className="ps__thumb-x" tabIndex="0"></div>
              </div>
              <div className="ps__rail-y">
                <div className="ps__thumb-y" tabIndex="0"></div>
              </div>
            </div>
          </div>
        </nav>

        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
          <ul className='nav-menu-items nav pcoded-inner-navbar' onClick={showSidebar}>
            <li className='navbar-toggle'>

              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />

                <img src={require('../css.png')} style={{ width: '60px', marginLeft: '40px' }} />


              </Link>
            </li>
            {SidebarData.map((item, index) => {



              return (
                <li key={index} className={item.cName} >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  <ul>
                  {item.submenu.map((sub, subindex) => (
                      <li key={subindex} className='submenu-element'>
                        <Link to={sub.title}>
                          <span>{sub.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav> */}
      </IconContext.Provider>
    </>
  );
}
export default Navbar;