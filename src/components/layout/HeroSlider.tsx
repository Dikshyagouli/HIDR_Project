"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

import bgImage1 from "@/public/bgImage1.png"
import bgImage2 from "@/public/bgImage2.jpg"
import bgImage3 from "@/public/bgImage3.jpg"

const slides = [
  {
    image: bgImage1,
    title: "Empowering Communities Through Research",
    subtitle: "& Innovations",
    buttons: ["Read More", "Our Work"],
    duration: 5000,
  },
  {
    image: bgImage2,
    title: "Transforming Lives Through Education",
    subtitle: "& Local Development",
    buttons: ["Join Us", "Projects"],
    duration: 5000,
  },
  {
    image: bgImage3,
    title: "Building Sustainable Communities",
    subtitle: "& Empowering Youth",
    buttons: ["Learn More", "Contact"],
    duration: 5000,
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false)
    }, 5500)

    return () => clearTimeout(introTimer)
  }, [])

  useEffect(() => {
    if (showIntro) return

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, slides[current].duration)

    return () => clearTimeout(timer)
  }, [current, showIntro])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      
      {/* Background Image: Stays perfectly stable without tracking movement */}
      <Image
        src={showIntro ? bgImage1 : slides[current].image}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      {showIntro ? (
        /* The Intro Phase: Only text handles motion from center bottom */
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="intro-rise-animation text-white text-5xl md:text-8xl font-extrabold tracking-[8px] drop-shadow-2xl text-center">
            HIDR NEPAL
          </h1>
        </div>
      ) : (
        /* The Slide Phase: Completely static text and buttons, changing instantly */
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-7xl font-bold max-w-5xl leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-white/90 text-xl md:text-3xl mt-5">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-[#ff8c00] hover:bg-[#e67e00] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
              {slides[current].buttons[0]}
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-medium transition-colors duration-300">
              {slides[current].buttons[1]}
            </button>
          </div>
        </div>
      )}

      {!showIntro && (
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 focus:outline-none ${
                current === index ? "w-8 bg-[#ff8c00]" : "w-3 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}