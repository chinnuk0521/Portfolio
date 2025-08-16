import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const HeroSection = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const curtainRef = useRef(null);
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);
  const roleRef = useRef(null);
  const { scrollToSection } = useSmoothScroll();

  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Blockchain Developer",
    "Data Analyst",
    "Business Analyst",
    "Data Engineer",
  ];

  useEffect(() => {
    // GSAP Timeline for Cinematic Curtain Effect
    const tl = gsap.timeline();

    // Initial state - everything hidden
    gsap.set([nameRef.current, contentRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(curtainRef.current, {
      y: "-100%",
      scaleY: 1,
    });

    // 1. Curtain rises like old movie theatre (power4.inOut for smoothness)
    tl.to(curtainRef.current, {
      y: "0%",
      scaleY: 0,
      duration: 2.5,
      ease: "power4.inOut",
      transformOrigin: "top",
    })
      // 2. Name appears with dramatic scale and glow
      .to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1"
      )
      // 3. Apply glow effect to the name
      .to(
        nameRef.current,
        {
          textShadow:
            "0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6), 0 0 90px rgba(0,0,0,0.4)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      // 4. Content fades in
      .to(
        contentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Parallax background effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      gsap.to(backgroundRef.current, {
        y: rate,
        duration: 0.1,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Role animation effect
  useEffect(() => {
    const roleElement = roleRef.current;
    if (roleElement) {
      // Animate role changes every 3 seconds
      const interval = setInterval(() => {
        gsap.to(roleElement, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
            gsap.to(roleElement, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [roles.length]);



  return (
    <section
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Parallax Background - Dark gradient with tech pattern */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-20 parallax-bg"
        style={{
          background: `
            linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #333333 50%, #1a1a1a 75%, #000000 100%),
            radial-gradient(circle at 20% 80%, rgba(0,0,0,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.3) 0%, transparent 50%)
          `,
          backgroundSize: "100% 100%, 800px 800px, 600px 600px",
        }}
      />

      {/* Cinematic Curtain - Black overlay that rises up */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-black z-50"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-6 text-center z-10 relative w-full">
        {/* Epic Name Display - Covers almost full screen width */}
        <div className="mb-16 relative">
          <h1
            ref={nameRef}
            className="hero-name cinematic-text text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-black tracking-tighter leading-none select-none"
            style={{
              textShadow: "0 0 20px rgba(0,0,0,0.5)",
              WebkitTextStroke: "1px rgba(0,0,0,0.1)",
            }}
          >
            <span className="text-gray-900 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              CHANDU KALLURU
            </span>
          </h1>

          {/* Enhanced glow effect behind name */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
            <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full scale-150" />
          </div>
        </div>

        {/* Content Section - Fades in after name reveal */}
        <div ref={contentRef} className="space-y-12">
          {/* Professional Tagline with Animated Roles */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-medium leading-relaxed">
              {" "}
              <span
                ref={roleRef}
                className="role-animation role-text font-mono px-2 inline-block min-w-[300px]"
              >
                {roles[currentRole]}
              </span>
            </p>
            <p className="text-xl md:text-2xl text-gray-500 mt-4 leading-relaxed">
              Building the future with code, creativity, and innovation
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button
              onClick={() => scrollToSection('about', { duration: 1200, easing: 'easeInOut' })}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('projects', { duration: 1200, easing: 'easeInOut' })}
              className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact', { duration: 1200, easing: 'easeInOut' })}
              className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
