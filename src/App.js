import React, { useEffect, useState, useRef } from 'react';
import './styles/global.css';
import './styles/loading.css';
import './styles/FixedControls.css';

// Import sections
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Import components
import LoadingScreen from './components/LoadingScreen';
import SoundToggle from './components/SoundToggle';
import NervHUD from './components/NervHUD';
import ATFieldEffect from './components/ATFieldEffect';
import AngelAlert from './components/AngelAlert';
import MagiTerminal from './components/MagiTerminal';
import NervResume from './components/NervResume';

function App() {
  const [loading, setLoading] = useState(true);
  const sectionRefs = useRef({});

  useEffect(() => {
    // Simulating NERV system initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle navigation from MAGI terminal
  const handleTerminalNavigation = (sectionId) => {
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Register section refs
  const registerSectionRef = (id, ref) => {
    sectionRefs.current[id] = ref;
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loading-screen">
          <div className="nerv-logo">NERV</div>
          <div className="loading-text">
            <span className="terminal-text">Initializing EVA interface...</span>
          </div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <div className="loading-status">System status: Connecting to MAGI...</div>
        </div>
      ) : (
        <>
          <div className="hexagon-grid"></div>
          <main>
            <Hero ref={(ref) => registerSectionRef('hero', ref)} />
            <Projects ref={(ref) => registerSectionRef('projects', ref)} />
            <Skills ref={(ref) => registerSectionRef('skills', ref)} />
            <Contact ref={(ref) => registerSectionRef('contact', ref)} />
            <Footer />
            
            {/* Interactive Components */}
            <div className="fixed-controls">
              <SoundToggle />
              <NervResume />
              <MagiTerminal onNavigate={handleTerminalNavigation} />
            </div>
            <NervHUD />
            <ATFieldEffect />
            <AngelAlert />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
