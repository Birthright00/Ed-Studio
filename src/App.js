import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import ImageProtection from "./components/ImageProtection";
import "./styles/atmospheric-photography.css"; // Atmospheric photography styles
import "./components/LoadingBar/loading-bar.css";
import "./components/LoadingBar/loading-bar.js";
import ScrollAnimation from "./components/ScrollAnimation/ScrollAnimation";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Initialize loading bar
    /* global ldBar */
    const loadingBar = new ldBar("#loading-bar");
    let progress = 0;

    // Simulate loading progress
    const interval = setInterval(() => {
      progress += 10;
      loadingBar.set(progress);

      if (progress >= 100) {
        clearInterval(interval); // Stop when 100% is reached
        setTimeout(() => setLoading(false), 200); // Short delay before fading out
      }
    }, 150); // Increment every 150ms

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <Router>
      <ImageProtection>
        {/* Loading overlay */}
        <div id="loading-container" className={!loading ? 'hidden' : ''}>
          <div id="loading-bar" className="ldBar label-center"></div>
        </div>

        {/* Atmospheric background */}
        <div className="atmospheric-bg"></div>
        {/* Scroll to top on route change */}
        <ScrollToTop />
        {/* Scroll animation handler */}
        <ScrollAnimation />
        {/* Main app layout */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </ImageProtection>
    </Router>
  );
}

export default App;