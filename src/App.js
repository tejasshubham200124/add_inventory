import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import './style/style.css';
import './style/customstyle.css';
import './components/dattaable.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Vendor from './pages/Vendor';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Create_vendor from './pages/create_vendor';
import Sign_up from './pages/Sign_up';
import Users from './pages/Users';
import Add_material from './pages/Add_material';
import Show_material from './pages/Show_material';
import config from './config';

import Example from './pages/Example';
import Login from './Login';
import Dashboard from './Dashoard';

import ModalExample from './pages/ModalExample';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

import Articles from "./articles";
import Logout from './Utils/logout';

function App(props) {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }


    axios.get(`https://sarmicrosystems.in/react_inventory/verifyToken.php?token=${token}`).then(response => {
    setUserSession(response.data.token, response.data.userid,response.data.full_name);
    if(!response.data.userid){
      props.history.push('/login');
    }  
    setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  // const location = useLocation();


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        {/* <Articles /> */}

          <PublicRoute path="/login" component={Login} />
          <PublicRoute path='/sign_up' component={Sign_up} />
          
          <PrivateRoute path="/admin/vendor" component={Vendor} />
          <PrivateRoute path="/admin/user" component={Users} />


          <PrivateRoute path="/modal" component={ModalExample} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path='/dashboard' exact component={Home} />
          {/* <PrivateRoute path='/vendor' component={Vendor} /> */}
          <PrivateRoute path='/reports' component={Reports} />
          <PrivateRoute path='/products' component={Products} />
          <PrivateRoute path='/login' component={Login} />
          <PrivateRoute path='/create_vendor' component={Create_vendor} />
          <PrivateRoute path='/add_material' component={Add_material} />
          <PrivateRoute path='/show_material' component={Show_material} />
          <PrivateRoute path='/demo' component={Example} />
          <PrivateRoute path='/logout' component={Logout} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
