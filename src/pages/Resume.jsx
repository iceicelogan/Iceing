import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload } from 'lucide-react';

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">My Resume</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Upload Resume</h2>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-blue-400" />
                <p className="mb-2 text-sm text-blue-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-blue-500">PDF, DOCX, or TXT (MAX. 10MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.docx,.txt" />
            </label>
          </div>
          {resumeFile && (
            <p className="mt-4 text-green-600">
              File uploaded: {resumeFile.name}
            </p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Resume Content</h2>
          <p className="text-gray-700 mb-4">
            Your resume content will be displayed here once uploaded.
          </p>
        </div>

        <div className="text-center text-gray-600">
          <p>&copy; 2024 Ice Marketing. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;