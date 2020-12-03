import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

const Contact = (props) => {
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
              <Form.Label for="subject">Subject</Form.Label>
              <Form.Control type="subject" placeholder="Something Broke!" />
            </Form.Group>
            <Form.Group>
              <Form.Label for="message">Message</Form.Label>
              <Form.Control as="textarea" rows="{5}"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

/*
<Container>
      <Row>
        <Col className = "contactForm" sm="4">
          <h1>Contact Form</h1>
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
              <Label for="subject">Subject</Label>
              <Input
                type="text"
                name="text"
                id="subject"
                placeholder="Something broke!"
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="text"
                id="message"
                placeholder="Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you..."
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
*/

export default Contact;
