import { ReactNode } from "react";
import { cn } from "@/lib/utils";


import { useTheme } from "@/components/ThemeProvider";

interface SectionBandProps {
  theme?: "dark" | "light";
  variant?: "panel" | "full";
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}


// Always use the global theme from ThemeProvider, ignore per-section theme
export function SectionBand({
  /* theme, */
  variant = "panel",
  title,
  subtitle,
  children,
  className,
  id,
}: SectionBandProps) {
  // const { theme } = useTheme();
  // Instead of using theme prop, always use global theme (set on <html>)
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-20 transition-colors duration-300",
        "bg-bg text-text",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {variant === "panel" ? (
          <div
            className={cn(
              "mx-auto max-w-6xl rounded-[28px] p-8 md:p-16 border border-border shadow-sm",
              "bg-surface-panel"
            )}
          >
            {(title || subtitle) && (
              <div className="mb-12 text-center md:text-left">
                {title && (
                  <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-text-2 text-lg max-w-2xl">{subtitle}</p>
                )}
              </div>
            )}
            {children}
          </div>
        ) : (
          <div className="mx-auto max-w-6xl">
            {(title || subtitle) && (
              <div className={cn("mb-12", className)}>
                {title && (
                  <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-text-2 text-lg max-w-2xl">{subtitle}</p>
                )}
              </div>
            )}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
