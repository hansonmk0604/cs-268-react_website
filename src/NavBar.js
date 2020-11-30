import React from "react"
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

export default NavBar