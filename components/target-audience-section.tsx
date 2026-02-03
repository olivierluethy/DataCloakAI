"use client"

import { Code, Briefcase, Key, Fingerprint, Shield, Sparkles, Laptop, Terminal, UserCheck } from "lucide-react"
import { motion } from "framer-motion"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: Terminal,
      label: "Engineers & Devs",
      subtitle: "Protect Your Codebase",
      description: "Stop leaking internal file paths, proprietary algorithms, or hardcoded API keys into public AI training sets. Code with total peace of mind.",
    },
    {
      icon: UserCheck,
      label: "Consultants & Pros",
      subtitle: "Shield Your Clients",
      description: "Process sensitive client documents without the fear of violating NDAs or GDPR. Maintain your professional reputation as a security-first expert.",
    },
  ]

  const floatingIcons = [
    { Icon: Key, size: 48, delay: 0, duration: 26, x: -180, y: -120 },
    { Icon: Fingerprint, size: 56, delay: 7, duration: 30, x: 200, y: -100 },
    { Icon: Shield, size: 44, delay: 14, duration: 24, x: -120, y: 140 },
    { Icon: Sparkles, size: 40, delay: 21, duration: 28, x: 150, y: 100 },
    { Icon: Laptop, size: 52, delay: 4, duration: 32, x: -80, y: -200 },
  ]

  return (
    <section className="relative py-24 sm:py-32 px-4 overflow-hidden bg-black/40 border-y border-white/5">
      {/* Visual Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="space-y-20">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Built for those who <br />
              <span className="text-accent italic">know the stakes.</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're shipping code or advising enterprises, DataCloak AI is the invisible barrier between your sensitive data and the public cloud.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="relative grid md:grid-cols-2 gap-10">
            {/* Floating Icons Overlay */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: [0.03, 0.1, 0.03],
                    x: [x, x + 60, x],
                    y: [y, y + 80, y],
                  }}
                  transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
                  className="absolute left-1/2 top-1/2"
                >
                  <Icon className="text-accent" style={{ width: size, height: size }} />
                </motion.div>
              ))}
            </div>

            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent/40 transition-all duration-500 overflow-hidden"
              >
                {/* Glimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <audience.icon className="w-8 h-8 text-accent" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-accent font-black">{audience.subtitle}</span>
                      <h3 className="text-3xl font-bold text-white">{audience.label}</h3>
                    </div>
                    <p className="text-white/50 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>

                  {/* Visual "Safe" Indicator */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-emerald-500/80 uppercase tracking-tighter">
                    <Shield className="w-4 h-4" />
                    100% Privacy Protected Workflow
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Proof nudge */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-center"
          >
            <p className="text-sm text-white/20 font-medium italic">
              Trusted by professionals at top-tier consulting firms and high-growth engineering teams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
