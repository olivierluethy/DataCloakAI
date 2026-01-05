import { AlertTriangle } from "lucide-react"

export function ProblemSection() {
  const risks = [
    {
      title: "GDPR Violations",
      description:
        "Processing client data without proper anonymization for AI models exposes you to fines and legal liability under GDPR regulations.",
    },
    {
      title: "Broken NDAs & Trust",
      description:
        "Exposing confidential information and sensitive data to AI tools damages client relationships and your professional reputation.",
    },
    {
      title: "Data Leaks in AI Logs",
      description:
        "Sensitive information gets stored in AI model logs and training data, creating permanent exposure of your confidential data.",
    },
  ]

  const examples = [
    "Client names, organizations, and personal identifiers",
    "Internal documents, code snippets, and proprietary information",
    "File paths, usernames, and system references",
    "API keys, tokens, credentials, and internal references",
  ]

  return (
    <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                The Risks of Sharing Sensitive Data with AI Models
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every day, professionals paste sensitive data into AI tools like ChatGPT without realizing the risks to
                privacy and compliance. Failing to anonymize sensitive data before sending to AI models can result in
                serious data leaks. When you use AI for work with confidential information, the stakes are higher than
                ever. Your clients' data, internal processes, and proprietary information need protection through
                automatic anonymization.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Common Examples of Data Exposed:</h3>
              <ul className="space-y-3">
                {examples.map((example) => (
                  <li key={example} className="flex gap-3 text-muted-foreground">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
              >
                <div className="flex gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-label="Alert icon" />
                  <h3 className="font-semibold">{risk.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-8">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
