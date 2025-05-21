import React from 'react';
import { Upload, ListFilter, FileCheck } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-aquamarine-400 text-white mb-4">
          {icon}
        </div>
        <div className="absolute top-0 -right-1 flex items-center justify-center w-8 h-8 rounded-full bg-icterine-500 text-gray-800 text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center max-w-xs">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Input your skills",
      description: "Upload your resume or manually input your skills and experience",
      icon: <Upload className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Review AI-matched jobs",
      description: "Get personalized job recommendations based on your qualifications",
      icon: <ListFilter className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Generate & apply",
      description: "Create custom cover letters and track your applications",
      icon: <FileCheck className="h-6 w-6" />
    }
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your job search experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
          
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;