import React from 'react';
import { Menu} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-slate-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-slate-800">
            Chandu Kalluru
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-3">
            <NavLinks mobile />
            <div className="mt-4 flex justify-center space-x-6">
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const baseStyles = "text-slate-600 hover:text-blue-600 transition-colors";
  const mobileStyles = mobile ? "block py-2 text-center" : "";

  return (
    <div className={mobile ? "space-y-2" : "flex items-center space-x-8"}>
      <a href="#home" className={`${baseStyles} ${mobileStyles}`}>Home</a>
      <a href="#skills" className={`${baseStyles} ${mobileStyles}`}>Skills</a>
      <a href="#education" className={`${baseStyles} ${mobileStyles}`}>Eductaion & Experience</a>
      <a href="#testimonials" className={`${baseStyles} ${mobileStyles}`}>Testimonials</a>
      <a href="#contact" className={`${baseStyles} ${mobileStyles}`}>Contact</a>
    </div>
  );
}

