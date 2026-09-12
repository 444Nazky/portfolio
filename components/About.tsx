import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "42+", label: "Months of experience" },
  { value: "16+", label: "Certificates" },
  { value: "10,459", label: "ML of caffeine", suffix: "" },
];

const MARQUEE_ITEMS = ["Designer", "Engineer", "Cybsec"];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl"
        >
          <span
            className={`px-6 ${
              item === "Cybsec" ? "text-neon" : "text-white/90"
            }`}
          >
            {item}
          </span>
          <span className="text-neon">{"•"}</span>
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  return (
    <div className="mt-24 overflow-hidden border-y border-line bg-[#0a0a0a] py-5">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-neon/[0.05] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="About Me" title="Passion for Cyber Security" />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full border border-neon/25" />
            <div className="relative rounded-2xl border border-line bg-card p-4 transition-colors duration-300 hover:border-neon/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-grid">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#1a240c_0%,#101010_70%)]" />
                <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="h-[68%] w-auto text-white/20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="100" cy="78" r="34" />
                    <path d="M38 176c6-32 32-48 62-48s56 16 62 48z" />
                  </svg>
                </div>

                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-black/50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-neon" />
                    Open to Work
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 rounded-md border border-neon/30 bg-neon/[0.08] px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-widest text-neon">
                  NZ <sup>©26</sup>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="font-display text-lg font-bold text-white">
                    Narutama Nazril K.
                  </p>
                  <p className="text-xs text-muted">
                    Red Team · Backend · Linux
                  </p>
                </div>
                <span className="h-2.5 w-2.5 animate-pulse-dot rounded-full bg-neon" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
              I build systems so I can break them —{" "}
              <span className="text-neon">then rebuild them stronger.</span>
            </h3>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                I&apos;m a <span className="text-white">Red Teamer</span>, a{" "}
                <span className="text-white">Certified Pentester</span>, and a{" "}
                <span className="text-white">Backend Developer</span> who
                started on Linux and never left. With a{" "}
                <span className="text-neon">build-to-break</span> mindset, I
                spend my days designing APIs, automating infrastructure, and
                then attacking everything I ship — because the only crime scene
                better than yours is mine.
              </p>
              <p>
                From hardening servers and writing exploit-proof code to
                hunting vulnerabilities with Burp Suite, my work lives at the
                intersection of development and offense. Every tool I craft is
                an excuse to understand defense; every defense I build is a
                target for the next attack.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_10px_36px_rgba(198,255,0,0.08)] sm:p-6"
                >
                  <p className="font-display text-2xl font-extrabold text-neon sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-muted sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neon underline underline-offset-8 transition-colors hover:text-white"
            >
              Let&apos;s work together
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}