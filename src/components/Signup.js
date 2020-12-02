import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

{/* Dont forget about certificates!*/}

const Signup = (props) => {
  return (
    <Container>
      <Row className={"container"}>
        <Col>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="yourEmail@uwec.edu"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
              />
            </FormGroup>
            <FormGroup>
              <Label for="willingToHelp">Willing to provide help?</Label>
              <Input type="select" name="select" id="willingToHelp">
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="major">Major</Label>
              <Input
                type="text"
                name="text"
                id="major"
                placeholder="Computer Science"
              />
            </FormGroup>
            <FormGroup>
              <Label for="minor">Minor</Label>
              <Input
                type="text"
                name="text"
                id="minor"
                placeholder="Geography"
              />
            </FormGroup>
            <FormGroup>
              <Label for="dob">Date of birth</Label>
              <Input type="date" name="text" id="dob" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
