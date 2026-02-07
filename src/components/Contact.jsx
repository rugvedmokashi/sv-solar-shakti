import React from 'react';
import './Contact.css';

const Contact = () => {
  const phoneNumber = "+91 9373482387"; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi%20SV%20Solar%20Shakti,%20I%20am%20interested%20in%20solar%20installation.`;

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to switch to solar? Contact us for a free consultation.
          </p>
          <div className="header-line"></div>
        </div>

        <div className="contact-content">
          
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p className="sub-text">Mon-Sat, 9am - 7pm</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Our Office</h3>
                <p>Survey 50, Gujarwadi Road,</p>
                <p>Near Katraj Chowk, Pune - 411046</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h3>Email Us</h3>
                <p>info@svsolarshakti.com</p>
              </div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <span className="wa-icon">💬</span> Chat on WhatsApp
            </a>
          </div>

          <div className="map-wrapper">
            {/* CORRECTED LINK EXPLANATION:
               1. Base URL: https://maps.google.com/maps
               2. q=... : This contains your EXACT address + (Business Name) to force the pin label.
               3. output=embed : Forces it to display as a widget.
               4. z=15 : Sets zoom level so it's not too far out.
            */}
            <iframe 
              title="SV Solar Location"
              src="https://maps.google.com/maps?q=Survey%2050%2C%20Gujarwadi%20Road%2C%20Near%20Katraj%20Chowk%2C%20Pune%20-%20411046%20(SV%20Solar%20Shakti)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} SV Solar Shakti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;