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
}

  ]

  const next = () => {
    setDirection(1)
    setCurrentIndex((i) => (i + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }

  // Auto-advance every 12 seconds, pauses on hover
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 12000)
    return () => clearInterval(id)
  }, [paused])

  const floatingIcons = [
    { Icon: Shield, size: 64, delay: 0, duration: 28, x: -250, y: -150 },
    { Icon: Key, size: 56, delay: 7, duration: 32, x: 280, y: -120 },
    { Icon: Fingerprint, size: 72, delay: 14, duration: 26, x: -200, y: 180 },
    { Icon: Sparkles, size: 48, delay: 21, duration: 30, x: 220, y: 100 },
    { Icon: Zap, size: 60, delay: 4, duration: 24, x: -100, y: -220 },
    { Icon: Users, size: 52, delay: 11, duration: 29, x: 150, y: 200 },
  ]

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Soft accent glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-80 h-80 bg-accent/12 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-16">
          {/* Header - unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              You're not alone.
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Hundreds of professionals across regulated industries to consulting and healthcare — 
              have already <span className="text-accent font-semibold">paid for early access</span> because they are 
              currently <span className="font-bold">blocked from using AI</span> due to data privacy risks.
            </p>
            <p className="text-lg text-muted-foreground">
              These leaders know exactly how much productivity they're leaving on the table — 
              and they're ready the moment a truly private solution arrives.
            </p>
            <p className="text-xl sm:text-2xl text-muted-foreground"> Join <span className="text-foreground font-bold">500+ early access users</span> from fintech, consulting, and defense — teams that are currently <span className="text-accent font-semibold">blocked from using AI</span> due to data privacy risks. </p>
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.05, 0.16, 0.05],
                  x: [x, x + 120, x],
                  y: [y, y + 160, y],
                  rotate: [-8, 8, -8],
                }}
                transition={{
                  opacity: { duration: 12, repeat: Infinity },
                  x: { duration, repeat: Infinity, ease: "linear", delay },
                  y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                  rotate: { duration: duration * 1.4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute left-1/2 top-1/2"
              >
                <Icon
                  className={`w-${size/4} h-${size/4} text-accent/40`}
                  style={{ filter: "drop-shadow(0 0 25px rgba(var(--accent-rgb), 0.45))" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Testimonial Slider - exactly as requested */}
          <div className="relative">
            <div className="relative max-w-5xl mx-auto">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  className="relative rounded-3xl bg-card/95 backdrop-blur-md border border-border/80 p-12 sm:p-16 shadow-2xl"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.6, delay: 0.3 }}
                    className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </motion.div>

                  <div className="flex flex-col items-center text-center gap-10">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-accent/30">
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].author}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>

                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed italic max-w-4xl">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="space-y-1">
                      <p className="text-xl font-bold text-foreground">{testimonials[currentIndex].author}</p>
                      <p className="text-muted-foreground text-lg">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4 rounded-full bg-background/80 backdrop-blur border shadow-lg hover:bg-accent/10 transition"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-4 rounded-full bg-background/80 backdrop-blur border shadow-lg hover:bg-accent/10 transition"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Dots indicator */}
              <div className="flex justify-center gap-3 mt-12">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1)
                      setCurrentIndex(idx)
                    }}
                    className="group"
                    aria-label={`Go to testimonial ${idx + 1}`}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-border/50 group-hover:bg-accent transition-colors"
                      animate={{ scale: currentIndex === idx ? 1.8 : 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}