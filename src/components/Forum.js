import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {UserInfo} from "./UserInfo";
import {useStoreState} from "pullstate";
import {Redirect} from "react-router-dom";
import axios from "axios";
import ForumThread from "./ForumThread";

function Forum() {
    const userInfoState = useStoreState(UserInfo)
    const [forumThreads, setForumThreads] = useState([])
    const [apiErr, setApiErr] = useState(false)
    const [apiErrMsg, setApiErrMsg] = useState('')

    const handleForumThreads = (apiResp) => {
        setForumThreads(apiResp)
    }

    const handleAPIErrs = (error, message) => {
        setApiErr(error)
        setApiErrMsg(message)
    }


    const getThreads = () => {
        axios.post('http://localhost:8080/query', {
                query: `
                query {
                  Threads(
                    input: {
                      email: "${userInfoState.userEmail}"
                      token: "${userInfoState.userToken}"
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
                handleForumThreads(result.data.data.Threads.threads)
            } else {
                handleAPIErrs(result.data.data.Login.errors.errors, result.data.data.Login.errors.message)
            }
        }).catch(error => {
            handleAPIErrs(true, error)
        })
    }

    useEffect(() => {
        getThreads()
    }, [])

    if (userInfoState.userLoggedIn) {
        return (
            <Container className="container">
                <Row>
                    <Col><h1><b>Department Threads</b></h1></Col>
                </Row>
                <Row>
                    {forumThreads && forumThreads.map((thread) => (
                        <ForumThread tagline={thread.tagLine} name={thread.name} id={thread.id} key={thread.id}/>
                    ))}
                </Row>
            </Container>
        );
    } else {
        return (
            <Redirect to={'/login'}/>
        )
    }
}

export default Forum;