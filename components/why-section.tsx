"use client"

import { Lock, Cpu, Shield, CheckCircle, ArrowRight, Zap, Globe, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function WhySection() {
  const reasons = [
    {
      icon: Zap,
      title: "Built for Velocity",
      subtitle: "Professional Workflows",
      description: "Designed for consultants and devs who move fast. Use ChatGPT or Claude at full speed without the constant fear of data leaks or manual scrubbing.",
    },
    {
      icon: Sparkles,
      title: "Zero-Bloat Engine",
      subtitle: "Native Experience",
      description: "No complex dashboards or enterprise overhead. Just seamless, automated anonymization that integrates directly into your existing AI toolkit.",
    },
    {
      icon: Shield,
      title: "Hardened Security",
      subtitle: "Uncompromising Privacy",
      description: "Client-side processing by default. We architected it so your data never touches our servers. GDPR & Swiss FADP standards are our baseline.",
    },
  ]

  const trustHighlights = [
    { title: "On-Device Shield", text: "Processing happens locally. No exceptions." },
    { title: "Stateless Interaction", text: "Zero logging, zero storage. Your prompts stay yours." },
    { title: "Swiss Engineering", text: "Maximum trust through Swiss privacy standards." },
  ]

  return (
    <section id="why" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10 space-y-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Privacy that <span className="text-accent italic">Empowers</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
            Why choose between AI power and data safety? DataCloak AI provides the invisible shield for regulated industries.
          </p>
        </motion.div>

        {/* Reason Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 border border-accent/20 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{reason.subtitle}</span>
                <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The "No-Brainer" Lifetime Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-accent/30 bg-gradient-to-br from-accent/10 via-black to-black p-8 md:p-16 shadow-[0_0_50px_-12px_rgba(var(--accent-rgb),0.4)]"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Architecture */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Architected for Absolute <span className="text-accent">Certainty.</span>
              </h3>
              <ul className="space-y-6">
                {trustHighlights.map((item, idx) => (
                  <li key={idx} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 group-hover:bg-accent transition-colors">
                      <ArrowRight className="w-3 h-3 text-accent group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: The Deal */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Early Adopter Offer</h4>
                <p className="text-accent font-semibold tracking-wide">50% Lifetime Discount • Limited Spots</p>
              </div>

              <div className="space-y-4">
                {[
                  "One-time payment of €39 (No Subscriptions)",
                  "100% Refund Guarantee until Public Launch",
                  "Priority support & direct roadmap influence"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-accent hover:text-white transition-all transform active:scale-95"
              >
                Claim My 50% Lifetime Discount
              </button>
              
              <p className="text-[10px] text-center text-white/30 uppercase tracking-tighter">
                Secure your spot in the private beta • Zero financial risk
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
