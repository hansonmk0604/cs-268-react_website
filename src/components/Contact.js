import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap";

function Contact() {
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
  }

export default Contact;
