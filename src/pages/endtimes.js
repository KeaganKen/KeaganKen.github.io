import React, { useState } from 'react';
import Section from '../components/section';
import { endTimesData } from '../data/endtimesdata.js';
import { Globe, Book, CheckCircle } from 'lucide-react';

const EndTimes = ({ searchTerm }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Add icons to the data
  const endTimesDataWithIcons = endTimesData.map(section => ({
    ...section,
    icon: section.id === 'israel' ? <Globe className="w-5 h-5" /> :
          section.id === 'technology' ? <CheckCircle className="w-5 h-5" /> :
          <Book className="w-5 h-5" />
  }));

  return (
    // ONLY CONTENT - NO LAYOUT COMPONENTS!
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">End Times Signs</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Examine current events and trends in light of biblical prophecy regarding the end times, 
          including fulfilled prophecies and ongoing developments.
        </p>
      </div>
      
      <Section 
        data={endTimesDataWithIcons} 
        type="endtimes" 
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default EndTimes;