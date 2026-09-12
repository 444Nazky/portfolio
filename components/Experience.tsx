import SectionHeading from "./SectionHeading";

const EXPERIENCES = [
  {
    org: "RevoU",
    role: "SOC Analyst",
    location: "West Jakarta · Hybrid",
    period: "2026 — Present",
    tags: ["Monitoring", "Detection", "Response"],
  },
  {
    org: "Surosowan Cybersecurity Academy",
    role: "Red Team Mentor",
    location: "Banten, Serang · Weekend",
    period: "2026 — Present",
    tags: ["Offensive", "Mentoring"],
  },
  {
    org: "Nusacodes Cybersecurity Academy",
    role: "Cybersecurity Instructor",
    location: "Bootcamp · 20.00 - 22.00",
    period: "2026 — Present",
    tags: ["Training", "Web Exploitation"],
  },
  {
    org: "Coursera",
    role: "Cybersecurity Learner",
    location: "Online · Freely",
    period: "2026 — Present",
    tags: ["Self-paced", "Continuous Learning"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-neon/[0.05] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Career Path"
              title="My Professional Experiences"
            />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              From the SOC floor to the training room — every role sharpens the
              same edge: break it, understand it, fix it.
            </p>
            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <span className="h-2.5 w-2.5 animate-pulse-dot rounded-full bg-neon" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted">
                Currently leveling up
              </span>
            </div>
          </div>

          <div className="relative space-y-6">
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-neon/50 via-line to-transparent"
            />
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.org}
                className="group relative flex gap-5 pl-0"
              >
                <span className="relative z-10 mt-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neon/40 bg-background">
                  <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_12px_#c6ff00]" />
                </span>

                <div className="flex-1 rounded-xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_16px_48px_rgba(198,255,0,0.07)] sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-neon">
                        {exp.org}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 font-display text-[11px] font-bold tracking-wider text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                    <svg
                      className="h-4 w-4 text-neon"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 2a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="8"
                        cy="6"
                        r="1.4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    {exp.location}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-black/30 px-3 py-1 text-[11px] font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}