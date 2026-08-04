import type { LucideIcon } from "lucide-react";

export type DashboardAction = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  disabled?: boolean;
};
