import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./reveal";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    blurb: "Explore CoreBrain with a single team.",
    cta: "Start Free",
    features: ["100 documents", "500 questions / month", "Source citations", "1 workspace"],
  },
  {
    name: "Starter",
    price: "$249",
    cadence: "/ month",
    blurb: "For a single plant getting organised.",
    cta: "Choose Starter",
    features: ["2,500 documents", "Unlimited questions", "AI summaries", "Up to 25 seats", "Email support"],
  },
  {
    name: "Business",
    price: "$899",
    cadence: "/ month",
    blurb: "For multi-line manufacturers scaling knowledge.",
    cta: "Choose Business",
    highlight: true,
    features: [
      "50,000 documents",
      "Knowledge gap detection",
      "AI training assistant",
      "SSO + role permissions",
      "Up to 250 seats",
      "Priority support & onboarding",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "For global groups with strict compliance.",
    cta: "Talk To Sales",
    features: [
      "Unlimited documents",
      "Private / on-prem deployment",
      "Audit logs & data residency",
      "Custom integrations (MES, ERP, PLM)",
      "Dedicated success engineer",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent plans that scale with your plants"
          subtitle="Start free. Upgrade when your knowledge base becomes mission critical."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} as="article" className="h-full">
              <div
                className={`card-premium relative flex h-full flex-col p-6 ${
                  p.highlight ? "border-primary/45 shadow-lift lg:-mt-4 lg:pb-8" : ""
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow-glow">
                    <Sparkles className="size-3" /> Most popular
                  </span>
                )}
                <h3 className="text-base font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.blurb}</p>
                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-semibold tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.cadence}</span>
                </p>

                <Button
                  variant={p.highlight ? "hero" : "outline"}
                  className="mt-6 w-full"
                  size="lg"
                >
                  {p.cta}
                </Button>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
