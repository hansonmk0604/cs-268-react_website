import React from 'react';
import { Container, Row, Col, Form, Button } from 'reactstrap';

function Login()
{
    return (
        <h1>Login in here!</h1>
    )
}

/*
const Login = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
            </Row>
            <Row>
                <Col xs="3">.col-3</Col>
                <Col xs="auto">.col-auto - variable width content</Col>
                <Col xs="3">.col-3</Col>
            </Row>
            <Row>
                <Col xs="6">.col-6</Col>
                <Col xs="6">.col-6</Col>
            </Row>
            <Row>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col sm="4">.col-sm-4</Col>
            </Row>
            <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
            </Row>
            <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
            </Row>
        </Container>
    );
  }
  */

  
  export default Login;