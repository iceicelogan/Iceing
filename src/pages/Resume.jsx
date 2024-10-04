import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Logan's Resume</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <iframe
            src="https://bit.ly/logan-ice-resume"
            title="Logan Ice Resume"
            className="w-full h-[800px] border-none"
          ></iframe>
        </div>

        <div className="text-center text-gray-600">
          <p>&copy; 2024 Iceing, LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;