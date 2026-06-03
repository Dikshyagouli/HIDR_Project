import React from 'react';
import Image from 'next/image';
import publicationImg from '@/public/recent-publication1.jpg'; 
export default function RecentPublication() {
  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="flex items-center gap-3 mb-12 justify-center max-w-[1140px] mx-auto">
          <div className="w-1 h-8 bg-[#ff8c00]" />
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ff8c00]">
            Recent Publication
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start max-w-[1140px] mx-auto">
          
          <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden shadow-sm">
            <Image
              src={publicationImg}
              alt="Recent Publication Visual Data"
              fill
              priority
              className="object-cover"
              sizes="(max-w: 768px) 150vw, 50vw"
            />
          </div>

          <div className="w-full flex flex-col justify-start pt-2">
            <h3 className="text-gray-900 font-bold text-xl md:text-2xl leading-snug tracking-tight mb-6">
              Nepal&apos;s Gen-Z Movement-Youth&apos;s Views and Voices about Political Future
            </h3>

            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Nepal&apos;s Gen-Z Movement: Youth&apos;s Views and Voices about Political 
                Future examines the September 2025 Gen-Z uprising as a critical 
                moment in Nepal&apos;s contemporary political trajectory, situating it within 
                longer-term patterns of political instability, economic stagnation, and 
                governance failure.
              </p>
              <p>
                The study argues that while triggered by the government&apos;s social media 
                restrictions, the movement reflected deeper structural frustrations, 
                particularly around corruption, lack of economic opportunity, and 
                declining trust in political leadership, shared widely across Nepali 
                society.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-[#0b3154] hover:bg-[#07223b] text-white px-6 py-2.5 rounded font-medium text-sm transition-colors duration-200 shadow-sm">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}