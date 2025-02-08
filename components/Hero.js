import React from 'react';
import { MeteorsHero } from './MeteorsHero';
import { FlippingWords } from './FlippingWords';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"
      >
        {/* Replace this img tag with your actual image */}
        <img 
         
          src="/pi.jpeg" 
          alt="Hero Background" 
          className="w-full h-1/2 bg-transparent object-contain mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className='flex flex-col'>
<MeteorsHero/>
<FlippingWords/>
</div>
    </div>
  );
};

export default HeroSection;