import React, { useState } from 'react';
import './Programs.css'; // Separate CSS for styling

function Programs() {
  // State to track the selected program
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Toggle selected program
  const toggleProgram = (program) => {
    setSelectedProgram(selectedProgram === program ? null : program); // Collapse if clicked again
  };

  return (
    <section id="programs" className="section">
      <h2>Programs</h2>
      <div className="card-grid">
        {/* AI Bootcamp */}
        <div
          className={`card ${selectedProgram === 'aiBootcamp' ? 'selected' : ''}`}
          onClick={() => toggleProgram('aiBootcamp')}
        >
          <h3>AI Bootcamp</h3>
          {selectedProgram === 'aiBootcamp' && (
            <div className="program-description">
              <p><strong>Key Features:</strong></p>
              <ul>
                <li>Foundational knowledge in AI concepts (ML, NLP, CV).</li>
                <li>Hands-on projects using Python, TensorFlow, and PyTorch.</li>
                <li>Real-world applications in finance, healthcare, and more.</li>
                <li>Career mentoring and guidance from AI professionals.</li>
              </ul>
              <p><strong>Who Should Enroll:</strong> Aspiring data scientists, developers, or professionals looking to enhance their AI skills.</p>
            </div>
          )}
        </div>

        {/* Mentorship Program */}
        <div
          className={`card ${selectedProgram === 'mentorship' ? 'selected' : ''}`}
          onClick={() => toggleProgram('mentorship')}
        >
          <h3>Mentorship Program</h3>
          {selectedProgram === 'mentorship' && (
            <div className="program-description">
              <p><strong>Key Benefits:</strong></p>
              <ul>
                <li>One-on-one mentorship from AI professionals.</li>
                <li>Career development advice, including job search strategies.</li>
                <li>Feedback on AI projects for real-world implementation.</li>
                <li>Networking opportunities with industry leaders.</li>
              </ul>
              <p><strong>Ideal For:</strong> Students or professionals looking for personalized guidance in AI.</p>
            </div>
          )}
        </div>

        {/* Online Learning */}
        <div
          className={`card ${selectedProgram === 'onlineLearning' ? 'selected' : ''}`}
          onClick={() => toggleProgram('onlineLearning')}
        >
          <h3>Online Learning Platform</h3>
          {selectedProgram === 'onlineLearning' && (
            <div className="program-description">
              <p><strong>Course Offerings:</strong></p>
              <ul>
                <li>AI fundamentals: Machine learning, neural networks, and data processing.</li>
                <li>Advanced AI topics like deep learning and NLP.</li>
                <li>Specialized courses for different industries.</li>
                <li>Hands-on coding exercises with real-world datasets.</li>
              </ul>
              <p><strong>Learning Resources:</strong> Video tutorials, webinars, and discussion forums for peer learning.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Programs;
