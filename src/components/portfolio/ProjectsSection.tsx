import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Enterprise-grade analytics platform with machine learning insights, real-time data processing, and interactive visualizations. Processes millions of data points daily.',
      image: '/placeholder.svg',
      tags: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      type: 'Web Application',
      status: 'Live',
      github: '#',
      demo: '#'
    },
    {
      title: 'DeFi Trading Platform',
      description: 'Decentralized finance platform with automated trading strategies, yield farming, and portfolio management. Built on Ethereum with Web3 integration.',
      image: '/placeholder.svg',
      tags: ['Solidity', 'React', 'Web3.js', 'Node.js', 'MongoDB'],
      type: 'Blockchain',
      status: 'Live',
      github: '#',
      demo: '#'
    },
    {
      title: 'Mobile Health Tracking App',
      description: 'Cross-platform mobile app for health monitoring with IoT integration, AI-powered insights, and secure data synchronization across devices.',
      image: '/placeholder.svg',
      tags: ['React Native', 'Firebase', 'IoT', 'Machine Learning'],
      type: 'Mobile App',
      status: 'Live',
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce Microservices',
      description: 'Scalable e-commerce backend with microservices architecture, event-driven design, and cloud-native deployment supporting millions of transactions.',
      image: '/placeholder.svg',
      tags: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'AWS'],
      type: 'Backend System',
      status: 'Live',
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Contract Auditing Tool',
      description: 'Automated smart contract security analysis tool using static analysis and machine learning to identify vulnerabilities and optimize gas usage.',
      image: '/placeholder.svg',
      tags: ['Python', 'Solidity', 'Machine Learning', 'Security'],
      type: 'DevTool',
      status: 'Beta',
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-time Collaboration Platform',
      description: 'Multi-user collaboration platform with real-time editing, video conferencing, and project management features. Supports thousands of concurrent users.',
      image: '/placeholder.svg',
      tags: ['Next.js', 'WebRTC', 'Socket.io', 'PostgreSQL'],
      type: 'Web Platform',
      status: 'Live',
      github: '#',
      demo: '#'
    }
  ];

  const stats = [
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Technologies Mastered', value: '50+' },
    { label: 'Years Experience', value: '8+' }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions across various domains - from AI and blockchain 
            to enterprise applications and mobile platforms.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 text-center bg-gradient-card border-glass-border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden bg-gradient-card border-glass-border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === 'Live' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="text-xs bg-background/80">
                    {project.type}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Live
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-glass border-glass-border">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-6">
                From concept to deployment, I bring ideas to life with cutting-edge technology 
                and exceptional attention to detail. Let's create your next breakthrough project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
                <Button variant="glass" size="lg">
                  View All Projects
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;