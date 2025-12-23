import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/share/17UZ2nYxwi/', label: 'Facebook' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=2g466eu', label: 'Instagram' },
    { icon: 'twitter-x', url: 'https://x.com/Mohamed8558?t=8LCVh6Xi7BylGeo7wQEZDQ&s=09', label: 'Twitter' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/mostafa-el-saiedy-7b1685210', label: 'LinkedIn' },
    { icon: 'fa-github', url: 'https://github.com/mohhmedsaeedy1', label: 'GitHub' },
    { icon: 'fa-whatsapp', url: 'https://wa.me/201004739684', label: 'WhatsApp' }
  ];

  const quickLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' }
  ];

  const services = [
    { text: 'Web Development' },
    { text: 'Mobile Apps' },
    { text: 'Software Architecture' },
    { text: 'Database Design' },
    { text: 'API Development' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about-footer">
            <h3 className="footer-logo">
              MOHAMED <span className="highlight">ELSAEEDY</span>
            </h3>
            <p className="footer-subtitle">
              FULL STACK DEVELOPER & SOFTWARE ENGINEER
            </p>
            <p className="footer-description">
              Passionate about creating innovative solutions with modern technologies. 
              Specialized in web development, mobile applications, and software architecture.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon === 'twitter-x' ? (
                    <svg width="16" height="16" viewBox="0 0 300 300" fill="currentColor">
                      <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59H300M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                    </svg>
                  ) : (
                    <i className={`fa ${social.icon}`}></i>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section quick-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="footer-link"
                  >
                    <i className="fa fa-angle-right"></i> {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section services-footer">
            <h4 className="footer-title">Services</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <div className="footer-link">
                    <i className="fa fa-angle-right"></i> {service.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section contact-footer">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="contact-list">
              <li>
                <i className="fa fa-map-marker"></i>
                <div
  onClick={() =>
    window.open(
      'https://www.google.com/maps/place/Faqous,+Sharqia+Governorate,+Egypt/@30.7272,31.7982,13z',
      '_blank'
    )
  }
  style={{
    cursor: 'pointer'
  }}
>
  <strong>Address</strong>
  <span>Egypt, Sharkia, Faqous</span>
</div>

              </li>
              <li>
                <i className="fa fa-phone"></i>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+201004739684">+20 100 473 9684</a>
                </div>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:monaelsaeedy1980@gmail.com">monaelsaeedy1980@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} MOHAMED ELSAEEDY. ALL RIGHTS RESERVED.
          </p>
          <div className="footer-links">
            <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms" className="footer-bottom-link">Terms of Service</a>
            <span className="separator">|</span>
            <a href="#support" className="footer-bottom-link">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
