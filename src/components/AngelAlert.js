import React, { useState, useEffect } from 'react';
import '../styles/AngelAlert.css';
import soundEffects from '../utils/SoundEffects';

const AngelAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [angelNumber, setAngelNumber] = useState(0);
  
  useEffect(() => {
    // Random alerts between 30-90 seconds
    const scheduleNextAlert = () => {
      const delay = Math.floor(Math.random() * (90000 - 30000)) + 30000;
      
      return setTimeout(() => {
        triggerAlert();
        // Schedule next alert after this one finishes
        const nextTimer = scheduleNextAlert();
        return () => clearTimeout(nextTimer);
      }, delay);
    };
    
    const timer = scheduleNextAlert();
    
    return () => clearTimeout(timer);
  }, []);
  
  const triggerAlert = () => {
    // Generate random angel number between 1 and 17
    const newAngelNumber = Math.floor(Math.random() * 17) + 1;
    setAngelNumber(newAngelNumber);
    
    // Determine alert type (pattern blue, orange, or purple)
    const alertTypes = ['blue', 'orange', 'purple'];
    const newAlertType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
    setAlertType(newAlertType);
    
    // Show alert
    setIsVisible(true);
    
    // Play alert sound
    soundEffects.play('alert');
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };
  
  // Early return if not visible
  if (!isVisible) return null;
  
  return (
    <div className={`angel-alert ${alertType}`}>
      <div className="alert-content">
        <div className="alert-header">
          <div className="alert-icon"></div>
          <div className="alert-title">PATTERN {alertType.toUpperCase()}</div>
        </div>
        <div className="alert-body">
          <div className="alert-message">
            {alertType === 'blue' ? (
              <>ANGEL DETECTED</>
            ) : alertType === 'orange' ? (
              <>CONTAMINATION RISK</>
            ) : (
              <>UNKNOWN ENTITY</>
            )}
          </div>
          <div className="alert-details">
            <span>DESIGNATION:</span> {alertType === 'blue' ? `${getOrdinal(angelNumber)} ANGEL` : 'UNIDENTIFIED'}
          </div>
          <div className="alert-action">
            DEFENSIVE SYSTEMS ENGAGED
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get ordinal suffix
const getOrdinal = (n) => {
  const suffixes = ['TH', 'ST', 'ND', 'RD'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export default AngelAlert;
