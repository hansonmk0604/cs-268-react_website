import React from 'react';
import { Container, Row, Col } from 'reactstrap';

/* What needs to be added: CSS with specific colors and font sizes, images of Suli and I, and changing of column spacing.*/

const About = (props) => {
  return (
    <Container>
        <Row>
            {/* This needs to be centered via style or something else */}
            <Col>About This Site*tm</Col>
        </Row>
        <Row xs="2">
            {/* Need to have the column below span 2 columns, or just create another row 
            Also, make it so the columns are closer together */}
            <Col xs = {{span: 2}}>Creators:</Col>
            <Col>IMAGE HERE</Col>
            <Col>Sullivan Prellwitz</Col>
        </Row>
        <Row>
            <Col>INFORMATION ABOUT SULI HERE</Col>
        </Row>
        <Row xs = "2">
            <Col>IMAGE HERE</Col>
            <Col>Mitchell Hanson</Col>
        </Row>
        <Row>
            <Col>INFORMATION ABOUT MITCHELL HERE</Col>
        </Row>
        <Row xs = "1">
            <Col>Why It Was Created</Col>
            <Col>This site was created so that fellow Blugolds could have a common place to communicate with each other for anything!</Col>
            <Col>Whether it be about sports, homework, clubs, Student Senate, ect. It all has a place here</Col>
            <Col>and is welcomed to make their community stronger through this website!</Col>
        </Row>
    </Container>
  );
}

export default About;