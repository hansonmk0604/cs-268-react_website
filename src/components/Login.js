import React from "react";
import {Alert, Button, Col, Container, Form, Nav, Row} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import axios from 'axios'
import {withCookies, Cookies} from "react-cookie";
import "../css/Login.css";
import {instanceOf} from "prop-types";

class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    constructor(props) {
        super(props);
        const {cookies} = props;
        this.state = {
            loggedIn: this.props.location.state ? this.props.location.state.loggedIn : false,
            userName: "",
            password: "",
            token: "",
            userID: "",
            loginError: false,
            userInfo: cookies.get('userInfo') || null
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
                if (!result.data.data.Login.error.errors) {
                    this.setState({loggedIn: true, userID: result.data.data.Login.userId})
                    let user = {
                        userID: this.state.userID,
                        userToken: result.data.data.Login.token.token,
                        userEmail: result.data.data.Login.email
                    }
                    const {cookies} = this.props
                    cookies.set('userInfo', user, {path: '/', secure: false, httpOnly: false, sameSite: false})
                } else {
                    this.setState({loginError: true})
                }
            })
        }
        login()
    }

    render() {
        if (this.state.loggedIn) {
            const location = {
                pathname: '/Forum',
                state: {loggedIn: this.state.loggedIn, userID: this.state.userID}
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
                            {this.state.loginError && (
                                <div>
                                    <Alert variant="danger">
                                        <Alert.Heading>Error when trying to log in!</Alert.Heading>
                                        <p>
                                            This typically means your username or password was incorrect. This could
                                            also
                                            be an issue on our end. If the errors persist and your information is
                                            correct please
                                            reach out.
                                        </p>
                                    </Alert>
                                </div>
                            )}
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

export default withCookies(Login);
