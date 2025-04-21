import React, { useState, forwardRef } from 'react';
import '../styles/Projects.css';

// Sample project data
const projects = [
  {
    id: 'eva-00',
    title: 'EVA Unit-01',
    description: 'A responsive web application with advanced UI components and animations. Built with React and styled-components.',
    category: 'Frontend',
    status: 'Production',
    technologies: ['React', 'styled-components', 'Framer Motion'],
    image: '/resources/eva 1.webp',
    link: '#'
  },
  {
    id: 'eva-01',
    title: 'MAGI System',
    description: 'Backend infrastructure with microservices architecture. Handles data processing and API endpoints.',
    category: 'Backend',
    status: 'Production',
    technologies: ['Node.js', 'Express', 'Docker', 'Redis'],
    image: '/resources/eva2.webp',
    link: '#'
  },
  {
    id: 'eva-02',
    title: 'AT Field Shield',
    description: 'Cybersecurity solution with advanced threat detection and prevention capabilities.',
    category: 'Security',
    status: 'Production',
    technologies: ['Python', 'TensorFlow', 'AWS', 'Kubernetes'],
    image: '/resources/eva3.webp',
    link: '#'
  },
  {
    id: 'eva-03',
    title: 'Terminal Dogma',
    description: 'Data visualization dashboard with real-time updates and interactive charts.',
    category: 'Data',
    status: 'Development',
    technologies: ['D3.js', 'React', 'GraphQL', 'Firebase'],
    image: '/resources/eva 4.png',
    link: '#'
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
              
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
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
