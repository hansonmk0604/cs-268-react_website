import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import {Cookies, withCookies} from 'react-cookie';
import {instanceOf} from "prop-types";
import axios from "axios";
import ForumThread from "./ForumThread";

class Forum extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            loggedIn: this.props.location.state ? this.props.location.state.loggedIn : false,
            userInfo: cookies.get('userInfo'),
            queryErrors: false,
            queryResults: []
        }
    }

    getThreads = () => {
        const threadsQuery = () => {
                axios.post('http://localhost:8080/query', {
                        query: `
                query {
                  Threads(
                    input: {
                      email: "${this.state.userInfo.userEmail}"
                      token: "${this.state.userInfo.userToken}"
                    }
                  ) {
                    threads {
                      id
                      name
                      tagLine
                      classPrefix
                    }
                    errors {
                      errors
                      code
                      message
                    }
                  }
                }
`
                    }
                ).then((result) => {
                    if (!result.data.data.Threads.errors.errors) {
                        this.setState({queryResults: result.data.data.Threads.threads})
                        console.log(result.data.data.Threads.threads)
                    } else {
                        this.setState({queryErrors: true})
                        console.log(result.data.data.Threads.errors.message)
                    }
                })
        }
        threadsQuery()
    }
    componentDidMount() {
        const {cookies} = this.props;
        this.setState({userInfo: cookies.get('userInfo')})
        this.getThreads()
    }

    render() {
        const {cookies} = this.props;
        this.state.userInfo = cookies.get('userInfo')
        if (this.state.loggedIn) {
            return (
                <Container className="container">
                    <Row>
                        <Col><h1><b>Department Threads</b></h1></Col>
                    </Row>
                    <Row>

                        {this.state.queryResults.map((thread) => (
                           <ForumThread tagline={thread.tagLine} name={thread.name} id={thread.id}/>
                        ))}

                    </Row>
                </Container>
            );
        } else {
            return (
                <Redirect to={{
                    pathname: "/login"
                }}/>
            );
        }
    }
}

export default withCookies(Forum);