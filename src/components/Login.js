import React from "react";
import {Button, Col, Container, Form, Nav, Row} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import axios from 'axios'
import "../css/Login.css";


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            userName: "",
            password: "",
            token: ""
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("hello world")
        console.log(this.state.userName)
        console.log(this.state.password)
        const login = () => {
            axios.post('http://localhost:8080/query', {
                    query: `
                mutation {
                  Login(
                    input: {
                      email: "${this.state.userName}"
                      password: "${this.state.password}"
                      token: ""
                    }
                  ) {
                    userId
                    email
                    token {
                      token
                      expireDate
                    }
                    error {
                      message
                      code
                      errors
                    }
                  }
                }
`
                }
            ).then((result) => {
                let data;
                if (!result.data.data.Login.error.errors) {
                    console.log("This is where we redirect")
                    this.state.token = result.data.data.Login.token.token

                    this.setState({loggedIn: true})
                    console.log(this.state.token)
                    console.log(this.state.loggedIn)
                } else {

                }
            })
        }
        login()
    }

    render() {
        console.log(this.state.loggedIn);


        if (this.state.loggedIn) {
            const location = {
                pathname: '/loggedin',
                state: {userToken: this.state.token}
            }
            return (
                <Redirect to={location}/>
            )
        }
        return (
            <Container>
                <Row className={"container"}>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label for="email">Email</Form.Label>
                                <Form.Control type="email" onChange={(event) => {
                                    this.state.userName = event.target.value
                                }}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label for="password">Password</Form.Label>
                                <Form.Control type="password" onChange={(event) => {
                                    this.state.password = event.target.value
                                }}/>
                            </Form.Group>
                            <Button onClick={this.handleClick} variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav.Link href="/signup">Don't have an account? Signup!</Nav.Link>
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default Login;
