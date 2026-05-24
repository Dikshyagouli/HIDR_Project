"use client"

import React from "react"
import Image from "next/image"

interface OfferCard {
  id: number
  title: string
  description: string
  imageSrc: string
  link: string
}

const offers: OfferCard[] = [
  {
    id: 1,
    title: "Clean Water Access Initiative",
    description: "Providing sustainable clean water solutions to underserved communities across East Africa.",
    imageSrc: "https://images.unsplash.com/photo-1541944743827-e04aa6427c33?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 2,
    title: "Climate Resilience Research",
    description: "Evidence-based research on climate adaptation strategies for vulnerable communities.",
    imageSrc: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600",
    link: "#"
  },
  {
    id: 3,
    title: "Digital Literacy Program",
    description: "Empowering youth through technology education and digital skills training in rural areas.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    link: "#"
  }
]

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-[#f4f9f9] pt-16 pb-20 select-none">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="flex justify-center items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-[#ff8c00]" />
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ff8c00]">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((card) => (
            <div
              key={card.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/70 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 "
                    loading="lazy"
                  />
                </div>

                <div className="p-6 md:p-7 flex flex-col space-y-3">
                  <h3 className="text-lg font-bold text-[#12161a] leading-snug tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 md:px-7 md:pb-7 pt-2">
                <a
                  href={card.link}
                  className="inline-flex items-center gap-1 text-[#ff8c00] font-semibold text-sm transition-colors duration-200 hover:text-[#e07b00]"
                >
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}