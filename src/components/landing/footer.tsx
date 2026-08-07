import { Linkedin } from "lucide-react";
import { Logo } from "./logo";

const columns = [
  {
    title: "Product",
    links: ["Features", "How It Works", "Interactive Demo", "Integrations"],
  },
  { title: "Resources", links: ["Pricing", "Blog", "Documentation", "Security"] },
  { title: "Company", links: ["Contact", "Careers", "Privacy", "Terms"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-[17px] font-semibold tracking-tight">
                KnowledgeOS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI enterprise knowledge platform for manufacturing companies. Upload once. Ask
              anything. Answer with confidence.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="KnowledgeOS on LinkedIn"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KnowledgeOS. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for manufacturing teams worldwide · SOC 2 ready · GDPR aligned
          </p>
        </div>
      </div>
    </footer>
  );
}
