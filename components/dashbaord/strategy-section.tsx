
import type { TradingStrategy } from "@/types/market";
import { StrategyCard } from "./strategy-card";

interface StrategySectionProps {
  strategies: TradingStrategy[];
}

export function StrategySection({ strategies }: StrategySectionProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {strategies.map((strategy) => (
        <StrategyCard key={strategy.id} strategy={strategy} />
      ))}
    </div>
  );
}