import React, { forwardRef, useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

const skills = [
  {
    id: 'skill-01',
    category: 'Front End',
    name: 'HTML/CSS',
    level: 95
  },
  {
    id: 'skill-02',
    category: 'Front End',
    name: 'JavaScript',
    level: 90
  },
  {
    id: 'skill-03',
    category: 'Front End',
    name: 'React',
    level: 88
  },
  {
    id: 'skill-04',
    category: 'Front End',
    name: 'Flutter',
    level: 70
  },
  {
    id: 'skill-05',
    category: 'Back End',
    name: 'Node.js',
    level: 75
  },
  {
    id: 'skill-06',
    category: 'Back End',
    name: 'SQL',
    level: 50
  },
  {
    id: 'skill-07',
    category: 'Back End',
    name: 'Python',
    level: 50
  },
  {
    id: 'skill-08',
    category: 'Other',
    name: 'UI/UX Design',
    level: 80
  },
  {
    id: 'skill-09',
    category: 'Other',
    name: 'Responsive Design',
    level: 85
  },
  {
    id: 'skill-10',
    category: 'Other',
    name: 'Java',
    level: 60
  },
  {
    id: 'skill-11',
    category: 'Other',
    name: 'C',
    level: 50
  },
  {
    id: 'skill-12',
    category: 'Other',
    name: 'Evangelion Piloting',
    level: 400
  }
];

// --- ENHANCED MAGI EVALUATION MESSAGES WITH EASTER EGGS ---
const magiEvaluationMessages = [
  'MAGI SYSTEM: NOMINAL',
  'CANDIDATE SYNC: EXCELLENT',
  'THREAT LEVEL: NONE',
  'SECURITY CLEARANCE: GRANTED',
  'SYSTEM DIAGNOSTIC: PASSED',
  'ALL SYSTEMS GREEN',
  // Easter eggs (rare/random)
  'PATTERN BLUE DETECTED... JUST KIDDING',
  'LCL LEVELS: OPTIMAL',
  'SEELE OVERRIDE: ACCESS DENIED',
  'KAWORU WAS HERE',
  'HUMAN ERROR: 0%',
  'MAGI: WAKE UP, SHINJI',
];

const skillDescriptions = {
  'HTML/CSS': 'Markup and styling, NERV-grade.',
  'JavaScript': 'Dynamic control, MAGI-compatible.',
  'React': 'Component sync: 100%.',
  'Flutter': 'Cross-platform, MAGI mobile sync.',
  'Node.js': 'Server-side, like MAGI processing.',
  'SQL': 'Relational analysis, MAGI logic.',
  'Python': 'Scripting, data, and A.T. Field logic.',
  'UI/UX Design': 'User experience, EVA cockpit comfort.',
  'Responsive Design': 'Mobile, desktop, plug suit fit.',
  'Java': 'Versatile, robust, MAGI-approved.',
  'C': 'Low-level, high performance, MAGI core.',
  // Easter egg skill
  'Evangelion Piloting': 'Sync ratio: 400%. AT Field deployed.',
};

const Skills = forwardRef((props, ref) => {
  const skillsRef = useRef([]);
  const [evalMessageIndex, setEvalMessageIndex] = useState(0);
  const [showSecretSkill, setShowSecretSkill] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [skillPercents, setSkillPercents] = useState(skills.map(() => 0));

  useEffect(() => {
    // Animate skill bars and counters
    skills.forEach((skill, index) => {
      setTimeout(() => {
        skillsRef.current[index].style.width = `${skill.level}%`;
        let start = 0;
        const end = skill.level;
        const step = () => {
          setSkillPercents(prev => {
            const updated = [...prev];
            if (updated[index] < end) {
              updated[index] = Math.min(updated[index] + 1, end);
              setTimeout(step, 12);
            }
            return updated;
          });
        };
        step();
      }, 300 + (index * 120));
    });
  }, []);

  // Cycle evaluation message every 2.7s, with a rare chance for an Easter egg
  useEffect(() => {
    const interval = setInterval(() => {
      // 1 in 7 chance for an Easter egg message
      if (Math.random() < 1/7) {
        setEvalMessageIndex(6 + Math.floor(Math.random() * 6)); // pick from Easter eggs
      } else {
        setEvalMessageIndex(idx => (idx + 1) % 6); // normal cycling
      }
    }, 2700);
    return () => clearInterval(interval);
  }, []);

  // Secret skill reveal on Konami code or click on 'MAGI SYSTEM EVALUATION' title
  useEffect(() => {
    let code = [];
    const secretCombo = [38,38,40,40,37,39,37,39,66,65]; // up up down down left right left right b a
    const handler = (e) => {
      code.push(e.keyCode);
      if (code.length > secretCombo.length) code.shift();
      if (JSON.stringify(code) === JSON.stringify(secretCombo)) {
        setShowSecretSkill(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Helper for mini MAGI indicator
  const MagiMiniIndicator = () => (
    <span className="magi-mini-dot"></span>
  );

  return (
    <section className="skills-section section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decoration">SYNCHRONIZATION</span> RATES
          </h2>
          <div className="section-subtitle">TECHNICAL CAPABILITIES ANALYSIS</div>
        </div>
        <div className="magi-system">
          <div className="magi-header">
            <div className="magi-title" onClick={() => setShowSecretSkill(true)} style={{cursor:'pointer'}}>
              MAGI SYSTEM EVALUATION
            </div>
            <div className="magi-status-lights">
              <span className="status-dot animated"></span>
              <span className="status-dot animated"></span>
              <span className="status-dot animated"></span>
            </div>
            <div className="magi-evaluation-message">
              {magiEvaluationMessages[evalMessageIndex]}
            </div>
          </div>
          <div className="skills-cards">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <div className="skill-category-card" key={categoryIndex}>
                <div className="category-header">
                  <MagiMiniIndicator />
                  <div className="category-name">{category}</div>
                  <div className="category-status">ANALYSIS: OK</div>
                </div>
                <div className="skill-list">
                  {categorySkills.map((skill, skillIndex) => {
                    const globalIndex = skills.findIndex(s => s.id === skill.id);
                    return (
                      <div 
                        className={`skill-item${hoveredSkill === skill.id ? ' skill-hovered' : ''}`}
                        key={skill.id}
                        onMouseEnter={() => setHoveredSkill(skill.id)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="skill-info">
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-percentage">
                            <span className="digital-counter">{skillPercents[globalIndex]}%</span>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            ref={el => skillsRef.current[globalIndex] = el}
                            style={{ width: '0%' }}
                          >
                            <div className="skill-scanline"></div>
                            <div className="skill-pulse-highlight"></div>
                          </div>
                          {hoveredSkill === skill.id && (
                            <div className="skill-tooltip">{skillDescriptions[skill.name]}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {/* Secret Skill Easter Egg */}
                  {showSecretSkill && (
                    <div className="skill-item skill-easter-egg">
                      <div className="skill-info">
                        <div className="skill-name">Evangelion Piloting</div>
                        <div className="skill-percentage"><span className="digital-counter">400%</span></div>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{width:'100%'}}></div>
                        <div className="skill-tooltip">{skillDescriptions['Evangelion Piloting']}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="magi-footer">
            <div className="magi-note animated-stamp">CANDIDATE DEMONSTRATES SUFFICIENT TECHNICAL APTITUDE</div>
            <div className="magi-approval animated-stamp">APPROVED BY: MAGI SYSTEM</div>
          </div>
        </div>
      </div>
      <div className="eva-pattern-bg"></div>
    </section>
  );
});

export default Skills;
