import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href = "/about">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href = "/login">Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href = "/signup">Signup</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href = "/contact">Contact</NavLink>
            </NavItem>
            {/*<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>*/}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;



/*import React from "react"
import "./css/NavBar.css"

import { NavLink } from 'react-router-dom'

function NavBar()
{
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