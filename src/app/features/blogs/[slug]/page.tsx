"use client"

import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import BlogFeatured from "@/public/blog-featured.jpg"
import Blog1 from "@/public/b1.jpg" 
import Blog2 from "@/public/b2.jpg"
import Blog3 from "@/public/b3.jpg"
import Blog4 from "@/public/b4.jpg"
import Blog5 from "@/public/b5.jpg"
import Blog6 from "@/public/b6.jpg"

interface BlogCard {
  id: number
  title: string
  description: string
  date: string
  imageSrc: StaticImageData
  slug: string
}

const detailedSidebarBlogs: BlogCard[] = [
  {
    id: 1,
    title: "Exploring Generative AI in Content Creation",
    description: "Unlocking structural systems using AI workflows without destroying human voice integrity.",
    date: "September 2025",
    imageSrc: Blog1,
    slug: "generative-ai"
  },
  {
    id: 2,
    title: "Understanding Nepal's Changing Economic Landscapes",
    description: "An analytical breakdown of decentralized growth frameworks and youth emigration impacts.",
    date: "October 2025",
    imageSrc: Blog2,
    slug: "nepal-economic-landscapes"
  }
  {
    id: 3,
    title: "Understanding Nepal's Changing Economic Landscapes",
    description: "An analytical breakdown of decentralized growth frameworks and youth emigration impacts.",
    date: "October 2025",
    imageSrc: Blog3,
    slug: "nepal-economic-landscapes"
  }
  {
    id: 4,
    title: "Understanding Nepal's Changing Economic Landscapes",
    description: "An analytical breakdown of decentralized growth frameworks and youth emigration impacts.",
    date: "October 2025",
    imageSrc: Blog4,
    slug: "nepal-economic-landscapes"
  }
  {
    id: 5,
    title: "Understanding Nepal's Changing Economic Landscapes",
    description: "An analytical breakdown of decentralized growth frameworks and youth emigration impacts.",
    date: "October 2025",
    imageSrc: Blog5,
    slug: "nepal-economic-landscapes"
  }
  {
    id: 6,
    title: "Understanding Nepal's Changing Economic Landscapes",
    description: "An analytical breakdown of decentralized growth frameworks and youth emigration impacts.",
    date: "October 2025",
    imageSrc: Blog6,
    slug: "nepal-economic-landscapes"
  }
]

export default function BlogDetailPage() {
  const [activeId, setActiveId] = useState("ai-creation")

  useEffect(() => {
    const sections = document.querySelectorAll("article section[id]")
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="w-full bg-white select-none font-sans min-h-screen">
      
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-black overflow-hidden">
        <Image
          src={BlogFeatured}
          alt="Featured Article Layout"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/45 mix-blend-multiply" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
          <div className="max-w-[900px] w-full flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
              Exploring Generative AI in Content Creation
            </h1>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pt-16 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8 prose prose-gray max-w-none text-gray-700 space-y-12 text-sm md:text-base leading-relaxed font-normal">
          
          <section id="ai-creation" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Exploring Generative AI in Content Creation
            </h2>
            <p className="mb-6">
              Google encourages high-quality blogs regardless of whether they&apos;re written by
              humans or created using artificial intelligence like ChatGPT. Here&apos;s what matters:
              producing original material with expertise and trustworthiness based on Google E-E-A-T principles.
            </p>
          </section>

          <section id="more-blogs" className="scroll-mt-28 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-8">
              More Recent Publications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedSidebarBlogs.map((blog) => (
                <Link href={`/features/blogs/${blog.slug}`} key={blog.id} className="group block space-y-3">
                  <div className="relative w-full h-48 overflow-hidden bg-gray-100 rounded-md">
                    <Image 
                      src={blog.imageSrc} 
                      alt={blog.title} 
                      fill 
                      sizes="(max-w: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#ff8c00] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 space-y-6 border-l border-gray-100 pl-6">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400">On This Page</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <a href="#ai-creation" className={`transition-colors ${activeId === "ai-creation" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}>
                AI in Content Creation
              </a>
              <a href="#more-blogs" className={`transition-colors ${activeId === "more-blogs" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}>
                More Publications
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}