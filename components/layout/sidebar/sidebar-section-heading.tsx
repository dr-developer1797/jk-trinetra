import { SlidersHorizontal, Radar, type LucideIcon } from "lucide-react";

const SECTION_ICONS = {
  tune: SlidersHorizontal,
  radar: Radar,
} as const satisfies Record<string, LucideIcon>;

interface SidebarSectionHeadingProps {
  icon: keyof typeof SECTION_ICONS;
  label: string;
}

export function SidebarSectionHeading({ icon, label }: SidebarSectionHeadingProps) {
  const Icon = SECTION_ICONS[icon];

  return (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </div>
  );
}