import { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // MaatMap
    { 
      id: 1, 
      title: 'MaatMap', 
      category: 'projects', 
      image: '/images/maatmap.png', 
      link: 'https://maatmap.in.nf/',
      dataGroup: 'projects'
    },
    { 
      id: 2, 
      title: 'MaatMap App', 
      category: 'app', 
      image: '/images/maatmap-app.png', 
      link: 'https://maatmap.in.nf/',
      dataGroup: 'app'
    },
    // GWI
    { 
      id: 3, 
      title: 'GWI App', 
      category: 'app', 
      image: '/images/gwi-app.png', 
      link: 'https://gwiconsult.com/',
      dataGroup: 'app'
    },
    { 
      id: 4, 
      title: 'GWI', 
      category: 'projects', 
      image: '/images/gwi.png', 
      link: 'https://gwiconsult.com/',
      dataGroup: 'projects'
    },
    // Clinic iMed
    { 
      id: 5, 
      title: 'Clinic iMed', 
      category: 'projects', 
      image: '/images/clinic-imed.png', 
      link: 'https://clinic.imed.oo.gd/',
      dataGroup: 'projects'
    },
    { 
      id: 6, 
      title: 'Clinic iMed App', 
      category: 'app', 
      image: '/images/clinic-imed-app.png', 
      link: 'https://clinic.imed.oo.gd/',
      dataGroup: 'app'
    },
    // Doctor iMed
    { 
      id: 7, 
      title: 'Doctor iMed', 
      category: 'projects', 
      image: '/images/doctor-imed.png', 
      link: 'https://dr.imed.oo.gd/doctor/doctor-dashboard',
      dataGroup: 'projects'
    },
    { 
      id: 8, 
      title: 'Doctor iMed App', 
      category: 'app', 
      image: '/images/doctor-imed-app.png', 
      link: 'https://dr.imed.oo.gd/doctor/doctor-dashboard',
      dataGroup: 'app'
    },
    // Kemeko
    { 
      id: 9, 
      title: 'Kemeko', 
      category: 'projects', 
      image: '/images/kemeko.png', 
      link: '#',
      dataGroup: 'projects'
    },
    { 
      id: 10, 
      title: 'Kemeko App', 
      category: 'app', 
      image: '/images/kemeko-app.png', 
      link: '#',
      dataGroup: 'app'
    },
    // Huda Alhijaz
    { 
      id: 11, 
      title: 'Huda Alhijaz', 
      category: 'projects', 
      image: '/images/hudaalhijaz.png', 
      link: 'https://hudaalhijaz.osysware.com/index',
      dataGroup: 'projects'
    },
    { 
      id: 12, 
      title: 'Huda Alhijaz App', 
      category: 'app', 
      image: '/images/hudaalhijaz-app.png', 
      link: 'https://hudaalhijaz.osysware.com/index',
      dataGroup: 'app'
    },
    // Mahareb
    { 
      id: 13, 
      title: 'Mahareb', 
      category: 'projects', 
      image: '/images/mahareb.png', 
      link: 'https://mahareb.in.nf/',
      dataGroup: 'projects'
    },
    { 
      id: 14, 
      title: 'Mahareb App', 
      category: 'app', 
      image: '/images/mahareb-app.png', 
      link: 'https://mahareb.in.nf/',
      dataGroup: 'app'
    },
    // Nuvu Concierge
    { 
      id: 15, 
      title: 'Nuvu Concierge', 
      category: 'projects', 
      image: '/images/nuvu-concierge.png', 
      link: 'https://nuvuconcierge.it.nf/',
      dataGroup: 'projects'
    },
    { 
      id: 16, 
      title: 'Nuvu Concierge App', 
      category: 'app', 
      image: '/images/nuvu-concierge-app.png', 
      link: 'https://nuvuconcierge.it.nf/',
      dataGroup: 'app'
    },
    // OSysware
    { 
      id: 17, 
      title: 'OSysware', 
      category: 'projects', 
      image: '/images/osysware.png', 
      link: 'https://osysware.com/',
      dataGroup: 'projects'
    },
    { 
      id: 18, 
      title: 'OSysware App', 
      category: 'app', 
      image: '/images/osysware-app.png', 
      link: 'https://osysware.com/',
      dataGroup: 'app'
    },
    // Patient iMed
    { 
      id: 19, 
      title: 'Patient iMed', 
      category: 'projects', 
      image: '/images/patient-imed.png', 
      link: 'https://patient.imed.oo.gd/',
      dataGroup: 'projects'
    },
    { 
      id: 20, 
      title: 'Patient iMed App', 
      category: 'app', 
      image: '/images/patient-imed-app.png', 
      link: 'https://patient.imed.oo.gd/',
      dataGroup: 'app'
    },
    // Raqeeb
    { 
      id: 21, 
      title: 'Raqeeb', 
      category: 'projects', 
      image: '/images/raqeeb.png', 
      link: 'https://raqeeb.ar.nf/',
      dataGroup: 'projects'
    },
    { 
      id: 22, 
      title: 'Raqeeb App', 
      category: 'app', 
      image: '/images/raqeeb-app.png', 
      link: 'https://raqeeb.ar.nf/',
      dataGroup: 'app'
    },
    // SCLC SA
    { 
      id: 23, 
      title: 'SCLC SA', 
      category: 'projects', 
      image: '/images/sclc-sa.png', 
      link: 'https://sclc.sa/',
      dataGroup: 'projects'
    },
    { 
      id: 24, 
      title: 'SCLC SA App', 
      category: 'app', 
      image: '/images/sclc-sa-app.png', 
      link: 'https://almaamoun.ru.nf/',
      dataGroup: 'app'
    },
    // AlMaamoun
    { 
      id: 25, 
      title: 'AlMaamoun', 
      category: 'projects', 
      image: '/images/almaamoun.png', 
      link: 'https://sclc.sa/',
      dataGroup: 'projects'
    },
    { 
      id: 26, 
      title: 'AlMaamoun App', 
      category: 'app', 
      image: '/images/almaamoun-app.png', 
      link: 'https://almaamoun.ru.nf/',
      dataGroup: 'app'
    },
    // Design Work
    { 
      id: 27, 
      title: 'Graphic Design Work', 
      category: 'design', 
      image: '/images/graphic-design-work.jpg', 
      link: '#',
      dataGroup: 'design'
    },
    { 
      id: 28, 
      title: 'Web Design Showcase', 
      category: 'design', 
      image: '/images/web-design-showcase.jpg', 
      link: '#',
      dataGroup: 'design'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Initialize Shuffle.js or similar filtering library if needed
  useEffect(() => {
    // Trigger any animations or grid reflow when filter changes
  }, [filter]);

  return (
    <section id="portfolio" className="section-padding projects-section section-1-bg">
      <div className="container">
        <div className="heading-div">
          <div className="section-title">
            <ul className="heading-icon">
              <li><img src="/images/40x40x10.png" alt="40x40x10" /></li>
              <li>
                <h2>My Projects</h2>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="span9">
          <div className="filter-options btn-group">
            <button 
              className={`btn all ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`btn all ${filter === 'projects' ? 'active' : ''}`} 
              onClick={() => setFilter('projects')}
            >
              Projects
            </button>
            <button 
              className={`btn all ${filter === 'design' ? 'active' : ''}`} 
              onClick={() => setFilter('design')}
            >
              Designs
            </button>
            <button 
              className={`btn all ${filter === 'app' ? 'active' : ''}`} 
              onClick={() => setFilter('app')}
            >
              Apps
            </button>
          </div>
        </div>

        <div id="grid" className="row galley-div portfolio effects">
          {filteredProjects.map(project => (
            <figure 
              key={project.id} 
              className="picture-item col-md-3 col-sm-6 col-xs-12 projects-div"
              data-groups={`["all","${project.dataGroup}"]`}
            >
              <div className="gallery_image picture-item__inner img">
                <img 
                  className="gallery-img gallery-img_one" 
                  alt={project.title} 
                  src={project.image} 
                />
                <div className="overlay">
                  <a 
                    href={project.image} 
                    className="expand extend-icon" 
                    data-title={project.title}
                  >
                    <i className="fa fa-search"></i>
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="expand extend-icon-two"
                  >
                    <i className="fa fa-chain-broken"></i>
                  </a>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
