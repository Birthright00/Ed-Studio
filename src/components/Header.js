import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className={`minimal-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="logo-minimal">
          Ed Studio
        </Link>
        <nav>
          <ul className="nav-links-minimal">
            <li>
              <Link to="/" className={`nav-link-minimal ${isActive('/')}`}>Home</Link>
            </li>
            <li>
              <Link to="/portfolio" className={`nav-link-minimal ${isActive('/portfolio')}`}>Portfolio</Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link-minimal ${isActive('/about')}`}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link-minimal ${isActive('/contact')}`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;