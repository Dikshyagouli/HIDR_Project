"use client"

import React from "react"
import Image from "next/image"

export default function BlogDetailPage() {
  return (
    <div className="w-full bg-white select-none font-sans min-h-screen">
      
      {/* Article Hero Banner */}
      <div className="relative w-full h-[320px] md:h-[400px] bg-gray-900">
        <Image
          src="/blog-featured.jpg"
          alt="16 Days of Activism"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pb-10 text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
              16 Days of Activism Against Gender Based Violence
            </h1>
            <p className="text-gray-300 text-xs md:text-sm font-medium mt-4">
              Published on February 16, 2026 &bull; 8 min read
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <article className="lg:col-span-8 prose prose-gray max-w-none text-gray-700 space-y-8 text-sm md:text-base leading-relaxed font-normal">
          
          <section id="generative-ai">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Exploring Generative AI in Content Creation
            </h2>
            <p>
              While text, audio, and visual outputs look authentic, context remains highly personalized, meaning the true output relies heavily on the input prompt parameters, setup, and structural clarity specified.
            </p>
            <p className="mt-3">
              Guidelines ensure you target accurate values without relying on raw, unaltered output. Using ChatGPT filters variables cleanly to maximize original material references and output structures thoroughly.
            </p>
          </section>

          <section id="writing-pitfalls">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Steering Clear of Common AI Writing Pitfalls
            </h2>
            <p>
              Avoiding excessive dependence on standard phrasing maintains a unique identity throughout. Filters avoid repetitive frameworks that read identically across standard web materials, introducing nuanced vocabulary patterns instead.
            </p>
          </section>

          <section id="chatgpt-capabilities">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Understanding ChatGPT Capabilities - Define Your Style
            </h2>
            <p>
              Defining stylistic elements helps retain brand voice consistency across drafts. Mention clear parameters around tone, voice style, formatting restrictions, and analytical perspective preferences explicitly.
            </p>
          </section>

          <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-gray-50 p-4 my-6">
            <div className="relative w-full h-[200px] md:h-[280px]">
              <Image
                src="/blog-inline-dashboard.png" 
                alt="AI Dashboard Reference"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <section id="conclusion">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Conclusion - Embracing AI in Blog Creation
            </h2>
            <p>
              AI works perfectly as a comprehensive companion rather than a total replacement. It shortens structural development windows and expands keyword exploration frameworks efficiently while keeping human editorial insight at the absolute core.
            </p>
          </section>

        </article>

        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 bg-gray-50/60 border border-gray-100 rounded-xl p-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">
              In this article
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <a href="#generative-ai" className="text-[#ff8c00] border-l-2 border-[#ff8c00] pl-3 block transition-all">
                  Exploring Generative AI in Content Creation
                </a>
              </li>
              <li>
                <a href="#writing-pitfalls" className="text-gray-500 hover:text-gray-900 border-l-2 border-transparent pl-3 block transition-all">
                  Steering Clear of Common AI Writing Pitfalls
                </a>
              </li>
              <li>
                <a href="#chatgpt-capabilities" className="text-gray-500 hover:text-gray-900 border-l-2 border-transparent pl-3 block transition-all">
                  Understanding ChatGPT Capabilities
                </a>
              </li>
              <li>
                <a href="#conclusion" className="text-gray-500 hover:text-gray-900 border-l-2 border-transparent pl-3 block transition-all">
                  Conclusion & Summary Remarks
                </a>
              </li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  )
}