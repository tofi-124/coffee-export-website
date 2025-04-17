import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="coffee-beans">
        <div className="bean bean-1"></div>
        <div className="bean bean-2"></div>
        <div className="bean bean-3"></div>
      </div>
      <p className="loading-text">Loading</p>
    </div>
  );
}

export default LoadingSpinner;