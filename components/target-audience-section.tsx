"use client"

import { Code, Briefcase, Users, Zap, Laptop, Shield, Key, Fingerprint, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: Code,
      label: "Developers & Engineers",
      description: "Use AI daily while protecting code and API keys from exposure",
    },
    {
      icon: Briefcase,
      label: "Consultants & Freelancers",
      description: "Maintain client confidentiality while leveraging ChatGPT and Claude",
    },
    {
      icon: Users,
      label: "Agencies & Teams",
      description: "Scale AI usage without risking sensitive client data",
    },
    {
      icon: Zap,
      label: "Privacy-Conscious Professionals",
      description: "Ensure GDPR compliance in AI workflows automatically",
    },
  ]

  // Floating icons around the audience cards
  const floatingIcons = [
    { Icon: Key, size: 48, delay: 0, duration: 26, x: -180, y: -120 },
    { Icon: Fingerprint, size: 56, delay: 7, duration: 30, x: 200, y: -100 },
    { Icon: Shield, size: 44, delay: 14, duration: 24, x: -120, y: 140 },
    { Icon: Sparkles, size: 40, delay: 21, duration: 28, x: 150, y: 100 },
    { Icon: Laptop, size: 52, delay: 4, duration: 32, x: -80, y: -200 },
    { Icon: Key, size: 50, delay: 11, duration: 25, x: 100, y: 180 },
  ]

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-card/50 border-y border-border">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse-slow" />
      </div>

      {/* Soft glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -35, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 35, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Who Should Use Privacy-First AI Tools</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              If you care about privacy, compliance, and protecting sensitive data, DataCloak AI is built for you.
            </p>
          </motion.div>

          {/* Audience Cards Grid with Floating Icons */}
          <div className="relative grid md:grid-cols-2 gap-8">
            {/* Floating Icons Overlay */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.04, 0.12, 0.04],
                    x: [x, x + 90, x],
                    y: [y, y + 130, y],
                    rotate: [-7, 7, -7],
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
                    style={{ filter: "drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.4))" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Audience Cards */}
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <motion.div
                  key={audience.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  whileHover={{ y: -14, scale: 1.04 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background/90 backdrop-blur-md p-8 shadow-xl transition-all duration-700 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/30 flex gap-6"
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
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0"
                  >
                    <Icon className="w-8 h-8 text-accent transition-transform duration-500 group-hover:scale-125" />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl"
                    />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-400">
                      {audience.label}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-400">
                      {audience.description}
                    </p>
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