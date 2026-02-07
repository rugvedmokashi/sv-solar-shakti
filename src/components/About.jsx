import React, { useEffect, useRef } from 'react';
import './About.css'; 

// You can use a real image, or this placeholder from Unsplash
const solarWorkerImg = "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 } 
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        
        {/* Header Section */}
        <div className="about-header animate-on-scroll fade-up">
          <h4 className="sub-heading">Our Story</h4>
          <h2 className="main-heading">New Energy. New Perspective.</h2>
          <div className="heading-line"></div>
        </div>

        <div className="about-content">
          
          {/* Left Side: Image */}
          <div className="about-image-wrapper animate-on-scroll slide-right">
            <div className="image-frame">
              <img src={solarWorkerImg} alt="Solar Engineer" className="about-img" />
            </div>
            {/* Badge changed from "Years" to "Quality Promise" */}
            <div className="experience-badge">
              <span className="years">100%</span>
              <span className="text">Commitment</span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="about-text animate-on-scroll slide-left">
            <h3 className="text-title">Building a Brighter Tomorrow, Today.</h3>
            <p className="text-body">
              <strong>SV Solar Shakti</strong> was born from a simple realization: the future of energy belongs to everyone. As a dynamic startup, we are bringing fresh energy to the solar industry, moving away from "one-size-fits-all" systems to create customized solar solution that truly fit your lifestyle.
            </p>
            <p className="text-body">
              We might be new, but our vision is bold. We are building our reputation one roof at a time, which means we treat every installation as our flagship project. We don't just sell panels; we partner with you to design a system that maximizes your savings and minimizes your carbon footprint.
            </p>

            {/* Feature List - Focus on Quality & Service */}
            <ul className="feature-list">
              <li className="feature-item">
                <span className="check-icon">✓</span> Personalized System Design
              </li>
              <li className="feature-item">
                <span className="check-icon">✓</span> Direct Access to Our Engineers
              </li>
              <li className="feature-item">
                <span className="check-icon">✓</span> Transparent Pricing (No Hidden Fees)
              </li>
            </ul>

          </div>
        </div>

        {/* Stats Grid - Replaced "Project Numbers" with "Core Values" */}
        <div className="stats-grid">
          <div className="stat-card animate-on-scroll zoom-in delay-100">
            {/* Using an Icon instead of a number helps shift focus */}
            <h3 className="stat-number">Tier-1</h3>
            <p className="stat-label">Premium Technology</p>
          </div>
          <div className="stat-card animate-on-scroll zoom-in delay-200">
            <h3 className="stat-number">24/7</h3>
            <p className="stat-label">Dedicated Support</p>
          </div>
          <div className="stat-card animate-on-scroll zoom-in delay-300">
            <h3 className="stat-number">Zero</h3>
            <p className="stat-label">Compromise on Quality</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;