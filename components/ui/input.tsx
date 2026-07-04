import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function SearchField({ label, className, id, ...props }: SearchFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1">
      <label htmlFor={inputId} className="ml-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type="text"
          className={cn(
            "w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-3 pr-10 text-sm text-slate-800 shadow-sm placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200",
            className
          )}
          {...props}
        />
        <Search className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" aria-hidden="true" />
      </div>
    </div>
  );
}