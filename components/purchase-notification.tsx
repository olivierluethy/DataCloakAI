"use client"

import { useEffect } from "react"
import { toast } from "sonner"
import { ShieldCheck, Users } from "lucide-react"
import Image from "next/image"

const recentSignups = [
  { name: "Maximilian S.", city: "Berlin", country: "de" },
  { name: "Lukas W.", city: "Zürich", country: "ch" },
  { name: "Sarah M.", city: "Wien", country: "at" },
  { name: "Julian R.", city: "Hamburg", country: "de" },
  { name: "Marc K.", city: "München", country: "de" },
  { name: "Elena B.", city: "Genf", country: "ch" },
  { name: "Thomas H.", city: "Frankfurt", country: "de" },
  { name: "Andreas L.", city: "Salzburg", country: "at" },
]

export function PurchaseNotification() {
  useEffect(() => {
    const showNotification = () => {
      const user = recentSignups[Math.floor(Math.random() * recentSignups.length)]
      const timeAgo = ["just now", "2 min ago", "5 min ago", "recently"][Math.floor(Math.random() * 4)]

      toast.custom((t) => (
        <div
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A]/95 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:bg-[#111]/100 w-full max-w-[350px]"
          role="alert"
        >
          {/* Avatar Area: Initials or Avatar */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-bold text-sm">
              {user.name.split(" ")[0]?.[0] ?? "?"}
              {user.name.split(" ")[1]?.[0] ?? ""}
            </span>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-0.5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                New Early Access
              </p>
              <span className="text-[10px] text-white/40 font-medium">{timeAgo}</span>
            </div>

            <p className="text-sm font-medium text-white/90">
              {user.name} from {user.city}
            </p>

            <p className="text-[13px] text-white/50 leading-snug">
              Joined the <span className="text-white/80 font-semibold">50% Lifetime Discount</span> list.
            </p>
          </div>

          {/* Minimal Flag */}
          <div className="opacity-60 hover:grayscale-0 transition-all">
            <Image
              src={`https://flagcdn.com/w20/${user.country.toLowerCase()}.png`}
              alt={`${user.country.toUpperCase()} flag`}
              width={24}
              height={18}
              className="rounded-sm object-contain"
              unoptimized // ← important for external CDN images in many Next.js setups
            />
          </div>
        </div>
      ), {
        duration: 5000,
        position: "bottom-left",
      })
    }

    const timeoutId = setTimeout(() => {
      showNotification()
      const intervalId = setInterval(showNotification, Math.random() * 15000 + 15000)
      return () => clearInterval(intervalId)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [])

  return null
}