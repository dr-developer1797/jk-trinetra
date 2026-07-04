import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StatCardItem } from "@/types/market";

const TREND_ICONS = {
  "arrow-down": ArrowDown,
  "arrow-up": ArrowUp,
} as const satisfies Record<string, LucideIcon>;

interface StatCardProps {
  item: StatCardItem;
}

export function StatCard({ item }: StatCardProps) {
  const TrendIcon = item.icon ? TREND_ICONS[item.icon] : null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-surface-dark">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
      <div className="flex flex-col">
        <p className={cn("flex items-center gap-1 font-bold", item.valueClassName ?? "text-xl text-slate-900 dark:text-white")}>
          {item.value}
          {TrendIcon ? <TrendIcon className="h-4 w-4" aria-hidden="true" /> : null}
        </p>
        {item.subLabel ? (
          <p className={cn("text-xs font-medium", item.subLabelClassName ?? "text-slate-500")}>{item.subLabel}</p>
        ) : null}
      </div>
    </div>
  );
}