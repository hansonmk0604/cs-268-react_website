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

class Thread extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
        //loggedIn: this.props.location.state ? this.props.location.state.loggedIn : false
        loggedIn: true
    }
  }

  handleClick = (e) =>
  {
    e.preventDefault();
    <Redirect to = "/createForum" />
  }

  render()
  {
    if (this.state.loggedIn)
    {
      return(
        <div id = "forumRoot">
          <Container className = "container">
            <Row className="headerRow" lg = "1">
                <Button className="create" onClick={this.handleClick}>Create Post</Button>
                <Col>{<h1>University of Wisconsin Eau Claire</h1>}</Col>
                <Col>{<h2>Forum Page</h2>}</Col>
            </Row>
          </Container>
        </div>
      );
    }
    else
    {
      return (
        <Redirect to = {{
            pathname: "/login"
        }} />
      );
    }
  }
}

export default Thread;