import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Lightbulb, Zap, Target, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const highlightsRef = useRef(null);
  const philosophyRef = useRef(null);

  const highlights = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
      icon: Zap,
      color: "from-gray-800 to-gray-600",
      iconColor: "text-gray-700",
    },
    {
      title: "Quality",
      description: "Delivering excellence in every project",
      icon: Star,
      color: "from-gray-700 to-gray-500",
      iconColor: "text-gray-600",
    },
    {
      title: "Reliability",
      description: "Consistent performance and timely delivery",
      icon: Target,
      color: "from-gray-600 to-gray-400",
      iconColor: "text-gray-500",
    },
    {
      title: "Scalability",
      description: "Building solutions that grow with your business",
      icon: Zap,
      color: "from-gray-500 to-gray-300",
      iconColor: "text-gray-400",
    },
    {
      title: "User Experience",
      description: "Creating intuitive and engaging interfaces",
      icon: Heart,
      color: "from-gray-400 to-gray-200",
      iconColor: "text-gray-300",
    },
    {
      title: "Best Practices",
      description: "Following industry standards and methodologies",
      icon: Award,
      color: "from-gray-300 to-gray-100",
      iconColor: "text-gray-200",
    },
  ];

  const values = [
    "Innovation",
    "Quality",
    "Reliability",
    "Scalability",
    "User Experience",
    "Best Practices",
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
                highlightsRef.current,
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
                philosophyRef.current,
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
      id="about"
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
            Crafting Digital Excellence
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 w-full mx-auto leading-relaxed max-w-6xl">
            A passionate developer dedicated to crafting exceptional digital
            experiences and solving complex challenges through innovative
            technology solutions.
          </p>
        </div>

        {/* Core Values */}
        <div ref={contentRef} className="mb-20">
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) => (
                <Badge
                  key={value}
                  variant="secondary"
                  className="px-6 py-3 text-lg font-semibold bg-gray-100 border-2 border-gray-300 hover:bg-gray-200 hover:border-gray-800 hover:text-gray-800 transition-all duration-300 hover:scale-105 text-gray-900"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {value}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div
          ref={highlightsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className="retro-card p-8 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="mb-6">
                    <highlight.icon className="h-12 w-12 text-black mx-auto" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <div ref={philosophyRef} className="text-center">
                      <Card className="retro-card p-16 hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Innovation Through Simplicity
              </h3>
              <blockquote className="text-2xl md:text-3xl text-gray-600 w-full mx-auto leading-relaxed max-w-5xl italic">
                "The best code is not just functional—it's elegant,
                maintainable, and scalable. I believe in creating solutions that
                not only solve today's problems but also anticipate tomorrow's
                challenges."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
