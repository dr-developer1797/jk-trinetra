
import { ScannerPanel } from "@/components/layout/sidebar/scanner-panel";
import { UserAccountCard } from "@/components/layout/sidebar/user-account-card";
import { ControlsPanel } from "./control-panel";

export function Sidebar() {
  return (
    <aside className="z-20 flex w-72 shrink-0 flex-col border-r border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-surface-dark">
      <div className="border-b border-slate-100 p-6 dark:border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-lg font-bold text-white shadow-lg shadow-primary/30">
            T
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">JK TRINETRA</h1>
        </div>
        <p className="mt-1 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
          PRO TRADING TERMINAL
        </p>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto p-5">
        <ControlsPanel />
        <ScannerPanel />
      </div>

      <UserAccountCard initials="JK" name="User Account" planLabel="Pro Plan Active" />
    </aside>
  );
}