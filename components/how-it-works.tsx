"use client"

import { motion } from "framer-motion"
import {
  Database,
  ArrowRightLeft,
  ShieldCheck,
  Lock,
  Cpu,
  Zap,
  CheckCircle2,
} from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Database,
      number: "01",
      title: "Connect your data",
      description:
        "Link databases, APIs, files, CSVs, cloud storage — no code, no infrastructure changes.",
    },
    {
      icon: ArrowRightLeft,
      number: "02",
      title: "Data gets cloaked locally",
      description:
        "Sensitive values are replaced with realistic synthetic data while keeping format, structure and statistical properties intact.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Use safely everywhere",
      description:
        "Feed clean data into dev environments, AI training, demos, partner sharing — original data never leaves your control.",
    },
  ]

  // Floating background icons (same style as your Why section)
  const floatingIcons = [
    { Icon: Lock,    size: 48, delay: 0,  duration: 26, x: -160, y: -120 },
    { Icon: Cpu,     size: 52, delay: 4,  duration: 30, x: 140,  y: -160 },
    { Icon: Zap,     size: 44, delay: 8,  duration: 24, x: -110, y: 130  },
    { Icon: Database, size: 56, delay: 12, duration: 28, x: 130,  y: 100  },
    { Icon: ShieldCheck, size: 50, delay: 2, duration: 32, x: -90,  y: -200 },
    { Icon: CheckCircle2, size: 40, delay: 10, duration: 22, x: 160,  y: 140 },
  ]

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle grid background (same as your Why section) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Very soft accent glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-5 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4" />
            3 steps · privacy-first
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            How DataCloak Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Real protection. Zero complexity. Your data never leaves your control.
          </motion.p>
        </div>

        {/* Floating icons background (matching your Why section style) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {floatingIcons.map(({ Icon, size, delay, duration, x, y }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.04, 0.12, 0.04],
                x: [x, x + 120, x],
                y: [y, y + 160, y],
                rotate: [-8, 8, -8],
              }}
              transition={{
                opacity: { duration: 12, repeat: Infinity },
                x: { duration, repeat: Infinity, ease: "linear", delay },
                y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                rotate: { duration: duration * 1.4, repeat: Infinity },
              }}
              className="absolute left-1/2 top-1/2"
            >
              <Icon
                className={`w-${size/4} h-${size/4} text-accent/30`}
                style={{ filter: "drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.3))" }}
              />
            </motion.div>
          ))}
        </div>

        {/* 3-step cards */}
        <div className="grid md:grid-cols-3 gap-7 lg:gap-9 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20"
            >
              {/* very subtle shine on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 to-transparent skew-x-12" />
              </motion.div>

              {/* number badge */}
              <div className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-background border-2 border-accent/40 flex items-center justify-center text-accent font-mono font-bold text-sm shadow-md">
                {step.number}
              </div>

              {/* icon with glow */}
              <div className="relative w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mb-7 border border-accent/20 group-hover:scale-110 transition-transform duration-400">
                <step.icon className="w-8 h-8 text-accent" />
                <motion.div
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {step.title}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* closing trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 text-center text-lg text-muted-foreground"
        >
          <span className="text-accent font-medium">No servers. No logs. No risk.</span>
          <span className="mx-2">—</span>
          Just clean, safe, realistic data.
        </motion.div>
      </div>
    </section>
  )
}