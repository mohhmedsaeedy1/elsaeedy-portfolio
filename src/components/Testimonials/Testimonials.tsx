import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Lotfy ELeslemany',
      role: 'CEO, Tech Corp',
      image: '/images/150x185x1.png',
      text: 'Mohamed delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      rating: 5
    },
    {
      name: 'Sarah Ibrahim',
      role: 'Marketing Director',
      image: '/images/150x185x3.png',
      text: 'Working with Mohamed was a pleasure. He understood our requirements perfectly and delivered a modern, responsive solution.',
      rating: 5
    },
    {
      name: ' Manar Hassan',
      role: 'Product Manager',
      image: '/images/150x185x2.png',
      text: 'Highly professional and skilled developer. The project was completed on time and the quality was excellent.',
      rating: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        
        <div className="testimonials-slider">
          <button className="slider-btn prev-btn" onClick={handlePrev}>
            <i className="fa fa-chevron-left"></i>
          </button>

          <div className="testimonial-content">
            <div className="testimonial-image">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
              />
            </div>
            
            <div className="stars">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <i key={i} className="fa fa-star"></i>
              ))}
            </div>

            <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
            
            <h4 className="testimonial-name">{testimonials[activeIndex].name}</h4>
            <p className="testimonial-role">{testimonials[activeIndex].role}</p>
          </div>

          <button className="slider-btn next-btn" onClick={handleNext}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
