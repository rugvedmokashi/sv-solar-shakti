import React from 'react';
import './Contact.css';

const Contact = () => {
  // 1. Visual Number (Formatted for humans to read)
  const displayPhone = "+91 9373482387"; 
  
  // 2. Link Number (Pure digits for WhatsApp/Calling logic)
  // This is crucial: WhatsApp and 'tel:' links break if there are spaces or '+' signs
  const linkPhone = "919373482387"; 

  // 3. Generate the WhatsApp Link
  const whatsappLink = `https://wa.me/${linkPhone}?text=Hi%20SV%20Solar%20Shakti,%20I%20am%20interested%20in%20solar%20installation.`;

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
            {/* --- CALL US SECTION --- */}
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h3>Call Us</h3>
                {/* Made clickable for mobile users */}
                <a href={`tel:${linkPhone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {displayPhone}
                </a>
                <p className="sub-text">Mon-Sat, 9am - 7pm</p>
              </div>
            </div>

            {/* --- OFFICE ADDRESS SECTION --- */}
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h3>Our Office</h3>
                <p>Survey 50, Gujarwadi Road,</p>
                <p>Near Katraj Chowk, Pune - 411046</p>
              </div>
            </div>

            {/* --- EMAIL SECTION --- */}
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-details">
                <h3>Email Us</h3>
                <a href="mailto:info@svsolarshakti.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  info@svsolarshakti.com
                </a>
              </div>
            </div>

            {/* --- WHATSAPP BUTTON --- */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <span className="wa-icon">💬</span> Chat on WhatsApp
            </a>
          </div>

          {/* --- GOOGLE MAP --- */}
          <div className="map-wrapper">
            <iframe 
              title="SV Solar Location"
              // This URL searches for your address in Katraj, Pune
              src="https://maps.google.com/maps?q=Survey%2050%2C%20Gujarwadi%20Road%2C%20Near%20Katraj%20Chowk%2C%20Pune%20-%20411046&t=&z=15&ie=UTF8&iwloc=&output=embed"
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