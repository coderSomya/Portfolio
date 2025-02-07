import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"
      >
        {/* Replace this img tag with your actual image */}
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="block">Welcome to My World</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 text-gray-200">
            Someone just genuiniely interested in problem solving
          </span>
        </h1>
        
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-200">
          I write backends and systems
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 group">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;