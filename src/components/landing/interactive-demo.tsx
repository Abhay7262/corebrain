import { useEffect, useState } from "react";
import { CheckCircle2, FileText, Send, Sparkle, User } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const question = "When should Machine A oil be changed?";

export function InteractiveDemo() {
  const [typed, setTyped] = useState("");
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(question.slice(0, i));
      if (i >= question.length) {
        window.clearInterval(id);
        window.setTimeout(() => setAnswered(true), 450);
      }
    }, 45);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section relative overflow-hidden bg-surface">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh opacity-60" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Live example"
          title="Ask like a human. Get answers like an expert."
          subtitle="Grounded responses with the document, page, and confidence attached — never invented."
        />

        <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
          <div className="card-premium overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-5 py-3.5">
              <Sparkle className="size-4 text-primary" />
              <span className="text-sm font-semibold">CoreBrain Assistant</span>
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-success" /> Connected to 18,402 documents
              </span>
            </div>

            <div className="space-y-5 p-5 sm:p-7">
              <div className="flex justify-end">
                <div className="flex max-w-[85%] items-start gap-3">
                  <p className="rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground">
                    {typed || "\u200b"}
                    {typed.length < question.length && (
                      <span className="ml-0.5 inline-block h-4 w-px animate-caret bg-primary-foreground align-middle" />
                    )}
                  </p>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface-2">
                    <User className="size-4 text-muted-foreground" />
                  </span>
                </div>
              </div>

              <div
                className={`flex items-start gap-3 transition-all duration-700 ${
                  answered ? "opacity-100 translate-y-0" : "translate-y-3 opacity-0"
                }`}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-brand">
                  <Sparkle className="size-4 text-primary-foreground" />
                </span>
                <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card p-4 sm:p-5">
                  <p className="text-sm leading-relaxed">
                    Machine A's hydraulic oil should be changed every{" "}
                    <strong className="font-semibold text-primary">2,000 operating hours</strong> or
                    every <strong className="font-semibold text-primary">6 months</strong>, whichever
                    comes first. Replace the return-line filter in the same service window, and record
                    the oil batch number in the maintenance log.
                  </p>

                  <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                    <div className="rounded-xl border border-border bg-surface p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Source
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium">
                        <FileText className="size-3.5 shrink-0 text-primary" />
                        <span className="truncate">Machine-A-Manual.pdf</span>
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-surface p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Page
                      </p>
                      <p className="mt-1.5 text-xs font-medium">Page 47 · Rev 12</p>
                    </div>
                    <div className="rounded-xl border border-border bg-surface p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Confidence
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-success">
                        <CheckCircle2 className="size-3.5" /> 98%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-border bg-surface-2/50 px-5 py-4">
              <div className="flex-1 truncate rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs text-muted-foreground">
                Ask anything about your machines, SOPs, or safety procedures…
              </div>
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                <Send className="size-4 text-primary-foreground" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
