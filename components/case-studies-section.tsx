"use client"

import { Code, Shield, Users, Sparkles, Key, Fingerprint, EyeOff, Zap, Lock } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function CaseStudiesSection() {
  const visions = [
    {
      title: "The Developer's Dream Workflow",
      description:
        "Imagine pasting code into ChatGPT without ever worrying about exposing API keys, file paths, or proprietary logic. DataCloak AI automatically detects and replaces sensitive details in real-time, letting you focus purely on getting the best AI feedback.",
      benefit: "Faster code reviews, zero accidental leaks, and complete peace of mind — even on the most confidential client projects.",
      icon: Code,
      imgSrc: "https://www.syntho.ai/wp-content/uploads/2024/04/visualization-of-the-process-of-anonymizing-data.webp", // Visualization of anonymization process
      imgAlt: "Visualization of data anonymization process for AI",
    },
    {
      title: "The Freelancer's Privacy Shield",
      description:
        "Picture analyzing client datasets with Claude, knowing every name, email, and personal identifier is instantly anonymized before transmission. No manual redaction, no second-guessing — just powerful AI insights on fully protected data.",
      benefit: "Build unbreakable client trust, stay GDPR-compliant effortlessly, and scale your services without privacy risks holding you back.",
      icon: Shield,
      imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20240521114108/What-is-Data-Anonymization-1.webp", // Data anonymization diagram
      imgAlt: "Diagram explaining data anonymization techniques",
    },
    {
      title: "The Team's Secure AI Future",
      description:
        "Envision an entire organization using AI freely across marketing, research, and development — with every prompt automatically scrubbed of sensitive information. DataCloak AI acts as an invisible guardian at the gate.",
      benefit: "Enterprise-scale AI adoption without data breach fears, seamless onboarding for new team members, and a culture of responsible innovation.",
      icon: Users,
      imgSrc: "https://fluentsupport.com/wp-content/uploads/2025/07/Claude-vs-ChatGPT.webp", // Secure AI workflow vision
      imgAlt: "Secure data flow in privacy-first AI workflow",
    },
  ]

  // Floating privacy-themed icons
  const floatingIcons = [
    { Icon: Key, size: 52, delay: 0, duration: 28, x: -200, y: -150 },
    { Icon: Fingerprint, size: 60, delay: 8, duration: 32, x: 220, y: -120 },
    { Icon: EyeOff, size: 48, delay: 16, duration: 26, x: -150, y: 180 },
    { Icon: Sparkles, size: 44, delay: 24, duration: 30, x: 180, y: 120 },
    { Icon: Zap, size: 56, delay: 4, duration: 25, x: -100, y: -220 },
    { Icon: Lock, size: 50, delay: 12, duration: 29, x: 120, y: 200 },
  ]

  return (
    <section id="case-studies" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle animated grid */}
      <div className="absolute inset-0 pointer-events-none opacity-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Soft accent glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-80 h-80 bg-accent/12 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="space-y-16">
          {/* Header - Vision-focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              The Future of Privacy-First AI Workflows
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              DataCloak AI is being built to make these dream scenarios your everyday reality — automatic, seamless protection that lets you harness the full power of AI without ever compromising sensitive data.
            </p>
          </motion.div>

          {/* Vision Cards Grid */}
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.04, 0.14, 0.04],
                    x: [x, x + 110, x],
                    y: [y, y + 150, y],
                    rotate: [-8, 8, -8],
                  }}
                  transition={{
                    opacity: { duration: 10, repeat: Infinity },
                    x: { duration, repeat: Infinity, ease: "linear", delay },
                    y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                    rotate: { duration: duration * 1.4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute left-1/2 top-1/2"
                >
                  <Icon
                    className={`w-${size/4} h-${size/4} text-accent/40`}
                    style={{ filter: "drop-shadow(0 0 22px rgba(var(--accent-rgb), 0.45))" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Vision Cards */}
            {visions.map((vision, index) => {
              const Icon = vision.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  whileHover={{ y: -18, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-md shadow-xl transition-all duration-700 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/30"
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </motion.div>

                  {/* Vision illustration */}
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <Image
                      src={vision.imgSrc}
                      alt={vision.imgAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  <div className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6"
                    >
                      <Icon className="w-8 h-8 text-accent transition-transform duration-500 group-hover:scale-125" />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl"
                      />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-400 mb-4">
                      {vision.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-400 mb-6">
                      {vision.description}
                    </p>

                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm font-semibold text-accent mb-2">The Impact:</p>
                      <p className="text-base text-foreground">{vision.benefit}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}