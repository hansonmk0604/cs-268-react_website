import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

class Forum extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
        //loggedIn: this.props.location.state ? this.props.location.state.loggedIn : false
        loggedIn: true
    }
  }

  render()
  {
    if (this.state.loggedIn)
    {
        return(
            <Container className="container">
                <Row>
                    <Col><h1><b>Forums</b></h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Link to = {{
                            pathname: '/thread',
                            state: {
                                major: "Computer Science/Software Engineering"
                            }
                        }}>Computer Science/Software Engineering</Link>
                    </Col>
                    <Col>
                    <Link to = {{
                            pathname: '/thread',
                            state: {
                                major: "Art"
                            }
                        }}>Art</Link>
                    </Col>
                    <Col>
                        <Link to = {{
                            pathname: '/thread',
                            state: {
                                major: "Mathematics"
                            }
                        }} onClick = {this.handleClick}>Mathematics</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to = {{
                            pathname: '/thread',
                            state: {
                                major: "Music - Applied Instrumental"
                            }
                        }} onClick = {this.handleClick}>Music - Applied Instrumental</Link>
                    </Col>
                    <Col>
                        <Link to = {{
                            pathname: '/thread',
                            state: {
                                major: "Music - Applied Voice"
                            }
                        }} onClick = {this.handleClick}>Music - Applied Voice</Link>
                    </Col>
                    <Col>
                        <Link to = {{
                            pathname: '/thread',
                            state: {
                                major: "Musical Theatre"
                            }
                        }} onClick = {this.handleClick}>Musical Theatre</Link>                
                    </Col>
                </Row>
            </Container>
        );
    }
    else
    {
        return (
            <Redirect to = {{
                pathname: "/login"
            }} />
        );
    }
  }
}

export default Forum;