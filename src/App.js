import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Login from './Components/Nav/Login';
import Signup from './Components/Signup/Signup';
import Help from './Components/Help/Help';
import Error from './Components/Error';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/help' component={Help} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
