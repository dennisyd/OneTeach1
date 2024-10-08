import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import CallToAction from './components/CallToAction';
import About from './components/About';
import ContactForm from './components/ContactForm'; // Import the ContactForm
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching API', error));
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Ensure ScrollToTop is placed inside Router */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero message={message} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Programs />
        <CallToAction />
        <ContactForm /> {/* Render the contact form at the bottom */}
        <footer>
          <p>&copy; 2024 OneTeach1. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
