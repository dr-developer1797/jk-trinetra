import type { PriceRangeItem } from "@/types/market";

interface PriceRangeGridProps {
  items: PriceRangeItem[];
}

export function PriceRangeGrid({ items }: PriceRangeGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-700/50 dark:bg-slate-800/50"
        >
          <p className="text-[10px] font-bold uppercase text-slate-400">{item.label}</p>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{item.value}</p>
        </div>
      ))}
    </div>
  );
}