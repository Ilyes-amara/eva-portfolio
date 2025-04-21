import React from 'react';
import '../styles/NervHUD.css';

const NervHUD = () => {
  return (
    <div className="nerv-hud">
      {/* Top Right Corner - Social Links */}
      <div className="hud-element top-right social-links">
        <a 
          href="https://www.linkedin.com/in/ilyes-amara-850852361" 
          className="social-link linkedin"
          target="_blank" 
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-10 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.354c.586-.838 1.602-1.354 2.5-1.354 1.933 0 3.5 1.567 3.5 3.5v5.5z" />
          </svg>
        </a>
        <a 
          href="https://github.com/Ilyes-amara" 
          className="social-link github"
          target="_blank" 
          rel="noopener noreferrer"
          title="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign:'middle'}}>
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.52-4.48-10-8-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.88-13.76c-.36-.36-.95-.36-1.31 0-.36.36-.36.95 0 1.31l1.13 1.13c.36.36.95.36 1.31 0 .36-.36.36-.95 0-1.31l-1.13-1.13zm6.36 6.36c-.36-.36-.95-.36-1.31 0l-1.13 1.13c-.36.36-.36.95 0 1.31.36.36.95.36 1.31 0l1.13-1.13c.36-.36.36-.95 0-1.31zM12 17.5c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm4.24-4.24c-.36.36-.36.95 0 1.31l1.13 1.13c.36.36.95.36 1.31 0 .36-.36.36-.95 0-1.31l-1.13-1.13c-.36-.36-.95-.36-1.31 0z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NervHUD;
