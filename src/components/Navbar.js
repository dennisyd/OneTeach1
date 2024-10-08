import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'; // Ensure the path to the image is correct
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="OneTeach1 Logo" className="large-logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
