import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`minimal-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="logo-minimal">
          Ed Studio
        </Link>
        <nav>
          <ul className="nav-links-minimal">
            <li>
              <Link to="/" className="nav-link-minimal">Home</Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link-minimal">Portfolio</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link-minimal">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link-minimal">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;