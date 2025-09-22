import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';
import './nav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="landing__nav">
        <div className="landing__nav-brand">
          <span className="landing__nav-title">
            <img src="/logos/t3logo.jpeg" alt="T3 logo" className="nav-logo" />
          </span>
        </div>

        {/* Hamburger button */}
        <button 
          className="hamburger" 
          aria-label="Toggle menu" 
          onClick={toggleMenu}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className={`landing__nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="nav__link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav__link" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/casestudy" className="nav__link" onClick={() => setMenuOpen(false)}>Case Studies</Link>
          <Link to="/solution" className="nav__link" onClick={() => setMenuOpen(false)}>Solution</Link>
          <Link to="/contact" className="nav__link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>

        <a href="#" className="nav__cta">Ready To Start </a>
      </nav>
    </div>
  );
};

export default Navbar;
