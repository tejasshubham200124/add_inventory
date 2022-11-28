import React from 'react';
import './App.css';
import './style/style.css';
import './style/customstyle.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login';
import Create_vendor from './pages/create_vendor';
import Sign_up from './pages/Sign_up';
import Users from './pages/Users';
import Add_material from './pages/Add_material';
import Show_material from './pages/Show_material';


import Example from './pages/Example';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/Create_vendor' component={Create_vendor} />
          <Route path='/Sign_up' component={Sign_up} />
          <Route path='/Users' component={Users} />
          <Route path='/Add_material' component={Add_material} />
          <Route path='/Show_material' component={Show_material} />
          <Route path='/demo' component={Example} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
