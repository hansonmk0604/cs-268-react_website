import React from 'react'
import {Button, Card} from "react-bootstrap";

function ThreadPost(props) {
    return (
        <Card className="text-center">
            <Card.Header>{props.subheader}</Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button variant="primary">View Post</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )
}

export default ThreadPost