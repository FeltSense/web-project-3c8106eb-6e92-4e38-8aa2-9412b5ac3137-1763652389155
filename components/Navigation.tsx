'use client'

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          Curated Chic
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">Home</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">Shop</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">About</a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">Contact</a>
          <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-md">
            Shop Now
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-800 pb-4`}>
        <div className="flex flex-col items-center space-y-4 pt-4">
          <a href="#" className="text-white text-lg hover:text-blue-200 transition-colors duration-300 font-medium">Home</a>
          <a href="#" className="text-white text-lg hover:text-blue-200 transition-colors duration-300 font-medium">Shop</a>
          <a href="#" className="text-white text-lg hover:text-blue-200 transition-colors duration-300 font-medium">About</a>
          <a href="#" className="text-white text-lg hover:text-blue-200 transition-colors duration-300 font-medium">Contact</a>
          <button className="mt-4 px-8 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-md w-fit">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
}
