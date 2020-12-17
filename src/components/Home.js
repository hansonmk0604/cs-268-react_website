import React from "react";
import {Col, Container, Row} from 'react-bootstrap';

import "../css/App.css";

function Home() {
    return (
        <Container className="container">
            <Row className="justify-content-md-center">
                <Col>
                    <h1 className='welcomeHeader'><b>Welcome to the University of Wisconsin Eau Claire Forum Page</b>
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <p className="introP">In this site, you can find help in the classes you are struggling with for
                        this semester!
                        Does not matter if that class pertains to your major or minor! You are able to access any forum thread
                        and get assistance from those on the site that are taking the same class, or have taken it
                        previously.</p>
                    <p className="introP">Essentially, this site is like a stackoverflow forum site, but for UWEC
                        classes!</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h3 className="welcomeHeader">How to get Started</h3>
                    <p className="introP">Make an account with signup in the top right of your screen!
                        Then, click on Forums for what class you need help with or want to help others with!</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;