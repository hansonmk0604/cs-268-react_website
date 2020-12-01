import React from 'react';
import { Container, Row, Col } from 'reactstrap';

/* Format: form inside of columns */
/* Information needed: name, email, subject message 
   (MAYBE include checkbox for if form error, or bug or **OTHER IDEAS HERE** */

const Contact = (props) => {
  return (
    <Container>
      <Row>
          {/* Item needs to be centered */}
        <Col>{<h1>Contact Page</h1>}</Col>
      </Row>
      <Row>
        <Col>Here you can find </Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col xs="6">Column</Col>
        <Col>Column</Col>
      </Row>
      <Row xs="1" sm="2" md="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
    </Container>
  );
}

export default Contact;