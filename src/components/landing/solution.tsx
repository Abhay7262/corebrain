import { ArrowDown, BrainCircuit, MessageSquareText, Quote, Upload, Zap } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const steps = [
  {
    icon: Upload,
    title: "Upload Documents",
    body: "Manuals, SOPs, CAD notes, safety docs, maintenance logs, spreadsheets, and scanned PDFs.",
  },
  {
    icon: BrainCircuit,
    title: "AI Understands Everything",
    body: "CoreBrain parses structure, tables, and diagrams, then builds a semantic index of your plant.",
  },
  {
    icon: MessageSquareText,
    title: "Ask Questions",
    body: "Anyone on the floor asks in plain language — in any language your teams speak.",
  },
  {
    icon: Zap,
    title: "Instant Answers",
    body: "Precise, grounded responses in under two seconds, scoped to the asker's permissions.",
  },
  {
    icon: Quote,
    title: "Source Citation",
    body: "Every answer links to the exact document, revision, and page number for verification.",
  },
];

export function Solution() {
  return (
    <section id="solutions" className="section relative overflow-hidden bg-surface scroll-mt-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-60" />
      <div className="container-page">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              Meet CoreBrain — <span className="text-gradient">the AI brain for your company</span>
            </>
          }
          subtitle="One private knowledge layer that reads everything your company has ever written, and answers like your most experienced engineer."
        />

        <ol className="mx-auto mt-14 max-w-3xl">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 110} className="card-premium flex items-start gap-4 p-5 sm:p-6">
                <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                  <s.icon className="size-5 text-primary-foreground" />
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-pulse-ring rounded-2xl border border-primary"
                  />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden>
                  <ArrowDown className="size-5 animate-flow text-primary" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
