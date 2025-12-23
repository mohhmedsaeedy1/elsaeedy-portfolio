import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fa-code',
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks like React and Vue.js.'
    },
    {
      icon: 'fa-mobile',
      title: 'Mobile Apps',
      description: 'Creating cross-platform mobile applications with React Native for iOS and Android.'
    },
    {
      icon: 'fa-server',
      title: 'Backend Development',
      description: 'Developing robust APIs and server-side solutions with Node.js, Express, and databases.'
    },
    {
      icon: 'fa-database',
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries for MongoDB and SQL databases.'
    },
    {
      icon: 'fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with focus on user experience.'
    },
    {
      icon: 'fa-rocket',
      title: 'Deployment & DevOps',
      description: 'Setting up CI/CD pipelines, cloud hosting, and managing production environments.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={`fa ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
