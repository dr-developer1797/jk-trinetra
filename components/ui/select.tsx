import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly string[];
}

export function SelectField({ label, options, className, id, ...props }: SelectFieldProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1">
      <label htmlFor={selectId} className="ml-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm shadow-sm focus:border-primary focus:ring-2 focus:ring-primary dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 text-slate-400"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}