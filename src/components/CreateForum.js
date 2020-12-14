import React from "react";
import { Container, Row, Col, Button, Form, Nav } from "react-bootstrap";
import axios from 'axios';
import {useStoreState} from "pullstate";
import {UserInfo} from "./UserInfo";

function CreateForum(props) {
  const handleClick = (e) =>
  {
    e.preventDefault();
  }

  return(
    <Container className = 'container'>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" 
                            placeholder="Enter title of post" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subheader</Form.Label>
                <Form.Control type="email" 
                              placeholder="No idea what a subheader is, so copied code for title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control as='textarea' rows={3}/>
            </Form.Group>
            <Button onClick = {handleClick} type ='submit'>
              Post
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateForum;