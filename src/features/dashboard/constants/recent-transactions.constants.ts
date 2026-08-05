import { DashboardTransaction } from "../types/dashboard.types";

export const RECENT_TRANSACTIONS: DashboardTransaction[] = [
  {
    id: "1",
    title: "Lunch",
    category: "Food",
    amount: 450,
    type: "expense",
    date: "Today",
  },
  {
    id: "2",
    title: "Salary",
    category: "Income",
    amount: 45000,
    type: "income",
    date: "Yesterday",
  },
  {
    id: "3",
    title: "Uber",
    category: "Transport",
    amount: 320,
    type: "expense",
    date: "Yesterday",
  },
  {
    id: "4",
    title: "Netflix",
    category: "Entertainment",
    amount: 649,
    type: "expense",
    date: "3 Aug",
  },
];
