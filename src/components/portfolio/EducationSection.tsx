import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Award, BookOpen, Star } from 'lucide-react';
import { gsap } from 'gsap';
import yvuLogo from '@/assets/YVU-logo.png';

const EducationSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  const education = [
    {
      id: 1,
      institution: "Yogi Vemana University, Kadapa",
      logo: yvuLogo,
      logoType: "image",
      degree: "Bachelor of Technology (B.Tech), Computer Science",
      field: "Computer Science & Engineering",
      duration: "Aug 2019 - May 2023",
      location: "Kadapa, Andhra Pradesh, India",
      achievements: ["Cricket & Volleyball Player", "Team Leadership", "Discipline"],
      description: "Gained strong foundation in Computer Science concepts and practical applications. Built skills in Python, MySQL, and Microsoft Office tools. Developed teamwork and discipline as an active Cricket & Volleyball player. Passionate about continuous learning and adapting to evolving technologies.",
      courses: ["Python Programming", "MySQL Database", "Microsoft Office", "Computer Science Fundamentals", "Data Structures", "Algorithms", "Software Engineering", "Web Technologies"]
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
    <section id="education" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="w-[90%] mx-auto px-4">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Academic Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building the knowledge base for my technological journey
          </p>
        </div>

        {/* Education Cards */}
        <div ref={contentRef} className="space-y-12">
          {education.map((edu, index) => (
            <div key={edu.id} className="group">
              <Card className="group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-white">
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex items-start space-x-6">
                      {/* Institution Logo */}
                      <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 overflow-hidden flex-shrink-0">
                        {edu.logoType === "image" ? (
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-2xl">{edu.logo}</span>
                        )}
                      </div>
                      
                      {/* Institution Info */}
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-black mb-3 leading-tight">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-gray-700 mb-2">
                          <GraduationCap size={18} className="text-black" />
                          <span className="font-semibold text-lg">{edu.institution}</span>
                        </div>
                        <p className="text-gray-600 text-base mb-3">
                          {edu.field}
                        </p>
                      </div>
                    </div>

                    {/* Duration & Location */}
                    <div className="text-right text-sm text-gray-600 space-y-2 lg:flex-shrink-0">
                      <div className="flex items-center justify-end space-x-2">
                        <Calendar size={16} className="text-black" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <MapPin size={16} className="text-black" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Achievements */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {edu.achievements.map((achievement, achIndex) => (
                      <Badge key={achIndex} variant="outline" className="border-black text-black px-4 py-2 text-sm font-medium bg-white hover:bg-black hover:text-white transition-all duration-300">
                        <Star size={16} className="mr-2 text-black" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {edu.description}
                  </p>

                  {/* Key Courses */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-black uppercase tracking-wide flex items-center">
                      <BookOpen size={18} className="mr-2" />
                      Key Courses & Skills
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex} 
                          variant="outline" 
                          className="bg-white text-black border-black hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 text-sm font-medium"
                        >
                          {course}
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
            Continuously learning and expanding my knowledge
          </p>
          <Badge variant="outline" className="text-lg px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 font-medium">
            Always Learning
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
