import logo from "../logo.svg";
import React from "react";
import { Container, Row, Col, Form, Button } from 'reactstrap';

import "../css/Home.css";

/* Have headers or just change text size with classNames for Col's */

function Home()
{
    return (
        <Container className = "container">
            <Row className="headerRow" lg = "1">
                <Col>{<h2>Welcome to the</h2>}</Col>
                <Col>{<h1>University of Wisconsin Eau Claire</h1>}</Col>
                <Col>{<h2>Forum Page</h2>}</Col>
            </Row>
        </Container>
    );
}

export default Home;