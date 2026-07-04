"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/ui/select";
import { SearchField } from "@/components/ui/input";
import { SidebarSectionHeading } from "@/components/layout/sidebar/sidebar-section-heading";
import { WATCHLIST_OPTIONS } from "@/constants/market-data";

interface ControlsPanelProps {
  onRefresh?: () => void;
}

export function ControlsPanel({ onRefresh }: ControlsPanelProps) {
  const [selectedList, setSelectedList] = useState<string>(WATCHLIST_OPTIONS[0]);
  const [symbolQuery, setSymbolQuery] = useState("");

  return (
    <div className="space-y-4">
      <SidebarSectionHeading icon="tune" label="Controls" />

      <SelectField
        label="Select List"
        options={WATCHLIST_OPTIONS}
        value={selectedList}
        onChange={(event) => setSelectedList(event.target.value)}
      />

      <SearchField
        label="Symbol Search"
        placeholder="Ex: TRENT"
        value={symbolQuery}
        onChange={(event) => setSymbolQuery(event.target.value)}
      />

      <Button
        onClick={onRefresh}
        className="w-full border border-slate-200 bg-slate-100 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
      >
        <RefreshCw className="h-[18px] w-[18px]" aria-hidden="true" />
        Refresh Data
      </Button>
    </div>
  );
}