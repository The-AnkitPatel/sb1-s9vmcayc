import { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
      
      // Show indicator after scrolling 10% of the page
      setIsVisible(scrollPercent > 10);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  const circumference = 2 * Math.PI * 20; // radius = 20
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className="fixed bottom-8 right-8 z-50 cursor-pointer group transition-all duration-300 hover:scale-110"
      onClick={scrollToTop}
    >
      <div className="relative">
        {/* Background circle */}
        <svg 
          className="w-12 h-12 transform -rotate-90 transition-all duration-300" 
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="rgba(75, 85, 99, 0.3)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="rgba(59, 130, 246, 1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
        </svg>
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-5 h-5 text-blue-500 transition-all duration-300 group-hover:text-blue-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </div>
        
        {/* Background circle for better visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-full -z-10 transition-all duration-300 group-hover:bg-opacity-80"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {Math.round(progress)}% • Back to top
      </div>
    </div>
  );
};

export default ReadingProgress;