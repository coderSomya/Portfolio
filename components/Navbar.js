"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ModeToggle } from './theme-button';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background/50 border-b shadow-md fixed w-full top-0 z-50 mb-4 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
            <Button variant="secondary">Somyajeet's Space
            </Button>

            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
  <Link href="/" className="relative px-2 py-1 text-gray-600 hover:text-gray-800 group transition-colors">
    <span>Home</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-200"></span>
  </Link>
  <Link href="/about" className="relative px-2 py-1 text-gray-600 hover:text-gray-800 group transition-colors">
    <span>About</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-200"></span>
  </Link>
  <Link href="/contact" className="relative px-2 py-1 text-gray-600 hover:text-gray-800 group transition-colors">
    <span>Contact</span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-200"></span>
  </Link>
  <ModeToggle/>
</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">

            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
  <div className="flex flex-col space-y-4 pb-4">
    <Link 
      href="/" 
      className="relative px-2 py-1 text-gray-600 hover:text-gray-800 group transition-colors"
      onClick={() => setIsOpen(false)}
    >
      <span>Home</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-200"></span>
    </Link>
    <Link 
      href="/about" 
      className="relative px-2 py-1 text-gray-600 hover:text-gray-800 group transition-colors"
      onClick={() => setIsOpen(false)}
    >
      <span>About</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-200"></span>
    </Link>
    <Link 
      href="/contact" 
      className="relative px-2 py-1 text-gray-600 hover:text-gray-800 group transition-colors"
      onClick={() => setIsOpen(false)}
    >
      <span>Contact</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-200"></span>
    </Link>
  </div>
  <ModeToggle/>
</div>
        )}
      </div>



    </nav>
  );
};

export default Navbar;