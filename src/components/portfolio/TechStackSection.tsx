import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Star,
  Cpu,
  TrendingUp,
  Code2,
  Database,
  Cloud,
  Brain,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TechStackSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const categoriesRef = useRef(null);
  const statsRef = useRef(null);

  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
  ];

  const techCategories = [
    {
      title: "Web Applications",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Node.js",
      ],
      icon: Code2,
      color: "from-gray-800 to-gray-600",
      iconColor: "text-gray-700",
    },
    {
      title: "Mobile Applications",
      skills: [
        "React Native",
        "Flutter",
        "iOS Development",
        "Android Development",
        "Mobile UI/UX",
        "App Store",
      ],
      icon: Zap,
      color: "from-gray-700 to-gray-500",
      iconColor: "text-gray-600",
    },
    {
      title: "Websites",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "WordPress",
        "SEO Optimization",
        "Responsive Design",
      ],
      icon: Star,
      color: "from-gray-600 to-gray-400",
      iconColor: "text-gray-500",
    },
    {
      title: "Full Stack Solutions",
      skills: [
        "MERN Stack",
        "Python Django",
        "PostgreSQL",
        "AWS Cloud",
        "Docker",
        "API Development",
      ],
      icon: Cpu,
      color: "from-gray-500 to-gray-300",
      iconColor: "text-gray-400",
    },
  ];

  const stats = [
    {
      label: "Projects Delivered",
      value: "25+",
      icon: TrendingUp,
      color: "from-gray-800 to-gray-600",
    },
    {
      label: "Years Experience",
      value: "3+",
      icon: Star,
      color: "from-gray-700 to-gray-500",
    },
    {
      label: "Technologies Mastered",
      value: "15+",
      icon: Zap,
      color: "from-gray-600 to-gray-400",
    },
  ];

  useEffect(() => {
    // Role animation effect
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

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
                y: 50,
                scale: 0.9,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              }
            )
              .fromTo(
                contentRef.current,
                {
                  opacity: 0,
                  y: 30,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                },
                "-=0.3"
              )
              .fromTo(
                categoriesRef.current,
                {
                  opacity: 0,
                  y: 40,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                },
                "-=0.2"
              )
              .fromTo(
                statsRef.current,
                {
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: "power3.out",
                },
                "-=0.1"
              );
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tech-stack"
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

      <div className="container mx-auto w-[90%] relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 w-full mx-auto leading-relaxed max-w-6xl">
            With 3+ years of experience building modern web applications and
            digital solutions across multiple technologies and platforms.
          </p>

          {/* Dynamic Role Display */}
          <div className="mt-8">
            <p className="text-2xl md:text-3xl text-gray-600 font-medium">
              Specializing as a{" "}
              <span className="text-gray-800 font-mono border-b-4 border-gray-800 pb-2 px-2 inline-block min-w-[300px]">
                {roles[currentRole]}
              </span>
            </p>
          </div>
        </div>

        {/* Tech Categories Grid */}
        <div
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {techCategories.map((category, index) => (
            <Card
              key={category.title}
              className="retro-card p-8 hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="mb-4">
                    <category.icon className="h-12 w-12 text-black mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-800 hover:text-gray-800 transition-all duration-300 hover:scale-105 text-gray-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Stats */}
        <div ref={statsRef} className="w-full mx-auto">
          <Card className="retro-card p-12 hover:scale-105 transition-all duration-500">
            <CardContent className="p-0">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                  Experience Highlights
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center group">
                    <div className="mb-4">
                      <stat.icon className="h-16 w-16 text-black mx-auto" />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-gray-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
