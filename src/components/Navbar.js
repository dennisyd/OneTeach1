import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>OneTeach1</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#contact">Contact</a></li> {/* New Contact link */}
        <li><a href="#get-involved">Get Involved</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
