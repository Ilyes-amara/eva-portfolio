import React, { useState, useEffect } from 'react';
import soundEffects from '../utils/SoundEffects';
import '../styles/SoundToggle.css';

const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  
  useEffect(() => {
    // Initialize from localStorage on component mount
    const savedMute = localStorage.getItem('eva_portfolio_muted') === 'true';
    setIsMuted(savedMute);
    
    // Initialize sound effects
    soundEffects.initialize();
    
    // Add sound effects to buttons after a short delay
    // to ensure the DOM is fully loaded
    setTimeout(() => {
      soundEffects.addButtonSounds();
    }, 1000);
    
    // Play startup sound when component mounts
    if (!savedMute) {
      setTimeout(() => {
        soundEffects.playStartupSound();
      }, 2000);
    }
  }, []);
  
  const toggleSound = () => {
    const newMuteState = soundEffects.toggleMute();
    setIsMuted(newMuteState);
    
    // Play a sound if we're unmuting
    if (!newMuteState) {
      soundEffects.play('success');
    }
  };
  
  return (
    <div className="sound-toggle" onClick={toggleSound}>
      {isMuted ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51c.66-1.24 1.03-2.65 1.03-4.15 0-4.28-2.99-7.86-7-8.76v2.05c2.89.86 5 3.54 5 6.71zm-4.27 9.3l-4.73-4.73-2.11 2.11-7.39-7.39v-2.99l5.7 5.7 1.29-1.29-5.7-5.7h-3v-6h4l5.18-5.17 1.32 1.32-5.84 5.84 1.77 1.77 7.91 7.91 1.32 1.32-1.42 1.42-1.3-1.32z"/>
          </svg>
          <span className="sound-toggle-label">SOUND OFF</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <span className="sound-toggle-label">SOUND ON</span>
        </>
      )}
    </div>
  );
};

export default SoundToggle;
