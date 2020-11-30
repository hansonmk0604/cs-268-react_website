import './css/App.css'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"

function App()
{
  return (
    <main>
      <Switch>
        <Route path = "/" component = {Home} exact />
        <Route path = "/login" component = {Login} />
        <Route path = "/signup" component = {Signup} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/about" component = {About} />
        <Route component = {Error} />
      </Switch>
    </main>
  )
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Stardew Valley = Poggers
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}*/

export default App
