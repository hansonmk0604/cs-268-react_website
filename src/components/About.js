import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';

import "../css/App.css";
import sullivan_img from "../imgs/sullivan_img.JPG";
import mitchell_img from "../imgs/mitchell_img.JPG";

function About() {
    return (
        <Container className="container">
            <Row>
                <Col>
                    <h1 className="h1-about"><b>About This Site</b></h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="aboutUsCol" xs={12}>
                    <h2 className="h2-about"><u>About Us</u></h2>
                </Col>
                <Col className="aboutUsCol" xs={12}>
                    <div className="divCenter">This site was created so that fellow Blugolds can have a common place to
                        communicate with
                        others for academics! Especially during COVID-19, we believe it is important to give students
                        a place to collaborate with others on academics.
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="creatorsCol" xs={12}>
                    <h2 className="h2-about"><u>Who Are We?</u></h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="creatorsCol" xs={12} md={6} lg={6}>
                    <Image className="suliImg" src={sullivan_img} rounded alt="Sullivan Prellwitz"/>
                    <p className="ourName"><b>Sullivan Prellwitz</b></p>
                    <p className="aboutSuli">Junior at UWEC with a major in Comprehensive Computer Science.
                        Created the API and functionality of this site!</p>
                </Col>
                <Col className="creatorsCol" xs={12} md={6} lg={6}>
                    <Image className="mitchImg" src={mitchell_img} rounded alt="Mitchell Hanson"/>
                    <p className="ourName"><b>Mitchell Hanson</b></p>
                    <p className="aboutMitch">Junior at UWEC with a major in Comprehensive Computer Science with a minor
                        in mathematics.
                        Created the styling and components of the site!</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <div className='emails'>
                        <h2 className="h2-help">Questions, Comments, or concerns?</h2>
                        <p className="suliEmail">Email Sullivan Prellwitz at: <b>prellwsr8859@uwec.edu</b></p>
                        <p className="mitchEmail">Or Mitchell Hanson at: <b>hansonmk0604@uwec.edu</b></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default About;