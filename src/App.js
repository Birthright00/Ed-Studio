import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import BookingCalendar from "./components/BookingCalender";
import "./styles/global.css"; // Optional global styles
import "./components/LoadingBar/loading-bar.css";
import "./components/LoadingBar/loading-bar.js";

function App() {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Initialize loading bar
    const loadingBar = new ldBar("#loading-bar");
    let progress = 0;

    // Simulate loading progress
    const interval = setInterval(() => {
      progress += 10;
      loadingBar.set(progress);

      if (progress >= 100) {
        clearInterval(interval); // Stop when 100% is reached
        setLoading(false); // Set loading to false
      }
    }, 300); // Increment every 300ms

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <Router>
      {/* Show loading bar while loading */}
      {loading ? (
        <div id="loading-container">
          <div id="loading-bar" className="ldBar label-center"></div>
        </div>
      ) : (
        <>
          {/* Main app layout */}
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
        </>
      )}
    </Router>
  );
}

export default App;