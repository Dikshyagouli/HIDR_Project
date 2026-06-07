"use client"

import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import BlogFeatured from "@/public/blog-featured.jpg"
import scorecard from "@/public/ai-scorecard-mockup.png"

import Blog1 from "@/public/b1.jpg" 
import Blog2 from "@/public/b2.jpg"
import Blog3 from "@/public/b3.jpg"

interface BlogCard {
  id: number
  title: string
  description: string
  date: string
  imageSrc: StaticImageData
  slug: string
}

export default function BlogsListPage() {
  const [activeId, setActiveId] = useState("exploring-ai")

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

      {/* Main Grid Layout Container */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pt-16 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column Blog Post Content */}
        <article className="lg:col-span-8 prose prose-gray max-w-none text-gray-700 space-y-12 text-sm md:text-base leading-relaxed font-normal">
          
          <section id="exploring-ai" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Exploring Generative AI in Content Creation
            </h2>
            <p className="mb-6">
              Hello there! As a marketing manager in the SaaS industry, you might be looking for
              innovative ways to engage your audience. I bet generative AI has crossed your mind
              as an option for creating content. Well, let me share from my firsthand experience.
            </p>
            <p className="mb-6">
              Google encourages high-quality blogs regardless of whether they&apos;re written by
              humans or created using artificial intelligence like ChatGPT. Here&apos;s what matters:
              producing original material with expertise and trustworthiness based on Google E-E-A-T principles.
            </p>
            <p className="mb-6">
              This means focusing more on people-first writing rather than primarily employing AI
              tools to manipulate search rankings. There comes a time when many experienced
              professionals want to communicate their insights but get stuck due to limited
              writing skills - that&apos;s where Generative AI can step in.
            </p>
            <p className="mb-6">
              So, together, we&apos;re going explore how this technology could help us deliver
              valuable content without sounding robotic or defaulting into mere regurgitations of
              existing materials.
            </p>
          </section>

          <section id="ai-pitfalls" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Steering Clear of Common AI Writing Pitfalls
            </h2>
            <p className="mb-6">
              Jumping headfirst into using AI, like ChatGPT, without a content strategy can lead to some unfortunate results.
              One common pitfall I've seen is people opting for quantity over quality - they churn out blogs, but each one feels
              robotic and soulless, reading just like countless others on the internet.
            </p>
            <p className="mb-6">
              Another fault line lies in creating reproductions rather than delivering unique perspectives that offer value to readers;
              it often happens if you let an AI tool write your full blog unrestrained!
              Trust me on this – Ask any experienced marketer or writer about their takeaways from using generative AI tools.
              They'll all agree that adding a human touch and following specific guidelines are key when implementing these tech pieces.
            </p>
            <p className="mb-6">
              Remember, our goal here isn’t merely satisfying search engines but, more importantly, knowledge-hungry humans seeking reliable 
              information online. So keep your audience's needs at heart while leveraging technology’s assistance!
            </p>
          </section>

          <section id="chatgpt-capabilities" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Understanding ChatGPT Capabilities - Define Your Style
            </h2>
            <p className="mb-6">
              Welcome to the intriguing world of ChatGPT! Its ability and potential can truly be mind-boggling.
              I have learned from experience how capable it is in dealing with diverse content generation tasks, 
              only that its text sounded slightly "unnatural" in accordance with TechTarget. However, fear not – 
              there are ways around this!
            </p>
            <p className="mb-6">
              One strategic move I've seen work wonders is defining your unique writing style first before handing over the reins to AI;
              you treat it like a canvas whereupon our vision opens up. If we clearly instruct who we're targeting or what tone resonates 
              more effectively, generative AI tools such as ChatGPT will comply remarkably well.
            </p>
            <p className="mb-6">
              In framing guidelines, remember to keep audience interests at heart while adopting technology’s benefits for efficient output – 
              trust me on this because neglecting these aspects could backfire by generating unappealing robotic-like reads.
            </p>
            <p className="mb-6">
              Ultimately, aiming towards reader-focused driven creativity illuminated under authentically humanized narratives holds priority 
              above all else when crafting blogs using auto-generation toolkits!
            </p>
          </section>

          <section id="understand-readers" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Understanding Your Readers
            </h2>
            <p className="mb-6">
              Understanding your readers is vital when producing blog posts. It's not about filling blanks
              with popular search terms, no matter how much keyword research you do. Real readability goes beyond that! 
              Your content has to 'speak' directly to your target audience.
            </p>
            <p className="mb-6">
              Building an Ideal Customer Profile (ICP) can help immensely in this respect (Dan Martell). This 
              tool identifies specific firmographics or psychographic drivers behind customer success - a valuable guide for creating targeted outputs catering to arrayed reader types.
            </p>
            <p className="mb-6">
              Simultaneously, SEO aspects also need attention: identifying suitable keywords & phrases people commonly use enhances reach (SEO.COM reference). Yet remember – human appeal 
              doesn’t mean packing text up finely into presentable semblances bearing little value substance and stuffing it full with only ‘keywords.
            </p>
          </section>
          
          <section id="quality-blogs" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Creating Quality AI-Powered Blogs that Stand Out
            </h2>
            <p className="mb-6">
              Creating brilliant AI-powered blogs is a fun blending of logic with just the right dose of creativity. From defining your target 
              audience to tuning in ChatGPT's language style, every step counts towards creating content that’s not only SEO-friendly but also enjoyable and valuable for readers.
            </p>
            <p className="mb-6">
              One tactic I’ve found useful is maintaining originality in message essence, with unique perspectives infusing life beyond words onto pages!
            </p>
            <p className="mb-6">
              Incorporating trusted references while optimizing blog posts intelligently (rather than keyword stuffing) can significantly aid quality enhancements. Remember, it isn't 
              about writing for Google here, so avoid tunnel vision focusing solely on algorithm-driven success rate, aiming at heart-touching human connections, building loyal reader 
              bases, and sharing knowledge benefiting others!
            </p>
          </section>
                      
          <section id="conclusion" className="scroll-mt-28">
            <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
              Conclusion: Embracing AI In Blog Creation
            </h2>
            <p className="mb-6">
              As we wrap up, let’s remember the heart of blog creation is serving our readers. Whether a post was drafted by experts or 
              AI like ChatGPT doesn't matter to Google algorithms as long it's meaningful and high-quality.
            </p>
            <p className="mb-6">
              Through this valuable learning curve together, I hope you’ve seen how well-implemented strategies can guide generative tools in delivering content mirroring human quality. 
              Yes! It often involves some trial & error phases, but trust me – persistence practiced alongside continuous improvements results in rewarding feats!
            </p>
            <p className="mb-6">
              Additionally, perhaps most importantly, proofreading every piece before publishing hugely influences audience perceptions, establishing professional credibility. 
              Why? Well, even minor oversights could potentially undermine reader experiences, turning away prospective subscribers; hence, maintain meticulous checkpoints for flawless publications!
            </p>
            <p className="mb-6">
              So here goes my fellow SaaS marketing managers: Embrace technology enhancement aids responsibly, always keeping end-user perspectives focal while constantly striving towards better communication 
              standards, offering insightful, pleasing read across widespread digital platforms!
            </p>
          </section>

          <section id="afterword" className="scroll-mt-28">
            <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#12161a] tracking-tight mb-4">
                Afterword: The AI Behind This Article
              </h2>
              
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-gray-50 p-4">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-gray-200">
                  <Image 
                    src={scorecard} 
                    alt="AI prompt dashboard view from image_d69101.png" 
                    fill 
                    className="object-cover"
                    sizes="(max-w: 768px) 100vw, 66vw"
                  />
                </div>
              </div>

              <p className="mb-6 mt-4">
                Let's be clear: ChatGPT wrote this article and generated the hero image. It combined my personal experience, knowledge, and research. From the initial notes to finish, it took just 37 minutes.
              </p>
              <p className="mb-6">
                Even though it was made by AI, no detection tools could tell. The only thing used was OpenAI's Chat API, no other external tools.
              </p>
              <p className="mb-6">
                It shows how AI can help in making content interesting and relevant. It's a new chapter in how we create and share information.
              </p>
            </div>
          </section>

        </article>

        {/* Right-hand Sidebar */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 space-y-6 border-l border-gray-100 pl-6">
            <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400">In this Article</h3>
            <nav className="flex flex-col space-y-3 text-sm">
              <a 
                href="#exploring-ai" 
                className={`transition-colors ${activeId === "exploring-ai" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}
              >
                Exploring Generative AI in Content Creation
              </a>
              <a 
                href="#ai-pitfalls" 
                className={`transition-colors ${activeId === "ai-pitfalls" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}
              >
                Steering Clear of Common AI Writing Pitfalls
              </a>
              <a 
                href="#chatgpt-capabilities" 
                className={`transition-colors ${activeId === "chatgpt-capabilities" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}
              >
                Understanding ChatGPT Capabilities - Define Your Style
              </a>
              <a 
                href="#understand-readers" 
                className={`transition-colors ${activeId === "understand-readers" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}
              >
                Understand Your Readers
              </a>
              <a 
                href="#quality-blogs" 
                className={`transition-colors ${activeId === "quality-blogs" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}
              >
                Creating Quality AI-powered Blogs that Stand Out
              </a>
              <a 
                href="#conclusion" 
                className={`transition-colors ${activeId === "conclusion" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}
              >
                Conclusion: Embracing AI in Blog Creation
              </a>
              <a 
                href="#afterword" 
                className={`transition-colors ${activeId === "afterword" ? "text-[#ff8c00] font-medium" : "text-gray-500 hover:text-gray-900"}`}
              >
                Afterword: The AI Behind This Article
              </a>
            </nav>
          </div>
        </aside>

      </div> {/* 12-Column Layout Grid Ends */}

      {/* Breakout Screen Area: Recent Publications Display Grid */}
      <div className="w-full bg-[#f4f9f9]/60 border-t border-gray-100 py-16 mt-16">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          
          <section id="more-blogs" className="scroll-mt-28">
            <h2 className="text-xl md:text-3xl font-bold text-[#ff8c00] text-center tracking-tight mb-12">
              Recent Blogs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentBlogs.slice(0, 3).map((blog) => (
                <Link 
                  href={`/features/blogs/${blog.slug}`} 
                  key={blog.id} 
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full group hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image 
                      src={blog.imageSrc} 
                      alt={blog.title} 
                      fill 
                      sizes="(max-w: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#ff8c00] transition-colors line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm line-clamp-2 leading-relaxed mt-2">
                        {blog.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-medium">
                      <span className="text-gray-400">{blog.date}</span>
                      <span className="text-[#ff8c00] font-bold">Read More</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

    </div>
  )
}

const recentBlogs: BlogCard[] = [
  {
    id: 1,
    title: "Exploring Generative AI in Content Creation",
    description: "Unlocking structural systems using AI workflows without destroying human voice integrity.",
    date: "September 2025",
    imageSrc: Blog1,
    slug: "exploring-generative-ai"
  },
  {
    id: 2,
    title: "Understanding Nepal's Changing Economic Landscapes",
    description: "An analytical breakdown of decentralized growth frameworks and youth emigration impacts.",
    date: "October 2025",
    imageSrc: Blog2,
    slug: "nepal-economic-landscapes"
  },
  {
    id: 3,
    title: "Digital Infrastructure Initiatives in Rural Communities",
    description: "Bridging structural gaps across high-altitude terrain through regional community networks.",
    date: "November 2025",
    imageSrc: Blog3,
    slug: "digital-infrastructure-rural"
  }
]