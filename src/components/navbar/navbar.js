import React from 'react'
import "./navbar.css"
import { useState } from "react"


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    //
    <nav className="navigation">
      <a href="/" className="brand-name">
       James Hutchins
      </a>
      <button
        className="hamburger"
        //manage theburger click to expand the nav menu
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
      //displays the nav menu if the burger is clicked
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}