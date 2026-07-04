import { cn } from "@/lib/utils";
import type { PivotPointItem } from "@/types/market";

interface PivotPointsPanelProps {
  items: PivotPointItem[];
}

export function PivotPointsPanel({ items }: PivotPointsPanelProps) {
  return (
    <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-1 dark:border-amber-900/30 dark:bg-amber-900/10">
      <div className="grid grid-cols-5 gap-1 divide-x divide-amber-200/50 md:gap-4 dark:divide-amber-800/30">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn("p-2 text-center", item.emphasized && "rounded bg-amber-100/50 dark:bg-amber-900/30")}
          >
            <p
              className={cn(
                "text-[10px] font-bold uppercase",
                item.emphasized ? "text-amber-700 dark:text-amber-400" : "text-amber-600/70 dark:text-amber-500/70"
              )}
            >
              {item.label}
            </p>
            <p
              className={cn(
                "text-sm font-bold",
                item.emphasized ? "text-slate-900 dark:text-white" : "text-slate-800 dark:text-amber-100"
              )}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}