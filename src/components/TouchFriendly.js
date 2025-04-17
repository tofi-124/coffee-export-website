import React, { useEffect, useState } from 'react';

/**
 * TouchFriendly component enhances interaction for mobile users
 * by adding touch-specific feedback and handling gestures
 */
const TouchFriendly = ({ children, className = '', onTap = null, onLongPress = null }) => {
  const [isTouching, setIsTouching] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState(null);
  const [touchStartPos, setTouchStartPos] = useState({ x: 0, y: 0 });
  
  // Handle touch start
  const handleTouchStart = (e) => {
    setIsTouching(true);
    setTouchStartPos({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
    
    // Set timer for long press
    if (onLongPress) {
      const timer = setTimeout(() => {
        onLongPress();
      }, 500); // 500ms for long press
      
      setLongPressTimer(timer);
    }
  };
  
  // Handle touch end
  const handleTouchEnd = (e) => {
    setIsTouching(false);
    
    // Clear long press timer
    if (longPressTimer) {
      clearTimeout(longPressTimer);
    }
    
    // Call tap callback if touch didn't move much
    if (onTap) {
      onTap();
    }
  };
  
  // Handle touch move
  const handleTouchMove = (e) => {
    const currentPos = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    
    // Calculate distance moved
    const distance = Math.sqrt(
      Math.pow(currentPos.x - touchStartPos.x, 2) + 
      Math.pow(currentPos.y - touchStartPos.y, 2)
    );
    
    // If moved more than threshold, cancel long press
    if (distance > 10 && longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };
  
  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
      }
    };
  }, [longPressTimer]);
  
  return (
    <div 
      className={`touch-friendly ${isTouching ? 'touching' : ''} ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {children}
    </div>
  );
};

export default TouchFriendly;