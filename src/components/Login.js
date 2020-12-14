import React, {useState} from "react";
import {Alert, Button, Col, Container, Form, Nav, Row} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import axios from 'axios'
import {withCookies, Cookies, useCookies} from "react-cookie";
import "../css/Login.css";
import {instanceOf} from "prop-types";
import {UserInfo} from "./UserInfo";
import {useStoreState} from "pullstate";

function Login() {
    const [cookies, setCookie] = useCookies(['userToken']);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [apiErr, setApiErr] = useState(false)
    const [apiErrMsg, setApiErrMsg] = useState('')
    const userInfoState = useStoreState(UserInfo)

    const handleAPIErrs = (error, message) => {
        setApiErr(error)
        setApiErrMsg(message)
    }

    const handleEmailInput = e => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePasswordInput = e => {
        e.preventDefault();
        setPassword(e.target.value)
    }

   const handleSubmit = (e) => {
        e.preventDefault();
        const login = () => {
            axios.post('http://localhost:8080/query', {
                    query: `
                mutation {
                  Login(
                    input: {
                      email: "${email}"
                      password: "${password}"
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
                    UserInfo.update(s => {
                        s.userLoggedIn = true;
                        s.userToken = result.data.data.Login.token.token;
                        s.userId = result.data.data.Login.userId;
                        s.userEmail = result.data.data.Login.email;
                    })
                    setCookie('userToken', result.data.data.Login.token.token, {path: '/', sameSite: false})
                } else {
                    handleAPIErrs(result.data.data.Login.error.errors, result.data.data.Login.error.message)
                }
            }).catch(error => {
                handleAPIErrs(true, error)
            })
        }
        login()
    }
    if (userInfoState.userLoggedIn) {
        return (
            <Redirect to={'/forum'}/>
        )
    }
    else {
        return (
            <Container>
                <Row className={"container"}>
                    <Col>
                        <Form>
                            {apiErr && (
                                <div>
                                    <Alert variant="danger">
                                        <Alert.Heading>Error when trying to log in!</Alert.Heading>
                                        <Alert.Heading>{apiErrMsg}</Alert.Heading>
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
                                <Form.Control type="email" onChange={handleEmailInput} value={email}
                                              placeholder="sample@uwec.edu"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label for="password">Password</Form.Label>
                                <Form.Control type="password" onChange={handlePasswordInput} value={password}
                                              placeholder="******"/>
                            </Form.Group>
                            <Button onClick={handleSubmit} variant="primary" type="submit">
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
