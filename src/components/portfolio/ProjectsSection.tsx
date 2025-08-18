import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Zap,
  TrendingUp,
  Rocket,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  const stats = [
    {
      label: "Projects Delivered",
      value: "25+",
      icon: TrendingUp,
      color: "from-gray-800 to-gray-600",
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: Star,
      color: "from-gray-700 to-gray-500",
    },
    {
      label: "Technologies Mastered",
      value: "15+",
      icon: Zap,
      color: "from-gray-600 to-gray-400",
    },
    {
      label: "Years Experience",
      value: "3+",
      icon: Rocket,
      color: "from-gray-500 to-gray-300",
    },
  ];

  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description:
        "A comprehensive e-commerce solution with AI-driven product recommendations, automated inventory management, and personalized shopping experiences.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Full Stack",
      tags: ["React", "Node.js", "AI/ML", "PostgreSQL", "AWS"],
      color: "from-gray-800 to-gray-600",
    },
    {
      title: "Blockchain DeFi Application",
      description:
        "Decentralized finance platform built on Ethereum with smart contracts, yield farming, and cross-chain interoperability.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Blockchain",
      tags: ["Solidity", "React", "Web3.js", "Ethereum", "Hardhat"],
      color: "from-gray-700 to-gray-500",
    },
    {
      title: "Mobile Health Monitoring App",
      description:
        "Cross-platform mobile application for health tracking with real-time data visualization and AI-powered health insights.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Mobile",
      tags: ["React Native", "Python", "TensorFlow", "Firebase", "HealthKit"],
      color: "from-gray-600 to-gray-400",
    },
    {
      title: "Enterprise Resource Planning System",
      description:
        "Comprehensive ERP solution for manufacturing companies with modules for inventory, production, and financial management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Enterprise",
      tags: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
      color: "from-gray-500 to-gray-300",
    },
    {
      title: "Modern Portfolio Website",
      description:
        "Responsive portfolio website with modern design, smooth animations, and optimized performance for showcasing creative work.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Website",
      tags: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Vite"],
      color: "from-gray-800 to-gray-600",
    },
    {
      title: "RESTful API Backend Service",
      description:
        "Scalable backend API service with authentication, rate limiting, and comprehensive documentation for third-party integrations.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Backend",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      color: "from-gray-700 to-gray-500",
    },
    {
      title: "Interactive Dashboard UI",
      description:
        "Modern dashboard interface with real-time data visualization, interactive charts, and responsive design for business analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Frontend",
      tags: ["React", "D3.js", "Chart.js", "Tailwind CSS", "Redux"],
      color: "from-gray-600 to-gray-400",
    },
    {
      title: "E-Learning Platform",
      description:
        "Full-stack learning management system with video streaming, progress tracking, and interactive assessments for online education.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
      status: "Live",
      type: "Full Stack",
      tags: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Stripe"],
      color: "from-gray-500 to-gray-300",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // GSAP animation timeline for section entrance
            const tl = gsap.timeline();

                        tl.fromTo(
              titleRef.current,
              {
                opacity: 0,
                y: 30,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power1.out",
              }
            )
              .fromTo(
                contentRef.current,
                {
                  opacity: 0,
                  y: 20,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power1.out",
                },
                "-=0.2"
              )
              .fromTo(
                statsRef.current,
                {
                  opacity: 0,
                  y: 25,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power1.out",
                },
                "-=0.1"
              )
              .fromTo(
                projectsRef.current,
                {
                  opacity: 0,
                  y: 25,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power1.out",
                },
                "-=0.1"
              )
              .fromTo(
                ctaRef.current,
                {
                  opacity: 0,
                  y: 25,
                  scale: 0.98,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.4,
                  ease: "power1.out",
                },
                "-=0.1"
              );
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Parallax Background - Subtle tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="w-[90%] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Project Portfolio
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 w-full mx-auto leading-relaxed max-w-6xl">
            A showcase of innovative solutions across various domains - from frontend and backend development to full-stack applications, mobile apps, and enterprise solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="retro-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 text-black mx-auto" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
                {stat.value}
              </div>
                <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="retro-card overflow-hidden hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div 
                  className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300"
                  style={{ display: 'none' }}
                >
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="text-sm font-medium">{project.type}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-600/20 group-hover:from-gray-800/40 group-hover:to-gray-600/40 transition-all duration-300" />
                <div className="absolute top-4 right-4 space-y-2">
                  <Badge className="bg-black text-white border border-gray-800">
                    {project.status}
                  </Badge>
                  <Badge className="bg-gray-800 text-white border border-gray-700">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm font-medium bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-800 hover:text-gray-800 transition-all duration-300 text-gray-900"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center">
                      <Card className="retro-card p-16 hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Ready to Start Your Project?
              </h3>
              <p className="text-2xl md:text-3xl text-gray-600 w-full mx-auto leading-relaxed max-w-4xl mb-12">
                Let's discuss your vision and create something extraordinary
                together. From concept to deployment, I'll be with you every
                step of the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
