import React from 'react';
import './CallToAction.css'; // Separate CSS for the CTA section

function CallToAction() {
  return (
    <section id="contact" className="cta-section">
      <h2>Get Involved</h2>
      <p>Join us in empowering the next generation. Become a volunteer or donate to support our mission.</p>
      <a href="#contact" className="btn-cta">Contact Us</a>
    </section>
  );
}

export default CallToAction;
