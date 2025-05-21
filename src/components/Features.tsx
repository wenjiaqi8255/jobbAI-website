import React from 'react';
import { Search, FileText, BarChart3 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-start p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-aquamarine-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-aquamarine-50 to-icterine-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="p-4 rounded-lg bg-gradient-to-r from-aquamarine-300 to-aquamarine-500 text-white mb-4 relative transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 relative">{title}</h3>
      <p className="text-gray-600 relative">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Job Matching",
      description: "AI technology evaluates your skills against job requirements for perfect-fit recommendations"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Instant Cover Letters",
      description: "Generate tailored, professional cover letters highlighting your most relevant qualifications"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Application Tracking",
      description: "Monitor your job application status from a simple dashboard"
    }
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
            <span className="relative">
              Key Features
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-aquamarine-500 to-icterine-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform saves you time and improves your application quality
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;