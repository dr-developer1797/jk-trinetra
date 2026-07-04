"use client";

import { TrendingUp, TrendingDown, ArrowUpDown, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarSectionHeading } from "@/components/layout/sidebar/sidebar-section-heading";
import { SCANNER_ACTIONS } from "@/constants/market-data";
import type { ScannerAction } from "@/types/market";

const SCAN_ICONS = {
  "trending-up": TrendingUp,
  "trending-down": TrendingDown,
  "swap-vertical": ArrowUpDown,
} as const satisfies Record<ScannerAction["icon"], LucideIcon>;

interface ScannerPanelProps {
  onScan?: (scannerId: string) => void;
}

interface ScannerActionButtonProps {
  action: ScannerAction;
  onClick?: (id: string) => void;
}

function ScannerActionButton({ action, onClick }: ScannerActionButtonProps) {
  const Icon = SCAN_ICONS[action.icon];
  const isFullWidth = action.span === "full";

  return (
    <Button
      onClick={() => onClick?.(action.id)}
      className={cn(
        "border text-xs font-medium",
        isFullWidth ? "w-full py-2.5" : "flex-col gap-1 py-3",
        action.toneClassName
      )}
    >
      <Icon className={isFullWidth ? "h-4 w-4" : "h-6 w-6"} aria-hidden="true" />
      {action.label}
    </Button>
  );
}

export function ScannerPanel({ onScan }: ScannerPanelProps) {
  const halfActions = SCANNER_ACTIONS.filter((action) => action.span === "half");
  const fullActions = SCANNER_ACTIONS.filter((action) => action.span === "full");

  return (
    <div className="space-y-4">
      <SidebarSectionHeading icon="radar" label="Manual Scanner" />

      <div className="grid grid-cols-2 gap-3">
        {halfActions.map((action) => (
          <ScannerActionButton key={action.id} action={action} onClick={onScan} />
        ))}
      </div>

      {fullActions.map((action) => (
        <ScannerActionButton key={action.id} action={action} onClick={onScan} />
      ))}
    </div>
  );
}