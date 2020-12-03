import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";

import "../css/Login.css";

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

  /*
    <Container>
      <Row className={"container"}>
        <Col>
          <Form>
            <Form.Group>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="exampleEmail@uwec.edu"
              />
            </Form.Group>
            <Form.Group>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
            </Form.Group>
            <Button>Login</Button>
            <Button><Nav.Link href = "/signup">Don't have an account? Signup!</Nav.Link></Button>
          </Form>
        </Col>
      </Row>
    </Container>
    */
};

export default Login;
