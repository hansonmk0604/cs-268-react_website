import React, {useState} from 'react'
import {Button, Card} from "react-bootstrap";
import {Redirect} from "react-router-dom";

function ThreadPostCard(props) {

    const location = {
        pathname: '/threadPost',
        state: {postId: props.id, threadId: props.threadId}
    }

    const [postRedirect, setPostRedirect] = useState(false)

    const handleSetPostRedirect = () => {
        setPostRedirect(true)
    }

    const handleClick = () => {
        handleSetPostRedirect()
    }
    if (postRedirect) {
        return (
            <Redirect to={location}/>
        )
    } else {

        return (
            <Card className="text-center">
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.subheader}</Card.Title>
                    <Button variant="primary" onClick={handleClick}>View Post</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ThreadPostCard