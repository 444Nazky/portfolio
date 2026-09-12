import SectionHeading from "./SectionHeading";

const CERTS = [
  {
    title: "Offensive Security Certified Professional",
    issuer: "OffSec",
    year: "2025",
    tag: "Red Team",
  },
  {
    title: "Certified Ethical Hacker",
    issuer: "EC-Council",
    year: "2025",
    tag: "Offensive",
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2024",
    tag: "Blue Team",
  },
  {
    title: "SOC Analyst Associate",
    issuer: "TryHackMe",
    year: "2025",
    tag: "SOC",
  },
  {
    title: "Burp Suite Certified Practitioner",
    issuer: "PortSwigger",
    year: "2026",
    tag: "Web App",
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Coursera",
    year: "2025",
    tag: "Foundation",
  },
  {
    title: "Linux Professional Institute — LPIC-1",
    issuer: "LPI",
    year: "2024",
    tag: "Linux",
  },
  {
    title: "Cloud Security Essentials",
    issuer: "AWS Academy",
    year: "2026",
    tag: "Cloud",
  },
];

function MedalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-neon"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8.8 13.5L7 21l5-2.3L17 21l-1.8-7.5M9 9l2 2 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Credentials" title="CERTIFICATE" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Certifications that back the build-to-break mindset — from
            offensive security to Linux infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((cert, i) => (
            <article
              key={cert.title}
              className="group relative overflow-hidden rounded-xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/40 hover:shadow-[0_16px_48px_rgba(198,255,0,0.09)]"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-neon/[0.06] blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-neon/25 bg-neon/[0.06]">
                  <MedalIcon />
                </span>
                <span className="rounded-full border border-line px-3 py-1 font-display text-[10px] font-bold tracking-widest text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 font-display text-base font-bold leading-snug text-white transition-colors duration-200 group-hover:text-neon">
                {cert.title}
              </h3>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs text-muted">{cert.issuer}</span>
                <span className="flex items-center gap-3">
                  <span className="text-xs font-bold text-white">
                    {cert.year}
                  </span>
                  <span className="rounded-full border border-neon/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neon">
                    {cert.tag}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-neon/40 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-neon transition-all duration-200 hover:bg-neon hover:text-black hover:shadow-[0_0_32px_rgba(198,255,0,0.4)]"
          >
            See More
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
    </section>
  );
}