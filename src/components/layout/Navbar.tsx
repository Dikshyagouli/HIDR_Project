"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="w-full bg-[#121212] py-6 text-white font-sans relative z-50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-semibold tracking-wide hover:text-gray-300 transition-colors">
          HIDR NEPAL
        </Link>

        <ul className="flex items-center gap-8 text-xl font-medium">
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
                  ? "text-[#ff8c00] underline underline-offset-8 decoration-2" 
                  : "text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2"
              }`}
            >
              <span>Who We Are</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#ff8c00]" : "text-white"}`} />
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-4 w-48 bg-white text-black rounded-2xl py-3 shadow-lg z-50 border border-gray-100">
                <Link 
                  href="/features/about" 
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2.5 text-base font-normal hover:bg-gray-100 transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="/features/who-we-are" 
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2.5 text-base font-normal hover:bg-gray-100 transition-colors"
                >
                  Our Focus
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link 
              href="/features/contact-us" 
              className="text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2 transition-colors duration-200"
            >
              Careers
            </Link>
          </li>

          <li>
            <Link 
              href="/features/publication" 
              className="text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2 transition-colors duration-200"
            >
              Publications
            </Link>
          </li>

          <li>
            <Link 
              href="/features/blogs" 
              className="text-white hover:text-[#ff8c00] hover:underline underline-offset-8 decoration-2 transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}