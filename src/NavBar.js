import React, { useState } from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href = "/about">About</Nav.Link>
          <Nav.Link href = "/contact">Contact</Nav.Link>
        </Nav>
        <Nav className = "ml-auto">
          <Nav.Link href = "/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;



/*import React from "react"
import "./css/NavBar.css"

import { NavLink } from 'react-router-dom'

function NavBar()
{
          <NavItem>
              <NavLink href = "/about">About</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href = "/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href = "/login">Login</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href = "/signup">Signup</NavLink>
          </NavItem>
    return (
        <ul id = "navBar">
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/login">Login</NavLink></li>
            <li><NavLink to = "/signup">Signup</NavLink></li>
            <li><NavLink to = "/contact">Contact</NavLink></li>
            <li><NavLink to = "/about">About</NavLink></li>
            <li><a href = "https://www.patreon.com/fwob/posts" target = "_blank" rel = "noreferrer">Fwobs patreon</a></li>
        </ul>
    )
}

export default NavBar*/