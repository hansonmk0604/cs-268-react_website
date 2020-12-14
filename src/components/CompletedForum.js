import React from 'react';
import {Alert, Button, Col, Container, Form, Nav, Row} from "react-bootstrap";
import axios from 'axios';
import {useStoreState} from "pullstate";
import {UserInfo} from "./UserInfo";

function completedForum()
{
    const handleClick = (e) =>
    {
        e.preventDefault();
    }

    return(
        <Container className = 'container'>
            <Row>
                <Col>
                    <div id = 'postTitle'>Div for post title</div>
                    <div id = 'postSubHead'>Div for postSubHeader</div>
                    <div id = 'postContent'>Div for postContent</div>
                    <Form>
                        <Form.Group>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as='textarea' placeholder='Hehe haha funny!'/>
                        </Form.Group>
                        <Button onClick={handleClick} type='submit'>Post</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default completedForum;