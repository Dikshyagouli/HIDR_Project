"use client"

import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

// Image module imports using correct path aliases
import BlogFeatured from "@/public/blog-featured.jpg"
import scorecard from "@/public/ai-scorecard-mockup.png"

// Placeholder imports for your mapping array—update these paths if needed
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
          alt="16 Days of Activism Against Gender Based Violence"
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
            <p className="text-gray-200 text-xs md:text-sm font-normal mt-4 opacity-90 tracking-wide max-w-2xl">
              Sharing knowledge, policy insights, and evidence-based research on key development issues shaping Nepal.
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout: Article + Sticky Sidebar */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pt-16 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Blog Post Content */}
        <article className="lg:col-span-8 prose prose-gray max-w-none text-gray-700 space-y-12 text-sm md:text-base leading-relaxed font-normal">
          
          <section id="ai-creation" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Exploring Generative AI in Content Creation
            </h2>
            <p className="mb-6">
              Hello there! As a marketing manager in the SaaS industry, you might be looking for
              innovative ways to engage your audience. I bet generative AI has crossed your mind
              as an option for creating content. Well, let me share from my firsthand experience.
            </p>
            <p className="mb-6">
              Google encourages high-quality blogs regardless of whether they're written by
              humans or created using artificial intelligence like ChatGPT. Here's what matters:
              producing original material with expertise and trustworthiness based on Google E-E-A-T principles.
            </p>
            <p className="mb-6">
              This means focusing more on people-first writing rather than primarily employing AI
              tools to manipulate search rankings. There comes a time when many experienced
              professionals want to communicate their insights but get stuck due to limited
              writing skills - that's where Generative AI can step in.
            </p>
            <p className="mb-0">
              So, together, we're going explore how this technology could help us deliver
              valuable content without sounding robotic or defaulting into mere regurgitations of
              existing materials (spoiler alert - common pitfalls!). Hang tight - it'll be a fun learning
              journey!
            </p>
          </section>

          <section id="ai-pitfalls" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Steering Clear of Common AI Writing Pitfalls
            </h2>
            <p className="mb-6">
              Jumping headfirst into using AI, like ChatGPT, without a content strategy can lead to
              some unfortunate results. One common pitfall I've seen is people opting for
              quantity over quality - they churn out blogs, but each one feels robotic and
              soulless, reading just like countless others on the internet.
            </p>
            <p className="mb-6">
              Another fault line lies in creating reproductions rather than delivering unique
              perspectives that offer value to readers; it often happens if you let an AI tool write
              your full blog unrestrained! Trust me on this - Ask any experienced marketer or
              writer about their takeaways from using generative AI tools. They'll all agree that
              adding a human touch and following specific guidelines are key when
              implementing these tech pieces.
            </p>
            <p className="mb-0">
              Remember, our goal here isn't merely satisfying search engines but, more
              importantly, knowledge-hungry humans seeking reliable information online. So
              keep your audience's needs at heart while leveraging technology's assistance!
            </p>
          </section>

          <section id="define-style" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Understanding ChatGPT Capabilities - Define Your Style
            </h2>
            <p className="mb-6">
              Welcome to the intriguing world of ChatGPT! Its ability and potential can truly be
              mind-boggling. I have learned from experience how capable it is in dealing with
              diverse content generation tasks, only that its text sounded slightly "unnatural" in
              accordance with TechTarget. However, fear not - there are ways around this!
            </p>
            <p className="mb-6">
              One strategic move I've seen work wonders is defining your unique writing style
              first before handing over the reins to AI; you treat it like a canvas whereupon our
              vision opens up. If we clearly instruct who we're targeting or what tone resonates
              more effectively, generative AI tools such as ChatGPT will comply remarkably well.
            </p>
            <p className="mb-6">
              In framing guidelines, remember to keep audience interests at heart while adopting
              technology's benefits for efficient output - trust me on this because neglecting
              these aspects could backfire by generating unappealing robotic-like reads.
            </p>
            <p className="mb-0">
              Ultimately, aiming towards reader-focused driven creativity illuminated under
              authentically humanized narratives holds priority above all else when crafting blogs
              using auto-generation toolkits!
            </p>
          </section>

          <section id="understand-readers" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Understand Your Readers
            </h2>
            <p className="mb-6">
              Understanding your readers is vital when producing blog posts. It's not about filling
              blanks with popular search terms, no matter how much keyword research you do.
              Real readability goes beyond that! Your content has to 'speak' directly to your target
              audience.
            </p>
            <p className="mb-6">
              Building an Ideal Customer Profile (ICP) can help immensely in this respect (Dan
              Martell). This tool identifies specific firmographics or psychographic drivers behind
              customer success - a valuable guide for creating targeted outputs catering to
              arrayed reader types.
            </p>
            <p className="mb-0">
              Simultaneously, SEO aspects also need attention: identifying suitable keywords &
              phrases people commonly use enhances reach (SEO.COM reference). Yet
              remember - human appeal doesn't mean packing text up finely into presentable
              semblances bearing little value substance and stuffing it full with only 'keywords.'
            </p>
          </section>

          <section id="ai-quality" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Understand Your Readers: Creating Quality AI-powered Blogs that Stand Out
            </h2>
            <p className="mb-6">
              Creating brilliant AI-powered blogs is a fun blending of logic with just the right dose
              of creativity. From defining your target audience to tuning in ChatGPT's language
              style, every step counts towards creating content that's not only SEO-friendly but
              also enjoyable and valuable for readers.
            </p>
            <p className="mb-6">
              One tactic I've found useful is maintaining originality in message essence, with
              unique perspectives infusing life beyond words onto pages!
            </p>
            <p className="mb-0">
              Incorporating trusted references while optimizing blog posts intelligently (rather
              than keyword stuffing) can significantly aid quality enhancements. Remember, it isn't
              about writing for Google here, so avoid tunnel vision focusing solely on algorithm-
              driven success rate, aiming at heart-touching human connections, building loyal
              reader bases, and sharing knowledge benefiting others!</p>
          </section>

          <section id="conclusion" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Conclusion: Embracing AI in Blog Creation
            </h2>
            <p className="mb-6">
              As we wrap up, let's remember the heart of blog creation is serving our readers.
              Whether a post was drafted by experts or AI like ChatGPT doesn't matter to Google
              algorithms as long it's meaningful and high-quality.
            </p>
            <p className="mb-6">
              Through this valuable learning curve together, I hope you've seen how well-
              implemented strategies can guide generative tools in delivering content mirroring
              human quality. Yes! It often involves some trial & error phases, but trust me -
              persistence practiced alongside continuous improvements results in rewarding
              feats!
            </p>
            <p className="mb-6">
              Additionally, perhaps most importantly, proofreading every piece before publishing
              hugely influences audience perceptions, establishing professional credibility. Why?
              Well, even minor oversights could potentially undermine reader experiences,
              turning away prospective subscribers; hence, maintain meticulous checkpoints for
              flawless publications!
            </p>
            <p className="mb-0">
              So here goes my fellow SaaS marketing managers: Embrace technology
              enhancement aids responsibly, always keeping end-user perspectives focal while
              constantly striving towards better communication standards, offering insightful,
              pleasing read across widespread digital platforms!
            </p>
          </section>

          <section id="afterword-ai" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Afterword: The AI Behind This Article
            </h2>
            <div className="w-full relative border border-gray-100 rounded-xl overflow-hidden mb-6 bg-[#fcfcfc] p-2 md:p-4">
              <Image
                src={scorecard} 
                alt="AI Detection Likelihood Scorecard showing content appears human"
                width={820}
                height={400}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <p className="mb-6">
              Let's be clear: ChatGPT wrote this article and generated the hero image. It
              combined my personal experience, knowledge, and research. From the initial
              notes to finish, it took just 37 minutes.
            </p>
            <p className="mb-6">
              Even though it was made by AI, no detection tools could tell. The only thing used
              was OpenAI's Chat API, no other external tools.
            </p>
            <p className="mb-0">
              It shows how AI can help in making content interesting and relevant. It's a new
              chapter in how we create and share information.
            </p>
          </section>

        </article>

        {/* Sidebar Sticky Navigation Block */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 bg-gray-50/60 border border-gray-100 rounded-xl p-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">
              In this article
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <a 
                  href="#ai-creation" 
                  className={`pl-3 block transition-all border-l-2 ${
                    activeId === "ai-creation"
                      ? "text-[#ff8c00] border-[#ff8c00]"
                      : "text-gray-500 hover:text-gray-900 border-transparent"
                  }`}
                >
                  AI Content Creation
                </a>
              </li>
              <li>
                <a 
                  href="#ai-pitfalls" 
                  className={`pl-3 block transition-all border-l-2 ${
                    activeId === "ai-pitfalls"
                      ? "text-[#ff8c00] border-[#ff8c00]"
                      : "text-gray-500 hover:text-gray-900 border-transparent"
                  }`}
                >
                  AI Writing Pitfalls
                </a>
              </li>
              <li>
                <a 
                  href="#define-style" 
                  className={`pl-3 block transition-all border-l-2 ${
                    activeId === "define-style"
                      ? "text-[#ff8c00] border-[#ff8c00]"
                      : "text-gray-500 hover:text-gray-900 border-transparent"
                  }`}
                >
                  Define Your Style
                </a>
              </li>
              <li>
                <a 
                  href="#understand-readers" 
                  className={`pl-3 block transition-all border-l-2 ${
                    activeId === "understand-readers"
                      ? "text-[#ff8c00] border-[#ff8c00]"
                      : "text-gray-500 hover:text-gray-900 border-transparent"
                  }`}
                >
                  Understand Your Readers
                </a>
              </li>
              <li>
                <a 
                  href="#ai-quality" 
                  className={`pl-3 block transition-all border-l-2 ${
                    activeId === "ai-quality"
                      ? "text-[#ff8c00] border-[#ff8c00]"
                      : "text-gray-500 hover:text-gray-900 border-transparent"
                  }`}
                >
                  Quality AI Blogs
                </a>
              </li>
              <li>
                <a 
                  href="#conclusion" 
                  className={`pl-3 block transition-all border-l-2 ${
                    activeId === "conclusion"
                      ? "text-[#ff8c00] border-[#ff8c00]"
                      : "text-gray-500 hover:text-gray-900 border-transparent"
                  }`}
                >
                  Conclusion & Wrap Up
                </a>
              </li>
              <li>
                <a 
                  href="#afterword-ai" 
                  className={`pl-3 block transition-all border-l-2 ${
                    activeId === "afterword-ai"
                      ? "text-[#ff8c00] border-[#ff8c00]"
                      : "text-gray-500 hover:text-gray-900 border-transparent"
                  }`}
                >
                  The AI Behind This Article
                </a>
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* Full Width Recent Blogs Component (Moved Outside Layout Grid) */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-16">
        <hr className="border-gray-100 mb-16" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#ff8c00] text-center tracking-tight mb-12">
            Recent Blogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.slice(0, 3).map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={blog.imageSrc}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
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

// Data Sets
const recentBlogs: BlogCard[] = [
  {
    id: 1,
    title: "Exploring Generative AI in Content Creation",
    description: "Google encourages high-quality blogs regardless of whether they're written by humans or created using artificial intelligence like ChatGPT based on E-E-A-T principles.",
    date: "May 26, 2026",
    imageSrc: Blog1, 
    slug: "generative-ai"
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