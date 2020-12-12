import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";

class CreateForum extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      //loggedIn: this.props.location.state ? this.props.location.state.loggedIn : false
      loggedIn: true
    }
  }

  render()
  {
    return(
      <h1>bitch</h1>
    );
  }
}

export default CreateForum;