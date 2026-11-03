import { type ReactNode } from "react";

export function SectionContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
