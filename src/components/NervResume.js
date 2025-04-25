import React, { useState } from 'react';
import '../styles/NervResume.css';
import soundEffects from '../utils/SoundEffects';

const NervResume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const toggleResume = () => {
    setIsOpen(!isOpen);
    soundEffects.play(isOpen ? 'click' : 'warning');
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    soundEffects.play('hover');
  };
  
  const handleDownload = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/ilyes.pdf';
    link.download = 'ilyes.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    soundEffects.play('success');
  };
  
  // --- SKILLS DATA (imported from Skills.js for consistency) ---
  const skills = [
    { id: 'skill-01', category: 'Front End', name: 'HTML/CSS', level: 95 },
    { id: 'skill-02', category: 'Front End', name: 'JavaScript', level: 90 },
    { id: 'skill-03', category: 'Front End', name: 'React', level: 88 },
    { id: 'skill-04', category: 'Front End', name: 'Flutter', level: 70 },
    { id: 'skill-05', category: 'Back End', name: 'Node.js', level: 75 },
    { id: 'skill-06', category: 'Back End', name: 'SQL', level: 50 },
    { id: 'skill-07', category: 'Back End', name: 'Python', level: 50 },
    { id: 'skill-08', category: 'Other', name: 'UI/UX Design', level: 80 },
    { id: 'skill-09', category: 'Other', name: 'Responsive Design', level: 85 },
    { id: 'skill-10', category: 'Other', name: 'Java', level: 60 },
    { id: 'skill-11', category: 'Other', name: 'C', level: 50 },
    { id: 'skill-12', category: 'Other', name: 'Evangelion Piloting', level: 400 },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <>
      <button className="resume-toggle" onClick={toggleResume}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M9,13V19H7V13H9M15,15V19H17V15H15M11,11V19H13V11H11Z" />
        </svg>
        <span>PERSONNEL FILE</span>
      </button>
      
      <div className={`nerv-resume ${isOpen ? 'open' : ''}`}>
        <div className="resume-header">
          <div className="resume-title">
            <div className="nerv-logo-small">NERV</div>
            <div className="title-text">PERSONNEL FILE</div>
          </div>
          <div className="resume-controls">
            <button className="download-button" onClick={handleDownload}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
              <span>DOWNLOAD</span>
            </button>
            <button className="close-button" onClick={toggleResume}>×</button>
          </div>
        </div>
        
        <div className="resume-content">
          <div className="resume-tabs">
            <button 
              className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => handleTabChange('profile')}
            >
              PROFILE
            </button>
            <button 
              className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => handleTabChange('skills')}
            >
              SKILLS
            </button>
            <button 
              className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => handleTabChange('experience')}
            >
              EXPERIENCE
            </button>
            <button 
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => handleTabChange('education')}
            >
              EDUCATION
            </button>
          </div>
          
          <div className="resume-tab-content">
            {activeTab === 'profile' && (
              <div className="profile-content">
                <div className="profile-header">
                  <div className="profile-image">
                    <div className="profile-placeholder">
                      <span>ID PHOTO</span>
                    </div>
                  </div>
                  <div className="profile-info">
                    <h2 className="profile-name">PILOT NAME: Ilyes Amara</h2>
                    <div className="profile-designation">Technical Operations Director</div>
                    <div className="profile-id">ID: NERV-042</div>
                    <div className="profile-clearance">CLEARANCE: LEVEL 4</div>
                    <div className="profile-status">STATUS: ACTIVE</div>
                  </div>
                </div>
                
                <div className="profile-details">
                  <div className="detail-section">
                    <h3 className="section-title">PERSONAL DATA</h3>
                    <div className="detail-row">
                      <span className="detail-label">AGE:</span>
                      <span className="detail-value">20</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">NATIONALITY:</span>
                      <span className="detail-value">Algerian</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">LOCATION:</span>
                      <span className="detail-value">Annaba, Algeria</span>
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h3 className="section-title">CONTACT INFORMATION</h3>
                    <div className="detail-row">
                      <span className="detail-label">EMAIL:</span>
                      <span className="detail-value">ilyesamara.me@gmail.com</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">PHONE:</span>
                      <span className="detail-value">—</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">WEBSITE:</span>
                      <span className="detail-value">ilyesamara.me</span>
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h3 className="section-title">PROFILE SUMMARY</h3>
                    <p className="profile-summary">
                      Welcome to NERV. I'm Ilyes Amara, a Computer Science undergraduate at Badji Mokhtar University (2022-2025) in Annaba, Algeria.<br />
                      My technical skills include HTML/CSS, JavaScript, React, Flutter, Node.js, SQL, Python, UI/UX Design, Responsive Design, Java, and C.<br />
                      Experience: Much like Shinji Ikari, I have yet to gain real-world battle experience—but I am ready to synchronize and face any challenge!
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'skills' && (
              <div className="skills-content">
                <div className="skills-header">
                  <h2>TECHNICAL CAPABILITIES</h2>
                  <div className="sync-rate">SYNCHRONIZATION RATE: 89.7%</div>
                </div>
                <div className="skills-categories">
                  {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div className="skill-category" key={category}>
                      <h3 className="category-title">{category.toUpperCase()}</h3>
                      <div className="skill-bars">
                        {categorySkills.map(skill => (
                          <div className="skill-item" key={skill.id}>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar">
                              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                              <div className="skill-percentage">{skill.level}%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'experience' && (
              <div className="experience-content">
                <h2 className="experience-header">MISSION HISTORY</h2>
                
                <div className="experience-timeline">
                  <div className="experience-item">
                    <div className="experience-date">2023 - PRESENT</div>
                    <div className="experience-details">
                      <h3 className="experience-title">Entry-Level Developer</h3>
                      <div className="experience-company">NERV HQ (Still waiting for my first Angel...)</div>
                      <ul className="experience-responsibilities">
                        <li>Synchronizing with IDEs and Evangelions—still at 0% sync ratio (but hopeful!)</li>
                        <li>Specializing in avoiding Angel attacks and imposter syndrome</li>
                        <li>Successfully pressed the “Run” button without causing Third Impact</li>
                        <li>Teamwork: Can pilot an Eva, but prefers not to (just like Shinji)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="experience-item">
                    <div className="experience-date">2018 - 2023</div>
                    <div className="experience-details">
                      <h3 className="experience-title">Aspiring Coder</h3>
                      <div className="experience-company">Classroom, Annaba</div>
                      <ul className="experience-responsibilities">
                        <li>Debugged code and existential questions (success rate: variable)</li>
                        <li>Practiced “Hello, World!” in multiple languages and realities</li>
                        <li>Mastered the art of procrastination and coffee brewing</li>
                        <li>Waiting for Gendo to call with my first real mission</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="experience-note" style={{marginTop:'1.5rem', color:'#FF4800', fontFamily:'var(--font-mono)', textAlign:'center'}}>
                  Like Shinji Ikari, I have yet to gain real-world battle experience... but at least I show up when called (most of the time)!
                </div>
              </div>
            )}
            
            {activeTab === 'education' && (
              <div className="education-content">
                <h2 className="education-header">TRAINING & CERTIFICATION</h2>
                
                <div className="education-timeline">
                  <div className="education-item">
                    <div className="education-date">2022 - 2025</div>
                    <div className="education-details">
                      <h3 className="education-degree">Bachelor in Computer Science</h3>
                      <div className="education-institution">Badji Mokhtar University, Annaba</div>
                      <div className="education-description">
                        Currently pursuing a Bachelor degree in Computer Science. Focused on software engineering, web development, and Evangelion references.<br/>
                        Expected graduation: 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="resume-footer">
          <div className="classification">CLASSIFIED INFORMATION - NERV PERSONNEL ONLY</div>
          <div className="footer-note">Authorized by Commander Ikari</div>
        </div>
      </div>
    </>
  );
};

export default NervResume;
