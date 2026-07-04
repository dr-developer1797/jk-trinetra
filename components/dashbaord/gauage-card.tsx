import { cn } from "@/lib/utils";
import type { IndicatorGauge } from "@/types/market";

interface GaugeCardProps {
  gauge: IndicatorGauge;
}

function GaugeBody({ gauge }: GaugeCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">{gauge.label}</p>
      <div className="mb-1 text-2xl font-bold text-slate-800 dark:text-slate-100">
        {gauge.valueDisplay}
        {gauge.valueSuffix ? (
          <span className={cn("ml-1 text-sm font-medium", gauge.valueSuffixClassName)}>{gauge.valueSuffix}</span>
        ) : null}
      </div>
      <div className="relative mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
        {gauge.markers?.map((markerPercent) => (
          <span
            key={markerPercent}
            className="absolute -mt-0.5 h-3 w-px bg-slate-400 dark:bg-slate-500"
            style={{ left: `${markerPercent}%` }}
            aria-hidden="true"
          />
        ))}
        <div className={cn("h-2 rounded-full", gauge.barToneClassName)} style={{ width: `${gauge.percentage}%` }} />
      </div>
      <p className={cn("mt-2 text-[10px]", gauge.statusTextClassName ?? "text-slate-400")}>{gauge.statusText}</p>
    </div>
  );
}

export function GaugeCard({ gauge }: GaugeCardProps) {
  if (!gauge.banner) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-xl border bg-white shadow-sm dark:bg-surface-dark",
          gauge.borderToneClassName
        )}
      >
        <GaugeBody gauge={gauge} />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col overflow-hidden rounded-xl border shadow-sm", gauge.borderToneClassName)}>
      <div
        className={cn(
          "py-1.5 text-center text-xs font-bold uppercase tracking-widest text-white",
          gauge.banner.toneClassName
        )}
      >
        {gauge.banner.label}
      </div>
      <div className="flex flex-1 flex-col bg-white dark:bg-surface-dark">
        <GaugeBody gauge={gauge} />
      </div>
    </div>
  );
}