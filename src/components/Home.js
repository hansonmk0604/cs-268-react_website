import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import "../css/EachPage.css";
import "../css/Home.css";

/* Have headers or just change text size with classNames for Col's */
// https://stackoverflow.com/questions/42768289/how-to-avoid-getting-error-because-of-undefined-in-react-native

function Home() {
        return (
            <Container className = "container">
                <Row className="justify-content-md-center">
                    <Col>
                        <div>
                            <h1>Welcome to the University of Wisconsin Eau Claire Forum Page</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <p>In this site, you can find help in the classes you are struggling with for this semester!
                          Does not matter if that class pertains to your major or minor! You are able to access any form
                          and get assistance from those on the site that are taking the same class, or have taken it previously.</p>
                        <p>Essentailly, this site is like a stackoverflow forum site, but for UWEC classes!</p>  
                    </Col>
                    <Col>
                        <p>
                            Here is some sample shit to see how it looks
                        </p>
                    </Col>
                </Row>
            </Container>
        );
}

export default Home;