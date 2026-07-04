import type {
  IndicatorGauge,
  MarketQuote,
  MovingAverageItem,
  PivotPointItem,
  PriceRangeItem,
  ScannerAction,
  SignalAlert,
  StatCardItem,
  TradingStrategy,
  WatchlistOption,
} from "@/types/market";

export const WATCHLIST_OPTIONS: readonly WatchlistOption[] = ["NIFTY 50", "BANK NIFTY", "FINNIFTY"];

export const SCANNER_ACTIONS: ScannerAction[] = [
  {
    id: "buy-scan",
    label: "BUY SCAN",
    icon: "trending-up",
    span: "half",
    toneClassName:
      "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800/50 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/30",
  },
  {
    id: "sell-scan",
    label: "SELL SCAN",
    icon: "trending-down",
    span: "half",
    toneClassName:
      "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-800/50 dark:bg-rose-900/20 dark:text-rose-400 dark:hover:bg-rose-900/30",
  },
  {
    id: "reversal-scan",
    label: "REVERSAL SCAN",
    icon: "swap-vertical",
    span: "full",
    toneClassName:
      "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800/50 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/30",
  },
];

export const MARKET_QUOTE: MarketQuote = {
  symbol: "NIFTY 50",
  price: "Rs. 25232.5",
  marketStatus: "open",
  lastUpdated: "10:45:22 AM",
};

export const SIGNAL_ALERT: SignalAlert = {
  variant: "sell",
  message: "SELL CONFIRMED",
};

export const STAT_CARDS: StatCardItem[] = [
  {
    id: "ltp",
    label: "LTP",
    value: "Rs. 25232.5",
    valueClassName: "text-xl font-mono text-slate-900 dark:text-white",
  },
  {
    id: "smart-money",
    label: "Smart Money",
    value: "LONG UNWINDING",
    valueClassName: "text-lg text-red-600 dark:text-red-400",
    icon: "arrow-down",
  },
  {
    id: "vwap",
    label: "VWAP",
    value: "25329.62",
    valueClassName: "text-xl font-mono text-slate-900 dark:text-white",
  },
  {
    id: "trend",
    label: "Trend (50 SMA)",
    value: "DOWNTREND",
    valueClassName: "text-lg text-red-600 dark:text-red-400",
    subLabel: "(Below 50 SMA)",
    subLabelClassName: "text-red-500/70 dark:text-red-400/60",
  },
];

export const PRICE_RANGE_ITEMS: PriceRangeItem[] = [
  { id: "today-high", label: "Today High", value: "25585.0" },
  { id: "today-low", label: "Today Low", value: "25171.35" },
  { id: "prev-high", label: "Prev High", value: "25653.3" },
  { id: "prev-low", label: "Prev Low", value: "25494.35" },
];

export const PIVOT_POINTS: PivotPointItem[] = [
  { id: "s2", label: "S2", value: "25418.77" },
  { id: "s1", label: "S1", value: "25502.13" },
  { id: "pivot", label: "Pivot", value: "25577.72", emphasized: true },
  { id: "r1", label: "R1", value: "25661.08" },
  { id: "r2", label: "R2", value: "25736.67" },
];

export const MOVING_AVERAGES: MovingAverageItem[] = [
  { id: "sma-10", label: "10 SMA", value: "25758.01", trend: "down" },
  { id: "sma-20", label: "20 SMA", value: "25942.5", trend: "down" },
  { id: "sma-50", label: "50 SMA", value: "25957.89", trend: "down" },
  { id: "sma-100", label: "100 SMA", value: "25580.12", trend: "down" },
  { id: "sma-200", label: "200 SMA", value: "25114.03", trend: "up" },
];

export const TRADING_STRATEGIES: TradingStrategy[] = [
  {
    id: "buy",
    title: "Buy Strategy",
    icon: "up",
    entryLabel: "Entry Above",
    entryValue: "25603.29",
    stopLoss: "25577.72",
    targets: [
      { label: "T1", value: "25643.31" },
      { label: "T2", value: "25683.36" },
      { label: "T3", value: "25723.44" },
      { label: "T4", value: "25763.55" },
      { label: "TARGET 5", value: "25803.7", emphasized: true },
    ],
    toneClassNames: {
      accentBar: "bg-emerald-500",
      headerBg: "bg-emerald-50/30 dark:bg-emerald-900/10 border-slate-100 dark:border-slate-700/50",
      headerText: "text-emerald-700 dark:text-emerald-400",
      icon: "text-emerald-500",
      targetLabel: "text-emerald-600 dark:text-emerald-500",
      finalTargetText: "text-emerald-600 dark:text-emerald-400",
    },
  },
  {
    id: "sell",
    title: "Sell Strategy",
    icon: "down",
    entryLabel: "Entry Below",
    entryValue: "25552.14",
    stopLoss: "25577.72",
    targets: [
      { label: "T1", value: "25512.19" },
      { label: "T2", value: "25472.28" },
      { label: "T3", value: "25432.39" },
      { label: "T4", value: "25392.54" },
      { label: "TARGET 5", value: "25352.72", emphasized: true },
    ],
    toneClassNames: {
      accentBar: "bg-red-500",
      headerBg: "bg-red-50/30 dark:bg-red-900/10 border-red-100 dark:border-red-900/30",
      headerText: "text-red-700 dark:text-red-400",
      icon: "text-red-500",
      targetLabel: "text-red-600 dark:text-red-500",
      finalTargetText: "text-red-600 dark:text-red-400",
      cardBorder: "border-red-200 dark:border-red-900/50",
      cardRing: "ring-1 ring-red-500/20 dark:ring-red-500/10",
    },
  },
];

export const INDICATOR_GAUGES: IndicatorGauge[] = [
  {
    id: "adx",
    label: "ADX Strength",
    valueDisplay: "24.65",
    valueSuffix: "(WEAK)",
    valueSuffixClassName: "text-amber-500",
    percentage: 24.65,
    barToneClassName: "bg-amber-400",
    statusText: "Weak Trend Detected",
    borderToneClassName: "border-amber-200 dark:border-amber-700/50",
  },
  {
    id: "rsi",
    label: "RSI Momentum",
    valueDisplay: "29.9",
    percentage: 29.9,
    barToneClassName: "bg-red-500",
    statusText: "OVERSOLD (Bounce Expected)",
    statusTextClassName: "font-bold uppercase text-red-500",
    markers: [30, 70],
    banner: { label: "Reversal Zone", toneClassName: "bg-red-600" },
    borderToneClassName: "border-red-200 dark:border-red-900/50",
  },
];