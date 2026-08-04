import { ArrowRightLeft, PiggyBank, Receipt, Wallet } from "lucide-react";
import { DashboardEvent } from "../types/dashboard.types";

export const RECENT_ACTIVITY: DashboardEvent[] = [
  {
    id: "expense-1",
    title: "Expense Added",
    description: "Lunch at Café Coffee Day",
    timestamp: "10 minutes ago",
    icon: Receipt,
  },
  {
    id: "income-1",
    title: "Income Received",
    description: "Monthly stipend",
    timestamp: "2 hours ago",
    icon: Wallet,
  },
  {
    id: "budget-1",
    title: "Budget Created",
    description: "Food Budget",
    timestamp: "Yesterday",
    icon: PiggyBank,
  },
  {
    id: "transfer-1",
    title: "Transfer Completed",
    description: "Savings Account",
    timestamp: "2 days ago",
    icon: ArrowRightLeft,
  },
];
