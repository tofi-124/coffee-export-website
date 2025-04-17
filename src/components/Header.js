import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="announcement-bar">
        <div className="container">
          ECX Licensed Coffee Exporter | FOB & CIF Shipping Available | Full Export Documentation
        </div>
      </div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            Ethio Coffee Import and Export PLC
          </Link>
          
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-icon"></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/offerings" className={`nav-link ${location.pathname === '/offerings' ? 'active' : ''}`}>
              Offerings
            </Link>
            <Link to="/wholesale" className={`nav-link ${location.pathname === '/wholesale' ? 'active' : ''}`}>
              Export Services
            </Link>
            <Link to="/regions" className={`nav-link ${location.pathname === '/regions' ? 'active' : ''}`}>
              Origins
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>
          
          {isMenuOpen && (
            <div 
              className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
