import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Optional: Falls du eine echte Erstellungs-/Änderungszeit pro Artikel hast, 
  // kannst du hier ein Objekt oder eine Map verwenden statt harter new Date()
  const recentDate = new Date("2026-01-15");   // Beispiel: neuere Artikel
  const olderDate  = new Date("2025-11-20");   // Beispiel: etwas ältere Artikel

  return [
    // Homepage – wichtigste Seite
    {
      url: "https://datacloakai.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },

    // Statische/legal Seiten
    {
      url: "https://datacloakai.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://datacloakai.com/terms-of-service",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

    // Einzelne Blog-Artikel – mit etwas unterschiedlichen lastModified-Daten
    {
      url: "https://datacloakai.com/blog/anonymize-data-for-ai-models",
      lastModified: recentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://datacloakai.com/blog/gdpr-ai-compliance",
      lastModified: recentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://datacloakai.com/blog/preventing-data-leaks-ai",
      lastModified: olderDate,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: "https://datacloakai.com/blog/secure-ai-for-developers",
      lastModified: recentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    // Optional: Falls du den Consultant-Artikel auch schon live hast
    {
      url: "https://datacloakai.com/blog/ai-privacy-for-consultants",
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ];
}