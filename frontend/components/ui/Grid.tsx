
export function Grid({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function GridItem({
  className = "",
  colSpan = 12,
  mdColSpan,
  lgColSpan,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { colSpan?: number; mdColSpan?: number; lgColSpan?: number }) {
  const mdColSpanMap: Record<number, string> = {
    1: "md:col-span-1", 2: "md:col-span-2", 3: "md:col-span-3", 4: "md:col-span-4",
    5: "md:col-span-5", 6: "md:col-span-6", 7: "md:col-span-7", 8: "md:col-span-8",
    9: "md:col-span-9", 10: "md:col-span-10", 11: "md:col-span-11", 12: "md:col-span-12"
  };

  const lgColSpanMap: Record<number, string> = {
    1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3", 4: "lg:col-span-4",
    5: "lg:col-span-5", 6: "lg:col-span-6", 7: "lg:col-span-7", 8: "lg:col-span-8",
    9: "lg:col-span-9", 10: "lg:col-span-10", 11: "lg:col-span-11", 12: "lg:col-span-12"
  };

  // The parent Grid is `grid-cols-1` on mobile, so the base span must be
  // `col-span-1` (full width). Using `col-span-12` here would make the item
  // span 12 tracks in a 1-column grid, forcing CSS to generate 11 implicit
  // content-sized columns and causing horizontal overflow on small screens.
  const colSpanClass = "col-span-1";
  const mdColSpanClass = mdColSpan ? mdColSpanMap[mdColSpan] : mdColSpanMap[colSpan];
  const lgColSpanClass = lgColSpan ? lgColSpanMap[lgColSpan] : "";

  return (
    <div className={`${colSpanClass} ${mdColSpanClass || ""} ${lgColSpanClass} min-w-0 ${className}`.trim().replace(/\s+/g, ' ')} {...props}>
      {children}
    </div>
  );
}
