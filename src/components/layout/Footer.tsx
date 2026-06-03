"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1020] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          <div className="md:col-span-4">
            <h2 className="text-[#ff8c00] text-3xl font-bold mb-6">
              HIDR
            </h2>

            <p className="text-white text-[19px] leading-9 max-w-sm">
              HIDR NEPAL : Research and innovation for a sustainable,
              empowered Nepal.
            </p>

            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#1b2232] flex items-center justify-center hover:bg-[#ff8c00] transition duration-300"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#1b2232] flex items-center justify-center hover:bg-[#ff8c00] transition duration-300"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#1b2232] flex items-center justify-center hover:bg-[#ff8c00] transition duration-300"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#1b2232] flex items-center justify-center hover:bg-[#ff8c00] transition duration-300"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:pl-10">
            <h3 className="text-white text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-5 text-[19px] text-white">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#ff8c00] transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/features/about"
                  className="hover:text-[#ff8c00] transition duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/features/gallery"
                  className="hover:text-[#ff8c00] transition duration-300"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/features/contact"
                  className="hover:text-[#ff8c00] transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-lg">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.8723211577594!2d85.32008437526547!3d27.703197376184967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a64b5f13e1%3A0x28b2d0eacda46b98!2sPutalisadak%2C%20Kathmandu%2044600%2C%20Nepal!5e1!3m2!1sen!2sus!4v1779348352501!5m2!1sen!2sus"
  className="w-full h-[240px] border-0 rounded-2xl"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white mt-14 mb-6" />

        <div className="text-center">
          <p className="text-white text-[19px]">
            Made by Mindrisers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
