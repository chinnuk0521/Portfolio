import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Chandu Kalluru</h3>
            <p className="text-slate-400">
              Transforming data into actionable insightss
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/chinnuk0521"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/chandu-kalluru/"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:chinnuk0521@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Chandu.Kalluru. All rights reserved.
        </div>
      </div>
    </footer>
  );
}