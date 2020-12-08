import logo from "../logo.svg";
import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

import "../css/Home.css";

/* Have headers or just change text size with classNames for Col's */

class Home extends React.Component
{
    constructor()
    {
        super();
        this.state = {
        from: "/"
        }
    }

    render()
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
}

/*
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
*/


export default Home;