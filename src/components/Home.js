import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import "../css/Home.css";

/* Have headers or just change text size with classNames for Col's */
// https://stackoverflow.com/questions/42768289/how-to-avoid-getting-error-because-of-undefined-in-react-native

function Home() {
        return (
            <Container className = "container">
                <Row className="justify-content-md-center">
                    <Col><h2>Welcome to the</h2></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col><h1>University of Wisconsin Eau Claire</h1></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col><h2>Forum Page</h2></Col>
                </Row>
            </Container>
        );
}

export default Home;