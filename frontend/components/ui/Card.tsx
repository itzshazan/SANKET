import React from "react";

export function Card({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-[#1a1a1a] border border-[#3c3c3c] p-6 sm:p-8 text-white rounded-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-0 pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-bold uppercase tracking-tight text-white font-sans ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-0 min-w-0 break-words ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-0 pt-4 border-t border-[#262626] flex items-center ${className}`} {...props}>
      {children}
    </div>
  );
}
