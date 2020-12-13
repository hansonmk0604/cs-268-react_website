import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function Forum() {

//    let getThreads = () => {
//         const threadsQuery = () => {
//                 axios.post('http://localhost:8080/query', {
//                         query: `
//                 query {
//                   Threads(
//                     input: {
//                       email: "${this.state.userInfo.userEmail}"
//                       token: "${this.state.userInfo.userToken}"
//                     }
//                   ) {
//                     threads {
//                       id
//                       name
//                       tagLine
//                       classPrefix
//                     }
//                     errors {
//                       errors
//                       code
//                       message
//                     }
//                   }
//                 }
// `
//                     }
//                 ).then((result) => {
//                     if (!result.data.data.Threads.errors.errors) {
//                         this.setState({queryResults: result.data.data.Threads.threads})
//                         console.log(result.data.data.Threads.threads)
//                     } else {
//                         this.setState({queryErrors: true})
//                         console.log(result.data.data.Threads.errors.message)
//                     }
//                 })
//         }
//         threadsQuery()
//     }
    return (
        <Container className="container">
            <Row>
                <Col><h1><b>Department Threads</b></h1></Col>
            </Row>
            <Row>
                {/*{this.state.queryResults.map((thread) => (*/}
                {/*   <ForumThread tagline={thread.tagLine} name={thread.name} id={thread.id}/>*/}
                {/*))}*/}
            </Row>
        </Container>
    );
}

export default Forum;