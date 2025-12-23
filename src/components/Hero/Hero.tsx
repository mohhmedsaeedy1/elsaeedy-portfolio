import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Mohamed Elsaeedy</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I create amazing web experiences that combine beautiful design with powerful functionality.
            Let's build something great together!
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <i className="fa fa-arrow-right"></i>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
              <i className="fa fa-briefcase"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
