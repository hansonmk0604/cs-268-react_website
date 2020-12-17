import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import axios from 'axios';
import {UserInfo} from "./UserInfo";

function ThreadPost(props) {
    const userInfoState = UserInfo.useState()
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])
    const [apiErr, setApiErr] = useState(false)
    const [apiErrMsg, setApiErrMsg] = useState('')
    const [postLoaded, setLoadedPost] = useState(false)
    const [commentsLoaded, setCommentsLoaded] = useState(false)
    const [commentContent, setCommentContent] = useState('')
    const [commentCreatedNeedUpdate, setCommentCreatedNeedUpdate] = useState(false)

    const handleAPIErrs = (error, message) => {
        setApiErr(error)
        setApiErrMsg(message)
    }

    const handlePostSet = (apiResp) => {
        setPost(apiResp)
    }

    const handleCommentsSet = (apiResp) => {
        setComments(apiResp)
    }

    const handlePostLoaded = () => {
        setLoadedPost(true)
    }

    const handleCommentsLoaded = () => {
        setCommentsLoaded(true)
    }

    const handleCommentContent = (e) => {
        e.preventDefault()
        setCommentContent(e.target.value)
    }

    const handleCommentCreation = () => {
        setCommentCreatedNeedUpdate(true)
    }

    const getPost = () => {
        axios.post('http://localhost:8080/query', {
                query: `
            query {
              Post(input: {
                email:"${userInfoState.userEmail}"
                token:"${userInfoState.userToken}"
                postId:"${props.location.state.postId}"
              })
              {
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
            if (!result.data.data.Post.error.errors) {
                handlePostSet(result.data.data.Post)
                handlePostLoaded()
            } else {
                handleAPIErrs(result.data.data.Post.error.errors, result.data.data.Post.error.message)
            }
        }).catch(error => {
            handleAPIErrs(true, error)
        })
    }
    const getComment = () => {
        axios.post('http://localhost:8080/query', {
                query: `
          query {
              CommentsByPostID(input:{
                postID:"${props.location.state.postId}"
                token:"${userInfoState.userToken}"
                email:"${userInfoState.userEmail}"
              }){
                comments {
                  id
                  userId
                  postId
                  threadId
                  content
                }
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
            if (!result.data.data.CommentsByPostID.error.errors) {
                handleCommentsSet(result.data.data.CommentsByPostID.comments)
                handleCommentsLoaded()
            } else {
                handleAPIErrs(result.data.data.CommentsByPostID.error.errors, result.data.data.CommentsByPostID.error.message)
            }
        }).catch(error => {
            handleAPIErrs(true, error)
        })
    }

    const postComment = () => {
        axios.post('http://localhost:8080/query', {
                query: `
          mutation {
              CreateComment(input:{
                content:"${commentContent}"
                threadId: "${props.location.state.threadId}"
                postId:"${props.location.state.postId}"
                token:"${userInfoState.userToken}"
              })
              {
                id
                error{
                  errors
                  code
                  message
                }
              }
            }
`
            }
        ).then((result) => {
            if (!result.data.data.CreateComment.error.errors) {
                handleCommentCreation()
            } else {
                handleAPIErrs(result.data.data.CreateComment.error.errors, result.data.data.CreateComment.error.message)
            }
        }).catch(error => {
            handleAPIErrs(true, error)
        })
    }

    useEffect(() => {
        getPost()
        getComment()
    }, [])


    const handleClick = (e) => {
        e.preventDefault();
        postComment()
    }

    if (commentCreatedNeedUpdate) {
        getPost()
        getComment()
        setCommentContent('')
        setCommentCreatedNeedUpdate(false)
    }

    if (postLoaded) {
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Header as="h4">{post.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{post.subHeader}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br/>
                        <Form>
                            <h4>Post Comment</h4>
                            <Form.Group>
                                <Form.Label as={"h5"}>Comment</Form.Label>
                                <Form.Control as='textarea' placeholder='Hehe haha funny!'
                                              onChange={handleCommentContent} value={commentContent}/>
                            </Form.Group>
                            <Button onClick={handleClick} type='submit'>Post</Button>
                        </Form>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Comments</h4>
                        {!commentsLoaded && (
                            <Spinner animation="grow" variant="info"/>
                        )}
                        {comments && comments.map((comment) => (
                            <Card key={comment.id}>
                                <Card.Body>{comment.content}</Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    } else if (!postLoaded) {
        return (
            <Container>
                <Row>
                    <Spinner animation="border" variant="info"/>
                </Row>
            </Container>
        )
    }
}

export default ThreadPost;