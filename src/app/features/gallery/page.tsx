"use client";

import React from "react";
import Image from "next/image";
import ChildLabour from "../../../public/child-labour.jpg";
import Parliament from "../../../public/parliament.jpg";
import Beekeeping from "../../../public/beekeeping.jpg";
import Bangladesh from "../../../public/bangladesh.jpg";
import LandRights from "../../../public/land-rights.jpg";
import LegalDiscussion from "../../../public/legal-discussion.jpg";
import GalleryHero from "../../../public/gallery-hero-bg.jpg";

// Mock data strictly matching the text labels shown in image_072a0b.jpg
const galleryItems = [
  {
    id: 1,
    title: "Status of Child Labour and Policy Framework",
    image: ChildLabour, 
  },
  {
    id: 2,
    title: "Interaction Program between Parliamentary Committees",
    image: Parliament,
  },
  {
    id: 3,
    title: "Dragon fruit and Beekeepers Association Training.",
    image: Beekeeping,
  },
  {
    id: 4,
    title: "Bangladesh Exposure Visit to child rights.",
    image: Bangladesh,
  },
  {
    id: 5,
    title: "Role of Federal Actors in Enhancing Land and Housing Rights .",
    image: LandRights,
  },
  {
    id: 6,
    title: "Discussion on Sexual Violence Laws and Supreme Court Decisions",
    image: LegalDiscussion,
  },
];

export default function GalleryPage() {
  return (
    <div className="w-full bg-white min-h-screen text-gray-800 font-sans antialiased">
      
      {/* Dark Hero Banner Section */}
      <div 
        className="w-full relative bg-cover bg-center py-28 md:py-36 px-6 text-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url(${GalleryHero.src})` 
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Gallery
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Explore moments from our work, showcasing projects, trainings, and community engagement across Nepal.
          </p>
        </div>
      </div>

      {/* Grid Image Cards Section matching image_072a0b.jpg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[380px] w-full rounded-2xl overflow-hidden shadow-md bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Native Next.js Image Optimization Handling Static Object References */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  placeholder="blur"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Smooth Dark Gradient Overlays for accessible readable text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              {/* Title Description Layer placed cleanly at bottom edge */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <h3 className="text-sm md:text-base font-bold text-white tracking-wide leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}