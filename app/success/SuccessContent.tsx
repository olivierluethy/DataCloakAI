"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Sparkles, Shield, Zap, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const [confetti, setConfetti] = useState<
    { x: number; duration: number; delay: number }[]
  >([])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    setViewport({ width, height })

    setConfetti(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * width - width / 2,
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 3,
      }))
    )
  }, [])

  // Floating icons for celebration
  const floatingIcons = [
    { Icon: Sparkles, size: 80, delay: 0, duration: 30, x: -300, y: -200 },
    { Icon: CheckCircle, size: 96, delay: 8, duration: 35, x: 350, y: -180 },
    { Icon: Shield, size: 72, delay: 16, duration: 28, x: -250, y: 220 },
    { Icon: Zap, size: 64, delay: 24, duration: 32, x: 280, y: 150 },
    { Icon: Sparkles, size: 56, delay: 4, duration: 34, x: 100, y: -320 },
  ]

  return (
    <div
      suppressHydrationWarning
      className="relative min-h-screen bg-gradient-to-b from-background to-background/90 overflow-hidden flex items-center justify-center px-4"
    >
      {/* Dramatic celebratory glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.6, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 200, 0], y: [0, -200, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-green-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -220, 0], y: [0, 220, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating celebration icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, size, delay, duration, x, y }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              x: [x, x + 150, x],
              y: [y, y + 200, y],
              rotate: [-15, 15, -15],
            }}
            transition={{
              opacity: { duration: 10, repeat: Infinity },
              x: { duration, repeat: Infinity, ease: "linear", delay },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-1/2 hidden lg:block"
          >
            <Icon
              className={`w-${size / 4} h-${size / 4} text-green-400`}
              style={{ filter: "drop-shadow(0 0 40px rgba(74, 222, 128, 0.6))" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Confetti-like particles */}
      {viewport.height > 0 &&
        confetti.map((c, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 1 }}
            animate={{
              y: [viewport.height, -50],
              x: c.x,
              opacity: [1, 0],
            }}
            transition={{
              duration: c.duration,
              repeat: Infinity,
              delay: c.delay,
              ease: "easeOut",
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor:
                i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#34d399" : "#6ee7b7",
              left: "50%",
              top: "0%",
            }}
          />
        ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto text-center space-y-12"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-flex p-8 rounded-full bg-green-500/20 mb-8"
        >
          <CheckCircle className="w-32 h-32 text-green-500" />
        </motion.div>

        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Payment Successful!
            </span>{" "}
            <span className="text-foreground">🎉</span>
          </h1>

          <p className="text-2xl sm:text-3xl text-foreground">
            Thank you for your purchase.
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your <span className="font-bold text-green-400">Lifetime Access</span> to DataCloak AI is now activated.
          </p>
          <p className="text-xl text-muted-foreground flex items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-green-400" />
            You will receive a confirmation email shortly with all the details.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-500"
          >
            Back to Home
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground"
        >
          Welcome to the future of privacy-first AI productivity.
        </motion.p>
      </motion.div>
    </div>
  )
}
