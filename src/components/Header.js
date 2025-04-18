import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Close menu when route changes
    setIsMenuOpen(false);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <div className="announcement-bar">
        <div className="container">
          <p>Direct trade with reliable supply chain from Ethiopia's finest coffee regions</p>
        </div>
      </div>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <div className="header-logo">
              <Link to="/" className="logo">
                <span className="logo-text">ETHIO COFFEE</span>
              </Link>
            </div>

            <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
              <ul className="nav-list">
                <li>
                  <NavLink to="/regions" className="nav-link">
                    Coffee Origins
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/offerings" className="nav-link">
                    Our Offerings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education" className="nav-link">
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-action">
                  <NavLink to="/wholesale" className="btn btn-primary">
                    Export Inquiry
                  </NavLink>
                </li>
              </ul>

              <div className="mobile-contact">
                <p><strong>Export Office:</strong> +251 911 234 567</p>
                <p><a href="mailto:exports@ethiocoffeeimportexport.com">exports@ethiocoffeeimportexport.com</a></p>
                <div className="mobile-social">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </nav>

            <button
              className={`mobile-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
    </>
  );
}

export default Header;
