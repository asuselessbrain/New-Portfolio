import Hero from '../components/Hero';
import About from '../components/About';
import SkillsSlider from '../components/SkillsSlider';
import FeaturedProjects from '../components/FeaturedProjects';
import Blog from '../components/Blog';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <SkillsSlider />
      <FeaturedProjects />
      <Blog />
      <ContactSection />
    </div>
  );
};

export default Home;