"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Mark from "@/public/mark.png";
import Nadia from "@/public/nadia.png";
import Evan from "@/public/evan.png";
import Stefy from "@/public/stefy.png";      

interface TeamMember {
  id: number;
  name: string;
  role: string;
  hexColor: string;      
  pillTextColor: string; 
  bgImage: StaticImageData;
  imageOffset?: string;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Mr. Mark baba",
      role: "CEO",
      hexColor: "#FF854B", 
      pillTextColor: "text-[#FF854B]",
      bgImage: Mark,
    },
    {
      id: 2,
      name: "Nadia Lestary",
      role: "Manager",
      hexColor: "#532822", 
      pillTextColor: "text-[#532822]",
      bgImage: Nadia,
      // imageOffset: "-25px",
    },
    {
      id: 3,
      name: "Evan Caster Lee",
      role: "Market Advisor",
      hexColor: "#43A574", 
      pillTextColor: "text-[#43A574]",
      bgImage: Evan,
    },
    {
      id: 4,
      name: "Stefy Catlyna",
      role: "Content Creator",
      hexColor: "#FFD25A", 
      pillTextColor: "text-[#FFD25A]",
      bgImage: Stefy,
    },
  ];

  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className="w-full bg-[#f4faf8] py-20 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Team</h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            Meet the people behind our work creative thinkers, problem solvers, and passionate professionals. Together, we collaborate to turn ideas into impactful results.
          </p>
        </div>

        {/* Dynamic Accordion Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 w-full min-h-[550px] pt-12">
          {teamMembers.map((member) => {
            const isActive = activeId === member.id;
            
            return (
              <div
                key={member.id}
                onMouseEnter={() => setActiveId(member.id)}
                className={`relative rounded-[36px] p-8 flex flex-col justify-between cursor-pointer select-none transition-all duration-700 ease-out ${
                  isActive 
                    ? "flex-grow-[4.5] lg:w-[42%] shadow-xl scale-[1.01] overflow-visible" 
                    : "flex-grow-[1] lg:w-[16%] filter brightness-[0.95] contrast-[1.02] overflow-hidden"
                }`}
                style={{ backgroundColor: member.hexColor }}
              >
                
                {/* Fixed Structural Framing Container for Portals */}
                <div
                  className="absolute inset-x-0 h-[85%] pointer-events-none select-none z-10"
                  style={{ bottom: member.imageOffset || "0px" }}
                >
                  {/* Inner relative frame to securely anchor the inner Next.js fill layout */}
                  <div className={`relative w-full h-full transition-transform duration-700 ease-out origin-bottom ${
  member.id === 2
    ? "scale-100"
    : isActive
    ? "scale-120"
    : "scale-100"
}`}
>
                    <Image
                      src={member.bgImage}
                      alt={member.name}
                      fill
                      priority={member.id === 1}
                      className="object-cover object-bottom"
                    />
                  </div>
                </div>

                {/* Shading Vignette Layer matching card border shapes */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent transition-opacity duration-500 rounded-[36px] z-20 pointer-events-none ${
                  isActive ? "opacity-100" : "opacity-50"
                }`} />

                {/* Top content wrapper section */}
                <div className="space-y-4 z-30 w-full text-left relative">
                  <h3 className={`font-bold tracking-tight leading-tight text-white drop-shadow-md transition-all duration-500 ${
                    isActive ? "text-3xl" : "text-base lg:text-lg lg:line-clamp-2"
                  }`}>
                    {member.name}
                  </h3>

                  {/* Role capsule buttons */}
                  <div className={`transition-all duration-500 ease-out ${
                    isActive ? "opacity-100 max-h-12 translate-y-0" : "opacity-0 max-h-0 -translate-y-2 overflow-hidden pointer-events-none"
                  }`}>
                    <span className={`inline-block text-[11px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-full bg-white shadow-sm ${member.pillTextColor}`}>
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Bottom graphical decorations */}
                <div className={`w-full text-left transition-opacity duration-500 ease-out z-30 relative ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex space-x-2 opacity-80">
                    <span className="w-2 h-2 rounded-full bg-white block animate-ping" />
                    <span className="w-12 h-2 rounded-full bg-white block" />
                    <span className="w-2 h-2 rounded-full bg-white block" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}