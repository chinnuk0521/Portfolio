import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'CHANDU KALLURU';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-float delay-1000 opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-float delay-2000 opacity-50" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Name */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-gradient animate-glow inline-block">
                {displayText}
                <span className="animate-pulse border-r-2 border-primary ml-1">|</span>
              </span>
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building the future with{' '}
              <span className="text-primary font-semibold">code</span>,{' '}
              <span className="text-accent font-semibold">creativity</span>, and{' '}
              <span className="text-secondary font-semibold">innovation</span>
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '2.5s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="min-w-48"
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="min-w-48"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '3s' }}>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;