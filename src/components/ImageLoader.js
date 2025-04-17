import React, { useState, useEffect } from 'react';
import './ImageLoader.css';

function ImageLoader({ src, alt, sizes = "(max-width: 768px) 100vw, 50vw", mobileSrc, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Check for mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
  };

  // Create srcset if mobileSrc is provided, otherwise use src for both
  const srcSet = mobileSrc 
    ? `${mobileSrc} 480w, ${src} 800w` 
    : `${src} 800w`;

  // Use mobileSrc for smaller screens if provided
  const imgSrc = (isMobile && mobileSrc) ? mobileSrc : src;

  return (
    <div className={`image-loader ${isLoaded ? 'loaded' : ''} ${className}`}>
      {!isLoaded && (
        <div className="image-placeholder">
          <div className="loading-icon">
            <div className="coffee-bean"></div>
          </div>
        </div>
      )}
      {!isError ? (
        <img
          src={imgSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={isLoaded ? 'fade-in' : ''}
          loading="lazy"
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