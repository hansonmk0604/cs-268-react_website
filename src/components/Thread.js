import React, {useEffect, useState} from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    Nav, Jumbotron
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {useStoreState} from "pullstate";
import {UserInfo} from "./UserInfo";
import axios from "axios";
import ThreadPost from "./ThreadPost";

function Thread(props) {
    const userInfoState = useStoreState(UserInfo)
    const [posts, setPosts] = useState([])
    const [apiErr, setApiErr] = useState(false)
    const [apiErrMsg, setApiErrMsg] = useState('')

    const handleAPIErrs = (error, message) => {
        setApiErr(error)
        setApiErrMsg(message)
    }

    const handlePostsSet = (apiResp) => {
        setPosts(apiResp)
    }
    const getPosts = () => {
        axios.post('http://localhost:8080/query', {
                query: `
            query {
                PostByThread(input:{
                email:"${userInfoState.userEmail}"
                token:"${userInfoState.userToken}"
                threadID:"${props.location.state.id}"
                }){
                posts {
                  id
                  userId
                  content
                  commentIDs
                  threadId
                  subHeader
                  title
                  class
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
            if (!result.data.data.PostByThread.error.errors) {
                handlePostsSet(result.data.data.PostByThread.posts)
            } else {
                handleAPIErrs(result.data.data.PostByThread.error.errors, result.data.data.PostByThread.error.message)
            }
        }).catch(error => {
            handleAPIErrs(true, error)
        })
    }

    useEffect(() => {
        getPosts()
    }, [])


      return(
        <div id = "forumRoot">
          <Container>
            <Row>
                <Jumbotron>
                    <h1>{props.location.state.name} threads!</h1>
                    <h4>{props.location.state.tagline}</h4>
                    <p>
                        <Button variant="primary">Create Post</Button>
                    </p>
                </Jumbotron>
            </Row>
              <Row>
                  {posts && posts.map((post) => (
                      <ThreadPost title={post.title} subheader={post.subHeader} id={post.id}/>
                  ))}
              </Row>
          </Container>
        </div>
      );
}

export default Thread;