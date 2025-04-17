import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

function PageTransition() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Use shorter transition duration on mobile
    const duration = isMobile ? 300 : 500;
    
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location, isMobile]);

  if (!isTransitioning) return null;

  return (
    <div className={`page-transition ${isMobile ? 'mobile' : ''}`}>
      <div className="transition-overlay">
        <div className="coffee-loader">
          <div className="bean"></div>
        </div>
      </div>
    </div>
  );
}

export default PageTransition;