import React from 'react';
import './About.css'; // Separate CSS file for About page styling

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About OneTeach1</h1>
      </header>
      <section className="about-content">
        <p>
          At <strong>1TeachOne</strong>, we are committed to bridging the digital divide by empowering underserved students with essential AI skills and fostering critical thinking and problem-solving abilities. 
          We believe AI literacy is vital for success in an increasingly technology-driven world. By equipping students with the knowledge to harness the power of AI, we prepare them to be active participants and innovators, shaping their future.
        </p>
        <p>
          Our mission is to integrate AI into education, nurturing both digital literacy and the competencies required for academic and career success.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a world where all students, irrespective of their economic circumstances, can harness the power of AI to excel academically, gain financial acumen, and ultimately shape a brighter future. By fostering digital literacy and promoting lifelong learning, we equip the next generation to not only succeed but also to innovate and lead.
        </p>
        <h2>What We Do</h2>
        <p>
          <strong>AI Bootcamps</strong>: Our immersive bootcamps offer students hands-on training in AI, helping them to build foundational skills and apply them to real-world challenges.
        </p>
        <p>
          <strong>Mentorship Programs</strong>: We connect students with industry experts who guide them through their learning journey, helping them navigate the complexities of both academic and career opportunities.
        </p>
        <p>
          <strong>Online Learning</strong>: Our comprehensive online platform offers tutorials, videos, and resources, allowing students to learn at their own pace and on their own terms.
        </p>
      </section>
    </div>
  );
}

export default About;
