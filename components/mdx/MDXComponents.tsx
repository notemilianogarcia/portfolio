import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

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

// Default HTML element mappings for markdown
const MDXComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mt-0 mb-6">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-heading text-2xl font-bold text-text mt-7 mb-3">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-heading text-xl font-bold text-text mt-6 mb-2">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="font-heading text-lg font-bold text-text mt-5 mb-2">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-text-2 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside text-text-2 mb-4 space-y-1">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside text-text-2 mb-4 space-y-1">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-text-2">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className="text-accent hover:underline">
      {children}
    </a>
  ),
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    // If className contains "language-", it's a code block (inside pre), not inline code
    const isCodeBlock = className?.includes('language-');
    if (isCodeBlock) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="bg-surface-2 text-accent px-2 py-1 rounded text-sm font-mono">{children}</code>
    );
  },
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-surface-2 border border-border rounded-lg p-4 overflow-x-auto mb-4 text-sm font-mono text-text-2">{children}</pre>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-accent pl-4 italic text-text-2 my-4">{children}</blockquote>
  ),
  hr: () => <hr className="border-border my-6" />,
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-surface-2">{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="border-b border-border last:border-b-0">{children}</tr>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-3 text-text-2 text-sm">{children}</td>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-3 text-left text-text font-bold text-sm bg-surface-2">{children}</th>
  ),
  Callout,
  Figure,
  Metric,
};

export { Callout, Figure, Metric };
export const components = MDXComponents;
