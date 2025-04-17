import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
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
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ethio Coffee Import and Export PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
