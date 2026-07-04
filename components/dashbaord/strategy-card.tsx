import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TradingStrategy } from "@/types/market";

const DIRECTION_ICONS = {
  up: ArrowUpRight,
  down: ArrowDownRight,
} as const satisfies Record<TradingStrategy["icon"], LucideIcon>;

interface StrategyCardProps {
  strategy: TradingStrategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  const DirectionIcon = DIRECTION_ICONS[strategy.icon];
  const { toneClassNames } = strategy;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:bg-surface-dark",
        toneClassNames.cardBorder ?? "border-slate-200 dark:border-slate-700",
        toneClassNames.cardRing
      )}
    >
      <div className={cn("absolute left-0 top-0 h-full w-1", toneClassNames.accentBar)} aria-hidden="true" />

      <div className={cn("border-b p-4", toneClassNames.headerBg)}>
        <div className="flex items-center justify-between">
          <span className={cn("text-sm font-bold uppercase tracking-wide", toneClassNames.headerText)}>
            {strategy.title}
          </span>
          <DirectionIcon className={cn("h-3.5 w-3.5", toneClassNames.icon)} aria-hidden="true" />
        </div>
      </div>

      <div className="flex-1 space-y-4 p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{strategy.entryLabel}</p>
            <p className="text-xl font-bold text-slate-800 dark:text-white">{strategy.entryValue}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400">Stop Loss</p>
            <p className="text-lg font-bold text-red-500">{strategy.stopLoss}</p>
          </div>
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-700" />

        <div className="grid grid-cols-3 gap-y-2 text-sm">
          {strategy.targets.map((target) => (
            <div key={target.label} className={cn("text-slate-600 dark:text-slate-300", target.emphasized && "col-span-2")}>
              <span
                className={cn(
                  "font-semibold",
                  target.emphasized ? cn("font-bold", toneClassNames.finalTargetText) : toneClassNames.targetLabel
                )}
              >
                {target.label}:
              </span>{" "}
              {target.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}