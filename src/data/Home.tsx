import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import { postsData } from './postsData';

interface HomeProps {
  isSidebarOpen: boolean;
}

const Home = ({ isSidebarOpen }: HomeProps) => {
  const featuredPosts = postsData.slice(0, 8);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      url: 'https://i.ibb.co/VWzXV01y/IMG-20250527-224138.jpg',
      title: 'MONSOON MISTS OVER A HILLSIDE TOWN',
      location: 'Srinagar, Gharwal Uttarakhand',
      position: 'center center',
      objectFit: 'cover',
      titleColor: '#bdd8ed',
    },
    {
      url: 'https://i.ibb.co/MwjY65G/IMG-20250527-224039.jpg',
      title: 'THE ART OF SLOW LIVING AMONG SACRED HILLS',
      location: 'Srinagar, Gharwal Uttarakhand',
      position: 'center 40%',
      objectFit: 'cover',
      titleColor: '#8db0c9',
    },
    {
      url: 'https://i.ibb.co/sJHzfFV5/IMG-20250528-123222.jpg',
      location: 'Srinagar, Gharwal Uttarakhand',
      position: 'center center',
      objectFit: 'cover',
    },
    {
      url: 'https://i.ibb.co/3JvKDL8/IMG-20250528-130831.jpg',
      location: 'Srinagar, Gharwal Uttarakhand',
      position: 'center center',
      objectFit: 'cover',
    },
    {
      url: 'https://i.ibb.co/xqGKQs9D/IMG-20250228-115147-0706.jpg',
      location: 'Srinagar, Gharwal Uttarakhand',
      position: 'center center',
      objectFit: 'cover',
    },
    {
      url: 'https://i.ibb.co/cSQKjJVJ/IMG-20250527-224115.jpg',
      title: 'SOME NIGHTS YOU JUST NEED TO SIT BY THE RIVER AND THINK',
      subtitle: 'Alakhnanda River',
      position: 'center 30%',
      objectFit: 'cover',
      titleColor: '#727a83',
    },
  ];

  useEffect(() => {
    const nextImage = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    };

    const interval = setInterval(nextImage, 4500);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const goToSlide = (index: number) => {
    if (index !== currentImageIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured-section');
    featuredSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full min-h-screen bg-black">
      <style>
        {`
          @keyframes textFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 8px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2);
            }
            50% {
              box-shadow: 0 0 16px rgba(59, 130, 246, 0.6), 0 0 32px rgba(59, 130, 246, 0.3);
            }
          }

          @keyframes slideIndicator {
            0% { transform: translateX(-50%) scale(1); }
            50% { transform: translateX(-50%) scale(1.1); }
            100% { transform: translateX(-50%) scale(1); }
          }

          @keyframes arrowHover {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(3px); }
          }

          @keyframes arrowHoverLeft {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-3px); }
          }

          .animate-text-fade-in {
            animation: textFadeIn 1.5s ease-out forwards;
          }

          .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
          }

          .slide-indicator-animate {
            animation: slideIndicator 0.3s ease-out;
          }

          .arrow-hover-right:hover svg {
            animation: arrowHover 0.6s ease-in-out infinite;
          }

          .arrow-hover-left:hover svg {
            animation: arrowHoverLeft 0.6s ease-in-out infinite;
          }

          .glass-morphism {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .neo-morphism {
            background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02));
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -1px 0 rgba(255, 255, 255, 0.1);
          }

          .indicator-container {
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
            backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.4),
              0 4px 16px rgba(0, 0, 0, 0.2);
          }

          @keyframes zoomEffect {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }

          .hero-image {
            transform-origin: center;
            transition: transform 0.3s ease-out, opacity 0.3s ease-out;
            animation: zoomEffect 4.5s ease-out forwards;
          }

          .hero-image.transitioning {
            opacity: 0;
            transform: scale(1);
          }
        `}
      </style>

      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image.url}
                  alt={`Hero background ${index + 1}`}
                  className={`w-full h-full object-cover hero-image ${
                    isTransitioning ? 'transitioning' : ''
                  }`}
                  style={{
                    objectPosition: image.position,
                    filter: 'brightness(0.6) contrast(1.1)',
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevSlide}
          className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 z-20 neo-morphism text-white p-2 md:p-4 rounded-xl md:rounded-2xl transition-all duration-500 group hover:scale-110 hover:shadow-2xl arrow-hover-left"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 transition-all duration-300 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 z-20 neo-morphism text-white p-2 md:p-4 rounded-xl md:rounded-2xl transition-all duration-500 group hover:scale-110 hover:shadow-2xl arrow-hover-right"
          aria-label="Next image"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 transition-all duration-300 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {(images[currentImageIndex].location || images[currentImageIndex].subtitle) && (
          <div
            className="absolute top-3 md:top-6 right-3 md:right-6 z-20 neo-morphism rounded-xl md:rounded-2xl px-2 md:px-4 py-1 md:py-2 cursor-pointer hover:scale-105 transition-all duration-300 group"
            onClick={() => {
              const query = images[currentImageIndex].location || images[currentImageIndex].subtitle || '';
              if (query) {
                window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
              }
            }}
          >
            <div className="flex items-center space-x-1 md:space-x-2 text-white">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs md:text-sm font-medium group-hover:text-blue-100 transition-colors duration-300">
                {images[currentImageIndex].location || images[currentImageIndex].subtitle}
              </span>
            </div>
          </div>
        )}

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full flex items-center min-h-screen">
          <div className="text-left w-full pl-4 md:pl-8 lg:pl-16 xl:pl-24">
            <h1
              key={`title-${currentImageIndex}`}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight tracking-wider animate-text-fade-in"
              style={{
                color: images[currentImageIndex].titleColor,
                textShadow: '4px 4px 8px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.7)',
              }}
            >
              {images[currentImageIndex].title}
            </h1>

            {images[currentImageIndex].subtitle && (
              <div className="relative mb-6 md:mb-8">
                <p
                  key={`subtitle-${currentImageIndex}`}
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold relative tracking-wide animate-text-fade-in"
                  style={{
                    color: images[currentImageIndex].titleColor,
                    textShadow: '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 3px rgba(0,0,0,0.8)',
                  }}
                >
                  {images[currentImageIndex].subtitle}
                  <svg
                    className="absolute -right-8 md:-right-16 top-1 md:top-2 w-6 h-4 md:w-12 md:h-8 text-blue-300/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))',
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </p>
              </div>
            )}

            <div className="mt-6 md:mt-8">
              <button
                onClick={scrollToFeatured}
                className="neo-morphism text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold transition-all duration-500 transform hover:scale-105 uppercase tracking-wider shadow-lg hover:shadow-blue-500/30 group relative overflow-hidden"
              >
                <span className="relative z-10">Explore Posts</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="indicator-container rounded-2xl md:rounded-3xl px-3 md:px-6 py-2 md:py-3 shadow-2xl">
            <div className="flex items-center space-x-2 md:space-x-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-500 transform hover:scale-125 ${
                    index === currentImageIndex
                      ? 'scale-110'
                      : 'scale-100 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    index === currentImageIndex
                      ? 'animate-spin-slow border-2 border-blue-400/60 scale-150'
                      : ''
                  }`} style={{
                    animation: index === currentImageIndex ? 'spin 8s linear infinite' : 'none'
                  }}></div>
                  
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 relative overflow-hidden ${
                    index === currentImageIndex
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg pulse-glow'
                      : 'bg-white/40 hover:bg-white/70 shadow-md'
                  }`}>
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-60 blur-sm"></div>
                    )}
                  </div>
                  
                  {index === currentImageIndex && (
                    <div className="absolute -inset-1 rounded-full border border-blue-300/40">
                      <div 
                        className="absolute inset-0 rounded-full border-2 border-blue-400/80"
                        style={{
                          background: `conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.6) ${(100/5)}deg, transparent ${(100/5)}deg)`,
                          animation: 'spin 5s linear infinite'
                        }}
                      ></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="neo-morphism w-4 h-6 md:w-6 md:h-10 rounded-full flex justify-center items-start pt-1 md:pt-2 group hover:scale-110 transition-all duration-300 cursor-pointer" onClick={scrollToFeatured}>
            <div className="w-0.5 h-2 md:w-1 md:h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full group-hover:h-3 md:group-hover:h-4 transition-all duration-300 shadow-lg"></div>
          </div>
        </div>
      </div>

      <div id="featured-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">Featured Posts</h2>
          <p className="text-gray-400 text-base md:text-lg">Discover our latest and most popular content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div id="about-section" className="bg-gray-900 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">ABOUT ME SECTION</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
            If user clicks from the side bar navigation he should redirect to this section of the home page
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8">
            THIS IS THE BOTTOM OF THE HOME PAGE
          </p>

          <div className="bg-black p-6 md:p-10 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-3xl md:text-4xl">👨‍💻</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Ankit Kumar Patel</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                  Dedicated AI/ML engineer and full-stack developer pursuing dual degrees
                  from NIT Uttarakhand (B.Tech CSE, 2028) and IIT Madras (BS Data Science, 2029).
                  Passionate about creating intelligent solutions while capturing nature through content creation.
                </p>
                <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.341-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;