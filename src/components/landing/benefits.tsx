import { Gauge, ShieldCheck, TimerReset, TrendingUp, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase productivity",
    body: "Give every employee instant access to the answer instead of a folder tree.",
    metric: "+22%",
  },
  {
    icon: TimerReset,
    title: "Reduce downtime",
    body: "Technicians resolve faults faster with the correct procedure and revision in hand.",
    metric: "-31%",
  },
  {
    icon: Users,
    title: "Faster onboarding",
    body: "New hires ramp with an AI mentor built from your own documented practice.",
    metric: "3x",
  },
  {
    icon: ShieldCheck,
    title: "Protect company knowledge",
    body: "Retirements and turnover no longer erase decades of operational expertise.",
    metric: "100%",
  },
  {
    icon: Gauge,
    title: "Reduce human error",
    body: "Cited, revision-aware answers eliminate guesswork and outdated instructions.",
    metric: "-46%",
  },
];

export function Benefits() {
  return (
    <section className="section border-y border-border bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Business impact"
          title="Outcomes your operations leaders can measure"
          subtitle="Directional results reported by manufacturing teams deploying AI knowledge retrieval."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} as="article" className="h-full">
              <div className="card-premium flex h-full items-start gap-4 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card">
                  <b.icon className="size-5 text-primary" />
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold text-gradient">{b.metric}</p>
                  <h3 className="mt-1 text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
