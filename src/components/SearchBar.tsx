import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  onClear
}) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsActive(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsActive(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false);
      inputRef.current?.blur();
    }
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsActive(false);
    }
  };

  return (
    <div className="relative max-w-lg mx-auto">
      <div className="flex items-center relative">
        <div className="absolute left-3 text-gray-400 z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder={isActive ? "Search articles and tags..." : "Search"}
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="block w-full py-2.5 pl-10 pr-12 bg-gray-900 border border-gray-800 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-colors"
        />
        
        {!isActive && !value && (
          <div className="absolute right-3 text-gray-400">
            <kbd className="px-2 py-1 text-xs bg-gray-800 border border-gray-700 rounded text-gray-300">
              /
            </kbd>
          </div>
        )}

        {value && (
          <button 
            onClick={onClear}
            className="absolute right-3 text-gray-400 hover:text-white z-10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;