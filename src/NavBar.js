import React, { useState } from 'react';
import { Redirect } from "react-router-dom"
import {
  Navbar,
  Nav,
  Button
} from 'react-bootstrap';

class NavBar extends React.Component
{
  constructor()
  {
    super();
    this.state = {
    };
  }

  render()
  {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href = "/about">About</Nav.Link>
            <Nav.Link href = "/contact">Contact</Nav.Link>
            <Nav.Link href = "/forum">Forums</Nav.Link>
          </Nav>
          <Nav className = "ml-auto">
            <Nav.Link href = "/login">Login</Nav.Link>
            <Nav.Link href = "/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;