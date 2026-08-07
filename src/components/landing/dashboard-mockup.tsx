import { FileText, Quote, ShieldCheck, Sparkle, Upload } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-4xl bg-mesh blur-2xl opacity-80"
      />

      <div className="card-premium overflow-hidden !rounded-3xl">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="size-2.5 rounded-full bg-destructive/60" />
          <span className="size-2.5 rounded-full bg-chart-5/70" />
          <span className="size-2.5 rounded-full bg-success/70" />
          <div className="ml-3 flex-1 truncate rounded-md bg-surface-2 px-3 py-1 text-[11px] text-muted-foreground">
            app.knowledgeos.ai / workspace / maintenance
          </div>
        </div>

        <div className="grid gap-0 sm:grid-cols-[136px_1fr]">
          {/* sidebar */}
          <aside className="hidden flex-col gap-1 border-r border-border bg-surface p-3 sm:flex">
            {["Knowledge", "Documents", "Insights", "Training", "Settings"].map((item, i) => (
              <div
                key={item}
                className={`rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                  i === 0 ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                }`}
              >
                {item}
              </div>
            ))}
            <div className="mt-auto rounded-lg border border-border p-2.5">
              <p className="text-[10px] font-semibold text-muted-foreground">Indexed</p>
              <p className="font-display text-sm font-semibold">18,402</p>
              <p className="text-[10px] text-muted-foreground">documents</p>
            </div>
          </aside>

          {/* main */}
          <div className="space-y-3 p-4">
            {/* search */}
            <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5">
              <Sparkle className="size-4 text-primary" />
              <span className="text-xs text-muted-foreground">
                When should Machine A oil be changed
                <span className="ml-0.5 inline-block h-3.5 w-px animate-caret bg-primary align-middle" />
              </span>
            </div>

            {/* answer */}
            <div className="rounded-xl border border-border bg-surface-2/60 p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  AI Answer
                </span>
                <span className="rounded-full bg-success/12 px-2 py-0.5 text-[10px] font-semibold text-success">
                  Confidence 98%
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-foreground/90">
                Machine A requires hydraulic oil replacement every{" "}
                <span className="font-semibold text-primary">2,000 operating hours</span> or every 6
                months, whichever comes first. Filter must be replaced at the same interval.
              </p>
              <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-2">
                <FileText className="size-3.5 text-primary" />
                <span className="text-[11px] font-medium">Machine-A-Maintenance-Manual.pdf</span>
                <span className="ml-auto rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-accent-foreground">
                  Page 47
                </span>
              </div>
            </div>

            {/* upload */}
            <div className="rounded-xl border border-dashed border-border-strong p-3.5">
              <div className="flex items-center gap-2">
                <Upload className="size-3.5 text-primary" />
                <span className="text-[11px] font-medium">SOP-Line-3-Rev12.pdf</span>
                <span className="ml-auto text-[10px] text-muted-foreground">Indexing…</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full animate-progress rounded-full bg-gradient-brand" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="glass absolute -left-4 bottom-14 hidden animate-float rounded-2xl px-3.5 py-2.5 shadow-card lg:block">
        <div className="flex items-center gap-2">
          <Quote className="size-4 text-primary" />
          <div>
            <p className="text-[11px] font-semibold">Source citations</p>
            <p className="text-[10px] text-muted-foreground">Every answer verified</p>
          </div>
        </div>
      </div>

      <div className="glass absolute -right-5 top-20 hidden animate-float-slow rounded-2xl px-3.5 py-2.5 shadow-card lg:block">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-violet" />
          <div>
            <p className="text-[11px] font-semibold">SOC 2 ready</p>
            <p className="text-[10px] text-muted-foreground">Private workspace</p>
          </div>
        </div>
      </div>
    </div>
  );
}
