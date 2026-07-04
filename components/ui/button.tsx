import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Unstyled-by-default button primitive. Deliberately carries no
 * font-size/weight/color defaults so callers can fully control
 * variant styling via `className` without fighting base utilities.
 */
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn("inline-flex items-center justify-center gap-2 rounded-lg transition-all", className)}
      {...props}
    />
  );
}