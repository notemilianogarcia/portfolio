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
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface-2 p-6 transition-all hover:border-accent/30">
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-4">
          <Link href={`/publications/${publication.slug}`}>
            <h3 className="font-heading text-lg font-bold text-text hover:text-accent transition-colors">
              {publication.title}
            </h3>
          </Link>
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
        <p className="text-sm text-text-2 line-clamp-3 italic">
          {publication.abstract}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {publication.pdfUrl && (
          <a
            href={publication.pdfUrl}
            className="flex items-center gap-1.5 text-xs font-bold text-text-2 hover:text-accent transition-colors"
          >
            <FileText size={14} />
            PDF
          </a>
        )}
        {publication.codeUrl && (
          <a
            href={publication.codeUrl}
            className="flex items-center gap-1.5 text-xs font-bold text-text-2 hover:text-accent transition-colors"
          >
            <Github size={14} />
            Code
          </a>
        )}
        <Link
          href={`/publications/${publication.slug}`}
          className="flex items-center gap-1.5 text-xs font-bold text-text-2 hover:text-accent transition-colors"
        >
          <ExternalLink size={14} />
          Details
        </Link>
      </div>
    </div>
  );
}
