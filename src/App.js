import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import BookingCalendar from './components/BookingCalender';
import './styles/global.css'; // Optional global styles

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<BookingCalendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
