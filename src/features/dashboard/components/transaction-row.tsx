import { cn } from "@/lib/utils";

import type { DashboardTransaction } from "../types/dashboard.types";

type TransactionRowProps = DashboardTransaction;

export function TransactionRow({ title, category, amount, type, date }: TransactionRowProps) {
  const formattedAmount = `₹${amount.toLocaleString("en-IN")}`;

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-lg p-3 transition-colors duration-200",
        "hover:bg-muted/40 rounded-lg transition-colors duration-200",
      )}
    >
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{title}</p>

        <p className="text-muted-foreground text-xs">
          {category} • {date}
        </p>
      </div>

      <span
        className={cn(
          "shrink-0 text-sm font-semibold",
          type === "income" ? "text-green-600 dark:text-green-400" : "text-foreground",
        )}
      >
        {type === "income" ? "+" : "-"}
        {formattedAmount}
      </span>
    </div>
  );
}
