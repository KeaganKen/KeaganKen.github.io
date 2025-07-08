import React from 'react';
import { Globe, Book, CheckCircle, Search, ChevronRight } from 'lucide-react';

const Home = ({ setActiveTab }) => {
  const handleCardClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Biblical Evidence Hub
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Discover archaeological findings, historical documentation, scientific correlations, 
          and prophetic fulfillments that support the accuracy and reliability of biblical accounts.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Biblical Evidence Card - CLICKABLE */}
        <div 
          onClick={() => handleCardClick('evidence')}
          className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Biblical Evidence</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Explore archaeological discoveries, historical documentation, and scientific correlations 
            that validate biblical accounts and strengthen faith through evidence.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Archaeological Discoveries</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Historical Documentation</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Scientific Correlations</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700">
            <span>Explore Evidence</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* End Times Signs Card - CLICKABLE */}
        <div 
          onClick={() => handleCardClick('endtimes')}
          className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Book className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">End Times Signs</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Examine current events and global trends in light of biblical prophecy, 
            including fulfilled prophecies and ongoing developments.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Israel & Jerusalem</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Technology & Communication</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Society & Morality</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-purple-600 font-medium hover:text-purple-700">
            <span>View Signs</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Current Events Card - CLICKABLE */}
        <div 
          onClick={() => handleCardClick('events')}
          className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <Globe className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Current Events</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Monitor current global events including natural disasters, extreme weather, 
            and unusual phenomena in light of biblical prophecy about the last days.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Natural Disasters & Earthquakes</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Extreme Weather Patterns</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Strange Phenomena & Global Conflicts</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-red-600 font-medium hover:text-red-700">
            <span>Monitor Events</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-6">
          To present compelling evidence for the truth and reliability of Scripture through 
          careful examination of archaeological findings, historical records, and scientific 
          discoveries that align with biblical accounts.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Archaeological</h4>
              <p className="text-sm text-gray-600">Ancient discoveries that confirm biblical events</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Book className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Historical</h4>
              <p className="text-sm text-gray-600">Documentation from ancient historians</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Search className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Scientific</h4>
              <p className="text-sm text-gray-600">Modern science supporting Scripture</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Miraculous</h4>
              <p className="text-sm text-gray-600">Unexplainable events that validate divine intervention</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;