import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import Logout from "./components/Logout";
import Error from "./components/Error";
import Forum from "./components/Forum";
import CreateForum from "./components/CreateForum";
import Thread from "./components/Thread";
import './css/App.css';
import LoggedIn from "./components/LoggedIn";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact/>
                {/* Conditional statement for entering login page. If we are logged in, redirect, otherwise enter login page 
                {this.state.loggedIn ? <Redirect to="/"/> :
                    <Login/>}</Route> */}
                <Route path="/login" component={Login} exact />
                <Route path="/signup" component={Signup} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/loggedin" component={LoggedIn} exact/>
                {/* Conditional statement for entering logout page. If we are logged in, enter logout, otherwise redirect */}
                <Route path="/logout" component={Logout} exact />
                <Route path ="/forum" component={Forum} exact />
                <Route path ="/createForum" component={CreateForum} exact />
                <Route path ="/thread" component={Thread} exact />
                <Route component={Error}/>
            </Switch>
        );
    }
}

export default App;
