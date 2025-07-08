import React, { useState } from 'react';
import Section from '../components/section';
import { evidenceData } from '../data/evidencedata.js';
import { Globe, Book, CheckCircle } from 'lucide-react';

const Evidence = ({ searchTerm, navigate }) => {  // ← Add navigate here
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Add icons to the data
  const evidenceDataWithIcons = evidenceData.map(section => ({
    ...section,
    icon: section.id === 'archaeological' ? <Globe className="w-5 h-5" /> :
          section.id === 'historical' ? <Book className="w-5 h-5" /> :
          <CheckCircle className="w-5 h-5" />
  }));

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Evidence for Biblical Truth</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Explore archaeological discoveries, historical documentation, and scientific correlations 
          that support the accuracy and reliability of biblical accounts.
        </p>
      </div>
      
      <Section 
        data={evidenceDataWithIcons} 
        type="evidence" 
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        searchTerm={searchTerm}
        navigate={navigate}  // ← Add this line
      />
    </div>
  );
};

export default Evidence;