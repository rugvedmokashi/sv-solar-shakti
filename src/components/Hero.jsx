import React from 'react';
import solarVideo from '../assets/Solar Video.mp4';
import './Hero.css'; // Importing the new CSS file

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={solarVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          SV SOLAR <span className="highlight">SHAKTI</span>
        </h1>
        
        <p className="hero-description">
          Empowering your future with sustainable energy. We provide high-efficiency 
          solar solutions to light up your homes and businesses with the power of the sun.
        </p>

        <div className="hero-buttons">
          <button onClick={() => scrollTo('contact')} className="btn-primary">
            Contact us
          </button>
          <button onClick={() => scrollTo('services')} className="btn-secondary">
            Our Services
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <svg className="chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;