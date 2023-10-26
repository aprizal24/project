import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '/Users/rian/Documents/MyDoc/Semester 5/project/src/components/Navbar.jsx';
import Footer from '/Users/rian/Documents/MyDoc/Semester 5/project/src/components/Footer.jsx';
import Home from '/Users/rian/Documents/MyDoc/Semester 5/project/src/pages/Home.jsx';
import AboutUs from '/Users/rian/Documents/MyDoc/Semester 5/project/src/pages/AboutUs.jsx';
import Contact from '/Users/rian/Documents/MyDoc/Semester 5/project/src/pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
