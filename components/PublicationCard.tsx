"use client";

import { FileText, Github, Quote, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface Publication {
  slug: string;
  title: string;
  venue: string;
  year: number;
  authors?: string;
  abstract?: string;
  pdfUrl?: string;
  codeUrl?: string;
  bibtex?: string;
}

interface PublicationCardProps {
  publication: Publication;
  showAbstract?: boolean;
}

export function PublicationCard({ publication, showAbstract = false }: PublicationCardProps) {
  const pdfLink = publication.pdfUrl ?? `/publications/${publication.slug}`;

  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-border bg-surface-2 p-6 transition-all hover:border-accent/30 hover:shadow-lg">
      <Link href={`/publications/${publication.slug}`} className="group/link block">
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-lg font-bold text-text transition-colors group-hover/link:text-accent">
              {publication.title}
            </h3>
            <span className="shrink-0 rounded-full bg-surface px-3 py-1 text-xs font-bold text-accent">
              {publication.year}
            </span>
          </div>
          <p className="text-sm font-medium text-accent/80">{publication.venue}</p>
          {publication.authors && (
            <p className="text-xs text-text-2">{publication.authors}</p>
          )}
        </div>

        {showAbstract && publication.abstract && (
          <p className="text-sm text-text-2 line-clamp-3 italic mt-4">
            {publication.abstract}
          </p>
        )}
      </Link>

      <div className="mt-4 pt-3 border-t border-border flex flex-wrap items-center gap-3">
        {publication.pdfUrl && (
          <span className="flex items-center gap-1.5 text-xs font-bold text-text-2">
            <FileText size={14} />
            PDF
          </span>
        )}
        {publication.codeUrl && (
          <span className="flex items-center gap-1.5 text-xs font-bold text-text-2">
            <Github size={14} />
            Code
          </span>
        )}
        <Link
          href={pdfLink}
          className="flex items-center gap-1.5 text-xs font-bold text-text-2 hover:text-accent transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={14} />
          View PDF
        </Link>
      </div>
    </div>
  );
}
