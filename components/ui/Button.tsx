"use client";

import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "default" | "lg";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-md shadow-primary/20",
  secondary:
    "bg-white text-primary border-2 border-primary hover:bg-primary/5",
  accent:
    "bg-accent text-white hover:bg-accent-light shadow-md shadow-accent/20",
};

const sizeStyles = {
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
