"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToEarlyAccess = () => {
    setMobileMenuOpen(false)
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Image
                src="/logo.png"
                alt="DataCloak AI Logo"
                width={120}
                height={40}
                priority
                className="h-7 w-auto"
              />
            </div>
            <span className="text-lg font-semibold">
              DataCloak<span className="text-yellow-500">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Problem
            </button>

            <button
              onClick={() => scrollToSection("solution")}
              className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solution
            </button>

            <button
              onClick={() => scrollToSection("why")}
              className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Why Us
            </button>

            <Button
  onClick={scrollToEarlyAccess}
  className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
>
  Claim Early Access
</Button>

          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              onClick={scrollToEarlyAccess}
              size="sm"
              className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Access
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer rounded-lg p-2 hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-16 border-b border-border bg-background/95 backdrop-blur shadow-lg md:hidden">
            <nav className="flex flex-col space-y-1 px-6 py-4">
              <button
                onClick={() => scrollToSection("problem")}
                className="cursor-pointer rounded-lg px-4 py-3 text-left hover:bg-accent/10 transition-colors"
              >
                Problem
              </button>

              <button
                onClick={() => scrollToSection("solution")}
                className="cursor-pointer rounded-lg px-4 py-3 text-left hover:bg-accent/10 transition-colors"
              >
                Solution
              </button>

              <button
                onClick={() => scrollToSection("why")}
                className="cursor-pointer rounded-lg px-4 py-3 text-left hover:bg-accent/10 transition-colors"
              >
                Why Us
              </button>

              <Button
                onClick={scrollToEarlyAccess}
                className="cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Early Access
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
