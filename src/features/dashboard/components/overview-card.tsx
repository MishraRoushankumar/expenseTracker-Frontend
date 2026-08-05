"use client";

/**
 * Displays a financial metric inside the dashboard overview.
 *
 * Used by:
 * - Financial Overview
 * - Future analytics widgets
 * - Reports
 */

import type { LucideIcon } from "lucide-react";

import { DashboardWidget } from "@/components/dashboard";
import { cn } from "@/lib/utils";

type OverviewCardProps = {
  title: string;
  value: React.ReactNode;
  icon: LucideIcon;
  description?: string;
  className?: string;
};

export function OverviewCard({
  title,
  value,
  icon: Icon,
  description,
  className,
}: OverviewCardProps) {
  return (
    <DashboardWidget className={cn("h-full", className)}>
      <div className="flex h-full flex-col justify-between gap-6">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm font-medium">{title}</span>

          <Icon className="text-muted-foreground size-6" />
        </div>

        <div className="space-y-1">
          <p className="text-3xl font-bold tracking-tight">{value}</p>

          {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
      </div>
    </DashboardWidget>
  );
}
