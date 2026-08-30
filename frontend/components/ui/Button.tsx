import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "primary-lime" | "primary-forest" | "ghost-light" | "ghost-dark";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7052] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer";

    const variants: Record<string, string> = {
      primary:
        "bg-[#5D7052] text-[#F3F4F1] hover:bg-[#4C5D42] hover:scale-105 active:scale-95 shadow-[0_4px_20px_-2px_rgba(93,112,82,0.25)]",
      secondary:
        "bg-[#C18C5D] text-white hover:bg-[#AB774B] hover:scale-105 active:scale-95 shadow-[0_4px_20px_-2px_rgba(193,140,93,0.25)]",
      outline:
        "bg-transparent text-[#C18C5D] border-2 border-[#C18C5D] hover:bg-[#C18C5D]/10 hover:scale-105 active:scale-95",
      ghost:
        "bg-transparent text-[#5D7052] hover:bg-[#5D7052]/10 hover:scale-103",
      "primary-lime":
        "bg-[#5D7052] text-[#F3F4F1] hover:bg-[#4C5D42]",
      "primary-forest":
        "bg-[#5D7052] text-[#F3F4F1] hover:bg-[#4C5D42]",
      "ghost-light":
        "bg-transparent text-[#78786C] hover:text-[#2C2C24] hover:bg-[#F0EBE5]",
      "ghost-dark":
        "bg-transparent text-[#2C2C24] border border-[#DED8CF] hover:bg-[#F0EBE5]",
    };

    const sizes = {
      sm: "h-10 px-5 text-xs rounded-full",
      md: "h-12 px-7 py-3 text-sm rounded-full",
      lg: "h-14 px-9 text-base rounded-full",
    };

    const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`;

    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
