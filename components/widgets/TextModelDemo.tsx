"use client";

import { useState } from "react";
import { Play, Loader2 } from "lucide-react";

export function TextModelDemo() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ label: string; confidence: number } | null>(null);

  const handleRun = () => {
    if (!input.trim()) return;
    setLoading(true);
    // Mock inference
    setTimeout(() => {
      setResult({
        label: "Research Paper",
        confidence: 0.94,
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="my-8 rounded-2xl border border-border bg-surface p-6 shadow-sm" data-theme="light">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-text-2">
          Interactive Demo: Text Classifier
        </h4>
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
          Client-side Mock
        </span>
      </div>
      
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste some text here to classify..."
        className="mb-4 h-32 w-full rounded-xl border border-border bg-bg p-4 text-sm text-text outline-none focus:border-accent/50"
      />

      <div className="flex items-center justify-between">
        <button
          onClick={handleRun}
          disabled={loading || !input.trim()}
          className="flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-sm font-bold text-bg transition-all hover:opacity-90 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <Play size={18} />}
          Run Inference
        </button>

        {result && (
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase text-text-2">Prediction</p>
              <p className="text-sm font-bold text-text">{result.label}</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase text-text-2">Confidence</p>
              <p className="text-sm font-bold text-accent">{(result.confidence * 100).toFixed(1)}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
