import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">portfolio</a>
      <nav className="navbar">
        {/* <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#contact">Contact</a> */}
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/about">
          <a> About</a>
        </Link>
        <Link to="/service">
          <a> Service</a>
        </Link>
        <Link to="/skills">
          <a>Skills</a>
        </Link>
        <Link to="/project">
          <a>Project</a>
        </Link>
        <Link to="/contact">
          <a> Contact</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
