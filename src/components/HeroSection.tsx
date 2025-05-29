import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          嘉義高中資訊研究社
          <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-blue-300">
            CYSH_IRC
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
          探索科技、創新思維、共同成長
          <span className="block mt-2 text-lg md:text-xl text-blue-200">
            Explore Technology, Innovative Thinking, Growing Together
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
          <Link 
            to="/activities" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            探索活動 / Explore Activities
            <ArrowRight size={18} className="ml-2" />
          </Link>
          
          <Link 
            to="/leadership" 
            className="bg-transparent border-2 border-white hover:border-blue-300 text-white hover:text-blue-300 font-medium py-3 px-8 rounded-full transition-all duration-300"
          >
            認識幹部 / Meet Our Team
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
        <span className="text-white text-sm mt-2 text-center">滾動查看更多 / Scroll to explore</span>
      </div>
    </div>
  );
};

export default HeroSection;