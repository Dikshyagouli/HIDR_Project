"use client"

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Link } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="relative flex items-center justify-between bg-[#121212] px-12 py-6 text-white font-sans">
      <div className="text-xl font-semibold tracking-wide">
        HIDR NEPAL
      </div>

      <ul className="flex items-center gap-8 text-sm font-medium">
        <li>
          <Link 
            href="/" 
            className="text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2 transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        <li ref={dropdownRef} className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 focus:outline-none ${
              isOpen 
                ? 'text-[#ff8c00] underline underline-offset-8 decoration-2' 
                : 'text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2'
            }`}
          >
            <span>Who We Are</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#ff8c00]' : 'text-white'}`} />
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-4 w-48 bg-white text-black rounded-2xl py-3 shadow-lg z-50">
              <a 
                href="/about" 
                className="block px-6 py-2.5 text-base font-normal hover:bg-gray-100 transition-colors"
              >
                About Us
              </a>
              <a 
                href="/offers" 
                className="block px-6 py-2.5 text-base font-normal hover:bg-gray-100 transition-colors"
              >
                What We Offer
              </a>
              <a 
                href="/focus" 
                className="block px-6 py-2.5 text-base font-normal hover:bg-gray-100 transition-colors"
              >
                Our Focus Area
              </a>
            </div>
          )}
        </li>

        <li>
          <a href="/careers" className="text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2 transition-colors duration-200">
            Careers
          </a>
        </li>

        <li>
          <a href="/publications" className="text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2 transition-colors duration-200">
            Publications
          </a>
        </li>

        <li>
          <a href="/blog" className="text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2 transition-colors duration-200">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}