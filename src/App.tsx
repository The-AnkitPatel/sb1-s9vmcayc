import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './data/Home';
import AllPosts from './components/AllPosts';
import PostView from './components/PostView';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ReadingProgress from './components/ReadingProgress';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen bg-black text-white">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 right-4 z-50 p-3 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 absolute top-0 ${isSidebarOpen ? 'rotate-45 top-3' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 absolute top-3 ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 absolute top-6 ${isSidebarOpen ? '-rotate-45 top-3' : ''}`}></span>
          </div>
        </button>
        
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        <main className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />} />
            <Route path="/posts" element={<AllPosts />} />
            <Route path="/category/:category" element={<AllPosts />} />
            <Route path="/post/:id" element={<PostView />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <ReadingProgress />
    </Router>
  );
};

export default App;