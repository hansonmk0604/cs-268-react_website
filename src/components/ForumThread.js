import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function ForumThread(props) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.tagline}</Card.Subtitle>
                <Link to={{
                    pathname: '/thread',
                    state: {
                        id: props.id,
                        name: props.name,
                        tagline: props.tagline
                    }
                }}>View Thread</Link>
            </Card.Body>
        </Card>
    );
}

export default ForumThread


