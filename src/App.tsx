/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dark text-white selection:bg-primary selection:text-white relative">
        {/* Animated Background Elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
           <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
           <div className="noise absolute inset-0 opacity-10"></div>
        </div>

        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

