import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Base surface used by dashboard metric cards. Provides the
 * shared border/background/shadow treatment repeated across the app.
 */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-surface-dark",
        className
      )}
      {...props}
    />
  );
}