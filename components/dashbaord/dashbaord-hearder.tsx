import type { MarketQuote } from "@/types/market";

interface DashboardHeaderProps {
  quote: MarketQuote;
}

export function DashboardHeader({ quote }: DashboardHeaderProps) {
  const isMarketOpen = quote.marketStatus === "open";

  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
          {quote.symbol}
          <span className="text-2xl font-normal text-slate-500 dark:text-slate-400">|</span>
          <span className="font-mono text-slate-800 dark:text-slate-100">{quote.price}</span>
        </h2>
        <p className="mt-1 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          <span
            className={
              isMarketOpen ? "h-2 w-2 animate-pulse rounded-full bg-green-500" : "h-2 w-2 rounded-full bg-slate-400"
            }
            aria-hidden="true"
          />
          {isMarketOpen ? "Market Open" : "Market Closed"}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400">Last Updated: {quote.lastUpdated}</span>
      </div>
    </div>
  );
}