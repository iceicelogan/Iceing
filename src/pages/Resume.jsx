import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">My Resume</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <img 
            src="/resume-image-1.jpg" 
            alt="Logan Ice Resume - Page 1" 
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />
          <img 
            src="/resume-image-2.jpg" 
            alt="Logan Ice Resume - Page 2" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="text-center text-gray-600">
          <p>&copy; 2024 Ice Marketing. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;