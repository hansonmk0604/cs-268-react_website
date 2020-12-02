import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import "../css/Login.css";

const Login = (props) => {
  return (
    <Container>
      <Row className={"container"}>
        <Col>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="exampleEmail@uwec.edu"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
