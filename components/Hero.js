import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MeteorsHero } from './MeteorsHero';
import { Experiences } from './Experiences';

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
<MeteorsHero/>

    </div>
  );
};

export default HeroSection;