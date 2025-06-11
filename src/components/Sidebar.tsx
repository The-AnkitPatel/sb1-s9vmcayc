import React, { useState, Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  name: string;
  path: string;
  hasSubmenu?: boolean;
  submenu?: NavLink[];
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'All Posts', path: '/posts' },
  {
    name: 'Categories',
    path: '/categories',
    hasSubmenu: true,
    submenu: [
      { name: 'Coding', path: '/category/coding' },
      { name: 'Stories', path: '/category/stories' },
      { name: 'Eco', path: '/category/eco' }
    ]
  },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' }
];

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [expandedCategory, setExpandedCategory] = useState(false);
  const location = useLocation();

  const toggleCategory = () => setExpandedCategory(prev => !prev);

  const isActiveLink = (path: string) => location.pathname === path;

  const isSubmenuActive = (submenu?: NavLink[]) =>
    submenu?.some(sub => location.pathname === sub.path) ?? false;

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      <aside
        className={`fixed w-64 lg:w-72 h-full bg-black border-r border-gray-800 p-4 sm:p-6 overflow-y-auto transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="mb-8 lg:mb-10">
          <Link to="/" className="flex items-center mb-6 lg:mb-8" onClick={() => setIsSidebarOpen(false)}>
            <span className="text-xl lg:text-2xl font-bold tracking-tight">Ankit's Archive</span>
          </Link>

          <nav className="mb-6 lg:mb-8">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.hasSubmenu ? (
                    <div className="relative">
                      <button
                        onClick={toggleCategory}
                        className={`w-full flex items-center justify-between py-2 px-3 rounded hover:bg-gray-800 transition text-left group ${
                          isActiveLink(link.path) || isSubmenuActive(link.submenu)
                            ? 'font-bold text-white bg-gray-800'
                            : 'text-gray-300'
                        }`}
                      >
                        <span className="text-sm lg:text-base">{link.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            expandedCategory ? 'rotate-180' : ''
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {expandedCategory && link.submenu && (
                        <ul className="relative ml-4 mt-1 space-y-0">
                          {link.submenu.map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subLink.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`flex items-center pl-2 py-1.5 px-3 rounded hover:bg-gray-800 transition text-sm group ${
                                  isActiveLink(subLink.path)
                                    ? 'font-bold text-white bg-gray-800'
                                    : 'text-gray-300 hover:text-white'
                                }`}
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`block py-2 px-3 rounded hover:bg-gray-800 transition text-sm lg:text-base ${
                        isActiveLink(link.path)
                          ? 'font-bold text-white bg-gray-800'
                          : 'text-gray-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Profile Footer */}
          <div className="mb-6 lg:mb-8">
            <div className="flex items-center mb-3 lg:mb-4">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Profile"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="font-bold text-sm lg:text-base">Ankit Kumar Patel</h3>
                <p className="text-xs lg:text-sm text-gray-400">Gorakhpur, Uttar Pradesh</p>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-gray-300 mb-3 lg:mb-4 leading-relaxed">
              Dedicated AI/ML engineer and full-stack developer pursuing dual degrees from NIT Uttarakhand (B.Tech CSE, 2028) and IIT Madras (BS Data Science, 2029). Passionate about creating intelligent solutions while capturing nature through content creation.
            </p>
            <div className="flex space-x-2">
              <SocialIcon href="https://github.com/The-AnkitPatel" title="GitHub" type="github" />
              <SocialIcon href="https://www.linkedin.com/in/the-ankitkumarpatel" title="LinkedIn" type="linkedin" />
              <SocialIcon href="https://ankitpatel.online" title="Portfolio" type="portfolio" />
              <SocialIcon href="mailto:ankitkumarpatel357@gmail.com" title="Email" type="email" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

// Social Icon Component for Reuse
const SocialIcon = ({ href, title, type }: { href: string; title: string; type: string }) => {
  const renderIcon = () => {
    switch (type) {
      case 'github':
        return (
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.3 24 24 23.227 24 22.271V1.729C24 .774 23.3 0 22.222 0h.003z"/>
          </svg>
        );
      case 'portfolio':
        return (
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        );
      case 'email':
        return (
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        );
      default:
        return <span className="text-xs">{title[0]}</span>;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1.5 lg:p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
      title={title}
    >
      {renderIcon()}
    </a>
  );
};

export default Sidebar;