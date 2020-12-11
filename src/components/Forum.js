import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav
} from "react-bootstrap";
import { useLocation } from "react-router-dom";

class Forum extends React.Component
{
  constructor()
  {
    super();
  }

  render()
  {
    return(
        <Container className="container">
        <Row>
            <Col><h1><b>Forums</b></h1></Col>
        </Row>
        <Row>
            <Col>
                Computer Science/Software Engineering
            </Col>
            <Col>
                Art
            </Col>
            <Col>
                Mathematics
            </Col>
        </Row>
        <Row>
            <Col>
                Music - Applied Instrumental
            </Col>
            <Col>
                Music - Applied Voice
            </Col>
            <Col>
                Musical Theatre                
            </Col>
        </Row>
    </Container>
    );
  }
}

export default Forum;