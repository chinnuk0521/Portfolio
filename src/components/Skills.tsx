import React, { useEffect, useRef } from 'react';
import { BarChart, PieChart, LineChart, Database, Code2, GitBranch } from 'lucide-react';

const skills = [
  {
    category: "Data Visualization",
    icon: BarChart,
    skills: ["Power BI", "Custom Visuals", "DAX", "M Query", "Microsoft Excel"],
    level: 95
  },
  {
    category: "Data Analysis",
    icon: PieChart,
    skills: ["Statistical Analysis", "Forecasting", "Data Modeling", "ETL Processes", "Data Warehousing", "KPI Development", "Dashboard Optimization"],
    level: 90
  },
  {
    category: "Programming",
    icon: Code2,
    skills: ["Python", "R", "SQL", "JavaScript", "Java"],
    level: 85
  },
  {
    category: "Database",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MongoDB"],
    level: 80
  },
  {
    category: "Version Control",
    icon: GitBranch,
    skills: ["Bitbucket", "SourceTree", "Git", "GitHub", "CI/CD"],
    level: 95
  },
  {
    category: "Business Intelligence",
    icon: LineChart,
    skills: ["KPI Design", "ETL", "Report Automation"],
    level: 90
  }
];

export default function Skills() {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target.querySelector('.skill-bar');
            if (bar) {
              bar.classList.add('animate-skill');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              ref={el => skillRefs.current[index] = el}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {skill.category}
                </h3>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">Proficiency</span>
                  <span className="text-blue-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="skill-bar h-full bg-blue-600 rounded-full transform -translate-x-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}