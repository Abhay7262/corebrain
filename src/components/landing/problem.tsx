import { Clock8, FileWarning, GraduationCap, UserMinus } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const problems = [
  {
    icon: Clock8,
    title: "Searching documents",
    body: "Engineers dig through folders, shared drives, and printed binders to find one paragraph inside a 400-page manual.",
    stat: "6.4 hrs / week lost per employee",
  },
  {
    icon: FileWarning,
    title: "Outdated SOPs",
    body: "Revision 8 is on the shop floor while Revision 12 sits in someone's inbox. Teams execute the wrong procedure.",
    stat: "1 in 3 procedures out of date",
  },
  {
    icon: UserMinus,
    title: "Knowledge loss",
    body: "When a senior technician retires, decades of undocumented machine intuition walks out the gate with them.",
    stat: "Unrecoverable tribal knowledge",
  },
  {
    icon: GraduationCap,
    title: "Slow employee training",
    body: "New operators shadow experts for months because the answers live in people's heads, not in a searchable system.",
    stat: "3–6 months to full productivity",
  },
];

export function Problem() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="The cost of scattered knowledge"
          title="Manufacturing Teams Lose Thousands Of Hours Every Year"
          subtitle="Your documentation isn't the problem — finding, trusting, and reusing it is."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} as="article" className="card-premium h-full p-6">
              <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2">
                <p.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <p className="mt-5 border-t border-border pt-4 text-xs font-semibold text-primary">
                {p.stat}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
