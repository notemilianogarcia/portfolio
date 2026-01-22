"use client";

import { useState } from "react";
import { Upload, Music, CheckCircle2 } from "lucide-react";

export function AudioDemo() {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setAnalyzing(true);
      setPrediction(null);
      // Mock analysis
      setTimeout(() => {
        setPrediction("Environmental Noise (Rain)");
        setAnalyzing(false);
      }, 2000);
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-border bg-surface p-6 shadow-sm" data-theme="light">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-text-2">
          Interactive Demo: Audio Analysis
        </h4>
      </div>

      <div className="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-bg/50 p-8 transition-colors hover:border-accent/30">
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="absolute inset-0 cursor-pointer opacity-0"
        />
        
        {file ? (
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Music size={24} />
            </div>
            <p className="mb-1 text-sm font-bold text-text">{file.name}</p>
            <p className="text-xs text-text-2">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-text-2">
              <Upload size={24} />
            </div>
            <p className="mb-1 text-sm font-bold text-text">Upload audio file</p>
            <p className="text-xs text-text-2">WAV, MP3, or OGG up to 10MB</p>
          </div>
        )}
      </div>

      {analyzing && (
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-text-2">
          <div className="h-2 w-24 overflow-hidden rounded-full bg-border">
            <div className="h-full w-1/2 animate-[loading_1.5s_infinite] bg-accent" />
          </div>
          Analyzing waveform...
        </div>
      )}

      {prediction && (
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-accent/5 p-4 border border-accent/20">
          <CheckCircle2 className="text-accent" size={20} />
          <div>
            <p className="text-[10px] font-bold uppercase text-accent/70">Classification Result</p>
            <p className="text-sm font-bold text-text">{prediction}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
