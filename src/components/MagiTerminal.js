import React, { useState, useEffect, useRef } from 'react';
import '../styles/MagiTerminal.css';
import soundEffects from '../utils/SoundEffects';

const MagiTerminal = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', content: 'MAGI System v3.0 - NERV Terminal' },
    { type: 'system', content: 'CASPER, MELCHIOR, and BALTHASAR online.' },
    { type: 'system', content: 'Type "help" for available commands.' }
  ]);
  const [magiStatus, setMagiStatus] = useState({
    casper: { status: 'online', sync: 98.7 },
    melchior: { status: 'online', sync: 97.3 },
    balthasar: { status: 'online', sync: 99.1 }
  });
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  
  // Available commands
  const commands = {
    help: {
      description: 'Display available commands',
      action: () => {
        return [
          { type: 'system', content: 'Available commands:' },
          ...Object.keys(commands).map(cmd => (
            { type: 'result', content: `${cmd} - ${commands[cmd].description}` }
          ))
        ];
      }
    },
    clear: {
      description: 'Clear terminal output',
      action: () => {
        setOutput([
          { type: 'system', content: 'Terminal cleared.' }
        ]);
        return [];
      }
    },
    home: {
      description: 'Navigate to home section',
      action: () => {
        onNavigate('hero');
        return [{ type: 'result', content: 'Navigating to home section...' }];
      }
    },
    projects: {
      description: 'Navigate to projects section',
      action: () => {
        onNavigate('projects');
        return [{ type: 'result', content: 'Navigating to projects section...' }];
      }
    },
    skills: {
      description: 'Navigate to skills section',
      action: () => {
        onNavigate('skills');
        return [{ type: 'result', content: 'Navigating to skills section...' }];
      }
    },
    contact: {
      description: 'Navigate to contact section',
      action: () => {
        onNavigate('contact');
        return [{ type: 'result', content: 'Navigating to contact section...' }];
      }
    },
    status: {
      description: 'Display MAGI system status',
      action: () => {
        const date = new Date();
        return [
          { type: 'system', content: 'MAGI System Status:' },
          { type: 'result', content: `Date: ${date.toLocaleDateString()}` },
          { type: 'result', content: `Time: ${date.toLocaleTimeString()}` },
          { type: 'result', content: `CASPER: ${magiStatus.casper.status.toUpperCase()} (Sync: ${magiStatus.casper.sync}%)` },
          { type: 'result', content: `MELCHIOR: ${magiStatus.melchior.status.toUpperCase()} (Sync: ${magiStatus.melchior.sync}%)` },
          { type: 'result', content: `BALTHASAR: ${magiStatus.balthasar.status.toUpperCase()} (Sync: ${magiStatus.balthasar.sync}%)` },
          { type: 'system', content: 'All systems operational.' }
        ];
      }
    },
    magi: {
      description: 'Run MAGI system diagnostics',
      action: () => {
        // Simulate MAGI diagnostics
        return [
          { type: 'system', content: 'Running MAGI diagnostics...' },
          { type: 'result', content: 'Checking neural connections...' },
          { type: 'result', content: 'Analyzing system integrity...' },
          { type: 'result', content: 'Verifying data consistency...' },
          { type: 'system', content: 'Diagnostics complete. MAGI system operating within normal parameters.' }
        ];
      }
    },
    sync: {
      description: 'Synchronize with MAGI system',
      action: () => {
        // Simulate synchronization
        const newSync = {
          casper: { status: 'online', sync: parseFloat((Math.random() * 5 + 95).toFixed(1)) },
          melchior: { status: 'online', sync: parseFloat((Math.random() * 5 + 95).toFixed(1)) },
          balthasar: { status: 'online', sync: parseFloat((Math.random() * 5 + 95).toFixed(1)) }
        };
        
        setMagiStatus(newSync);
        
        return [
          { type: 'system', content: 'Synchronizing with MAGI system...' },
          { type: 'result', content: 'Establishing neural connection...' },
          { type: 'result', content: 'Updating synchronization rates...' },
          { type: 'system', content: 'Synchronization complete.' },
          { type: 'result', content: `CASPER: ${newSync.casper.sync}%` },
          { type: 'result', content: `MELCHIOR: ${newSync.melchior.sync}%` },
          { type: 'result', content: `BALTHASAR: ${newSync.balthasar.sync}%` }
        ];
      }
    },
    nerv: {
      description: 'Display NERV information',
      action: () => {
        return [
          { type: 'system', content: 'NERV - Special Agency' },
          { type: 'result', content: 'Purpose: Defend humanity against Angels' },
          { type: 'result', content: 'Location: Tokyo-3, Geofront' },
          { type: 'result', content: 'Commander: Gendo Ikari' },
          { type: 'result', content: 'Vice Commander: Kozo Fuyutsuki' },
          { type: 'result', content: 'Operations Director: Misato Katsuragi' },
          { type: 'result', content: 'Chief Scientist: Ritsuko Akagi' },
          { type: 'system', content: 'God\'s in his heaven. All\'s right with the world.' }
        ];
      }
    },
    eva: {
      description: 'Display EVA unit information',
      action: () => {
        return [
          { type: 'system', content: 'Evangelion Units:' },
          { type: 'result', content: 'Unit-00: Prototype (Pilot: Rei Ayanami)' },
          { type: 'result', content: 'Unit-01: Test Type (Pilot: Shinji Ikari)' },
          { type: 'result', content: 'Unit-02: Production Type (Pilot: Asuka Langley Soryu)' },
          { type: 'system', content: 'Warning: Information classified beyond this point.' }
        ];
      }
    },
    about: {
      description: 'Display portfolio information',
      action: () => {
        return [
          { type: 'system', content: 'Portfolio Information:' },
          { type: 'result', content: 'Creator: [YOUR NAME]' },
          { type: 'result', content: 'Theme: Neon Genesis Evangelion' },
          { type: 'result', content: 'Built with: React, CSS, JavaScript' },
          { type: 'result', content: 'Inspired by: NERV interfaces and EVA aesthetics' },
          { type: 'system', content: 'Thank you for visiting!' }
        ];
      }
    },
    angel: {
      description: 'Simulate Angel detection',
      action: () => {
        const angelNumber = Math.floor(Math.random() * 17) + 1;
        return [
          { type: 'system', content: 'WARNING: PATTERN BLUE DETECTED' },
          { type: 'result', content: `Angel designation: ${angelNumber}${getOrdinal(angelNumber)}` },
          { type: 'result', content: 'Location: Tokyo-3 perimeter' },
          { type: 'result', content: 'EVA units on standby' },
          { type: 'system', content: 'ALERT: All personnel to battle stations' }
        ];
      }
    },
    launch: {
      description: 'Simulate EVA launch sequence',
      action: () => {
        return [
          { type: 'system', content: 'INITIATING EVA LAUNCH SEQUENCE' },
          { type: 'result', content: 'Entry plug inserted' },
          { type: 'result', content: 'LCL flooding entry plug' },
          { type: 'result', content: 'Establishing neural connections' },
          { type: 'result', content: 'Synchronization rate: 87.5%' },
          { type: 'result', content: 'All systems green' },
          { type: 'system', content: 'EVA LAUNCH SUCCESSFUL' }
        ];
      }
    }
  };
  
  // Toggle terminal visibility
  const toggleTerminal = () => {
    setIsOpen(!isOpen);
    soundEffects.play(isOpen ? 'click' : 'warning');
    
    // Focus input when terminal opens
    if (!isOpen) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    }
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  // Handle command submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user input to output
    const newOutput = [...output, { type: 'input', content: `> ${input}` }];
    
    // Process command
    const command = input.trim().toLowerCase();
    
    if (commands[command]) {
      // Execute valid command
      const result = commands[command].action();
      setOutput([...newOutput, ...result]);
      soundEffects.play('success');
    } else {
      // Handle unknown command
      setOutput([
        ...newOutput,
        { type: 'error', content: `Command not recognized: ${command}` },
        { type: 'system', content: 'Type "help" for available commands.' }
      ]);
      soundEffects.play('alert');
    }
    
    // Clear input
    setInput('');
    
    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 10);
  };
  
  // Auto-scroll terminal output
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);
  
  // Handle keyboard shortcut to toggle terminal (Ctrl+`)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === '`') {
        toggleTerminal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);
  
  // Simulate occasional MAGI system updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const system = ['casper', 'melchior', 'balthasar'][Math.floor(Math.random() * 3)];
        const newSync = parseFloat((Math.random() * 5 + 95).toFixed(1));
        
        setMagiStatus(prev => ({
          ...prev,
          [system]: { ...prev[system], sync: newSync }
        }));
        
        if (isOpen) {
          setOutput(prev => [
            ...prev,
            { type: 'system', content: `MAGI ${system.toUpperCase()} sync rate updated: ${newSync}%` }
          ]);
        }
      }
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, [isOpen]);
  
  return (
    <>
      <button className="terminal-toggle" onClick={toggleTerminal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H20V18M6,10L9,7L6,4V6.5L7.5,8L6,9.5V10M16,16H8V14H16V16Z" />
        </svg>
        <span>MAGI TERMINAL</span>
      </button>
      
      <div className={`magi-terminal ${isOpen ? 'open' : ''}`}>
        <div className="terminal-header">
          <div className="terminal-title">MAGI SYSTEM TERMINAL</div>
          <div className="magi-status-indicators">
            <div className={`magi-indicator ${magiStatus.casper.status}`} title={`CASPER: ${magiStatus.casper.sync}%`}>C</div>
            <div className={`magi-indicator ${magiStatus.melchior.status}`} title={`MELCHIOR: ${magiStatus.melchior.sync}%`}>M</div>
            <div className={`magi-indicator ${magiStatus.balthasar.status}`} title={`BALTHASAR: ${magiStatus.balthasar.sync}%`}>B</div>
          </div>
          <button className="terminal-close" onClick={toggleTerminal}>×</button>
        </div>
        
        <div className="terminal-output" ref={terminalRef}>
          {output.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.content}
            </div>
          ))}
        </div>
        
        <form className="terminal-input-form" onSubmit={handleSubmit}>
          <span className="terminal-prompt">MAGI&gt;</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={handleInputChange}
            ref={inputRef}
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </>
  );
};

// Helper function to get ordinal suffix
const getOrdinal = (n) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};

export default MagiTerminal;
