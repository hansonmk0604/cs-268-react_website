import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {useStoreState} from "pullstate";
import {UserInfo} from "./components/UserInfo";

function NavBar() {
    const userInfoState = useStoreState(UserInfo)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href = '/'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href = "/about">About</Nav.Link>
                    <Nav.Link href = "/forum">Forums</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {!userInfoState.userLoggedIn && (
                        <Nav.Link href = '/login'>Login</Nav.Link>
                    )}
                    {!userInfoState.userLoggedIn && (
                        <Nav.Link href = '/signup'>Sign Up</Nav.Link>
                    )}
                    {userInfoState.userLoggedIn && (
                        <Nav.Link href = '/logout'>Logout</Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;