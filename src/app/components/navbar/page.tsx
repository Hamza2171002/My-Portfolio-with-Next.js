"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 right-0 z-10 bg-transparent">
      <nav className="flex flex-wrap justify-between items-center max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="text-white text-lg sm:text-2xl md:text-3xl font-bold ml-2 sm:ml-4">
          Muhammad<span>Hamza</span>
        </div>
        
        {/* Links Section */}
        <div className="hidden sm:flex gap-4 sm:gap-8 md:gap-10 lg:gap-12 text-sm sm:text-lg font-serif">
          <Link href="/components/about" className="text-white hover:text-blue-400 duration-300">About</Link>
          <Link href="/components/skills" className="text-white hover:text-blue-400 duration-300">Skills</Link>
          <Link href="/components/projects" className="text-white hover:text-blue-400 duration-300">Projects</Link>
          <Link href="/components/contact" className="text-white hover:text-blue-400 duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden text-white text-xl">
          <button onClick={toggleMenu} aria-label="Open menu">☰</button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white flex flex-col sm:hidden">
            <Link href="/components/about" className="block py-2 text-center hover:bg-blue-500 duration-300">About</Link>
            <Link href="/components/skills" className="block py-2 text-center hover:bg-blue-500 duration-300">Skills</Link>
            <Link href="/components/projects" className="block py-2 text-center hover:bg-blue-500 duration-300">Projects</Link>
            <Link href="/components/contact" className="block py-2 text-center hover:bg-blue-500 duration-300">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar;