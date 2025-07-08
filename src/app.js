import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Home from './pages/home';
import Evidence from './pages/evidence';
import EndTimes from './pages/endtimes';
import WorldlyEvents from './pages/events';

// Only import the one file that exists and has content
import DeadSeaScrolls from './pages/dead-sea-scrolls';

function AppContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab based on current route
  const getActiveTab = () => {
    const path = location.pathname;
    if (path.startsWith('/evidence') || path.includes('dead-sea-scrolls')) return 'evidence';
    if (path.startsWith('/endtimes')) return 'endtimes';
    if (path.startsWith('/events')) return 'events';
    return 'home';
  };

  const setActiveTab = (tab) => {
    switch(tab) {
      case 'evidence':
        navigate('/evidence');
        break;
      case 'endtimes':
        navigate('/endtimes');
        break;
      case 'events':
        navigate('/events');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Navigation activeTab={getActiveTab()} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          {/* Main section pages */}
          <Route path="/" element={<Home setActiveTab={setActiveTab} />} />
          <Route path="/evidence" element={<Evidence searchTerm={searchTerm} />} />
          <Route path="/endtimes" element={<EndTimes searchTerm={searchTerm} />} />
          <Route path="/events" element={<WorldlyEvents searchTerm={searchTerm} />} />
          
          {/* Only the Dead Sea Scrolls page for now */}
          <Route path="/dead-sea-scrolls" element={<DeadSeaScrolls />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/heisrisen">
      <AppContent />
    </Router>
  );
}

export default App;