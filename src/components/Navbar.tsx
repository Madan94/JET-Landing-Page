"use client";

import MenuIcon from '../assets/icons/menu.svg';
import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <a href="https://justeverything.app">
                <h1 className="text-white text-2xl font-extrabold" style={{ background: 'linear-gradient(to right, #ffaa40, #9c40ff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>JustEverything.</h1>
              </a>
            </div>
            <div 
              className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden cursor-pointer hover:bg-white/10 transition-colors'
              onClick={toggleMenu}
              role="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <MenuIcon className="text-white" />
              )}
            </div>
            <nav className={`text-white gap-6 items-center ${menuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row absolute sm:relative top-20 sm:top-0 left-0 right-0 bg-black sm:bg-transparent p-4 sm:p-0 z-50 transition-all duration-300 ease-in-out`}>
              <div className="w-full flex justify-end sm:hidden mb-4">
                <button 
                  onClick={toggleMenu}
                  className="text-white hover:text-opacity-80 transition-colors"
                  aria-label="Close menu"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
              <a 
                href="#about" 
                className='text-opacity-60 text-white hover:text-opacity-100 transition w-full sm:w-auto text-center py-2 sm:py-0'
                onClick={() => setMenuOpen(false)}
              >
                About us
              </a>
              <a 
                href="#marketplace" 
                className='text-opacity-60 text-white hover:text-opacity-100 transition w-full sm:w-auto text-center py-2 sm:py-0'
                onClick={() => setMenuOpen(false)}
              >
                JET MarketPlace
              </a>
              <a 
                href="#contact" 
                className='text-opacity-60 text-white hover:text-opacity-100 transition w-full sm:w-auto text-center py-2 sm:py-0'
                onClick={() => setMenuOpen(false)}
              >
                Investors
              </a>
              <a 
                href="#team" 
                className='text-opacity-60 text-white hover:text-opacity-100 transition w-full sm:w-auto text-center py-2 sm:py-0'
                onClick={() => setMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#faqs" 
                className='text-opacity-60 text-white hover:text-opacity-100 transition w-full sm:w-auto text-center py-2 sm:py-0' 
                id="faq"
                onClick={() => setMenuOpen(false)}
              >
                FAQ&apos;s
              </a>
              <a 
                href="mailto:contact@justeverything.app" 
                className="w-full sm:w-auto text-center"
                onClick={() => setMenuOpen(false)}
              >
                <button className='bg-white py-2 px-4 rounded-lg text-black hover:bg-yellow-300 transition-colors w-full sm:w-auto '>
                  Let&apos;s Talk
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
