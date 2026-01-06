"use client"

import { Lock, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToEarlyAccess = () => {
    setMobileMenuOpen(false) // Close menu on CTA click
    const element = document.getElementById("early-access")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground">
                <Image
                  src="/logo.png"
                  alt="DataCloak AI Logo"
                  width={120}
                  height={40}
                  priority
                  className="w-auto h-7"
                />
              </div>
              <span className="text-lg font-semibold">DataCloak AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Us
            </button>
            <Button
              onClick={scrollToEarlyAccess}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Early Access
            </Button>
          </nav>

          {/* Mobile Menu Trigger & CTA */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              onClick={scrollToEarlyAccess}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Access
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur border-b border-border shadow-lg">
            <nav className="flex flex-col py-4 px-6 space-y-1">
              <button
                onClick={() => scrollToSection("problem")}
                className="text-left py-3 px-4 text-base text-foreground hover:bg-accent/10 rounded-lg transition-colors"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className="text-left py-3 px-4 text-base text-foreground hover:bg-accent/10 rounded-lg transition-colors"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection("why")}
                className="text-left py-3 px-4 text-base text-foreground hover:bg-accent/10 rounded-lg transition-colors"
              >
                Why Us
              </button>
              <div className="pt-2">
                <Button
                  onClick={scrollToEarlyAccess}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Early Access
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}