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
            <Row>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
            </Row>
            <Row>
                <Col xs="3">.col-3</Col>
                <Col xs="auto">.col-auto - variable width content</Col>
                <Col xs="3">.col-3</Col>
            </Row>
            <Row>
                <Col xs="6">.col-6</Col>
                <Col xs="6">.col-6</Col>
            </Row>
            <Row>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col sm="4">.col-sm-4</Col>
            </Row>
            <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
            </Row>
            <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
            </Row>
        </Container>
    );
}

export default Home;