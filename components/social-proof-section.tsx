"use client"

import { Shield, Key, Fingerprint, Sparkles, Zap, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const testimonials = [
    {
      quote:
        "Our company has a total ban on public AI tools because any sensitive customer data or proprietary code could leak. It's incredibly frustrating — we're losing hours every day that could be saved with AI, but security comes first. (Early Access)",
      author: "Michael Chen",
      role: "Head of Engineering, Enterprise FinTech",
      avatar: "https://randomuser.me/api/portraits/med/men/1.jpg",
    },
    {
      quote:
        "We're not allowed to paste anything into ChatGPT or similar tools. As a result, our analysts are stuck doing repetitive work manually. It's a huge productivity killer in 2026 — everyone else is moving faster because they can use AI safely. (Early Access)",
      author: "Sarah Mitchell",
      role: "Chief Data Officer, Global Bank",
      avatar: "https://randomuser.me/api/portraits/med/women/66.jpg",
    },
    {
      quote:
        "Legal and security teams blocked all external AI usage months ago due to data exposure risks. Our developers are burning out on tasks that AI could handle in seconds. Once we have a truly private solution, everything changes. (Early Access)",
      author: "David Rosenberg",
      role: "VP of Technology, Healthcare SaaS",
      avatar: "https://randomuser.me/api/portraits/med/men/98.jpg",
    },
    {
      quote:
        "I've been pushing for AI adoption for over a year, but compliance always says no — any chance of PII or trade secrets leaving the company is unacceptable. We're literally competing with one hand tied behind our backs. (Early Access)",
      author: "Laura van den Berg",
      role: "Managing Partner, Strategy Consulting",
      avatar: "https://randomuser.me/api/portraits/med/women/81.jpg",
    },
    {
      quote:
        "As a defense contractor, even thinking about using public LLMs is off the table. Our engineers know AI could 3-5x their output, but right now it's forbidden. The day we get a 100% client-side, zero-data-exposure solution — that's the day we leap ahead. (Early Access)",
      author: "Colonel James Carter (Ret.)",
      role: "Director of Engineering, Aerospace & Defense",
      avatar: "https://randomuser.me/api/portraits/med/men/19.jpg",
    },
    {
      quote:
        "Our IP is our most valuable asset. Because of that, the entire company is banned from using any external AI model. It's painful watching competitors pull ahead while we copy-paste code reviews manually in 2026. (Early Access)",
      author: "Priya Sharma",
      role: "CTO, AI Security Startup",
      avatar: "https://randomuser.me/api/portraits/med/women/51.jpg",
    },
    {
      quote:
        "We had to completely disable Copilot and all AI assistants enterprise-wide after a near-miss data leak. Productivity dropped noticeably overnight. Everyone is waiting desperately for a safe, private alternative. (Early Access)",
      author: "Thomas Müller",
      role: "Head of Development, German Automotive Supplier",
      avatar: "https://randomuser.me/api/portraits/med/men/9.jpg",
    },
    {
      quote:
        "In regulated industries like ours, you can't just 'use ChatGPT' — it's a fireable offense. We're stuck in 2023 productivity levels while the rest of the world has moved on. A truly private AI tool would be a game-changer for the entire firm. (Early Access)",
      author: "Rebecca Goldstein",
      role: "Partner, International Law Firm",
      avatar: "https://randomuser.me/api/portraits/med/women/79.jpg",
    },
    {
      quote:
        "We invested heavily in building our own internal AI tools out of fear of data exposure. In the end, they were expensive, underperformed compared to leading models, and tied up capital that could have fueled real growth. We didn’t need to reinvent AI — we needed a secure way to use the best ones. (Early Access)",
      author: "Enora Carpentier",
      role: "Head of Strategic Services & Finance",
      avatar: "https://randomuser.me/api/portraits/med/women/76.jpg",
    },
  ]

  const next = () => {
    setDirection(1)
    setCurrentIndex((i) => (i + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 12000)
    return () => clearInterval(id)
  }, [paused, currentIndex])

  const floatingIcons = [
    { Icon: Shield, size: 64, delay: 0, duration: 28, x: -250, y: -150 },
    { Icon: Key, size: 56, delay: 7, duration: 32, x: 280, y: -120 },
    { Icon: Fingerprint, size: 72, delay: 14, duration: 26, x: -200, y: 180 },
    { Icon: Sparkles, size: 48, delay: 21, duration: 30, x: 220, y: 100 },
    { Icon: Zap, size: 60, delay: 4, duration: 24, x: -100, y: -220 },
    { Icon: Users, size: 52, delay: 11, duration: 29, x: 150, y: 200 },
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Subtle grid – lighter & smaller */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb08_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb08_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse-slow" />
      </div>

      {/* Refined glows – more elegant */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-[-20%] w-[500px] h-[500px] bg-gradient-radial from-accent/8 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-[-20%] w-[400px] h-[400px] bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Header – more premium typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-5 sm:space-y-6 max-w-4xl mx-auto px-2"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            You're not alone.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Hundreds of professionals across regulated industries — consulting, fintech, healthcare, and defense — 
            have already <span className="text-accent font-semibold">paid for early access</span> because they are 
            currently <span className="font-semibold text-foreground">blocked from using AI</span> due to data privacy risks.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            These leaders know exactly how much productivity they're leaving on the table — 
            and they're ready the moment a truly private solution arrives.
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
            Join <span className="text-accent">500+ early access users</span> — teams currently blocked from AI due to privacy risks.
          </p>
        </motion.div>

        {/* Floating icons – more subtle & hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.04, 0.12, 0.04],
                x: [x, x + 100, x],
                y: [y, y + 140, y],
                rotate: [-6, 6, -6],
              }}
              transition={{
                opacity: { duration: 14, repeat: Infinity },
                x: { duration, repeat: Infinity, ease: "linear", delay },
                y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute left-1/2 top-1/2"
            >
              <Icon
                className={`w-${Math.round(size / 4)} h-${Math.round(size / 4)} text-accent/30`}
                style={{ filter: "drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.4))" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Slider – more elegant & mobile-friendly */}
        <div className="relative px-4 sm:px-0">
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                onHoverStart={() => setPaused(true)}
                onHoverEnd={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
                className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-xl border border-border/60 shadow-xl p-6 sm:p-10 lg:p-14"
              >
                {/* Subtle shimmer */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12" />
                </motion.div>

                <div className="flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10">
                  {/* Avatar – smaller on mobile */}
                  <div className="w-20 h-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 rounded-full overflow-hidden ring-4 ring-accent/20 shadow-md">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>

                  {/* Quote – responsive text size */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed italic max-w-3xl lg:max-w-4xl px-2 sm:px-0">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="space-y-1">
                    <p className="text-lg sm:text-xl font-semibold text-foreground">{testimonials[currentIndex].author}</p>
                    <p className="text-base sm:text-lg text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>

                {/* Navigation arrows – more refined & mobile-friendly */}
                <button
                  onClick={prev}
                  className="absolute left-0 sm:left-[-3rem] lg:left-[-5rem] top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-background/70 backdrop-blur border border-border/50 shadow-md hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                </button>

                <button
                  onClick={next}
                  className="absolute right-0 sm:right-[-3rem] lg:right-[-5rem] top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-background/70 backdrop-blur border border-border/50 shadow-md hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Dots – smaller & centered */}
            <div className="flex justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className="group focus:outline-none"
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  <motion.div
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-border/60 group-hover:bg-accent/80 transition-colors"
                    animate={{
                      scale: currentIndex === idx ? 1.6 : 1,
                      backgroundColor: currentIndex === idx ? "hsl(var(--accent))" : "hsl(var(--border))",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}