import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SignalAlert } from "@/types/market";

const VARIANT_CLASSNAMES: Record<SignalAlert["variant"], string> = {
  buy: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-500",
  sell: "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-500",
  neutral: "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-300",
};

interface AlertBannerProps {
  alert: SignalAlert;
}

export function AlertBanner({ alert }: AlertBannerProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex w-full animate-pulse items-center justify-center gap-3 rounded-xl border p-4 shadow-sm",
        VARIANT_CLASSNAMES[alert.variant]
      )}
    >
      <AlertTriangle className="h-8 w-8" aria-hidden="true" />
      <span className="text-xl font-bold uppercase tracking-wide md:text-2xl">{alert.message}</span>
    </div>
  );
}