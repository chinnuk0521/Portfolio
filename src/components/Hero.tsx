import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

const roles = ["Data Analyst", "Power BI Developer", "Software Developer", "Freelancer"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-8 grid-rows-8 gap-4 opacity-5">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-full animate-pulse"
              style={{
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            >
              <BarChart2 size={32} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            <span>Hi, I am a </span>
            <span className="text-blue-600 inline-block min-w-[280px]">
              {currentRole}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Transforming complex data into compelling visual narratives that drive business decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow hover:shadow-lg transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-200 text-slate-600 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all shadow hover:shadow-md transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}