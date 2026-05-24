"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import BlogHero from "@/public/blog-hero.png"
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
  imageSrc: string
  slug: string
}

export default function BlogPage() {
  return (
    <div className="w-full bg-[#f4f9f9] select-none font-sans min-h-screen">
      
      <div className="relative w-full h-[280px] md:h-[340px] bg-[#0a192f] overflow-hidden">
        <Image
          src={BlogHero}
          alt="Blogs Banner"
          fill
          priority
          className="object-cover opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Blogs and News
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Sharing knowledge, policy insights, and evidence-based research on key development issues shaping Nepal.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-16">
        
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[5px] h-8 bg-[#ff8c00] rounded-sm" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#12161a] tracking-tight">
              Our Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-gray-100 shadow-sm p-4 md:p-6 rounded-2xl">
            <div className="relative lg:col-span-5 w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={BlogFeatured}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight leading-snug mb-4 font-serif">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed mb-6 line-clamp-5">
                  {featuredPost.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <span className="text-xs md:text-sm font-semibold text-[#ff8c00]">
                  {featuredPost.date}
                </span>
                <Link
                  href={`/features/blogs/${featuredPost.slug}`}
                  className="text-xs md:text-sm font-bold text-[#ff8c00] hover:text-[#e07b00] transition-colors flex items-center gap-1"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#ff8c00] text-center tracking-tight mb-12">
            Recent Blogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={blog.imageSrc}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#12161a] tracking-tight leading-snug mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm font-normal leading-relaxed line-clamp-3 mb-6">
                      {blog.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-medium text-gray-400">
                      {blog.date}
                    </span>
                    <Link
                      href={`/features/blogs/${blog.slug}`}
                      className="text-xs font-bold text-[#ff8c00] hover:text-[#e07b00] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

const featuredPost = {
  title: "16 Days of Activism Against Gender Based Violence",
  description: "The 16 Days of Activism against Gender-Based Violence is an annual international campaign led by members of the civil society to combat violence against women and children. Beginning on November 25, the International Day for the Elimination of Violence against Women, and concluding on December 10, Human Rights Day, the campaign emphasizes that violence against women and girls is one of the most widespread violations of human rights.",
  date: "16th Feb, 2026",
  imageSrc: BlogFeatured,
  slug: "16-days-of-activism"
}

const recentBlogs: BlogCard[] = [
  {
    id: 1,
    title: "Femicide",
    description: "Every 10 minutes, partners and family members killed a woman or a girl intentionally in 2023.",
    date: "Nov 28, 2025",
    imageSrc: Blog1,
    slug: "femicide"
  },
  {
    id: 2,
    title: "Marital Rape",
    description: "We at HIDR created a problem, impact and solution tree for marital rape as a team activity.",
    date: "Mar 12, 2026",
    imageSrc: Blog2,
    slug: "marital-rape"
  },
  {
    id: 3,
    title: "Slogans about Gender Based",
    description: "We at HIDR created slogans about gender based violence in the workplace.",
    date: "Dec 01, 2025",
    imageSrc: Blog3,
    slug: "slogans-gbv"
  },
  {
    id: 4,
    title: "Mental Health",
    description: "Every 10 minutes, partners and family members killed a woman or a girl intentionally in 2023.",
    date: "Nov 28, 2025",
    imageSrc: Blog4,
    slug: "mental-health"
  },
  {
    id: 5,
    title: "PWDs and GBV",
    description: "40% of women with disability have experienced sexual violence as women without disabilities.",
    date: "Jan 23, 2024",
    imageSrc: Blog5,
    slug: "pwds-and-gbv"
  },
  {
    id: 6,
    title: "Art for GBV",
    description: "Art is a powerful tool for advocacy and transformation. It gives voice to emotions.",
    date: "Nov 28, 2025",
    imageSrc: Blog6,
    slug: "art-for-gbv"
  }
]