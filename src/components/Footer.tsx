import React, { useState } from 'react';
import { Github, Mail, ArrowRight } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://getwaitlist.com/waitlist/28573', '_blank');
    setEmail('');
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">JobbAI</h3>
            <p className="text-gray-300 mb-8 max-w-md">
              Transform your job search with AI precision. Get matched with the right opportunities and standout with personalized cover letters.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/wenjiaqi8255/n8n-workflow" 
                className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@jobbai.com" 
                className="text-gray-300 hover:text-white transition-all transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Join Our Waitlist</h3>
            <p className="text-gray-300 mb-4">
              Be the first to know when we launch and get early access.
            </p>
            <Button 
              variant="primary"
              onClick={() => window.open('https://getwaitlist.com/waitlist/28573', '_blank')}
              className="group"
            >
              Join Waitlist 
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} JobbAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;