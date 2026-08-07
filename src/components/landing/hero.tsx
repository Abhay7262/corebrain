import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "./dashboard-mockup";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24">
      <div aria-hidden className="absolute inset-0 -z-10 bg-mesh" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-border-strong to-transparent"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
            <Sparkles className="size-3.5 text-primary" />
            Enterprise knowledge intelligence for manufacturing
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[64px]">
            Your Company's <span className="text-gradient">AI Brain.</span>
            <span className="mt-3 block text-2xl font-medium leading-tight text-muted-foreground sm:text-3xl lg:text-[34px]">
              Find answers from thousands of company documents in seconds.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Stop wasting hours searching manuals, SOPs, machine documents, and internal knowledge.
            Upload once. Ask anything. Get accurate answers with source citations instantly.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button variant="hero" size="xl">
              Start Free <ArrowRight />
            </Button>
            <Button variant="heroGhost" size="xl">
              <Play /> Watch Demo
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["< 2s", "Average answer time"],
              ["98%", "Citation accuracy"],
              ["40+", "File formats indexed"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-semibold">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:160ms]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
