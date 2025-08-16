import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Lightbulb, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Versatile Developer',
      description: 'Full-stack expertise across web, mobile, AI, blockchain, and data analytics'
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem Solver',
      description: 'Innovative solutions that bridge the gap between complex requirements and elegant execution'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimized, scalable applications that deliver exceptional user experiences'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Committed to delivering high-quality solutions that exceed expectations'
    }
  ];

  const values = [
    'Innovation', 'Quality', 'Reliability', 'Scalability', 'User Experience', 'Best Practices'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences 
            and solving complex challenges through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Main Description */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                With a diverse skill set spanning multiple technologies and domains, I specialize in 
                building robust, scalable solutions that drive business growth and user satisfaction. 
                From complex web applications to AI-powered systems, I bring ideas to life with 
                precision and creativity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical excellence with strategic thinking, ensuring that 
                every project not only meets requirements but also anticipates future needs. 
                I thrive on challenges and continuously evolve with the latest technologies 
                to deliver cutting-edge solutions.
              </p>
            </div>
            
            {/* Core Values */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <Badge key={value} variant="secondary" className="px-3 py-1">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="p-6 bg-gradient-card border-glass-border hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent/20 flex items-center justify-center mb-3 group-hover:bg-gradient-accent/30 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <Card className="p-8 bg-glass border-glass-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">My Philosophy</h3>
            <blockquote className="text-lg text-muted-foreground italic max-w-4xl mx-auto">
              "Technology is most powerful when it seamlessly integrates into people's lives, 
              solving real problems while creating new possibilities. I build not just applications, 
              but experiences that empower users and drive meaningful impact."
            </blockquote>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;