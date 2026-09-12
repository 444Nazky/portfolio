type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <p
        className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-neon ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="inline-block h-px w-8 bg-neon" aria-hidden="true" />
        {eyebrow}
        {centered && (
          <span className="inline-block h-px w-8 bg-neon" aria-hidden="true" />
        )}
      </p>
      <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}