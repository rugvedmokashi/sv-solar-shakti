import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../assets/Logo.jpg'; // 1. Import the image here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-wrapper">
          
          {/* Logo Area */}
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            {/* 2. Use the imported image variable here */}
            <img src={logoImg} alt="SV Solar Shakti" className="logo-img" />
            
            {/* Optional: You can keep or remove this text since your logo has text */}
            <span className="logo-text">
              Solar <span className="logo-highlight">Shakti</span>
            </span>
          </div>

          {/* ... rest of your Navbar code (Menu items, etc) ... */}
          
          <div className="nav-menu-center">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Our Services</button>
          </div>

          <div className="nav-cta-right">
            <button onClick={() => scrollToSection('contact')} className="nav-cta">Contact</button>
          </div>

          <div className="nav-mobile-toggle">
            <button onClick={() => setIsOpen(!isOpen)} className="toggle-btn">
              <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-menu-mobile ${isOpen ? 'is-open' : ''}`}>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('services')}>Our Services</button>
        <button onClick={() => scrollToSection('contact')} className="mobile-cta">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;