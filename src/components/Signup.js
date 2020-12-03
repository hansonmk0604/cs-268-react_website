import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

{/* Dont forget about certificates!*/}

const Signup = (props) => {
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
          </Form>
        </Col>
      </Row>
    </Container>
  );

  /*
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
                placeholder="yourEmail@uwec.edu"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
              />
            </FormGroup>
            <FormGroup>
              <Label for="willingToHelp">Willing to provide help?</Label>
              <Input type="select" name="select" id="willingToHelp">
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="major">Major</Label>
              <Input
                type="text"
                name="text"
                id="major"
                placeholder="Computer Science"
              />
            </FormGroup>
            <FormGroup>
              <Label for="minor">Minor</Label>
              <Input
                type="text"
                name="text"
                id="minor"
                placeholder="Geography"
              />
            </FormGroup>
            <FormGroup>
              <Label for="dob">Date of birth</Label>
              <Input type="date" name="text" id="dob" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  */
};

export default Signup;
