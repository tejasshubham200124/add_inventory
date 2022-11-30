import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import './style/style.css';
import './style/customstyle.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Vendor from './pages/Vendor';
import Reports from './pages/Reports';
import Products from './pages/Products';
// import Login from './pages/Login';
import Create_vendor from './pages/create_vendor';
import Sign_up from './pages/Sign_up';
import Users from './pages/Users';
import Add_material from './pages/Add_material';
import Show_material from './pages/Show_material';
import config from './config';

import Example from './pages/Example';





import Login from './Login';
import Dashboard from './Dashoard';
// import Home from './Home';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    console.log('token = ' + token) 

console.log('token =' + token);
    axios.get(`https://sarmicrosystems.in/react_inventory/verifyToken.php?token=${token}`).then(response => {
    console.log(response.data)  
    // setUserSession(response.data.token, response.data.userid);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);


  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }


  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          <PublicRoute path="/login" component={Login} />

          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path='/' exact component={Home} />
          <PrivateRoute path='/vendor' component={Vendor} />
          <PrivateRoute path='/reports' component={Reports} />
          <PrivateRoute path='/products' component={Products} />
          <PrivateRoute path='/login' component={Login} />
          <PrivateRoute path='/create_vendor' component={Create_vendor} />
          <PrivateRoute path='/sign_up' component={Sign_up} />
          <PrivateRoute path='/users' component={Users} />
          <PrivateRoute path='/add_material' component={Add_material} />
          <PrivateRoute path='/show_material' component={Show_material} />
          <PrivateRoute path='/demo' component={Example} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
