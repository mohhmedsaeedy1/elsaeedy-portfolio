import './About.css';

const About = () => {
  const cards = [
    {
      icon: 'fa-user',
      title: 'Who I Am',
      description: 'Full Stack Developer with passion for creating elegant solutions to complex problems.'
    },
    {
      icon: 'fa-lightbulb-o',
      title: 'What I Do',
      description: 'Building responsive web applications using modern technologies and best practices.'
    },
    {
      icon: 'fa-rocket',
      title: 'My Goal',
      description: 'Delivering high-quality products that exceed expectations and drive business growth.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-left">
            <div className="about-image-wrapper">
              <div className="image-shape"></div>
              <img 
                src="/images/540x400.jpg" 
                alt="Mohamed Elsaeedy" 
                className="about-image"
              />
              <div className="image-badge">
                <i className="fa fa-code"></i>
                <span>Full Stack Developer</span>
              </div>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h4 className="stat-number">{stat.number}</h4>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-cards">
              {cards.map((card, index) => (
                <div key={index} className="about-card">
                  <div className="card-icon">
                    <i className={`fa ${card.icon}`}></i>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="about-text">
              <h3>Mohamed Elsaeedy</h3>
              <h4 className="subtitle">Full Stack Developer & Software Engineer</h4>
              <p>
                I'm a passionate Full Stack Developer with expertise in building modern, 
                responsive web applications. I specialize in React, Node.js, and creating 
                seamless user experiences.
              </p>
              <p>
                With a strong foundation in both front-end and back-end development, 
                I bring ideas to life through clean, efficient code and thoughtful design.
              </p>
              
              <div className="skills-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Git</span>
              </div>
              
              <div className="about-actions">
                <a href="#contact" className="btn-primary">
                  <i className="fa fa-paper-plane"></i>
                  Get In Touch
                </a>
                <a href="#portfolio" className="btn-secondary">
                  <i className="fa fa-briefcase"></i>
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
