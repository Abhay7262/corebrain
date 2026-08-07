export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`grid size-8 place-items-center rounded-xl bg-gradient-brand shadow-glow ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="currentColor">
        <g className="text-primary-foreground" strokeWidth="1.9" strokeLinecap="round">
          <path d="M12 3.5c-3 0-5.2 2-5.2 4.6 0 1.3.5 2.3 1.3 3.2.9 1 1.3 1.8 1.3 3v.9h5.2v-.9c0-1.2.4-2 1.3-3 .8-.9 1.3-1.9 1.3-3.2 0-2.6-2.2-4.6-5.2-4.6Z" />
          <path d="M9.9 18.4h4.2M10.6 20.7h2.8" />
          <path d="M12 8v4.5M12 8l2.1-1.4M12 10.4 9.9 9" />
        </g>
      </svg>
    </span>
  );
}
