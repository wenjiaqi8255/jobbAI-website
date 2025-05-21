import React from 'react';
import { GraduationCap, Building } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Backed By</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center bg-white px-8 py-6 rounded-lg shadow-sm">
            <GraduationCap className="h-8 w-8 text-aquamarine-300 mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Being built by TUM students</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white px-8 py-6 rounded-lg shadow-sm">
            <Building className="h-8 w-8 text-aquamarine-300 mr-4" />
            <div>
              <p className="text-lg font-semibold text-gray-800">(Will be) backed by UnternehmerTUM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Testimonials Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-sm border border-gray-100 opacity-50">
                <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;