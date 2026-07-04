"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeToggle } from "@/hooks/use-theme-toggle";

export function ThemeToggleButton() {
  const { theme, toggleTheme, isMounted } = useThemeToggle();
  const isDark = isMounted && theme === "dark";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-110 hover:bg-indigo-700"
      >
        {isDark ? (
          <Sun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Moon className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}