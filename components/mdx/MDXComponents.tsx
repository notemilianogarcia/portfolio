import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}

export function Callout({ children, type = "info" }: CalloutProps) {
  const icons = {
    info: <Info size={18} className="text-accent" />,
    warning: <AlertTriangle size={18} className="text-amber-500" />,
    success: <CheckCircle size={18} className="text-emerald-500" />,
  };

  const styles = {
    info: "bg-accent/5 border-accent/20",
    warning: "bg-amber-500/5 border-amber-500/20",
    success: "bg-emerald-500/5 border-emerald-500/20",
  };

  return (
    <div className={cn("my-6 flex gap-4 rounded-xl border p-4", styles[type])}>
      <div className="mt-0.5 shrink-0">{icons[type]}</div>
      <div className="text-sm leading-relaxed text-text-2">{children}</div>
    </div>
  );
}

export function Figure({ src, caption, alt }: { src: string; caption?: string; alt?: string }) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <img src={src} alt={alt || caption} className="w-full object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-text-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Metric({ label, value, description }: { label: string; value: string; description?: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface-2 p-4">
      <p className="text-[10px] font-bold uppercase tracking-wider text-accent">{label}</p>
      <p className="font-heading text-2xl font-bold text-text">{value}</p>
      {description && <p className="mt-1 text-xs text-text-2">{description}</p>}
    </div>
  );
}
