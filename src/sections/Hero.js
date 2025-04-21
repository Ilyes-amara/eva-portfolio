import React, { useState, useEffect, useRef, forwardRef } from 'react';
import '../styles/Hero.css';
import soundEffects from '../utils/SoundEffects';

const Hero = forwardRef((props, ref) => {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', content: '[ NERV HQ ] - MAGI System v3.0 initialized' },
    { type: 'system', content: 'CASPER, MELCHIOR, and BALTHASAR online.' },
    { type: 'system', content: 'Neural connection established. Synchronization rate: 87.2%' },
    { type: 'system', content: 'Loading pilot data...' },
    { type: 'result', content: 'Name: Ilyes Amara' },
    { type: 'result', content: 'Position: Technical Operations Director' },
    { type: 'result', content: 'Clearance Level: 4 - NERV HQ Access Granted' },
    { type: 'system', content: 'Type "help" for available commands.' }
  ]);
  const terminalBodyRef = useRef(null);
  
  const fullText = "Welcome to NERV. I'm the Technical Operations Director responsible for developing and maintaining our digital infrastructure. My expertise includes front-end development, responsive design, and creating immersive user experiences.";
  
  // Available terminal commands
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
        setTerminalOutput([
          { type: 'system', content: 'Terminal cleared.' }
        ]);
        return [];
      }
    },
    projects: {
      description: 'Navigate to projects section',
      action: () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        return [{ type: 'result', content: 'Navigating to projects section...' }];
      }
    },
    skills: {
      description: 'Navigate to skills section',
      action: () => {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
        return [{ type: 'result', content: 'Navigating to skills section...' }];
      }
    },
    contact: {
      description: 'Navigate to contact section',
      action: () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
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
          { type: 'result', content: 'CASPER: ONLINE (Sync: 98.7%)' },
          { type: 'result', content: 'MELCHIOR: ONLINE (Sync: 97.3%)' },
          { type: 'result', content: 'BALTHASAR: ONLINE (Sync: 99.1%)' },
          { type: 'system', content: 'All systems operational.' }
        ];
      }
    },
    about: {
      description: 'Display portfolio information',
      action: () => {
        return [
          { type: 'system', content: 'Portfolio Information:' },
          { type: 'result', content: 'Creator: Ilyes Amara' },
          { type: 'result', content: 'Theme: Neon Genesis Evangelion' },
          { type: 'result', content: 'Built with: React, CSS, JavaScript' },
          { type: 'result', content: 'Inspired by: NERV interfaces and EVA aesthetics' },
          { type: 'system', content: 'Thank you for visiting!' }
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
    launch: {
      description: 'Initiate EVA launch sequence',
      action: () => {
        soundEffects.play('warning');
        return [
          { type: 'system', content: 'INITIATING EVA LAUNCH SEQUENCE' },
          { type: 'result', content: 'Releasing primary locks...' },
          { type: 'result', content: 'Disengaging umbilical bridge...' },
          { type: 'result', content: 'Releasing secondary restraints...' },
          { type: 'result', content: 'Charging electromagnetic catapult...' },
          { type: 'system', content: 'EVA LAUNCH SUCCESSFUL' },
          { type: 'system', content: 'All systems nominal. Pilot sync rate: 89.7%' }
        ];
      }
    },
    angel: {
      description: 'Check Angel detection system',
      action: () => {
        soundEffects.play('alert');
        return [
          { type: 'system', content: 'ANGEL DETECTION SYSTEM' },
          { type: 'result', content: 'Scanning Tokyo-3 perimeter...' },
          { type: 'result', content: 'No pattern blue detected.' },
          { type: 'result', content: 'Last Angel encounter: 27 days ago' },
          { type: 'system', content: 'All defense systems on standby.' }
        ];
      }
    },
    sync: {
      description: 'Synchronize with MAGI system',
      action: () => {
        soundEffects.play('success');
        return [
          { type: 'system', content: 'MAGI SYNCHRONIZATION INITIATED' },
          { type: 'result', content: 'Connecting to primary neural interface...' },
          { type: 'result', content: 'Establishing A.T. field parameters...' },
          { type: 'result', content: 'Synchronization complete.' },
          { type: 'system', content: 'Current sync ratio: 92.4%' }
        ];
      }
    },
    bio: {
      description: 'Display pilot biography',
      action: () => {
        return [
          { type: 'system', content: 'PILOT BIOGRAPHY:' },
          { type: 'result', content: fullText },
          { type: 'result', content: 'Skills: Front-end Development, UI/UX Design, React, JavaScript' },
          { type: 'result', content: 'Experience: 5+ years in web development and digital design' },
          { type: 'system', content: 'For more information, use "projects" or "skills" commands.' }
        ];
      }
    }
  };
  
  // Get current time
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = currentTime.toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' });

  // Handle terminal input
  const handleTerminalInputChange = (e) => {
    setTerminalInput(e.target.value);
  };
  
  // Handle terminal command submission
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    
    if (!terminalInput.trim()) return;
    
    // Add user input to output
    const newOutput = [...terminalOutput, { type: 'input', content: `> ${terminalInput}` }];
    
    // Process command
    const command = terminalInput.trim().toLowerCase();
    
    if (commands[command]) {
      // Execute valid command
      const result = commands[command].action();
      setTerminalOutput([...newOutput, ...result]);
      soundEffects.play('success');
    } else {
      // Handle unknown command
      setTerminalOutput([
        ...newOutput,
        { type: 'error', content: `Command not recognized: ${command}` },
        { type: 'system', content: 'Type "help" for available commands.' }
      ]);
      soundEffects.play('alert');
    }
    
    // Clear input
    setTerminalInput('');
  };
  
  // Auto-scroll terminal to bottom when new content is added
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalOutput]);
  
  // Typing effect for intro text
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  // Generate random MAGI sync rates for the indicators
  const getMagiSyncRate = (base) => {
    const variation = Math.random() * 2 - 1; // -1 to +1
    return (base + variation).toFixed(1);
  };
  
  const casperSync = getMagiSyncRate(98.7);
  const melchiorSync = getMagiSyncRate(97.3);
  const balthasarSync = getMagiSyncRate(99.1);
  
  return (
    <section className="hero-section magi-screen" ref={ref}>
      <div className="magi-overlay"></div>
      <div className="magi-scanlines"></div>
      <div className="magi-screen-glow"></div>
      
      <div className="magi-screen-header">
        <div className="magi-logo">
          <span className="nerv-logo">NERV</span>
        </div>
        <div className="magi-title">MAGI SYSTEM INTERFACE</div>
        <div className="magi-datetime">
          <div className="magi-time">{formattedTime}</div>
          <div className="magi-date">{formattedDate}</div>
        </div>
      </div>
      
      <div className="magi-screen-content">
        <div className="magi-sidebar">
          <div className="magi-system-status">
            <div className="status-label">MAGI STATUS</div>
            <div className="status-item">
              <span className="status-name">CASPER</span>
              <div className="status-bar">
                <div className="status-bar-fill" style={{width: `${casperSync}%`}}></div>
              </div>
              <span className="status-value">{casperSync}%</span>
            </div>
            <div className="status-item">
              <span className="status-name">MELCHIOR</span>
              <div className="status-bar">
                <div className="status-bar-fill" style={{width: `${melchiorSync}%`}}></div>
              </div>
              <span className="status-value">{melchiorSync}%</span>
            </div>
            <div className="status-item">
              <span className="status-name">BALTHASAR</span>
              <div className="status-bar">
                <div className="status-bar-fill" style={{width: `${balthasarSync}%`}}></div>
              </div>
              <span className="status-value">{balthasarSync}%</span>
            </div>
          </div>
          
          <div className="magi-pilot-info">
            <div className="pilot-label">PILOT DATA</div>
            <div className="pilot-image">
              <div className="pilot-silhouette"></div>
            </div>
            <div className="pilot-name">Ilyes Amara</div>
            <div className="pilot-role">Technical Operations Director</div>
            <div className="pilot-clearance">Level 4 Access</div>
          </div>
        </div>
        
        <div className="magi-main">
          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control"></span>
                <span className="control"></span>
                <span className="control"></span>
              </div>
              <div className="terminal-title">MAGI COMMAND INTERFACE</div>
              <div className="magi-status-indicators">
                <div className="magi-indicator online" title={`CASPER: ${casperSync}%`}>C</div>
                <div className="magi-indicator online" title={`MELCHIOR: ${melchiorSync}%`}>M</div>
                <div className="magi-indicator online" title={`BALTHASAR: ${balthasarSync}%`}>B</div>
              </div>
            </div>
            
            <div className="terminal-body" ref={terminalBodyRef}>
              {terminalOutput.map((line, index) => (
                <div key={index} className={`terminal-line ${line.type}`}>
                  {line.content}
                </div>
              ))}
              
              <form className="terminal-input-form" onSubmit={handleTerminalSubmit}>
                <span className="terminal-prompt">MAGI&gt;</span>
                <input
                  type="text"
                  className="terminal-input"
                  value={terminalInput}
                  onChange={handleTerminalInputChange}
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="Enter command..."
                />
              </form>
            </div>
          </div>
          
          <div className="terminal-help-hint">
            <span>Try commands: bio, help, status, launch, eva, nerv, sync</span>
          </div>
        </div>
      </div>
      
      <div className="magi-screen-footer">
        <div className="footer-warning">NERV CONFIDENTIAL - AUTHORIZED ACCESS ONLY</div>
        <div className="footer-quote">God's in his heaven. All's right with the world.</div>
        <div className="footer-navigation">SCROLL DOWN FOR MORE INFORMATION</div>
      </div>
    </section>
  );
});

export default Hero;
