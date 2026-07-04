
import type { StatCardItem } from "@/types/market";
import { StatCard } from "./stat-card";

interface StatCardsGridProps {
  items: StatCardItem[];
}

export function StatCardsGrid({ items }: StatCardsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <StatCard key={item.id} item={item} />
      ))}
    </div>
  );
}