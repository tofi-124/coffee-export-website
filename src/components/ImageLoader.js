import React, { useState } from 'react';
import './ImageLoader.css';

function ImageLoader({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`image-loader ${isLoaded ? 'loaded' : ''}`}>
      {!isLoaded && (
        <div className="image-placeholder">
          <div className="loading-icon">
            <div className="coffee-bean"></div>
          </div>
        </div>
      )}
      {!isError ? (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={isLoaded ? 'fade-in' : ''}
        />
      ) : (
        <div className="image-error">
          <p>Image not available</p>
        </div>
      )}
    </div>
  );
}

export default ImageLoader;