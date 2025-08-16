import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Brain, 
  Smartphone, 
  Cpu,
  GitBranch
} from 'lucide-react';

const TechStackSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Frontend Developer',
    'Backend Developer', 
    'Full Stack Developer',
    'Mobile Developer',
    'AI/ML Engineer',
    'DevOps Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const techCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'text-foreground',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      color: 'text-foreground',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Express.js']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'text-foreground',
      skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux', 'Nginx']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'text-foreground',
      skills: ['Python', 'TensorFlow', 'OpenAI', 'Machine Learning', 'Data Analysis']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'text-foreground',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Mobile UI/UX']
    },
    {
      icon: GitBranch,
      title: 'Tools & Workflow',
      color: 'text-foreground',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Agile']
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <div className="mb-4">
            <p className="text-2xl font-bold text-foreground">
              I am a{' '}
              <span className="text-primary font-mono animate-pulse border-b-2 border-primary pb-1">
                {roles[currentRole]}
              </span>
            </p>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With 3+ years of experience building modern web applications and digital solutions 
            across multiple technologies and platforms.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card border-border hover-lift group animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Retro grid background */}
              <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full" style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs px-2 py-0.5 bg-background border-border hover:bg-muted hover:border-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Core Technologies */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-card border-border relative overflow-hidden">
            {/* Retro background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground flex items-center justify-center">
                <Cpu className="h-6 w-6 mr-3 text-primary" />
                Core Technologies
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'JavaScript/TypeScript', level: 90 },
                  { name: 'React/Next.js', level: 85 },
                  { name: 'Python', level: 80 },
                  { name: 'Node.js', level: 75 },
                  { name: 'Cloud Platforms', level: 70 },
                  { name: 'Mobile Development', level: 65 }
                ].map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{tech.name}</span>
                      <span className="text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Experience Stats */}
        <div className="text-center">
          <Card className="p-8 bg-card border-border inline-block relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }} />
            </div>
            <div className="relative z-10">
              <div className="grid grid-cols-3 gap-8 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Ready to build something amazing together?
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;