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
    // Reset body scroll on route change if menu was open
    document.body.style.overflow = 'auto';

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  // Determine if the header should always be in the 'scrolled' state based on the path
  const alwaysScrolled = location.pathname === '/wholesale';

  // Close menu and restore body scroll if backdrop is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header className={`header ${scrolled || alwaysScrolled ? 'header-scrolled' : ''}`}>
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
                  <NavLink to="/offerings" className="nav-link">
                    Offerings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    About
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
      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
