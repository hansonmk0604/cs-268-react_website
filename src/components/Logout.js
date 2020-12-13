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

function Logout() {
      return(
        <Redirect to = {{
          pathname: "/login",
        }} />
      );
}

export default Logout;