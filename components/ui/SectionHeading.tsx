interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
