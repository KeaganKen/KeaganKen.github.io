import React, { useState } from 'react';
import './app.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Home from './pages/home';
import Evidence from './pages/evidence';
import EndTimes from './pages/endtimes';
import WorldlyEvents from './pages/events';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

  const renderContent = () => {
    switch(activeTab) {
      case 'evidence':
        return <Evidence searchTerm={searchTerm} />;
      case 'endtimes':
        return <EndTimes searchTerm={searchTerm} />;
      case 'events':
        return <WorldlyEvents searchTerm={searchTerm} />;
      default:
        return <Home setActiveTab={setActiveTab} />; {/* Pass setActiveTab to Home */}
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;