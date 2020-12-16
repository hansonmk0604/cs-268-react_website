import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import "../css/About.css";
import sullivan_img from "../imgs/sullivan_img.JPG";
import mitchell_img from "../imgs/mitchell_img.JPG";

function About() {
    return (
        <Container className="container">
            <Row>
                <Col>
                    <h1><b>About This Site</b></h1>
                    <br />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="aboutUsCol" xs="6">
                    <h2><u>About Us</u></h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="aboutUsCol" xs="6">
                    <p>This site was created so that fellow Blugolds can have a common place to communicate with
                        others for academics!</p>
                    <br />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="creatorsCol" xs="6">
                    <h2><u>Who Are We?</u></h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="creatorsCol" xs="4">
                    <div>
                        <img className="suliImg" src={sullivan_img} fluid alt="Sullivan Prellwitz"/>
                    </div>
                    <p className="aboutSuli"><b>Sullivan Prellwitz</b></p>
                    <p className="aboutSuli">Junior at UWEC with a major in Comprehensive Computer Science. 
                        Created the API and functionality of this site!</p>
                </Col>
                <Col className="creatorsCol" xs="4">
                    <div className="aboutMitch">
                        <img className="mitchImg" src={mitchell_img} fluid alt="Mitchell Hanson"/>
                    </div>
                    <p className="aboutMitch"><b>Mitchell Hanson</b></p>
                    <p className="aboutMitch">Junior at UWEC with a major in Comprehensive Computer Science with a minor in mathematics. 
                        Created the styling and components of the site!</p>
                </Col>
            </Row>
        </Container>
    );

}

export default About;