import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // In a real implementation, this would connect to your newsletter service
    // For now, we'll just simulate a successful subscription
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
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ethio Coffee Import and Export PLC</h3>
            <p>Licensed Coffee Exporter (ECX Member)</p>
            <p>International Trade Registration: ET-2025-LCE</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/ethiocoffeeexport" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://www.instagram.com/ethiocoffee" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Export Services</h4>
            <nav>
              <Link to="/wholesale">Export Inquiry</Link>
              <Link to="/regions">Coffee Origins</Link>
              <Link to="/about">Company Profile</Link>
              <Link to="/contact">Contact Export Team</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>International Contact</h4>
            <p>Export Office:</p>
            <p>Bole Road, Addis Ababa</p>
            <p>Ethiopia</p>
            <p>Tel: +251 911 234 567</p>
            <p>WhatsApp: +251 911 234 567</p>
            <p>exports@ethiocoffeeimportexport.com</p>
          </div>

          <div className="footer-section">
            <h4>Export Credentials</h4>
            <p>ECX Member ID: ETH-2025</p>
            <p>Fair Trade Certified</p>
            <p>Rainforest Alliance</p>
            <p>USDA & EU Organic</p>
            <p>ISO 22000:2018</p>
          </div>
          
          {/* New Newsletter Subscription Section */}
          <div className="footer-section newsletter-section">
            <h4>Stay Updated</h4>
            <p>Subscribe to our monthly newsletter for market updates and special offerings</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-subscribe">Subscribe</button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="subscribe-message success">Thank you for subscribing!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="subscribe-message error">Please enter a valid email.</p>
              )}
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ethio Coffee Import and Export PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
