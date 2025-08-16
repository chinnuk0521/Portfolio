import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);

      // Determine current section based on scroll position
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
  }, []);

  const handleClick = () => {
    scrollToTop({ duration: 800, easing: 'easeOut' });
  };

  if (!isVisible) return null;

  // Determine colors based on current section
  const isHero = currentSection === 'hero';
  const isFooter = currentSection === 'footer';
  
  const bgColor = isHero ? 'bg-black' : isFooter ? 'bg-white' : 'bg-black';
  const textColor = isHero ? 'text-white' : isFooter ? 'text-black' : 'text-white';
  const borderColor = isHero ? 'border-white/20' : isFooter ? 'border-black/20' : 'border-white/20';
  const shadowColor = isHero ? 'shadow-black/40' : isFooter ? 'shadow-black/20' : 'shadow-black/40';
  const hoverShadowColor = isHero ? 'hover:shadow-black/60' : isFooter ? 'hover:shadow-black/40' : 'hover:shadow-black/60';

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main Button */}
      <button
        onClick={handleClick}
        className={`${bgColor} ${textColor} ${borderColor} ${shadowColor} ${hoverShadowColor} backdrop-blur-xl border p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group`}
        title="Back to Top"
      >
        {/* Icon */}
        <svg
          className="w-6 h-6 transition-all duration-300 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
