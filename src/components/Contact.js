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

const Contact = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="6" sm="4">
          <h1>About Us</h1>
        </Col>
        <Col xs="6" sm="4">
          <h1>Who Are We?</h1>
        </Col>
        <Col sm="4">
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
  );
};

export default Contact;
