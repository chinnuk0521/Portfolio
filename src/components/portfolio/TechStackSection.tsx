import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Cloud, 
  Brain, 
  Smartphone, 
  BarChart3,
  Shield,
  Globe,
  Cpu,
  GitBranch
} from 'lucide-react';

const TechStackSection = () => {
  const techCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'text-blue-400',
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Tailwind CSS', 'SCSS', 'Redux']
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      color: 'text-green-400',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Prisma']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'text-purple-400',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx', 'Linux']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'text-pink-400',
      skills: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Computer Vision', 'NLP', 'MLOps', 'Jupyter']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'text-indigo-400',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      color: 'text-yellow-400',
      skills: ['Python', 'R', 'Power BI', 'Tableau', 'Apache Spark', 'Pandas', 'NumPy', 'D3.js']
    },
    {
      icon: Shield,
      title: 'Blockchain & Web3',
      color: 'text-orange-400',
      skills: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'DeFi', 'NFTs', 'IPFS', 'Hardhat']
    },
    {
      icon: GitBranch,
      title: 'Tools & Workflow',
      color: 'text-cyan-400',
      skills: ['Git', 'GitHub', 'Jira', 'Figma', 'VS Code', 'Postman', 'Slack', 'Notion']
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional',
    'Microsoft Azure Fundamentals',
    'Certified Kubernetes Administrator'
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains - from cutting-edge AI to robust 
            cloud infrastructure, enabling me to tackle any technical challenge.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-glass-border hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent/10 flex items-center justify-center mb-3 group-hover:bg-gradient-accent/20 transition-colors">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="text-xs px-2 py-0.5 bg-background/50 border-glass-border hover:bg-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Languages & Frameworks */}
          <Card className="p-6 bg-glass border-glass-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
              <Cpu className="h-5 w-5 mr-2 text-primary" />
              Core Technologies
            </h3>
            <div className="space-y-3">
              {[
                { name: 'JavaScript/TypeScript', level: 95 },
                { name: 'Python', level: 90 },
                { name: 'React/Next.js', level: 95 },
                { name: 'Node.js', level: 85 },
                { name: 'Cloud Platforms', level: 80 },
                { name: 'AI/ML', level: 75 }
              ].map((tech) => (
                <div key={tech.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{tech.name}</span>
                    <span className="text-muted-foreground">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 bg-glass border-glass-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
              <Shield className="h-5 w-5 mr-2 text-accent" />
              Certifications & Recognition
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={cert}
                  className="flex items-center p-3 rounded-lg bg-background/30 border border-glass-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-foreground">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-glass-border">
              <p className="text-sm text-muted-foreground">
                Continuously learning and staying updated with the latest technologies 
                and industry best practices.
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-6 bg-gradient-card border-glass-border inline-block">
            <p className="text-muted-foreground mb-2">
              Looking for expertise in a specific technology?
            </p>
            <p className="text-foreground font-semibold">
              Let's discuss how I can help bring your vision to life.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;