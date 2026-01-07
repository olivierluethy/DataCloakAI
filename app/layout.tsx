import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Toaster } from "sonner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DataCloak AI - Privacy-First AI Data Anonymization Tool for ChatGPT & Claude",
  description:
    "Automatically anonymize sensitive data before sending to AI models like ChatGPT or Claude. Protect privacy, ensure GDPR compliance, prevent data leaks, and anonymize data for AI models with seamless AI input protection.",
  keywords:
    "AI data anonymization, privacy-first AI, GDPR compliance, anonymize sensitive data for ChatGPT, anonymize data for Claude, prevent data leaks, Claude anonymization, AI input protection, privacy-first AI tool, anonymize PII for AI models, secure AI data anonymization",
  generator: "v0.app",
  robots: "index, follow",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    userScalable: true,
  },
  alternates: {
    canonical: "https://datacloakai.com",
    languages: {
      "en-US": "https://datacloakai.com",
    },
  },
  openGraph: {
    title: "DataCloak AI - Privacy-First AI Data Anonymization Tool",
    description:
      "Automatically anonymize sensitive data before sending to AI models like ChatGPT or Claude. Protect privacy, ensure GDPR compliance, and prevent data leaks.",
    type: "website",
    url: "https://datacloakai.com",
    siteName: "DataCloak AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataCloak AI - Privacy-first AI data anonymization tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataCloak AI - Privacy-First AI Data Anonymization",
    description: "Automatically anonymize sensitive data for ChatGPT, Claude and other AI models. GDPR compliant.",
    images: ["/og-image.png"],
    creator: "@DataCloakAI",
  },
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />
        <meta name="robots" content="index, follow" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#141414" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="google-site-verification" content="your-verification-code-here" />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://datacloakai.com",
                },
              ],
            }),
          }}
        />

        <Script
          id="schema-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "DataCloak AI",
              description:
                "Privacy-first AI data anonymization tool that automatically anonymizes sensitive data before sending to AI models like ChatGPT and Claude.",
              applicationCategory: "Privacy Tool",
              operatingSystem: "Web-based",
              offers: {
                "@type": "Offer",
                price: "39",
                priceCurrency: "EUR",
              },
              url: "https://datacloakai.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "500",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is AI data anonymization?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI data anonymization automatically removes or obfuscates sensitive information like names, file paths, and IDs before sending data to AI models, protecting privacy and ensuring GDPR compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does DataCloak AI ensure GDPR compliance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "DataCloak AI automatically anonymizes sensitive data according to GDPR requirements, ensuring that personally identifiable information (PII) is removed before any data transmission to external AI services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who should use privacy-first AI tools like DataCloak?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Developers, freelancers, consultants, and professionals who work with sensitive data should use privacy-first AI tools to prevent accidental data leaks when using ChatGPT, Claude, or other AI models.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I anonymize sensitive data for ChatGPT?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, DataCloak AI specializes in anonymizing data before sending it to ChatGPT, Claude, and other AI models, allowing you to get AI assistance without risking sensitive information.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <CookieConsentBanner />
        {children}
        <Toaster position="bottom-left" richColors />
      </body>
    </html>
  )
}

function CookieConsentBanner() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const consentKey = 'datacloak-consent';
            const hasConsent = localStorage.getItem(consentKey);
            
            if (!hasConsent) {
              const banner = document.createElement('div');
              banner.id = 'cookie-consent-banner';
              banner.style.cssText = \`
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(20, 20, 20, 0.95);
                border-top: 1px solid rgb(69, 69, 69);
                padding: 16px 24px;
                z-index: 9999;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 16px;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                font-size: 14px;
                color: rgb(240, 240, 240);
              \`;
              
              banner.innerHTML = \`
                <p style="margin: 0; flex: 1;">We use analytics to improve your experience. No personal data is stored.</p>
                <div style="display: flex; gap: 8px;">
                  <button id="accept-consent" style="
                    background: rgb(68, 68, 68);
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 14px;
                  ">Accept</button>
                  <button id="decline-consent" style="
                    background: transparent;
                    color: rgb(180, 180, 180);
                    border: 1px solid rgb(68, 68, 68);
                    padding: 8px 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 14px;
                  ">Decline</button>
                </div>
              \`;
              
              document.body.appendChild(banner);
              
              document.getElementById('accept-consent').addEventListener('click', function() {
  localStorage.setItem(consentKey, 'accepted');
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'consent_granted' });
  banner.remove();
});           
              document.getElementById('decline-consent').addEventListener('click', function() {
                localStorage.setItem(consentKey, 'declined');
                banner.remove();
              });
            }
          })();
        `,
      }}
    />
  )
}
