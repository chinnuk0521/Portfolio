import React from 'react';
import { ExternalLink, Maximize2, X } from 'lucide-react';

const projects = [
  // Power BI Projects
  {
    title: 'Diabetes Analysis',
    description:
      'Comprehensive dashboard analyzing diabetes patterns across different demographics, helping healthcare providers make data-driven decisions for better patient care.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['Power BI', 'DAX', 'Data Modeling'],
    link: 'https://github.com/chinnuk0521/Meri-Skill/blame/main/Diabetes%20Analysis.pbix',
    type: 'Power BI',
    projectTag: 'Personal Project',
    //staticTag: "Healthcare" // Static Tag
  },
  {
    title: 'HR Analysis',
    description:
      'Advanced HR analytics platform tracking employee performance, attrition, and engagement metrics to drive strategic workforce decisions.',
    image:
      'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=800',
    tags: ['Power BI', 'Data Analysis', 'Visualization'],
    link: 'https://github.com/chinnuk0521/Meri-Skill/blob/main/HR%20ANALYTICS%20DASHBOARD.pbix',
    type: 'Power BI',
    projectTag: 'Personal Project',
    //staticTag: "HR Analytics" // Static Tag
  },
  {
    title: 'Call Centre Trend Analysis',
    description:
      'PwC project analyzing call center performance metrics, customer satisfaction, and operational efficiency to optimize service delivery.',
    image:
      'https://media.istockphoto.com/id/1680095830/photo/senior-call-center-consultant-woman-and-contact-us-crm-and-talking-in-customer-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2mVBRD1Nsg-mMs3xDDoIu4wKHzzGkFoRChx6-jQops=',
    tags: ['Power BI', 'KPI Tracking', 'Trend Analysis'],
    link: 'https://github.com/chinnuk0521/Pwc-Switzerland/blob/main/CALL%20CENTRE%20TREND%20-%20PWC.pbix',
    type: 'Power BI',
    projectTag: 'Personal Project',
    //staticTag: "Customer Service" // Static Tag
  },
  {
    title: 'Customer Churn Analysis',
    description:
      'PwC project focused on analyzing customer churn patterns, identifying risk factors, and developing retention strategies.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tags: ['Power BI', 'Predictive Analytics', 'Customer Insights'],
    link: 'https://github.com/chinnuk0521/Pwc-Switzerland/blob/main/CUSTOMER%20CHURN%20ANALYSIS-PwC.pbix',
    type: 'Power BI',
    projectTag: 'Personal Project',
    //staticTag: "Customer Retention" // Static Tag
  },
  {
    title: 'Diversity & Inclusion Analysis',
    description:
      'PwC project examining workplace diversity metrics and inclusion initiatives to foster a more equitable organizational culture.',
    image:
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800',
    tags: ['Power BI', 'HR Analytics', 'DEI Metrics'],
    link: 'https://github.com/chinnuk0521/Pwc-Switzerland/blob/main/DIVERSITY%20%26%20INCLUSION-PwC.pbix',
    type: 'Power BI',
    projectTag: 'Personal Project',
    //staticTag: "Diversity" // Static Tag
  },

  // Software Development Projects
  {
    title: 'Personal Portfolio Website',
    description:
      'A personal portfolio website showcasing my skills, projects, and experience in a clean and responsive design.',
    image:
      'https://images.unsplash.com/photo-1521791136061-c899aa98f983?auto=format&fit=crop&q=80&w=800',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: 'https://github.com/chinnuk0521/personal-portfolio',
    type: 'Software Development',
    projectTag: 'Personal Project',
    //staticTag: "Web Development" // Static Tag
  },
  {
    title: 'Task Management App',
    description:
      'A task management app built with React, allowing users to create, update, and delete tasks, with local storage for persistence.',
    image:
      'https://images.unsplash.com/photo-1579887444080-bc4d3f2d5f7a?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    link: 'https://github.com/chinnuk0521/task-management-app',
    type: 'Software Development',
    projectTag: 'Personal Project',
    //staticTag: "Productivity" // Static Tag
  },
  {
    title: 'E-commerce Website',
    description:
      'A full-stack e-commerce website with a React frontend and Node.js backend, including features like user authentication, product display, and a shopping cart.',
    image:
      'https://images.unsplash.com/photo-1563445529-e27a2f7b33e1?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/chinnuk0521/e-commerce-website',
    type: 'Software Development',
    projectTag: 'Personal Project',
    //staticTag: "E-Commerce" // Static Tag
  },
  {
    title: 'Weather App',
    description:
      'A weather application that provides real-time weather updates using an API to fetch weather data and display it in a user-friendly interface.',
    image:
      'https://images.unsplash.com/photo-1554250591-c927abdc8468?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'API', 'JavaScript'],
    link: 'https://github.com/chinnuk0521/weather-app',
    type: 'Software Development',
    projectTag: 'Personal Project',
    //staticTag: "Weather" // Static Tag
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<number | null>(
    null
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Featured Projects
        </h2>
        <h3 className="text-2xl font-bold text-left text-slate-600 mb-10">
          Power BI Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => project.type === 'Power BI')
            .map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Tag */}
                <div className="absolute bottom-2 right-2">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                    {project.projectTag}
                  </span>
                </div>

                {/* View Details Button */}
                <div className="absolute bottom-2 left-2">
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Maximize2 size={18} />
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>

        <h3 className="text-2xl font-bold text-left text-slate-600 mt-12 mb-10">
          Software Development Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => project.type === 'Software Development')
            .map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Tag */}
                <div className="absolute bottom-2 right-2">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                    {project.projectTag}
                  </span>
                </div>

                {/* View Details Button */}
                <div className="absolute bottom-2 left-2">
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Maximize2 size={18} />
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
