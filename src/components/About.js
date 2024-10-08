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
          At <strong>OneTeach1</strong>, our mission is clear: <em>to empower underserved students with AI skills, critical thinking, and problem-solving abilities</em>, preparing them to become the leaders and innovators of a rapidly evolving, technology-driven world.
        </p>
        <p>
          We believe that every student, regardless of their socioeconomic background, deserves access to the tools and knowledge needed to thrive in the 21st century. Our programs focus on integrating AI into education, helping students not just to understand the fundamentals of AI, but also to apply those skills to real-world problems.
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
