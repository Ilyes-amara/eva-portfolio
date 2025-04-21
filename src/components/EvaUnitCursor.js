import React, { useEffect, useRef } from 'react';
import '../styles/EvaUnitCursor.css';

const EvaUnitCursor = () => {
  const cursorRef = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  });
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Update destination position
      positionRef.current.destinationX = clientX;
      positionRef.current.destinationY = clientY;
    };
    
    // Animation loop for smooth cursor movement
    const updateCursorPosition = () => {
      const { mouseX, mouseY, destinationX, destinationY } = positionRef.current;
      
      // Calculate distance between current and destination position
      positionRef.current.distanceX = destinationX - mouseX;
      positionRef.current.distanceY = destinationY - mouseY;
      
      // Smooth movement with easing
      positionRef.current.mouseX += positionRef.current.distanceX * 0.08;
      positionRef.current.mouseY += positionRef.current.distanceY * 0.08;
      
      // Apply position to cursor element
      cursor.style.transform = `translate(${positionRef.current.mouseX}px, ${positionRef.current.mouseY}px)`;
      
      // Continue animation loop
      positionRef.current.key = requestAnimationFrame(updateCursorPosition);
    };
    
    // Start animation loop
    positionRef.current.key = requestAnimationFrame(updateCursorPosition);
    
    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      // Clean up
      cancelAnimationFrame(positionRef.current.key);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="eva-cursor" ref={cursorRef}>
      <div className="eva-cursor-unit">
        <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
          <path className="eva-unit-silhouette" d="M50,10 C45,10 40,15 40,20 L40,50 C40,55 45,60 50,60 C55,60 60,55 60,50 L60,20 C60,15 55,10 50,10 Z M35,70 L35,110 C35,115 40,120 45,120 L55,120 C60,120 65,115 65,110 L65,70 L35,70 Z M45,80 L55,80 L55,110 L45,110 L45,80 Z" />
          <path className="eva-unit-highlight" d="M50,15 C47,15 45,17 45,20 L45,50 C45,53 47,55 50,55 C53,55 55,53 55,50 L55,20 C55,17 53,15 50,15 Z" />
        </svg>
      </div>
      <div className="eva-cursor-target"></div>
    </div>
  );
};

export default EvaUnitCursor;
