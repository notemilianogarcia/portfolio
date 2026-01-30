import { PublicationCard, Publication } from "@/components/PublicationCard";

interface PublicationListProps {
  publications: Publication[];
  className?: string;
}

export function PublicationList({ publications, className }: PublicationListProps) {
  return (
    <div className={`flex flex-col gap-8 ${className ?? ""}`}>
      {publications.map((pub) => (
        <PublicationCard key={pub.slug} publication={pub} showAbstract={true} />
      ))}
    </div>
  );
}
