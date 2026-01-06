"use client"

import { Code, Shield, Users, Sparkles, Key, Fingerprint, EyeOff, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Developer Using ChatGPT Without Data Leaks",
      description:
        "A senior developer needed to use ChatGPT for code review on sensitive client projects. With DataCloak AI, they automatically anonymized API keys, file paths, and internal references before pasting code snippets.",
      result: "Reduced code review time by 40% while maintaining GDPR compliance and client confidentiality.",
      metrics: "40% faster code review • 100% data anonymization • Zero compliance violations",
      icon: Code,
    },
    {
      title: "Freelance Consultant Protecting Client Privacy",
      description:
        "A freelance data analyst needed Claude for statistical analysis of client data containing personally identifiable information (PII). DataCloak AI automatically anonymized PII before analysis.",
      result:
        "Successfully used AI assistance on sensitive data projects without GDPR violations or client trust issues.",
      metrics: "Zero privacy incidents • 50+ client projects protected • Full GDPR compliance",
      icon: Shield,
    },
    {
      title: "Enterprise Team Scaling AI Usage",
      description:
        "A marketing agency with multiple teams needed to use ChatGPT for campaign analysis on client datasets. DataCloak AI provided privacy-first AI input protection for the entire team.",
      result:
        "Enabled secure, scaled AI usage across teams with automatic sensitive data anonymization and zero data leaks.",
      metrics: "20+ team members • 500+ AI queries protected • Enterprise-grade privacy",
      icon: Users,
    },
  ]

  // Floating icons around the case study cards
  const floatingIcons = [
    { Icon: Key, size: 52, delay: 0, duration: 28, x: -200, y: -150 },
    { Icon: Fingerprint, size: 60, delay: 8, duration: 32, x: 220, y: -120 },
    { Icon: EyeOff, size: 48, delay: 16, duration: 26, x: -150, y: 180 },
    { Icon: Sparkles, size: 44, delay: 24, duration: 30, x: 180, y: 120 },
    { Icon: Zap, size: 56, delay: 4, duration: 25, x: -100, y: -220 },
    { Icon: Shield, size: 50, delay: 12, duration: 29, x: 120, y: 200 },
  ]

  return (
    <section id="case-studies" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Soft glow orbs */}
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Real-World AI Data Anonymization Case Studies</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how developers, consultants, and teams use DataCloak AI to protect sensitive data while leveraging AI.
            </p>
          </motion.div>

          {/* Case Study Cards Grid with Floating Icons */}
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Floating Icons Overlay */}
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

            {/* Case Study Cards */}
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  whileHover={{ y: -18, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-md p-8 shadow-xl transition-all duration-700 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/30"
                >
                  {/* Glimmer Shine Effect */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </motion.div>

                  {/* Icon with pulse glow */}
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
                    {study.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-400 mb-6">
                    {study.description}
                  </p>

                  {/* Result Section */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-accent mb-2">Result:</p>
                    <p className="text-base text-foreground mb-4">{study.result}</p>
                    <p className="text-sm text-muted-foreground/80 font-medium">{study.metrics}</p>
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