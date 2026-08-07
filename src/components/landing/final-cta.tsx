import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center shadow-lift sm:px-12 lg:py-20">
          <div aria-hidden className="absolute inset-0 -z-10 bg-mesh" />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 -z-10 h-40 w-[70%] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl"
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
            Ready To Build Your Company's <span className="text-gradient">AI Brain?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Upload your first documents today and see cited answers within minutes. No credit card
            required.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl">
              Start Free Today <ArrowRight />
            </Button>
            <Button variant="heroGhost" size="xl">
              Book a walkthrough
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
