import NewsletterForm from "./NewsletterForm";
import SectionHeading from "./SectionHeading";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Certificates", href: "#certificates" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com", handle: "@nazky" },
  { label: "LinkedIn", href: "https://linkedin.com", handle: "/in/nazky" },
  { label: "Instagram", href: "https://instagram.com", handle: "@nazky" },
  { label: "X / Twitter", href: "https://x.com", handle: "@nazky" },
];

function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-neon/[0.06] blur-[150px]"
      />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 text-center lg:px-8 lg:pt-36">
        <SectionHeading
          eyebrow="Got a project in mind?"
          title="LET'S TALK"
          align="center"
        />

        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-muted">
          Penetration tests, infrastructure hardening, secure backends — or
          just a security rabbit hole worth exploring. My inbox is open.
        </p>

        <a
          href="mailto:naruzky.naz@gmail.com"
          className="group mt-10 inline-flex items-center gap-3 text-xl font-bold text-white transition-colors duration-200 hover:text-neon sm:text-2xl"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neon/40 text-neon transition-all duration-200 group-hover:bg-neon group-hover:text-black">
            <MailIcon />
          </span>
          <span className="border-b border-line pb-1 underline-offset-8 group-hover:border-neon group-hover:underline">
            naruzky.naz@gmail.com
          </span>
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/50 hover:text-neon"
            >
              {social.label}
              <span className="text-xs text-white/40">{social.handle}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2 lg:pr-8">
            <a
              href="#home"
              className="font-display text-3xl font-extrabold uppercase tracking-wide text-white"
            >
              Nazky<span className="text-neon">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Backend Developer & Offensive Security specialist. I build
              resilient systems, break them on purpose, and harden the
              infrastructure of tomorrow.
            </p>
            <p className="mt-6 font-display text-[11px] font-bold uppercase tracking-[0.35em] text-neon">
              Build to break. Break to build.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-neon"
                  >
                    <span className="h-px w-4 bg-line transition-colors group-hover:bg-neon" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
              Newsletter
            </p>
            <p className="mt-3 text-sm text-muted">
              Security notes, writeups, and zero-days I found in my own code.
              No spam, only intel.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 sm:flex-row lg:px-8">
            <p className="text-xs text-muted">
              © 2026{" "}
              <span className="font-display font-bold tracking-widest text-white">
                NAZKY
              </span>
              . All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-xs text-muted">
              Crafted with Next.js & Tailwind
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-neon" />
              Powered by caffeine
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}