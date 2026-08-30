import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "primary-lime" | "primary-forest" | "ghost-light" | "ghost-dark";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-bold uppercase tracking-[1.5px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none cursor-pointer";

    const variants: Record<string, string> = {
      primary:
        "bg-white text-black hover:bg-[#e6e6e6] active:scale-[0.98]",
      secondary:
        "bg-[#1a1a1a] text-white border border-[#3c3c3c] hover:border-white",
      outline:
        "bg-transparent text-white border border-white hover:bg-white/10",
      ghost:
        "bg-transparent text-[#bbbbbb] hover:text-white hover:bg-white/5",
      "primary-lime":
        "bg-white text-black hover:bg-[#e6e6e6]",
      "primary-forest":
        "bg-[#1c69d4] text-white hover:bg-[#0066b1]",
      "ghost-light":
        "bg-transparent text-[#bbbbbb] hover:text-white hover:bg-white/5",
      "ghost-dark":
        "bg-transparent text-white border border-[#3c3c3c] hover:bg-white/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-wider",
      md: "h-11 px-6 py-2.5 text-xs tracking-[1.5px]",
      lg: "h-13 px-8 text-sm tracking-[1.5px]",
    };

    const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`;

    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
