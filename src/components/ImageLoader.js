import React, { useState } from 'react';
import './ImageLoader.css';

function ImageLoader({ src, alt, sizes = "100vw", mobileSrc }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
  };

  // Create srcset if mobileSrc is provided
  const srcSet = mobileSrc ? `${mobileSrc} 480w, ${src} 800w` : null;

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
          srcSet={srcSet}
          sizes={srcSet ? sizes : null}
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