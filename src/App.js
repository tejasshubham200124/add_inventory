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
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
