export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Developer Using ChatGPT Without Data Leaks",
      description:
        "A senior developer needed to use ChatGPT for code review on sensitive client projects. With DataCloak AI, they automatically anonymized API keys, file paths, and internal references before pasting code snippets.",
      result: "Reduced code review time by 40% while maintaining GDPR compliance and client confidentiality.",
      metrics: "40% faster code review • 100% data anonymization • Zero compliance violations",
    },
    {
      title: "Freelance Consultant Protecting Client Privacy",
      description:
        "A freelance data analyst needed Claude for statistical analysis of client data containing personally identifiable information (PII). DataCloak AI automatically anonymized PII before analysis.",
      result:
        "Successfully used AI assistance on sensitive data projects without GDPR violations or client trust issues.",
      metrics: "Zero privacy incidents • 50+ client projects protected • Full GDPR compliance",
    },
    {
      title: "Enterprise Team Scaling AI Usage",
      description:
        "A marketing agency with multiple teams needed to use ChatGPT for campaign analysis on client datasets. DataCloak AI provided privacy-first AI input protection for the entire team.",
      result:
        "Enabled secure, scaled AI usage across teams with automatic sensitive data anonymization and zero data leaks.",
      metrics: "20+ team members • 500+ AI queries protected • Enterprise-grade privacy",
    },
  ]

  return (
    <section id="case-studies" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Real-World AI Data Anonymization Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how developers, consultants, and teams use DataCloak AI to protect sensitive data while leveraging AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-all hover:shadow-md space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">{study.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>
                <div className="pt-2 border-t border-border/50">
                  <p className="text-sm font-medium text-accent mb-2">Result:</p>
                  <p className="text-sm text-muted-foreground mb-4">{study.result}</p>
                  <p className="text-xs text-muted-foreground">{study.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
