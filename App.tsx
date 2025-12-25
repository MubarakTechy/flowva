
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Hub from './pages/Hub';
import Discover from './pages/Discover';
import Rewards from './pages/Rewards';
import Pricing from './pages/Pricing';
import Community from './pages/Community';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import Auth from './pages/Auth';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isScrolled={isScrolled} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<Auth />} />
            <Route path="/hub" element={<Hub />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
