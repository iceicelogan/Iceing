import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Iceing - Marketing and Photography</h1>
        
        <p className="text-lg mb-8 text-gray-700">
          At Iceing, we support others through growth and marketing consulting by Logan, and photography by Kasey. Whether you're in need of marketing support or family photos, we've got you covered.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Iceing by Kasey</h2>
          <p className="text-gray-700 mb-4">
            Kasey is the creative heart and soul behind Iceing and a leading St. Louis photographer specializing in family photography.
          </p>
          <a href="https://www.iceingbykasey.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline">
            Learn more
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Iceing by Logan</h2>
          <p className="text-gray-700 mb-4">
            Logan is the marketing and growth lead of Iceing. He supports businesses through consulting and fractional marketing leadership, aiming to help others do what they do best, better.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <Button
              onClick={() => window.location.href = 'mailto:clarkloganice@gmail.com'}
              className="w-full sm:w-auto flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Link to="/resume" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p>&copy; 2024 Iceing, LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
