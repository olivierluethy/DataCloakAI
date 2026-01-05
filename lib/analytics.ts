// Utility function for GDPR compliance
function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("datacloak-consent") === "accepted"
}

export function trackCTAClick(label: string) {
  if (typeof window !== "undefined" && window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", "click", {
      event_category: "CTA",
      event_label: label,
    })
  }
}

export function trackHeroInteraction(action: string) {
  if (typeof window !== "undefined" && window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", "hero_interaction", {
      event_category: "Interaction",
      event_label: action,
    })
  }
}

export function trackFAQOpen(question: string) {
  if (typeof window !== "undefined" && window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", "faq_open", {
      event_category: "Engagement",
      event_label: question,
    })
  }
}

export function trackSectionView(sectionId: string) {
  if (typeof window !== "undefined" && window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", "section_view", {
      event_category: "Engagement",
      event_label: sectionId,
    })
  }
}

export function trackSessionEnd(duration: number) {
  if (typeof window !== "undefined" && window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", "session_end", {
      event_category: "Session",
      value: duration,
    })
  }
}

export function trackFormSubmit(formType: string) {
  if (typeof window !== "undefined" && window.gtag && hasAnalyticsConsent()) {
    window.gtag("event", "form_submit", {
      event_category: "Conversion",
      event_label: formType,
    })
  }
}

export function setupScrollTracking() {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return

  const sections = document.querySelectorAll("section[id]")
  let hasTracked25 = false
  let hasTracked50 = false
  let hasTracked75 = false
  let hasTracked90 = false

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

          if (scrollPercentage >= 25 && !hasTracked25) {
            hasTracked25 = true
            if (window.gtag) {
              window.gtag("event", "scroll", {
                event_category: "Engagement",
                event_label: "25% Scroll",
              })
            }
          }

          if (scrollPercentage >= 50 && !hasTracked50) {
            hasTracked50 = true
            if (window.gtag) {
              window.gtag("event", "scroll", {
                event_category: "Engagement",
                event_label: "50% Scroll",
              })
            }
          }

          if (scrollPercentage >= 75 && !hasTracked75) {
            hasTracked75 = true
            if (window.gtag) {
              window.gtag("event", "scroll", {
                event_category: "Engagement",
                event_label: "75% Scroll",
              })
            }
          }

          if (scrollPercentage >= 90 && !hasTracked90) {
            hasTracked90 = true
            if (window.gtag) {
              window.gtag("event", "scroll", {
                event_category: "Engagement",
                event_label: "90% Scroll",
              })
            }
          }
        }
      })
    },
    { threshold: 0.5 },
  )

  sections.forEach((section) => observer.observe(section))

  const sessionStart = Date.now()
  const handleBeforeUnload = () => {
    const duration = Math.round((Date.now() - sessionStart) / 1000)
    trackSessionEnd(duration)
  }
  window.addEventListener("beforeunload", handleBeforeUnload)
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
