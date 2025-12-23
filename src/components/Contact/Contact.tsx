import { useState } from 'react';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xjgbjaww', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ee163b'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#ee163b'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#ee163b'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'monaelsaeedy1980@gmail.com',
      link: 'mailto:monaelsaeedy1980@gmail.com'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+20 100 473 9684',
      link: 'tel:+201004739684'
    },
    {
      icon: 'fa-whatsapp',
      title: 'WhatsApp',
      value: '+20 100 473 9684',
      link: 'https://wa.me/201004739684'
    },
    {
      icon: 'fa-map-marker',
      title: 'Address',
      value: 'Egypt, Sharkia, Faqous',
      link: 'https://www.google.com/maps/place/Faqous,+Sharqia+Governorate,+Egypt/@30.7272,31.7982,13z'
    }
  ];

  const socialLinks = [
    { icon: 'fa-facebook', url: 'https://www.facebook.com/share/17UZ2nYxwi/' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=2g466eu' },
    { icon: 'twitter-x', url: 'https://x.com/Mohamed8558?t=8LCVh6Xi7BylGeo7wQEZDQ&s=09' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/mostafa-el-saiedy-7b1685210' },
    { icon: 'fa-github', url: 'https://github.com/mohhmedsaeedy1', label: 'GitHub' },
    { icon: 'fa-whatsapp', url: 'https://wa.me/201004739684' }
  ];

  const stats = [
    { number: '24/7', label: 'Available' },
    { number: '< 2h', label: 'Response Time' },
    { number: '100%', label: 'Satisfaction' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="contact-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send Me a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fa fa-user"></i>
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fa fa-envelope"></i>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">
                    <i className="fa fa-tag"></i>
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fa fa-comment"></i>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-description">
                Feel free to reach out through any of the following channels. I'm always happy to discuss new projects and opportunities.
              </p>
              
              <div className="info-items">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">
                      <i className={`fa ${info.icon}`}></i>
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="info-link"
                          target={info.icon === 'fa-map-marker' ? '_blank' : undefined}
                          rel={info.icon === 'fa-map-marker' ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.icon.replace('fa-', '')}
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
            </div>

            <div className="map-container">
              <h3 className="map-title">Find Me Here</h3>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.8!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiAzMcKwNDgnMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
                <div className="map-overlay">
                  <i className="fa fa-map-marker"></i>
                  <span>Faqous, Sharkia, Egypt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
