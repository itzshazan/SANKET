import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-violet" | "secondary-neu" | "ghost-neu" | "primary-lime" | "primary-forest" | "ghost-light" | "ghost-dark" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary-violet", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-display font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] disabled:opacity-50 disabled:pointer-events-none rounded-2xl cursor-pointer";

    const variants: Record<string, string> = {
      "primary-violet":
        "bg-[#6C63FF] text-white shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:bg-[#7B73FF] hover:translate-y-[-1px] active:translate-y-[0.5px] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.35)]",
      "secondary-neu":
        "bg-[#E0E5EC] text-[#3D4852] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:text-[#6C63FF] hover:translate-y-[-1px] active:translate-y-[0.5px] active:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.7),inset_-4px_-4px_8px_rgba(255,255,255,0.6)]",
      "ghost-neu":
        "bg-[#E0E5EC] text-[#6B7280] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] hover:text-[#3D4852]",
      "primary-lime":
        "bg-[#6C63FF] text-white shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:bg-[#7B73FF]",
      "primary-forest":
        "bg-[#E0E5EC] text-[#3D4852] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.6)] hover:text-[#6C63FF]",
      "ghost-light":
        "bg-[#E0E5EC] text-[#3D4852] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]",
      "ghost-dark":
        "bg-[#E0E5EC] text-[#3D4852] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.5)]",
      "outline":
        "bg-[#E0E5EC] text-[#3D4852] shadow-[5px_5px_10px_rgba(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)]",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-tight rounded-xl",
      md: "h-11 px-6 py-2.5 text-sm tracking-tight rounded-2xl",
      lg: "h-13 px-8 text-base tracking-tight rounded-2xl",
    };

    const classes = `${baseStyles} ${variants[variant] || variants["primary-violet"]} ${sizes[size]} ${className}`;

    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
