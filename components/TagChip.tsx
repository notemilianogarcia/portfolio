import { cn } from "@/lib/utils";

interface TagChipProps {
  children: React.ReactNode;
  variant?: "default" | "mono" | "skill";
  skillType?: string;
  className?: string;
}

export function TagChip({ children, variant = "default", skillType, className }: TagChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-border/50 cursor-default select-none whitespace-nowrap",
        variant === "mono" ? "font-mono" : "font-sans",
        variant === "skill" ? "skill-chip" : "bg-surface-2 text-text-2",
        className
      )}
      data-skill={variant === "skill" && skillType ? skillType : undefined}
    >
      {children}
    </span>
  );
}
