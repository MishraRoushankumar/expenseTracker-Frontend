import { ArrowRightLeft, PiggyBank, Receipt, Wallet } from "lucide-react";

import type { DashboardAction } from "../types/dashboard.types";

export const QUICK_ACTIONS: DashboardAction[] = [
  {
    id: "expense",
    title: "Add Expense",
    description: "Record a new expense",
    icon: Receipt,
  },
  {
    id: "income",
    title: "Add Income",
    description: "Record a new income",
    icon: Wallet,
  },
  {
    id: "transfer",
    title: "Transfer",
    description: "Move money",
    icon: ArrowRightLeft,
    disabled: true,
  },
  {
    id: "budget",
    title: "New Budget",
    description: "Create a budget",
    icon: PiggyBank,
    disabled: true,
  },
];
