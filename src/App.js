import React, {useEffect} from 'react';
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
import CompletedForum from './components/CompletedForum';
import {useCookies} from "react-cookie";
import {useStoreState} from "pullstate";
import {UserInfo} from "./components/UserInfo";
import axios from "axios";
import './css/App.css';


function App() {
        const [cookies] = useCookies(['userToken']);
        const userInfoState = useStoreState(UserInfo)
        const loginWithCookie = () => {
                axios.post('http://localhost:8080/query', {
                            query: `
                mutation {
                  Login(
                    input: {
                      email: ""
                      password: ""
                      token: "${cookies.userToken}"
                    }
                  ) {
                    userId
                    email
                    token {
                      token
                      expireDate
                    }
                    error {
                      message
                      code
                      errors
                    }
                  }
                }
`
                    }
                ).then((result) => {
                        if (!result.data.data.Login.error.errors) {
                                console.log(result.data.data.Login)
                                console.log(cookies)
                                UserInfo.update(s => {
                                        s.userLoggedIn = true;
                                        s.userToken = result.data.data.Login.token.token;
                                        s.userId = result.data.data.Login.userId;
                                        s.userEmail = result.data.data.Login.email;
                                })
                        }
                })
        }

        useEffect(() => {
                loginWithCookie()
        }, [])
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
                {/* Conditional statement for entering logout page. If we are logged in, enter logout, otherwise redirect */}
                <Route path="/logout" component={Logout} exact />
                <Route path ="/forum" component={Forum} exact />
                <Route path ="/createForum" component={CreateForum} exact />
                <Route path ="/thread" component={Thread} exact />
                <Route path ='/completedForum' component={CompletedForum} exact />
                <Route component={Error}/>
            </Switch>
        );
}

export default App;
