import { BrainCircuit, MessagesSquare, UploadCloud } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const steps = [
  {
    icon: UploadCloud,
    step: "Step 01",
    title: "Upload",
    body: "Drag in your entire documentation archive — or connect SharePoint, Drive, and your MES exports. No restructuring required.",
  },
  {
    icon: BrainCircuit,
    step: "Step 02",
    title: "AI Learns",
    body: "CoreBrain reads, chunks, and indexes every revision, mapping relationships between machines, parts, and procedures.",
  },
  {
    icon: MessagesSquare,
    step: "Step 03",
    title: "Ask Anything",
    body: "Your team gets cited answers on desktop, tablet, or the shop-floor terminal — in seconds, in their own language.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Live in days, not quarters"
          subtitle="No data science team. No model tuning. No process rewrite."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} as="article" className="h-full">
              <div className="card-premium relative h-full overflow-hidden p-7">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-semibold text-foreground/[0.04]"
                >
                  {i + 1}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                  <s.icon className="size-5 text-primary-foreground" />
                </span>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {s.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
