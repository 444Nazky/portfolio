"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

type TechCategory = {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  items: string[];
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const CATEGORIES: TechCategory[] = [
  {
    title: "Flutter & Dart",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...stroke}>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9h6M9 12h4M9 15h2" />
      </svg>
    ),
    items: [
      "Cross-platform apps",
      "Widget-driven UI",
      "State management",
      "REST & GraphQL integration",
    ],
  },
  {
    title: "Linux & Bash",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...stroke}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9.5l2.5 2.5L7 14.5M12.5 15h3" />
      </svg>
    ),
    items: [
      "Server administration",
      "Shell scripting & automation",
      "System hardening",
      "Networking & services (nginx, Docker, SSH)",
    ],
  },
  {
    title: "Backend Development",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...stroke}>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="7" cy="6" r="1" fill="currentColor" />
        <circle cx="7" cy="12" r="1" fill="currentColor" />
        <circle cx="7" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    subtitle: "Python · Laravel",
    items: [
      "REST API design & development",
      "Python (FastAPI · Django · Flask)",
      "Laravel (PHP)",
      "PostgreSQL · MySQL · ORM",
    ],
  },
  {
    title: "Cybersecurity & Tools",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...stroke}>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" />
        <path d="M12 8v3M12 14h.01" />
      </svg>
    ),
    items: [
      "API & System Security",
      "DSO & Automations",
      "Secure Code Architecture",
      "Burp Suite",
    ],
  },
];

const BADGES: { name: string; tint: string; tag: () => React.ReactNode }[] = [
  { name: "Python", tint: "#3776AB", tag: lang },
  { name: "Laravel", tint: "#FF2D20", tag: lang },
  { name: "Flutter", tint: "#54C5F8", tag: lang },
  { name: "Linux", tint: "#e8e8e8", tag: ux },
  { name: "Figma", tint: "#F24E1E", tag: design },
  { name: "Burp Suite", tint: "#FF6633", tag: sec },
];

function lang() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M13 5l-2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ux() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 9.5l2.5 2.5L8 14.5M13 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function design() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function sec() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M12 3l7 3v6c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 8v4M12 15h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function TechStacks() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="tech" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[28rem] w-[28rem] rounded-full bg-neon/[0.05] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="What I Work With"
          title="Tech Stacks"
          align="center"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="space-y-3">
            {CATEGORIES.map((cat, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={cat.title}
                  className={`group overflow-hidden rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-neon/40 bg-card"
                      : "border-line bg-card/60 hover:border-neon/25"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-black/40 text-neon transition-colors group-hover:border-neon/40">
                        {cat.icon}
                      </span>
                      <span>
                        <span className="font-display text-base font-bold text-white sm:text-lg">
                          {cat.title}
                        </span>
                        {cat.subtitle && (
                          <span className="mt-0.5 block text-xs font-medium text-muted">
                            {cat.subtitle}
                          </span>
                        )}
                      </span>
                    </span>

                    <svg
                      className={`h-5 w-5 shrink-0 text-neon transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="flex flex-wrap gap-2 px-5 pb-6 sm:px-6">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-line bg-black/30 px-4 py-1.5 text-xs font-medium text-foreground transition-colors duration-200 hover:border-neon/40 hover:text-neon"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted">
              Toolkit
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Badges I wear with{" "}
              <span className="text-neon">pride.</span>
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {BADGES.map((badge) => (
                <div
                  key={badge.name}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--tint,var(--color-neon))]"
                  style={{ "--tint": badge.tint } as React.CSSProperties}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ color: badge.tint }}
                  >
                    {badge.tag()}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-line bg-[#0a0a0a] p-5">
              <p className="font-display text-sm font-bold uppercase tracking-widest text-neon">
                Security first
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Every framework I touch gets the same treatment — build it, then
                try to break it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}