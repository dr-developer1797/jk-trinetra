export type WatchlistOption = "NIFTY 50" | "BANK NIFTY" | "FINNIFTY";

export interface ScannerAction {
  id: string;
  label: string;
  icon: "trending-up" | "trending-down" | "swap-vertical";
  toneClassName: string;
  span: "half" | "full";
}

export interface MarketQuote {
  symbol: string;
  price: string;
  marketStatus: "open" | "closed";
  lastUpdated: string;
}

export interface SignalAlert {
  variant: "buy" | "sell" | "neutral";
  message: string;
}

export interface StatCardItem {
  id: string;
  label: string;
  value: string;
  /** Overrides the default value size/color/font (e.g. adds font-mono, changes color/size). */
  valueClassName?: string;
  icon?: "arrow-down" | "arrow-up";
  subLabel?: string;
  subLabelClassName?: string;
}

export interface PriceRangeItem {
  id: string;
  label: string;
  value: string;
}

export interface PivotPointItem {
  id: string;
  label: string;
  value: string;
  emphasized?: boolean;
}

export interface MovingAverageItem {
  id: string;
  label: string;
  value: string;
  trend: "up" | "down";
}

export interface StrategyTarget {
  label: string;
  value: string;
  emphasized?: boolean;
}

export interface TradingStrategy {
  id: "buy" | "sell";
  title: string;
  icon: "up" | "down";
  entryLabel: string;
  entryValue: string;
  stopLoss: string;
  targets: StrategyTarget[];
  toneClassNames: {
    accentBar: string;
    headerBg: string;
    headerText: string;
    icon: string;
    targetLabel: string;
    finalTargetText: string;
    cardBorder?: string;
    cardRing?: string;
  };
}

export interface IndicatorGauge {
  id: string;
  label: string;
  valueDisplay: string;
  valueSuffix?: string;
  valueSuffixClassName?: string;
  /** 0-100 fill percentage for the gauge bar. */
  percentage: number;
  barToneClassName: string;
  statusText: string;
  statusTextClassName?: string;
  /** Percentage positions (0-100) for reference tick marks on the bar. */
  markers?: number[];
  banner?: {
    label: string;
    toneClassName: string;
  };
  borderToneClassName?: string;
}