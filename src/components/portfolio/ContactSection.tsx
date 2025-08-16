import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  MessageSquare, 
  Calendar, 
  Github, 
  Linkedin, 
  Twitter,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'chandu@example.com',
      action: 'Send Email',
      color: 'text-blue-400'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: '+1 (555) 123-4567',
      action: 'Send Message',
      color: 'text-green-400'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: '30-min consultation',
      action: 'Book Now',
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: '#', color: 'hover:text-gray-400' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-sky-400' }
  ];

  const services = [
    'Full-Stack Development',
    'AI/ML Integration',
    'Blockchain Development',
    'Mobile Applications',
    'Cloud Architecture',
    'Technical Consulting'
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your vision into reality? Let's discuss your project and 
            create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-glass-border">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Start Your Project
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-glass-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-glass-border"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <Input
                      id="project"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      placeholder="e.g., Web App, Mobile App, AI Solution"
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g., $10k - $50k"
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, goals, and requirements..."
                    className="bg-background/50 border-glass-border min-h-32"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Methods */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="p-6 bg-glass border-glass-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div key={method.title} className="flex items-center p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors cursor-pointer">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-accent/20 flex items-center justify-center mr-3`}>
                      <method.icon className={`h-5 w-5 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground text-sm">{method.title}</div>
                      <div className="text-muted-foreground text-xs">{method.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Services */}
            <Card className="p-6 bg-glass border-glass-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Services Offered
              </h3>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <Badge 
                    key={service} 
                    variant="secondary" 
                    className="text-xs px-2 py-1 bg-background/50"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Quick Info */}
            <Card className="p-6 bg-glass border-glass-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-muted-foreground">Available Worldwide</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-muted-foreground">EST (UTC-5)</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-muted-foreground">Available for new projects</span>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-glass border-glass-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button 
                    key={social.name} 
                    variant="ghost" 
                    size="icon"
                    className={`hover-lift ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <Card className="p-6 bg-gradient-card border-glass-border inline-block">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm text-muted-foreground">Typically responds within 4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm text-muted-foreground">100% confidentiality guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm text-muted-foreground">Free initial consultation</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;