import React, { useEffect, useState } from 'react';
import '../styles/loading.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Initializing MAGI system...');
  
  useEffect(() => {
    const messages = [
      'Initializing MAGI system...',
      'Connecting to Terminal Dogma...',
      'Synchronizing with EVA units...',
      'Establishing A.T. Field...',
      'Loading pilot data...',
      'NERV systems online.'
    ];
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < messages.length) {
        setStatusMessage(messages[currentStep]);
        setProgress(Math.min(100, (currentStep + 1) * (100 / messages.length)));
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (onLoadComplete) onLoadComplete();
        }, 500);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);
  
  return (
    <div className="loading-screen">
      <div className="nerv-logo">NERV</div>
      <div className="loading-text">
        <span className="terminal-text">{statusMessage}</span>
      </div>
      <div className="loading-bar">
        <div 
          className="loading-progress" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="loading-status">System status: {progress === 100 ? 'Ready' : 'Booting...'}</div>
    </div>
  );
};

export default LoadingScreen;
