"use client"

import { Database, ArrowRightLeft, ShieldCheck, Zap, Globe, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function WorkflowSection() {
  const steps = [
    {
      icon: Database,
      number: "01",
      title: "Seamless Integration",
      subtitle: "Beyond Copy-Paste",
      description:
        "Don't just paste text. Connect your entire ecosystem: Databases (SQL/NoSQL), APIs, CSVs, or Cloud Storage. DataCloak AI acts as a transparent proxy for your data streams.",
    },
    {
      icon: Zap,
      number: "02",
      title: "Real-Time Anonymization",
      subtitle: "Local & Instant",
      description:
        "Our engine cloaks your data locally. Sensitive values are replaced with realistic synthetic data. Formats, logic, and statistical integrity remain 100% intact for your AI models.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Safe Distribution",
      subtitle: "Zero Risk, Full Power",
      description:
        "Deploy 'clean' data instantly to Dev-Environments, LLMs, or Partners. Your original sensitive data never leaves your secure perimeter. Compliance by design.",
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm">How it works</h2>
          <p className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Automated Privacy. <span className="text-white/50">Zero Friction.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Verbindungslinie (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group space-y-6 p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Icon & Number */}
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <span className="text-5xl font-black text-white/5 select-none">{step.number}</span>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                  {step.subtitle}
                </h3>
                <h4 className="text-2xl font-bold text-white leading-tight">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
