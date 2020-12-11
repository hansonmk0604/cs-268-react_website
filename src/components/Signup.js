import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

{/* Dont forget about certificates!*/}

class Signup extends React.Component
{
  constructor()
  {
    super();

  }

  render()
  {
    return (
      <Container>
        <Row className = {"container"}>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label for="email">Email</Form.Label>
                <Form.Control type="email" placeholder="yourEmail@uwec.edu" />
              </Form.Group>
              <Form.Group>
                <Form.Label for="password">Password</Form.Label>
                <Form.Control type="password" placeholder="*******" />
              </Form.Group>
              <Form.Group>
                <Form.Label for="select">Willing to Help?</Form.Label>
                <Form.Control as="select">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label for="major">Major</Form.Label>
                <Form.Control type="major" placeholder="Computer Science"/>
              </Form.Group>
              <Form.Group>
                <Form.Label for="minor">Minor</Form.Label>
                <Form.Control type="minor" placeholder="Mathematics Liberal Arts"/>
              </Form.Group>
              <Form.Group>
                <Form.Label for="certificate">Certificate</Form.Label>
                <Form.Control type="certificate" placeholder="Information Systems Certificate"/>
              </Form.Group>
              <Form.Group>
                <Form.Label for="dob">Date of Birth</Form.Label>
                <Form.Control type="dob" placeholder="MM/DD/YYY" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
