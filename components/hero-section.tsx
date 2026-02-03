"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Cpu, EyeOff, Lock, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-black text-white">
      {/* Background Grid & Orbs (Optimiert für Performance) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-10"
          >
            {/* New: Early Access Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
  bg-white/80 backdrop-blur
  border border-gray-200
  text-gray-700 text-sm font-medium shadow-sm">
  <Star className="w-3 h-3 text-gray-500" />
  <span>Limited Early Access Program</span>
</div>


            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1]">
              Don't Let Your AI 
              <br />
              <span className="text-accent italic">Expose</span> Your Data
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Automatically strip sensitive details from your prompts before they reach ChatGPT or Claude. <span className="text-white font-normal">Privacy for the AI era.</span>
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Button
                onClick={scrollToEarlyAccess}
                size="lg"
                className="group cursor-pointer bg-accent text-accent-foreground hover:brightness-110 text-xl px-12 h-16 font-bold rounded-2xl transition-all shadow-[0_20px_40px_-12px_rgba(var(--accent-rgb),0.4)]"
              >
                Claim My 50% Discount
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-sm font-semibold">Join 500+ professionals</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Badges (Horizontal & Clean) */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-2 sm:flex flex-wrap gap-4">
              {[
                { Icon: Shield, label: "GDPR Compliant" },
                { Icon: Cpu, label: "Local Processing" },
                { Icon: EyeOff, label: "Zero-Log Policy" },
                { Icon: Lock, label: "Swiss Security" },
              ].map(({ Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-white/40 tracking-wider uppercase">
                  <Icon className="w-4 h-4 text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Mockup Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Glossy Mockup Container */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl overflow-hidden group">
              <Image
                src="/mockup.png"
                alt="DataCloak AI Dashboard"
                width={800}
                height={600}
                className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                <p className="text-sm font-medium italic text-white/80">
                  "The bridge between AI power and Enterprise privacy."
                </p>
              </div>
            </div>

            {/* Decorative Floating Card (Anonymization Stat) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden sm:block p-4 rounded-2xl bg-white text-black shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-black/60 font-bold uppercase tracking-tighter">Status</p>
                  <p className="text-sm font-black">100% Redacted</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
