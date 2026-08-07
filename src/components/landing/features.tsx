import {
  BrainCircuit,
  FileSearch,
  GraduationCap,
  Lock,
  Quote,
  ScanText,
  Search,
  SearchX,
} from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Company Brain",
    body: "A single reasoning layer trained on your plants, products, machines, and procedures.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    body: "Meaning-based retrieval that understands part numbers, synonyms, and shop-floor slang.",
  },
  {
    icon: ScanText,
    title: "Document Intelligence",
    body: "Tables, tolerances, diagrams, and scanned drawings parsed with OCR-grade accuracy.",
  },
  {
    icon: SearchX,
    title: "Knowledge Gap Detection",
    body: "Surfaces the questions your documentation can't answer yet, ranked by frequency.",
  },
  {
    icon: FileSearch,
    title: "AI Summaries",
    body: "Turn a 300-page revision into a one-page change brief for line supervisors.",
  },
  {
    icon: GraduationCap,
    title: "AI Training Assistant",
    body: "Role-specific onboarding paths and quizzes generated from your own SOPs.",
  },
  {
    icon: Quote,
    title: "Source Citations",
    body: "Document, revision, and page number attached to every sentence the AI produces.",
  },
  {
    icon: Lock,
    title: "Secure Workspace",
    body: "Private tenancy, SSO, granular permissions, audit logs, and zero model training on your data.",
  },
];

export function Features() {
  return (
    <section id="features" className="section scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Features"
          title="Everything an enterprise knowledge platform should be"
          subtitle="Designed with plant managers, quality leads, and maintenance engineers — not generic chat users."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80} as="article" className="group h-full">
              <div className="card-premium h-full p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-accent transition-colors duration-300 group-hover:bg-gradient-brand">
                  <f.icon className="size-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
