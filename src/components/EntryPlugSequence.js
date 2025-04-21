import React, { useState, useEffect } from 'react';
import '../styles/EntryPlugSequence.css';
import soundEffects from '../utils/SoundEffects';

const EntryPlugSequence = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSequence, setShowSequence] = useState(true);
  
  const sequenceSteps = [
    { text: 'INITIALIZING ENTRY PLUG SYSTEMS', duration: 2000 },
    { text: 'LCL PRESSURE NOMINAL', duration: 1500 },
    { text: 'NEURAL CONNECTIONS: ONLINE', duration: 1500 },
    { text: 'SYNCHRONIZATION RATE: RISING', duration: 1500 },
    { text: 'A10 NERVE CONNECTIONS: ESTABLISHED', duration: 1500 },
    { text: 'PILOT LINK-UP: SUCCESSFUL', duration: 1500 },
    { text: 'EVANGELION UNIT: ACTIVATED', duration: 2000 },
    { text: 'LAUNCHING...', duration: 2500 }
  ];
  
  useEffect(() => {
    // Play startup sound
    soundEffects.play('startup');
    
    // Progress through sequence steps
    if (currentStep < sequenceSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prevStep => prevStep + 1);
        
        // Play sound effect on step change
        if (currentStep < sequenceSteps.length - 1) {
          soundEffects.play('click');
        } else {
          soundEffects.play('success');
        }
      }, sequenceSteps[currentStep].duration);
      
      return () => clearTimeout(timer);
    } else {
      // Sequence complete, fade out
      const timer = setTimeout(() => {
        setShowSequence(false);
        
        // Call onComplete after animation finishes
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);
  
  // Calculate progress percentage
  const progress = Math.min(100, (currentStep / sequenceSteps.length) * 100);
  
  return (
    <div className={`entry-plug-sequence ${!showSequence ? 'fade-out' : ''}`}>
      <div className="sequence-container">
        <div className="nerv-logo-large">NERV</div>
        
        <div className="sequence-status">
          <div className="status-header">ENTRY PLUG SEQUENCE</div>
          
          <div className="status-steps">
            {sequenceSteps.map((step, index) => (
              <div 
                key={index} 
                className={`status-step ${index < currentStep ? 'completed' : index === currentStep ? 'active' : ''}`}
              >
                <div className="step-indicator"></div>
                <div className="step-text">{step.text}</div>
              </div>
            ))}
          </div>
          
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-percentage">{Math.round(progress)}%</div>
          </div>
        </div>
        
        <div className="eva-silhouette">
          <div className={`eva-glow ${currentStep >= sequenceSteps.length - 1 ? 'active' : ''}`}></div>
        </div>
        
        <div className="sequence-warning">
          <div className="warning-text">FOR NERV PERSONNEL USE ONLY</div>
        </div>
      </div>
    </div>
  );
};

export default EntryPlugSequence;
