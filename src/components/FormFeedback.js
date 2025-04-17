import React from 'react';
import './FormFeedback.css';

function FormFeedback({ type, message }) {
  const icons = {
    success: '✓',
    error: '!',
    info: 'i'
  };

  return (
    <div className={`form-feedback ${type}`}>
      <span className="feedback-icon">{icons[type]}</span>
      <p className="feedback-message">{message}</p>
      {type === 'success' && (
        <p className="feedback-followup">
          Our export team typically responds within 24 hours during business days.
        </p>
      )}
    </div>
  );
}

export default FormFeedback;