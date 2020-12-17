import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from 'axios';
import {UserInfo} from "./UserInfo";
import {Redirect} from "react-router-dom";

function CreateThreadPost(props) {
    const userInfoState = UserInfo.useState()
    const [title, setTitle] = useState('')
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [postCreatedRedirect, setPostCreatedRedirect] = useState(false)
    const [postId, setPostId] = useState('')
    const [apiErr, setApiErr] = useState(false)
    const [apiErrMsg, setApiErrMsg] = useState('')

    const handleAPIErrs = (error, message) => {
        setApiErr(error)
        setApiErrMsg(message)
    }

    const handlePostId = (id) => {
        id.preventDefault()
        setPostId(id)
    }

    const handlePostCreation = (val) => {
        val.preventDefault()
        setPostCreatedRedirect(val)
    }

    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleSubjectChange = (e) => {
        e.preventDefault()
        setSubject(e.target.value)
    }

    const handleContentChange = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }


    const handleClick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/query', {
                query: `
          mutation {
            CreatePost(
                input: {
              content: "${content}"
              title: "${title}"
              class: "n/a"
              token: "${userInfoState.userToken}"
              subHeader: "${subject}"
              threadId: "${props.location.state.threadId}"
            }
          ) {
              id
              userId
              content
              commentIDs
              threadId
              subHeader
              title
              class
              error {
                errors
                code
                message
              }
            }
          }
    `
            }
        ).then((result) => {
            if (!result.data.data.CreatePost.error.errors) {
                setPostId(result.data.data.CreatePost.id)
                setPostCreatedRedirect(true)
            } else {
                handleAPIErrs(result.data.data.CreatePost.error.errors, result.data.data.CreatePost.error.message)
            }
        }).catch(error => {
            handleAPIErrs(true, error)
        })
    }

    if (userInfoState.userLoggedIn) {
        if (postCreatedRedirect) {
            console.log(postId)
            const location = {
                pathname: '/threadPost',
                state: {postId: postId, threadId: props.location.state.threadId}
            }
            return (
                <Redirect to={location}/>
            )
        }
        return (
            <Container className='container'>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="CS 268 Homework Help"
                                              onChange={handleTitleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Help! I'm building a React app and I have no idea what I'm doing!"
                                              onChange={handleSubjectChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Content</Form.Label>
                                <Form.Control as='textarea' rows={3} onChange={handleContentChange}/>
                            </Form.Group>
                            <Button onClick={handleClick} type='submit'>
                                Post
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <Redirect to={'/login'}/>
        )
    }
}


export default CreateThreadPost;