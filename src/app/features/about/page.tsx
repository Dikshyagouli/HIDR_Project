"use client";

import React from "react";
import Image from "next/image";
import TeamSection from "@/components/TeamSection";
import AboutHero from "@/public/about-hero.jpg";
import AboutSide from "@/public/about-side.png";
import ForWomen from "@/public/forwomen.jpg";
import Education from "@/public/education.jpg";
import Doctor from "@/public/doctor.jpg";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#fdfdfd] min-h-screen font-sans antialiased text-[#333333]">
      
      {/* 1. Subtle Light Grey Textured Hero Section */}
      <div className="w-full relative py-24 px-6 text-center border-b border-gray-200/50 overflow-hidden bg-gray-50">
  
  {/* Next.js Optimized Background Image */}
  <Image
    src={AboutHero}
    alt="Background Pattern"
    fill
    priority
    placeholder="blur" // Adds a smooth blur-up effect while loading
    className="object-cover object-center pointer-events-none select-none z-0"
  />
  <div className="max-w-4xl mx-auto space-y-4 relative z-20">
    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
      About Us
    </p>
    <h1 className="text-3xl md:text-4xl font-normal text-gray-900 leading-snug">
      We are <span className="text-[#f28705] font-semibold">Development Practitioners</span>
    </h1>
    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
      Working to promote child rights, gender equality, and sustainable development in Nepal.
    </p>
  </div>
</div>

      {/* 2. Main About Details Block Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Block: Image Container with Absolute Overlapping 2014 Badge */}
        <div className="lg:col-span-5 relative pb-6 pr-6 lg:pb-8 lg:pr-8">
          <div className="relative rounded-2xl overflow-hidden shadow-sm bg-neutral-100 aspect-[1.05/1] w-full">
            <Image 
              src={AboutSide}
              alt="HIDR Nepal Team Field Discussion" 
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Year Tag Badge - Transformed precisely to overlap the bottom-right frame */}
          <div className="absolute bottom-0 right-0 bg-[#f28705] text-white px-8 py-5 rounded-xl shadow-[0_12px_24px_-5px_rgba(242,135,5,0.35)] text-center min-w-[130px] z-10">
            <span className="block text-3xl font-extrabold leading-none tracking-tight">2014</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/90 block mt-1">Established</span>
          </div>
        </div>

        {/* Right Block: Structural Info Typography */}
        <div className="lg:col-span-7 space-y-8 lg:pl-2">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">About Us</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
              <span className="font-semibold text-[#f28705]">Himal Innovative Development and Research Pvt. Ltd. (HIDR)</span> is a company established by experienced, capable and energetic professional in the field of management and rights-based development, especially targeting women, children, and overall marginalized people/communities in Nepal. Since its establishment in 2014 in Kathmandu, Nepal.
            </p>
          </div>

          {/* Split Strategy Card Callouts matching Figma */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Policy Analysis Card */}
            <div className="bg-[#fafafa] rounded-xl border-l-4 border-[#a26027] p-6 shadow-sm">
              <h4 className="text-base font-bold text-gray-900 tracking-tight">Policy Analysis</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2 font-normal">
                Bridging the gap between empirical data and national policy frameworks.
              </p>
            </div>

            {/* Active Advocacy Card */}
            <div className="bg-[#fafafa] rounded-xl border-l-4 border-[#1c6439] p-6 shadow-sm">
              <h4 className="text-base font-bold text-gray-900 tracking-tight">Active Advocacy</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2 font-normal">
                Influencing decision-makers through evidence-based recommendations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
      {/* 3. The Dynamic Interactive Team Component Showcase Row */}
      <TeamSection />

      {/* 4. Bottom Segment Banner: Capacity Building & Training */}
      <div className="w-full bg-[#f4faf8] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#333333] rounded-[32px] text-white p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-xl">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-bold tracking-tight leading-tight">
              Capacity Building & Training
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Beyond research, we believe in transferring skills. Our training programs have empowered over 5,000 community leaders and researchers in data collection, analysis, and sustainable practice.
            </p>
            <button className="bg-[#f28705] hover:bg-[#e07604] text-white text-xs font-bold tracking-wider px-6 py-3 rounded-xl transition-all shadow-md active:scale-95">
              Explore Our Training
            </button>
          </div>
          
          {/* Right Composite Image Grid Block matching image_95d247.jpg */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Top Row: Dual Side-by-Side Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/2.7] border border-white/5 shadow-md bg-neutral-800">
                <Image
                  src={ForWomen}
                  alt="For Women Training Session"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-w: 1024px) 100vw, 30vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/2.7] border border-white/5 shadow-md bg-neutral-800">
                <Image
                  src={Education}
                  alt="Youth Classroom Education"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-w: 1024px) 100vw, 30vw"
                />
              </div>
            </div>

            {/* Bottom Row: Full Width Horizon Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[8/3] border border-white/5 shadow-md bg-neutral-800 w-full">
              <Image
                src={Doctor}
                alt="Medical Research and Healthcare Practice"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-w: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}