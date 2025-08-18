import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import FloatingNav from "./FloatingNav";
import BackToTop from "./BackToTop";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="tech-stack">
        <TechStackSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="footer">
        <FooterSection />
      </section>
      <BackToTop />
    </div>
  );
};

export default Portfolio;
