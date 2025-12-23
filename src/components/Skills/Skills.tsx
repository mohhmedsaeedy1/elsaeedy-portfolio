import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'React', percentage: 88 },
        { name: 'TypeScript', percentage: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 87 },
        { name: 'Express', percentage: 85 },
        { name: 'MongoDB', percentage: 82 },
        { name: 'SQL', percentage: 80 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', percentage: 92 },
        { name: 'Docker', percentage: 75 },
        { name: 'AWS', percentage: 70 },
        { name: 'UI/UX', percentage: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skills-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
