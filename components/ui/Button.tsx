"use client";

import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "default" | "lg";
}

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

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
