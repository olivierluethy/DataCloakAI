"use client"

import { useEffect } from "react"
import { toast } from "sonner"
import { Check } from "lucide-react"
import Image from "next/image"

// Predefined arrays for variety
const names = [
  "Alex", "Jordan", "Taylor", "Casey", "Morgan",
  "Riley", "Jamie", "Chris", "Sam", "Lee",
  "Pat", "Robin", "Dana", "Kim", "Jesse",
  "Terry", "Quinn", "Avery", "Cameron", "Drew"
]

const countries = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "India", code: "in" },
  { name: "Bangladesh", code: "bd" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "Germany", code: "de" },
  { name: "France", code: "fr" },
  { name: "Brazil", code: "br" },
  { name: "Mexico", code: "mx" },
  { name: "Japan", code: "jp" },
  { name: "China", code: "cn" },
  { name: "South Africa", code: "za" },
  { name: "Nigeria", code: "ng" },
  { name: "Spain", code: "es" },
  { name: "Italy", code: "it" },
  { name: "Russia", code: "ru" },
  { name: "Turkey", code: "tr" },
  { name: "Indonesia", code: "id" },
  { name: "Philippines", code: "ph" }
]

export function PurchaseNotification() {
  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      const randomCountry = countries[Math.floor(Math.random() * countries.length)]

      toast.custom(() => (
        <div
          className="flex items-center gap-4 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
          role="alert"
          aria-live="polite"
        >
          {/* Small success icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
            <Check className="h-6 w-6 text-accent" />
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            {/* Name line with verified badge */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <p className="text-sm font-medium text-foreground">
                {randomName} ({randomCountry.name})
              </p>

              {/* Verified by Afterquandt badge */}
              <div className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-400">
  <Check className="h-3 w-3" />
  Verified purchase
</div>

            </div>

            <p className="text-base font-semibold text-foreground">
  Purchased a Lifetime license for DataCloak AI
</p>

          </div>

          {/* Country flag */}
          <Image
            src={`https://flagcdn.com/32x24/${randomCountry.code}.png`}
            alt={`${randomCountry.name} flag`}
            width={32}
            height={24}
            className="rounded-sm shadow-sm"
          />
        </div>
      ), {
        duration: 6000,
      })
    }

    // Start after 4-8 seconds
    const initialDelay = Math.random() * 4000 + 4000
    const timeoutId = setTimeout(() => {
      showNotification()
      // Repeat every 10-20 seconds
      const intervalId = setInterval(showNotification, Math.random() * 10000 + 10000)
      return () => clearInterval(intervalId)
    }, initialDelay)

    return () => clearTimeout(timeoutId)
  }, [])

  return null // No visible render; notifications handled by Sonner
}