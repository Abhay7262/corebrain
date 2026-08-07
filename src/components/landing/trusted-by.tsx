import { Reveal } from "./reveal";

const companies = [
  "NORDWERK",
  "Kaizen Steel",
  "Volta Motors",
  "PRECIMAX",
  "Helios Plastics",
  "Aritek Group",
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="container-page">
        <Reveal className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Built For Modern Manufacturing Teams
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-9 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((c) => (
              <li
                key={c}
                className="flex items-center justify-center gap-2 opacity-60 transition-opacity duration-300 hover:opacity-100"
              >
                <span aria-hidden className="size-2.5 rounded-sm bg-gradient-brand" />
                <span className="font-display text-sm font-semibold tracking-tight">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Placeholder logos — reserved for future customers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
