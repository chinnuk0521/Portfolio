import { useState, useEffect, useRef } from 'react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { useResponsive } from '@/hooks/use-mobile';
import { Menu, X, ChevronDown } from 'lucide-react';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentSection, setCurrentSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const screenSize = useResponsive();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = async (sectionId: string) => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    setIsMobileMenuOpen(false);
    
    await scrollToSection(sectionId, { 
      duration: 1000, 
      easing: 'easeInOut',
      offset: 80 
    });
    
    // Reset animation state after a delay
    setTimeout(() => setIsAnimating(false), 1200);
  };

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (screenSize !== 'mobile') {
      setIsMobileMenuOpen(false);
    }
  }, [screenSize]);

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

  // Mobile Navigation
  if (screenSize === 'mobile') {
    return (
      <div className="fixed top-4 left-4 right-4 z-50">
        {/* Mobile Navigation Bar */}
        <nav 
          ref={mobileMenuRef}
          className={`${bgColor} ${borderColor} ${shadowColor} backdrop-blur-xl border rounded-2xl px-4 py-3 shadow-2xl transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <img 
                src="./Logo.png" 
                alt="Chandu Kalluru Logo" 
                className="w-10 h-10 rounded-xl object-cover"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${inactiveTextColor} ${inactiveHoverBg} active:scale-95`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="transition-transform duration-300 rotate-180" />
              ) : (
                <Menu size={20} className="transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown with smooth animation */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div className="pt-4 border-t border-current/20">
              <ul className="space-y-2">
                                 {navItems.map((item, index) => (
                   <li key={item.id}>
                     <button
                       onClick={() => handleNavClick(item.id)}
                       disabled={isAnimating}
                       className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium tracking-wide ${
                         activeSection === item.id
                           ? `${activeBgColor} ${activeTextColor} shadow-lg`
                           : `${inactiveTextColor} ${inactiveHoverBg}`
                       } ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'} ${
                         isMobileMenuOpen ? 'mobile-nav-slide-in' : ''
                       }`}
                       title={item.label}
                       style={{ animationDelay: `${index * 50}ms` }}
                     >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                        
                        {/* Active indicator */}
                        {activeSection === item.id && (
                          <div className={`w-2 h-2 ${activeIndicatorColor} rounded-full animate-pulse`} />
                        )}
                        
                        {/* Chevron indicator for better UX */}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${inactiveTextColor} opacity-60`}
                        />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Subtle accent line */}
          <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 ${accentLineColor} rounded-full`} />
        </nav>


      </div>
    );
  }

  // Tablet Navigation
  if (screenSize === 'tablet') {
    return (
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        {/* Tablet Navigation Bar */}
        <nav className={`${bgColor} ${borderColor} ${shadowColor} backdrop-blur-xl border rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300`}>
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <img 
                src="./Logo.png" 
                alt="Chandu Kalluru Logo" 
                className="w-12 h-12 rounded-xl object-cover"
              />
            </div>

            {/* Navigation Items - Compact for tablet */}
            <ul className="flex items-center space-x-4 ml-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    disabled={isAnimating}
                    className={`group relative px-3 py-2 rounded-full transition-all duration-300 font-medium tracking-wide text-xs ${
                      activeSection === item.id
                        ? `${activeBgColor} ${activeTextColor} shadow-lg scale-105`
                        : `${inactiveTextColor} ${inactiveHoverBg}`
                    } ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
                    title={item.label}
                  >
                    {/* Label */}
                    <span className="text-xs font-medium">
                      {item.label}
                    </span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 ${activeIndicatorColor} rounded-full animate-pulse`} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Subtle accent line */}
          <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 ${accentLineColor} rounded-full`} />
        </nav>
      </div>
    );
  }

  // Desktop Navigation
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
                  disabled={isAnimating}
                  className={`group relative px-4 py-2 rounded-full transition-all duration-300 font-medium tracking-wide ${
                    activeSection === item.id
                      ? `${activeBgColor} ${activeTextColor} shadow-lg scale-105`
                      : `${inactiveTextColor} ${inactiveHoverBg}`
                  } ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                  title={item.label}
                >
                  {/* Label */}
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 ${activeIndicatorColor} rounded-full animate-pulse`} />
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
