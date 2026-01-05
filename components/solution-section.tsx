import { Shield, Zap, RefreshCw } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Shield,
      title: "Automatically Detects",
      description:
        "Identifies sensitive data in real-time before sending to ChatGPT, Claude or other AI models for input protection",
    },
    {
      icon: Zap,
      title: "Intelligently Replaces",
      description: "Converts sensitive data to safe placeholders while preserving context for AI responses",
    },
    {
      icon: RefreshCw,
      title: "Seamlessly Restores",
      description: "Optional restoration of original values in AI responses for complete anonymization workflow",
    },
  ]

  const detections = [
    "Names, organizations & personal identifiers",
    "File paths, usernames & system references",
    "API keys, tokens, credentials & references",
    "Client-specific confidential data & internal processes",
  ]

  return (
    <section id="solution" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              How DataCloak AI Anonymizes Sensitive Data for ChatGPT and Claude
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DataCloak AI automatically detects and anonymizes sensitive information with zero manual effort, providing
              privacy-first AI input protection for all your workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="space-y-4 p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" aria-label={`${feature.title} icon`} />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What DataCloak Detects & Anonymizes</h3>
              <ul className="space-y-3">
                {detections.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Why Choose DataCloak AI</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>No manual cleanup required - full automation for AI input protection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>No guessing what is safe to share with AI models</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>Seamless daily AI usage for professionals and developers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
