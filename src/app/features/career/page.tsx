"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Fixed: Added the missing Next.js Image import
import { 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  BarChart3, 
  ArrowRight
} from "lucide-react" // Fixed: Removed missing social icons from Lucide

import Bannerbg from "../../../public/blog-hero.png"

// Types & Interfaces
interface Benefit {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  bgColor: string
  iconColor: string
}

interface JobOpening {
  id: number
  title: string
  category: string
  experience: string
  deadline?: string
  slug: string
}

export default function CareerPage() {
  const [activeCategory, setActiveCategory] = useState("ENGINEERING")

  const categories = [
    { name: "HT & ADMIN", key: "HT_ADMIN", count: 0 },
    { name: "ENGINEERING", key: "ENGINEERING", count: 20 },
    { name: "SUPPORT", key: "SUPPORT", count: 0 },
    { name: "DESIGN", key: "DESIGN", count: 0 },
    { name: "DIGITAL MARKETING", key: "DIGITAL_MARKETING", count: 0 },
  ]

  return (
    <div className="w-full bg-[#fcfcfc] font-sans text-gray-800 select-none">
      
      {/* 1. Hero / Banner Section */}
      <div className="relative w-full py-20 md:py-28 px-6 text-center border-b-4 bg-[#185271] overflow-hidden">
        {/* Next.js Background Image Asset */}
        <Image
          src={Bannerbg}
          alt="Career Background"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-overlay"
        />
        
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider uppercase mb-6">
            Join Us
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-normal max-w-3xl leading-relaxed opacity-90 mb-8">
            In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem Ipsum may be used as a placeholder before final copy is available.
          </p>
          <button className="bg-[#ff8c00] hover:bg-[#e07b00] text-white text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded transition-all duration-300 shadow-md">
            Join the Team
          </button>
        </div>
      </div>

      {/* 2. Benefits Section */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1a365d]">
            Benefits
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] tracking-tight leading-tight">
            Why you Should Join Our<br />Awesome Team
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal">
            we want to feel like learning when you are working at HIDR Nepal. It is for that we have curated a good set of benefits for you that starts with the free lunch!
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="flex flex-col space-y-3 p-2">
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${benefit.bgColor} ${benefit.iconColor}`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0a192f] tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Career Openings Layout Block */}
      <div className="bg-gray-50/50 border-t border-b border-gray-100 py-20 px-6">
        <div className="max-w-[1240px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Come Join Us
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] tracking-tight">
              Career Openings
            </h2>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              We're always looking for creative, talented self-starters to join the HIDR family. Check out our open roles below and fill out an application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`whitespace-nowrap px-4 py-3 text-xs font-bold tracking-wider rounded-lg text-left transition-all flex items-center justify-between min-w-[160px] lg:w-full ${
                    activeCategory === cat.name
                      ? "text-[#ef4444] bg-red-50/50 font-extrabold"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
                  }`}
                >
                  <span>{cat.name}</span>
                  {cat.count > 0 && (
                    <span className="ml-2 text-[10px] bg-red-100 text-[#ef4444] px-1.5 py-0.5 rounded-full">
                      ({cat.count})
                    </span>
                  )}
                </button>
              ))}
            </aside>

            <div className="lg:col-span-9 space-y-4">
              {jobOpeningsData
                .filter((job) => job.category === activeCategory)
                .map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#0a192f] tracking-tight group-hover:text-[#ff8c00] transition-colors">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 md:gap-16 text-left">
                      <div className="flex flex-col">
                        <span className="text-[11px] uppercase tracking-wider font-medium text-gray-400 mb-0.5">
                          Experience
                        </span>
                        <span className="text-sm font-bold text-[#0a192f]">
                          {job.experience}
                        </span>
                      </div>

                      <div className="flex flex-col min-w-[90px]">
                        {job.deadline ? (
                          <>
                            <span className="text-[11px] uppercase tracking-wider font-medium text-gray-400 mb-0.5">
                              Deadline
                            </span>
                            <span className="text-sm font-bold text-gray-700 font-mono">
                              {job.deadline}
                            </span>
                          </>
                        ) : (
                          <div className="h-9" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center md:pl-4">
                      <Link 
                        href={`/careers/${job.slug}`}
                        className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-[#ff8c00] group-hover:border-[#ff8c00] group-hover:bg-orange-50/30 transition-all duration-300"
                      >
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}

              {jobOpeningsData.filter((job) => job.category === activeCategory).length === 0 && (
                <div className="bg-white rounded-xl border border-dashed border-gray-200 p-12 text-center text-gray-400 text-sm">
                  No active openings available for this track right now.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
         </div>
  )
}

// Benefits Mock Static Data Array
const benefitsData: Benefit[] = [
  {
    id: 1,
    title: "Team work",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    icon: <Users className="w-5 h-5" />,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Secured Future",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    icon: <ShieldCheck className="w-5 h-5" />,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    id: 3,
    title: "Learning Opportunity",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    icon: <GraduationCap className="w-5 h-5" />,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    id: 4,
    title: "Upgrade Skills",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    icon: <BarChart3 className="w-5 h-5" />,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600"
  }
]

// Openings Mock Data Array
const jobOpeningsData: JobOpening[] = [
  {
    id: 1,
    title: "Wordpress Developer",
    category: "ENGINEERING",
    experience: "2 Years",
    deadline: "2021-05-08",
    slug: "wordpress-developer"
  },
  {
    id: 2,
    title: "Javascript",
    category: "ENGINEERING",
    experience: "1 Years",
    deadline: "2021-05-08",
    slug: "javascript-developer"
  },
  {
    id: 3,
    title: "Apps Developer",
    category: "ENGINEERING",
    experience: "3 Years",
    deadline: "2021-05-08",
    slug: "apps-developer"
  },
  {
    id: 4,
    title: "IOS Developer",
    category: "ENGINEERING",
    experience: "2 Years",
    slug: "ios-developer"
  },
  {
    id: 5,
    title: "Node JS Developer",
    category: "ENGINEERING",
    experience: "3 Years",
    slug: "node-js-developer"
  }
]