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
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <Link to="/" className="logo">
              <span className="logo-text">Ethio Coffee</span>
            </Link>
          </div>

          <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/regions" className="nav-link" activeClassName="active">
                  Regions
                </NavLink>
              </li>
              <li>
                <NavLink to="/offerings" className="nav-link" activeClassName="active">
                  Our Offerings
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/education" className="nav-link" activeClassName="active">
                  Coffee Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                  Contact
                </NavLink>
              </li>
              <li className="nav-action">
                <NavLink to="/wholesale" className="btn btn-primary">
                  Export Inquiry
                </NavLink>
              </li>
            </ul>
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
  );
}

export default Header;
