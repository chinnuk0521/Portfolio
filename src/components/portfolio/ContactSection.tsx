import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Send,
  Star,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const contactRef = useRef(null);
  const socialRef = useRef(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "buildwithchandu@hotmail.com",
      action: () => window.open("mailto:buildwithchandu@hotmail.com", "_blank"),
      description: "Click to send email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 - 8179299096",
      action: () => window.open("tel:+918179299096", "_blank"),
      description: "Click to call",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote / Worldwide",
      description: "Available globally",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/chinnuk0521" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/chandu-kalluru",
    },
    { icon: Twitter, label: "X (Twitter)", url: "https://x.com/Kalluru0521" },
    { icon: Mail, label: "Email", url: "mailto:buildwithchandu@hotmail.com" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
                contactRef.current,
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
                socialRef.current,
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
      id="contact"
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Let's Build Together
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 w-full mx-auto leading-relaxed max-w-6xl px-4">
            Ready to turn your vision into reality? Let's discuss your project
            and create something extraordinary together.
          </p>
        </div>

        {/* Contact Methods */}
        <div ref={contentRef} className="mb-20">
          <div
            ref={contactRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className="retro-card contact-card p-6 md:p-8 hover:scale-105 transition-all duration-300 group cursor-pointer min-h-[280px] md:min-h-[320px] flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={method.action}
              >
                <CardContent className="p-0 text-center flex flex-col h-full justify-between">
                  <div className="mb-4 md:mb-6">
                    <method.icon className="h-12 w-12 md:h-16 md:w-16 text-black mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                      {method.title}
                    </h3>
                    <p 
                      className="contact-value text-base md:text-lg lg:text-xl text-gray-600 font-medium mb-2 leading-tight"
                      data-type={method.title.toLowerCase()}
                    >
                      {method.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">{method.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="text-center">
                      <Card className="retro-card p-8 md:p-12 hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
                Connect With Me
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="w-14 h-14 md:w-16 md:h-16 hover:bg-gray-100 hover:text-gray-800 transition-all duration-300 hover:scale-125 border-2 border-gray-300 hover:border-gray-800"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
