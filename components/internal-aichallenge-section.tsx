"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Key, DollarSign, TrendingUp, AlertTriangle, Sparkles } from "lucide-react"

export function InternalAIChallengeSection() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Fear of Data Exposure",
      description: "Companies block AI usage entirely due to risks of sensitive data reaching external models.",
    },
    {
      icon: DollarSign,
      title: "Fortune Spent on Custom Solutions",
      description: "Building internal AI tools or training models costs millions — with no revenue return.",
    },
    {
      icon: TrendingUp,
      title: "Inferior Performance",
      description: "Self-built AI never matches top models like ChatGPT or Claude in capability.",
    },
    {
      icon: Zap,
      title: "Lost Productivity",
      description: "Teams remain stuck with manual workflows while competitors leverage AI safely.",
    },
  ]

  // Floating icons
  const floatingIcons = [
    { Icon: Shield, size: 72, delay: 0, duration: 32, x: -300, y: -200 },
    { Icon: Key, size: 64, delay: 8, duration: 36, x: 350, y: -180 },
    { Icon: DollarSign, size: 80, delay: 16, duration: 30, x: -250, y: 250 },
    { Icon: Sparkles, size: 56, delay: 24, duration: 34, x: 280, y: 150 },
    { Icon: Zap, size: 68, delay: 4, duration: 28, x: -100, y: -300 },
  ]

  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Dramatic glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 180, 0], y: [0, -180, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-accent/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -200, 0], y: [0, 200, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.18, 0.05],
              x: [x, x + 140, x],
              y: [y, y + 180, y],
              rotate: [-10, 10, -10],
            }}
            transition={{
              opacity: { duration: 12, repeat: Infinity },
              x: { duration, repeat: Infinity, ease: "linear", delay },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-1/2"
          >
            <Icon
              className={`w-${size/4} h-${size/4} text-accent/50`}
              style={{ filter: "drop-shadow(0 0 40px rgba(var(--accent-rgb), 0.6))" }}
            />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              The Hidden Cost of
              <br />
              <span className="bg-gradient-to-r from-red-500/80 to-orange-500/80 bg-clip-text text-transparent">
                Avoiding AI
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Many companies ban AI entirely — or waste millions building inferior internal versions — just to keep data "safe".
              <br className="hidden md:block" />
              But the real risk is falling behind while competitors move faster.
            </p>
          </motion.div>

          {/* Challenge Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ y: -16, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/90 backdrop-blur-md p-8 shadow-xl transition-all duration-700 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/20"
                >
                  {/* Glimmer shine */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className="relative w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-red-500 transition-transform duration-500 group-hover:scale-125" />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-red-500/20 blur-xl"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-red-400 transition-colors duration-400 mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-400">
                    {challenge.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <p className="text-2xl sm:text-3xl font-semibold text-foreground">
              Why reinvent the wheel at enormous cost — when you can use the best AI models
              <span className="text-accent"> safely and privately</span>?
            </p>
            <p className="text-xl text-muted-foreground">
              That capital could fuel revenue-generating initiatives instead of building inferior tools that never pay back.
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              DataCloak AI lets you embrace top-tier AI — without compromising your data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}