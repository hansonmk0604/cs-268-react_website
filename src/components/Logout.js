import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Logout extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      loggedIn: this.props.location.state ? this.props.location.state.loggedIn : false
    }
  }

  render()
  {
    console.log(this.state.loggedIn)
    
    if (this.state.loggedIn)
    {
      return(
        <h1>Fill out logout page here!</h1>
      );
    }
    else
    {
      return(
        <Redirect to = {{
          pathname: "/login",
          loggedIn: this.state.loggedIn
        }} />
      );
    }
  }
}

export default Logout;