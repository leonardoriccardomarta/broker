"use client";

import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "white";

type SharedProps = {
  variant?: ButtonVariant;
  size?: "default" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonOnlyProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonOnlyProps | LinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border border-primary hover:bg-transparent hover:text-primary shadow-soft",
  secondary:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  accent:
    "bg-accent text-white border border-accent hover:bg-transparent hover:text-accent shadow-soft",
  white:
    "bg-white text-primary border border-white hover:bg-transparent hover:text-white",
};

const sizeStyles = {
  default: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClassName} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
