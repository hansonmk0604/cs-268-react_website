import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import Logout from "./components/Logout";
import Error from "./components/Error";
import './css/App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render()
  {
    return (
      <Switch>
        <Route path = "/" component = {Home} exact />
        {/* Conditional statement for entering login page. If we are logged in, redirect, otherwise enter login page */}
        <Route path = "/login" component = {Login} exact>{this.state.loggedIn ? <Redirect to = "/" /> : <Login />}</Route>
        <Route path = "/signup" component = {Signup} exact />
        <Route path = "/contact" component = {Contact} exact />
        <Route path = "/about" component = {About} exact />
        {/* Conditional statement for entering logout page. If we are logged in, enter logout, otherwise redirect */}
        <Route path = "/logout" component = {Logout} exact>{this.state.loggedIn ? <Logout /> : <Redirect to = "/login" />}</Route>
        <Route component = {Error} />
      </Switch>
    );
  }
}
/*
function App(props)
{
  return (
    <Switch>
      <Route path = "/" component = {Home} exact />
      <Route path = "/login" component = {Login} exact > {this.state.loggedIn ? <Redirect to = "/" /> : <Redirect to = "/login" />} </Route>
      <Route path = "/signup" component = {Signup} exact />
      <Route path = "/contact" component = {Contact} exact />
      <Route path = "/about" component = {About} exact />
      <Route path = "/logout" component = {Logout} exact />
      <Route component = {Error} />
    </Switch>
  );
}
*/

export default App;
