import type { IndicatorGauge } from "@/types/market";
import { GaugeCard } from "./gauage-card";

interface IndicatorPanelProps {
  gauges: IndicatorGauge[];
}

export function IndicatorPanel({ gauges }: IndicatorPanelProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {gauges.map((gauge) => (
        <GaugeCard key={gauge.id} gauge={gauge} />
      ))}
    </div>
  );
}