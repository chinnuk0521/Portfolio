import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart,
  Code2,
  Zap,
  Shield
} from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, name: 'GitHub', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Mail, name: 'Email', url: 'mailto:chandu@example.com' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'AI/ML Solutions', href: '#' },
    { name: 'Blockchain', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background-secondary to-background-secondary" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gradient mb-2">
                  CHANDU KALLURU
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Versatile Developer | Creative Innovator | Reliable Partner
                </p>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button 
                    key={social.name}
                    variant="ghost" 
                    size="icon"
                    className="hover-lift hover:text-primary"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>chandu@example.com</p>
                <p>Available for new projects</p>
                <p>Response time: &lt; 24 hours</p>
              </div>
              <Button 
                variant="hero" 
                size="sm" 
                className="mt-4"
                onClick={() => scrollToSection('#contact')}
              >
                Start Project
              </Button>
            </div>
          </div>

          <Separator className="bg-glass-border mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Chandu Kalluru. All rights reserved.
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Code2 className="h-3 w-3" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Secure Solutions</span>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-primary/30 rounded-full animate-float" />
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-accent/20 rounded-full animate-float delay-1000" />
      
      {/* Made with Love */}
      <div className="absolute bottom-4 right-6 text-xs text-muted-foreground/50 flex items-center gap-1">
        Made with <Heart className="h-3 w-3 text-red-400" /> using React
      </div>
    </footer>
  );
};

export default FooterSection;