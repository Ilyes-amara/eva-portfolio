import React, { useEffect, useRef } from 'react';
import '../styles/ATFieldEffect.css';
import soundEffects from '../utils/SoundEffects';

const ATFieldEffect = () => {
  const fieldRef = useRef(null);
  const containerRef = useRef(null);
  const active = useRef(false);
  
  useEffect(() => {
    const container = containerRef.current;
    
    const handleMouseMove = (e) => {
      if (!fieldRef.current || !container) return;
      
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update AT Field position
      fieldRef.current.style.left = `${x}px`;
      fieldRef.current.style.top = `${y}px`;
      
      // Activate AT Field if not already active
      if (!active.current) {
        active.current = true;
        fieldRef.current.classList.add('active');
        soundEffects.play('warning');
      }
    };
    
    const handleMouseLeave = () => {
      if (!fieldRef.current) return;
      
      // Deactivate AT Field
      active.current = false;
      fieldRef.current.classList.remove('active');
    };
    
    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      // Clean up event listeners
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div className="at-field-container" ref={containerRef}>
      <div className="at-field" ref={fieldRef}>
        <div className="at-field-inner">
          <div className="at-field-hexagon"></div>
          <div className="at-field-circle"></div>
          <div className="at-field-text">A.T. FIELD</div>
        </div>
      </div>
    </div>
  );
};

export default ATFieldEffect;
