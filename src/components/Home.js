import logo from "../logo.svg"
import React from "react"

import "../css/Home.css"

function Home()
{
    return (
        <div className="Home">
        <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
                Stardew Valley = Poggers
            </p>
            <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
        </div>
    )
}

export default Home