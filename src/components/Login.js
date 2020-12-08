import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";
import { useLocation, Redirect } from "react-router-dom";

import "../css/Login.css";

class Login extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      loggedIn: true
    }
  }

  handleClick = (e) =>
  {
    e.preventDefault();

    if (1 == 1)
    {

    }
  }

  render()
  {
    console.log(this.state.loggedIn);

    if (this.state.loggedIn)
    {
      console.log("uh oh stinky");
      <Redirect to = "/"/>
    }

    return (
      <Container>
        <Row className={"container"}>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label for="email">Email</Form.Label>
                <Form.Control type="email" placeholder="exampleEmail@uwec.edu" />
              </Form.Group>
              <Form.Group>
                <Form.Label for="password">Password</Form.Label>
                <Form.Control type="password" placeholder="*******" />
              </Form.Group>
              <Button onClick = {this.handleClick} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav.Link href = "/signup">Don't have an account? Signup!</Nav.Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

/*
function handleSubmit(e)
{
  e.preventDefault();
    if the user logs in correctly, we have a state for each variable of the user data
    and also redirect them to the homepage after setting each state variable to what is in
    the user account from the API.

    else, we prompt them to enter correct information for login.
}
*/

/*
const Login = (props) => {
  return (
    <Container>
      <Row className={"container"}>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label for="email">Email</Form.Label>
              <Form.Control type="email" placeholder="exampleEmail@uwec.edu" />
            </Form.Group>
            <Form.Group>
              <Form.Label for="password">Password</Form.Label>
              <Form.Control type="password" placeholder="*******" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav.Link href = "/signup">Don't have an account? Signup!</Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};
*/

export default Login;
