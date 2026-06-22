interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-midnight md:text-5xl text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-black/60 leading-relaxed md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
