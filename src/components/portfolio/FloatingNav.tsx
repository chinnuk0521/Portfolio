import { useState, useEffect, useRef } from 'react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { ChevronUp, Home, User, Code, FolderOpen, Mail, Briefcase, GraduationCap } from 'lucide-react';

const FloatingNav = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isSectionSelected, setIsSectionSelected] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'tech-stack', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down 200px
      setIsVisible(window.scrollY > 200);

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

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsSectionSelected(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = async (sectionId: string) => {
    setIsOpen(false);
    setIsSectionSelected(true);
    await scrollToSection(sectionId, { 
      duration: 1000, 
      easing: 'easeInOut',
      offset: 80 
    });
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsSectionSelected(false);
    }
  };

  if (!isVisible) return null;

  // Determine colors based on current section (following BackToTop pattern)
  const isHero = currentSection === 'hero';
  const isFooter = currentSection === 'footer';
  
  const bgColor = isHero ? 'bg-black' : isFooter ? 'bg-white' : 'bg-black';
  const textColor = isHero ? 'text-white' : isFooter ? 'text-black' : 'text-white';
  const borderColor = isHero ? 'border-white/20' : isFooter ? 'border-black/20' : 'border-white/20';
  const shadowColor = isHero ? 'shadow-black/40' : isFooter ? 'shadow-black/20' : 'shadow-black/40';
  const hoverShadowColor = isHero ? 'hover:shadow-black/60' : isFooter ? 'hover:shadow-black/40' : 'hover:shadow-black/60';

  return (
    <div className="fixed bottom-24 right-8 z-50" ref={navRef} data-nav-container="true">
      {/* Navigation Menu - Opens Upwards Above the Button */}
      <div 
        className={`absolute bottom-16 right-0 transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
        data-nav-menu="true"
      >
        {/* Navigation Items - Stacked from Bottom to Top */}
        <div className="flex flex-col-reverse items-end gap-3">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group flex items-center gap-3"
              onMouseEnter={() => setHoveredSection(item.id)}
              onMouseLeave={() => setHoveredSection(null)}
              style={{ 
                transitionDelay: isOpen ? `${(navItems.length - 1 - index) * 100}ms` : '0ms' 
              }}
            >
              {/* Section Name - Appears to the left on Hover with proper colors */}
              <div className={`
                transition-all duration-300 ease-out transform
                ${hoveredSection === item.id 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-2 pointer-events-none'
                }
              `}>
                <span className={`
                  text-sm font-bold tracking-wide px-3 py-1 rounded-lg
                  ${isHero 
                    ? 'bg-white text-black border border-white/30' 
                    : isFooter 
                      ? 'bg-black text-white border border-black/30' 
                      : 'bg-white text-black border border-white/30'
                  }
                `}>
                  {item.label}
                </span>
              </div>

              {/* Navigation Button - Circular like BackToTop */}
              <button
                onClick={() => handleNavClick(item.id)}
                className={`
                  ${bgColor} ${textColor} ${borderColor} ${shadowColor} ${hoverShadowColor}
                  backdrop-blur-xl border p-4 rounded-full shadow-lg
                  transition-all duration-300 transform hover:scale-110
                  ${activeSection === item.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
                `}
              >
                <item.icon size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Toggle Button - Moves to BackToTop position when opened */}
      <button
        onClick={toggleNav}
        className={`
          ${bgColor} ${textColor} ${borderColor} ${shadowColor} ${hoverShadowColor}
          backdrop-blur-xl border p-4 rounded-full shadow-2xl 
          transition-all duration-500 transform hover:scale-110 group
          ${isOpen ? 'rotate-180' : ''}
        `}
      >
        {/* Icon */}
        <ChevronUp 
          size={20} 
          className="transition-all duration-300 group-hover:-translate-y-1" 
        />
      </button>
    </div>
  );
};

export default FloatingNav;
