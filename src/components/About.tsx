const About = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            ABOUT ME SECTION
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">
            Get to know more about my journey, skills, and passion
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl md:text-6xl">👨‍💻</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Ankit Kumar Patel</h2>
              <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                Dedicated AI/ML engineer and full-stack developer pursuing dual degrees 
                from NIT Uttarakhand (B.Tech CSE, 2028) and IIT Madras (BS Data Science, 2029). 
                Passionate about creating intelligent solutions while capturing nature through content creation.
              </p>
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Gorakhpur, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-blue-400 mb-2 md:mb-3">AI/ML Development</h4>
              <ul className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>• Machine Learning Algorithms</li>
                <li>• Deep Learning & Neural Networks</li>
                <li>• Data Science & Analytics</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-blue-400 mb-2 md:mb-3">Full-Stack Development</h4>
              <ul className="text-sm md:text-base text-gray-300 space-y-1 md:space-y-2">
                <li>• React & TypeScript</li>
                <li>• Node.js & Express</li>
                <li>• Database Management</li>
                <li>• API Development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Education</h3>
          <div className="space-y-4 md:space-y-6">
            <div className="border-l-4 border-blue-400 pl-4 md:pl-6">
              <h4 className="text-lg md:text-xl font-semibold text-white">B.Tech Computer Science & Engineering</h4>
              <p className="text-blue-400">NIT Uttarakhand</p>
              <p className="text-gray-400">2024 - 2028</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4 md:pl-6">
              <h4 className="text-lg md:text-xl font-semibold text-white">BS Data Science</h4>
              <p className="text-green-400">IIT Madras</p>
              <p className="text-gray-400">2025 - 2029</p>
            </div>
          </div>
        </div>

        {/* Contact & Social Links */}
        <div className="bg-gray-900 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Connect With Me</h3>
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-4">
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.341-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
              <span className="hidden md:inline">GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="hidden md:inline">LinkedIn</span>
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              <span className="hidden md:inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;