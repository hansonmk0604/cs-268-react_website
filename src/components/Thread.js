import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";
import { Redirect } from "react-router-dom";

function Thread() {
      return(
        <div id = "forumRoot">
          <Container className = "container">
            <Row className="headerRow" lg = "1">
                <Button className="create" onClick={this.handleClick}>Create Post</Button>
                <Col>{<h1>University of Wisconsin Eau Claire</h1>}</Col>
                <Col>{<h2>Forum Page</h2>}</Col>
            </Row>
          </Container>
        </div>
      );
}

export default Thread;