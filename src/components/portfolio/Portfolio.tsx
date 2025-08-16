import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import TechStackSection from './TechStackSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;