import React from "react";
import {Card, Row} from "react-bootstrap";
import {Link} from "react-router-dom";



class ForumThread extends React.Component {
    static propTypes = {
        id: "",
        name: "",
        tagline: ""
}
    constructor(props) {
        super(props);
        const {id, name, tagline} = props
        this.state = {
            loggedIn: true
        }
    }

    render() {
        const {id, name, tagline} = this.props
        return (
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{tagline}</Card.Subtitle>
                        <Link to = {{
                            pathname: '/thread',
                            state: {
                                id: id
                            }
                        }}>View Thread</Link>
                    </Card.Body>
                </Card>
        );
    }
}
export default ForumThread


