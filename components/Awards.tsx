import SectionHeading from "./SectionHeading";

const YEARS = [
  {
    year: "2026",
    awards: [
      { title: "Certified Trainer", tag: "Training" },
      { title: "Certified Web Trainer", tag: "Web" },
    ],
  },
  {
    year: "2025",
    awards: [
      { title: "Certified IoT Trainer", tag: "IoT" },
      { title: "Basic Game Trainer", tag: "Game" },
    ],
  },
];

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 4h8v4a4 4 0 0 1-8 0V4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 5H4v1a4 4 0 0 0 4 4M16 5h4v1a4 4 0 0 1-4 4M12 12v3M9 21h6M10 17h4v4h-4z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & Recognitions"
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {YEARS.map((group) => (
            <div
              key={group.year}
              className="group overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-neon/30"
            >
              <div className="flex items-center justify-between border-b border-line bg-[#0a0a0a] px-7 py-5">
                <p className="font-display text-2xl font-extrabold text-neon">
                  {group.year}
                </p>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted">
                  {group.awards.length}{" "}
                  {group.awards.length > 1 ? "awards" : "award"}
                </span>
              </div>

              <div className="divide-y divide-line">
                {group.awards.map((award) => (
                  <div
                    key={award.title}
                    className="flex items-center justify-between gap-4 px-7 py-5 transition-colors duration-200 hover:bg-neon/[0.03]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon/25 bg-neon/[0.06] text-neon">
                        <TrophyIcon />
                      </span>
                      <div>
                        <p className="font-display text-base font-bold text-white">
                          {award.title}
                        </p>
                        <p className="text-xs text-muted">
                          Recognized for training excellence
                        </p>
                      </div>
                    </div>
                    <span className="hidden rounded-full border border-neon/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neon sm:inline-block">
                      {award.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}