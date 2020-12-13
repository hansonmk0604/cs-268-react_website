import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from "react-router-dom";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link}
                          to={{
                              pathname: "/"
                          }}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link}
                              to={{
                                  pathname: "/about"
                              }}>About</Nav.Link>
                    <Nav.Link as={Link}
                              to={{
                                  pathname: "/contact"
                              }}>Contact</Nav.Link>
                    <Nav.Link as={Link}
                              to={{
                                  pathname: "/forum"
                              }}>Forums</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to={{
                        pathname: "/login"
                    }}>Login</Nav.Link>
                    <Nav.Link as={Link}
                              to={{
                                  pathname: "/logout"
                              }}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;