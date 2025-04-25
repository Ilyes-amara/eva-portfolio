import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="footer-logo">NERV</div>
            <div className="footer-tagline">For the continuation of humanity</div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-links-title">Navigation</h3>
              <ul className="footer-links-list">
                <li><a href="#hero">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="footer-links-title">Contact</h3>
              <ul className="footer-links-list">
                <li><a href="mailto:ilyesamara.me@gmail.com" className="footer-social-link">ilyesamara.me@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/ilyes-amara-850852361" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a></li>
                <li><a href="https://instagram.com/ilyesamara.me" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a></li>
                <li><span className="footer-social-link">Algeria</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} NERV | All rights reserved
          </div>
          
          <div className="nerv-warning">
            <span className="warning-icon">⚠</span>
            <span className="warning-text">CLASSIFIED INFORMATION - AUTHORIZED ACCESS ONLY</span>
          </div>
        </div>
      </div>
      
      <div className="footer-pattern"></div>
    </footer>
  );
};

export default Footer;
