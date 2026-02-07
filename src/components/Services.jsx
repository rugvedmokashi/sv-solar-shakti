import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
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

    const elements = sectionRef.current.querySelectorAll('.service-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solar solutions for homes, businesses, and agriculture.
          </p>
          <div className="header-line"></div>
        </div>

        {/* 6-Grid Layout */}
        <div className="services-grid">
          
          {/* 1. Residential */}
          <div className="service-card">
            <div className="icon">🏠</div>
            <h3>Residential Rooftop</h3>
            <p>
              Custom-designed solar systems for independent homes and villas. 
              We maximize generation even in limited roof spaces.
            </p>
          </div>

          {/* 2. Commercial */}
          <div className="service-card">
            <div className="icon">🏢</div>
            <h3>Commercial & Industrial</h3>
            <p>
              Heavy-duty installations for factories, schools, and hospitals 
              to drastically reduce high operational electricity costs.
            </p>
          </div>

          {/* 3. Solar Water Pumps */}
          <div className="service-card">
            <div className="icon">🌾</div>
            <h3>Solar Water Pumps</h3>
            <p>
              Reliable irrigation solutions for farmers. Our solar pumps operate 
              independently of the grid, ensuring water supply during power cuts.
            </p>
          </div>

          {/* 4. Solar Water Heaters */}
          <div className="service-card">
            <div className="icon">🚿</div>
            <h3>Solar Water Heating</h3>
            <p>
              Eco-friendly hot water solutions for homes and hotels. Save on 
              electricity bills by using thermal energy for your daily needs.
            </p>
          </div>

          {/* 5. Energy Storage */}
          <div className="service-card">
            <div className="icon">🔋</div>
            <h3>Hybrid & Off-Grid Storage</h3>
            <p>
              Keep your lights on 24/7. We integrate advanced battery storage 
              systems to store excess power for use during night or blackouts.
            </p>
          </div>

          {/* 6. Operations & Maintenance */}
          <div className="service-card">
            <div className="icon">🛠️</div>
            <h3>Cleaning & AMC</h3>
            <p>
              Dust reduces efficiency by up to 30%. We offer Annual Maintenance 
              Contracts (AMC) including professional cleaning and health checks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;