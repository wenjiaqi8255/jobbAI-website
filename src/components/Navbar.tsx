import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.svg';


const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleWaitlistClick = () => {
    window.open('https://getwaitlist.com/waitlist/28573', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center group">
            {/* <BrainCircuit className={`h-8 w-8 ${scrolled ? 'text-aquamarine-600' : 'text-aquamarine-500'} transition-transform group-hover:rotate-12`} /> */}
            <img src={logo} alt="JobbAI Logo" className={`h-8 w-24 ${scrolled ? 'text-aquamarine-600' : 'text-aquamarine-500'}`} />
            {/* <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>
              JobbAI
            </span> */}
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className={`text-sm font-medium transition-all hover:transform hover:translate-y-[-2px] ${
                scrolled ? 'text-gray-700 hover:text-aquamarine-600' : 'text-gray-700 hover:text-aquamarine-500'
              }`}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className={`text-sm font-medium transition-all hover:transform hover:translate-y-[-2px] ${
                scrolled ? 'text-gray-700 hover:text-aquamarine-600' : 'text-gray-700 hover:text-aquamarine-500'
              }`}
            >
              How It Works
            </a>
            <Button 
              variant="primary"
              onClick={handleWaitlistClick}
            >
              Join Waitlist
            </Button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <div className="px-3 py-2">
              <Button 
                variant="primary"
                className="w-full bg-gradient-to-r from-aquamarine-500 to-icterine-200 hover:from-aquamarine-600 hover:to-icterine-300"
                onClick={() => {
                  handleWaitlistClick();
                  setMobileMenuOpen(false);
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;