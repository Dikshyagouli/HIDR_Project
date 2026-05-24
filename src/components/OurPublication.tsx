"use client"

import React, { useState } from "react"
import Image from "next/image"

import Publication1 from "@/public/pub1.png"
import Publication2 from "@/public/pub2.png"
import Publication3 from "@/public/pub3.png"

interface PublicationCard {
  id: number
  title: string
  imageSrc: string
  link: string
}

export default function OurPublication() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="w-full bg-[#f4f9f9] pt-16 pb-24 select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="flex items-center gap-3 mb-12 justify-center">
          <div className="w-1 h-8 bg-[#ff8c00]" />
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ff8c00] ">
            Our Publication
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-stretch w-full transition-all duration-500">
          {publications.map((item) => {
            const isHovered = hoveredId === item.id
            const isAnyHovered = hoveredId !== null

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`flex flex-col space-y-4 transition-all duration-500 ease-out h-full ${
                  isHovered 
                    ? "w-full md:w-[60%]" 
                    : isAnyHovered 
                    ? "w-full md:w-[20%]" 
                    : "w-full md:w-[33.33%]"
                }`}
              >
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[420px] bg-white shadow-sm border border-gray-100/60 rounded-none overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out"
                    priority
                  />
                </div>

                <div className="flex flex-col items-start min-h-[95px] justify-between relative overflow-hidden px-1">
                  <h3 className="text-base md:text-lg font-bold text-[#12161a] tracking-tight leading-snug whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {item.title}
                  </h3>

                  <div className="h-10 relative w-full mt-2 overflow-hidden">
                    <div
                      className={`absolute inset-0 transform transition-all duration-300 ease-out ${
                        isHovered 
                          ? "translate-y-0 opacity-100" 
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                     <a
                        href={item.link}
                        className="inline-flex items-center justify-center px-5 h-9 bg-[#ff8c00] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#e07b00] transition-colors duration-200"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="px-6 py-2.5 bg-[#0a3055] text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[#07233f] transition-colors duration-200"
          >
            View More
          </a>
        </div>

      </div>
    </section>
  )
}

const publications: PublicationCard[] = [
  {
    id: 1,
    title: "अपराध पीडितको अधिकार",
    imageSrc: Publication1,
    link: "#"
  },
  {
    id: 2,
    title: "वकिल नभएमा",
    imageSrc: Publication2,
    link: "#"
  },
  {
    id: 3,
    title: "लैङ्गिक हिंसा र न्याय",
    imageSrc: Publication3,
    link: "#"
  }
]