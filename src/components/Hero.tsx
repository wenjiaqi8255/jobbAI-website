import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import Button from './Button';
import heroIllustration from '../assets/hero-illustration.svg';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-aquamarine-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-icterine-100 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 relative">
            Turn your resume into opportunities with AI precision
          </h1>
          <p className="text-xl text-gray-600 max-w-lg relative">
            JobbAI analyzes your skills and experience to find perfect job matches and craft compelling cover letters in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 relative">
            <Button 
              variant="primary"
              onClick={() => window.open('https://getwaitlist.com/waitlist/28573', '_blank')}
              className="group"
            >
              Join Waitlist 
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://github.com/wenjiaqi8255/n8n-workflow', '_blank')}
              className="group"
            >
              <Github className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" /> 
              View on GitHub
            </Button>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-aquamarine-50 to-icterine-50 rounded-full filter blur-3xl opacity-30"></div>
          <img 
            src={heroIllustration} 
            alt="JobbAI resume to job opportunities" 
            className="w-full max-w-lg object-contain animate-float relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;