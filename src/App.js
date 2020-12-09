import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import Aboutus from './Components/Pages/Aboutus';
import Signup from './Components/Pages/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/aboutus' component={Aboutus} />
        <Route path='/sign-up' component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;