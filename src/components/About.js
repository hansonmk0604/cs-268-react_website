import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import "../css/About.css";
import sullivan_img from "../imgs/sullivan_img.JPG";
import mitchell_img from "../imgs/mitchell_img.JPG";

function About() {
    return (
        <Container className="container">
            <Row>
                <Col><h1><b>About This Site</b></h1></Col>
            </Row>
            <Row>
                <Col className="aboutUsCol" xs="6">
                    <h2><u>About Us</u></h2>
                </Col>
                <Col className="creatorsCol" xs="6">
                    <h2><u>Who Are We?</u></h2>
                </Col>
            </Row>
            <Row>
                <Col className="aboutUsCol" xs="6">
                    <p>This site was created so that fellow Blugolds can have a common place to communicate with
                        others for academics!</p>
                    <p>Specifically, it allows you to communicate with others in your major, minor, or
                        certificate.</p>
                    <p>If you are not in a specific major/minor/certificate program, you can request to have access
                        to those forms</p>
                    <p>via the Contact webpage on the navigation bar.</p>
                </Col>
                <Col className="creatorsCol" xs="4">
                    <div>
                        <img className="suliImg" src={sullivan_img} alt="Sullivan Prellwitz"/>
                    </div>
                    <p><b>Sullivan Prellwitz</b></p>
                    <div>
                        <img className="mitchImg" src={mitchell_img} alt="Mitchell Hanson"/>
                    </div>
                    <p><b>Mitchell Hanson</b></p>
                </Col>
                <Col className="creatorsCol" xs="4">
                    
                </Col>
            </Row>
        </Container>
    );

}

export default About;