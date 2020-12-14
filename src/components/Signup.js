import React, {useState} from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {UserInfo} from "./UserInfo";
import {useCookies} from "react-cookie";
import {Redirect} from "react-router-dom";
import {useStoreState} from "pullstate";

{/* Dont forget about certificates!*/
}

function Signup() {
    const userInfoState = useStoreState(UserInfo)
    const [cookies, setCookie] = useCookies(['userToken']);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [willingToHelp, setWillingTohelp] = useState(false)
    const [major, setMajor] = useState('')
    const [minor, setMinor] = useState('')
    const [certificates, setCertificates] = useState('')
    const [dob, setDob] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [apiErr, setApiErr] = useState(false)
    const [apiErrMsg, setApiErrMsg] = useState('')


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

    const handleWillingToHelpSelection = e => {
        e.preventDefault()
        if (e.target.value === "Yes") {
            setWillingTohelp(true)
        } else {
            setWillingTohelp(false)
        }
    }

    const handleMajorInput = e => {
        e.preventDefault()
        setMajor(e.target.value)
    }

    const handleMinorInput = e => {
        e.preventDefault()
        setMinor(e.target.value)
    }

    const handleCertificatesInput = e => {
        e.preventDefault()
        setCertificates(e.target.value)
    }

    const handleDobInput = e => {
        e.preventDefault()
        setDob(e.target.value)
    }

    const handleFNameInput = e => {
        e.preventDefault()
        setFName(e.target.value)
    }

    const handleLNameInput = e => {
        e.preventDefault()
        setLName(e.target.value)
    }

    const handleClick = e => {
        e.preventDefault()
            axios.post('http://localhost:8080/query', {
                    query: `
                mutation {
                      CreateUser(
                        input: {
                          email: "${email}"
                          password: "${password}"
                          dateOfBirth: "${dob}"
                          major: "${major}"
                          minor: "${minor}"
                          willingToHelp: true
                          firstName: "${fName}"
                          lastName: "${lName}"
                        }
                      ) {
                        _id
                        email
                        firstName
                        lastName
                        dateOfBirth
                        major
                        minor
                        willingToHelp
                        postIds
                        commentIds
                        classesTaken
                        emailVerified {
                          verified
                          dateValidated
                          email
                        }
                        token {
                          token
                          expireDate
                        }
                        error {
                          errors
                          message
                          code
                        }
                      }
                    }
`
                }
            ).then((result) => {
                if (!result.data.data.CreateUser.error.errors) {
                    console.log(result.data.data.CreateUser)
                    UserInfo.update(s => {
                        s.userLoggedIn = true;
                        s.userToken = result.data.data.CreateUser.token.token;
                        s.userId = result.data.data.CreateUser._id;
                        s.userEmail = result.data.data.CreateUser.email;
                    })
                    setCookie('userToken', result.data.data.CreateUser.token.token, {path: '/', sameSite: false})
                } else {
                    handleAPIErrs(result.data.data.CreateUser.error.errors, result.data.data.CreateUser.error.message)
                }
            }).catch(error => {

                handleAPIErrs(true, error)
            })
    }

    if (userInfoState.userLoggedIn) {
        return (
            <Redirect to={'/forum'}/>
        )
    }

    return (
        <Container>
            <Row className={"container"}>
                <Col>
                    {apiErr && (
                            <Alert variant="danger">
                                <Alert.Heading>Error when trying to create user!</Alert.Heading>
                                <Alert.Heading>{apiErrMsg}</Alert.Heading>
                                <p>
                                    This typically means your email is already in use. This could
                                    also
                                    be an issue on our end. If the errors persist and your information is
                                    correct please
                                    reach out.
                                </p>
                            </Alert>
                    )}
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="fname">First Name</Form.Label>
                            <Form.Control type="name" placeholder="Darth" value={fName} onChange={handleFNameInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="lname">Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Plagueis" value={lName} onChange={handleLNameInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control type="email" placeholder="yourEmail@uwec.edu" value={email} onChange={handleEmailInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control type="password" placeholder="*******" value={password} onChange={handlePasswordInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="major">Major</Form.Label>
                            <Form.Control type="text" placeholder="Computer Science" value={major} onChange={handleMajorInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="minor">Minor</Form.Label>
                            <Form.Control type="text" placeholder="Mathematics Liberal Arts" value={minor} onChange={handleMinorInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="certificate">Certificate</Form.Label>
                            <Form.Control type="text" placeholder="Information Systems Certificate" value={certificates} onChange={handleCertificatesInput}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="dob">Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="MM/DD/YYY" value={dob} onChange={handleDobInput}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleClick}>
                            Signup
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
