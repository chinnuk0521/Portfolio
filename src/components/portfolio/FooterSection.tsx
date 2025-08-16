import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const FooterSection = () => {
  const footerRef = useRef(null);
  const topCurtainRef = useRef(null);
  const bottomCurtainRef = useRef(null);
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "THANKS FOR VISITING";
  const subtitleText = "– with love, Chandu Kalluru";

  // Typewriter effect for the main title
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Speed of typing (100ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            console.log("Footer intersecting, checking refs...");
            console.log("Top curtain ref:", topCurtainRef.current);
            console.log("Bottom curtain ref:", bottomCurtainRef.current);
            console.log("Text ref:", textRef.current);

            // Check if all refs are available
            if (
              topCurtainRef.current &&
              bottomCurtainRef.current &&
              textRef.current
            ) {
              console.log("All refs available, starting animation...");
              hasAnimated.current = true;

              // Small delay to ensure DOM is ready
              setTimeout(() => {
                console.log("Starting GSAP animation...");
                // Create the cinematic curtain closing effect
                const tl = gsap.timeline({ ease: "power4.inOut" });

                // Initial state: curtains are open (positioned at top and bottom)
                gsap.set(topCurtainRef.current, { y: "-100%" });
                gsap.set(bottomCurtainRef.current, { y: "100%" });
                gsap.set(textRef.current, { opacity: 0, scale: 0.8 });

                // Curtains close from top and bottom towards center
                tl.to(
                  topCurtainRef.current,
                  {
                    y: "0%",
                    duration: 1.5,
                    ease: "power4.inOut",
                  },
                  0
                )
                  .to(
                    bottomCurtainRef.current,
                    {
                      y: "0%",
                      duration: 1.5,
                      ease: "power4.inOut",
                    },
                    0
                  )
                  .to(
                    textRef.current,
                    {
                      opacity: 1,
                      scale: 1,
                      duration: 1.2,
                      ease: "power4.inOut",
                    },
                    1.5
                  ) // Text appears after curtains are fully closed
                  .call(
                    () => {
                      // Start typing animation after text is visible
                      setCurrentIndex(0);
                      setDisplayText("");
                    },
                    [],
                    2.7
                  ); // Start typing after curtains close and text appears
              }, 100);
            } else {
              console.log("Some refs are missing, cannot start animation");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Top Curtain */}
      <div
        ref={topCurtainRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-black z-10"
        style={{ transform: "translateY(-100%)" }}
      />

      {/* Bottom Curtain */}
      <div
        ref={bottomCurtainRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-10"
        style={{ transform: "translateY(100%)" }}
      />

      {/* Footer Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <div
          ref={textRef}
          className="space-y-8"
          style={{ opacity: 0, transform: "scale(0.8)" }}
        >
          {/* Main Title with Typing Effect */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none min-h-[1.2em]">
            {displayText}
            <span className="typing-cursor">|</span>
          </h2>

          {/* Subtitle - appears after main title is fully typed */}
          {currentIndex >= fullText.length && (
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium animate-fade-in">
              {subtitleText}
            </p>
          )}
            </div>
            
        {/* Copyright */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <p className="text-sm text-gray-500">© All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
