import { ChartColumn, LayoutDashboard, Receipt, Settings, Tags, Wallet } from "lucide-react";
import { NavigationItem } from "../types/navigation.types";

export const sidebarNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: Receipt,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Tags,
  },
  {
    title: "Budgets",
    href: "/budgets",
    icon: Wallet,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: ChartColumn,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
] as const;
