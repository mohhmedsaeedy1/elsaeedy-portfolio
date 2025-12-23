import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Experiences from '../components/Experiences/Experiences';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experiences />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;
