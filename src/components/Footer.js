import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real implementation, this would connect to your newsletter service
    if (email.includes('@') && email.includes('.')) {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    } else {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(''), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-company">
              <h3>ETHIO COFFEE</h3>
              <p className="company-tagline">Premium Ethiopian Coffee Exporter</p>
              <div className="credentials">
                <p>ECX Licensed Exporter | Fair Trade Certified</p>
                <p>International Trade ID: ET-2025-LCE</p>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/ethiocoffeeexport" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/ethiocoffee" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/ethiocoffee" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-nav">
              <div className="footer-nav-group">
                <h4>Offerings</h4>
                <nav>
                  <Link to="/offerings">Offerings</Link>
                  <Link to="/wholesale">Export Services</Link>
                </nav>
              </div>
              
              <div className="footer-nav-group">
                <h4>Company</h4>
                <nav>
                  <Link to="/about">About Us</Link>
                  <Link to="/contact">Contact</Link>
                </nav>
              </div>
            </div>
            
            <div className="footer-contact">
              <h4>Export Office</h4>
              <address>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  Gudumale Building, Bole Road<br />
                  Jakros Area, Addis Ababa, Ethiopia
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+251911234567">+251 911 234 567</a>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:exports@ethiocoffee.com">exports@ethiocoffee.com</a>
                </p>
              </address>
            </div>
            
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to receive market updates and special offerings</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="newsletter-input-group">
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                {subscribeStatus === 'success' && (
                  <p className="subscribe-message success">Thank you for subscribing!</p>
                )}
                {subscribeStatus === 'error' && (
                  <p className="subscribe-message error">Please enter a valid email.</p>
                )}
              </form>
              <div className="certifications">
                <span>USDA Organic</span>
                <span>Fair Trade</span>
                <span>Rainforest Alliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; {currentYear} Ethio Coffee Import and Export PLC. All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
