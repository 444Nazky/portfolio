function GlobeOrb() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-neon/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-neon/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-8 animate-spin-slow-rev rounded-full border border-line"
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-pulse-dot rounded-full bg-neon" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-16 animate-spin-slow rounded-full border border-dashed border-neon/15 [animation-duration:30s]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-20 rounded-full border border-line"
      />

      <div
        aria-hidden="true"
        className="relative aspect-square w-[58%] overflow-hidden rounded-full border border-line shadow-[0_0_90px_rgba(198,255,0,0.16),inset_0_0_60px_rgba(198,255,0,0.05)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_24%,#16220b_0%,#0d0d0d_62%)]" />
        <div className="absolute inset-0 rounded-full border border-neon/10" />
        <div className="absolute -inset-y-4 left-1/2 w-1/2 rotate-[38deg] rounded-full border border-neon/10" />
        <div className="absolute -inset-y-4 left-1/2 w-1/2 -rotate-[38deg] rounded-full border border-neon/10" />
        <div className="absolute left-0 right-0 top-1/3 h-px bg-neon/15" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-neon/25" />
        <div className="absolute left-0 right-0 top-2/3 h-px bg-neon/15" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neon/25" />
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-pulse-dot rounded-full bg-neon shadow-[0_0_18px_#c6ff00]" />
      </div>

      <span
        aria-hidden="true"
        className="absolute left-[7%] top-[18%] animate-float rounded-lg border border-line bg-card/80 px-3 py-2 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur"
      >
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-neon" />
        BASH
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[4%] top-[34%] animate-float rounded-lg border border-line bg-card/80 px-3 py-2 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur [animation-delay:1.2s]"
      >
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
        LINUX
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-[16%] left-[4%] animate-float rounded-lg border border-line bg-card/80 px-3 py-2 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur [animation-delay:2s]"
      >
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
        PENTEST
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-[30%] right-[8%] animate-float rounded-lg border border-line bg-card/80 px-3 py-2 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur [animation-delay:0.6s]"
      >
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
        API
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black_10%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-neon/[0.06] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#22d3ee]/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-3 rounded-full border border-neon/25 bg-neon/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-neon">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-neon" />
            Hey There! Nazky&apos;s here!
          </p>

          <h1 className="mt-7 font-display font-extrabold uppercase leading-[0.88] tracking-tight">
            <span className="block text-[clamp(3.5rem,11vw,8.5rem)] text-white">
              Port
            </span>
            <span className="block text-[clamp(3.5rem,11vw,8.5rem)] text-outline-neon">
              Folio
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Narutama Nazril Khairrazky | Linux-Enthusiast Backend Developer
            focused on{" "}
            <span className="font-semibold text-white">
              offensive security
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              infrastructure hardening
            </span>
            .
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#tech"
              className="inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-bold text-black transition-all duration-200 hover:shadow-[0_0_32px_rgba(198,255,0,0.5)]"
            >
              Explore My Work
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 3v10m0 0l4-4m-4 4L4 9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:border-neon/60 hover:text-neon"
            >
              Get in Touch
            </a>

            <div className="ml-auto hidden items-center gap-5 md:flex">
              {[
                {
                  label: "GitHub",
                  href: "#",
                  icon: (
                    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C18.2 5.4 19.2 5.7 19.2 5.7c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.6 18.4.5 12 .5Z" />
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3ZM6.5 8.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM19 19h-3v-4.6c0-1.1-.4-1.8-1.4-1.8a1.5 1.5 0 0 0-1.4 1c-.1.2-.1.5-.1.8V19h-3v-9h3v1.2a3 3 0 0 1 2.7-1.5c2 0 3.2 1.3 3.2 4Z" />
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-muted transition-colors duration-200 hover:text-neon"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <GlobeOrb />
      </div>
    </section>
  );
}