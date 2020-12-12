import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

class NavBar extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      // this one is unlike the others because it cannot call state on the far left
      loggedIn: this.props.location ? this.props.location.state.loggedIn : false
    };
  }

  render()
  {
    console.log(this.state.loggedIn)
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as = {Link}
        to={{
          pathname: "/"
        }}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as = {Link} 
            to = {{
              pathname: "/about"
            }}>About</Nav.Link>
            <Nav.Link as = {Link} 
            to = {{
              pathname: "/contact"
            }}>Contact</Nav.Link>
            <Nav.Link as = {Link} 
            to = {{
              pathname: "/forum"
            }}>Forums</Nav.Link>
            <NavLink to = {{
              pathname: "/about"
            }}>About2</NavLink>
          </Nav>
          <Nav className = "ml-auto">
            <Nav.Link as = {Link} to = {{
              pathname: "/login"
            }}>Login</Nav.Link>
            <Nav.Link as = {Link} 
            to = {{
              pathname: "/logout"
            }}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;