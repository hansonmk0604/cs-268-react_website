import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import "../css/Home.css";

/* Have headers or just change text size with classNames for Col's */

class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            // https://stackoverflow.com/questions/42768289/how-to-avoid-getting-error-because-of-undefined-in-react-native
            loggedIn: this.props.location.state ? this.props.location.state.loggedIn : true
        }
    }

    render()
    {
        console.log(this.state.loggedIn)

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

export default Home;