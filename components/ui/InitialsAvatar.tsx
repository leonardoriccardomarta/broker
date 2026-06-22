type InitialsAvatarProps = {
  initials: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-9 w-9 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
};

export function InitialsAvatar({
  initials,
  className = "",
  size = "md",
}: InitialsAvatarProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary ${sizes[size]} ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
