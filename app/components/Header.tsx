'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 px-4 py-3 transition-all duration-500 ${scrolled ? 'py-2' : 'py-5'}`}>
      <div className="mx-auto max-w-7xl">
        {/* Główny kontener menu - dostosowany do nachodzenia na treść */}
        <div className={`
          ${scrolled 
            ? 'bg-gradient-to-r from-zinc-900/95 via-black/95 to-zinc-900/95 shadow-xl backdrop-blur-md' 
            : 'bg-gradient-to-r from-zinc-900/40 via-black/40 to-zinc-900/40 backdrop-blur-sm'
          } 
          ${scrolled ? 'border border-zinc-800/40' : 'border-0'}
          rounded-xl transition-all duration-500 transform
          ${scrolled ? 'shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]' : ''}
        `}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="font-bold text-2xl text-white flex items-center group">
                <div className={`relative mr-3 ${scrolled ? 'bg-gradient-to-br from-[#FFE600] to-yellow-500' : 'bg-gradient-to-br from-[#FFE600]/90 to-yellow-500/90'} p-2 rounded-lg overflow-hidden transform transition-transform group-hover:scale-110 duration-300`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    className="h-6 w-6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2c-.2.3-.1.7.1 1 .2.2.4.1.6.1H5" />
                    <path d="M7 14v2c0 1.1.9 2 2 2h1" />
                    <path d="M16 14v2c0 1.1-.9 2-2 2h-.5" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="16" cy="17" r="2" />
                  </svg>
                  <div className="absolute inset-0 bg-white opacity-20 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl leading-none font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#FFE600] to-yellow-400">KARZONE</span>
                  <span className="text-xs tracking-widest text-zinc-400">PREMIUM CARS</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-2">
                {['Pojazdy', 'Lokalizacje', 'Sprzedaż', 'Voucher'].map((item, index) => (
                  <Link 
                    key={index}
                    href={`/${item.toLowerCase() === 'pojazdy' ? 'cars' : item.toLowerCase()}`} 
                    className="relative px-4 py-2 text-gray-300 font-medium group"
                  >
                    <span className="relative z-10 transition duration-200 group-hover:text-black">{item}</span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFE600] to-yellow-400 opacity-0 transform scale-75 -z-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                  </Link>
                ))}
                <Link 
                  href="/contact" 
                  className="relative overflow-hidden bg-gradient-to-r from-[#FFE600] to-yellow-400 text-black px-6 py-2 rounded-full font-bold transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,230,0,0.5)]"
                >
                  <span className="relative z-10">Kontakt</span>
                  <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                  <span className={`absolute h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100 top-2 w-6'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
          <nav className="flex flex-col items-center space-y-8 p-4">
            <Link href="/" className="font-bold text-2xl text-white flex items-center mb-8" onClick={() => setIsMenuOpen(false)}>
              <div className="mr-3 bg-gradient-to-br from-[#FFE600] to-yellow-500 p-2 rounded-lg overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  className="h-6 w-6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2c-.2.3-.1.7.1 1 .2.2.4.1.6.1H5" />
                  <path d="M7 14v2c0 1.1.9 2 2 2h1" />
                  <path d="M16 14v2c0 1.1-.9 2-2 2h-.5" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="16" cy="17" r="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl leading-none font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#FFE600] to-yellow-400">KARZONE</span>
                <span className="text-xs tracking-widest text-zinc-400">PREMIUM CARS</span>
              </div>
            </Link>
            <Link 
              href="/cars"
              className="relative text-2xl font-medium text-white py-2 w-40 text-center transform transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Pojazdy
              <span className="block h-0.5 w-10 bg-[#FFE600] mx-auto mt-1 transform transition-transform duration-300 scale-0 group-hover:scale-100"></span>
            </Link>
            <Link 
              href="/locations"
              className="relative text-2xl font-medium text-white py-2 w-40 text-center transform transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Lokalizacje
              <span className="block h-0.5 w-10 bg-[#FFE600] mx-auto mt-1 transform transition-transform duration-300 scale-0 group-hover:scale-100"></span>
            </Link>
            <Link 
              href="/sales"
              className="relative text-2xl font-medium text-white py-2 w-40 text-center transform transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Sprzedaż
              <span className="block h-0.5 w-10 bg-[#FFE600] mx-auto mt-1 transform transition-transform duration-300 scale-0 group-hover:scale-100"></span>
            </Link>
            <Link 
              href="/voucher"
              className="relative text-2xl font-medium text-white py-2 w-40 text-center transform transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Voucher
              <span className="block h-0.5 w-10 bg-[#FFE600] mx-auto mt-1 transform transition-transform duration-300 scale-0 group-hover:scale-100"></span>
            </Link>
            <Link 
              href="/contact"
              className="mt-4 bg-gradient-to-r from-[#FFE600] to-yellow-400 text-black px-8 py-3 rounded-full font-bold transform transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 