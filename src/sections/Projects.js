import React, { useState, forwardRef } from 'react';
import '../styles/Projects.css';

// Sample project data
const projects = [
  {
    id: 'booky',
    title: 'Booky',
    description: 'A beautiful, modern Flutter app for tracking and discovering books. Features include searching books by title, author, or genre using the OpenLibrary API, trending books, personal library organization, detailed book info, genre suggestions, and a professional UI with Material 3 design.',
    category: 'Dart',
    status: 'Development',
    technologies: ['Dart', 'Flutter', 'OpenLibrary API'],
    link: 'https://github.com/Ilyes-amara/booky'
  },
  {
    id: 'myhealthguide',
    title: 'MyHealthGuide',
    description: 'A Flutter app to track and manage your health records. Features include personalized recommendations, appointment scheduling, medication reminders, health analytics, and a dashboard. Designed for easy health data management and reminders.',
    category: 'Dart',
    status: 'Development',
    technologies: ['Dart', 'Flutter'],
    link: 'https://github.com/Ilyes-amara/myhealthguide'
  },
  {
    id: 'eva-portfolio',
    title: 'Eva Portfolio',
    description: 'A personal portfolio web app built with React and Create React App. Showcases projects, skills, and contact info. Bootstrapped for easy deployment, with modern React tooling and a custom Evangelion/NERV theme.',
    category: 'JavaScript',
    status: 'Production',
    technologies: ['React', 'JavaScript', 'Create React App'],
    link: 'https://github.com/Ilyes-amara/eva-portfolio'
  }
];

const Projects = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
    
  return (
    <section className="projects-section section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="nerv-id">NERV-02</span>
            Mission Records
          </h2>
          <p className="section-subtitle">Classified Projects // Security Clearance Required</p>
        </div>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="project-card nerv-panel"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-header">
                <div className="project-id">{project.id}</div>
                <div className={`project-status ${project.status.toLowerCase()}`}>
                  {project.status}
                </div>
              </div>
              
              <div className="project-image-container nerv-svg-bg">
                <svg width="100%" height="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-svg-art">
                  <defs>
                    <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="28" height="49">
                      <g fill="#FF4800" fillOpacity="0.08">
                        <path d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5z"/>
                        <path d="M3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z"/>
                      </g>
                    </pattern>
                    <radialGradient id="pulseGradient" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#FF4800" stopOpacity="0.19">
                        <animate attributeName="stop-opacity" values="0.19;0.32;0.19" dur="2.8s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#FF4800" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="scanLine" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00FFC2" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#00FFC2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="320" height="200" fill="url(#hexPattern)" />
                  <circle cx="160" cy="100" r="80" fill="url(#pulseGradient)" />
                  <path d="M80 60 Q120 0 200 40 Q260 80 160 180 Q120 160 80 140 Q60 120 80 60 Z" fill="#FF4800" fillOpacity="0.13" />
                  <rect x="10" y="10" width="300" height="180" rx="24" fill="none" stroke="#FF4800" strokeWidth="3" />
                  <g>
                    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-display),sans-serif" fontSize="28" fill="#FF4800" opacity="0.93" style={{letterSpacing:'1.5px'}}>{project.title}</text>
                    <rect>
                      <animate attributeName="x" values="60;200;60" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="width" values="200;40;200" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="fill-opacity" values="0.12;0.24;0.12" dur="2.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="60" y="96" width="200" height="8" fill="url(#scanLine)" opacity="0.6">
                      <animate attributeName="x" values="60;200;60" dur="2.5s" repeatCount="indefinite" />
                    </rect>
                  </g>
                  <line x1="25" y1="25" x2="295" y2="25" stroke="#00FFC2" strokeWidth="2" strokeOpacity="0.18">
                    <animate attributeName="stroke-opacity" values="0.18;0.38;0.18" dur="2.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="25" y1="175" x2="295" y2="175" stroke="#00FFC2" strokeWidth="2" strokeOpacity="0.18">
                    <animate attributeName="stroke-opacity" values="0.18;0.38;0.18" dur="2.2s" repeatCount="indefinite" />
                  </line>
                  <circle cx="290" cy="40" r="10" fill="#FF4800" fillOpacity="0.09">
                    <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="160" r="8" fill="#FF4800" fillOpacity="0.07">
                    <animate attributeName="r" values="8;14;8" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <span className="view-project">View Details</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <div className="tech-title">Technologies:</div>
                  <div className="tech-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <a href={project.link} className="project-link eva-button">
                  <span className="button-text">Access Files</span>
                  <span className="button-icon">►</span>
                </a>
              </div>
              
              {hoveredProject === project.id && (
                <div className="project-scan-effect"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
