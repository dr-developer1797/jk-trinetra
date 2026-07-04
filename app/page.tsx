import { AlertBanner } from "@/components/dashbaord/alert-banner";
import { DashboardHeader } from "@/components/dashbaord/dashbaord-hearder";
import { Disclaimer } from "@/components/dashbaord/disclaimer";
import { IndicatorPanel } from "@/components/dashbaord/indicator-panel";
import { MovingAveragesPanel } from "@/components/dashbaord/moving-averages-panel";
import { PivotPointsPanel } from "@/components/dashbaord/pivot-point-panel";
import { PriceRangeGrid } from "@/components/dashbaord/price-range-grid";
import { StatCardsGrid } from "@/components/dashbaord/stat-cards-grid";
import { StrategySection } from "@/components/dashbaord/strategy-section";
import { Sidebar } from "@/components/layout/sidebar/sidebar";

import { ThemeToggleButton } from "@/components/theme-toggle-button";
import {
  MARKET_QUOTE,
  SIGNAL_ALERT,
  STAT_CARDS,
  PRICE_RANGE_ITEMS,
  PIVOT_POINTS,
  MOVING_AVERAGES,
  TRADING_STRATEGIES,
  INDICATOR_GAUGES,
} from "@/constants/market-data";

export default function DashboardPage() {
  return (
    <>
      <Sidebar />
      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        <div className="flex-1 space-y-6 overflow-y-auto p-4 md:p-6 lg:p-8">
          <DashboardHeader quote={MARKET_QUOTE} />
          <AlertBanner alert={SIGNAL_ALERT} />
          <StatCardsGrid items={STAT_CARDS} />
          <PriceRangeGrid items={PRICE_RANGE_ITEMS} />
          <PivotPointsPanel items={PIVOT_POINTS} />
          <MovingAveragesPanel items={MOVING_AVERAGES} />
          <StrategySection strategies={TRADING_STRATEGIES} />
          <IndicatorPanel gauges={INDICATOR_GAUGES} />
          <Disclaimer />
        </div>
      </main>
      <ThemeToggleButton />
    </>
  );
}