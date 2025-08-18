import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import iitmLogo from '@/assets/IITM-Logo.jpg';
import crystalLotusLogo from '@/assets/crystal_lotus_solutions_logo.jpeg';
import powerBILogo from '@/assets/Microsoft-Power-BI-Logo-2013.png';

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  const experiences = [
    {
      id: 1,
      company: "Indian Institute of Technology, Madras",
      logo: iitmLogo,
      logoType: "image",
      position: "Project Associate – Research & Development",
      department: "Computer Science and Engineering Department",
      duration: "Jan 2025 - Present",
      location: "Chennai, India",
      type: "Full-time",
      workMode: "On-site",
      description: "Researching and developing blockchain and distributed ledger technologies (DLTs). Implementing consensus mechanisms and smart contracts for real-world use cases. Working on cryptography, security, and protocol optimisation. Exploring Hedera Hashgraph and scalable enterprise blockchain solutions. Working on industrial projects related to blockchain and DLTs.",
      technologies: ["Blockchain", "DLT", "Consensus Mechanisms", "Smart Contracts", "Cryptography", "Security", "Hedera Hashgraph", "Enterprise Solutions", "Industrial Projects"]
    },
    {
      id: 2,
      company: "Crystal Lotus Solutions",
      logo: crystalLotusLogo,
      logoType: "image",
      position: "Software Engineer (Salesforce)",
      department: "Software Development",
      duration: "Jun 2024 - Dec 2024",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time",
      workMode: "On-site",
      description: "As a Software Engineer at Crystal Lotus Solutions, I contributed to the design, development, and deployment of Salesforce-based solutions, enhancing customer relationship management and business processes.",
      technologies: ["Salesforce", "CRM", "Software Development", "Business Processes"]
    },
    {
      id: 3,
      company: "Freelance",
      logo: powerBILogo,
      logoType: "image",
      position: "Power BI Developer",
      department: "Data Analytics & Visualization",
      duration: "May 2023 - Dec 2024",
      location: "Bengaluru, Karnataka, India",
      type: "Freelance",
      workMode: "Remote",
      description: "As a Freelance Power BI Developer, I have been delivering data-driven solutions by designing, developing, and optimising interactive dashboards and reports.",
      technologies: ["Power BI", "Data Visualization", "Dashboard Design", "Data Analytics"]
    }
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
    <section id="experience" ref={sectionRef} className="py-20 bg-white">
      <div className="w-[90%] mx-auto px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My path through technology, research, and innovation
          </p>
        </div>

        {/* Experience Cards */}
        <div ref={contentRef} className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group">
              <Card className="group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-white">
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex items-start space-x-6">
                      {/* Company Logo */}
                      <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden flex-shrink-0">
                        {exp.logoType === "image" ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-2xl">{exp.logo}</span>
                        )}
                      </div>
                      
                      {/* Company Info */}
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-black mb-3 leading-tight">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-gray-700 mb-2">
                          <Building2 size={18} className="text-black" />
                          <span className="font-semibold text-lg">{exp.company}</span>
                        </div>
                        {exp.department && (
                          <p className="text-gray-600 text-base mb-3">
                            {exp.department}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Duration & Location */}
                    <div className="text-right text-sm text-gray-600 space-y-2 lg:flex-shrink-0">
                      <div className="flex items-center justify-end space-x-2">
                        <Calendar size={16} className="text-black" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <MapPin size={16} className="text-black" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Work Type & Mode */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <Badge variant="secondary" className="bg-black text-white px-4 py-2 text-sm font-medium">
                      <Briefcase size={16} className="mr-2" />
                      {exp.type}
                    </Badge>
                    <Badge variant="outline" className="border-black text-black px-4 py-2 text-sm font-medium">
                      {exp.workMode}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-black uppercase tracking-wide">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="bg-white text-black border-black hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 text-sm font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-20">
          <p className="text-gray-600 mb-6 text-lg">
            Looking for opportunities to contribute to innovative projects
          </p>
          <Badge variant="outline" className="text-lg px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 font-medium">
            Open to New Opportunities
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
