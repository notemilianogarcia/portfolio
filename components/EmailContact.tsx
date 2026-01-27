"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function EmailContact({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-lg text-text-2">Email:</span>
      <a 
        href={`mailto:${email}`}
        className="text-lg text-accent hover:underline"
      >
        {email}
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1 px-2 py-2 rounded-lg border border-border bg-surface-2 text-text-2 hover:text-accent hover:border-accent transition-colors cursor-pointer"
        aria-label="Copy email to clipboard"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}
