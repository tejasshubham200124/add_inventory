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

        <header className="pcoded-header navbar-expand-lg navbar-light ">
          
          
          
          <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
            <a href="index.html" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up"></i>
              </div>
              <span className="b-title">Datta Able</span>
            </a>
          </div>
          
          
          
          <a className="mobile-menu" id="mobile-header" href="#!">
            <i className="feather icon-more-horizontal"></i>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li><a href="#!" className="full-screen"><i className="feather icon-maximize"></i></a></li>
              {/* <li className="nav-item dropdown">
                <a className="dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#!">Action</a></li>
                  <li><a className="dropdown-item" href="#!">Another action</a></li>
                  <li><a className="dropdown-item" href="#!">Something else here</a></li>
                </ul>
              </li> */}
              <li>Hello , User </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li>
                <div className="dropdown">
                  <a className="dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    <i className="fa-solid fa-bell"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end notification">
                    <div className="noti-head">
                      <h6 className="d-inline-block m-b-0">Notifications</h6>
                      <div className="float-end">
                        <a href="#!" className="m-r-10">mark as read</a>
                        <a href="#!">clear all</a>
                      </div>
                    </div>
                    <ul className="noti-body ps">
                      <li className="n-title">
                        <p className="m-b-0">NEW</p>
                      </li>
                      <li className="notification">
                        <div className="media">
                          {/* <img className="img-radius" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image" /> */}
                            <div className="media-body">
                              <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                              <p>New ticket Added</p>
                            </div>
                        </div>
                      </li>
                      <li className="n-title">
                        <p className="m-b-0">EARLIER</p>
                      </li>
                      <li className="notification">
                        <div className="media">
                          {/* <img className="img-radius" src="../assets/images/user/avatar-2.jpg" alt="Generic placeholder image" /> */}
                            <div className="media-body">
                              <p><strong>Joseph William</strong><span className="n-time text-muted">
                                <i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                              <p>Prchace New Theme and make payment</p>
                            </div>
                        </div>
                      </li>
                      <li className="notification">
                        <div className="media">
                          {/* <img className="img-radius" src="../assets/images/user/avatar-3.jpg" alt="Generic placeholder image" /> */}
                            <div className="media-body">
                              <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                              <p>currently login</p>
                            </div>
                        </div>
                      </li>
                      <div className="ps__rail-x" style={{left: '0px' ,bottom: '0px'}}><div className="ps__thumb-x" tabIndex="0" style={{left: '0px', width: '0px'}}></div></div><div className="ps__rail-y" style={{top: '0px', right: '0px'}}><div className="ps__thumb-y" tabIndex="0" style={{top: '0px', height: '0px'}}></div></div></ul>
                    <div className="noti-footer">
                      <a href="#!">show all</a>
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="#!" className="displayChatbox"><i className="icon feather icon-mail"></i></a></li>
              <li>
                <div className="dropdown drp-user">
                  <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fa-solid fa-gear"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end profile-notification">
                    <div className="pro-head">
                      {/* <img src="../assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" /> */}
                        <span>John Doe</span>
                        <a href="auth-signin.html" className="dud-logout" title="Logout">
                          <i className="feather icon-log-out"></i>
                        </a>
                    </div>
                    <ul className="pro-body">
                      <li><a href="#!" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                      <li><a href="#!" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                      <li><a href="message.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
                      <li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>


        <nav className={sidebar ? 'nav-item active ' : 'pcoded-navbar menupos-fixed'}>
          <div className="navbar-wrapper ">
            <div className="navbar-brand header-logo">
              <a href="/dashboard" className="b-brand">
                <img src={require('../css.png')} style={{ width: '60px' }} />
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

                    {item.child == '1' ?
                      <ul className="pcoded-submenu" style={{ boxSizing: 'border-box', display: 'block' }}>
                        {item.submenu.map((sub, subindex) => (
                          <li className=""><a href={sub.path}>{sub.title}</a></li>
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



      </IconContext.Provider>
    </>
  );
}
export default Navbar;