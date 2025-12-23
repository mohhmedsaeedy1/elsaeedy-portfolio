import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of enterprise web applications using React, Node.js, and MongoDB. Mentoring junior developers and implementing best practices.'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and project managers.'
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'Startup Inc',
      description: 'Built responsive user interfaces and implemented pixel-perfect designs. Worked with React, Vue.js, and modern CSS frameworks.'
    },
    {
      year: '2018 - 2019',
      title: 'Junior Developer',
      company: 'Web Solutions',
      description: 'Started career building websites and learning full stack development fundamentals. Gained experience in HTML, CSS, JavaScript, and PHP.'
    }
  ];

  return (
    <section id="experiences" className="experiences-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{exp.year}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
