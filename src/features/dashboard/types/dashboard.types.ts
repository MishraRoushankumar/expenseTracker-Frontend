import type { LucideIcon } from "lucide-react";

export type DashboardAction = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  disabled?: boolean;
};

export type DashboardEvent = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  icon: LucideIcon;
};

export type BudgetProgress = {
  id: string;
  category: string;
  spent: number;
  limit: number;
};

export type FinancialOverviewData = {
  currentBalance: number;
  totalIncome: number;
  totalExpense: number;
  monthlySavings: number;
  transactionCount: number;
};
