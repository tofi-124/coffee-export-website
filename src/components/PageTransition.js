import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

function PageTransition() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  if (!isTransitioning) return null;

  return (
    <div className="page-transition">
      <div className="transition-overlay">
        <div className="coffee-loader">
          <div className="bean"></div>
        </div>
      </div>
    </div>
  );
}

export default PageTransition;