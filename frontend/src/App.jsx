import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Varieties from './components/Varieties';
import ExperienceGrid from './components/ExperienceGrid';
import Location from './components/Location';
import VisitRequestForm from './components/VisitRequestForm';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import LoadingSpinner from './components/LoadingSpinner';
import { LanguageProvider } from './components/LanguageContext';
import LanguageSelectorModal from './components/LanguageSelectorModal';

function MainWebsite() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Premium grape loader effect for 1.8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative min-h-screen selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Varieties />
        <ExperienceGrid />
        <Location />
        <VisitRequestForm />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Main Website Route */}
          <Route path="/" element={<MainWebsite />} />
          
          {/* Hidden Admin Dashboard Route */}
          <Route path="/jk-admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
      <LanguageSelectorModal />
    </LanguageProvider>
  );
}

