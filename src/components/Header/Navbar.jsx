import React from "react";
import "./navbar.css"

const Navbar = () => {
   
    return (
        <nav className="nav-container">
          <h2 className="nav-logo">Agro 
          <span>Culture</span></h2>
          <ul className="nav-list-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">MyCart</a></li>
                <li><a href="#">Digital Market</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;