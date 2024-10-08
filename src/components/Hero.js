import React from 'react';
import './Hero.css'; // Separate CSS for the hero section

function Hero({ message }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h2 className="ai-for-all">AI for ALL</h2>
        <h1>{message}</h1>
        <p>Empowering underserved students with AI skills, critical thinking, and problem-solving abilities.</p>
        {/* This will navigate to the contact section */}
        <a href="#contact" className="btn-cta">Contact Us</a>
      </div>
    </header>
  );
}

export default Hero;
