import { PiggyBank, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { OverviewCard } from "./overview-card";

const overviewItems = [
  {
    title: "Total Balance",
    value: "₹42,500",
    description: "+12% from last month",
    icon: Wallet,
  },
  {
    title: "Income",
    value: "₹78,000",
    description: "+8% this month",
    icon: TrendingUp,
  },
  {
    title: "Expenses",
    value: "₹35,500",
    description: "-5% this month",
    icon: TrendingDown,
  },
  {
    title: "Savings",
    value: "₹18,700",
    description: "24% savings rate",
    icon: PiggyBank,
  },
];

export function FinancialOverview() {
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

      {overviewItems.map((item) => (
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
