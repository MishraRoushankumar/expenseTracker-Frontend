import { PiggyBank, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { OverviewCard } from "./overview-card";

import { FinancialOverviewData } from "../types/dashboard.types";

type FinancialOverviewProps = {
  summary: FinancialOverviewData;
};

export function FinancialOverview({ summary }: FinancialOverviewProps) {
  const cards = [
    {
      title: "Current Balance",
      value: summary.currentBalance,
      description: "Available balance",
      icon: Wallet,
      trend: "",
    },
    {
      title: "Total Income",
      value: summary.totalIncome,
      description: "Lifetime income",
      icon: TrendingUp,
      trend: "",
    },
    {
      title: "Total Expenses",
      value: summary.totalExpense,
      description: "Lifetime expenses",
      icon: TrendingDown,
      trend: "",
    },
    {
      title: "Monthly Savings",
      value: summary.monthlySavings,
      description: "This month",
      icon: PiggyBank,
      trend: "",
    },
  ];

  return (
    <section
      aria-labelledby="financial-overview-heading"
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
    >
      <h2 id="financial-overview-heading" className="sr-only text-xl font-semibold">
        Financial Overview
      </h2>

      <p className="text-muted-foreground sr-only text-sm">
        Track your financial health at a glance.
      </p>

      {cards.map((item) => (
        <OverviewCard
          key={item.title}
          title={item.title}
          value={item.value}
          description={item.description}
          icon={item.icon}
          className="min-h-44"
        />
      ))}
    </section>
  );
}
