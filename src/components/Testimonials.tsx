import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Smith",
    role: "Data Analytics Manager",
    company: "Tech Solutions Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "The dashboards created have transformed how we make decisions. The attention to detail and user experience is exceptional."
  },
  {
    name: "Sarah Johnson",
    role: "CFO",
    company: "Global Finance Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "Our financial reporting process is now streamlined and insightful. The automated solutions have saved us countless hours."
  },
  {
    name: "Michael Chen",
    role: "HR Director",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "The HR analytics platform has given us unprecedented insights into employee engagement and performance trends."
  },
  {
    name: "Robert Lee",
    role: "CEO",
    company: "NextGen Solutions",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200",
    text: "Their ability to visualize complex data in an easy-to-understand format is outstanding. Highly recommended!"
  },
  {
    name: "David Brown",
    role: "Operations Head",
    company: "Logistics Pro",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
    text: "Our operational efficiency has increased significantly. The real-time dashboards are a huge plus."
  },
  {
    name: "Sophia Wilson",
    role: "Business Analyst",
    company: "FinTech Corp",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200",
    text: "The insights derived from the data analysis tools have been pivotal in driving our strategy forward."
  },
  {
    name: "Olivia Taylor",
    role: "CTO",
    company: "Tech Horizons",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200",
    text: "The technical solutions provided are top-notch, helping us streamline our development process efficiently."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Client Testimonials
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-slate-400 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-slate-400 hover:text-blue-600 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6">
                      <Quote className="w-full h-full text-blue-100" />
                    </div>
                    
                    <p className="text-lg text-slate-600 mb-8">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-slate-800">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}