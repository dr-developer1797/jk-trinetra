import { LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MovingAverageItem } from "@/types/market";

interface MovingAveragesPanelProps {
  items: MovingAverageItem[];
}

export function MovingAveragesPanel({ items }: MovingAveragesPanelProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <LineChart className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Key Moving Averages (Trend Support)
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm dark:border-slate-700 dark:bg-surface-dark"
          >
            <p className="mb-1 text-[10px] text-slate-400">{item.label}</p>
            <p
              className={cn(
                "font-bold",
                item.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
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