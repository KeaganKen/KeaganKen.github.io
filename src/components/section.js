import React from 'react';
import { ChevronDown, ChevronRight, Book, CheckCircle, Clock, AlertTriangle, ExternalLink } from 'lucide-react';

const Section = ({ data, type, expandedSections, toggleSection, searchTerm, navigate }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800';
      case 'documented': return 'bg-blue-100 text-blue-800';
      case 'correlation': return 'bg-purple-100 text-purple-800';
      case 'fulfilled': return 'bg-green-100 text-green-800';
      case 'progress': return 'bg-yellow-100 text-yellow-800';
      case 'capability': return 'bg-indigo-100 text-indigo-800';
      case 'observed': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
      case 'fulfilled':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'progress':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'observed':
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      default:
        return <Book className="w-4 h-4 text-gray-600" />;
    }
  };

  const handleItemClick = (item, sectionId) => {
    // Only Dead Sea Scrolls has a page for now
    if (item.title === "Dead Sea Scrolls Discovery" && navigate) {
      navigate("/dead-sea-scrolls");
    } else {
      // Show alert for others until you create their pages
      alert(`Page for "${item.title}" coming soon!\n\n${item.description}`);
    }
  };

  const filteredData = data.filter(section => 
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.items.some(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="space-y-4">
      {filteredData.map(section => (
        <div key={section.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div 
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => toggleSection(section.id)}
          >
            <div className="flex items-center space-x-3">
              {section.icon}
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
            </div>
            {expandedSections[section.id] ? 
              <ChevronDown className="w-5 h-5 text-gray-500" /> : 
              <ChevronRight className="w-5 h-5 text-gray-500" />
            }
          </div>
          
          {expandedSections[section.id] && (
            <div className="border-t border-gray-200">
              {section.items.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-blue-50 transition-colors duration-150"
                  onClick={() => handleItemClick(item, section.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2 flex-1">
                      {getStatusIcon(item.status)}
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 flex items-center space-x-2">
                        <span>{item.title}</span>
                        <ExternalLink className="w-4 h-4 text-blue-500" />
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{item.description}</p>
                  {item.reference && (
                    <p className="text-sm font-medium text-blue-600">📖 {item.reference}</p>
                  )}
                  {item.source && (
                    <p className="text-xs text-gray-500 mt-1">Source: {item.source}</p>
                  )}
                  <div className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium">
                    {item.title === "Dead Sea Scrolls Discovery" ? "Click to read full article →" : "Page coming soon →"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Section;