import * as React from "react"
import "./Navbar.css"
import Logo from "./Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo"><Logo /></div>
        <div className="socials">
          <a href="">
            <img class="social-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="twitter logo" />
          </a>
          <a href="">
            <img class="social-logo" src="https://www.stanthonyshs.org/wp-content/uploads/2018/01/instagram-logo-black-transparent.png" alt="instagram logo" />
          </a>
          <a href="">
            <img class="fb-logo" src="https://hershey-montessori.org/wp-content/uploads/2020/03/facebook-logo.png" alt="facebook logo" />
          </a>
        </div>
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
