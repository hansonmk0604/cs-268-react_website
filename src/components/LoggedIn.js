import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import "../css/Home.css";

/* Have headers or just change text size with classNames for Col's */

class LoggedIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            from: "/"
        }
    }

    render()
    {
        return (
            <Container className = "container">
                <Row className="headerRow" lg = "1">
                    <Col>{<h2>{this.props.location.state.token}</h2>}</Col>
                    <Col>{<h1>University of Wisconsin Eau Claire</h1>}</Col>
                    <Col>{<h2>Forum Page</h2>}</Col>
                </Row>
            </Container>
        );
    }
}

export default LoggedIn;