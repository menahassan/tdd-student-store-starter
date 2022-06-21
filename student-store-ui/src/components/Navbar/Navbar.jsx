import * as React from "react"
import "./Navbar.css"
import Logo from "./Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo"><Logo /></div>
        <div className="socials"></div>
        <ul className="links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#buy">Buy Now</a></li>
        </ul>
      </div>
    </nav>
  )
}
