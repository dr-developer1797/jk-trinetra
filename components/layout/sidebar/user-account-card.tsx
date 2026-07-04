import { Settings } from "lucide-react";

interface UserAccountCardProps {
  initials: string;
  name: string;
  planLabel: string;
}

export function UserAccountCard({ initials, name, planLabel }: UserAccountCardProps) {
  return (
    <div className="border-t border-slate-100 bg-slate-50 p-4 dark:border-slate-700/50 dark:bg-slate-800/50">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-purple-500 text-xs font-bold text-white">
          {initials}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{planLabel}</p>
        </div>
        <button
          type="button"
          aria-label="Account settings"
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <Settings className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}