"use client"

import React from "react"
import Image from "next/image"

import Event1 from "@/public/event1.jpg"
import Event2 from "@/public/event2.jpg"
import Event3 from "@/public/event3.jpg"

interface EventCard {
  id: number
  title: string
  description: string
  date: string
  imageSrc: string
  isFullWidth?: boolean
}

const events: EventCard[] = [
  {
    id: 1,
    title: "Training on Feminist Leadership",
    description: "HIDR organized a capacity-building training focused on feminist leadership, empowering participants.",
    date: "Jan 15, 2024",
    imageSrc: Event1
  },
  {
    id: 2,
    title: "Workshop on Child Rights Protection",
    description: "A national-level workshop was conducted bringing together stakeholders to discuss key challenges.",
    date: "Oct 09, 2025",
    imageSrc: Event2
  },
  {
    id: 3,
    title: "Gender Mainstreaming",
    description: "A policy dialogue session engaged government and non-government actors to integrate gender perspectives.",
    date: "Apr 12, 2026",
    imageSrc: Event3,
    isFullWidth: true
  }
]

export default function RecentEvent() {
  return (
    <section className="w-full bg-white pt-12 pb-20 select-none">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="flex items-center gap-3 mb-12 justify-center max-w-[1140px] mx-auto">
          <div className="w-1 h-8 bg-[#ff8c00]" />
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ff8c00] ">
            Recent Event
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`relative rounded-2xl overflow-hidden group border border-gray-100 shadow-sm ${
                event.isFullWidth ? "md:col-span-2 aspect-[21/9] min-h-[260px]" : "aspect-[4/3] md:aspect-[16/11]"
              }`}
            >
              <Image
                src={event.imageSrc}
                alt={event.title}
                fill
                sizes={event.isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                priority={event.id === 1}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/60" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <div className="max-w-2xl space-y-2 md:space-y-3 relative z-10">
                  
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight font-serif">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs md:text-sm font-normal leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-gray-400 text-xs font-medium">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>{event.date}</span>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}