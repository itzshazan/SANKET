import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-lime" | "primary-forest" | "ghost-light" | "ghost-dark" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary-lime", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8EA3B] disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer";

    const variants = {
      "primary-lime": "bg-[#C8EA3B] text-[#1A2614] hover:bg-[#E4F76E] shadow-sm hover:shadow-[0_0_20px_rgba(200,234,59,0.3)]",
      "primary-forest": "bg-[#213318] text-white hover:bg-[#1A2614] border border-[#37502B] shadow-sm",
      "ghost-light": "bg-transparent text-[#1A2614] border border-[#E3E8DF] hover:bg-[#F8F9F6]",
      "ghost-dark": "bg-transparent text-white border border-white/30 hover:bg-white/10",
      "outline": "border border-[#37502B] bg-transparent text-[#C5D7BD] hover:text-white hover:border-[#C8EA3B]",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs tracking-tight",
      md: "h-11 px-5 py-2.5 text-sm tracking-tight",
      lg: "h-13 px-7 text-base tracking-tight",
    };

    const classes = `${baseStyles} ${variants[variant] || variants["primary-lime"]} ${sizes[size]} ${className}`;

    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
