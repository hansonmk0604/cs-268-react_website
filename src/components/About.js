import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import "../css/About.css";

/* What needs to be added: CSS with specific colors and font sizes, images of Suli and I, and changing of column spacing.*/

const About = (props) => {
  return (
    <Container className = "container">
        <Row className = "aboutHeader">
            {/* This needs to be centered via style or something else */}
            <Col>{<u><b>About This Site*tm</b></u>}</Col>
        </Row>
        <Row xs = "2">
            {/* Need to have the column below span 2 columns, or just create another row 
            Also, make it so the columns are closer together */}
            <Col className = "header" xs = "1">{<b>Creators:</b>}</Col>
        <Col>{<img src = "/imgs/sullivan_img.JPG" alt = "Sullivan Prellwitz" />}</Col>
            <Col className = "nameHeader">Sullivan Prellwitz</Col>
        </Row>
        <Row>
            <Col>INFORMATION ABOUT SULI HERE</Col>
        </Row>
        <Row xs = "2">
            <Col>{<img src = "/imgs/mitchell_img.JPG" alt = "Mitchell Hanson" />}</Col>
            <Col className = "nameHeader">Mitchell Hanson</Col>
        </Row>
        <Row>
            <Col>INFORMATION ABOUT MITCHELL HERE</Col>
        </Row>
        <Row xs = "1">
            <Col className = "header">Why It Was Created</Col>
            <Col>This site was created so that fellow Blugolds could have a common place to communicate with each other for anything! 
            Whether it be about sports, homework, clubs, Student Senate, ect. It all has a place here and is welcome to make 
            their community stronger and grow through this website!
            </Col>
        </Row>
    </Container>
  );
}

export default About;