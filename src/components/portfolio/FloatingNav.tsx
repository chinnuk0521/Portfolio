import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentSection, setCurrentSection] = useState('hero');
  const { scrollToSection } = useSmoothScroll();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech-stack', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down 100px
      setIsVisible(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const newActiveSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (newActiveSection) {
        setActiveSection(newActiveSection);
      }

      // Determine current section for color switching
      const heroSection = document.getElementById('hero');
      const footerSection = document.getElementById('footer');
      
      if (heroSection && footerSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const footerTop = footerSection.offsetTop;
        const scrollY = window.scrollY + window.innerHeight / 2;
        
        if (scrollY < heroBottom) {
          setCurrentSection('hero');
        } else if (scrollY >= footerTop) {
          setCurrentSection('footer');
        } else {
          setCurrentSection('content');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId, { 
      duration: 1000, 
      easing: 'easeInOut',
      offset: 80 
    });
  };

  if (!isVisible) return null;

  // Determine colors based on current section
  const isHero = currentSection === 'hero';
  const isFooter = currentSection === 'footer';
  
  const bgColor = isHero ? 'bg-black/90' : isFooter ? 'bg-white/90' : 'bg-black/90';
  const borderColor = isHero ? 'border-white/20' : isFooter ? 'border-black/20' : 'border-white/20';
  const shadowColor = isHero ? 'shadow-black/40' : isFooter ? 'shadow-black/20' : 'shadow-black/40';
  
  // Active button colors
  const activeBgColor = isHero ? 'bg-white' : isFooter ? 'bg-black' : 'bg-white';
  const activeTextColor = isHero ? 'text-black' : isFooter ? 'text-white' : 'text-black';
  const activeIndicatorColor = isHero ? 'bg-black' : isFooter ? 'bg-white' : 'bg-black';
  
  // Inactive button colors
  const inactiveTextColor = isHero ? 'text-white' : isFooter ? 'text-black' : 'text-white';
  const inactiveHoverBg = isHero ? 'hover:bg-white/10' : isFooter ? 'hover:bg-black/10' : 'hover:bg-white/10';
  
  // Accent line color
  const accentLineColor = isHero ? 'bg-white/30' : isFooter ? 'bg-black/30' : 'bg-white/30';

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Main Navigation */}
      <nav className={`${bgColor} ${borderColor} ${shadowColor} backdrop-blur-xl border rounded-2xl px-8 py-6 shadow-2xl transition-all duration-300 min-w-[500px]`}>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="./Logo.png" 
              alt="Chandu Kalluru Logo" 
              className="w-14 h-14 rounded-xl object-cover"
            />
          </div>

          {/* Navigation Items */}
          <ul className="flex items-center space-x-6 ml-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative px-4 py-2 rounded-full transition-all duration-300 font-medium tracking-wide ${
                    activeSection === item.id
                      ? `${activeBgColor} ${activeTextColor} shadow-lg scale-105`
                      : `${inactiveTextColor} ${inactiveHoverBg}`
                  }`}
                  title={item.label}
                >
                  {/* Label */}
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 ${activeIndicatorColor} rounded-full`} />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Subtle accent line */}
        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-0.5 ${accentLineColor} rounded-full`} />
      </nav>
    </div>
  );
};

export default FloatingNav;
