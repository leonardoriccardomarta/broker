import { type ReactNode } from "react";

export function SectionContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`container-page ${className}`}>{children}</div>
  );
}
