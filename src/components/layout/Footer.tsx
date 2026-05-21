"use client"

import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-[#12161a] text-gray-300 font-sans pt-16 pb-8">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          <div className="md:col-span-4 flex flex-col space-y-5">
            <h2 className="text-[#ff8c00] font-bold text-xl tracking-wider">
              HIDR
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              HIDR NEPAL : Research and innovation for a sustainable, empowered Nepal.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 bg-[#1b2228] hover:bg-[#ff8c00] hover:text-white text-gray-400 rounded transition-colors duration-200" aria-label="Facebook">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-[#1b2228] hover:bg-[#ff8c00] hover:text-white text-gray-400 rounded transition-colors duration-200" aria-label="Instagram">
                <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" h="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-[#1b2228] hover:bg-[#ff8c00] hover:text-white text-gray-400 rounded transition-colors duration-200" aria-label="YouTube">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 bg-[#1b2228] hover:bg-[#ff8c00] hover:text-white text-gray-400 rounded transition-colors duration-200" aria-label="Twitter">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-4 md:pl-4">
            <h3 className="text-white font-semibold text-lg tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-3 text-gray-400 text-sm md:text-base font-normal">
              <li>
                <Link href="/" className="hover:text-[#ff8c00] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ff8c00] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#ff8c00] transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff8c00] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 w-full">
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden border border-gray-800 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.6732164551418!2d85.32008437546719!3d27.70319737618502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a64b5f13e1%3A0x28b2d0eacda46b98!2sPutalisadak%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1779343916941!5m2!1sen!2snp" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 invert-[0.9] hue-rotate-[180deg]"
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="HIDR Nepal Office Map Location"
              />
            </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-gray-800/60 my-6" />

        <div className="w-full text-center text-gray-500 text-sm tracking-wide pt-2">
          Made by Mindrisers. All rights reserved.
        </div>

      </div>
    </footer>
  )
}