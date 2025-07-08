import React, { useState } from 'react';
import Section from '../components/section';
import { worldlyEventsData } from '../data/eventsdata.js';
import { Flame, Waves, Zap, AlertTriangle } from 'lucide-react';

const WorldlyEvents = ({ searchTerm }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Add icons to the data
  const worldlyEventsDataWithIcons = worldlyEventsData.map(section => ({
    ...section,
    icon: section.id === 'natural-disasters' ? <Flame className="w-5 h-5" /> :
          section.id === 'extreme-weather' ? <Waves className="w-5 h-5" /> :
          section.id === 'strange-phenomena' ? <Zap className="w-5 h-5" /> :
          <AlertTriangle className="w-5 h-5" />
  }));

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Worldly Events</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Monitor current global events including natural disasters, extreme weather patterns, 
          and unusual phenomena in light of biblical prophecy about the last days.
        </p>
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">
            <strong>Note:</strong> These events are documented from various news sources and presented for 
            educational observation. We encourage discernment and prayer when considering current events 
            in relation to biblical prophecy.
          </p>
        </div>
      </div>
      
      <Section 
        data={worldlyEventsDataWithIcons} 
        type="worldly-events" 
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        searchTerm={searchTerm}
      />
    </div>
  );
};

// MAKE SURE THIS LINE EXISTS!
export default WorldlyEvents;