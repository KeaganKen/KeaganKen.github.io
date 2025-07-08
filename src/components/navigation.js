import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('home')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'home'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('evidence')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'evidence'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Biblical Evidence
          </button>
          <button
            onClick={() => setActiveTab('endtimes')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'endtimes'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            End Times Signs
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'events'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Current Events
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;