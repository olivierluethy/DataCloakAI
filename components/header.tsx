"use client"

import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToEarlyAccess = () => {
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-accent-foreground">
              <Lock className="w-4 h-4" aria-label="DataCloak AI Privacy Lock Icon" />
            </div>
            <span className="text-lg font-semibold">DataCloak AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Why Us
            </a>
            <Button onClick={scrollToEarlyAccess} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Early Access
            </Button>
          </nav>
          <div className="md:hidden">
            <Button
              onClick={scrollToEarlyAccess}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              size="sm"
            >
              Get Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
